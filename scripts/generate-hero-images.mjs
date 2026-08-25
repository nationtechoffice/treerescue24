#!/usr/bin/env node
/**
 * Exports print-ready homepage hero graphics from the website image sources.
 *
 * Website (optimized by next/image at build):
 *   public/images/hero-emergency-crane.png
 *   public/images/hero-arborists.png
 *
 * Print-ready copies (offline, not routed as website pages):
 *   print-assets/hero-emergency-crane.png
 *   print-assets/hero-arborists.png
 *
 * Prompts used to generate the photographs (regenerate in the image tool if needed):
 *   CRANE — Photorealistic dusk scene in Wesley Chapel, Florida: a heavy emergency
 *   tree-removal crane and boom truck beside a two-story suburban home, licensed
 *   arborists in safety gear sectioning a fallen live oak off a roof, wet pavement,
 *   work lights, no readable text, no logos, cinematic documentary photo.
 *   ARBORISTS — Photorealistic daylight photo of two professional arborists in
 *   helmets and climbing gear trimming a mature live oak over a Tampa Bay home,
 *   clean residential yard after storm prep, chipper in driveway, no text, no logos.
 */
import { copyFile, mkdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = join(root, "public", "images");
const outDir = join(root, "print-assets");

const files = ["hero-emergency-crane.png", "hero-arborists.png"];

async function main() {
  await mkdir(outDir, { recursive: true });
  for (const file of files) {
    const source = join(srcDir, file);
    const dest = join(outDir, file);
    const info = await stat(source);
    if (info.size < 50_000) {
      throw new Error(`${file} looks too small to be a hero photograph (${info.size} bytes)`);
    }
    await copyFile(source, dest);
    console.log(`Wrote ${dest} (${info.size} bytes)`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
