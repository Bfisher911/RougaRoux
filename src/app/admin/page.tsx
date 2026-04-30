import { AdminSidebar, AgentRunLog, AgentStatusCard, EditorialCalendar } from "@/components/admin";
import { agents } from "@/lib/ai/providers";
export default function Admin(){return <div className="grid md:grid-cols-[240px_1fr] gap-6"><AdminSidebar/><div className="space-y-4"><h1 className="text-2xl font-bold">Admin Dashboard</h1><p>Default mode: Human Review Mode. Controlled Auto-Publish available for low-risk categories only.</p><div className="grid md:grid-cols-3 gap-3">{agents.map(a=><AgentStatusCard key={a} name={a}/>)}</div><EditorialCalendar/><AgentRunLog/></div></div>}
