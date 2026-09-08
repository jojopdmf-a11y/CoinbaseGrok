import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
            Desk Hunt
          </span>
          <span className="hidden font-heading text-lg text-foreground sm:inline">
            Grok Bot acquisition dossier
          </span>
        </Link>
        <nav className="flex items-center gap-4 font-mono text-[11px] tracking-wider uppercase text-muted-foreground">
          <Link href="/#shortlist" className="hover:text-primary">
            Shortlist
          </Link>
          <Link href="/#hft" className="hover:text-primary">
            HFT
          </Link>
          <Link href="/#runners" className="hover:text-primary">
            Runners
          </Link>
        </nav>
      </div>
    </header>
  );
}
