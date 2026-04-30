import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export async function POST() {
  if (!env.stripeWebhook) {
    return NextResponse.json(
      { ok: false, error: "Stripe webhook secret missing. Add STRIPE_WEBHOOK_SECRET." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, message: "Handle Stripe webhook verification and subscription sync here." });
}
