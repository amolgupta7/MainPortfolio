import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"

import { brandIcons } from "@/components/ui/icons"
import { TechTag } from "@/components/ui/TechTag"
import { coreTechnologies, experience } from "@/data/experience"

export function Experience() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="experience"
      className="border-t border-outline-variant/20 bg-surface-container-low"
    >
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <h2 className="mb-12 flex items-center gap-4 font-headline-sm text-headline-sm text-on-surface">
          <span className="font-label-mono text-label-mono text-primary">02.</span>{" "}
          Experience
        </h2>

        <ol className="space-y-8 pl-2">
          {experience.map((item, index) => (
            <motion.li
              key={item.role}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative border-l border-outline-variant/30 pl-6"
            >
              <span
                aria-hidden="true"
                className={
                  item.current
                    ? "absolute -left-[5px] top-1.5 z-10 size-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(173,198,255,0.6)]"
                    : "absolute -left-[5px] top-1.5 z-10 size-2.5 rounded-full border border-outline-variant bg-surface-variant"
                }
              />
              <span className="mb-1 block font-label-mono text-label-mono text-primary">
                {item.period}
              </span>
              <h3 className="font-body-lg font-medium text-body-lg text-on-surface">
                {item.role}
              </h3>
              <span className="mb-2 flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant">
                {item.company.includes("Visa") && (
                  <Icon icon={brandIcons.Visa} className="h-3 w-auto shrink-0" />
                )}
                {item.company}
              </span>
              {item.description && (
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              )}
            </motion.li>
          ))}
        </ol>

        <div className="mt-12">
          <h3 className="mb-4 font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
            Core Technologies
          </h3>
          <ul className="flex flex-wrap gap-2">
            {coreTechnologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-outline-variant/30 bg-surface-container px-3 py-1 font-label-mono text-[11px] text-on-surface"
              >
                <TechTag tag={tech} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
