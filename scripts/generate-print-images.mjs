#!/usr/bin/env node
/**
 * Renders Tree Rescue 24 print files as PNG images (not website pages).
 * Output: print-assets/*.png
 */
import { execFile } from "node:child_process";
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "print-assets");
const tmpDir = join("/tmp", "treerescue24-print");
const logoPng = join(root, "public", "brand", "treerescue24-logo.png");
const logoSvg = join(root, "public", "brand", "treerescue24-logo.svg");
const logoFile = `file://${logoPng}`;

const nap = {
  name: "Tree Rescue 24",
  phone: "(813) 595-7373",
  url: "treerescue24.com",
  street: "30836 Temple Stand Ave",
  cityline: "Wesley Chapel, FL 33543",
  address: "30836 Temple Stand Ave, Wesley Chapel, FL 33543",
  services: "24/7 Emergency Removal  ·  Trimming  ·  Stump Grinding",
};

const chrome = "google-chrome";

const cardHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
  html, body { margin: 0; padding: 0; width: 1050px; height: 600px; overflow: hidden; }
  .card {
    width: 1050px; height: 600px; display: flex;
    background: #06261C; color: #F6F1E8;
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box; border: 16px solid #FF6A00;
  }
  .rail { width: 340px; background: #0B3D2E; display: flex; align-items: center; justify-content: center; }
  .rail img { width: 260px; height: 260px; }
  .copy { padding: 48px 40px; display: flex; flex-direction: column; justify-content: center; }
  h1 { font-size: 54px; margin: 0; letter-spacing: 1px; }
  .services { font-size: 18px; color: #F5C518; text-transform: uppercase; letter-spacing: 1px; margin-top: 12px; }
  .phone { font-size: 42px; font-weight: 800; color: #FF6A00; margin-top: 22px; }
  .web { font-size: 24px; margin-top: 8px; }
  .addr { font-size: 18px; opacity: 0.85; margin-top: 10px; }
</style>
</head>
<body>
  <div class="card">
    <div class="rail"><img src="${logoFile}" alt="" /></div>
    <div class="copy">
      <h1>TREE RESCUE 24</h1>
      <div class="services">${nap.services}</div>
      <div class="phone">${nap.phone}</div>
      <div class="web">${nap.url}</div>
      <div class="addr">${nap.address}</div>
    </div>
  </div>
</body>
</html>`;

const magnetHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
  html, body { margin: 0; padding: 0; width: 3600px; height: 1800px; overflow: hidden; }
  .sign {
    width: 3600px; height: 1800px; display: flex;
    background: #06261C; color: #F6F1E8;
    font-family: Arial Black, Arial, Helvetica, sans-serif;
    box-sizing: border-box; border: 36px solid #FF6A00;
  }
  .rail { width: 1020px; background: #0B3D2E; display: flex; align-items: center; justify-content: center; }
  .rail img { width: 820px; height: 820px; }
  .copy { padding: 120px 100px; display: flex; flex-direction: column; justify-content: center; }
  h1 { font-size: 210px; margin: 0; line-height: 0.92; letter-spacing: 2px; }
  .phone { font-size: 170px; color: #FF6A00; margin-top: 24px; line-height: 0.95; font-weight: 800; }
  .services { font-size: 48px; color: #F5C518; letter-spacing: 4px; text-transform: uppercase; margin-top: 40px; font-family: Arial, sans-serif; }
  .meta { font-size: 44px; margin-top: 28px; font-family: Arial, sans-serif; }
  .addr { font-size: 32px; opacity: 0.8; margin-top: 12px; font-family: Arial, sans-serif; }
</style>
</head>
<body>
  <div class="sign">
    <div class="rail"><img src="${logoFile}" alt="" /></div>
    <div class="copy">
      <h1>TREE RESCUE 24</h1>
      <div class="phone">${nap.phone}</div>
      <div class="services">${nap.services}</div>
      <div class="meta">${nap.url}  ·  Tampa &amp; Wesley Chapel</div>
      <div class="addr">${nap.address}</div>
    </div>
  </div>
</body>
</html>`;

const receiptHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<style>
  html, body { margin: 0; padding: 0; width: 1275px; height: 1650px; overflow: hidden; background: #fff; }
  body { font-family: Arial, Helvetica, sans-serif; color: #10231C; }
  .page { width: 1275px; height: 1650px; box-sizing: border-box; padding: 64px 72px; }
  header { display: flex; justify-content: space-between; border-bottom: 10px solid #FF6A00; padding-bottom: 24px; }
  header img { width: 160px; height: 160px; }
  h1 { margin: 0; color: #0B3D2E; font-size: 42px; }
  h2 { margin: 0 0 12px; font-size: 36px; color: #0B3D2E; }
  .meta { font-size: 20px; line-height: 1.5; }
  .bill { margin-top: 36px; font-size: 22px; line-height: 2; }
  table { width: 100%; border-collapse: collapse; margin-top: 28px; font-size: 20px; }
  th { background: #06261C; color: #F6F1E8; text-align: left; padding: 14px; }
  td { border-bottom: 1px solid #d5d0c6; height: 58px; padding: 10px 14px; }
  .totals { width: 360px; margin-left: auto; margin-top: 24px; font-size: 22px; }
  .totals p { display: flex; justify-content: space-between; border-bottom: 1px solid #d5d0c6; padding: 10px 0; margin: 0; }
  .sign { display: flex; gap: 48px; margin-top: 80px; }
  .sign p { flex: 1; border-top: 2px solid #10231C; padding-top: 12px; font-size: 18px; }
  footer { margin-top: 48px; font-size: 16px; color: #14532D; }
</style>
</head>
<body>
  <div class="page">
    <header>
      <div>
        <img src="${logoFile}" alt="Tree Rescue 24" />
        <h1>${nap.name}</h1>
        <p class="meta">${nap.address}<br />${nap.phone} · ${nap.url}<br />Open 24 hours, 7 days a week</p>
      </div>
      <div>
        <h2>Customer Receipt</h2>
        <p class="meta">Invoice # ____________<br />Date ____________</p>
      </div>
    </header>
    <p class="bill"><strong>Bill to:</strong> ________________________________________<br />
    <strong>Service address:</strong> ________________________________</p>
    <table>
      <thead>
        <tr><th>Service</th><th>Qty</th><th>Rate</th><th>Amount</th></tr>
      </thead>
      <tbody>
        <tr><td>Emergency tree removal / make-safe</td><td></td><td></td><td></td></tr>
        <tr><td>Tree trimming / canopy work</td><td></td><td></td><td></td></tr>
        <tr><td>Stump grinding</td><td></td><td></td><td></td></tr>
        <tr><td>Land clearing / debris haul-away</td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td></tr>
        <tr><td></td><td></td><td></td><td></td></tr>
      </tbody>
    </table>
    <div class="totals">
      <p><span>Subtotal</span><span>$________</span></p>
      <p><span>Tax</span><span>$________</span></p>
      <p><strong>Total</strong><strong>$________</strong></p>
    </div>
    <p class="bill">Payment: Cash / Check / Card &nbsp;&nbsp; Last 4: ______</p>
    <div class="sign">
      <p>Customer signature</p>
      <p>Authorized representative, ${nap.name}</p>
    </div>
    <footer>Thank you for choosing ${nap.name}. 24/7 dispatch ${nap.phone}. Google verification address: ${nap.address}.</footer>
  </div>
</body>
</html>`;

async function shot(htmlName, html, pngName, width, height) {
  const htmlPath = join(tmpDir, htmlName);
  await writeFile(htmlPath, html);
  const outPath = join(outDir, pngName);
  await execFileAsync(chrome, [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    `--user-data-dir=${join(tmpDir, "chrome-profile")}`,
    `--window-size=${width},${height}`,
    `--screenshot=${outPath}`,
    `file://${htmlPath}`,
  ], { timeout: 60000 });
  console.log("wrote", pngName);
}

await mkdir(outDir, { recursive: true });
await mkdir(tmpDir, { recursive: true });
await copyFile(logoPng, join(outDir, "treerescue24-logo.png"));
await copyFile(logoSvg, join(outDir, "treerescue24-logo.svg"));
await shot("card.html", cardHtml, "treerescue24-business-card.png", 1050, 600);
await shot("magnet.html", magnetHtml, "treerescue24-magnetic-sign.png", 3600, 1800);
await shot("receipt.html", receiptHtml, "treerescue24-receipt.png", 1275, 1650);
console.log("Print images are in print-assets/ (not published on the website).");
