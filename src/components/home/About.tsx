import { motion } from "framer-motion"

import { aboutStats } from "@/data/experience"

const paragraphs = [
  "I'm a Senior Software Engineer with 4+ years architecting scalable, high-performance frontend systems for fintech and payments platforms at Visa Inc. My expertise centers on React, TypeScript, and modern frontend architecture, with working knowledge of Java/Spring Boot backend services that gives me a holistic view of the systems I build for.",
  "Currently, I lead frontend development for Visa's global merchant portal, working with React 19, and shared component libraries within a large-scale Nx monorepo.",
  "When I'm not writing code, I'm usually behind a camera, applying the same principles of composition and technical precision to my photography.",
]

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-container-max border-t border-outline-variant/20 px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap"
    >
      <h2 className="mb-12 flex items-center gap-4 font-headline-sm text-headline-sm text-on-surface">
        <span className="font-label-mono text-label-mono text-primary">01.</span>{" "}
        About Me
      </h2>

      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-6 font-body-md text-body-md text-on-surface-variant md:col-span-7"
        >
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-4 md:col-start-9"
        >
          <div className="rounded-xl border border-outline-variant/30 bg-surface-container p-6">
            <ul className="space-y-4 font-label-mono text-label-mono">
              {aboutStats.map((stat, index) => (
                <li
                  key={stat.label}
                  className={
                    index < aboutStats.length - 1
                      ? "flex items-center justify-between border-b border-outline-variant/20 pb-3"
                      : "flex items-center justify-between pt-1"
                  }
                >
                  <span className="text-on-surface-variant">{stat.label}</span>
                  {stat.highlight ? (
                    <span className="flex items-center gap-2 text-primary">
                      <span className="size-1.5 rounded-full bg-primary" />
                      {stat.value}
                    </span>
                  ) : (
                    <span className="text-on-surface">{stat.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
