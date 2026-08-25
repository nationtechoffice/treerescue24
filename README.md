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
- `/service-areas` hub
- City hubs: `/tampa`, `/wesley-chapel`, `/wesley-chapel-south`, `/westchase`, `/lutz`, `/land-o-lakes`, `/new-tampa`, `/zephyrhills`, `/dade-city`
- City + service landings: `/{city}/{service}` (e.g. `/wesley-chapel/emergency-tree-removal`, `/tampa/tree-trimming`, `/lutz/stump-grinding`)

## SEO / indexing

- JSON-LD `EmergencyService` + `HomeAndConstructionBusiness` in the root layout
- `FAQPage` schema on service and city pages
- Automated `sitemap.xml` and `robots.txt`
- IndexNow key file at `/e8c4f1a2b3d94c6e9a7f0d1c2b3a4e5f.txt`
- POST `/api/indexnow` (optional `Authorization: Bearer CRON_SECRET`)
- `llms.txt` entity file for AI crawlers

Set `GOOGLE_SITE_VERIFICATION` for Search Console HTML-tag verification.

## Offline print images (not on the website)

PNG files for Google verification, receipts, cards, and truck magnets live in `print-assets/` and are **not** served on treerescue24.com.

- `print-assets/treerescue24-logo.png`
- `print-assets/treerescue24-logo.svg`
- `print-assets/treerescue24-receipt.png`
- `print-assets/treerescue24-business-card.png`
- `print-assets/treerescue24-magnetic-sign.png`
- `print-assets/hero-emergency-crane.png` and `print-assets/hero-arborists.png` (exported from homepage heroes)

Regenerate:

```bash
npm run generate:print-images
npm run generate:hero-images
```

Homepage heroes served on the site live in `public/images/`.

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```
