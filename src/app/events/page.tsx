import { EventCard } from "@/components/cards";
export default function Events(){return <div className="space-y-4"><h1 className="text-2xl font-bold">Events</h1><div className="grid md:grid-cols-3 gap-3">{["Fest","Market","Concert"].map(e=><EventCard key={e} name={e}/>)}</div></div>}
