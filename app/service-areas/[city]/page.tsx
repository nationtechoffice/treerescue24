import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { EntityBlock } from "@/components/EntityBlock";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { business, cities, getCity, services } from "@/lib/business";
import { breadcrumbJsonLd, cityJsonLd, faqJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `24/7 Tree Service in ${city.name}, FL`,
    description: city.entityBlock,
    alternates: { canonical: city.href },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: city.name, path: city.href },
        ])}
      />
      <JsonLd data={cityJsonLd(city)} />
      <JsonLd data={faqJsonLd(city.faqs)} />
      <section className="bg-forest-950 text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            {city.county} · 24/7 dispatch
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Emergency tree service in {city.name}, Florida
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/85">{city.blurb}</p>
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-8 inline-flex h-14 items-center rounded-full bg-orange-500 px-6 font-display text-lg font-bold"
            aria-label="Call Now - 24/7 Emergency"
          >
            Call {business.phoneDisplay}
          </a>
        </div>
      </section>
      <EntityBlock>{city.entityBlock}</EntityBlock>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl font-bold text-forest-950">
          Neighborhoods we cover in {city.name}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {city.neighborhoods.map((name) => (
            <li
              key={name}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-forest-900"
            >
              {name}
            </li>
          ))}
        </ul>
        <h2 className="mt-12 font-display text-3xl font-bold text-forest-950">
          Services available in {city.name}
        </h2>
        <ul className="mt-6 grid gap-3 md:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={service.href}
                className="block rounded-2xl border border-forest-900/10 bg-white p-5 hover:border-orange-400"
              >
                <span className="font-display text-xl font-bold text-forest-950">
                  {service.name} in {city.name}
                </span>
                <p className="mt-1 text-sm text-forest-800">{service.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <FaqList faqs={city.faqs} />
      <CtaBand
        title={`Need a crew in ${city.name} right now?`}
        body={`Tree Rescue 24 dispatches 24/7 from Wesley Chapel to ${city.name} and the rest of ${city.county}.`}
      />
    </>
  );
}
