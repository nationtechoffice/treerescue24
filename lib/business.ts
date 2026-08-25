export const business = {
  name: "Tree Rescue 24",
  legalName: "Tree Rescue 24",
  tagline: "24/7 Emergency Tree Removal, Trimming & Land Care",
  description:
    "Tree Rescue 24 provides licensed 24/7 emergency tree removal, hazardous limb cutting, stump grinding, and land clearing across Tampa, Wesley Chapel, and the surrounding Hillsborough and Pasco County areas.",
  url: "https://treerescue24.com",
  phoneDisplay: "(813) 595-7373",
  phoneTel: "8135957373",
  phoneSchema: "+1-813-595-7373",
  email: "dispatch@treerescue24.com",
  priceRange: "$$",
  address: {
    street: "30836 Temple Stand Ave",
    city: "Wesley Chapel",
    region: "FL",
    regionFull: "Florida",
    postalCode: "33543",
    country: "US",
  },
  geo: {
    latitude: 28.2324827,
    longitude: -82.3054765,
  },
  hoursLabel: "Open 24 hours, 7 days a week",
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: [] as string[],
  indexNowKey: "e8c4f1a2b3d94c6e9a7f0d1c2b3a4e5f",
} as const;

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/emergency-tree-removal", label: "Emergency Removal" },
  { href: "/tree-trimming", label: "Tree Trimming" },
  { href: "/stump-grinding", label: "Stump Grinding" },
  { href: "/land-clearing", label: "Land Clearing" },
  { href: "/service-areas", label: "Service Areas" },
] as const;

export type ServiceSlug =
  | "emergency-tree-removal"
  | "tree-trimming"
  | "stump-grinding"
  | "land-clearing";

