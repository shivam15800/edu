import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Check, Menu, Search } from "lucide-react";
import { Brand } from "@/components/brand";
import { programs, faculty, stories } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const links = [
  ["Programs", "/programs"], ["Admissions", "/admissions"], ["Faculty", "/faculty"], ["About", "/about"], ["Campus Life", "/campus-life"], ["Events & News", "/events"], ["Contact", "/contact"],
] as const;

function SearchDialog() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const pages = links.map(([title, path]) => ({ title, detail: "Page", path }));
    return [
      ...programs.map((p) => ({ title: p.title, detail: p.category, path: `/programs/${p.slug}` })),
      ...faculty.map((f) => ({ title: f.name, detail: f.role, path: "/faculty" })),
      ...stories.map((s) => ({ title: s.title, detail: s.type, path: `/events/${s.slug}` })),
      ...pages,
    ].filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(q)).slice(0, 8);
  }, [query]);
  return <Dialog><DialogTrigger asChild><Button variant="ghost" size="icon" className="min-h-11 min-w-11" aria-label="Search the site"><Search /></Button></DialogTrigger><DialogContent className="top-[12%] max-w-2xl translate-y-0 p-0"><DialogHeader className="border-b border-border px-6 py-5"><DialogTitle className="font-display text-2xl">Search Northstar</DialogTitle><DialogDescription>Find programmes, faculty, news, and key pages.</DialogDescription></DialogHeader><div className="p-6"><label htmlFor="global-search" className="sr-only">Search</label><div className="relative"><Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" /><Input id="global-search" autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try ‘data science’ or ‘admissions’" className="h-12 pl-12" /></div><div className="mt-4 max-h-80 overflow-auto">{query.length < 2 ? <p className="py-8 text-center text-sm text-muted-foreground">Enter at least two characters to search.</p> : results.length ? <ul>{results.map((item) => <li key={`${item.path}-${item.title}`}><a href={item.path} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-2 py-4 transition-colors hover:bg-muted"><span className="min-w-0 font-medium text-foreground">{item.title}</span><span className="shrink-0 text-xs font-bold uppercase text-muted-foreground">{item.detail}</span></a></li>)}</ul> : <div className="py-10 text-center"><p className="font-display text-xl font-semibold">No results found</p><p className="mt-2 text-sm text-muted-foreground">Try a broader subject or browse all programmes.</p></div>}</div></div></DialogContent></Dialog>;
}

function Header() {
  return <><div className="bg-primary py-2 text-primary-foreground"><div className="site-container grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 text-xs"><p className="truncate"><span className="font-bold text-accent">Admissions update</span> &nbsp; Applications for the next intake are now open. We’re welcoming new learners for the upcoming term.</p><Link to="/admissions" className="shrink-0 font-bold underline underline-offset-4">View details</Link></div></div><header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur"><div className="site-container grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex"><Brand /><nav className="ml-auto hidden items-center lg:flex" aria-label="Primary navigation">{links.slice(0, 6).map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "text-primary" }} className="px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:text-primary">{label}</Link>)}</nav><div className="flex shrink-0 items-center gap-1"><SearchDialog /><Button asChild className="hidden sm:inline-flex"><Link to="/contact">Enquire <ArrowRight /></Link></Button><Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="min-h-11 min-w-11 lg:hidden" aria-label="Open navigation"><Menu /></Button></SheetTrigger><SheetContent className="w-full max-w-sm"><SheetHeader className="text-left"><SheetTitle><Brand /></SheetTitle><SheetDescription>Explore Northstar Institute.</SheetDescription></SheetHeader><nav className="mt-8 flex flex-col" aria-label="Mobile navigation">{links.map(([label, to]) => <SheetClose asChild key={to}><Link to={to} className="border-b border-border py-4 font-display text-2xl font-semibold text-foreground">{label}</Link></SheetClose>)}</nav></SheetContent></Sheet></div></div></header></>;
}

function Newsletter() {
  const [email, setEmail] = useState(""); const [sent, setSent] = useState(false); const [error, setError] = useState("");
  const submit = (e: FormEvent) => { e.preventDefault(); if (!/^\S+@\S+\.\S+$/.test(email)) { setError("Enter a valid email address."); return; } setError(""); setSent(true); };
  if (sent) return <p className="flex items-center gap-2 text-sm text-primary-foreground"><Check className="size-4 text-accent" /> You’re on the list. Thank you.</p>;
  return <form onSubmit={submit} noValidate><label htmlFor="newsletter" className="text-sm font-semibold text-primary-foreground">Institute updates</label><div className="mt-3 flex gap-2"><Input id="newsletter" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="border-primary-foreground/30 bg-primary-foreground text-foreground" aria-describedby={error ? "newsletter-error" : undefined} /><Button type="submit" variant="accent">Subscribe</Button></div>{error && <p id="newsletter-error" className="mt-2 text-xs text-accent">{error}</p>}</form>;
}

function Footer() {
  return <footer className="bg-primary text-primary-foreground"><div className="site-container grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1.3fr]"><div><Brand inverse /><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/65">Serious learning for people ready to shape what comes next. We create practical, ambitious education for a changing world.</p></div><div><h2 className="text-sm font-bold uppercase text-accent">Explore</h2><div className="mt-4 flex flex-col gap-3 text-sm">{links.slice(0, 4).map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</div></div><div><h2 className="text-sm font-bold uppercase text-accent">Connect</h2><div className="mt-4 flex flex-col gap-3 text-sm"><Link to="/campus-life">Campus life</Link><Link to="/events">Events & news</Link><Link to="/contact">Contact</Link><span>Student portal</span></div></div><Newsletter /></div><div className="border-t border-primary-foreground/15"><div className="site-container flex flex-col gap-2 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:justify-between"><p>© 2026 Northstar Institute.</p><p>Shaping thoughtful, capable graduates for the next chapter.</p></div></div></footer>;
}

export function SiteShell({ children }: { children: ReactNode }) { return <div className="min-h-screen bg-background"><Header /><main>{children}</main><Footer /></div>; }