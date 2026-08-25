"use client";

export function PrintButton({ label = "Print / Save PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-400 print:hidden"
    >
      {label}
    </button>
  );
}