export type Service = {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  href: `/${ServiceSlug}`;
  headline: string;
  summary: string;
  entityBlock: string;
  intro: string;
  bullets: string[];
  process: { title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "emergency-tree-removal",
    name: "Emergency Tree Removal",
    shortName: "Emergency Removal",
    href: "/emergency-tree-removal",
    headline: "24/7 emergency tree removal in Tampa and Wesley Chapel",
    summary:
      "Night, weekend, and storm-response crews for trees on homes, vehicles, driveways, and power lines.",
    entityBlock:
      "Tree Rescue 24 provides licensed 24/7 emergency tree removal, hazardous limb cutting, and storm damage response across Tampa and Wesley Chapel. Dispatch answers after midnight, during hurricanes, and on holidays for Hillsborough and Pasco County properties.",
    intro:
      "When a tree fails at 2 a.m. in Wesley Chapel or a live oak drops on a South Tampa roof after a storm, Tree Rescue 24 mobilizes the same night. We stabilize the site, clear access, and remove failed trunks and hangers so your home, vehicles, and family are safe.",
    bullets: [
      "Trees on houses, fences, pools, and vehicles",
      "Split trunks, hangers, and widow-makers after wind events",
      "Driveway, street, and HOA access clearing",
      "After-hours, weekend, and holiday dispatch",
      "Hazardous limb cutting when a full take-down can wait",
    ],
    process: [
      {
        title: "Call dispatch",
        body: "Tell us the city, what the tree hit, and whether anyone is trapped or power is down. We give an arrival window immediately.",
      },
      {
        title: "Make-safe on site",
        body: "Crews drop hangers, lift weight off structures, and open a safe path before any cosmetic cleanup.",
      },
      {
        title: "Full removal and haul-away",
        body: "Once the scene is stable, we section the tree, protect landscaping, grind the stump if requested, and haul debris.",
      },
    ],
    faqs: [
      {
        question: "Who offers emergency tree removal at night in Wesley Chapel?",
        answer:
          "Tree Rescue 24 dispatches 24/7 emergency tree removal in Wesley Chapel, including after midnight and during storms. Call (813) 595-7373 for same-night make-safe service from our Wesley Chapel base at 30836 Temple Stand Ave.",
      },
      {
        question: "Do you remove trees that fell on a house in Tampa?",
        answer:
          "Yes. Tree Rescue 24 removes trees off roofs, lanais, pools, and vehicles in Tampa and nearby neighborhoods. We stabilize the structure first, then complete sectional removal and debris haul-away.",
      },
      {
        question: "How fast can a crew arrive after a storm?",
        answer:
          "Arrival depends on storm volume and your location in Hillsborough or Pasco County. Emergency calls are queued by life-safety and structural risk. Many Wesley Chapel, Lutz, and New Tampa jobs are reached the same night when roads are open.",
      },
      {
        question: "Is emergency tree work more expensive at night?",
        answer:
          "Night and holiday work can include after-hours labor. We quote the make-safe scope before cutting whenever the site is safe to inspect, so you know the number before we start.",
      },
    ],
  },
  {
    slug: "tree-trimming",
    name: "Tree Trimming",
    shortName: "Trimming",
    href: "/tree-trimming",
    headline: "Structural tree trimming for Tampa live oaks and palms",
    summary:
      "Crown cleaning, storm-readiness pruning, palm trimming, and HOA-compliant canopy work.",
    entityBlock:
      "Tree Rescue 24 provides licensed tree trimming, canopy reduction, and hazardous limb cutting across Tampa and Wesley Chapel. Crews prune live oaks, pines, citrus, and palms to ANSI-informed practices so properties stay storm-ready year-round.",
    intro:
      "Florida storms punish overgrown canopies. Tree Rescue 24 trims for structure, clearance, and wind load—not just a cosmetic haircut—so limbs are less likely to fail over your roof, pool cage, or neighbor’s property.",
    bullets: [
      "Deadwood removal and crown cleaning",
      "Roof, driveway, and utility-line clearance",
      "Palm trimming and seed-stalk removal",
      "HOA and municipal spec pruning",
      "Pre-hurricane season storm-readiness packages",
    ],
    process: [
      {
        title: "Walk the canopy",
        body: "We identify included bark, dead leaders, hangers, and clearance conflicts before a saw starts.",
      },
      {
        title: "Prune to specification",
        body: "Cuts follow the tree’s structure. We avoid lion-tailing and topping, which make Florida trees more likely to fail.",
      },
      {
        title: "Clean and haul",
        body: "Brush is chipped or hauled. Lawns, pavers, and pool decks are blown and raked before we leave.",
      },
    ],
    faqs: [
      {
        question: "How much does tree trimming cost in Tampa?",
        answer:
          "Tree trimming in Tampa typically ranges from a few hundred dollars for a small ornamental to several thousand for a mature live oak, depending on height, access, traffic control, and debris volume. Tree Rescue 24 provides an on-site quote at (813) 595-7373 before work begins.",
      },
      {
        question: "How often should oaks be trimmed in Wesley Chapel?",
        answer:
          "Most mature live oaks in Wesley Chapel benefit from a structural trim every 18 to 36 months, with a lighter storm-prep visit before peak hurricane season. Properties with pool cages or tight lot lines may need more frequent clearance cuts.",
      },
      {
        question: "Do you trim palms and pines as well as oaks?",
        answer:
          "Yes. Tree Rescue 24 trims sabal, queen, and other common Tampa Bay palms, plus slash pines and ornamental species. We remove dead fronds and seed stalks without over-pruning the living crown.",
      },
      {
        question: "Can you trim a tree hanging over my neighbor’s roof?",
        answer:
          "We can prune portions on your property line and will discuss access if the canopy crosses a boundary. We do not trespass. Shared-tree situations are quoted after both access and ownership are clear.",
      },
    ],
  },
  {
    slug: "stump-grinding",
    name: "Stump Grinding",
    shortName: "Stump Grinding",
    href: "/stump-grinding",
    headline: "Stump grinding that clears yards, fences, and future pads",
    summary:
      "Below-grade grinding for removal leftovers, fence lines, and new construction in Tampa Bay.",
    entityBlock:
      "Tree Rescue 24 provides licensed stump grinding and root-flare reduction across Tampa and Wesley Chapel. We grind stumps below grade, rake chips, and prep the area for sod, pavers, or new plantings after emergency or scheduled removals.",
    intro:
      "A stump is a trip hazard, a mower obstacle, and a termite magnet. After a take-down—or years after a previous removal—we grind the stump and surface roots so you can reclaim the yard.",
    bullets: [
      "Single-stump and multi-stump jobs",
      "Fence-line and tight-access grinding",
      "Surface root reduction for mowers and pavers",
      "Chip backfill or haul-away options",
      "Add-on grinding after emergency removal",
    ],
    process: [
      {
        title: "Locate utilities and depth",
        body: "We confirm underground lines, irrigation, and the grind depth you need for sod versus a concrete pad.",
      },
      {
        title: "Grind below grade",
        body: "The stump and flare are reduced below the surrounding soil so the area can be restored.",
      },
      {
        title: "Restore the spot",
        body: "Chips can stay as mulch, be hauled, or be mixed with soil for a later sod patch.",
      },
    ],
    faqs: [
      {
        question: "How much does stump grinding cost in Wesley Chapel?",
        answer:
          "Stump grinding in Wesley Chapel is usually priced by stump diameter, root flare, and access. Small ornamental stumps can be a modest flat fee; large oak flares cost more. Call Tree Rescue 24 at (813) 595-7373 for a measured quote.",
      },
      {
        question: "How deep do you grind stumps?",
        answer:
          "Standard residential grinds go several inches below grade, enough for sod or mulch. If you are pouring a patio or building a fence, tell us so we can grind deeper and chase surface roots.",
      },
      {
        question: "Can you grind a stump the same day as tree removal?",
        answer:
          "Often yes, if equipment can reach the stump after the wood is processed. Emergency night jobs may leave grinding for daylight when it is safer around structures and utilities.",
      },
      {
        question: "Will grinding kill the remaining roots?",
        answer:
          "Grinding destroys the stump and flare. Deeper lateral roots may still sprout on some species. We can treat or return for follow-up if suckers appear.",
      },
    ],
  },
  {
    slug: "land-clearing",
    name: "Land Clearing",
    shortName: "Land Clearing",
    href: "/land-clearing",
    headline: "Land clearing for lots, fence lines, and build-ready sites",
    summary:
      "Selective lot clearing, underbrush removal, and forestry mulching in Hillsborough and Pasco counties.",
    entityBlock:
      "Tree Rescue 24 provides licensed land clearing, underbrush removal, and selective tree take-downs across Tampa and Wesley Chapel. We clear lots for fences, driveways, accessory buildings, and new construction while protecting trees you want to keep.",
    intro:
      "Overgrown lots in Lutz, Land O’ Lakes, and Wesley Chapel stall fences, pools, and builds. Tree Rescue 24 clears underbrush and selected trees, chips on site or hauls, and leaves a workable grade instead of a chewed-up mess.",
    bullets: [
      "Residential lot and fence-line clearing",
      "Selective clearing that keeps specimen oaks",
      "Storm-downed wood and debris fields",
      "Access paths for surveys and septic",
      "Haul-away or on-site mulching",
    ],
    process: [
      {
        title: "Flag keepers and limits",
        body: "We walk the property with you, mark trees to keep, and confirm HOA, wetland, and county constraints.",
      },
      {
        title: "Clear in stages",
        body: "Underbrush first, then selected stems, then stumps if the pad requires it. This protects soil and remaining canopy.",
      },
      {
        title: "Leave a usable site",
        body: "Debris is mulched or hauled. You get a site you can mow, fence, or hand to a builder.",
      },
    ],
    faqs: [
      {
        question: "Do I need a permit to clear land in Pasco or Hillsborough County?",
        answer:
          "Permit rules depend on lot size, wetlands, tree ordinances, and whether the property is in an HOA or municipality. Tree Rescue 24 will discuss likely requirements during the quote. Property owners remain responsible for permits.",
      },
      {
        question: "Can you clear a lot without removing every tree?",
        answer:
          "Yes. Selective land clearing is our default. We remove invasive underbrush and designated stems while protecting live oaks or other keepers you flag.",
      },
      {
        question: "How much does land clearing cost in Tampa?",
        answer:
          "Land clearing cost in Tampa and Wesley Chapel depends on acreage, density, access, dump fees, and whether stumps must be ground. We bid after a site walk so the number matches the vegetation on the ground.",
      },
      {
        question: "Do you clear for pools, fences, and ADUs?",
        answer:
          "Yes. Common jobs include fence-line openings, pool-cage footprints, driveway extensions, and accessory dwelling pads throughout New Tampa, Westchase, and Zephyrhills.",
      },
    ],
  },
];

