import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = "Tree Rescue 24 — 24/7 emergency tree service in Tampa and Wesley Chapel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#06261C",
          color: "#F6F1E8",
          padding: 64,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 720 }}>
          <div style={{ fontSize: 28, color: "#F5C518", fontWeight: 700, letterSpacing: 6 }}>
            24/7 EMERGENCY TREE SERVICE
          </div>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, marginTop: 18 }}>
            Tree Rescue 24
          </div>
          <div style={{ fontSize: 32, marginTop: 24, color: "#FF6A00" }}>
            {business.phoneDisplay}
          </div>
          <div style={{ fontSize: 24, marginTop: 12, opacity: 0.85 }}>
            Tampa · Wesley Chapel · Hillsborough & Pasco
          </div>
        </div>
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: 999,
            border: "14px solid #FF6A00",
            background: "#0B3D2E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 96,
            color: "#F5C518",
            fontWeight: 800,
          }}
        >
          24
        </div>
      </div>
    ),
    { ...size },
  );
}
