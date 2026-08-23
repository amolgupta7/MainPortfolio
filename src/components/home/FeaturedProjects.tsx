import { motion } from "framer-motion"
import { ExternalLink, FolderGit2 } from "lucide-react"
import { Link } from "react-router-dom"

import { Card } from "@/components/ui/card"
import { TechTag } from "@/components/ui/TechTag"
import { projects } from "@/data/projects"

export function FeaturedProjects() {
  const featured = projects.find((project) => project.featured)
  // Same pattern as the Photography teaser below: one main piece, a couple
  // more beneath it, then a tile that links out to the full page instead of
  // trying to list everything here.
  const preview = projects.filter((project) => !project.featured).slice(0, 2)

  return (
    <section id="projects" className="border-t border-outline-variant/20">
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <h2 className="mb-8 flex items-center gap-4 font-headline-sm text-headline-sm text-on-surface">
          <span className="font-label-mono text-label-mono text-primary">03.</span>{" "}
          Featured Work
        </h2>

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
                    <TechTag
                      key={tag}
                      tag={tag}
                      className="rounded-xs bg-primary/10 px-2 py-1 font-label-mono text-[10px] text-primary"
                    />
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {preview.map((project) => (
            <Card
              key={project.slug}
              className="flex flex-col justify-between overflow-hidden border-outline-variant/20"
            >
              {project.image && (
                <div className="aspect-video w-full overflow-hidden bg-surface-container-highest">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="size-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <h4 className="font-body-lg text-on-surface">{project.title}</h4>
                    {project.status === "wip" && (
                      <span className="rounded-xs bg-tertiary/10 px-1.5 py-0.5 font-label-mono text-[9px] tracking-wide text-tertiary">
                        SHIPPING
                      </span>
                    )}
                  </div>
                  <p className="line-clamp-2 text-sm text-on-surface-variant">
                    {project.description}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-label-mono text-[10px] text-outline">
                  {project.tags.map((tag) => (
                    <TechTag key={tag} tag={tag} />
                  ))}
                </div>
              </div>
            </Card>
          ))}

          <Link
            to="/projects"
            className="group flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-outline-variant/20 bg-surface-container transition-colors hover:bg-surface-container-high sm:aspect-auto"
          >
            <FolderGit2 className="size-6 text-primary transition-transform group-hover:scale-110" />
            <span className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant">
              View All Projects
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
