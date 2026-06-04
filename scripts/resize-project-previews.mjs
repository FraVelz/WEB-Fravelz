/**
 * Normaliza index.webp de proyectos activos a 1200×630 (cover, centrado).
 * Uso: node scripts/resize-project-previews.mjs
 */
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const { width, height } = { width: 1200, height: 630 };

const projectDirs = [
  "icfes-master",
  "todo-list",
  "frontend-mentor",
  "portfolio",
  "notas-de-hacking",
];

for (const dir of projectDirs) {
  const filePath = path.join(root, "src/assets/images-projects", dir, "index.webp");
  const input = await readFile(filePath);
  const output = await sharp(input)
    .resize(width, height, { fit: "cover", position: "centre" })
    .webp({ quality: 85 })
    .toBuffer();
  await writeFile(filePath, output);
  const meta = await sharp(output).metadata();
  console.log(`${dir}/index.webp → ${meta.width}x${meta.height}`);
}
