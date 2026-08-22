import { Blocks, Database } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { caseStudy } from "@/data/caseStudy"

const icons: Record<string, LucideIcon> = {
  architecture: Blocks,
  storage: Database,
}

export function DecisionsList() {
  return (
    <ul className="space-y-6">
      {caseStudy.decisions.map((decision) => {
        const Icon = icons[decision.icon]
        return (
          <li key={decision.title} className="flex gap-4">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-container/20">
              {Icon && <Icon className="size-4 text-primary" strokeWidth={1.75} />}
            </div>
            <div>
              <h4 className="mb-1 font-headline-sm text-headline-sm text-on-surface">
                {decision.title}
              </h4>
              <p className="font-body-md text-sm text-on-surface-variant">
                {decision.description}
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
