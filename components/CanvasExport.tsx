"use client";

import { useState } from "react";
import { business, fullAddress } from "@/lib/business";

type AssetKind = "card" | "magnet";

function drawAsset(kind: AssetKind) {
  const canvas = document.createElement("canvas");
  if (kind === "card") {
    canvas.width = 1050;
    canvas.height = 600;
  } else {
    canvas.width = 2400;
    canvas.height = 1200;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unsupported");

  ctx.fillStyle = "#06261C";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const rail = kind === "card" ? 320 : 670;
  ctx.fillStyle = "#0B3D2E";
  ctx.fillRect(0, 0, rail, canvas.height);

  ctx.strokeStyle = "#FF6A00";
  ctx.lineWidth = kind === "card" ? 16 : 28;
  ctx.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);

  ctx.fillStyle = "#F6F1E8";
  ctx.beginPath();
  const cx = rail / 2;
  const cy = canvas.height / 2 - 20;
  const r = kind === "card" ? 90 : 220;
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = "#0B3D2E";
  ctx.fill();
  ctx.strokeStyle = "#FF6A00";
  ctx.lineWidth = kind === "card" ? 10 : 18;
  ctx.stroke();
  ctx.fillStyle = "#F5C518";
  ctx.font = `800 ${kind === "card" ? 64 : 140}px Impact, Arial Black, sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText("24", cx, cy + (kind === "card" ? 22 : 48));

  const textX = rail + (kind === "card" ? 36 : 80);
  ctx.textAlign = "left";
  ctx.fillStyle = "#F6F1E8";
  ctx.font = `800 ${kind === "card" ? 46 : 120}px Impact, Arial Black, sans-serif`;
  ctx.fillText("TREE RESCUE 24", textX, kind === "card" ? 160 : 320);
  ctx.fillStyle = "#FF6A00";
  ctx.font = `800 ${kind === "card" ? 40 : 110}px Impact, Arial Black, sans-serif`;
  ctx.fillText(business.phoneDisplay, textX, kind === "card" ? 230 : 480);
  ctx.fillStyle = "#F5C518";
  ctx.font = `700 ${kind === "card" ? 18 : 36}px Arial, sans-serif`;
  ctx.fillText(
    "24/7 EMERGENCY REMOVAL  ·  TRIMMING  ·  STUMP GRINDING",
    textX,
    kind === "card" ? 290 : 580,
  );
  ctx.fillStyle = "#F6F1E8";
  ctx.font = `${kind === "card" ? 20 : 40}px Arial, sans-serif`;
  ctx.fillText("treerescue24.com", textX, kind === "card" ? 360 : 680);
  ctx.font = `${kind === "card" ? 16 : 28}px Arial, sans-serif`;
  ctx.fillStyle = "rgba(246,241,232,0.8)";
  ctx.fillText(fullAddress, textX, kind === "card" ? 400 : 740);

  return canvas;
}

export function CanvasExport({ kind }: { kind: AssetKind }) {
  const [status, setStatus] = useState("");

  function download() {
    const canvas = drawAsset(kind);
    canvas.toBlob((blob) => {
      if (!blob) {
        setStatus("Could not export PNG");
        return;
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download =
        kind === "card"
          ? "treerescue24-business-card.png"
          : "treerescue24-magnetic-sign.png";
      a.click();
      URL.revokeObjectURL(url);
      setStatus("PNG downloaded");
    }, "image/png");
  }

  return (
    <div className="mt-4 print:hidden">
      <button
        type="button"
        onClick={download}
        className="rounded-full border border-forest-800 px-4 py-2 text-sm font-bold text-forest-950 hover:bg-white"
      >
        Download print PNG (canvas)
      </button>
      {status ? <p className="mt-2 text-xs text-forest-800">{status}</p> : null}
    </div>
  );
}
