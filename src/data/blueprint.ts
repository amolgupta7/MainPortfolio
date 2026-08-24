import type { ProjectSlug } from "@/data/projects"

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
  summary: string
  role: string
  overview: string[]
  problems: BlueprintProblem[]
  architectureDescription: string
  decisions: BlueprintDecision[]
  results: { value: string; label: string }[]
  team: string[]
}

/** One entry per *shipped* project, keyed by its projects.ts slug — every
 * entry gets the same 5-section template (Overview / Problem & Users /
 * Architecture / Technical Decisions / Results), for consistency.
 * WIP projects (nothing built yet) intentionally have no entry here at all —
 * there's no real case study to show, so Blueprint.tsx renders a
 * title-only locked placeholder for those slugs instead of fabricated
 * detail. Hope Speech Detection is the one entry with real, measured
 * results, so it keeps those instead of the status/stack/team placeholders
 * the other shipped entries use. */
export const blueprints: Partial<Record<ProjectSlug, BlueprintEntry>> = {
  "main-portfolio": {
    code: "BP-2026-04",
    summary:
      "The site you're on right now — a React/TypeScript/Tailwind v4 build, developed with AI-assisted workflows, covering everything from the design system to deployment.",
    role: "Solo Developer, AI-Assisted",
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
    summary:
      "An earlier personal portfolio site, hand-built with HTML, CSS, and JavaScript and deployed on GitHub Pages — simpler and smaller in scope than the current site.",
    role: "Solo Developer",
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
    summary:
      "An NLP research project that fine-tunes RoBERTa to detect hope speech in YouTube comments — language that reflects encouragement and belief in positive outcomes — across a dataset focused on Equality, Diversity, and Inclusion (EDI).",
    role: "Solo Researcher & Developer",
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
