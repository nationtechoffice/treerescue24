import type { Metadata } from "next";
import { CanvasExport } from "@/components/CanvasExport";
import { PrintButton } from "@/components/PrintButton";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Business Card",
  robots: { index: false, follow: false },
};

export default function BusinessCardPage() {
  return (
    <div className="px-4 py-10">
      <div className="mb-6 flex items-center justify-between print:hidden">
        <p className="text-sm text-forest-800">3.5 × 2 in · Print at actual size, no scaling</p>
        <div className="flex gap-3">
          <CanvasExport kind="card" />
          <PrintButton />
        </div>
      </div>
      <div className="card mx-auto flex h-[2in] w-[3.5in] overflow-hidden rounded-[8px] border-2 border-forest-950 bg-forest-950 text-cream shadow-lg print:rounded-none print:shadow-none">
        <div className="flex w-[1.15in] items-center justify-center bg-forest-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/treerescue24-logo.svg" alt="" width={92} height={92} />
        </div>
        <div className="flex flex-1 flex-col justify-center px-3 py-2">
          <p className="font-display text-[18px] leading-none font-bold tracking-wide">TREE RESCUE 24</p>
          <p className="mt-1 text-[8px] tracking-[0.14em] text-gold uppercase">
            24/7 Emergency Removal · Trimming · Stump Grinding
          </p>
          <p className="mt-2 font-display text-[15px] font-bold text-orange-400">
            {business.phoneDisplay}
          </p>
          <p className="text-[9px]">treerescue24.com</p>
          <p className="mt-1 text-[8px] leading-3 text-cream/80">{fullAddress}</p>
        </div>
      </div>
      <style>{`
        @media print {
          @page { size: 3.5in 2in; margin: 0; }
          body { background: white; }
        }
      `}</style>
    </div>
  );
}
