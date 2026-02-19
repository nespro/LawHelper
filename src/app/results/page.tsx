"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import ArticleCard from "@/components/ArticleCard";
import type { SearchResponse } from "@/lib/types";

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") ?? "";

  const [data, setData] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [newQuery, setNewQuery] = useState(query);

  useEffect(() => {
    if (!query) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => {
        if (!res.ok) throw new Error("Suche fehlgeschlagen");
        return res.json();
      })
      .then((json: SearchResponse) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = newQuery.trim();
    if (trimmed) {
      router.push(`/results?q=${encodeURIComponent(trimmed)}`);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      {/* Search form */}
      <form onSubmit={handleSearch} className="relative mb-8">
        <input
          type="text"
          value={newQuery}
          onChange={(e) => setNewQuery(e.target.value)}
          placeholder="Neue Frage stellen..."
          className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3.5 pr-32 text-sm text-[var(--color-foreground)] placeholder:text-[var(--color-muted)] shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/40 focus:border-[var(--color-accent)]"
          aria-label="Neue Frage stellen"
        />
        <button
          type="submit"
          disabled={!newQuery.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--color-accent-light)] disabled:opacity-40"
        >
          Suchen
        </button>
      </form>

      {/* Query context */}
      {query && (
        <div className="mb-6">
          <p className="text-sm text-[var(--color-muted)]">
            Ergebnisse für:{" "}
            <span className="font-medium text-[var(--color-foreground)]">
              &laquo;{query}&raquo;
            </span>
          </p>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="animate-pulse-slow rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
            >
              <div className="h-4 w-24 rounded bg-[var(--color-border)] mb-3" />
              <div className="h-5 w-2/3 rounded bg-[var(--color-border)] mb-2" />
              <div className="h-3 w-full rounded bg-[var(--color-border)]" />
            </div>
          ))}
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center dark:border-red-900 dark:bg-red-950/30">
          <p className="text-sm font-medium text-red-700 dark:text-red-400">
            Ein Fehler ist aufgetreten
          </p>
          <p className="mt-1 text-xs text-red-600 dark:text-red-500">
            {error}
          </p>
        </div>
      )}

      {/* No results */}
      {!loading && !error && data && data.results.length === 0 && (
        <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-10 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--color-accent)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-base font-semibold text-[var(--color-foreground)] mb-1">
            Keine Ergebnisse gefunden
          </h3>
          <p className="text-sm text-[var(--color-muted)] max-w-md mx-auto">
            Versuchen Sie, Ihre Frage anders zu formulieren oder verwenden Sie
            spezifischere Begriffe wie &laquo;Scheidung&raquo;,
            &laquo;Mietvertrag&raquo; oder &laquo;Kündigung&raquo;.
          </p>
        </div>
      )}

      {/* Results list */}
      {!loading && !error && data && data.results.length > 0 && (
        <>
          <p className="mb-4 text-xs text-[var(--color-muted)]">
            {data.results.length} Artikel gefunden
          </p>
          <div className="space-y-4">
            {data.results.map((result, index) => (
              <ArticleCard
                key={`${result.article.code}-${result.article.article_number}-${index}`}
                result={result}
                index={index}
              />
            ))}
          </div>
        </>
      )}

      {/* Disclaimer */}
      <div className="mt-10 rounded-lg bg-red-50/50 border border-red-200/50 p-4 text-center dark:bg-red-950/20 dark:border-red-800/30">
        <p className="text-xs text-red-800 dark:text-red-400 leading-relaxed">
          Diese Ergebnisse dienen ausschliesslich der Information und stellen
          keine Rechtsberatung dar. Für verbindliche Auskünfte konsultieren
          Sie bitte eine Fachperson.
        </p>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="animate-pulse-slow space-y-4">
            <div className="h-12 w-full rounded-xl bg-[var(--color-border)]" />
            <div className="h-4 w-48 rounded bg-[var(--color-border)]" />
            <div className="h-32 w-full rounded-xl bg-[var(--color-border)]" />
          </div>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
