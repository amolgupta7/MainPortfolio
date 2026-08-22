# Amol Gupta — Portfolio

> **🚧 Work in progress.** Content and design are still being filled in and
> refined — expect placeholder gaps (see [Known placeholders](#known-placeholders))
> and rough edges until this note is removed.

Amol Gupta's personal portfolio site, originally scaffolded from the
["Technical Precision"](https://stitch.withgoogle.com) design system created
in Google Stitch, then filled in with real content: résumé-backed copy,
GitHub project data, and a personal photography gallery. Dark, high-contrast,
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
| Icons | [lucide-react](https://lucide.dev) | note: recent lucide-react versions dropped brand/logo icons; generic icons (`Code2`, `Briefcase`, `Mail`) stand in for GitHub/LinkedIn/Email, matching the source design's own choice of generic icons there |
| Routing | [React Router v7](https://reactrouter.com) | 4 routes — see below |
| Animation | [Framer Motion](https://motion.dev) | scroll-reveal across the site; the Photography grid additionally uses a clip-path "curtain" reveal, a flicker-in caption, and a refined hover-zoom/desaturate curve, ported from Stitch's "Photography Gallery - Immersive Motion" screen |
| Theming | CSS custom properties + `data-theme` | fixed bottom-right toggle (`ThemeToggle`) flips the whole site between dark (default) and light by swapping the same M3-style color tokens at `:root` |
| Image prep | [sharp](https://sharp.pixelplumbing.com) (dev-only) | one-off resizing/compression of the source photography before committing it to `src/assets/` — not used at runtime |

### Why these routes

The Stitch project contained 5 finalized screens. Two of them ("About/Experience/Projects"
sections) only ever appeared as anchor-scrolled sections on the homepage, while
**Photography** and **Contact** were designed as full standalone pages with
their own nav/header treatment — so that's how they're implemented:

- `/` — Home (Hero → About → Experience → Featured Projects → Photography teaser)
- `/case-study/:slug` — Case study detail (currently: `hope-speech-detection`)
- `/gallery` — Full photography gallery with a lightbox
- `/contact` — Contact form + availability/social sidebar

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

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
│  └─ photography/     # real photos (01.jpg … 16.jpg), resized/compressed with sharp
├─ components/
│  ├─ ui/              # shadcn-style primitives: Button, Card, Dialog
│  ├─ layout/           # Navbar, Footer, PageLayout, TechnicalGrid, ScrollToTop, ThemeToggle
│  ├─ home/              # Hero, About, Experience, FeaturedProjects, PhotographyTeaser
│  ├─ gallery/           # GalleryGrid (+ built-in lightbox)
│  ├─ contact/           # ContactForm, ContactSidebar
│  └─ case-study/        # CaseStudyHero, Section, ProblemGrid, DecisionsList, ResultsGrid, TableOfContents
├─ pages/              # one file per route, composes the above components
├─ data/               # typed content: site.ts, experience.ts, projects.ts, photography.ts, caseStudy.ts
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

- **Contact form** — submits client-side only (no backend). Wire up
  `ContactForm`'s `handleSubmit` in
  [`src/components/contact/ContactForm.tsx`](src/components/contact/ContactForm.tsx)
  to your email/API provider of choice (Formspree, Resend, etc.).
- **Featured Work** — sourced from the real `amolgupta7` GitHub account
  ([`src/data/projects.ts`](src/data/projects.ts)), but that account is fairly
  thin on public projects since most professional work (Visa) isn't public.
  Push more repos, or add entries by hand, to fill this section out further.
