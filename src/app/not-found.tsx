import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-20 text-center">
      <p className="font-mono text-[11px] tracking-widest text-primary uppercase">
        Empty book
      </p>
      <h1 className="font-heading mt-3 text-4xl">That desk is not on the shortlist.</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Only three teams cleared the acquire-and-deploy bar. Everything else
        is a runner-up or an anecdote.
      </p>
      <div className="mt-6">
        <ButtonLink href="/">Return to the dossier</ButtonLink>
      </div>
    </main>
  );
}
