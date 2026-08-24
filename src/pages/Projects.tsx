import { PageLayout } from "@/components/layout/PageLayout"
import { PageHeader } from "@/components/layout/PageHeader"
import { ProjectsGrid } from "@/components/projects/ProjectsGrid"

export default function Projects() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <PageHeader title="Shipped & Shipping">
          <p>
            A fuller list of projects than fits on the homepage — research
            work, personal tools, and a few still in progress. Each one notes
            its stack, status, and a link to source or blueprint where one
            exists.
          </p>
        </PageHeader>

        <ProjectsGrid />
      </div>
    </PageLayout>
  )
}
