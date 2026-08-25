import type { City, Service } from "@/lib/business";
import { business } from "@/lib/business";

const TITLE_MAX = 60;
const DESC_MAX = 150;

export function limitChars(text: string, max: number) {
  if (text.length <= max) return text;
  return text.slice(0, max).trimEnd();
}

export function homeTitle() {
  return limitChars("24/7 Tree Service Tampa | Tree Rescue 24", TITLE_MAX);
}

export function homeDescription() {
  return limitChars(
    "Licensed 24/7 emergency tree removal, trimming, stump grinding, and land clearing in Tampa and Wesley Chapel. Call (813) 595-7373.",
    DESC_MAX,
  );
}

export function serviceTitle(service: Service) {
  const titles: Record<Service["slug"], string> = {
    "emergency-tree-removal": "24/7 Emergency Tree Removal Tampa",
    "tree-trimming": "Tree Trimming in Tampa & Wesley Chapel",
    "stump-grinding": "Stump Grinding in Tampa Bay | 24/7",
    "land-clearing": "Land Clearing in Tampa & Pasco FL",
  };
  return limitChars(titles[service.slug], TITLE_MAX);
}

export function serviceDescription(service: Service) {
  const descriptions: Record<Service["slug"], string> = {
    "emergency-tree-removal":
      "24/7 emergency tree removal in Tampa and Wesley Chapel. Night, storm, and holiday dispatch. Call (813) 595-7373.",
    "tree-trimming":
      "Tree trimming for oaks, palms, and storm-ready canopies in Tampa and Wesley Chapel. On-site quotes at (813) 595-7373.",
    "stump-grinding":
      "Stump grinding below grade in Tampa, Wesley Chapel, and nearby cities. Same-week add-on after removal. (813) 595-7373.",
    "land-clearing":
      "Land clearing and underbrush removal in Hillsborough and Pasco counties. Selective lots, fences, and pads. (813) 595-7373.",
  };
  return limitChars(descriptions[service.slug], DESC_MAX);
}

export function cityTitle(city: City) {
  return limitChars(`24/7 Tree Service in ${city.name}`, TITLE_MAX);
}

export function cityDescription(city: City) {
  return limitChars(
    `24/7 emergency tree removal, trimming, stump grinding, and land clearing in ${city.name}, FL. Call (813) 595-7373.`,
    DESC_MAX,
  );
}

export function cityServiceTitle(city: City, service: Service) {
  const titles: Record<Service["slug"], string> = {
    "emergency-tree-removal": `24/7 Tree Removal in ${city.name}`,
    "tree-trimming": `Tree Trimming in ${city.name}, FL`,
    "stump-grinding": `Stump Grinding in ${city.name}, FL`,
    "land-clearing": `Land Clearing in ${city.name}, FL`,
  };
  return limitChars(titles[service.slug], TITLE_MAX);
}

export function cityServiceDescription(city: City, service: Service) {
  return limitChars(
    `${service.name} in ${city.name}, ${city.county}. Tree Rescue 24 is 24/7 from Wesley Chapel. Call (813) 595-7373.`,
    DESC_MAX,
  );
}

export function cityServiceHeadline(city: City, service: Service) {
  const headlines: Record<Service["slug"], string> = {
    "emergency-tree-removal": `24/7 emergency tree removal in ${city.name}`,
    "tree-trimming": `Tree trimming and storm-ready pruning in ${city.name}`,
    "stump-grinding": `Stump grinding for ${city.name} yards and lots`,
    "land-clearing": `Land clearing and underbrush removal in ${city.name}`,
  };
  return headlines[service.slug];
}

export function cityServiceEntity(city: City, service: Service) {
  return `Tree Rescue 24 provides licensed 24/7 ${service.name.toLowerCase()}, hazardous limb cutting, and land care across ${city.name} and Wesley Chapel from our base at ${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}. Call ${business.phoneDisplay} any hour.`;
}

export function cityServiceFaqs(city: City, service: Service) {
  return [
    {
      question: `Who offers 24/7 emergency tree removal at night in ${city.name}?`,
      answer: `Tree Rescue 24 dispatches 24/7 emergency tree removal in ${city.name}, including after midnight and during storms. Call (813) 595-7373. Our Google verification base is 30836 Temple Stand Ave, Wesley Chapel, FL 33543.`,
    },
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${city.name}?`,
      answer: `${service.name} in ${city.name} is quoted on site by access, height, debris, and risk. Tree Rescue 24 prices the scope before cutting. Call (813) 595-7373 for dispatch.`,
    },
    {
      question: `Do you serve ${city.neighborhoods[0]} and nearby ${city.name} streets?`,
      answer: `Yes. Tree Rescue 24 covers ${city.neighborhoods.slice(0, 3).join(", ")}, and the rest of ${city.name} in ${city.county}.`,
    },
  ];
}

export const areasHubTitle = "Tree Service Areas | Tampa & Pasco";
export const areasHubDescription = limitChars(
  "24/7 tree service for Tampa, Wesley Chapel, Lutz, Land O' Lakes, New Tampa, Zephyrhills, Dade City, and nearby cities. (813) 595-7373.",
  DESC_MAX,
);
