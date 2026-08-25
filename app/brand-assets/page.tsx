import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Brand Assets",
  robots: { index: false, follow: false },
  alternates: { canonical: "/brand-assets" },
};

const assets = [
  {
    href: "/brand/treerescue24-logo.svg",
    title: "Primary logo (SVG)",
    body: "Print-ready vector mark for vehicles, cards, and Google verification photos.",
  },
  {
    href: "/brand/treerescue24-logo.png",
    title: "Primary logo (PNG)",
    body: "High-resolution raster for web, email, and marketplace listings.",
  },
  {
    href: "/brand-assets/receipt",
    title: "Customer receipt",
    body: "Letter-size branded invoice with NAP, itemized lines, total, and signature block.",
  },
  {
    href: "/brand-assets/business-card",
    title: "Business card",
    body: "Standard 3.5 × 2 in layout with logo, phone, website, and core services.",
  },
  {
    href: "/brand-assets/magnetic-sign",
    title: "Magnetic vehicle door sign",
    body: "24 × 12 in high-visibility door magnet for Tampa and Wesley Chapel jobs.",
  },
  {
    href: "/brand/receipt-template.html",
    title: "Standalone receipt HTML",
    body: "Open locally or send to a printer without running the Next.js app.",
  },
  {
    href: "/brand/business-card.html",
    title: "Standalone business card HTML",
    body: "Print-ready 3.5 × 2 in front layout.",
  },
  {
    href: "/brand/magnetic-sign.html",
    title: "Standalone magnetic sign HTML",
    body: "Large-format 24 × 12 in layout for sign shops.",
  },
];

export default function BrandAssetsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl font-bold text-forest-950">Brand asset studio</h1>
          <p className="mt-2 max-w-2xl text-forest-800">
            Print-ready Tree Rescue 24 files for Google Business verification, truck magnets,
            receipts, and cards. Use Print / Save PDF on each layout.
          </p>
        </div>
        <PrintButton label="Print this index" />
      </div>
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {assets.map((asset) => (
          <li key={asset.href} className="rounded-2xl border border-forest-900/10 bg-white p-6">
            <h2 className="font-display text-2xl font-bold text-forest-950">{asset.title}</h2>
            <p className="mt-2 text-sm text-forest-800">{asset.body}</p>
            <Link href={asset.href} className="mt-4 inline-block font-bold text-orange-600">
              Open {asset.title} →
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
