import type { MetadataRoute } from "next";
import { cities, services, siteUrl } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/service-areas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...services.map((service) => ({
      url: `${siteUrl}${service.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...cities.map((city) => ({
      url: `${siteUrl}${city.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...cities.flatMap((city) =>
      services.map((service) => ({
        url: `${siteUrl}/${city.slug}/${service.slug}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ),
  ];
}
