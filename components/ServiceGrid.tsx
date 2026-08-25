import Link from "next/link";
import { services } from "@/lib/business";

export function ServiceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {services.map((service) => (
        <Link
          key={service.slug}
          href={service.href}
          className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-400 hover:shadow-md"
        >
          <h2 className="font-display text-2xl font-bold text-forest-950">{service.name}</h2>
          <p className="mt-2 text-sm leading-6 text-forest-800">{service.summary}</p>
          <span className="mt-4 inline-block text-sm font-bold text-orange-600">
            View {service.shortName} →
          </span>
        </Link>
      ))}
    </div>
  );
}
