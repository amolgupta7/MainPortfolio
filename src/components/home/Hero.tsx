import { Icon } from "@iconify/react"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { brandIcons } from "@/components/ui/icons"
import { site } from "@/data/site"
import heroPhoto from "@/data/my_photo_2.jpeg"

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="mx-auto max-w-container-max px-margin-mobile pt-16 pb-8 md:px-margin-desktop md:pt-32 md:pb-16"
    >
      <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
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

          {/* Mobile-only: same photo as the desktop side column, but placed
              inline in the text flow (below the description, above the
              buttons) since there's no side column to put it in below md. */}
          <div className="mb-10 w-full overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-highest backdrop-blur-sm md:hidden">
            <img
              className="h-auto w-full grayscale"
              alt="Portrait of Amol Gupta"
              src={heroPhoto}
            />
          </div>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact" className="flex items-center gap-2">
                Let&rsquo;s Connect <span aria-hidden="true">→</span>
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-2 text-on-surface-variant">
            <Icon icon={brandIcons["Google Maps"]} className="size-4" />
            <span className="font-label-mono text-label-mono text-xs">
              {site.location}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
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
