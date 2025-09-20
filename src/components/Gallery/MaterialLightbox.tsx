"use client";

import Image from 'next/image';
import { useEffect, useMemo, useRef } from 'react';
import type { MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import type { SwiperModule } from 'swiper/types';

import 'swiper/css';
import EffectMaterialRaw from '../../lib/material-slider/effect-material.esm.js';
const EffectMaterial = EffectMaterialRaw as unknown as SwiperModule;
import '../../lib/material-slider/effect-material.css';

import type { Photo } from '@/types/gallery';

interface MaterialLightboxProps {
    images: Photo[];
    activeIndex: number;
    onClose: () => void;
    onSetIndex: (index: number) => void;
    onTouchStart: (event: ReactTouchEvent<HTMLDivElement>) => void;
    onTouchEnd: (event: ReactTouchEvent<HTMLDivElement>) => void;
}

export default function MaterialLightbox({
    images,
    activeIndex,
    onClose,
    onSetIndex,
    onTouchStart,
    onTouchEnd,
}: MaterialLightboxProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const loop = images.length > 1;

    const slides = useMemo(
        () =>
            images.map((image, index) => ({
                id: `${image.src}-${index}`,
                image: image.src,
                alt: image.alt,
            })),
        [images]
    );

    useEffect(() => {
        const swiper = swiperRef.current;
        if (!swiper) return;

        const currentIndex = loop ? swiper.realIndex : swiper.activeIndex;
        if (currentIndex === activeIndex) {
            return;
        }

        if (loop && typeof swiper.slideToLoop === 'function') {
            swiper.slideToLoop(activeIndex, 800);
        } else {
            swiper.slideTo(activeIndex, 800);
        }
    }, [activeIndex, loop]);

    const handlePrev = (event: ReactMouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (images.length <= 1) return;
        const targetIndex = (activeIndex - 1 + images.length) % images.length;
        const swiper = swiperRef.current;
        if (swiper) {
            if (loop && typeof swiper.slideToLoop === 'function') {
                swiper.slideToLoop(targetIndex, 800);
            } else {
                swiper.slideTo(targetIndex, 800);
            }
        }
        onSetIndex(targetIndex);
    };

    const handleNext = (event: ReactMouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        if (images.length <= 1) return;
        const targetIndex = (activeIndex + 1) % images.length;
        const swiper = swiperRef.current;
        if (swiper) {
            if (loop && typeof swiper.slideToLoop === 'function') {
                swiper.slideToLoop(targetIndex, 800);
            } else {
                swiper.slideTo(targetIndex, 800);
            }
        }
        onSetIndex(targetIndex);
    };

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 px-2 py-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
        >
            <button
                type="button"
                className="absolute top-4 right-4 hidden rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-cream transition hover:bg-black/80 sm:block"
                onClick={(event) => {
                    event.stopPropagation();
                    onClose();
                }}
                aria-label="Close gallery"
            >
                Close
            </button>

            {loop ? (
                <>
                    <button
                        type="button"
                        className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-cream transition hover:bg-black/80 sm:left-4 sm:h-12 sm:w-12"
                        onClick={handlePrev}
                        aria-label="Previous image"
                    >
                        <span className="text-2xl leading-none sm:text-3xl">&#x2039;</span>
                    </button>
                    <button
                        type="button"
                        className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-cream transition hover:bg-black/80 sm:right-4 sm:h-12 sm:w-12"
                        onClick={handleNext}
                        aria-label="Next image"
                    >
                        <span className="text-2xl leading-none sm:text-3xl">&#x203A;</span>
                    </button>
                </>
            ) : null}

            <div className="flex w-full max-w-[100vw] flex-col items-center gap-4 sm:max-w-[min(85vw,900px)]">
                <div className="relative w-full overflow-hidden rounded-none bg-black/40 p-0 sm:rounded-[1.75rem] sm:p-4">
                    <div className="relative h-[70vh] w-full sm:h-[75vh]">
                        <Swiper
                            className="material-slider h-full"
                            modules={[EffectMaterial]}
                            effect="material"
                            slidesPerView={1}
                            centeredSlides
                            spaceBetween={16}
                            speed={900}
                            loop={loop}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 12,
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 16,
                                },
                                1024: {
                                    slidesPerView: 1.15,
                                    spaceBetween: 24,
                                },
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                                if (loop && typeof swiper.slideToLoop === 'function') {
                                    swiper.slideToLoop(activeIndex, 0, false);
                                } else {
                                    swiper.slideTo(activeIndex, 0, false);
                                }
                            }}
                            onSlideChange={(swiper) => {
                                if (!loop && swiper.activeIndex === activeIndex) {
                                    return;
                                }
                                const index = loop ? swiper.realIndex : swiper.activeIndex;
                                onSetIndex(index);
                            }}
                            initialSlide={activeIndex}
                            grabCursor
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={slide.id} className="h-full">
                                    <div className="swiper-material-wrapper h-full">
                                    <div className="swiper-material-content relative h-full overflow-hidden rounded-none sm:rounded-[1.25rem]">
                                        <Image
                                            src={slide.image}
                                            alt={slide.alt}
                                            fill
                                            priority={index === activeIndex}
                                            sizes="100vw"
                                            className="object-cover"
                                            unoptimized
                                            data-swiper-material-scale="1.25"
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    </div>
                </div>

                <button
                    type="button"
                    className="w-full rounded-full bg-black/60 px-4 py-3 text-center text-sm font-semibold text-cream transition hover:bg-black/80 sm:hidden"
                    onClick={(event) => {
                        event.stopPropagation();
                        onClose();
                    }}
                    onPointerUp={(event) => {
                        event.stopPropagation();
                        onClose();
                    }}
                    aria-label="Close gallery"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
