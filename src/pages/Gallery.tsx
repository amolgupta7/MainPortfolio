import { useEffect } from "react"
import { useLocation } from "react-router-dom"

import { PageLayout } from "@/components/layout/PageLayout"
import { PageHeader } from "@/components/layout/PageHeader"
import { GalleryGrid } from "@/components/gallery/GalleryGrid"
import { preferredScrollBehavior } from "@/lib/utils"

export default function Gallery() {
  const location = useLocation()

  // Scroll to the matching photo when arriving via a hash link (e.g. a
  // thumbnail clicked from the Home page's Photography teaser).
  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.slice(1)
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: preferredScrollBehavior() })
  }, [location.hash])

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
