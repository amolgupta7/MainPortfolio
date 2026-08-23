import { Icon } from "@iconify/react"
import lockIcon from "@iconify-icons/ph/lock-fill"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

interface LockedContentProps {
  /** Whether to actually show the lock — pass `project.status === "wip"`. */
  locked: boolean
  children: ReactNode
  /** Extra classes for the outer wrapper (e.g. col-span/rounded to match
   * whatever it's wrapping). */
  className?: string
  message?: string
  /** Smaller badge, no message — for tight spaces like a card thumbnail. */
  compact?: boolean
}

/** Wraps work-in-progress content behind a blurred white glass layer with a
 * lock icon, so the underlying implementation details of a still-shipping
 * project aren't easily read or copied off the page. The real content stays
 * in the DOM (nothing to fake here) but is visually obscured and marked
 * non-interactive/non-selectable. Renders children untouched when `locked`
 * is false. */
export function LockedContent({
  locked,
  children,
  className,
  message = "Details locked while this project is in development.",
  compact = false,
}: LockedContentProps) {
  if (!locked) {
    return <>{children}</>
  }

  return (
    <div className={cn("relative", className)}>
      <div aria-hidden className="pointer-events-none select-none">
        {children}
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-white/70 text-center backdrop-blur-md">
        <div
          className={cn(
            "flex items-center justify-center rounded-full bg-white shadow-lg",
            compact ? "size-8" : "size-16"
          )}
        >
          <Icon icon={lockIcon} className={compact ? "size-3.5 text-black" : "size-7 text-black"} />
        </div>
        {!compact && (
          <p className="mx-auto max-w-[220px] px-4 font-label-mono text-label-mono uppercase tracking-widest text-black">
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
