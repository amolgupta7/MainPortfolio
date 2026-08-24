import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  children: ReactNode
}

export function PageHeader({ title, children }: PageHeaderProps) {
  return (
    <header className="mb-16 max-w-3xl md:mb-section-gap">
      <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
        {title}
      </h1>
      <div className="mb-8 h-px w-24 bg-primary" aria-hidden="true" />
      <div className="font-body-lg text-body-lg text-on-surface-variant">
        {children}
      </div>
    </header>
  )
}
