import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { EntityBlock } from "@/components/EntityBlock";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import type { Service } from "@/lib/business";
import { business } from "@/lib/business";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";

export function serviceMetadata(service: Service): Metadata {
  return {
    title: `${service.name} in Tampa & Wesley Chapel`,
    description: service.entityBlock,
    alternates: { canonical: service.href },
    openGraph: {
      title: `${service.name} | Tree Rescue 24`,
      description: service.summary,
      url: service.href,
    },
  };
}

export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: service.name, path: service.href },
        ])}
      />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <section className="bg-forest-950 text-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
            Tree Rescue 24 · {business.phoneDisplay}
          </p>
          <h1 className="speakable-headline mt-3 max-w-4xl font-display text-4xl font-bold text-balance md:text-5xl">
            {service.headline}
          </h1>
          <p className="speakable-lede mt-4 max-w-2xl text-lg text-cream/85">{service.intro}</p>
          <a
            href={`tel:${business.phoneTel}`}
            className="mt-8 inline-flex h-14 items-center rounded-full bg-orange-500 px-6 font-display text-lg font-bold text-white"
            aria-label="Call Now - 24/7 Emergency"
          >
            Call Now - 24/7 Emergency
          </a>
        </div>
      </section>
      <EntityBlock>{service.entityBlock}</EntityBlock>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-forest-950">What this service covers</h2>
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
      <FaqList faqs={service.faqs} />
      <section className="mx-auto max-w-6xl px-4 pb-10 text-sm text-forest-800">
        <Link href="/service-areas" className="font-semibold text-orange-600">
          See all Tree Rescue 24 service areas →
        </Link>
      </section>
      <CtaBand />
    </>
  );
}
