import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { runWithProvider } from "@/lib/ai/providers";

const payloadSchema = z.object({
  agent: z.string().min(2).max(120).default("Research Agent"),
  provider: z.enum(["openai", "anthropic", "gemini", "mock"]).default("mock")
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { agent, provider } = payloadSchema.parse(body);
    const result = await runWithProvider(provider, { task: agent });

    return NextResponse.json({ agent, ...result, why: "Scheduled automation placeholder endpoint." });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ ok: false, error: "Invalid request payload.", details: error.flatten() }, { status: 400 });
    }

    return NextResponse.json({ ok: false, error: "Unexpected server error." }, { status: 500 });
  }
}
