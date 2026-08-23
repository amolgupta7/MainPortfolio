import type { IconType } from "react-icons"
import {
  SiCss,
  SiElasticsearch,
  SiHtml5,
  SiHuggingface,
  SiJavascript,
  SiNodedotjs,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si"

import { cn } from "@/lib/utils"

/** Real, colored brand logos for tech-stack tags (via Simple Icons) instead
 * of plain text — recognizable at a glance. Tags without a registered brand
 * mark (e.g. "NLP", "WebSockets", "RoBERTa") just render as text, same as
 * before. */
const techIcons: Record<string, { Icon: IconType; color: string }> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  Redis: { Icon: SiRedis, color: "#DC382D" },
  Elasticsearch: { Icon: SiElasticsearch, color: "#005571" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Vite: { Icon: SiVite, color: "#646CFF" },
  HTML: { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss, color: "#663399" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  PyTorch: { Icon: SiPytorch, color: "#EE4C2C" },
  // "Transformers" refers to Hugging Face's transformers library.
  Transformers: { Icon: SiHuggingface, color: "#FFD21E" },
}

export function TechTag({ tag, className }: { tag: string; className?: string }) {
  const entry = techIcons[tag]
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      {entry && (
        <entry.Icon className="size-3.5 shrink-0" style={{ color: entry.color }} />
      )}
      {tag}
    </span>
  )
}
