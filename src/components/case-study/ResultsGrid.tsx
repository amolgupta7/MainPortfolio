import { motion } from "framer-motion"

import { caseStudy } from "@/data/caseStudy"

export function ResultsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {caseStudy.results.map((result, index) => (
        <motion.div
          key={result.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
          className="rounded-md border border-outline-variant/20 bg-surface-container-low p-4 text-center"
        >
          <div className="mb-1 font-display-lg text-4xl font-bold text-primary">
            {result.value}
          </div>
          <div className="font-label-mono text-label-mono text-on-surface-variant">
            {result.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
