import Link from "next/link";

export function ArticleCard({ title, excerpt }: { title: string; excerpt: string }) { return <article className="rounded-xl border p-4 bg-white/80 dark:bg-stone-900"><h3 className="font-semibold">{title}</h3><p className="text-sm opacity-80">{excerpt}</p><Link href="/article/sample" className="text-brand-river">Read</Link></article>; }
export const FeaturedArticleHero = ({ title }: { title: string }) => <section className="rounded-2xl border bg-gradient-to-r from-brand-purple to-brand-river text-white p-8"><h1 className="text-3xl font-bold">{title}</h1></section>;
export const CategoryNav = () => <nav className="flex flex-wrap gap-2 text-sm">{["Events","Food & Nightlife","History","Underground","Dating Advice","Neighborhoods"].map(c=><span className="px-3 py-1 rounded-full border" key={c}>{c}</span>)}</nav>;
export const EventCard = ({ name }: { name: string }) => <div className="rounded border p-3">{name}</div>;
export const AdPlacement = () => <aside className="rounded border-dashed border-2 p-4 text-xs">Sponsored Placement</aside>;
export const NewsletterSignup = () => <form className="flex gap-2"><input className="border rounded px-3 py-2" placeholder="Email"/><button className="px-3 py-2 rounded bg-brand-gold">Subscribe</button></form>;
export const AdvertisePackageCard = ({ name, price }: { name: string; price: string }) => <div className="border rounded p-4"><h4>{name}</h4><p>{price}</p></div>;
export const StripeCheckoutButton = () => <button className="px-3 py-2 rounded bg-brand-river text-white">Checkout</button>;
export const AdviceQuestionForm = () => <form className="grid gap-2"><textarea className="border rounded p-2" placeholder="Ask anonymously..."/><button className="bg-brand-purple text-white rounded px-3 py-2">Submit</button></form>;
export const TipSubmissionForm = () => <form className="grid gap-2"><input className="border rounded p-2" placeholder="Tip title"/><button className="rounded bg-brand-river text-white px-3 py-2">Send Tip</button></form>;
