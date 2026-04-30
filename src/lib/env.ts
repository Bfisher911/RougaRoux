import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),
  STRIPE_SECRET_KEY: z.string().optional(),
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional()
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("Environment variable validation failed", parsed.error.flatten().fieldErrors);
}

const envData = parsed.success ? parsed.data : envSchema.parse({});

export const env = {
  siteUrl: envData.NEXT_PUBLIC_SITE_URL,
  supabaseUrl: envData.NEXT_PUBLIC_SUPABASE_URL ?? "",
  supabaseAnon: envData.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
  supabaseService: envData.SUPABASE_SERVICE_ROLE_KEY ?? "",
  stripeSecret: envData.STRIPE_SECRET_KEY ?? "",
  stripePublishable: envData.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "",
  stripeWebhook: envData.STRIPE_WEBHOOK_SECRET ?? ""
};
