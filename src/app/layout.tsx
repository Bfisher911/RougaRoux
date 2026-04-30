import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: "RougaRoux | New Orleans News, Events, and Culture",
    template: "%s | RougaRoux"
  },
  description:
    "RougaRoux is an AI-assisted New Orleans digital magazine covering local culture, events, food, and nightlife with human editorial review.",
  openGraph: {
    title: "RougaRoux",
    description:
      "AI-assisted local reporting and event coverage with human editorial oversight.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RougaRoux",
    description:
      "New Orleans stories, events, and local advice powered by AI and reviewed by editors."
  }
};

const navLinks = [
  ["/", "Home"],
  ["/events", "Events"],
  ["/advertise", "Advertise"],
  ["/ask-advice", "Dating Advice"],
  ["/submit-tip", "Submit a Tip"],
  ["/newsletter", "Newsletter"],
  ["/admin", "Admin"]
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b p-4 flex flex-wrap gap-4" aria-label="Main navigation">
          {navLinks.map(([href, label]) => (
            <Link key={href} href={href} className="hover:underline">
              {label}
            </Link>
          ))}
        </header>
        <main className="p-6 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
