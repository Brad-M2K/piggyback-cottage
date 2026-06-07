"use client";

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

type Review = {
    name: string;
    text: string;
    stay: string;
};

const REVIEWS = [
    {
        name: 'Lou & Mel',
        text: 'It has been a true Northumbrian visit in blustery and rainy conditions, but what a haven Piggyback Cottage is — a perfect gem of a hideaway. Due to its ideal location between the River Coquet and the North Sea, we’ve enjoyed beautiful walks and wonderful wildlife. We stood in awe watching a barn owl hunting over the sand dunes near Warkworth Golf Club. We would love to visit again to see how Piggyback changes through the seasons. There is so much to see. Thank you, we have loved our visit here.',
        stay: 'Stayed 2026',
    },
    {
        name: 'The Willibobs',
        text: 'Thank you Dawn & Gary for a wonderful stay in your beautiful cottage. Piggyback is the perfect getaway to unwind. This little gem is super cosy, spotlessly clean, well equipped and the attention to detail is superb. We felt at home straight away. We were lucky enough to visit during the best weather and loved relaxing in the pretty courtyard with a bottle of wine or two. Thanks again and we hope to visit again soon. Warning: highly relaxing stay — may result in extended naps and a refusal to go home!',
        stay: 'Stayed 2026',
    },
    {
        name: 'Ellie & Rudi',
        text: 'We wondered if we would feel the same coming back to Piggyback. We shouldn’t have worried — it still felt like our second home. The new pictures and little extra touches are lovely, and the welcome basket was a wonderful surprise. Although the weather took a chilly turn, we still got out every day and even made it to The Hermitage. Already looking forward to our next visit. Thank you Dawn & Gary for still sharing Piggyback.',
        stay: 'Stayed 2025',
    },
    {
        name: 'Jan Parker Walker',
        text: 'We would highly recommend Piggyback Cottage as it is beautiful and immaculately presented. There was everything we needed for our 7 night stay. The hamper and doggy treats were a very thoughtful touch. The beds were extremely comfy and having the option of a bath was perfect! The views from upstairs are breathtaking. Our dog was safe in the enclosed area outside and just loved being all cosy with us inside. The bedroom downstairs was ideal as dogs are not allowed upstairs. The cottage is ideally located a short walk into the village — we even saw a family of otters while walking along the riverside. We ate at the Warkworth Hotel and Bertrams Cafe, both excellent. We loved this place so much we have booked again for next year.',
        stay: 'Stayed 2024',
    },
    {
        name: 'Phillip Gill',
        text: 'From the moment we walked through the door we just loved this cottage. It has everything you need and more. Great for us — we came with friends so having one of the big bedrooms downstairs was perfect. It was warm and cosy; we lit the fire every night which made it extra special. We love this area of Northumberland, so many beautiful beaches, landscapes and historical places to visit. We already have another weekend booked here and we can’t wait to return. Highly recommend a visit in any season!',
        stay: 'Stayed 2024',
    },
] satisfies Review[];

const LONG_REVIEW_LENGTH = 360;

export default function ReviewsSection() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [expandedReview, setExpandedReview] = useState<Review | null>(null);
    const hasMultipleReviews = REVIEWS.length > 1;

    useEffect(() => {
        if (!expandedReview) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setExpandedReview(null);
            }
        };

        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [expandedReview]);

    const goToPreviousReview = () => {
        swiperRef.current?.slidePrev();
    };

    const goToNextReview = () => {
        swiperRef.current?.slideNext();
    };

    return (
        <section id="reviews" className="scroll-mt-32 space-y-10 py-16">
            <div className="text-center space-y-3">
                <h2 className="text-3xl md:text-4xl font-serif text-forest">Guest Kind Words</h2>
                <p className="text-slate max-w-3xl mx-auto text-base leading-relaxed">
                    A few highlights from recent guests who made Piggyback Cottage their home for a few days.
                </p>
            </div>

            <div className="mx-auto max-w-5xl">
                <Swiper
                    className="!overflow-hidden"
                    slidesPerView={1}
                    spaceBetween={24}
                    loop={hasMultipleReviews}
                    grabCursor={hasMultipleReviews}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChange={(swiper) => {
                        setActiveIndex(swiper.realIndex);
                    }}
                >
                    {REVIEWS.map((review) => {
                        const isLongReview = review.text.length > LONG_REVIEW_LENGTH;

                        return (
                            <SwiperSlide key={review.name} className="!h-auto">
                                <figure className="flex min-h-[25rem] flex-col rounded-3xl border border-muted-sage/20 bg-cream/70 p-6 shadow-sm backdrop-blur sm:min-h-[22rem] sm:p-8">
                                    <div className="flex items-center gap-2 text-golden mb-4">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                                        ))}
                                    </div>
                                    <blockquote
                                        className="overflow-hidden text-sm leading-relaxed text-slate sm:text-base"
                                        style={{
                                            display: '-webkit-box',
                                            WebkitLineClamp: 8,
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        &ldquo;{review.text}&rdquo;
                                    </blockquote>
                                    {isLongReview ? (
                                        <button
                                            type="button"
                                            className="mt-4 w-fit text-sm font-semibold text-forest underline decoration-golden/60 underline-offset-4 transition hover:text-heather"
                                            onClick={() => setExpandedReview(review)}
                                        >
                                            Read more
                                        </button>
                                    ) : null}
                                    <figcaption className="mt-auto pt-6 text-sm font-medium text-forest">
                                        {review.name}
                                        <span className="block text-slate/70 font-normal">{review.stay}</span>
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>

                {hasMultipleReviews ? (
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <button
                            type="button"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-muted-sage/30 bg-cream text-forest shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-golden"
                            onClick={goToPreviousReview}
                            aria-label="Show previous review"
                        >
                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                        </button>

                        <div className="flex min-w-20 justify-center gap-2" aria-label="Review position">
                            {REVIEWS.map((review, index) => (
                                <button
                                    key={review.name}
                                    type="button"
                                    className={`h-2.5 rounded-full transition-all ${
                                        activeIndex === index ? 'w-8 bg-forest' : 'w-2.5 bg-muted-sage/50'
                                    }`}
                                    onClick={() => swiperRef.current?.slideToLoop(index)}
                                    aria-label={`Show review ${index + 1}`}
                                    aria-current={activeIndex === index ? 'true' : undefined}
                                />
                            ))}
                        </div>

                        <button
                            type="button"
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-muted-sage/30 bg-cream text-forest shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-golden"
                            onClick={goToNextReview}
                            aria-label="Show next review"
                        >
                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                ) : null}
            </div>

            {expandedReview ? (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/55 px-4 py-8"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="review-modal-title"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) {
                            setExpandedReview(null);
                        }
                    }}
                >
                    <article
                        className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-cream p-6 shadow-2xl sm:p-8"
                    >
                        <button
                            type="button"
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-muted-sage/30 bg-white/70 text-forest transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-golden"
                            onClick={() => setExpandedReview(null)}
                            aria-label="Close expanded review"
                        >
                            <X className="h-5 w-5" aria-hidden="true" />
                        </button>

                        <div className="mb-4 flex items-center gap-2 pr-12 text-golden">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                            ))}
                        </div>
                        <h3 id="review-modal-title" className="pr-12 text-2xl font-serif text-forest">
                            {expandedReview.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate/70">{expandedReview.stay}</p>
                        <blockquote className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
                            &ldquo;{expandedReview.text}&rdquo;
                        </blockquote>
                    </article>
                </div>
            ) : null}
        </section>
    );
}
