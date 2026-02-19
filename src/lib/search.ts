import { articles } from "@/data/articles";
import { extractKeywords } from "@/lib/keywords";
import type { LegalArticle, SearchResult, SearchResponse } from "@/lib/types";

const MAX_RESULTS = 5;

/**
 * Determines if two keywords are a meaningful partial match.
 *
 * Rules to prevent false positives like "auto" matching "automatische verlängerung":
 *  - Both strings must be at least 4 characters
 *  - The shorter string must cover at least 60% of the longer string's first word
 *  - Single-word query keywords only match single-word article keywords via substring
 */
function isValidPartialMatch(queryKeyword: string, articleKeyword: string): boolean {
  const qWords = queryKeyword.split(" ");
  const aWords = articleKeyword.split(" ");

  // Single query word vs multi-word article keyword:
  // only match if the query word matches one of the article keyword's words exactly
  if (qWords.length === 1 && aWords.length > 1) {
    return aWords.some((aw) => aw === queryKeyword || aw.startsWith(queryKeyword) && queryKeyword.length >= 4);
  }

  // Single query word vs single article keyword: require significant overlap
  if (qWords.length === 1 && aWords.length === 1) {
    const shorter = queryKeyword.length <= articleKeyword.length ? queryKeyword : articleKeyword;
    const longer = queryKeyword.length > articleKeyword.length ? queryKeyword : articleKeyword;
    if (shorter.length < 4) return false;
    // The shorter word must be at least 70% the length of the longer
    return shorter.length / longer.length >= 0.7 && longer.includes(shorter);
  }

  // Multi-word vs multi-word: check if one contains the other
  if (qWords.length > 1 && aWords.length > 1) {
    return articleKeyword.includes(queryKeyword) || queryKeyword.includes(articleKeyword);
  }

  // Multi-word query vs single article keyword: check if article keyword is in query
  if (qWords.length > 1 && aWords.length === 1) {
    return qWords.some((qw) => qw === articleKeyword || (articleKeyword.startsWith(qw) && qw.length >= 4));
  }

  return false;
}

/**
 * Score a single article against extracted keywords.
 *
 * Points:
 *  - Exact match → +3
 *  - Valid partial match → +1
 */
function scoreArticle(
  article: LegalArticle,
  queryKeywords: string[],
): { score: number; matched: string[] } {
  let score = 0;
  const matched = new Set<string>();

  for (const qk of queryKeywords) {
    for (const ak of article.keywords) {
      if (ak === qk) {
        score += 3;
        matched.add(ak);
      } else if (isValidPartialMatch(qk, ak)) {
        score += 1;
        matched.add(ak);
      }
    }
  }

  return { score, matched: Array.from(matched) };
}

/**
 * Main search: raw user query → ranked results.
 */
export function searchArticles(query: string): SearchResponse {
  const extractedKeywords = extractKeywords(query);

  if (extractedKeywords.length === 0) {
    return { results: [], query, extractedKeywords };
  }

  const scored: SearchResult[] = [];

  for (const article of articles) {
    const { score, matched } = scoreArticle(article, extractedKeywords);
    if (score > 0) {
      scored.push({ article, score, matchedKeywords: matched });
    }
  }

  scored.sort((a, b) => b.score - a.score);

  const deduped = deduplicateByArticle(scored);

  return {
    results: deduped.slice(0, MAX_RESULTS),
    query,
    extractedKeywords,
  };
}

/**
 * Keep highest-scoring entry when the same article appears multiple times.
 */
function deduplicateByArticle(results: SearchResult[]): SearchResult[] {
  const seen = new Map<string, SearchResult>();

  for (const r of results) {
    const key = `${r.article.code}-${r.article.article_number}`;
    const existing = seen.get(key);
    if (!existing || r.score > existing.score) {
      seen.set(key, r);
    }
  }

  return Array.from(seen.values()).sort((a, b) => b.score - a.score);
}
