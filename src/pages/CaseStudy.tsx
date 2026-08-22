import { ArrowLeft } from "lucide-react"
import { Link, Navigate, useParams } from "react-router-dom"

import { Footer } from "@/components/layout/Footer"
import { CaseStudyHero } from "@/components/case-study/CaseStudyHero"
import { DecisionsList } from "@/components/case-study/DecisionsList"
import { ProblemGrid } from "@/components/case-study/ProblemGrid"
import { ResultsGrid } from "@/components/case-study/ResultsGrid"
import { Section } from "@/components/case-study/Section"
import { TableOfContents } from "@/components/case-study/TableOfContents"
import { caseStudy } from "@/data/caseStudy"
import { projects } from "@/data/projects"

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="flex min-h-screen flex-col bg-technical-grid">
      {/* This is a detail/sub-page: it swaps the global nav for a
          simplified "back" header, matching the source design's intent
          of a focused, temporary departure from the main site. */}
      <header className="sticky top-0 z-50 border-b border-outline-variant/30 bg-surface/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-container-max items-center justify-between px-margin-mobile md:px-margin-desktop">
          <Link
            to="/#projects"
            className="flex items-center gap-2 font-label-mono text-label-mono text-on-surface-variant transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" />
            Back to Projects
          </Link>
          <div className="font-label-mono text-label-mono text-on-surface-variant">
            {caseStudy.code}
          </div>
        </div>
      </header>

      <main className="relative flex-1 pt-16 pb-section-gap md:pt-32">
        <CaseStudyHero />

        <div className="mx-auto grid max-w-container-max grid-cols-1 gap-gutter px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
          <div className="col-span-1 space-y-16 md:col-span-8 md:space-y-24">
            <Section id="overview" title="01. Overview">
              <div className="space-y-4 font-body-md text-body-md text-on-surface-variant">
                {caseStudy.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Section>

            <Section id="problem" title="02. Problem & Users">
              <ProblemGrid />
            </Section>

            <Section id="architecture" title="03. System Architecture">
              <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
                {caseStudy.architectureDescription}
              </p>
              <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-md border border-outline-variant/20 bg-surface-container">
                {caseStudy.architectureImage ? (
                  <img
                    src={caseStudy.architectureImage}
                    alt={caseStudy.architectureImageAlt}
                    className="size-full object-cover opacity-80"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center bg-surface-container-highest">
                    <span className="font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant">
                      Model Architecture
                    </span>
                  </div>
                )}
              </div>
            </Section>

            <Section id="decisions" title="04. Technical Decisions">
              <DecisionsList />
            </Section>

            <Section id="results" title="05. Results & Impact">
              <ResultsGrid />
            </Section>
          </div>

          <TableOfContents />
        </div>
      </main>

      <div className="border-t border-outline-variant/20 bg-surface-container-lowest pt-16">
        <div className="mx-auto flex max-w-container-max flex-col items-center px-margin-mobile md:px-margin-desktop">
          <Link
            to="/#projects"
            className="group mb-16 flex flex-col items-center text-center"
          >
            <span className="mb-4 font-label-mono text-label-mono uppercase tracking-widest text-on-surface-variant transition-colors group-hover:text-primary">
              Next Project
            </span>
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface transition-colors group-hover:text-primary md:font-display-lg md:text-display-lg">
              {caseStudy.nextProject}
            </h2>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
