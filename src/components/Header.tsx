import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent)] text-white font-bold text-sm">
            LH
          </div>
          <span className="text-lg font-semibold text-[var(--color-primary)]">
            LawHelper<span className="text-[var(--color-accent)]">.ch</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm text-[var(--color-muted)]">
          <Link
            href="/"
            className="transition-colors hover:text-[var(--color-foreground)]"
          >
            Suche
          </Link>
          <a
            href="https://www.fedlex.admin.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-foreground)]"
          >
            Fedlex
          </a>
        </nav>
      </div>
    </header>
  );
}
