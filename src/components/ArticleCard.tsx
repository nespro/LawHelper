import type { SearchResult } from "@/lib/types";

interface ArticleCardProps {
  result: SearchResult;
  index: number;
}

const CODE_STYLES: Record<string, string> = {
  ZGB: "bg-blue-50 text-[var(--color-zgb)] dark:bg-blue-950/40",
  OR: "bg-purple-50 text-[var(--color-or)] dark:bg-purple-950/40",
  SVG: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
  SchKG: "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400",
};

export default function ArticleCard({ result, index }: ArticleCardProps) {
  const { article, matchedKeywords } = result;

  return (
    <article
      className="animate-fade-in rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-all hover:shadow-md hover:border-[var(--color-accent)]/30"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 mb-2">
            <span
              className={`inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold ${
                CODE_STYLES[article.code] ?? CODE_STYLES.OR
              }`}
            >
              {article.code}
            </span>
            <span className="text-sm font-semibold text-[var(--color-foreground)]">
              {article.article_number}
            </span>
            <span className="text-xs text-[var(--color-muted)]">
              {article.category}
            </span>
          </div>

          <h3 className="text-base font-semibold text-[var(--color-foreground)] mb-1.5">
            {article.title}
          </h3>

          <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
            {article.summary}
          </p>

          {matchedKeywords.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {matchedKeywords.slice(0, 5).map((kw) => (
                <span
                  key={kw}
                  className="inline-block rounded-full bg-[var(--color-accent)]/10 px-2.5 py-0.5 text-xs text-[var(--color-accent)]"
                >
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>

        <a
          href={article.fedlex_url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-lg bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--color-accent-light)] hover:shadow-sm"
          aria-label={`Offiziellen Artikel ${article.article_number} ${article.code} auf Fedlex öffnen`}
        >
          Artikel ansehen
        </a>
      </div>
    </article>
  );
}
