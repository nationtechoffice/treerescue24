import { business, cities, services, siteUrl } from "@/lib/business";

export const indexNowKey = process.env.INDEXNOW_KEY || business.indexNowKey;

export function allIndexUrls() {
  const paths = [
    "/",
    "/emergency-tree-removal",
    "/tree-trimming",
    "/stump-grinding",
    "/land-clearing",
    "/service-areas",
    ...services.map((service) => service.href),
    ...cities.map((city) => city.href),
  ];
  return [...new Set(paths)].map((path) => `${siteUrl}${path === "/" ? "/" : path}`);
}

export async function submitIndexNow(urls: string[] = allIndexUrls()) {
  const host = new URL(siteUrl).host;
  const keyLocation = `${siteUrl}/${indexNowKey}.txt`;
  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key: indexNowKey,
      keyLocation,
      urlList: urls,
    }),
  });
  return {
    ok: response.ok,
    status: response.status,
    submitted: urls.length,
  };
}
