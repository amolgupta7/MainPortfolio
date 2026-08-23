export interface BlueprintProblem {
  icon: "warning" | "group"
  title: string
  description: string
}

export interface BlueprintDecision {
  icon: "architecture" | "storage"
  title: string
  description: string
}

export interface BlueprintEntry {
  code: string
  title: string
  summary: string
  role: string
  stack: string[]
  repoUrl?: string
  overview: string[]
  problems: BlueprintProblem[]
  architectureDescription: string
  decisions: BlueprintDecision[]
  results: { value: string; label: string }[]
  team: string[]
}

/** One entry per project, keyed by its projects.ts slug — every project gets
 * the same 5-section template (Overview / Problem & Users / Architecture /
 * Technical Decisions / Results), for consistency. For the WIP projects
 * (nothing built yet), "results" intentionally shows honest status/stack/team
 * facts instead of fabricated metrics — Hope Speech Detection is the one
 * entry with real, measured results, so it keeps those. */
export const blueprints: Record<string, BlueprintEntry> = {
  candlecraft: {
    code: "BP-2026-01",
    title: "CandleCraft",
    summary:
      "An automated intraday trading system that scans candlestick patterns and technical indicators on Indian equities and ETFs to surface high-probability trade setups, executes through broker APIs with dynamic stop-loss and position sizing, and backtests strategies against historical data before going live.",
    role: "Solo Developer",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    overview: [
      "The goal is disciplined, emotion-free execution: instead of manually watching charts, CandleCraft continuously analyzes OHLCV data pulled from broker/market-data APIs (Zerodha Kite, Upstox) and flags setups the moment its rules engine recognizes a qualifying pattern.",
      "A backtesting module replays historical data against the same strategy logic before anything goes live, so entry/exit rules can be validated and refined against past market behavior rather than tested with real capital first.",
    ],
    problems: [
      {
        icon: "warning",
        title: "The Challenge",
        description:
          "Manual chart-watching is slow to react and vulnerable to emotional decision-making — hesitating on a stop-loss or chasing a move late are common, costly mistakes a rules-based system doesn't make.",
      },
      {
        icon: "group",
        title: "The End User",
        description:
          "Retail traders who want systematic, rules-based execution on Indian equities/ETFs without watching a screen all session, while still setting their own risk tolerance.",
      },
    ],
    architectureDescription:
      "A React/TypeScript frontend pairs with a Node.js backend that ingests OHLCV data via broker APIs, computes indicators (RSI, EMA, candlestick pattern recognition) through a rules engine, and places orders through broker REST/WebSocket APIs. Trade logs persist in PostgreSQL; real-time P&L and charts stream over WebSockets, with a job scheduler (BullMQ) handling market-hours-based execution.",
    decisions: [
      {
        icon: "architecture",
        title: "Rules engine over ML",
        description:
          "A deterministic, rules-based indicator engine was chosen over a black-box ML model — every trade signal needs to be explainable and auditable after the fact, which a fixed rule set makes straightforward.",
      },
      {
        icon: "storage",
        title: "PostgreSQL for trade logs",
        description:
          "A relational store was chosen over a NoSQL option so trade history, positions, and P&L stay strongly consistent and queryable for the backtesting module and audit trail alike.",
      },
    ],
    results: [
      { value: "In Development", label: "Status" },
      { value: "5", label: "Core Technologies" },
      { value: "Solo", label: "Team" },
      { value: "Personal", label: "Project Type" },
    ],
    team: ["Solo project — design, build, and backtesting"],
  },

  hirejet: {
    code: "BP-2026-02",
    title: "HireJet",
    summary:
      "Automates the tedious parts of job hunting — pulls listings from job boards and career pages, matches them against your résumé and preferences, auto-fills applications, and tracks status on one dashboard.",
    role: "Solo Developer",
    stack: ["React", "TypeScript", "Playwright", "Node.js", "PostgreSQL"],
    overview: [
      "Applying to dozens of roles across different portals means repeating the same form fields over and over. HireJet pulls listings from major job boards and company career pages, normalizes them into one schema, and matches them against a stored résumé/preference profile using keyword and embedding similarity.",
      "Rather than just surfacing matches, it also automates the form-filling itself — Playwright drives the actual application submission using per-portal field-mapping heuristics, and a Kanban-style dashboard tracks every application's status end to end.",
    ],
    problems: [
      {
        icon: "warning",
        title: "The Challenge",
        description:
          "High-volume job hunting means re-entering the same information across dozens of differently-structured application forms, and losing track of which stage each application has reached.",
      },
      {
        icon: "group",
        title: "The End User",
        description:
          "Engineers actively job hunting who want a systematic, high-volume approach without manually repeating the same steps across every portal and company.",
      },
    ],
    architectureDescription:
      "A scraping/API layer (Playwright for dynamic sites, job-board APIs where available) pulls listings and normalizes them into a common schema. A matching algorithm scores them against a résumé/preferences profile stored in PostgreSQL. Playwright also drives form auto-fill using per-portal field-mapping heuristics, while a React/TypeScript dashboard (backed by a Node.js/Express API) renders the pipeline as a Kanban board, with webhook/IMAP email parsing to detect recruiter replies automatically.",
    decisions: [
      {
        icon: "architecture",
        title: "Playwright over a browser extension",
        description:
          "Driving applications through Playwright, rather than a browser extension, keeps the automation portable and scriptable, and lets the same engine run headlessly on a schedule instead of requiring the user's browser to stay open.",
      },
      {
        icon: "storage",
        title: "IMAP parsing for status updates",
        description:
          "Rather than requiring manual status updates, parsing recruiter replies over IMAP lets the pipeline update itself — at the cost of needing careful, conservative parsing to avoid mis-classifying an application's stage.",
      },
    ],
    results: [
      { value: "In Development", label: "Status" },
      { value: "5", label: "Core Technologies" },
      { value: "Solo", label: "Team" },
      { value: "Personal", label: "Project Type" },
    ],
    team: ["Solo project — design, build, and automation"],
  },

  grocerrace: {
    code: "BP-2026-03",
    title: "GrocerRace",
    summary:
      "Real-time price comparison across quick-commerce apps (Zepto, Blinkit, Instamart) — normalizes listings across platforms, ranks results by price/delivery time/fees, and caches lookups for speed.",
    role: "Solo Developer",
    stack: ["React", "TypeScript", "Node.js", "Redis", "Elasticsearch"],
    overview: [
      "Comparing prices across quick-commerce apps today means opening each app separately and checking manually. GrocerRace instead runs scheduled scrapers against Zepto, Blinkit, and Instamart, pulls prices, availability, and delivery ETAs, and reconciles differently-named listings for the same product with fuzzy matching.",
      "A single search then returns a ranked, side-by-side comparison — factoring in price, delivery time, and delivery fees together, rather than price alone — so the \"best deal\" reflects the actual total cost and wait, not just the sticker price.",
    ],
    problems: [
      {
        icon: "warning",
        title: "The Challenge",
        description:
          "The same product is listed under slightly different names, prices, and delivery estimates across apps, so a fair comparison needs both accurate scraping and product-matching across inconsistent listings.",
      },
      {
        icon: "group",
        title: "The End User",
        description:
          "Cost-conscious shoppers who order frequently and want a quick, reliable way to compare quick-commerce options without checking each app in turn.",
      },
    ],
    architectureDescription:
      "Scheduled scrapers (Playwright/Puppeteer) pull prices, availability, and delivery ETAs from each platform, with product names reconciled across listings via fuzzy matching (Levenshtein/embedding similarity). Results are cached in Redis for fast repeat lookups. A React/TypeScript frontend queries a Node.js/Express API that ranks results by price, delivery time, and fees, with Elasticsearch handling search/autocomplete and product matching.",
    decisions: [
      {
        icon: "architecture",
        title: "Redis for the lookup cache",
        description:
          "Prices and ETAs are cached in Redis rather than re-scraped per request, trading some staleness for the response speed a comparison tool actually needs.",
      },
      {
        icon: "storage",
        title: "Elasticsearch for product matching",
        description:
          "Fuzzy, typo-tolerant search across differently-worded listings was the deciding factor over plain relational full-text search — reconciling \"listings for the same product\" is really a search-relevance problem.",
      },
    ],
    results: [
      { value: "In Development", label: "Status" },
      { value: "5", label: "Core Technologies" },
      { value: "Solo", label: "Team" },
      { value: "Personal", label: "Project Type" },
    ],
    team: ["Solo project — design, build, and scraping infrastructure"],
  },

  "main-portfolio": {
    code: "BP-2026-04",
    title: "This Portfolio",
    summary:
      "The site you're on right now — a React/TypeScript/Tailwind v4 build, developed with AI-assisted workflows, covering everything from the design system to deployment.",
    role: "Solo Developer, AI-Assisted",
    stack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repoUrl: "https://github.com/amolgupta7/MainPortfolio",
    overview: [
      "Originally scaffolded from a Google Stitch design system, then filled in end to end with real content: résumé-backed copy, live GitHub project data, and an actual photography gallery — replacing every placeholder from the source design.",
      "Built on Vite, React 19, and TypeScript, with Tailwind v4's CSS-first theming (a single token system drives both the default dark theme and a full light-mode counterpart), Framer Motion for scroll reveals, and Iconify for every icon in the app.",
    ],
    problems: [
      {
        icon: "warning",
        title: "The Challenge",
        description:
          "Turning a generic, placeholder-filled design template into an honest, accurate personal site — without the fabricated stats, fake team members, and stock-photo imagery the source design shipped with.",
      },
      {
        icon: "group",
        title: "The End User",
        description:
          "Recruiters, engineering teams, and collaborators evaluating real work — the site needed to read as substantive and accurate, not as a templated shell.",
      },
    ],
    architectureDescription:
      "A single Tailwind v4 @theme block defines every design token as a CSS custom property; a data-theme attribute on <html> swaps the whole palette between dark and light with no per-component logic. Content lives in typed src/data/*.ts files, decoupled from the components that render them. Deployment runs through a GitHub Actions workflow that builds and publishes to GitHub Pages on every push to main.",
    decisions: [
      {
        icon: "architecture",
        title: "CSS custom properties for theming",
        description:
          "Rather than duplicating className logic per theme, every color is a CSS variable — flipping one data-theme attribute cascades to every component automatically, with no dark:/light: variants to maintain.",
      },
      {
        icon: "storage",
        title: "Iconify over a single icon library",
        description:
          "Consolidating on Iconify, rather than mixing icon libraries, meant access to both a large generic icon set (Phosphor) and real, full-color brand logos (the \"logos\" collection) from one consistent system.",
      },
    ],
    results: [
      { value: "Live", label: "Status" },
      { value: "4", label: "Core Technologies" },
      { value: "Solo", label: "Team" },
      { value: "Personal", label: "Project Type" },
    ],
    team: ["Solo project — design, content, and development"],
  },

  "portfolio-v1": {
    code: "BP-2024-01",
    title: "Portfolio (v1)",
    summary:
      "An earlier personal portfolio site, hand-built with HTML, CSS, and JavaScript and deployed on GitHub Pages — simpler and smaller in scope than the current site.",
    role: "Solo Developer",
    stack: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/amolgupta7/Portfolio",
    overview: [
      "Before the current React/TypeScript build, this was a plain HTML/CSS/JavaScript site — no framework, no build step, just static pages deployed directly to GitHub Pages.",
      "It served its purpose as a first personal site, but its single-page, hand-written structure made it harder to extend as the amount of content (projects, experience, photography) grew — which is what motivated rebuilding on a proper framework.",
    ],
    problems: [
      {
        icon: "warning",
        title: "The Challenge",
        description:
          "Hand-written HTML/CSS/JS has no component reuse or content/markup separation, so adding a new section meant editing markup directly rather than adding a data entry.",
      },
      {
        icon: "group",
        title: "The End User",
        description:
          "The same audience as the current site — anyone evaluating the work — but with far less content to show at the time.",
      },
    ],
    architectureDescription:
      "Static HTML pages with plain CSS and vanilla JavaScript, no build tooling or framework, deployed directly to GitHub Pages from the repository root.",
    decisions: [
      {
        icon: "architecture",
        title: "No framework, by choice at the time",
        description:
          "Keeping it framework-free meant zero build tooling and the simplest possible deployment — reasonable for a small, mostly-static first site, though it didn't scale well as content grew.",
      },
      {
        icon: "storage",
        title: "GitHub Pages for hosting",
        description:
          "Free, static hosting directly from the repo was the simplest option available, and remains the same choice the current site makes.",
      },
    ],
    results: [
      { value: "Shipped", label: "Status" },
      { value: "3", label: "Core Technologies" },
      { value: "Solo", label: "Team" },
      { value: "Personal", label: "Project Type" },
    ],
    team: ["Solo project — design and development"],
  },

  "hope-speech-detection": {
    code: "BP-2022-04",
    title: "Hope Speech Detection",
    summary:
      "An NLP research project that fine-tunes RoBERTa to detect hope speech in YouTube comments — language that reflects encouragement and belief in positive outcomes — across a dataset focused on Equality, Diversity, and Inclusion (EDI).",
    role: "Solo Researcher & Developer",
    stack: ["Python", "PyTorch", "RoBERTa", "Transformers", "scikit-learn"],
    repoUrl: "https://github.com/amolgupta7/Hope-Speech-Detection",
    overview: [
      "Hope speech reflects the belief that one can find pathways to their goals and stay motivated to pursue them. Health professionals and social workers have linked it to well-being and even suicide prevention, making automatic detection of it a meaningful NLP task.",
      "The Hope Speech EDI dataset, sourced from YouTube comments, comprised 22,740 labeled training comments, 2,841 labeled validation comments, and 2,843 unlabeled test comments.",
    ],
    problems: [
      {
        icon: "warning",
        title: "The Challenge",
        description:
          "Classical bag-of-words models struggled to separate genuinely encouraging language from merely neutral or topically related comments, especially across the informal, noisy phrasing typical of YouTube comments.",
      },
      {
        icon: "group",
        title: "The End User",
        description:
          "Platform moderators and EDI researchers who need a reliable, automated way to surface encouraging, inclusive commentary at scale.",
      },
    ],
    architectureDescription:
      "The final model fine-tunes roberta-base (RobertaForSequenceClassification) — 12 transformer layers, a 768 hidden size, 12 attention heads, and a 50,265-token vocabulary with GELU activations — on the labeled training set, benchmarked directly against classical and BERT baselines.",
    decisions: [
      {
        icon: "architecture",
        title: "Transformers vs. classical ML",
        description:
          "Logistic Regression and SVC baselines were quick to train but topped out around 0.70 F1. Fine-tuning transformer models captured contextual meaning far better, at the cost of longer training time and GPU requirements.",
      },
      {
        icon: "storage",
        title: "RoBERTa over BERT",
        description:
          "RoBERTa's more robust pretraining (larger batches, no next-sentence-prediction objective) edged out BERT on every metric, becoming the final model despite a similar architecture and comparable compute cost.",
      },
    ],
    results: [
      { value: "94%", label: "Accuracy" },
      { value: "93%", label: "F1 Score" },
      { value: "93%", label: "Precision" },
      { value: "94%", label: "Recall" },
    ],
    team: ["Solo project — data prep, modeling, and evaluation"],
  },
}

export const tableOfContents = [
  { id: "overview", label: "01. Overview" },
  { id: "problem", label: "02. Problem & Users" },
  { id: "architecture", label: "03. System Architecture" },
  { id: "decisions", label: "04. Technical Decisions" },
  { id: "results", label: "05. Results & Impact" },
]
