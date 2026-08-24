import { lazy, Suspense, useEffect, useState, useTransition } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { RouteProgress } from "@/components/layout/RouteProgress"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { ThemeToggle } from "@/components/layout/ThemeToggle"

const Blueprint = lazy(() => import("@/pages/Blueprint"))
const Contact = lazy(() => import("@/pages/Contact"))
const Gallery = lazy(() => import("@/pages/Gallery"))
const Home = lazy(() => import("@/pages/Home"))
const NotFound = lazy(() => import("@/pages/NotFound"))
const Projects = lazy(() => import("@/pages/Projects"))

function PageLoading() {
  return (
    <div
      role="status"
      className="flex min-h-screen items-center justify-center bg-background font-label-mono text-label-mono text-on-surface-variant"
    >
      Loading…
    </div>
  )
}

function App() {
  const location = useLocation()
  // Deferred copy of `location`, updated inside our own transition below.
  // `<Routes>` renders off this instead of `location` directly so that
  // `isPending` accurately tracks "the destination page's lazy chunk is
  // still loading" — React Router's own internal `startTransition` around
  // navigation means `Suspense`'s fallback alone won't fire here, since
  // React deliberately keeps the previous page mounted during a transition
  // instead of unmounting it for the fallback.
  const [displayLocation, setDisplayLocation] = useState(location)
  const [isPending, startTransition] = useTransition()

  useEffect(() => {
    if (location.key !== displayLocation.key) {
      startTransition(() => {
        setDisplayLocation(location)
      })
    }
  }, [location, displayLocation])

  return (
    <>
      <RouteProgress active={isPending} />
      <ScrollToTop />
      <ThemeToggle />
      <Suspense fallback={<PageLoading />}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blueprint/:slug" element={<Blueprint />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
