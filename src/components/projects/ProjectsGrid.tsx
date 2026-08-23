import { ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

import { TechTag } from "@/components/ui/TechTag"
import { projects, type Project } from "@/data/projects"
import { cn } from "@/lib/utils"

/** Same large-format alternating layout as the Photography gallery's
 * GalleryGrid, minus the scroll-reveal — project info should be visible
 * immediately, not hidden until scrolled into view. None of these projects
 * have a real screenshot yet (three don't have any built UI at all), so each
 * gets a small abstract, thematic cover graphic instead — clearly
 * decorative, not a claim of what the actual product looks like. */

function ProjectTile({ project, height }: { project: Project; height: string }) {
  const content = (
    <div
      className={cn(
        "group relative overflow-hidden rounded border border-outline-variant/30 bg-surface-container-highest transition-colors",
        project.repoUrl && "hover:border-primary/50",
        height
      )}
    >
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="flex size-full items-center justify-center">
          <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant transition-colors group-hover:text-primary">
            {project.title}
          </span>
        </div>
      )}
    </div>
  )

  if (project.repoUrl) {
    return (
      <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} on GitHub`}>
        {content}
      </a>
    )
  }

  return content
}

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-outline-variant/50 pt-4 font-label-mono text-label-mono">
      <div className="flex flex-col gap-1.5">
        <span className="text-on-surface-variant">STACK</span>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-primary">
          {project.tags.map((tag) => (
            <TechTag key={tag} tag={tag} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-on-surface-variant">STATUS</span>
        <span className={project.status === "wip" ? "text-tertiary" : "text-primary"}>
          {project.status === "wip" ? "Shipping" : "Shipped"}
        </span>
      </div>
      {project.featured && (
        <Link
          to={`/case-study/${project.slug}`}
          className="flex items-center gap-1 text-primary transition-colors hover:text-primary-container"
        >
          Case Study <ExternalLink className="size-3" />
        </Link>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-primary transition-colors hover:text-primary-container"
        >
          Source <ExternalLink className="size-3" />
        </a>
      )}
    </div>
  )
}

export function ProjectsGrid() {
  let sideIndex = 0

  return (
    <div className="flex flex-col gap-section-gap">
      {projects.map((project) => {
        if (project.featured) {
          return (
            <article key={project.slug} className="flex flex-col gap-gutter">
              <ProjectTile project={project} height="h-[300px] md:h-[400px]" />
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-2xl font-body-md text-body-md text-on-surface-variant">
                  {project.description}
                </p>
                <ProjectMeta project={project} />
              </div>
            </article>
          )
        }

        const reversed = sideIndex % 2 === 1
        sideIndex++

        return (
          <article
            key={project.slug}
            className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12"
          >
            <div className={cn("md:col-span-7", reversed && "md:order-2")}>
              <ProjectTile project={project} height="h-[240px] md:h-[320px]" />
            </div>
            <div
              className={cn(
                "flex flex-col gap-3 md:col-span-5",
                reversed ? "md:order-1 md:pr-gutter" : "md:pl-gutter"
              )}
            >
              <h2 className="font-headline-md text-headline-md text-on-surface">
                {project.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {project.description}
              </p>
              <ProjectMeta project={project} />
            </div>
          </article>
        )
      })}
    </div>
  )
}
