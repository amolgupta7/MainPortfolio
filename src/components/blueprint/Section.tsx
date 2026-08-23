import type { ReactNode } from "react"

export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 border-b border-outline-variant/30 pb-4 font-headline-md text-headline-md text-on-surface">
        {title}
      </h2>
      {children}
    </section>
  )
}
