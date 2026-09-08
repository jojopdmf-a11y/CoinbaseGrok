import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Desk } from "@/lib/desks";

const cryptoLabel = {
  native: "Crypto native",
  pointable: "Crypto-pointable",
  no: "Not crypto",
} as const;

export function DeskCard({ desk }: { desk: Desk }) {
  return (
    <Card className="flex flex-col border-primary/20 bg-card/80 shadow-none">
      <CardHeader className="gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="font-mono tracking-widest">
            {String(desk.rank).padStart(2, "0")} · {desk.callsign}
          </Badge>
          <Badge variant="secondary">{cryptoLabel[desk.crypto]}</Badge>
          <Badge variant="secondary">{desk.acquireMethod}</Badge>
        </div>
        <CardTitle className="font-heading text-2xl leading-tight">
          {desk.name}
        </CardTitle>
        <p className="font-mono text-xs text-muted-foreground">
          {desk.creator}
        </p>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <p className="text-sm leading-relaxed text-foreground/90">
          {desk.verdict}
        </p>
        <dl className="grid grid-cols-2 gap-3 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
          <div>
            <dt>Venue</dt>
            <dd className="mt-1 normal-case tracking-normal text-foreground">
              {desk.venue}
            </dd>
          </div>
          <div>
            <dt>Stand-up</dt>
            <dd className="mt-1 normal-case tracking-normal text-foreground">
              {desk.deployMinutes}
            </dd>
          </div>
        </dl>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {desk.acquireUrl ? (
          <ButtonLink href={desk.acquireUrl} external>
            {desk.acquireLabel}
          </ButtonLink>
        ) : (
          <ButtonLink href={`/desks/${desk.slug}`}>
            {desk.acquireLabel}
          </ButtonLink>
        )}
        <ButtonLink href={`/desks/${desk.slug}`} variant="outline">
          Open runbook
        </ButtonLink>
      </CardFooter>
    </Card>
  );
}
