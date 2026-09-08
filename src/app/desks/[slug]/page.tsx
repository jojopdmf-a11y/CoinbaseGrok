import Link from "next/link";
import { notFound } from "next/navigation";
import { CopyBlock } from "@/components/copy-block";
import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { desks, executionPrompt, getDesk } from "@/lib/desks";

export function generateStaticParams() {
  return desks.map((desk) => ({ slug: desk.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const desk = getDesk(slug);
  if (!desk) return { title: "Desk not on the shortlist" };
  return {
    title: `${desk.name} — acquire and deploy`,
    description: desk.verdict,
  };
}

export default async function DeskPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const desk = getDesk(slug);
  if (!desk) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10 sm:px-6 sm:py-14">
      <Link
        href="/#shortlist"
        className="font-mono text-[11px] tracking-widest text-primary uppercase hover:underline"
      >
        ← Back to shortlist
      </Link>

      <div className="mt-6 flex flex-wrap gap-2">
        <Badge variant="outline" className="font-mono tracking-widest">
          {String(desk.rank).padStart(2, "0")} · {desk.callsign}
        </Badge>
        <Badge variant="secondary">{desk.acquireMethod}</Badge>
        <Badge variant="secondary">{desk.license}</Badge>
      </div>

      <h1 className="font-heading mt-4 text-4xl leading-tight text-balance sm:text-5xl">
        {desk.name}
      </h1>
      <p className="mt-2 font-mono text-xs text-muted-foreground">
        {desk.creator}
        {desk.creatorHandle ? ` · @${desk.creatorHandle}` : ""}
      </p>
      <p className="mt-5 text-lg leading-relaxed text-foreground/90">
        {desk.verdict}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {desk.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {desk.acquireUrl ? (
          <ButtonLink href={desk.acquireUrl} external>
            {desk.acquireLabel}
          </ButtonLink>
        ) : null}
        <ButtonLink href="/" variant="outline">
          Compare all three
        </ButtonLink>
      </div>

      <Separator className="my-10" />

      <section className="space-y-3">
        <h2 className="font-heading text-2xl">Why this one is cracked</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
          {desk.whyCracked.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl">Limits</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
          {desk.limits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl">Seats</h2>
        <ul className="divide-y divide-border rounded-lg border border-border">
          {desk.seats.map((seat) => (
            <li key={seat.name} className="flex items-start justify-between gap-4 p-3">
              <div>
                <p className="font-medium">{seat.name}</p>
                <p className="text-sm text-muted-foreground">{seat.job}</p>
              </div>
              <Badge variant={seat.writesExchange ? "destructive" : "outline"}>
                {seat.writesExchange ? "Writes book" : "Read only"}
              </Badge>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl">HFT fit</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {desk.hftFit}
        </p>
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl">Acquire and deploy</h2>
        <p className="text-sm text-muted-foreground">
          {desk.cost} · {desk.deployMinutes}
        </p>
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
          {desk.runbook.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        {desk.fallback ? (
          <p className="rounded-md border border-border bg-secondary/40 p-3 font-mono text-xs leading-relaxed">
            Fallback: {desk.fallback}
          </p>
        ) : null}
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl">First message</h2>
        <CopyBlock label="Paste into the Bot" text={desk.firstMessage} />
        {desk.slug === "roundtable" ? (
          <CopyBlock
            label="Bot 2 — Trade Execution and Risk Desk"
            text={executionPrompt}
          />
        ) : null}
      </section>

      <section className="mt-10 space-y-3">
        <h2 className="font-heading text-2xl">Sources</h2>
        <ul className="space-y-2 text-sm">
          {desk.sources.map((source) => (
            <li key={source.href}>
              <a
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
