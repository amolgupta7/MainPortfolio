import externalLinkIcon from "@iconify-icons/ph/arrow-square-out-fill";
import cameraIcon from "@iconify-icons/ph/camera-fill";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { photos, type PhotoItem } from "@/data/photography";

const ROTATE_INTERVAL_MS = 5000;

/** Returns a new, unbiased shuffle without mutating the shared photo data. */
function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pickPreview(): PhotoItem[] {
  return shuffle(photos).slice(0, 3);
}

export function PhotographyTeaser() {
  const reduceMotion = useReducedMotion();
  const [preview, setPreview] = useState<PhotoItem[]>(pickPreview);

  useEffect(() => {
    if (reduceMotion) return;

    const interval = setInterval(() => {
      setPreview(pickPreview());
    }, ROTATE_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <section className="border-t border-outline-variant/20">
      <div className="mx-auto max-w-container-max px-margin-mobile py-16 md:px-margin-desktop md:py-section-gap">
        <h2 className="mb-8 flex items-center gap-4 font-headline-sm text-headline-sm text-on-surface">
          <span className="font-label-mono text-label-mono text-primary">
            04.
          </span>{" "}
          Photography
        </h2>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-2 md:grid-cols-4"
        >
          {preview.map((photo, slotIndex) => (
            <div
              key={slotIndex}
              className="relative aspect-square overflow-hidden bg-surface-variant"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Link
                    to={`/gallery#photo-${photo.id}`}
                    aria-label={`View "${photo.title}" in the gallery`}
                    className="group block size-full"
                  >
                    <img
                      src={photo.image}
                      alt={photo.imageAlt}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100">
                      <Icon
                        icon={externalLinkIcon}
                        className="size-5 text-white"
                      />
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
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
  );
}
