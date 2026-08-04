import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const sourceDirectory = path.join(projectRoot, "src");
const publicDirectory = path.join(projectRoot, "public");

const supportedCodeExtensions = new Set([
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".css",
  ".scss"
]);

const writeChanges = process.argv.includes("--write");

let scannedFiles = 0;
let modifiedFiles = 0;
let replacementCount = 0;
let missingWebpCount = 0;

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function normalizeImagePath(imagePath) {
  const cleanPath = imagePath
    .split("?")[0]
    .split("#")[0]
    .replace(/^https?:\/\/[^/]+/i, "")
    .replace(/^\/+/, "");

  return cleanPath.startsWith("images/")
    ? cleanPath
    : null;
}

async function replaceImageReferences(filePath) {
  const originalContent = await fs.readFile(filePath, "utf8");

  /*
   * Detecta referencias como:
   *
   * /images/example/photo.png
   * images/example/photo.jpg
   *
   * No cambia URLs externas ni archivos fuera de public/images.
   */
  const imageRegex =
    /(["'`(])((?:\/)?images\/[^"'`()\s]+?)\.(png|jpe?g)(\?[^"'`()\s]*)?(["'`)])/gi;

  const matches = [...originalContent.matchAll(imageRegex)];

  if (matches.length === 0) {
    return;
  }

  let updatedContent = originalContent;
  let fileReplacementCount = 0;

  for (const match of matches) {
    const fullMatch = match[0];
    const openingCharacter = match[1];
    const imagePathWithoutExtension = match[2];
    const queryString = match[4] ?? "";
    const closingCharacter = match[5];

    const originalImagePath = `${imagePathWithoutExtension}.${match[3]}`;
    const normalizedPath = normalizeImagePath(originalImagePath);

    if (!normalizedPath) {
      continue;
    }

    const relativeWebpPath = normalizedPath.replace(
      /\.(png|jpe?g)$/i,
      ".webp"
    );

    const absoluteWebpPath = path.join(
      publicDirectory,
      relativeWebpPath
    );

    if (!(await pathExists(absoluteWebpPath))) {
      console.warn(
        `WebP not found: ${relativeWebpPath}\n  Referenced by: ${filePath}`
      );

      missingWebpCount += 1;
      continue;
    }

    const newReference =
      `${openingCharacter}` +
      `${imagePathWithoutExtension}.webp` +
      `${queryString}` +
      `${closingCharacter}`;

    updatedContent = updatedContent.replace(
      fullMatch,
      newReference
    );

    fileReplacementCount += 1;
  }

  if (fileReplacementCount === 0) {
    return;
  }

  modifiedFiles += 1;
  replacementCount += fileReplacementCount;
  let failedCount = 0;

  if (writeChanges) {
    try {
      await fs.writeFile(filePath, updatedContent, "utf8");

      console.log(
        `Updated: ${filePath} (${fileReplacementCount} replacements)`
      );
    } catch (error) {
      console.error(`Could not update: ${filePath}`);
      console.error(error);

      failedCount += 1;
      return;
    }
  }
}

async function scanDirectory(directoryPath) {
  const entries = await fs.readdir(directoryPath, {
    withFileTypes: true
  });

  for (const entry of entries) {
    const fullPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      await scanDirectory(fullPath);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();

    if (!supportedCodeExtensions.has(extension)) {
      continue;
    }

    scannedFiles += 1;
    await replaceImageReferences(fullPath);
  }
}

async function main() {
  if (!(await pathExists(sourceDirectory))) {
    throw new Error(
      `Source directory not found: ${sourceDirectory}`
    );
  }

  console.log(
    writeChanges
      ? "Applying WebP reference changes...\n"
      : "Dry run only. No files will be modified.\n"
  );

  await scanDirectory(sourceDirectory);

  console.log("\nCompleted.");
  console.log(`Files scanned: ${scannedFiles}`);
  console.log(`Files affected: ${modifiedFiles}`);
  console.log(`References found: ${replacementCount}`);
  console.log(`Missing WebP files: ${missingWebpCount}`);
  console.log(`Failed files: ${failedCount}`);

  if (!writeChanges) {
    console.log(
      "\nRun again with --write to apply the changes."
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});