import { NextResponse } from "next/server";

import { env } from "@/lib/env";

export async function GET() {
  const requiredProductionConfig = {
    NEXT_PUBLIC_SUPABASE_URL: Boolean(env.supabaseUrl),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: Boolean(env.supabaseAnon),
    SUPABASE_SERVICE_ROLE_KEY: Boolean(env.supabaseService),
    STRIPE_SECRET_KEY: Boolean(env.stripeSecret),
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: Boolean(env.stripePublishable),
    STRIPE_WEBHOOK_SECRET: Boolean(env.stripeWebhook)
  };

  const missing = Object.entries(requiredProductionConfig)
    .filter(([, configured]) => !configured)
    .map(([name]) => name);

  const status = missing.length === 0 ? "ok" : "degraded";

  return NextResponse.json(
    {
      status,
      timestamp: new Date().toISOString(),
      checks: {
        config: {
          healthy: missing.length === 0,
          missing
        }
      }
    },
    { status: missing.length === 0 ? 200 : 503 }
  );
}
