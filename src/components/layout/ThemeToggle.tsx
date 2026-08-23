import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import moonIcon from "@iconify-icons/ph/moon-fill"
import sunIcon from "@iconify-icons/ph/sun-fill"

type Theme = "dark" | "light"

const STORAGE_KEY = "theme"

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark"

  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === "dark" || stored === "light") return stored
  } catch {
    // localStorage may be unavailable (private mode, blocked storage) — ignore.
  }

  // No saved preference yet — defer to the OS/browser setting, matching
  // whatever the pre-hydration script in index.html already applied.
  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: light)").matches) {
    return "light"
  }
  return document.documentElement.dataset.theme === "light" ? "light" : "dark"
}

/**
 * Fixed, global dark/light toggle. Flips `data-theme` on <html>, which the
 * CSS in index.css uses to invert the site's color tokens: pages that are
 * normally dark become light and vice versa (see the `.theme-light`
 * overrides for the Photography/Contact pages).
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // localStorage may be unavailable (private mode, blocked storage) — ignore.
    }
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed right-6 bottom-6 z-50 flex size-12 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container text-on-surface shadow-lg transition-colors hover:border-primary/50 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {theme === "dark" ? (
        <Icon icon={sunIcon} className="size-5" />
      ) : (
        <Icon icon={moonIcon} className="size-5" />
      )}
    </button>
  )
}
