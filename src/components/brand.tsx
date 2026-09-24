import { Link } from "@tanstack/react-router";

export function Brand({ compact = false, inverse = false }: { compact?: boolean; inverse?: boolean }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <span className="grid size-10 shrink-0 place-items-center bg-primary text-primary-foreground" aria-hidden="true">
        <span className="font-display text-xl font-bold">N</span>
      </span>
      {!compact && (
        <span className="leading-none">
          <span className={`block font-display text-lg font-bold ${inverse ? "text-primary-foreground" : "text-foreground"}`}>Northstar</span>
          <span className={`mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] ${inverse ? "text-primary-foreground/60" : "text-muted-foreground"}`}>Institute</span>
        </span>
      )}
    </Link>
  );
}