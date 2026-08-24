import { Icon } from "@iconify/react"
import arrowLeftIcon from "@iconify-icons/ph/arrow-left-fill"
import { Link, Navigate, useParams } from "react-router-dom"

import { Footer } from "@/components/layout/Footer"
import { BlueprintHero } from "@/components/blueprint/BlueprintHero"
import { DecisionsList } from "@/components/blueprint/DecisionsList"
import { ProblemGrid } from "@/components/blueprint/ProblemGrid"
import { ResultsGrid } from "@/components/blueprint/ResultsGrid"
import { Section } from "@/components/blueprint/Section"
import { TableOfContents } from "@/components/blueprint/TableOfContents"
import { LockedContent } from "@/components/ui/LockedContent"
import { blueprints } from "@/data/blueprint"
import { projects } from "@/data/projects"

export default function Blueprint() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  // WIP projects have no blueprint entry at all — there's no real case
  // study to show yet, so `data` is undefined and the page below renders a
  // title-only locked placeholder instead.
  const data = blueprints[project.slug]

  // Cycle to whichever project comes next in the list, wrapping back to the
  // start — a real link instead of a placeholder "next project" name.
  const currentIndex = projects.findIndex((item) => item.slug === slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="flex min-h-screen flex-col bg-technical-grid">
      {/* This is a detail/sub-page: it swaps the global nav for a
          simplified "back" header, matching the source design's intent
          of a focused, temporary departure from the main site. */}
      <header className="sticky top-0 z-50 border-b backdrop-blur-xl border-inverse-on-surface/15 bg-inverse-surface">
        <div className="mx-auto flex h-20 w-full max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
          <Link
            to="/projects"
            className="flex items-center gap-2 font-label-mono text-label-mono transition-colors  text-inverse-on-surface"
          >
            <Icon icon={arrowLeftIcon} className="size-4" />
            Back to Projects
          </Link>
          <div className="font-label-mono text-label-mono  text-inverse-on-surface">
            {data ? data.code : "SHIPPING"}
          </div>
        </div>
      </header>

      <main className="relative flex-1 pt-16 pb-section-gap md:pt-32">
        {data ? (
          <>
            <BlueprintHero data={data} project={project} />

            <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
              <div className="col-span-1 space-y-16 md:col-span-8 md:space-y-24">
                <Section id="overview" title="01. Overview">
                  <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                    {data.overview.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </Section>

                <Section id="problem" title="02. Problem & Users">
                  <ProblemGrid problems={data.problems} />
                </Section>

                <Section id="architecture" title="03. System Architecture">
                  <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
                    {data.architectureDescription}
                  </p>
                  <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-md border border-outline-variant/20 bg-surface-container">
                    <div className="flex size-full items-center justify-center bg-surface-container-highest">
                      <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
                        {project.title}
                      </span>
                    </div>
                  </div>
                </Section>

                <Section id="decisions" title="04. Technical Decisions">
                  <DecisionsList decisions={data.decisions} />
                </Section>

                <Section id="results" title="05. Results & Impact">
                  <ResultsGrid results={data.results} />
                </Section>
              </div>

              <TableOfContents team={data.team} />
            </div>
          </>
        ) : (
          <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
            <h1 className="mb-8 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
              {project.title}
            </h1>
            <LockedContent
              locked
              className="rounded-md"
              message="This project is still in active development — the full case study will be published when it ships."
            >
              <div className="min-h-[50vh] w-full rounded-md border border-outline-variant/20 bg-surface-container" />
            </LockedContent>
          </div>
        )}
      </main>

      <div className="border-t border-outline-variant/20 bg-surface-container-lowest pt-16">
        <div className="mx-auto flex max-w-container-max flex-col items-center px-margin-mobile md:px-margin-desktop">
          <Link
            to={`/blueprint/${nextProject.slug}`}
            className="group mb-16 flex flex-col items-center text-center"
          >
            <span className="mb-4 font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant transition-colors group-hover:text-primary">
              Next Project
            </span>
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface transition-colors group-hover:text-primary md:font-display-lg md:text-display-lg">
              {nextProject.title}
            </h2>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
