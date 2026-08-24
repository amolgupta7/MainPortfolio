# Amol Gupta — Portfolio

> **🚧 Work in progress.** Content and design are still being filled in and
> refined — expect placeholder gaps (see [Known placeholders](#known-placeholders))
> and rough edges until this note is removed.

Amol Gupta's personal portfolio site, originally scaffolded from the
["Technical Precision"](https://stitch.withgoogle.com) design system created
in Google Stitch, then filled in with real content: résumé-backed copy,
project data, and a personal photography gallery. Dark, high-contrast,
engineering-grade aesthetic by default — Geist for display type, Inter for
body copy, JetBrains Mono for labels, and a single electric-blue accent
(`#adc6ff`) on near-black surfaces, with a full light-mode counterpart.

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Build tool | [Vite](https://vite.dev) | React + TypeScript template |
| UI library | [React 19](https://react.dev) | function components + hooks only |
| Language | TypeScript | strict mode, path alias `@/*` → `src/*` |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) | CSS-first config (`@theme` in `src/index.css`) — no `tailwind.config.js` |
| Components | [shadcn/ui](https://ui.shadcn.com) pattern | hand-rolled on Radix primitives (`Button`, `Card`, `Dialog`), used only where real interactivity is needed (nav menu, lightbox) |
| Icons | [Iconify](https://iconify.design) (`@iconify/react` + offline `@iconify-icons/*` data packages) | the *only* icon source in this codebase — Phosphor (`ph`) for structural UI icons, Simple Icons + the `logos` collection for real brand marks (GitHub, LinkedIn, WhatsApp, Gmail, Visa, tech-stack tags). Bundled at build time, no runtime calls to Iconify's API |
| Forms | [Web3Forms](https://web3forms.com) | contact form submissions POST directly to Web3Forms' API and land in your inbox — no backend of your own. Needs `VITE_WEB3FORMS_ACCESS_KEY` set (see [Setup](#setup)) |
| Routing | [React Router v7](https://reactrouter.com) | 5 public route patterns plus a not-found fallback — see below |
| Animation | [Framer Motion](https://motion.dev) | entrance and scroll-reveal effects with reduced-motion support, plus subtle image hover treatments |
| Theming | CSS custom properties + `data-theme` | fixed bottom-right toggle (`ThemeToggle`) flips the whole site between dark (default) and light by swapping the same M3-style color tokens at `:root` |

### Why these routes

The Stitch project contained 5 finalized screens. Two of them ("About/Experience/Projects"
sections) only ever appeared as anchor-scrolled sections on the homepage, while
**Projects**, **Photography**, and **Contact** are full standalone pages with
their own nav/header treatment — so that's how they're implemented:

- `/` — Home (Hero → About → Experience → Featured Projects → Photography teaser)
- `/projects` — Full project list
- `/blueprint/:slug` — Project detail page, backed by the matching project slug
- `/gallery` — Full photography gallery with a lightbox
- `/contact` — Contact form + availability/social sidebar

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

### Setup

The contact form needs a Web3Forms access key to actually deliver
submissions:

1. Get a free key at [web3forms.com](https://web3forms.com) (just your
   email, no account/password — the key arrives instantly).
2. Copy `.env.example` to `.env.local` and paste it in:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-key-here
   ```
3. For the deployed site, add the same value as a repository secret named
   `WEB3FORMS_ACCESS_KEY` (Settings → Secrets and variables → Actions) — the
   deploy workflow passes it through as `VITE_WEB3FORMS_ACCESS_KEY` at build
   time. Without it, the form fails gracefully with an error message instead
   of silently doing nothing.

Other scripts:

```bash
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Project structure

```
src/
├─ assets/
│  ├─ photography/     # real photos (01.jpg … 16.jpg), optimized before commit
│  └─ projects/        # local project cover artwork
├─ components/
│  ├─ ui/              # shadcn-style primitives: Button, Card, Dialog
│  ├─ layout/           # Navbar, Footer, PageLayout, TechnicalGrid, ScrollToTop, ThemeToggle
│  ├─ home/              # Hero, About, Experience, FeaturedProjects, PhotographyTeaser
│  ├─ gallery/           # GalleryGrid (+ built-in lightbox)
│  ├─ contact/           # ContactForm, ContactSidebar
│  └─ blueprint/        # BlueprintHero, Section, ProblemGrid, DecisionsList, ResultsGrid, TableOfContents
├─ pages/              # one file per route, composes the above components
├─ data/               # typed content: site.ts, experience.ts, projects.ts, photography.ts, blueprint.ts
├─ lib/utils.ts        # `cn()` class-merging helper
├─ index.css           # Tailwind v4 theme — all design tokens + light-mode override live here
├─ App.tsx             # route table + the global ThemeToggle
└─ main.tsx            # entry point
```

Content lives in `src/data/*.ts`, separate from the components that render
it — edit those files to change copy, links, or add projects/photos without
touching JSX.

## Design system → Tailwind tokens

`src/index.css` mirrors the Stitch design system's own token names 1:1
(`bg-background`, `text-primary`, `font-label-mono`, `text-headline-sm`,
`gap-gutter`, `px-margin-desktop`, `rounded-xl`, etc.) via Tailwind v4's
CSS-first `@theme` block. This was a deliberate choice: it let the generated
Stitch HTML be ported into JSX with very few class-name changes, keeping the
implementation close to the source design.

Light mode reuses the exact same token names: `:root[data-theme="light"]` in
`src/index.css` redefines each color variable, and `ThemeToggle` just flips
that attribute on `<html>` — every `bg-*`/`text-*` utility site-wide updates
automatically since they all resolve through `var(--color-*)`.

## Known placeholders

- **Contact form** — wired to Web3Forms, but won't actually send anything
  until `VITE_WEB3FORMS_ACCESS_KEY` is set — see [Setup](#setup).
- **Featured Work** — sourced from the real `amolgupta7` GitHub account
  ([`src/data/projects.ts`](src/data/projects.ts)), but that account is fairly
  thin on public projects since most professional work (Visa) isn't public.
  Push more repos, or add entries by hand, to fill this section out further.
