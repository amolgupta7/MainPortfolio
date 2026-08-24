import { Icon } from "@iconify/react"
import cameraIcon from "@iconify-icons/ph/camera-fill"
import { motion, useReducedMotion } from "framer-motion"
import { Link } from "react-router-dom"

import { photos } from "@/data/photography"

const preview = photos.slice(0, 3)

export function PhotographyTeaser() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="border-t border-outline-variant/20">
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <h2 className="mb-8 flex items-center gap-4 font-headline-sm text-headline-sm text-on-surface">
          <span className="font-label-mono text-label-mono text-primary">04.</span>{" "}
          Photography
        </h2>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-2 md:grid-cols-4"
        >
          {preview.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden bg-surface-variant"
            >
              <img
                src={photo.image}
                alt={photo.imageAlt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
          <Link
            to="/gallery"
            className="group flex aspect-square cursor-pointer items-center justify-center border border-outline-variant/20 bg-surface-container transition-colors hover:bg-surface-container-high"
          >
            <div className="text-center">
              <Icon
                icon={cameraIcon}
                className="mx-auto mb-2 size-6 text-primary transition-transform group-hover:scale-110"
              />
              <span className="block font-label-mono text-[11px] uppercase tracking-widest text-on-surface-variant">
                View Gallery
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
