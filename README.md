# LawHelper.ch

A Swiss legal-tech web application that helps users find relevant articles from the **ZGB** (Zivilgesetzbuch / Swiss Civil Code) and the **OR** (Obligationenrecht / Code of Obligations) by describing their legal situation in natural language.

## Features

- Natural-language search for Swiss civil-law articles
- Keyword extraction with German NLP and synonym expansion
- Ranked results with matched-keyword highlights
- Direct links to the official **Fedlex** platform for each article
- Responsive, modern UI built with Next.js, TypeScript, and TailwindCSS
- Basic rate limiting on the API
- Full SEO metadata

## Tech Stack

| Layer     | Technology                       |
|-----------|----------------------------------|
| Framework | Next.js 15 (App Router)          |
| Language  | TypeScript                       |
| Styling   | TailwindCSS v4                   |
| Data      | Static JSON dataset (ZGB & OR)   |
| Hosting   | Vercel (recommended)             |

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
git clone https://github.com/your-username/law-helper.git
cd law-helper
npm install
```

### Development

```bash
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Linting & Type-checking

```bash
npm run lint
npm run typecheck
```

## Project Structure

```
src/
├── app/
│   ├── api/search/route.ts   # Search API endpoint
│   ├── results/page.tsx       # Results page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage
│   └── globals.css            # Global styles
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SearchBar.tsx
│   └── ArticleCard.tsx
├── data/
│   └── articles.ts            # ZGB & OR article database
└── lib/
    ├── types.ts               # TypeScript interfaces
    ├── keywords.ts            # Keyword extraction engine
    └── search.ts              # Search & ranking logic
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no additional configuration needed
4. Set environment variables from `.env.example` in the Vercel dashboard

### Other Platforms

Any platform that supports Node.js and Next.js (Railway, Render, Netlify, etc.):

```bash
npm run build
npm start
```

## Legal Disclaimer

This platform provides **legal information only** and does **not** constitute legal advice. The displayed results do not replace consultation with a qualified legal professional.

- No outcome predictions are made.
- No attorney-client relationship is established.
- For personal legal advice, consult a **qualified attorney in Switzerland**.

## License

MIT
