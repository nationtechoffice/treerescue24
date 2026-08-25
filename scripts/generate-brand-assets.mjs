#!/usr/bin/env node
/**
 * Tree Rescue 24 brand asset generator
 * Regenerates standalone print HTML in /public/brand from canonical NAP data.
 *
 * Usage: node scripts/generate-brand-assets.mjs
 */
import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const brandDir = join(root, "public", "brand");

const nap = {
  name: "Tree Rescue 24",
  phone: "(813) 595-7373",
  tel: "+18135957373",
  url: "treerescue24.com",
  street: "30836 Temple Stand Ave",
  city: "Wesley Chapel",
  region: "FL",
  zip: "33543",
  services: "24/7 Emergency Removal, Trimming, Stump Grinding",
};

const address = `${nap.street}, ${nap.city}, ${nap.region} ${nap.zip}`;

const receipt = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Tree Rescue 24 Customer Receipt</title>
  <style>
    @page { size: letter; margin: 0.5in; }
    body { font-family: Arial, Helvetica, sans-serif; color: #10231C; margin: 0; }
    header { display: flex; justify-content: space-between; border-bottom: 6px solid #FF6A00; padding-bottom: 12px; }
    h1 { margin: 0; color: #0B3D2E; }
    table { width: 100%; border-collapse: collapse; margin-top: 18px; }
    th { background: #06261C; color: #F6F1E8; text-align: left; padding: 8px; }
    td { border-bottom: 1px solid #d5d0c6; height: 36px; padding: 8px; }
    .totals { width: 240px; margin-left: auto; }
    .sign { display: flex; gap: 40px; margin-top: 48px; }
    .sign p { flex: 1; border-top: 1px solid #10231C; padding-top: 8px; }
    footer { margin-top: 28px; font-size: 12px; color: #14532D; }
  </style>
</head>
<body>
  <header>
    <div>
      <img src="./treerescue24-logo.svg" alt="Tree Rescue 24" width="96" height="96" />
      <h1>${nap.name}</h1>
      <p>${address}<br />${nap.phone} · ${nap.url}<br />Open 24 hours, 7 days a week</p>
    </div>
    <div>
      <h2>Customer Receipt</h2>
      <p>Invoice # ____________<br />Date ____________</p>
    </div>
  </header>
  <p><strong>Bill to:</strong> ________________________________<br />
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
    </tbody>
  </table>
  <div class="totals">
    <p>Subtotal $________</p>
    <p>Tax $________</p>
    <p><strong>Total $________</strong></p>
  </div>
  <p>Payment: Cash / Check / Card &nbsp; Last 4: ____</p>
  <div class="sign">
    <p>Customer signature</p>
    <p>Authorized representative, ${nap.name}</p>
  </div>
  <footer>Thank you for choosing ${nap.name}. 24/7 dispatch ${nap.phone}. Google verification address: ${address}.</footer>
</body>
</html>
`;

const card = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Tree Rescue 24 Business Card — 3.5 × 2 in</title>
  <style>
    @page { size: 3.5in 2in; margin: 0; }
    html, body { margin: 0; padding: 0; }
    .card {
      width: 3.5in; height: 2in;
      display: flex; overflow: hidden;
      background: #06261C; color: #F6F1E8;
      font-family: Arial, Helvetica, sans-serif;
      border: 0.04in solid #FF6A00;
      box-sizing: border-box;
    }
    .rail { width: 1.15in; background: #0B3D2E; display: flex; align-items: center; justify-content: center; }
    .copy { padding: 0.12in 0.14in; display: flex; flex-direction: column; justify-content: center; }
    h1 { font-size: 15pt; margin: 0; letter-spacing: 0.04em; }
    .services { font-size: 6.5pt; color: #F5C518; text-transform: uppercase; letter-spacing: 0.08em; margin-top: 4px; }
    .phone { font-size: 13pt; font-weight: 800; color: #FF6A00; margin-top: 8px; }
    .web { font-size: 8pt; }
    .addr { font-size: 6.5pt; opacity: 0.85; margin-top: 4px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="rail"><img src="./treerescue24-logo.svg" alt="" width="88" height="88" /></div>
    <div class="copy">
      <h1>TREE RESCUE 24</h1>
      <div class="services">${nap.services}</div>
      <div class="phone">${nap.phone}</div>
      <div class="web">${nap.url}</div>
      <div class="addr">${address}</div>
    </div>
  </div>
</body>
</html>
`;

const magnet = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Tree Rescue 24 Magnetic Door Sign — 24 × 12 in</title>
  <style>
    @page { size: 24in 12in; margin: 0; }
    html, body { margin: 0; padding: 0; }
    .sign {
      width: 24in; height: 12in;
      display: flex; overflow: hidden;
      background: #06261C; color: #F6F1E8;
      font-family: Impact, "Arial Black", Arial, sans-serif;
      border: 0.18in solid #FF6A00;
      box-sizing: border-box;
    }
    .rail { width: 6.8in; background: #0B3D2E; display: flex; align-items: center; justify-content: center; }
    .copy { padding: 0.7in 0.8in; display: flex; flex-direction: column; justify-content: center; }
    h1 { font-size: 170pt; margin: 0; line-height: 0.9; letter-spacing: 0.02em; }
    .phone { font-size: 140pt; color: #FF6A00; margin-top: 0.15in; line-height: 0.9; }
    .services { font-size: 28pt; color: #F5C518; letter-spacing: 0.12em; text-transform: uppercase; margin-top: 0.25in; font-family: Arial, sans-serif; }
    .meta { font-size: 22pt; margin-top: 0.2in; font-family: Arial, sans-serif; }
    .addr { font-size: 16pt; opacity: 0.8; font-family: Arial, sans-serif; }
  </style>
</head>
<body>
  <div class="sign">
    <div class="rail"><img src="./treerescue24-logo.svg" alt="Tree Rescue 24" width="560" height="560" /></div>
    <div class="copy">
      <h1>TREE RESCUE 24</h1>
      <div class="phone">${nap.phone}</div>
      <div class="services">${nap.services}</div>
      <div class="meta">${nap.url} · Tampa &amp; Wesley Chapel</div>
      <div class="addr">${address}</div>
    </div>
  </div>
</body>
</html>
`;

await mkdir(brandDir, { recursive: true });
await writeFile(join(brandDir, "receipt-template.html"), receipt);
await writeFile(join(brandDir, "business-card.html"), card);
await writeFile(join(brandDir, "magnetic-sign.html"), magnet);

const pngSource = "/opt/cursor/artifacts/assets/treerescue24-logo.png";
try {
  await copyFile(pngSource, join(brandDir, "treerescue24-logo.png"));
} catch {
  // PNG already committed in public/brand
}

console.log("Wrote print-ready brand assets to public/brand/");
console.log(" - treerescue24-logo.svg / treerescue24-logo.png");
console.log(" - receipt-template.html (US Letter)");
console.log(" - business-card.html (3.5 × 2 in)");
console.log(" - magnetic-sign.html (24 × 12 in)");
