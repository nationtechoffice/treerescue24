import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import { business, fullAddress } from "@/lib/business";

export const metadata: Metadata = {
  title: "Customer Receipt Template",
  robots: { index: false, follow: false },
};

export default function ReceiptPage() {
  const lines = [
    { service: "Emergency tree removal / make-safe", qty: "", rate: "", amount: "" },
    { service: "Tree trimming / canopy work", qty: "", rate: "", amount: "" },
    { service: "Stump grinding", qty: "", rate: "", amount: "" },
    { service: "Land clearing / debris haul-away", qty: "", rate: "", amount: "" },
    { service: "", qty: "", rate: "", amount: "" },
  ];

  return (
    <div className="mx-auto max-w-[8.5in] bg-white px-6 py-8 text-ink print:max-w-none print:px-0 print:py-0">
      <div className="mb-6 flex items-center justify-between print:hidden">
        <p className="text-sm text-forest-800">Letter-size receipt · Print at 100%</p>
        <PrintButton />
      </div>
      <header className="flex items-start justify-between gap-6 border-b-4 border-orange-500 pb-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/treerescue24-logo.svg" alt="Tree Rescue 24" width={92} height={92} />
        <div className="text-right">
          <h1 className="font-display text-3xl font-bold text-forest-950">Customer Receipt</h1>
          <p className="mt-1 text-sm">
            Invoice #<span className="inline-block min-w-24 border-b border-forest-900/30">&nbsp;</span>
          </p>
          <p className="text-sm">
            Date <span className="inline-block min-w-24 border-b border-forest-900/30">&nbsp;</span>
          </p>
        </div>
      </header>
      <section className="mt-4 grid gap-4 text-sm md:grid-cols-2">
        <div>
          <p className="font-display text-lg font-bold text-forest-950">{business.name}</p>
          <p>{fullAddress}</p>
          <p>{business.phoneDisplay}</p>
          <p>{business.url.replace("https://", "")}</p>
          <p>{business.hoursLabel}</p>
        </div>
        <div>
          <p className="font-bold">Bill to</p>
          <p className="mt-2 border-b border-forest-900/30 pb-6">Customer name</p>
          <p className="mt-3 border-b border-forest-900/30 pb-6">Service address / city</p>
        </div>
      </section>
      <table className="mt-6 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-forest-950 text-left text-cream">
            <th className="p-2 font-semibold">Service</th>
            <th className="p-2 font-semibold">Qty</th>
            <th className="p-2 font-semibold">Rate</th>
            <th className="p-2 font-semibold">Amount</th>
          </tr>
        </thead>
        <tbody>
          {lines.map((line, index) => (
            <tr key={index} className="border-b border-forest-900/15">
              <td className="h-10 p-2">{line.service}</td>
              <td className="p-2">{line.qty}</td>
              <td className="p-2">{line.rate}</td>
              <td className="p-2">{line.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 ml-auto w-56 text-sm">
        <p className="flex justify-between border-b border-forest-900/20 py-2">
          <span>Subtotal</span>
          <span>$</span>
        </p>
        <p className="flex justify-between border-b border-forest-900/20 py-2">
          <span>Tax</span>
          <span>$</span>
        </p>
        <p className="flex justify-between py-2 font-display text-lg font-bold">
          <span>Total</span>
          <span>$</span>
        </p>
      </div>
      <p className="mt-6 text-sm leading-6">
        Payment method: Cash / Check / Card &nbsp;&nbsp; Last 4: ________
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <p className="border-t border-forest-900 pt-2 text-sm">Customer signature</p>
        <p className="border-t border-forest-900 pt-2 text-sm">Authorized representative, Tree Rescue 24</p>
      </div>
      <footer className="mt-8 text-xs text-forest-800">
        Thank you for choosing Tree Rescue 24. 24/7 emergency dispatch {business.phoneDisplay}.
        Home-based verification address: {fullAddress}.
      </footer>
    </div>
  );
}
