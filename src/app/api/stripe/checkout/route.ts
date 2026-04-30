import { NextResponse } from "next/server";
import { env } from "@/lib/env";

export async function POST() {
  if (!env.stripeSecret) {
    return NextResponse.json(
      { ok: false, error: "Stripe is not configured. Add STRIPE_SECRET_KEY in environment." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, message: "Create Stripe checkout session here using STRIPE_SECRET_KEY." });
}
