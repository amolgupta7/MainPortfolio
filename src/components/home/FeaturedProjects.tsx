import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

import { Card } from "@/components/ui/card"
import { projects } from "@/data/projects"

export function FeaturedProjects() {
  const featured = projects.find((project) => project.featured)
  const secondary = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="border-t border-outline-variant/20">
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="flex items-center gap-4 font-headline-sm text-headline-sm text-on-surface">
            <span className="font-label-mono text-label-mono text-primary">03.</span>{" "}
            Featured Work
          </h2>
          <a
            href="#projects"
            className="group flex items-center font-label-mono text-label-mono text-primary"
          >
            All Projects
            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={`/case-study/${featured.slug}`}
              className="group mb-8 block overflow-hidden rounded-xl border border-outline-variant/20 bg-surface shadow-lg transition-colors hover:border-primary/40"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.imageAlt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-surface-container-highest">
                    <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
                      {featured.title}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h3 className="font-headline-sm text-body-lg font-semibold text-on-surface">
                    {featured.title}
                  </h3>
                  <ExternalLink className="size-5 shrink-0 text-on-surface-variant" />
                </div>
                <p className="mb-4 font-body-md text-sm text-on-surface-variant">
                  {featured.description}
                </p>
                <div className="flex gap-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xs bg-primary/10 px-2 py-1 font-label-mono text-[10px] text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 hide-scrollbar">
          {secondary.map((project) => (
            <Card
              key={project.slug}
              className="flex min-w-[280px] snap-center flex-col justify-between border-outline-variant/20 p-5"
            >
              <div>
                <h4 className="mb-2 font-body-lg text-on-surface">
                  {project.title}
                </h4>
                <p className="line-clamp-2 text-sm text-on-surface-variant">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 font-label-mono text-[10px] text-outline">
                {project.tags.join(" • ")}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
