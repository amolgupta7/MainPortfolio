import { PageLayout } from "@/components/layout/PageLayout"
import { PageHeader } from "@/components/layout/PageHeader"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"

export default function Gallery() {
  return (
    <PageLayout>
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <PageHeader title="Beyond Engineering">
          <p>
            Visual judgment and storytelling are integral to structural
            design. This gallery represents an exploration of forms, light,
            and geometry captured through a different lens. While engineering
            demands precision, photography allows for the observation of how
            that precision interacts with the natural world and human
            perception.
          </p>
        </PageHeader>

        <GalleryGrid />
      </div>
    </PageLayout>
  )
}
