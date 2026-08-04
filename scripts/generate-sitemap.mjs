import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildDirectory = path.resolve(__dirname, "../build");
const sitemapPath = path.join(buildDirectory, "sitemap.xml");

const siteUrl = "https://www.lauriesweldinggroup.com"; // Production domain

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

if (!fs.existsSync(buildDirectory)) {
  throw new Error(
    'The "build" directory does not exist. Run the React build before generating the sitemap.'
  );
}

const urls = routes
  .map((route) => {
    const normalizedRoute = route === "/" ? "" : route;

    return `  <url>
    <loc>${siteUrl}${normalizedRoute}</loc>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemap, "utf8");

console.log(`Sitemap generated successfully: ${sitemapPath}`);