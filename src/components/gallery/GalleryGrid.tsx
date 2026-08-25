import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { photos, type PhotoItem } from "@/data/photography";
import { cn } from "@/lib/utils";

/** Alternating gallery layout that preserves each photo's source ratio. */
const revealEase = [0.16, 1, 0.3, 1] as const;

function MonolithImage({
  photo,
  onOpen,
}: {
  photo: PhotoItem;
  onOpen: () => void;
}) {
  return (
    <div
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
      className="group relative w-full overflow-hidden rounded border border-outline-variant/30 bg-surface-container"
    >
      <button
        type="button"
        onClick={onOpen}
        className="absolute inset-0 size-full cursor-zoom-in outline-none ring-primary focus-visible:ring-2"
        aria-label={`Open ${photo.title}`}
      >
        <img
          src={photo.image}
          alt={photo.imageAlt}
          loading="lazy"
          className="size-full object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.05] group-hover:saturate-[1.15]"
        />
      </button>
    </div>
  );
}

export function GalleryGrid() {
  const [active, setActive] = useState<PhotoItem | null>(null);
  const reduceMotion = useReducedMotion();
  let sideIndex = 0;

  return (
    <>
      <div className="flex flex-col gap-section-gap">
        {photos.map((photo) => {
          if (photo.featured) {
            return (
              <motion.article
                key={photo.id}
                id={`photo-${photo.id}`}
                initial={reduceMotion ? false : { opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: revealEase }}
                className="flex scroll-mt-24 flex-col gap-gutter"
              >
                <MonolithImage photo={photo} onOpen={() => setActive(photo)} />
                <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      {photo.title}
                    </h2>
                    <p className="mt-2 max-w-xl font-body-md text-body-md text-on-surface-variant">
                      {photo.description}
                    </p>
                  </div>
                  <div className="flex w-full gap-6 border-t border-outline-variant/50 pt-4 font-label-mono text-label-mono text-primary md:w-auto">
                    <div className="flex flex-col gap-1">
                      <span className="text-on-surface-variant">CAPTION</span>
                      <span>{photo.caption}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-on-surface-variant">FORMAT</span>
                      <span>{photo.originalFormat}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          }

          const reversed = sideIndex % 2 === 1;
          sideIndex++;

          return (
            <motion.article
              key={photo.id}
              id={`photo-${photo.id}`}
              initial={reduceMotion ? false : { opacity: 0, y: 50 }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: revealEase }}
              className="grid scroll-mt-24 grid-cols-1 items-center gap-gutter md:grid-cols-12"
            >
              <div className={cn("md:col-span-8", reversed && "md:order-2")}>
                <MonolithImage photo={photo} onOpen={() => setActive(photo)} />
              </div>
              <div
                className={cn(
                  "flex flex-col gap-4 md:col-span-4",
                  reversed ? "md:order-1 md:pr-gutter" : "md:pl-gutter",
                )}
              >
                <h2 className="font-headline-md text-headline-md text-on-surface">
                  {photo.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {photo.description}
                </p>
                <div
                  className={cn(
                    "mt-4 flex flex-col gap-2 border-outline-variant/50 py-2 font-label-mono text-label-mono text-primary",
                    reversed
                      ? "border-r-2 pr-4 text-right md:text-left"
                      : "border-l-2 pl-4",
                  )}
                >
                  <span>{photo.caption}</span>
                  <span>FORMAT: {photo.originalFormat}</span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>

      <Dialog
        open={active !== null}
        onOpenChange={(open) => !open && setActive(null)}
      >
        <DialogContent className="p-4 duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          <DialogTitle className="sr-only">
            {active?.title ?? "Photo preview"}
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
  );
}
