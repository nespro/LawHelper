"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    setLoading(true);
    router.push(`/results?q=${encodeURIComponent(trimmed)}`);
  }

  function handleExample(text: string) {
    setQuery(text);
    setLoading(true);
    router.push(`/results?q=${encodeURIComponent(text)}`);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Beschreiben Sie Ihre rechtliche Frage..."
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-4 pr-36 text-base text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] shadow-sm transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)]"
          disabled={loading}
          aria-label="Rechtliche Frage eingeben"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[var(--color-accent-light)] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12" cy="12" r="10"
                  stroke="currentColor" strokeWidth="4" fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Suche...
            </span>
          ) : (
            "Artikel finden"
          )}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]">
          Beispiel-Fragen
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              onClick={() => handleExample(ex)}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3.5 py-1.5 text-xs text-[var(--color-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-card-hover)]"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const EXAMPLES = [
  "Ich möchte mich scheiden lassen",
  "Mein Vermieter hat mir gekündigt",
  "Wie funktioniert das Erbrecht?",
  "Mein Chef hat mich fristlos entlassen",
  "Nachbar macht zu viel Lärm",
  "Alimente für mein Kind berechnen",
];
