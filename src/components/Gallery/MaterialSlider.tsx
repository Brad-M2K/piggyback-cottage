'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { SwiperModule } from 'swiper/types';

// Import Swiper styles
import 'swiper/css';

// Import Material Effect (cast to SwiperModule to satisfy TS)
import EffectMaterialRaw from '../../lib/material-slider/effect-material.esm.js';
const EffectMaterial = EffectMaterialRaw as unknown as SwiperModule;
import '../../lib/material-slider/effect-material.css';

interface MaterialSliderProps {
  slides: {
    id: string;
    image: string;
    title?: string;
    description?: string;
  }[];
  slidesPerView?: number;
  centeredSlides?: boolean;
  spaceBetween?: number;
  speed?: number;
  slideSplitRatio?: number;
  grabCursor?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export default function MaterialSlider({
  slides,
  slidesPerView = 2,
  centeredSlides = true,
  spaceBetween = 16,
  speed = 1300,
  slideSplitRatio = 0.65,
  grabCursor = true,
  loop = false,
  autoplay = true,
  className = '',
}: MaterialSliderProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  const modules = autoplay ? [EffectMaterial, Autoplay] : [EffectMaterial];

  const swiperOptions = {
    modules,
    effect: 'material' as const,
    slidesPerView,
    centeredSlides,
    spaceBetween,
    speed,
    grabCursor,
    loop,
    breakpoints: {
      0: { slidesPerView: 1.3, spaceBetween: 12 },
      480: { slidesPerView: 1.5, spaceBetween },
      768: { slidesPerView, spaceBetween },
    },
    ...(autoplay && {
      autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },
    }),
    
    onSwiper: (swiper: SwiperType) => {
      swiperRef.current = swiper;
    },
  };

  return (
    <div className={`material-slider ${className}`}>
      <Swiper className="h-full" {...swiperOptions}>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper-material-wrapper">
              <div className="swiper-material-content h-full">
                <img
                  className="w-full h-full object-cover"
                  data-swiper-material-scale="1.25"
                  src={slide.image}
                  alt={slide.title || `Slide ${slide.id}`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
