import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, Monitor, GraduationCap } from "lucide-react";
import type { Program } from "@/lib/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <header className="page-intro"><div className="site-container"><p className="eyebrow text-accent">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.03] text-primary-foreground md:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/75">{description}</p></div></header>;
}

export function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return <div className="max-w-3xl"><p className={`eyebrow ${light ? "text-accent" : "text-primary"}`}>{eyebrow}</p><h2 className={`mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>{copy && <p className={`mt-5 max-w-2xl text-lg leading-8 ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{copy}</p>}</div>;
}

export function ProgramCard({ program }: { program: Program }) {
  return <article className="group flex h-full flex-col border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl md:p-7"><div className="flex items-start justify-between gap-4"><Badge variant="secondary">{program.category}</Badge><span className="text-xs font-bold uppercase text-muted-foreground">{program.school}</span></div><h3 className="mt-7 font-display text-2xl font-semibold leading-tight text-foreground">{program.title}</h3><p className="mt-4 flex-1 leading-7 text-muted-foreground">{program.description}</p><div className="mt-6 grid grid-cols-3 gap-2 border-y border-border py-4 text-xs text-muted-foreground"><span className="flex items-center gap-1.5"><Clock3 className="size-4 text-primary" />{program.duration}</span><span className="flex items-center gap-1.5"><Monitor className="size-4 text-primary" />{program.mode}</span><span className="flex items-center gap-1.5"><GraduationCap className="size-4 text-primary" />{program.level}</span></div><Button asChild variant="link" className="mt-4 h-auto justify-start px-0 text-sm font-bold"><Link to="/programs/$slug" params={{ slug: program.slug }}>Explore programme <ArrowRight /></Link></Button></article>;
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return <Accordion type="single" collapsible className="w-full">{items.map((item, index) => <AccordionItem key={item.q} value={`faq-${index}`}><AccordionTrigger className="py-6 text-base">{item.q}</AccordionTrigger><AccordionContent className="max-w-3xl pb-6 text-base leading-7 text-muted-foreground">{item.a}</AccordionContent></AccordionItem>)}</Accordion>;
}

export function AdmissionsBand() {
  return <section className="bg-accent py-16 md:py-20"><div className="site-container grid items-end gap-8 md:grid-cols-[1fr_auto]"><div><p className="eyebrow text-accent-foreground">Your next chapter</p><h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-accent-foreground md:text-5xl">Bring your ambition. We’ll help you give it direction.</h2></div><Button asChild size="lg" className="shrink-0"><Link to="/admissions">Begin your application <ArrowRight /></Link></Button></div></section>;
}