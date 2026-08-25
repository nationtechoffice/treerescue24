import Link from "next/link";
import { cities } from "@/lib/business";

export function AreaGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((city) => (
        <Link
          key={city.slug}
          href={city.href}
          className="rounded-2xl border border-forest-900/10 bg-white p-5 hover:border-orange-400"
        >
          <h3 className="font-display text-xl font-bold text-forest-950">{city.name}</h3>
          <p className="mt-1 text-xs font-semibold tracking-wide text-orange-600 uppercase">
            {city.county}
          </p>
          <p className="mt-2 text-sm leading-6 text-forest-800">{city.blurb}</p>
        </Link>
      ))}
    </div>
  );
}
