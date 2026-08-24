import { Icon } from "@iconify/react"
import folderOpenIcon from "@iconify-icons/ph/folder-open-fill"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"

import { Card } from "@/components/ui/card"
import { LockedContent } from "@/components/ui/LockedContent"
import { TechTag } from "@/components/ui/TechTag"
import { projects } from "@/data/projects"

export function FeaturedProjects() {
  const reduceMotion = useReducedMotion()
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
  const preview = [...featuredProjects, ...otherProjects].slice(0, 3)

  return (
    <section id="projects" className="border-t border-outline-variant/20">
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <h2 className="mb-8 flex items-center gap-4 font-headline-sm text-headline-sm text-on-surface">
          <span className="font-label-mono text-label-mono text-primary">03.</span>{" "}
          Featured Work
        </h2>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {preview.map((project) => (
            <Link key={project.slug} to={`/blueprint/${project.slug}`} className="block h-full">
              <Card className="flex h-full flex-col overflow-hidden border-outline-variant/20 transition-colors hover:border-primary/50">
                <h3 className="px-5 pt-5 font-body-lg text-on-surface">{project.title}</h3>

                <LockedContent locked={project.status === "wip"} className="mt-3 flex-1">
                  <div className="aspect-video w-full overflow-hidden bg-surface-container-highest">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between p-5">
                    <p className="line-clamp-2 text-sm text-on-surface-variant">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-label-mono text-[10px] text-outline">
                      {project.tags.map((tag) => (
                        <TechTag key={tag} tag={tag} />
                      ))}
                    </div>
                  </div>
                </LockedContent>
              </Card>
            </Link>
          ))}

          <Link
            to="/projects"
            className="group flex aspect-video cursor-pointer flex-col items-center justify-center gap-2 rounded-md border border-outline-variant/20 bg-surface-container transition-colors hover:bg-surface-container-high sm:aspect-auto"
          >
            <Icon
              icon={folderOpenIcon}
              className="size-6 text-primary transition-transform group-hover:scale-110"
            />
            <span className="font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant">
              View All Projects
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
