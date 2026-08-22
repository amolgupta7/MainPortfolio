import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { PageLayout } from "@/components/layout/PageLayout"

export default function NotFound() {
  return (
    <PageLayout>
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-center px-margin-mobile py-32 text-center md:px-margin-desktop">
        <span className="mb-4 font-label-mono text-label-mono text-primary">
          404
        </span>
        <h1 className="mb-6 font-headline-md text-headline-md text-on-surface">
          Page not found
        </h1>
        <p className="mb-8 max-w-md font-body-md text-body-md text-on-surface-variant">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Button asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </PageLayout>
  )
}
