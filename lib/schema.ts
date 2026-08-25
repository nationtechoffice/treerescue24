import {
  business,
  cities,
  mapsUrl,
  services,
  siteUrl,
  type City,
  type Service,
} from "@/lib/business";

const areaServed = cities.map((city) => ({
  "@type": "City",
  name: city.name,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: city.county,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: city.geo.latitude,
    longitude: city.geo.longitude,
  },
}));

export function localBusinessGraph() {
  const id = `${siteUrl}/#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EmergencyService", "HomeAndConstructionBusiness", "LocalBusiness"],
        "@id": id,
        name: business.name,
        legalName: business.legalName,
        url: siteUrl,
        image: `${siteUrl}/brand/treerescue24-logo.png`,
        logo: `${siteUrl}/brand/treerescue24-logo.svg`,
        telephone: business.phoneSchema,
        email: business.email,
        priceRange: business.priceRange,
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Check, Credit Card",
        description: business.description,
        slogan: business.tagline,
        hasMap: mapsUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: business.address.street,
          addressLocality: business.address.city,
          addressRegion: business.address.region,
          postalCode: business.address.postalCode,
          addressCountry: business.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: business.geo.latitude,
          longitude: business.geo.longitude,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
        areaServed,
        knowsAbout: services.map((service) => service.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Tree Rescue 24 Services",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              url: `${siteUrl}${service.href}`,
              areaServed,
              provider: { "@id": id },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: business.name,
        publisher: { "@id": id },
        inLanguage: "en-US",
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function serviceJsonLd(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    url: `${siteUrl}${service.href}`,
    description: service.entityBlock,
    provider: {
      "@type": ["EmergencyService", "HomeAndConstructionBusiness"],
      name: business.name,
      telephone: business.phoneSchema,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.region,
        postalCode: business.address.postalCode,
        addressCountry: business.address.country,
      },
    },
    areaServed,
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function cityJsonLd(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `24/7 Tree Service in ${city.name}`,
    url: `${siteUrl}${city.href}`,
    description: city.entityBlock,
    provider: {
      "@type": ["EmergencyService", "HomeAndConstructionBusiness"],
      name: business.name,
      telephone: business.phoneSchema,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.street,
        addressLocality: business.address.city,
        addressRegion: business.address.region,
        postalCode: business.address.postalCode,
        addressCountry: business.address.country,
      },
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.county,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.geo.latitude,
        longitude: city.geo.longitude,
      },
    },
  };
}

export function speakableJsonLd(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
    url: siteUrl,
    name: business.name,
    about: {
      "@type": "EmergencyService",
      name: business.name,
    },
  };
}
