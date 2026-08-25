import { business } from "@/lib/business";

export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 min-h-16 border-t border-orange-700 bg-orange-500 pb-[env(safe-area-inset-bottom)] md:hidden"
      role="region"
      aria-label="24/7 emergency call bar"
    >
      <a
        href={`tel:${business.phoneTel}`}
        className="flex h-full w-full items-center justify-center gap-2 px-4 font-display text-lg font-bold uppercase tracking-wide text-white"
        aria-label="Call Now - 24/7 Emergency"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C11.6 21.1 2.9 12.4 2.9 1.7 2.9 1.1 3.4.6 4 .6h3.4c.6 0 1.1.5 1.1 1.1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
        </svg>
        Call Now - 24/7 Emergency
      </a>
    </div>
  );
}
