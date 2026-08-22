import { PageLayout } from "@/components/layout/PageLayout"
import { TechnicalGrid } from "@/components/layout/TechnicalGrid"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"

export default function Gallery() {
  return (
    <PageLayout>
      <TechnicalGrid />
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <header className="mb-16 max-w-3xl md:mb-section-gap">
          <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
            Beyond Engineering
          </h1>
          <div className="mb-8 h-px w-24 bg-primary" />
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Visual judgment and storytelling are integral to structural
            design. This gallery represents an exploration of forms, light,
            and geometry captured through a different lens. While engineering
            demands precision, photography allows for the observation of how
            that precision interacts with the natural world and human
            perception.
          </p>
        </header>

        <GalleryGrid />
      </div>
    </PageLayout>
  )
}
