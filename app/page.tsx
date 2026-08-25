import { AreaGrid } from "@/components/AreaGrid";
import { CtaBand } from "@/components/CtaBand";
import { EntityBlock } from "@/components/EntityBlock";
import { FaqList } from "@/components/FaqList";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ServiceGrid } from "@/components/ServiceGrid";
import { business, cities, homeFaqs, services } from "@/lib/business";
import { breadcrumbJsonLd, faqJsonLd, speakableJsonLd } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }])} />
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <JsonLd data={speakableJsonLd([".speakable-headline", ".speakable-lede", ".entity-block"])} />
      <Hero
        imagePriority
        title="24/7 emergency tree removal in Tampa and Wesley Chapel"
        subtitle="Tree Rescue 24 is the after-hours crew for trees on houses, cars, and driveways across Hillsborough and Pasco counties. Licensed work. Same-night make-safe. Direct dispatch at (813) 595-7373."
      />
      <EntityBlock>
        Tree Rescue 24 provides licensed 24/7 emergency tree removal, hazardous limb
        cutting, and land clearing across Tampa and Wesley Chapel. From our home-based
        verification address at 30836 Temple Stand Ave, Wesley Chapel, FL 33543, we
        dispatch crews throughout Westchase, Lutz, Land O&apos; Lakes, New Tampa, and
        Zephyrhills every hour of the day.
      </EntityBlock>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl font-bold text-forest-950">Core services</h2>
        <p className="mt-2 max-w-2xl text-forest-800">
          Emergency take-downs, structural trimming, stump grinding, and lot clearing —
          quoted on site and staffed for Florida storm season.
        </p>
        <div className="mt-8">
          <ServiceGrid />
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-3">
          {[
            {
              title: "Call any hour",
              body: "A live dispatch path to (813) 595-7373. Tell us the city, what the tree hit, and whether power is involved.",
            },
            {
              title: "Make the site safe",
              body: "We drop hangers, lift weight off structures, and open access before cosmetic cleanup.",
            },
            {
              title: "Finish the job",
              body: "Sectional removal, haul-away, optional stump grinding, and a yard you can use again.",
            },
          ].map((step) => (
            <div key={step.title} className="rounded-2xl bg-cream-100 p-6">
              <h3 className="font-display text-2xl font-bold text-forest-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-forest-800">{step.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-display text-3xl font-bold text-forest-950">
          Hillsborough and Pasco coverage
        </h2>
        <p className="mt-2 max-w-2xl text-forest-800">
          Primary cities: {cities.map((city) => city.name).join(", ")}. Base of operations:{" "}
          {business.address.city}, {business.address.region}.
        </p>
        <div className="mt-8">
          <AreaGrid />
        </div>
      </section>
      <section className="bg-forest-950 text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="font-display text-3xl font-bold">Why Tree Rescue 24</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            <li className="rounded-2xl bg-white/5 p-5">True 24/7 emergency dispatch, not an answering service that waits until morning.</li>
            <li className="rounded-2xl bg-white/5 p-5">Local Wesley Chapel base with fast reach into New Tampa, Lutz, and Land O&apos; Lakes.</li>
            <li className="rounded-2xl bg-white/5 p-5">Storm, night, and holiday crews for trees on occupied structures.</li>
            <li className="rounded-2xl bg-white/5 p-5">
              One company for {services.map((service) => service.shortName.toLowerCase()).join(", ")}.
            </li>
          </ul>
        </div>
      </section>
      <FaqList faqs={homeFaqs} />
      <CtaBand />
    </>
  );
}
