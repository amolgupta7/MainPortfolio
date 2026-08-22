import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { homeNavLinks, pageNavLinks, site } from "@/data/site"
import { cn } from "@/lib/utils"

function SectionLink({
  hash,
  label,
  onNavigate,
  className,
}: {
  hash: string
  label: string
  onNavigate?: () => void
  className?: string
}) {
  const location = useLocation()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === "/") {
      event.preventDefault()
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", `#${hash}`)
    }
    onNavigate?.()
  }

  return (
    <Link to={`/#${hash}`} onClick={handleClick} className={className}>
      {label}
    </Link>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)

  const desktopLinkClass =
    "font-label-mono text-label-mono text-on-surface-variant transition-colors duration-300 hover:text-primary"
  const activeLinkClass = "text-primary"

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <Link
          to="/"
          className="font-display-lg text-body-lg font-bold tracking-tighter text-on-surface"
        >
          {site.wordmark}
        </Link>

        <nav className="hidden items-center gap-gutter md:flex" aria-label="Primary">
          {homeNavLinks.map((link) => (
            <SectionLink
              key={link.hash}
              hash={link.hash}
              label={link.label}
              className={desktopLinkClass}
            />
          ))}
          {pageNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(desktopLinkClass, isActive && activeLinkClass)
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button asChild size="sm" className="ml-4">
            <a href={site.resumeUrl} download>
              Résumé
            </a>
          </Button>
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          className="text-on-surface transition-colors hover:text-primary md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-7" />
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-surface/95 backdrop-blur-xl md:hidden">
          <DialogTitle className="sr-only">Navigation menu</DialogTitle>
          <nav
            className="flex w-full flex-col items-center space-y-8 px-margin-mobile text-center"
            aria-label="Mobile"
          >
            {homeNavLinks.map((link) => (
              <SectionLink
                key={link.hash}
                hash={link.hash}
                label={link.label}
                onNavigate={() => setOpen(false)}
                className="font-headline-sm text-headline-sm text-on-surface transition-colors hover:text-primary"
              />
            ))}
            {pageNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-headline-sm text-headline-sm text-on-surface transition-colors hover:text-primary"
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild className="mx-auto mt-4 w-full max-w-[200px]">
              <a href={site.resumeUrl} download>
                Résumé
              </a>
            </Button>
          </nav>
        </DialogContent>
      </Dialog>
    </header>
  )
}
