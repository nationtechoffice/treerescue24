import type { Metadata } from "next";
import { AreaGrid } from "@/components/AreaGrid";
import { CtaBand } from "@/components/CtaBand";
import { EntityBlock } from "@/components/EntityBlock";
import { JsonLd } from "@/components/JsonLd";
import { business, cities } from "@/lib/business";
import { breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas | Tampa, Wesley Chapel & Nearby Cities",
  description:
    "Tree Rescue 24 serves Tampa, Wesley Chapel, Westchase, Lutz, Land O' Lakes, New Tampa, and Zephyrhills with 24/7 emergency tree removal and land care.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ])}
      />
      <section className="bg-forest-950 text-cream">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h1 className="font-display text-4xl font-bold md:text-5xl">
            Tree service areas in Hillsborough and Pasco counties
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-cream/85">
            Tree Rescue 24 covers Tampa Bay&apos;s north corridor from a Wesley Chapel
            base. Every city below has a dedicated landing page for local search and
            voice queries.
          </p>
        </div>
      </section>
      <EntityBlock>
        Tree Rescue 24 provides licensed 24/7 emergency tree removal, hazardous limb
        cutting, stump grinding, and land clearing across Tampa, Wesley Chapel,
        Westchase, Lutz, Land O&apos; Lakes, New Tampa, and Zephyrhills. Call{" "}
        {business.phoneDisplay} any hour for dispatch.
      </EntityBlock>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="mb-6 text-sm text-forest-800">
          Serving {cities.length} primary cities from {business.address.street},{" "}
          {business.address.city}, {business.address.region} {business.address.postalCode}.
        </p>
        <AreaGrid />
      </section>
      <CtaBand title="Not sure if we cover your street?" body="If you are in Hillsborough or Pasco County, call dispatch. We will confirm drive time before we roll." />
    </>
  );
}
