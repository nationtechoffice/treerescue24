# Tree Rescue 24

Premier 24/7 emergency tree service, tree removal, and land care for Tampa, Wesley Chapel, and surrounding Hillsborough/Pasco County areas.

- **Phone:** (813) 595-7373
- **Address:** 30836 Temple Stand Ave, Wesley Chapel, FL 33543
- **Site:** [treerescue24.com](https://treerescue24.com)

## Local pages

- `/` Homepage
- `/emergency-tree-removal`
- `/tree-trimming`
- `/stump-grinding`
- `/land-clearing`
- `/service-areas` plus city landings for Tampa, Wesley Chapel, Westchase, Lutz, Land O' Lakes, New Tampa, and Zephyrhills

## SEO / indexing

- JSON-LD `EmergencyService` + `HomeAndConstructionBusiness` in the root layout
- `FAQPage` schema on service and city pages
- Automated `sitemap.xml` and `robots.txt`
- IndexNow key file at `/e8c4f1a2b3d94c6e9a7f0d1c2b3a4e5f.txt`
- POST `/api/indexnow` (optional `Authorization: Bearer CRON_SECRET`)
- `llms.txt` entity file for AI crawlers

Set `GOOGLE_SITE_VERIFICATION` for Search Console HTML-tag verification.

## Brand assets

Print-ready files live in `public/brand/` and preview at `/brand-assets`.

```bash
npm run generate:assets
```

Outputs:

- `treerescue24-logo.svg` / `treerescue24-logo.png`
- `receipt-template.html` (US Letter)
- `business-card.html` (3.5 × 2 in)
- `magnetic-sign.html` (24 × 12 in)

Canvas PNG export is available on the business card and magnetic sign pages.

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```
