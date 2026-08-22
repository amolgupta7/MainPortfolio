import { Code2 } from "lucide-react"

import { caseStudy } from "@/data/caseStudy"

export function CaseStudyHero() {
  return (
    <>
      <section className="mx-auto mb-section-gap max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          <div className="col-span-1 md:col-span-8">
            <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
              {caseStudy.title}
            </h1>
            <p className="mb-8 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              {caseStudy.summary}
            </p>
            {caseStudy.repoUrl && (
              <div className="mb-8 flex flex-wrap gap-4">
                <a
                  href={caseStudy.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xs bg-primary px-6 py-3 font-label-mono text-label-mono text-on-primary transition-colors hover:bg-primary-container"
                >
                  <Code2 className="size-4" />
                  Source Code
                </a>
              </div>
            )}
          </div>

          <div className="col-span-1 flex flex-col justify-end border-l border-outline-variant/30 pl-gutter md:col-span-4">
            <div className="mb-6">
              <h3 className="mb-2 font-label-mono text-label-mono text-on-surface-variant">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.stack.map((tech) => (
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
              <h3 className="mb-2 font-label-mono text-label-mono text-on-surface-variant">
                Role
              </h3>
              <p className="font-body-md text-body-md text-on-surface">
                {caseStudy.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto mb-section-gap w-full max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-outline-variant/20 bg-surface-container shadow-lg">
          {caseStudy.heroImage ? (
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.heroImageAlt}
              className="size-full object-cover"
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-surface-container-highest">
              <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
                {caseStudy.title}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