export type CitySlug =
  | "tampa"
  | "wesley-chapel"
  | "wesley-chapel-south"
  | "westchase"
  | "lutz"
  | "land-o-lakes"
  | "new-tampa"
  | "zephyrhills"
  | "dade-city";

export type City = {
  slug: CitySlug;
  name: string;
  county: "Hillsborough County" | "Pasco County";
  href: `/${CitySlug}`;
  geo: { latitude: number; longitude: number };
  blurb: string;
  entityBlock: string;
  neighborhoods: string[];
  faqs: { question: string; answer: string }[];
};

export const cities: City[] = [
  {
    slug: "tampa",
    name: "Tampa",
    county: "Hillsborough County",
    href: "/tampa",
    geo: { latitude: 27.9506, longitude: -82.4572 },
    blurb:
      "Emergency and scheduled tree work for South Tampa, Seminole Heights, Hyde Park, Westshore, and greater Tampa neighborhoods.",
    entityBlock:
      "Tree Rescue 24 provides licensed 24/7 emergency tree removal, hazardous limb cutting, and land clearing in Tampa, Florida. Crews serve Hillsborough County homes and commercial lots from a Wesley Chapel dispatch base with a direct line at (813) 595-7373.",
    neighborhoods: [
      "South Tampa",
      "Hyde Park",
      "Seminole Heights",
      "Tampa Heights",
      "Westshore",
      "Carrollwood",
    ],
    faqs: [
      {
        question: "Who does emergency tree removal in Tampa at night?",
        answer:
          "Tree Rescue 24 offers 24/7 emergency tree removal in Tampa. Call (813) 595-7373 for trees on houses, cars, or driveways after storms.",
      },
      {
        question: "How much does tree trimming cost in Tampa?",
        answer:
          "Tampa tree trimming is quoted by species, height, access, and debris. Tree Rescue 24 inspects on site and prices the work before cutting.",
      },
    ],
  },
  {
    slug: "wesley-chapel",
    name: "Wesley Chapel",
    county: "Pasco County",
    href: "/wesley-chapel",
    geo: { latitude: 28.2397, longitude: -82.3279 },
    blurb:
      "Home-base coverage for Wesley Chapel, including Ashley Pines, Wiregrass, Seven Oaks, and Epperson.",
    entityBlock:
      "Tree Rescue 24 is a Wesley Chapel 24/7 emergency tree service based at 30836 Temple Stand Ave, Wesley Chapel, FL 33543. We provide licensed emergency tree removal, trimming, stump grinding, and land clearing throughout Pasco County.",
    neighborhoods: [
      "Ashley Pines",
      "Wiregrass",
      "Seven Oaks",
      "Epperson",
      "Meadow Pointe",
      "Estancia",
    ],
    faqs: [
      {
        question: "Where is Tree Rescue 24 located in Wesley Chapel?",
        answer:
          "Tree Rescue 24’s Google verification and dispatch address is 30836 Temple Stand Ave, Wesley Chapel, FL 33543. We run 24/7 emergency jobs from this Pasco County base.",
      },
      {
        question: "Do you offer same-night tree removal in Wesley Chapel?",
        answer:
          "Yes. Wesley Chapel is our primary response zone. Call (813) 595-7373 for after-hours make-safe removal.",
      },
    ],
  },
  {
    slug: "westchase",
    name: "Westchase",
    county: "Hillsborough County",
    href: "/westchase",
    geo: { latitude: 28.0528, longitude: -82.6115 },
    blurb:
      "HOA-aware trimming and emergency response for Westchase and nearby Citrus Park streets.",
    entityBlock:
      "Tree Rescue 24 provides licensed 24/7 emergency tree removal and HOA-compliant trimming in Westchase, Florida. Crews handle live oaks over pool cages, storm hangers, and lot clearing in northwest Hillsborough County.",
    neighborhoods: ["Westchase Proper", "Citrus Park", "Town & Country", "Rocky Creek"],
    faqs: [
      {
        question: "Can you work in Westchase HOA communities?",
        answer:
          "Yes. Tree Rescue 24 regularly trims and removes trees in Westchase HOAs. We can work to community specs and keep streets passable during the job.",
      },
      {
        question: "Do you grind stumps in Westchase?",
        answer:
          "Yes. After removal we can grind stumps below grade so yards, fences, and playground setbacks can be restored.",
      },
    ],
  },
  {
    slug: "lutz",
    name: "Lutz",
    county: "Hillsborough County",
    href: "/lutz",
    geo: { latitude: 28.1511, longitude: -82.4615 },
    blurb:
      "Storm cleanup, oak trimming, and lot clearing for Lutz homes on wooded lots and lake edges.",
    entityBlock:
      "Tree Rescue 24 provides licensed 24/7 emergency tree removal, hazardous limb cutting, and land clearing in Lutz, Florida, covering the Hillsborough/Pasco line with rapid dispatch from Wesley Chapel.",
    neighborhoods: ["Lutz Lake Fern", "Sunlake", "Lake Park", "Villages of Glenfield"],
    faqs: [
      {
        question: "Do you remove storm-damaged pines in Lutz?",
        answer:
          "Yes. Tree Rescue 24 removes failed pines and oaks in Lutz after wind and lightning events, including trees blocking long private drives.",
      },
      {
        question: "Can you clear underbrush on a Lutz lot?",
        answer:
          "Yes. We offer selective land clearing and fence-line openings for Lutz properties while keeping designated trees.",
      },
    ],
  },
  {
    slug: "land-o-lakes",
    name: "Land O' Lakes",
    county: "Pasco County",
    href: "/land-o-lakes",
    geo: { latitude: 28.2189, longitude: -82.4576 },
    blurb:
      "24/7 tree removal and trimming for Land O' Lakes neighborhoods, ranchettes, and new construction lots.",
    entityBlock:
      "Tree Rescue 24 provides licensed 24/7 emergency tree removal and land clearing in Land O' Lakes, Florida. Pasco County crews handle lakeside oaks, vacant-lot clearing, and after-hours storm calls.",
    neighborhoods: ["Connerton", "Wilderness Lake", "Lake Padgett", "Dupont Lakes"],
    faqs: [
      {
        question: "Do you serve Land O' Lakes after midnight?",
        answer:
          "Yes. Tree Rescue 24 is a 24/7 emergency tree service for Land O' Lakes. Call (813) 595-7373 any time.",
      },
      {
        question: "Can you clear a vacant lot in Land O' Lakes?",
        answer:
          "Yes. We clear underbrush and selected trees for fences, driveways, and builds, with stump grinding available.",
      },
    ],
  },
  {
    slug: "new-tampa",
    name: "New Tampa",
    county: "Hillsborough County",
    href: "/new-tampa",
    geo: { latitude: 28.1286, longitude: -82.3534 },
    blurb:
      "Fast response along the Bruce B. Downs corridor for Cross Creek, Hunter's Green, and Tampa Palms.",
    entityBlock:
      "Tree Rescue 24 provides licensed 24/7 emergency tree removal, tree trimming, and stump grinding in New Tampa. The Wesley Chapel base is positioned for rapid response along Bruce B. Downs Boulevard.",
    neighborhoods: ["Tampa Palms", "Hunter's Green", "Cross Creek", "Heritage Isles"],
    faqs: [
      {
        question: "How quickly can you reach New Tampa in an emergency?",
        answer:
          "New Tampa sits between our Wesley Chapel base and central Tampa, so it is a primary response zone. Call (813) 595-7373 for dispatch.",
      },
      {
        question: "Do you trim trees over pool cages in New Tampa?",
        answer:
          "Yes. Clearance pruning over lanais and pool cages is a frequent New Tampa request, especially before storm season.",
      },
    ],
  },
  {
    slug: "zephyrhills",
    name: "Zephyrhills",
    county: "Pasco County",
    href: "/zephyrhills",
    geo: { latitude: 28.2336, longitude: -82.1812 },
    blurb:
      "Emergency removals, trimming, and lot work for Zephyrhills neighborhoods and larger Pasco parcels.",
    entityBlock:
      "Tree Rescue 24 provides licensed 24/7 emergency tree removal, stump grinding, and land clearing in Zephyrhills, Florida. We cover east Pasco residential streets and larger lots from our Wesley Chapel shop.",
    neighborhoods: ["Zephyr Lake", "Abbott Park", "Chancey Road corridor", "SR 54 east"],
    faqs: [
      {
        question: "Do you take emergency calls in Zephyrhills?",
        answer:
          "Yes. Tree Rescue 24 dispatches 24/7 to Zephyrhills for trees on structures, blocked drives, and storm debris. Call (813) 595-7373.",
      },
      {
        question: "Can you grind multiple stumps on a Zephyrhills lot?",
        answer:
          "Yes. Multi-stump grinding and selective clearing are quoted after we measure diameters and access.",
      },
    ],
  },
  {
    slug: "dade-city",
    name: "Dade City",
    county: "Pasco County",
    href: "/dade-city",
    geo: { latitude: 28.3647, longitude: -82.1959 },
    blurb:
      "24/7 tree removal, trimming, and lot clearing for Dade City streets, ranchettes, and east Pasco parcels.",
    entityBlock:
      "Tree Rescue 24 provides licensed 24/7 emergency tree removal, hazardous limb cutting, and land clearing in Dade City, Florida. Crews cover east Pasco from our Wesley Chapel base at 30836 Temple Stand Ave.",
    neighborhoods: ["Downtown Dade City", "Richland", "Trilby", "Pasco", "SR 52 corridor"],
    faqs: [
      {
        question: "Do you offer 24/7 emergency tree removal in Dade City?",
        answer:
          "Yes. Tree Rescue 24 dispatches 24/7 to Dade City for trees on homes, drives, and storm debris. Call (813) 595-7373.",
      },
      {
        question: "Can you clear land in Dade City for a fence or pad?",
        answer:
          "Yes. We clear underbrush and selected trees on Dade City lots, with stump grinding available after take-down.",
      },
    ],
  },
  {
    slug: "wesley-chapel-south",
    name: "Wesley Chapel South",
    county: "Pasco County",
    href: "/wesley-chapel-south",
    geo: { latitude: 28.2105, longitude: -82.3279 },
    blurb:
      "Rapid south-of-SR-54 coverage for Watergrass, Saddlebrook, and Wesley Chapel South neighborhoods.",
    entityBlock:
      "Tree Rescue 24 provides licensed 24/7 emergency tree removal and land care in Wesley Chapel South, minutes from our Google verification base at 30836 Temple Stand Ave, Wesley Chapel, FL 33543.",
    neighborhoods: ["Watergrass", "Saddlebrook", "Bridgewater", "Chapel Pines", "SR 54 south"],
    faqs: [
      {
        question: "Who offers emergency tree removal at night in Wesley Chapel South?",
        answer:
          "Tree Rescue 24. We are based in Wesley Chapel and dispatch 24/7 to Wesley Chapel South. Call (813) 595-7373.",
      },
      {
        question: "Do you trim oaks over pool cages in Wesley Chapel South?",
        answer:
          "Yes. Clearance pruning over lanais and pool cages is a frequent Wesley Chapel South request before storm season.",
      },
    ],
  },
];

