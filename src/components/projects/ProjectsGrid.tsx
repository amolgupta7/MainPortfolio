import { Icon } from "@iconify/react"
import externalLinkIcon from "@iconify-icons/ph/arrow-square-out-fill"
import { Link } from "react-router-dom"

import { LockedContent } from "@/components/ui/LockedContent"
import { TechTag } from "@/components/ui/TechTag"
import { projects, type Project } from "@/data/projects"
import { cn } from "@/lib/utils"

/** Same large-format alternating layout as the Photography gallery's
 * GalleryGrid, minus the scroll-reveal — project info should be visible
 * immediately, not hidden until scrolled into view. Every project gets the
 * same size/treatment here — no single one is given visual priority.
 * None of these projects have a real screenshot yet (three don't have any
 * built UI at all), so each gets a small abstract, thematic cover graphic
 * instead — clearly decorative, not a claim of what the actual product
 * looks like. */

function ProjectTile({ project }: { project: Project }) {
  const isWip = project.status === "wip"

  const content = (
    <LockedContent
      locked={isWip}
      compact
      className="h-[260px] w-full overflow-hidden rounded md:h-[340px]"
    >
      <div
        className={cn(
          "group relative size-full overflow-hidden rounded border border-outline-variant/30 bg-surface-container-highest transition-colors",
          project.repoUrl && "hover:border-primary/50"
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
    </LockedContent>
  )

  if (project.repoUrl && !isWip) {
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
      <Link
        to={`/blueprint/${project.slug}`}
        className="flex items-center gap-1 text-primary transition-colors hover:text-primary-container"
      >
        Blueprint <Icon icon={externalLinkIcon} className="size-3" />
      </Link>
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-primary transition-colors hover:text-primary-container"
        >
          Source <Icon icon={externalLinkIcon} className="size-3" />
        </a>
      )}
    </div>
  )
}

export function ProjectsGrid() {
  return (
    <div className="flex flex-col gap-section-gap">
      {projects.map((project, index) => {
        const reversed = index % 2 === 1

        return (
          <article
            key={project.slug}
            className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12"
          >
            <div className={cn("md:col-span-7", reversed && "md:order-2")}>
              <ProjectTile project={project} />
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
              <LockedContent
                locked={project.status === "wip"}
                compact
                className="rounded"
              >
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {project.description}
                </p>
              </LockedContent>
              <ProjectMeta project={project} />
            </div>
          </article>
        )
      })}
    </div>
  )
}
