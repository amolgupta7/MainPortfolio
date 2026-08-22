export const site = {
  name: "AMOL DEEP GUPTA",
  wordmark: "AMOL DEEP GUPTA",
  role: "Senior Software Engineer · Full Stack",
  tagline:
    "Code, capture, create—living life in full frame!",
  location: "Bengaluru, India",
  timezone: "UTC+5:30 (India Standard Time)",
  email: "gupta07amol@gmail.com",
  phone: "+91-9340434307",
  whatsapp: "https://wa.me/919340434307",
  github: "https://github.com/amolgupta7",
  githubHandle: "github.com/amolgupta7",
  linkedin: "https://linkedin.com/in/amol-deep-gupta-bb9328117",
  linkedinHandle: "in/amol-deep-gupta-bb9328117",
  // BASE_URL is "/" in dev and "/MainPortfolio/" in the production build
  // (see vite.config.ts) — a hardcoded "/resume.pdf" would 404 once deployed
  // under the repo subpath.
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  copyright: "© 2026 Amol Gupta. Built with Love.",
}

/** Section anchors that live on the Home page. */
export const homeNavLinks = [
  { label: "About", hash: "about" },
  { label: "Experience", hash: "experience" },
  { label: "Projects", hash: "projects" },
]

/** Standalone routed pages, also shown in the primary nav. */
export const pageNavLinks = [
  { label: "Photography", to: "/gallery" },
  { label: "Contact", to: "/contact" },
]
