import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
} & VariantProps<typeof buttonVariants>;

export function ButtonLink({
  href,
  children,
  className,
  external,
  variant,
  size,
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
