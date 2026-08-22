import { AlertTriangle, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { caseStudy } from "@/data/caseStudy"

const icons: Record<string, LucideIcon> = {
  warning: AlertTriangle,
  group: Users,
}

export function ProblemGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
      {caseStudy.problems.map((problem) => {
        const Icon = icons[problem.icon]
        return (
          <div
            key={problem.title}
            className="rounded-md border border-outline-variant/10 bg-surface-container p-6"
          >
            {Icon && <Icon className="mb-4 size-8 text-primary" strokeWidth={1.5} />}
            <h3 className="mb-2 font-headline-sm text-headline-sm text-on-surface">
              {problem.title}
            </h3>
            <p className="font-body-md text-sm text-on-surface-variant">
              {problem.description}
            </p>
          </div>
        )
      })}
    </div>
  )
}
