import SearchBar from "@/components/SearchBar";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 md:py-32">
      <div className="mb-4 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-1.5 text-xs font-medium text-[var(--color-muted)]">
        Schweizer Recht &middot; ZGB &middot; OR &middot; SVG &middot; SchKG
      </div>

      <h1 className="mb-4 text-center text-4xl font-bold tracking-tight text-[var(--color-foreground)] md:text-5xl lg:text-6xl">
        Finden Sie den passenden{" "}
        <span className="text-[var(--color-accent)]">Gesetzesartikel</span>
      </h1>

      <p className="mb-10 max-w-xl text-center text-base text-[var(--color-muted)] md:text-lg leading-relaxed">
        Beschreiben Sie Ihre rechtliche Situation in eigenen Worten.
        Wir zeigen Ihnen die relevanten Artikel aus dem ZGB,
        OR, SVG und SchKG.
      </p>

      <SearchBar />

      <div className="mt-16 grid max-w-3xl grid-cols-1 gap-6 text-center sm:grid-cols-3">
        {FEATURES.map((f) => (
          <div key={f.title} className="px-4">
            <div className="mb-3 mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              {f.icon}
            </div>
            <h3 className="mb-1 text-sm font-semibold text-[var(--color-foreground)]">
              {f.title}
            </h3>
            <p className="text-xs text-[var(--color-muted)] leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const FEATURES = [
  {
    title: "Einfache Suche",
    desc: "Stellen Sie Ihre Frage in natürlicher Sprache – kein juristisches Vorwissen nötig.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Offizielle Quellen",
    desc: "Alle Ergebnisse verlinken direkt auf die offizielle Fedlex-Plattform des Bundes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Kostenlos",
    desc: "Der Dienst ist kostenlos und ohne Registrierung nutzbar.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];
