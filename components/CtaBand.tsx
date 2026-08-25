import { business } from "@/lib/business";

export function CtaBand({
  title = "Need a tree off a house, drive, or power line?",
  body = "Tree Rescue 24 dispatches 24/7 across Tampa, Wesley Chapel, and nearby Hillsborough and Pasco communities.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-orange-500 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-10 md:flex-row md:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold">{title}</h2>
          <p className="mt-2 max-w-2xl text-white/90">{body}</p>
        </div>
        <a
          href={`tel:${business.phoneTel}`}
          className="inline-flex h-14 shrink-0 items-center rounded-full bg-forest-950 px-6 font-display text-lg font-bold hover:bg-forest-800"
          aria-label="Call Now - 24/7 Emergency"
        >
          Call {business.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
