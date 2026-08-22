import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/** Resets scroll position on route changes, except when navigating to a hash anchor. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
