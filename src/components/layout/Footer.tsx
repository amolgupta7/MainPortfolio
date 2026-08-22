import { Link } from "react-router-dom"

import { site } from "@/data/site"

const footerLinks = [
  { label: "GitHub", href: site.github },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Photography", href: "/gallery", internal: true },
]

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-outline-variant/20 bg-surface-container-lowest">
      <div className="mx-auto flex w-full max-w-container-max flex-col items-center justify-between gap-8 px-margin-mobile py-12 md:flex-row md:px-margin-desktop md:py-section-gap">
        <div className="text-center md:text-left">
          <div className="font-headline-sm text-headline-sm text-on-surface">
            {site.wordmark}
          </div>
          <p className="mt-2 font-label-mono text-label-mono text-xs text-on-surface-variant">
            {site.copyright}
          </p>
        </div>

        <nav
          className="flex flex-wrap justify-center gap-6"
          aria-label="Footer"
        >
          {footerLinks.map((link) =>
            link.internal ? (
              <Link
                key={link.label}
                to={link.href}
                className="rounded-xs font-label-mono text-label-mono text-on-surface-variant transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xs font-label-mono text-label-mono text-on-surface-variant transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>
    </footer>
  )
}
