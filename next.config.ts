import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/service-areas/:city",
        destination: "/:city",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/emergency-tree-removal",
        permanent: false,
      },
      {
        source: "/brand-assets",
        destination: "/",
        permanent: true,
      },
      {
        source: "/brand-assets/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/brand/receipt-template.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/brand/business-card.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/brand/magnetic-sign.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
