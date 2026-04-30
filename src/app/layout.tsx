import "./globals.css";
import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {return <html lang="en"><body><header className="border-b p-4 flex flex-wrap gap-4"><Link href="/">RougaRoux</Link><Link href="/events">Events</Link><Link href="/advertise">Advertise</Link><Link href="/ask-advice">Dating Advice</Link><Link href="/submit-tip">Submit a Tip</Link><Link href="/newsletter">Newsletter</Link><Link href="/admin">Admin</Link></header><main className="p-6 max-w-6xl mx-auto">{children}</main></body></html>}
