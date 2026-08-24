import { useEffect } from "react"
import { useLocation, type Location } from "react-router-dom"

interface ScrollToTopProps {
  /** Location to key the scroll reset off. Defaults to the router's live
   * location, but App.tsx passes its deferred `displayLocation` instead —
   * the router's live location flips the instant a link is clicked, before
   * a lazy route's chunk has loaded and `<Routes>` has actually swapped
   * pages (see App.tsx), so resetting scroll off it jumps the *old* page
   * to the top for a moment before the new one appears. */
  location?: Location
}

/** Resets scroll position on route changes, except when navigating to a hash anchor. */
export function ScrollToTop({ location: locationProp }: ScrollToTopProps = {}) {
  const routerLocation = useLocation()
  const { pathname, hash } = locationProp ?? routerLocation

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
