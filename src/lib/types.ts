export interface LegalArticle {
  code: "ZGB" | "OR" | "SVG" | "SchKG";
  article_number: string;
  title: string;
  summary: string;
  keywords: string[];
  category: string;
  fedlex_url: string;
}

export interface SearchResult {
  article: LegalArticle;
  score: number;
  matchedKeywords: string[];
}

export interface SearchResponse {
  results: SearchResult[];
  query: string;
  extractedKeywords: string[];
}

export interface SearchError {
  error: string;
  message: string;
}
