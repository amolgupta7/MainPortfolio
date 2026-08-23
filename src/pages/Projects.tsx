import { PageLayout } from "@/components/layout/PageLayout"
import { TechnicalGrid } from "@/components/layout/TechnicalGrid"
import { ProjectsGrid } from "@/components/projects/ProjectsGrid"

export default function Projects() {
  return (
    <PageLayout>
      <TechnicalGrid />
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <header className="mb-16 max-w-3xl md:mb-section-gap">
          <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
            Shipped &amp; Shipping
          </h1>
          <div className="mb-8 h-px w-24 bg-primary" />
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            A fuller list of projects than fits on the homepage — research
            work, personal tools, and a few still in progress. Each one notes
            its stack, status, and a link to source or case study where one
            exists.
          </p>
        </header>

        <ProjectsGrid />
      </div>
    </PageLayout>
  )
}
