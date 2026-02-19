import { NextRequest, NextResponse } from "next/server";
import { searchArticles } from "@/lib/search";

/**
 * Simple in-memory rate limiter: max 30 requests per IP per 60 seconds.
 */
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 30;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "rate_limited", message: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 },
    );
  }

  const q = request.nextUrl.searchParams.get("q");

  if (!q || q.trim().length === 0) {
    return NextResponse.json(
      { error: "missing_query", message: "Bitte geben Sie eine Frage ein." },
      { status: 400 },
    );
  }

  if (q.length > 500) {
    return NextResponse.json(
      { error: "query_too_long", message: "Die Frage darf maximal 500 Zeichen lang sein." },
      { status: 400 },
    );
  }

  const results = searchArticles(q.trim());

  return NextResponse.json(results, {
    headers: { "Cache-Control": "public, max-age=60, s-maxage=120" },
  });
}
