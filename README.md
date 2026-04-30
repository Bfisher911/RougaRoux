# RougaRoux

Production-ready MVP foundation for an AI-operated New Orleans digital magazine, newsletter, and advertising business.

## Stack
- Next.js App Router + TypeScript + Tailwind
- Supabase schema + seed SQL
- Stripe checkout/webhook placeholders
- Provider-agnostic AI agent layer (OpenAI/Anthropic/Gemini/mock)

## Features delivered
- Public pages: home, events, newsletter, advertise, ask advice, submit tip
- Admin dashboard with AI agent control center and workflow framing
- Reusable required UI components (article, events, ad placement, moderation/editorial controls)
- Supabase schema for content, ads, subscriptions, advice, tips, events, agents, settings
- Seed data for categories/articles/packages
- Human Review Mode default, controlled auto-publish policy documented in admin UI

## Local setup
1. `cp .env.example .env.local`
2. Fill Supabase and Stripe keys.
3. `npm install`
4. `npm run dev`

## Supabase
- Run migration: `supabase db push` (or execute `supabase/migrations/001_init.sql`)
- Seed: execute `supabase/seed/seed.sql`

## Stripe integration points
- `src/app/api/stripe/checkout/route.ts`
- `src/app/api/stripe/webhook/route.ts`

## AI integration points
- `src/lib/ai/providers.ts`
- Add real provider SDK calls, keeping return type stable.
- Nano Banana placeholder: handled through Image/Ad Creative agent outputs until wired.

## Cron / scheduling
Use Supabase scheduled functions or external cron to hit:
- `POST /api/agents/run?agent=research`
- same endpoint for planner, writer, fact-checking, seo, newsletter, marketing, analytics, moderation.
