import { Icon } from "@iconify/react"

import { brandIcons } from "@/components/ui/icons"

export function SocialIcon({ label, className }: { label: string; className?: string }) {
  const icon = brandIcons[label]
  if (!icon) return null
  return <Icon icon={icon} className={className} />
}
