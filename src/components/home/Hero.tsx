import { motion } from "framer-motion"
import { Briefcase, Code2, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site } from "@/data/site"
import heroPhoto from "@/data/my_photo.jpeg"

const socialLinks = [
  { label: "GitHub", href: site.github, icon: Code2 },
  { label: "LinkedIn", href: site.linkedin, icon: Briefcase },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto max-w-container-max px-margin-mobile pt-16 pb-16 md:px-margin-desktop md:pt-32 md:pb-section-gap"
    >
      <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start md:col-span-8"
        >
          <div className="mb-6 flex items-center gap-2">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            <span className="font-label-mono text-label-mono uppercase tracking-widest text-primary">
              {site.role}
            </span>
          </div>

          <h1 className="mb-6 font-display-lg-mobile text-display-lg-mobile leading-tight text-on-surface md:font-display-lg md:text-display-lg">
            {site.tagline}
          </h1>

          <p className="mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            With 4+ years architecting scalable, high-performance frontend
            systems for fintech and payments platforms at Visa. I bridge the gap
            between complex technical requirements and elegant, accessible user
            experiences using React, TypeScript, and modern frontend
            architecture.
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline">
              <a href={site.resumeUrl} download>
                Download Résumé
              </a>
            </Button>
            <Button asChild variant="ghost" className="sm:ml-4">
              <a href="/contact" className="flex items-center gap-2">
                Let&rsquo;s Connect <span aria-hidden="true">→</span>
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-on-surface-variant">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-on-surface"
              >
                <Icon className="size-5" strokeWidth={1.75} />
              </a>
            ))}
            <div className="ml-4 flex items-center gap-2 border-l border-outline-variant/30 pl-4">
              <MapPin className="size-4" strokeWidth={1.75} />
              <span className="font-label-mono text-label-mono text-xs">
                {site.location}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="hidden h-[500px] md:col-span-4 md:block"
        >
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-highest backdrop-blur-sm">
            <img
              className="size-full object-cover grayscale"
              alt="Portrait of Amol Gupta"
              src={heroPhoto}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
