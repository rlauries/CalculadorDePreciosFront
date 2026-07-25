import { chromium } from "playwright";
import { createServer } from "node:http";
import {
  readFile,
  writeFile,
  mkdir,
  stat,
} from "node:fs/promises";
import path from "node:path";

const buildDirectory = path.resolve("build");
const port = 4174;

/**
 * Agrega aquí todas las rutas que quieres convertir
 * en archivos HTML rastreables.
 */
const routes = [
  "/",
  "/gallery",
  "/contactus",

  "/pergolas",
  "/stairs",
  "/fences",
  "/claddings",

  "/stairs/downtown-miami",
  "/stairs/nick-custom-staircase",
  "/claddings/justin-hollywood-cladding",
];

function getContentType(filePath) {
  const extension = path.extname(filePath).toLowerCase();

  const contentTypes = {
    ".html": "text/html; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".mp4": "video/mp4",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };

  return contentTypes[extension] ?? "application/octet-stream";
}

async function isFile(filePath) {
  try {
    const fileStats = await stat(filePath);
    return fileStats.isFile();
  } catch {
    return false;
  }
}

const server = createServer(async (request, response) => {
  try {
    const requestUrl = new URL(
      request.url ?? "/",
      `http://localhost:${port}`,
    );

    const pathname = decodeURIComponent(requestUrl.pathname);

    let requestedFile = path.join(buildDirectory, pathname);

    if (pathname.endsWith("/")) {
      requestedFile = path.join(requestedFile, "index.html");
    }

    if (!(await isFile(requestedFile))) {
      requestedFile = path.join(buildDirectory, "index.html");
    }

    const fileContent = await readFile(requestedFile);

    response.writeHead(200, {
      "Content-Type": getContentType(requestedFile),
    });

    response.end(fileContent);
  } catch (error) {
    console.error("Static server error:", error);

    response.writeHead(500, {
      "Content-Type": "text/plain",
    });

    response.end("Internal server error");
  }
});

await new Promise((resolve) => {
  server.listen(port, "127.0.0.1", resolve);
});

console.log(`Temporary server running on port ${port}`);

const browser = await chromium.launch({
  headless: true,
});

try {
  for (const route of routes) {
    const page = await browser.newPage();

    console.log(`Pre-rendering ${route}`);

    page.on("console", (message) => {
      if (message.type() === "error") {
        console.error(
          `Browser error on ${route}:`,
          message.text(),
        );
      }
    });

    page.on("pageerror", (error) => {
      console.error(`React error on ${route}:`, error.message);
    });

    await page.goto(`http://127.0.0.1:${port}${route}`, {
      waitUntil: "networkidle",
      timeout: 60000,
    });

    await page.waitForSelector("#root", {
      timeout: 30000,
    });

    /*
     * Confirma que React realmente colocó contenido
     * dentro del div root.
     */
    await page.waitForFunction(() => {
      const root = document.getElementById("root");
      return root && root.children.length > 0;
    });

    const html = await page.content();

    const cleanRoute = route.replace(/^\/|\/$/g, "");

    const routeDirectory =
      route === "/"
        ? buildDirectory
        : path.join(buildDirectory, cleanRoute);

    await mkdir(routeDirectory, {
      recursive: true,
    });

    const outputFile = path.join(
      routeDirectory,
      "index.html",
    );

    await writeFile(outputFile, html, "utf8");

    console.log(`Created ${outputFile}`);

    await page.close();
  }

  console.log("Pre-rendering completed successfully.");
} catch (error) {
  console.error("Pre-rendering failed:", error);
  process.exitCode = 1;
} finally {
  await browser.close();

  await new Promise((resolve) => {
    server.close(resolve);
  });
}