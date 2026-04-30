import { NextResponse } from "next/server";
export async function POST() { return NextResponse.json({ ok: true, message: "Handle Stripe webhook verification and subscription sync here." }); }
