import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesRoot = path.resolve(__dirname, "../public/images");

const folderRules = {
  Logo: 400,
  HomeImprovement: 900,
  Fences: 900,
  Pergolas: 1200,
  Stairs: 1200,
  Claddings: 1200,
  "Projects-done": 1600,
};

let foundWebp = 0;
let processed = 0;
let skipped = 0;
let failed = 0;
let savedBytes = 0;

function getTargetWidth(filePath) {
  const relativePath = path.relative(imagesRoot, filePath);
  const parts = relativePath.split(path.sep);

  for (const part of parts) {
    if (folderRules[part]) {
      return folderRules[part];
    }
  }

  return 1200;
}

async function writeFileWithRetry(filePath, buffer, retries = 5) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await fs.writeFile(filePath, buffer);
      return;
    } catch (error) {
      const retryable =
        error.code === "EBUSY" ||
        error.code === "EPERM" ||
        error.code === "EACCES";

      if (retryable && attempt < retries) {
        console.log(
          `Locked, retry ${attempt}/${retries}: ${path.basename(filePath)}`
        );

        await new Promise((resolve) =>
          setTimeout(resolve, attempt * 500)
        );

        continue;
      }

      throw error;
    }
  }
}

async function processImage(fullPath) {
  if (path.extname(fullPath).toLowerCase() !== ".webp") {
    return;
  }

  foundWebp++;

  try {
    const targetWidth = getTargetWidth(fullPath);

    const inputBuffer = await fs.readFile(fullPath);

    const metadata = await sharp(inputBuffer).metadata();

    if (!metadata.width) {
      skipped++;
      return;
    }

    if (metadata.width <= targetWidth) {
      skipped++;

      console.log(
        `- Skip: ${path.relative(imagesRoot, fullPath)} ` +
        `(${metadata.width}px <= ${targetWidth}px)`
      );

      return;
    }

    const beforeSize = inputBuffer.length;

    const outputBuffer = await sharp(inputBuffer)
      .rotate()
      .resize({
        width: targetWidth,
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
        effort: 6,
      })
      .toBuffer();

    await writeFileWithRetry(fullPath, outputBuffer);

    const afterSize = outputBuffer.length;

    savedBytes += Math.max(beforeSize - afterSize, 0);
    processed++;

    console.log(
      `✓ ${path.relative(imagesRoot, fullPath)}
  ${metadata.width}px -> ${targetWidth}px
  ${(beforeSize / 1024).toFixed(1)} KB -> ${(afterSize / 1024).toFixed(1)} KB`
    );
  } catch (error) {
    failed++;

    console.error(
      `✗ Failed: ${path.relative(imagesRoot, fullPath)}`
    );

    console.error(error.message);
  }
}

async function processDirectory(directoryPath) {
  const entries = await fs.readdir(directoryPath, {
    withFileTypes: true,
  });

  for (const entry of entries) {
    const fullPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.toLowerCase() === "videos") {
        continue;
      }

      await processDirectory(fullPath);
      continue;
    }

    if (entry.isFile()) {
      await processImage(fullPath);
    }
  }
}

console.log(`Scanning ${imagesRoot}\n`);

await processDirectory(imagesRoot);

console.log("\n--------------------------------");
console.log(`WebP found : ${foundWebp}`);
console.log(`Processed  : ${processed}`);
console.log(`Skipped    : ${skipped}`);
console.log(`Failed     : ${failed}`);
console.log(
  `Saved      : ${(savedBytes / 1024 / 1024).toFixed(2)} MB`
);