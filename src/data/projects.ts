import candlecraftImg from "@/assets/projects/candlecraft.svg"
import grocerraceImg from "@/assets/projects/grocerrace.svg"
import hirejetImg from "@/assets/projects/hirejet.svg"
import hopeSpeechImg from "@/assets/projects/hope-speech-detection.svg"
import mainPortfolioImg from "@/assets/projects/main-portfolio.svg"
import portfolioV1Img from "@/assets/projects/portfolio-v1.svg"

export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  image: string
  imageAlt: string
  featured?: boolean
  repoUrl?: string
  /** Set on projects that are still being built — shown as a "Work in
   * Progress" badge instead of a finished-project claim. */
  status?: "wip"
}

// Newest first, oldest last.
export const projects: Project[] = [
  {
    slug: "candlecraft",
    title: "CandleCraft",
    description:
      "An automated intraday trading system that scans candlestick patterns and technical indicators on Indian equities/ETFs, executes trades through broker APIs with dynamic stop-loss and position sizing, and backtests strategies against historical data before going live.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "WebSockets"],
    image: candlecraftImg,
    imageAlt:
      "Abstract cover art of a candlestick trading chart, alternating blue and orange candles over a faint moving-average line.",
    status: "wip",
  },
  {
    slug: "hirejet",
    title: "HireJet",
    description:
      "Automates the tedious parts of job hunting — pulls listings from job boards and career pages, matches them against your résumé and preferences, auto-fills applications, and tracks status (applied/interview/rejected) on one dashboard.",
    tags: ["React", "TypeScript", "Playwright", "Node.js", "PostgreSQL"],
    image: hirejetImg,
    imageAlt:
      "Abstract cover art of a three-column kanban board narrowing from many cards to few, representing an application pipeline funnel.",
    status: "wip",
  },
  {
    slug: "grocerrace",
    title: "GrocerRace",
    description:
      "Real-time price comparison across quick-commerce apps (Zepto, Blinkit, Instamart) — normalizes listings across platforms, ranks results by price/delivery time/fees, and caches lookups for speed.",
    tags: ["React", "TypeScript", "Node.js", "Redis", "Elasticsearch"],
    image: grocerraceImg,
    imageAlt:
      "Abstract cover art of three race lanes of differing lengths with arrow tips, representing a delivery-speed comparison.",
    status: "wip",
  },
  {
    slug: "main-portfolio",
    title: "This Portfolio",
    description:
      "The site you're on right now — built with React, TypeScript, Tailwind CSS, and Vite, developed with AI-assisted workflows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: mainPortfolioImg,
    imageAlt:
      "Abstract cover art of a layered browser-window wireframe, suggesting a website under active revision.",
    repoUrl: "https://github.com/amolgupta7/MainPortfolio",
  },
  {
    slug: "portfolio-v1",
    title: "Portfolio (v1)",
    description:
      "My earlier personal portfolio site, hand-built with HTML, CSS, and JavaScript and deployed on GitHub Pages.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: portfolioV1Img,
    imageAlt:
      "Abstract cover art of a single plain page wireframe, simpler than the current site's layout.",
    repoUrl: "https://github.com/amolgupta7/Portfolio",
  },
  {
    slug: "hope-speech-detection",
    title: "Hope Speech Detection",
    description:
      "NLP research project fine-tuning RoBERTa to classify hope speech in YouTube comments from the Hope Speech EDI dataset (~28K labeled comments), benchmarked against Logistic Regression, SVC, and BERT baselines — reaching 94% accuracy and a 93% F1 score.",
    tags: ["NLP", "RoBERTa", "PyTorch", "Transformers"],
    image: hopeSpeechImg,
    imageAlt:
      "Abstract cover art of a three-layer neural network graph, nodes fully connected between layers.",
    featured: true,
    repoUrl: "https://github.com/amolgupta7/Hope-Speech-Detection",
  },
]
