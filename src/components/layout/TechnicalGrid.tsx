import { cn } from "@/lib/utils"

/** Decorative fixed grid overlay used behind hero/gallery sections in the source design. */
export function TechnicalGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed inset-0 z-0 bg-technical-grid",
        className
      )}
    />
  )
}
