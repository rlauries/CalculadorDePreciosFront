import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDirectory = path.resolve(__dirname, "../public/images");

const supportedExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png"
]);

const excludedDirectories = new Set([
  "Logo",
  "Icons"
]);

let convertedCount = 0;
let skippedCount = 0;
let failedCount = 0;

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function convertImage(inputPath) {
  const extension = path.extname(inputPath).toLowerCase();

  if (!supportedExtensions.has(extension)) {
    return;
  }

  const outputPath = inputPath.replace(
    new RegExp(`${extension}$`, "i"),
    ".webp"
  );

  if (await pathExists(outputPath)) {
    console.log(`Skipped: ${outputPath}`);
    skippedCount += 1;
    return;
  }

  try {
    await sharp(inputPath)
      .rotate()
      .webp({
        quality: 80,
        effort: 6
      })
      .toFile(outputPath);

    console.log(`Converted: ${inputPath}`);
    convertedCount += 1;
  } catch (error) {
    console.error(`Failed: ${inputPath}`);
    console.error(error);
    failedCount += 1;
  }
}

async function processDirectory(directoryPath) {
  const entries = await fs.readdir(directoryPath, {
    withFileTypes: true
  });

  for (const entry of entries) {
    const fullPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      if (excludedDirectories.has(entry.name)) {
        console.log(`Excluded directory: ${fullPath}`);
        continue;
      }

      await processDirectory(fullPath);
      continue;
    }

    if (entry.isFile()) {
      await convertImage(fullPath);
    }
  }
}

async function main() {
  if (!(await pathExists(imagesDirectory))) {
    throw new Error(
      `Images directory not found: ${imagesDirectory}`
    );
  }

  console.log(`Scanning: ${imagesDirectory}`);

  await processDirectory(imagesDirectory);

  console.log("\nConversion completed.");
  console.log(`Converted: ${convertedCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Failed: ${failedCount}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});