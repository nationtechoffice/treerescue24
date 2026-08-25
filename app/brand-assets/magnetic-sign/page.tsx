import type { Metadata } from "next";
import { CanvasExport } from "@/components/CanvasExport";
import { PrintButton } from "@/components/PrintButton";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Magnetic Vehicle Door Sign",
  robots: { index: false, follow: false },
};

export default function MagneticSignPage() {
  return (
    <div className="px-4 py-8">
      <div className="mb-4 flex items-center justify-between print:hidden">
        <p className="text-sm text-forest-800">
          Designed at 24 × 12 in (2:1). Send this file to a sign shop at 300 DPI / vector.
        </p>
        <div className="flex gap-3">
          <CanvasExport kind="magnet" />
          <PrintButton />
        </div>
      </div>
      <div className="sign mx-auto flex aspect-[2/1] w-full max-w-[960px] overflow-hidden rounded-md border-[6px] border-orange-500 bg-forest-950 text-cream print:max-w-none">
        <div className="flex w-[28%] items-center justify-center bg-forest-900">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/treerescue24-logo.svg" alt="" className="h-[78%] w-auto" />
        </div>
        <div className="flex flex-1 flex-col justify-center px-[4%] py-[4%]">
          <p className="font-display text-[clamp(28px,6vw,72px)] leading-none font-extrabold tracking-wide">
            TREE RESCUE 24
          </p>
          <p className="mt-2 font-display text-[clamp(26px,5.2vw,64px)] leading-none font-extrabold text-orange-400">
            {business.phoneDisplay}
          </p>
          <p className="mt-3 font-display text-[clamp(14px,2.3vw,28px)] tracking-[0.12em] text-gold uppercase">
            24/7 Emergency Removal · Trimming · Stump Grinding
          </p>
          <p className="mt-2 text-[clamp(12px,1.8vw,22px)]">
            treerescue24.com · Tampa & Wesley Chapel
          </p>
          <p className="text-[clamp(10px,1.4vw,16px)] text-cream/70">{fullAddress}</p>
        </div>
      </div>
      <style>{`
        @media print {
          @page { size: 24in 12in; margin: 0; }
        }
      `}</style>
    </div>
  );
}
