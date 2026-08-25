import { business } from "@/lib/business";

export function EntityBlock({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-cream-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="entity-block max-w-5xl text-lg leading-8 text-ink md:text-xl">
          {children}
        </p>
        <p className="mt-4 text-sm text-forest-800">
          {business.name} · {business.phoneDisplay} · {business.address.street},{" "}
          {business.address.city}, {business.address.region} {business.address.postalCode}
        </p>
      </div>
    </section>
  );
}
