import { useState } from "react"
import { motion } from "framer-motion"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { photos, type PhotoItem } from "@/data/photography"
import { cn } from "@/lib/utils"

/** Motion curves lifted from the "Photography Gallery - Immersive Motion"
 * Stitch screen: a snappy ease for hover-zoom/lightbox, and a slower
 * "curtain" ease for the clip-path reveal-on-scroll and caption flicker. */
const immersiveEase = [0.25, 1, 0.5, 1] as const
const curtainEase = [0.77, 0, 0.175, 1] as const

const spanClasses: Record<PhotoItem["span"], string> = {
  featured:
    "md:col-span-8 aspect-[16/9] md:aspect-auto md:h-[600px]",
  tall: "md:col-span-4 aspect-[4/5]",
  square: "md:col-span-4 aspect-[4/5] md:aspect-square",
  wide: "md:col-span-8 aspect-[16/9] md:h-[400px]",
  half: "md:col-span-6 aspect-[4/3]",
}

export function GalleryGrid() {
  const [active, setActive] = useState<PhotoItem | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
        {photos.map((photo, index) => (
          <motion.button
            key={photo.id}
            type="button"
            onClick={() => setActive(photo)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              ease: immersiveEase,
              delay: (index % 4) * 0.08,
            }}
            className={cn(
              "group relative col-span-1 cursor-zoom-in overflow-hidden bg-surface-container-low text-left outline-none ring-primary focus-visible:ring-2",
              spanClasses[photo.span]
            )}
          >
            <motion.img
              src={photo.image}
              alt={photo.imageAlt}
              loading="lazy"
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1.1,
                ease: curtainEase,
                delay: (index % 4) * 0.08,
              }}
              className="size-full origin-center scale-100 object-cover grayscale transition-[transform,filter] duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.08] group-hover:grayscale-0 group-hover:saturate-[1.2]"
            />
            <span className="pointer-events-none absolute inset-0 border border-outline-variant/10 transition-colors group-hover:border-primary" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-surface to-transparent p-4 md:p-6">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0, 1, 0.2, 1, 0.2, 1] }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 1,
                  times: [0, 0.2, 0.22, 0.63, 0.65, 1],
                  delay: (index % 4) * 0.08 + 0.4,
                }}
                className="font-label-mono text-label-mono text-primary"
              >
                {photo.caption}
              </motion.p>
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="p-4 duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <DialogTitle className="sr-only">
            {active?.caption ?? "Photo preview"}
          </DialogTitle>
          {active && (
            <>
              <img
                src={active.image}
                alt={active.imageAlt}
                className="max-h-[85vh] max-w-[90vw] border border-outline-variant/30 object-contain shadow-2xl"
              />
              <div className="absolute bottom-8 left-8 font-label-mono text-label-mono text-primary">
                {active.caption}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
