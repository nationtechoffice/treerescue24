import type { MetadataRoute } from "next";
import { cities, services, siteUrl } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/service-areas"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path || "/"}`,
      lastModified,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
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
      priority: 0.8,
    })),
  ];
}
