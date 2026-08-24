import { Icon } from "@iconify/react"
import codeIcon from "@iconify-icons/ph/code-fill"

import type { BlueprintEntry } from "@/data/blueprint"
import type { Project } from "@/data/projects"

export function BlueprintHero({
  data,
  project,
}: {
  data: BlueprintEntry
  project: Project
}) {
  return (
    <section className="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        <div className="col-span-1 md:col-span-8">
          <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
            {project.title}
          </h1>
          <p className="mb-8 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            {data.summary}
          </p>
          {project.repoUrl && (
            <div className="mb-8 flex flex-wrap gap-4">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xs bg-primary px-6 py-3 font-label-mono text-label-mono text-on-primary transition-colors hover:bg-primary-container"
              >
                <Icon icon={codeIcon} className="size-4" />
                Source Code
              </a>
            </div>
          )}
        </div>

        <div className="col-span-1 flex flex-col justify-end border-l border-outline-variant/30 pl-gutter md:col-span-4">
          <div className="mb-6">
            <h2 className="mb-2 font-label-mono text-label-mono text-on-surface-variant">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xs bg-surface-container px-2 py-1 font-label-mono text-[11px] text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-2 font-label-mono text-label-mono text-on-surface-variant">
              Role
            </h2>
            <p className="font-body-md text-body-md text-on-surface">{data.role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
