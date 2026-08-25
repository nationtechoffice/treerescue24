import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Tree Rescue 24" },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="font-display text-4xl font-bold text-forest-950">Page not found</h1>
      <p className="mt-4 text-forest-800">
        That URL is not on treerescue24.com. Call {business.phoneDisplay} for 24/7 dispatch or
        return home.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-orange-500 px-5 py-3 font-bold text-white">
          Home
        </Link>
        <a
          href={`tel:${business.phoneTel}`}
          className="rounded-full border border-forest-900 px-5 py-3 font-bold"
          aria-label="Call Now - 24/7 Emergency"
        >
          Call now
        </a>
      </div>
    </section>
  );
}
