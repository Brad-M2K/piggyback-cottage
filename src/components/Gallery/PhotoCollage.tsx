"use client";

import Image from "next/image";
import { useMemo } from "react";
import { buildPatternRows, DEFAULT_PATTERN } from "./collageUtils";
import MaterialLightbox from "./MaterialLightbox";
import usePhotoLightbox from "./usePhotoLightbox";
import type { Photo } from "@/types/gallery";

interface PhotoCollageProps {
  images: Photo[];
  priorityCount?: number;
  className?: string;
  pattern?: number[];
  doubleAspectClass?: string;
  singleAspectClass?: string;
  previewCount?: number;
}

const DEFAULT_DOUBLE_ASPECT = "aspect-[4/3]";
const DEFAULT_SINGLE_ASPECT = "aspect-[2/1]";

export default function PhotoCollage({
  images,
  priorityCount = 4,
  className = "",
  pattern = DEFAULT_PATTERN,
  doubleAspectClass = DEFAULT_DOUBLE_ASPECT,
  singleAspectClass = DEFAULT_SINGLE_ASPECT,
  previewCount,
}: PhotoCollageProps) {
  const displayImages = useMemo(() => {
    if (images.length === 0) return [];

    if (typeof previewCount === "number") {
      const limit = Math.max(1, Math.min(previewCount, images.length));
      return images.slice(0, limit);
    }

    return images;
  }, [images, previewCount]);

  const rows = useMemo(
    () => buildPatternRows(displayImages, pattern),
    [displayImages, pattern]
  );
  const hiddenCount = Math.max(images.length - displayImages.length, 0);
  const hasHiddenImages = hiddenCount > 0;

  const {
    activeIndex,
    openLightbox,
    closeLightbox,
    setIndex,
    handleTouchStart,
    handleTouchEnd,
  } = usePhotoLightbox(images.length);

  if (displayImages.length === 0) {
    return null;
  }

  let renderedCount = 0;

  return (
    <section className={`mx-auto w-full ${className}`}>
      <div className="flex flex-col gap-4">
        {rows.map((row, rowIndex) => {
          const rowStartIndex = renderedCount;
          renderedCount += row.length;

          return (
            <div
              key={`${row[0]?.src ?? "row"}-${rowIndex}`}
              className={
                row.length === 1
                  ? "grid grid-cols-1 gap-4"
                  : "grid grid-cols-2 gap-4"
              }
            >
              {row.map((img, imageIndex) => {
                const absoluteIndex = rowStartIndex + imageIndex;
                const aspectClass =
                  row.length === 1 ? singleAspectClass : doubleAspectClass;
                const isLastVisibleImage =
                  hasHiddenImages && absoluteIndex === displayImages.length - 1;

                return (
                  <div
                    key={img.src}
                    className={`relative overflow-hidden rounded-2xl ${aspectClass}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => openLightbox(absoluteIndex)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openLightbox(absoluteIndex);
                      }
                    }}
                    aria-label={
                      isLastVisibleImage
                        ? `Open gallery, plus ${hiddenCount} more photos`
                        : `Open photo ${absoluteIndex + 1}`
                    }
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      className="h-full w-full object-cover"
                      priority={absoluteIndex < priorityCount}
                    />
                    {isLastVisibleImage ? (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-forest/60 text-center text-cream backdrop-blur-sm">
                        <span className="text-2xl font-semibold leading-none">
                          +{hiddenCount}
                        </span>
                        <span className="text-xs uppercase tracking-[0.2em]">
                          more photos
                        </span>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {activeIndex !== null ? (
        <MaterialLightbox
          images={images}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onSetIndex={setIndex}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        />
      ) : null}
    </section>
  );
}
