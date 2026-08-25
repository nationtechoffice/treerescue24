import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { StickyCallBar } from "@/components/StickyCallBar";
import { business, siteUrl } from "@/lib/business";
import { homeDescription, homeTitle } from "@/lib/local-seo";
import { localBusinessGraph } from "@/lib/schema";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: homeTitle(),
    template: "%s",
  },
  description: homeDescription(),
  applicationName: business.name,
  keywords: [
    "emergency tree removal Tampa",
    "24 hour tree service Wesley Chapel",
    "tree trimming Tampa",
    "stump grinding Wesley Chapel",
    "land clearing Pasco County",
    "Tree Rescue 24",
  ],
  authors: [{ name: business.name, url: siteUrl }],
  category: "Tree service",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: business.name,
    title: homeTitle(),
    description: homeDescription(),
    images: [
      {
        url: "/images/hero-emergency-crane.png",
        width: 1536,
        height: 1024,
        alt: "Tree Rescue 24 emergency crane removing a storm-damaged tree",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle(),
    description: homeDescription(),
    images: ["/images/hero-emergency-crane.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Wesley Chapel",
    "geo.position": `${business.geo.latitude};${business.geo.longitude}`,
    ICBM: `${business.geo.latitude}, ${business.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B3D2E",
  colorScheme: "light",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream-100 font-sans text-ink">
        <JsonLd data={localBusinessGraph()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
