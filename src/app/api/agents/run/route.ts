import { NextRequest, NextResponse } from "next/server";
import { runWithProvider } from "@/lib/ai/providers";
export async function POST(req: NextRequest) {
  const { agent = "Research Agent", provider = "mock" } = await req.json();
  const result = await runWithProvider(provider, { task: agent });
  return NextResponse.json({ agent, ...result, why: "Scheduled automation placeholder endpoint." });
}
