import sharp from "sharp";
import { stat } from "node:fs/promises";

// Render the complete SVG composition, including masks, text and embedded images.
// unlimited is needed for these trusted local SVGs with large base64 attributes.
for (const [source, destination] of [
  ["public/top-final.svg", "public/hero/top-final.webp"],
  ...[2, 3, 4].map((n) => [`public/hero/top-pic-${n}.svg`, `public/hero/top-pic-${n}.webp`]),
]) {
  const result = await sharp(source, { unlimited: true })
    .resize({ width: 1920 }).webp({ quality: 85 }).toFile(destination);
  console.log(`${destination}: ${(await stat(source)).size} -> ${result.size} bytes`);
}
