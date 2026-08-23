import { Icon } from "@iconify/react"
import type { IconifyIcon } from "@iconify/types"
import warningIcon from "@iconify-icons/ph/warning-fill"
import usersIcon from "@iconify-icons/ph/users-fill"

import type { BlueprintProblem } from "@/data/blueprint"

const icons: Record<string, IconifyIcon> = {
  warning: warningIcon,
  group: usersIcon,
}

export function ProblemGrid({ problems }: { problems: BlueprintProblem[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
      {problems.map((problem) => {
        const icon = icons[problem.icon]
        return (
          <div
            key={problem.title}
            className="rounded-md border border-outline-variant/10 bg-surface-container p-6"
          >
            {icon && <Icon icon={icon} className="mb-4 size-8 text-primary" />}
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
