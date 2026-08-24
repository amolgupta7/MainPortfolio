import { cn } from "@/lib/utils"

interface RouteProgressProps {
  /** Whether a route transition is currently pending a lazy chunk load. */
  active: boolean
}

/**
 * Slim indeterminate bar fixed to the top of the viewport, shown while a
 * lazy-loaded page chunk is being fetched. `Suspense`'s own fallback can't
 * be relied on for this: React Router wraps navigations in `startTransition`,
 * so React keeps the previous page mounted instead of unmounting it for the
 * fallback (see App.tsx for how `active` is derived).
 */
export function RouteProgress({ active }: RouteProgressProps) {
  return (
    <div
      role="progressbar"
      aria-label="Page loading"
      aria-hidden={!active}
      className={cn(
        "pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 overflow-hidden transition-opacity duration-200",
        active ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="route-progress-bar h-full w-1/3 bg-background" />
    </div>
  )
}