export const homeFaqs = [
  {
    question: "Is Tree Rescue 24 really available 24 hours a day?",
    answer:
      "Yes. Tree Rescue 24 answers emergency tree calls every day, including nights, weekends, and holidays. Scheduled trimming, stump grinding, and land clearing are booked during daylight for safety and quality.",
  },
  {
    question: "What areas does Tree Rescue 24 serve?",
    answer:
      "We serve Tampa, Wesley Chapel, Wesley Chapel South, Westchase, Lutz, Land O' Lakes, New Tampa, Zephyrhills, and Dade City, covering Hillsborough and Pasco counties from 30836 Temple Stand Ave, Wesley Chapel, FL 33543.",
  },
  {
    question: "Are you licensed and insured for tree work in Florida?",
    answer:
      "Tree Rescue 24 performs licensed tree service work and carries insurance for residential and commercial jobs. Ask dispatch for current coverage details when we quote your property.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call (813) 595-7373. For emergencies we quote a make-safe scope as soon as the site can be inspected. For trimming, grinding, and clearing we schedule a site visit and provide a written range before work starts.",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug);
}

export function cityServiceHref(city: City, service: Service) {
  return `/${city.slug}/${service.slug}` as const;
}

export function allCityServiceParams() {
  return cities.flatMap((city) =>
    services.map((service) => ({ city: city.slug, service: service.slug })),
  );
}

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || business.url;
