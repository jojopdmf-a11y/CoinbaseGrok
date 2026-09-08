"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CopyBlock({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-secondary/40">
      <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-2">
        <p className="font-mono text-[11px] tracking-wider text-muted-foreground uppercase">
          {label}
        </p>
        <Button size="sm" variant="outline" onClick={copy}>
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <pre className="max-h-72 overflow-auto p-3 font-mono text-xs leading-relaxed whitespace-pre-wrap text-foreground/90">
        {text}
      </pre>
    </div>
  );
}
