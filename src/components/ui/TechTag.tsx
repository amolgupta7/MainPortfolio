import { Icon } from "@iconify/react"

import { brandIcons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"

export function TechTag({ tag, className }: { tag: string; className?: string }) {
  const icon = brandIcons[tag]
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      {icon && <Icon icon={icon} className="size-3.5 shrink-0" />}
      {tag}
    </span>
  )
}
