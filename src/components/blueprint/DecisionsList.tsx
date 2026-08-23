import { Icon } from "@iconify/react"
import type { IconifyIcon } from "@iconify/types"
import cubeIcon from "@iconify-icons/ph/cube-fill"
import databaseIcon from "@iconify-icons/ph/database-fill"

import type { BlueprintDecision } from "@/data/blueprint"

const icons: Record<string, IconifyIcon> = {
  architecture: cubeIcon,
  storage: databaseIcon,
}

export function DecisionsList({ decisions }: { decisions: BlueprintDecision[] }) {
  return (
    <ul className="space-y-6">
      {decisions.map((decision) => {
        const icon = icons[decision.icon]
        return (
          <li key={decision.title} className="flex gap-4">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-container/20">
              {icon && <Icon icon={icon} className="size-4 text-primary" />}
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
