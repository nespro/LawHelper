import Link from "next/link";

function SwissCross() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Swiss cross"
    >
      <rect width="36" height="36" rx="8" fill="#d52b1e" />
      <rect x="15" y="8" width="6" height="20" rx="1" fill="white" />
      <rect x="8" y="15" width="20" height="6" rx="1" fill="white" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-card)]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <SwissCross />
          <span className="text-lg font-semibold text-[var(--color-foreground)]">
            Law<span className="text-[var(--color-accent)]">Helper</span>
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
