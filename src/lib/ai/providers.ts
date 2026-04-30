export type AIProvider = "openai" | "anthropic" | "gemini" | "mock";
export type AgentInput = { task: string; context?: Record<string, unknown> };
export type AgentOutput = { content: string; confidence: "high" | "medium" | "low"; requiresHumanReview: boolean };

export async function runWithProvider(provider: AIProvider, input: AgentInput): Promise<AgentOutput> {
  if (provider === "mock") return { content: `Mock output for ${input.task}`, confidence: "medium", requiresHumanReview: true };
  return { content: `Placeholder ${provider} output for ${input.task}. Connect real SDK in src/lib/ai/providers.ts`, confidence: "medium", requiresHumanReview: true };
}

export const agents = ["Research Agent","Editorial Planner Agent","Writer Agent","Fact-Checking Agent","SEO Agent","Image Agent","Ad Creative Agent","Marketing Agent","Sales Agent","Advice Column Agent","Newsletter Agent","Analytics Agent","Moderation Agent"];
