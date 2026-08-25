import { NextResponse } from "next/server";
import { submitIndexNow } from "@/lib/indexnow";

export async function POST(request: Request) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization");
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const urls = Array.isArray(body.urls) ? body.urls : undefined;
  const result = await submitIndexNow(urls);
  return NextResponse.json(result);
}

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  const token = new URL(request.url).searchParams.get("secret");
  if (secret && token !== secret) {
    return NextResponse.json({
      ok: true,
      endpoint: "/api/indexnow",
      hint: "POST with Authorization: Bearer CRON_SECRET to submit URLs",
    });
  }
  const result = await submitIndexNow();
  return NextResponse.json(result);
}
