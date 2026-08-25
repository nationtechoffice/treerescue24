import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { EntityBlock } from "@/components/EntityBlock";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import {
  allCityServiceParams,
  business,
  cityServiceHref,
  getCity,
  getService,
} from "@/lib/business";
import {
  cityServiceDescription,
  cityServiceEntity,
  cityServiceFaqs,
  cityServiceHeadline,
  cityServiceTitle,
} from "@/lib/local-seo";
import { breadcrumbJsonLd, cityServiceJsonLd, faqJsonLd } from "@/lib/schema";

type Props = { params: Promise<{ city: string; service: string }> };

export function generateStaticParams() {
  return allCityServiceParams();
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) return {};
  return {
    title: { absolute: cityServiceTitle(city, service) },
    description: cityServiceDescription(city, service),
    alternates: { canonical: cityServiceHref(city, service) },
  };
}

export default async function CityServicePage({ params }: Props) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCity(citySlug);
  const service = getService(serviceSlug);
  if (!city || !service) notFound();

  const faqs = cityServiceFaqs(city, service);
  const href = cityServiceHref(city, service);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: city.name, path: city.href },
          { name: service.name, path: href },
        ])}
      />
      <JsonLd data={cityServiceJsonLd(city, service)} />
      <JsonLd data={faqJsonLd(faqs)} />
      <section className="bg-forest-950 text-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            {city.name} · {city.county} · 24/7
          </p>
          <h1 className="speakable-headline mt-3 max-w-4xl font-display text-4xl font-bold text-balance md:text-5xl">
            {cityServiceHeadline(city, service)}
          </h1>
          <p className="speakable-lede mt-4 max-w-2xl text-lg text-cream/85">
            {service.intro} Serving {city.neighborhoods.slice(0, 3).join(", ")}, and all of{" "}
            {city.name}.
          </p>
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-8 inline-flex min-h-12 min-w-12 items-center rounded-full bg-orange-500 px-6 font-display text-lg font-bold text-white"
            aria-label="Call Now - 24/7 Emergency"
          >
            Call Now - 24/7 Emergency
          </a>
        </div>
      </section>
      <EntityBlock>{cityServiceEntity(city, service)}</EntityBlock>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-forest-950">
            {service.name} coverage in {city.name}
          </h2>
          <ul className="mt-5 space-y-3 text-forest-800">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          {service.process.map((step, index) => (
            <div key={step.title} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-xs font-bold tracking-widest text-orange-600 uppercase">
                Step {index + 1}
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-forest-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-forest-800">{step.body}</p>
            </div>
          ))}
        </div>
      </section>
      <FaqList faqs={faqs} />
      <section className="mx-auto max-w-6xl px-4 pb-10 text-sm text-forest-800">
        <Link href={city.href} className="font-semibold text-orange-600">
          All Tree Rescue 24 services in {city.name} →
        </Link>
      </section>
      <CtaBand
        title={`Need ${service.shortName.toLowerCase()} in ${city.name} tonight?`}
        body={`Call ${business.phoneDisplay}. Tree Rescue 24 is 24/7 across ${city.county}.`}
      />
    </>
  );
}
