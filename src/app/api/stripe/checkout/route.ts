import { NextResponse } from "next/server";
export async function POST() { return NextResponse.json({ ok: true, message: "Create Stripe checkout session here using STRIPE_SECRET_KEY." }); }
