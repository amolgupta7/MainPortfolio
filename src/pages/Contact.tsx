import { PageLayout } from "@/components/layout/PageLayout"
import { TechnicalGrid } from "@/components/layout/TechnicalGrid"
import { ContactForm } from "@/components/contact/ContactForm"
import { ContactSidebar } from "@/components/contact/ContactSidebar"

export default function Contact() {
  return (
    <PageLayout>
      <TechnicalGrid />
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <div className="mb-16 max-w-3xl md:mb-24">
          <div className="mb-6 inline-flex items-center gap-2 font-label-mono text-label-mono text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            <span>05. CONTACT</span>
          </div>
          <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
            Interested in working together?
          </h1>
          <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            I&rsquo;m currently open to new opportunities in software
            engineering, systems architecture, and technical product
            management. If you have a complex problem that needs a
            structured solution, let&rsquo;s connect.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-gutter lg:grid-cols-12">
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
          <div className="lg:col-span-4">
            <ContactSidebar />
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
