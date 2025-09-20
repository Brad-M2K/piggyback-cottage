"use client";

import Image from 'next/image';
import { useMemo } from 'react';
import { buildPatternRows, DEFAULT_PATTERN } from './collageUtils';
import MaterialLightbox from './MaterialLightbox';
import usePhotoLightbox from './usePhotoLightbox';
import type { Photo } from '@/types/gallery';

interface PhotoCollageProps {
    images: Photo[];
    priorityCount?: number;
    className?: string;
    pattern?: number[];
    doubleAspectClass?: string;
    singleAspectClass?: string;
}

const DEFAULT_DOUBLE_ASPECT = 'aspect-[4/3]';
const DEFAULT_SINGLE_ASPECT = 'aspect-[2/1]';

export default function PhotoCollage({
    images,
    priorityCount = 4,
    className = '',
    pattern = DEFAULT_PATTERN,
    doubleAspectClass = DEFAULT_DOUBLE_ASPECT,
    singleAspectClass = DEFAULT_SINGLE_ASPECT,
}: PhotoCollageProps) {
    const rows = useMemo(() => buildPatternRows(images, pattern), [images, pattern]);

    const { activeIndex, openLightbox, closeLightbox, setIndex, handleTouchStart, handleTouchEnd } =
        usePhotoLightbox(images.length);

    if (images.length === 0) {
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
                            key={`${row[0]?.src ?? 'row'}-${rowIndex}`}
                            className={row.length === 1 ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-2 gap-4'}
                        >
                            {row.map((img, imageIndex) => {
                                const absoluteIndex = rowStartIndex + imageIndex;
                                const aspectClass = row.length === 1 ? singleAspectClass : doubleAspectClass;

                                return (
                                    <div
                                        key={img.src}
                                        className={`relative overflow-hidden rounded-2xl ${aspectClass}`}
                                        role="button"
                                        tabIndex={0}
                                        onClick={() => openLightbox(absoluteIndex)}
                                        onKeyDown={(event) => {
                                            if (event.key === 'Enter' || event.key === ' ') {
                                                event.preventDefault();
                                                openLightbox(absoluteIndex);
                                            }
                                        }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={img.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                                            className="h-full w-full object-cover"
                                            priority={absoluteIndex < priorityCount}
                                        />
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
