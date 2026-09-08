import Link from "next/link";
import { DeskCard } from "@/components/desk-card";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/button-link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { builtDesk, communityDesks, desks, huntNotes, runnersUp } from "@/lib/desks";

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-10 sm:px-6 sm:py-14">
      <section className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div className="space-y-5">
          <p className="font-mono text-[11px] tracking-[0.28em] text-primary uppercase">
            Filed 8 Sep 2026 · community scan since Grok Bot launch 11 Aug
          </p>
          <h1 className="font-heading max-w-3xl text-4xl leading-[1.05] text-balance sm:text-6xl">
            CoinbaseGrok is on the floor.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            HyperGrok cannot be pointed at Coinbase Advanced. We adapted the
            seven-seat model anyway: same tickets, one writer, your approval
            by id. The venue layer is CDP keys, official preview, and
            <span className="text-foreground"> coinbase-desk/</span> in this
            repo. The three community desks we hunted stay on the shortlist
            below.
          </p>
        </div>
        <aside className="rounded-lg border border-primary/25 bg-card/70 p-5">
          <p className="font-mono text-[11px] tracking-widest text-primary uppercase">
            Acquisition status
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed">
            <li>2 one-click x.ai templates — preview pages live today.</li>
            <li>1 paste-in dual prompt — full text on botdirectory.</li>
            <li>0 paid SKUs. 0 “buy this desk” marketplaces that ship code.</li>
            <li>CoinbaseGrok v0.1 ships in this repo as coinbase-desk/.</li>
          </ul>
        </aside>
      </section>

      {builtDesk ? (
        <section id="ours" className="scroll-mt-24 space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-heading text-3xl">What we are building</h2>
            <p className="font-mono text-xs text-muted-foreground">
              In this repo · Coinbase Advanced
            </p>
          </div>
          <div className="max-w-xl">
            <DeskCard desk={builtDesk} />
          </div>
        </section>
      ) : null}

      <section id="shortlist" className="scroll-mt-24 space-y-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-heading text-3xl">Community shortlist</h2>
          <p className="font-mono text-xs text-muted-foreground">
            Three desks you can acquire today
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {communityDesks.map((desk) => (
            <DeskCard key={desk.slug} desk={desk} />
          ))}
        </div>
      </section>

      <section className="space-y-4 overflow-x-auto">
        <h2 className="font-heading text-3xl">Side by side</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Seat</TableHead>
              <TableHead>Acquire</TableHead>
              <TableHead>Crypto</TableHead>
              <TableHead>Writes the book</TableHead>
              <TableHead>HFT honesty</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {desks.map((desk) => (
              <TableRow key={desk.slug}>
                <TableCell className="font-medium">
                  <Link href={`/desks/${desk.slug}`} className="hover:text-primary">
                    {desk.name}
                  </Link>
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {desk.acquireMethod}
                </TableCell>
                <TableCell>{desk.crypto}</TableCell>
                <TableCell>
                  {desk.seats.some((s) => s.writesExchange)
                    ? "Yes, behind approval"
                    : "No"}
                </TableCell>
                <TableCell className="max-w-xs text-muted-foreground">
                  {desk.hftFit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section
        id="hft"
        className="scroll-mt-24 rounded-xl border border-destructive/30 bg-destructive/5 p-6 sm:p-8"
      >
        <Badge variant="destructive" className="mb-4">
          HFT reality check
        </Badge>
        <h2 className="font-heading text-3xl text-balance">
          Nobody is selling a Grok Bot HFT desk.
        </h2>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-foreground/90 sm:text-base">
          <p>
            Grok Bot launched 11 August 2026 as an always-on teammate with one
            shared cloud computer. That architecture is excellent for a
            24/7 research-and-ticket desk. It is fatal for real HFT.
            Inference plus a remote VM plus a human “approve HG-…” gate
            lives in seconds, not microseconds.
          </p>
          <p>
            HyperGrok is the closest deployable artifact: IOC, TWAP,
            WebSocket watches, depth at 5/10/25 bps, dead-man’s switch,
            client order ids. That is a modern crypto execution desk, not
            a colocated maker. Roundtable is the closest{" "}
            <em>language</em> — latency, slippage, partial fills — still
            session-scale. Floor Chief is ops. Viral six-agent “trades
            while you sleep” clips and 68.4% win-rate PDFs are unverified;
            treat them as marketing, not inventory.
          </p>
          <p className="text-muted-foreground">
            {huntNotes.notFound}
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-heading text-3xl">How to take one home tonight</h2>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <li className="rounded-lg border border-border bg-card/70 p-5">
            <p className="font-mono text-[11px] text-primary">01</p>
            <h3 className="mt-2 font-heading text-xl">Stand up CoinbaseGrok</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Paste coinbase-desk/ into Grok Bot. Research mode first.
              This is the Coinbase Advanced book.
            </p>
            <ButtonLink
              href="/desks/coinbasegrok"
              className="mt-4"
              size="sm"
            >
              Open runbook
            </ButtonLink>
          </li>
          <li className="rounded-lg border border-border bg-card/70 p-5">
            <p className="font-mono text-[11px] text-primary">02</p>
            <h3 className="mt-2 font-heading text-xl">Or add HyperGrok</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              One-click Desk Lead if you want Hyperliquid instead.
              Testnet before mainnet.
            </p>
            <ButtonLink
              href="https://x.ai/bot/PReCwAHq8Vgeex50r883H"
              external
              className="mt-4"
              size="sm"
            >
              Open share page
            </ButtonLink>
          </li>
          <li className="rounded-lg border border-border bg-card/70 p-5">
            <p className="font-mono text-[11px] text-primary">03</p>
            <h3 className="mt-2 font-heading text-xl">Optional: Floor Chief</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If you want a front door that never holds keys, add the Hub
              Chief and let it route HyperGrok specialists.
            </p>
            <ButtonLink
              href="https://x.ai/bot/we_JMJA8IuOvy1eUX6EQz"
              external
              className="mt-4"
              size="sm"
              variant="outline"
            >
              Open share page
            </ButtonLink>
          </li>
          <li className="rounded-lg border border-border bg-card/70 p-5">
            <p className="font-mono text-[11px] text-primary">04</p>
            <h3 className="mt-2 font-heading text-xl">Or run systematic</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Paste the Roundtable pair if you want a ranked tape and a
              latency/slippage gate instead of a seven-seat pit.
            </p>
            <ButtonLink
              href="/desks/roundtable"
              className="mt-4"
              size="sm"
              variant="outline"
            >
              Copy prompts
            </ButtonLink>
          </li>
        </ol>
      </section>

      <section id="runners" className="scroll-mt-24 space-y-4">
        <h2 className="font-heading text-3xl">Looked at, not nominated</h2>
        <ul className="divide-y divide-border rounded-lg border border-border bg-card/60">
          {runnersUp.map((item) => (
            <li key={item.name} className="p-4 sm:p-5">
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary hover:underline"
              >
                {item.name}
              </a>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.note}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-heading text-3xl">What I opened</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {huntNotes.scanned.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="pt-2 text-xs text-muted-foreground">
          Not financial advice. Third-party Grok Bots can act on your
          behalf. Trade-only wallets, no seeds in chat, Auto-review on
          every financial write. Perps can liquidate an account.
        </p>
      </section>
    </main>
  );
}
