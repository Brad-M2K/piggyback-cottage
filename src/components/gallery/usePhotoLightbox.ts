"use client";

import type { TouchEvent as ReactTouchEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

export interface UsePhotoLightboxResult {
    activeIndex: number | null;
    openLightbox: (index: number) => void;
    closeLightbox: () => void;
    showNext: () => void;
    showPrev: () => void;
    setIndex: (index: number) => void;
    handleTouchStart: (event: ReactTouchEvent<HTMLDivElement>) => void;
    handleTouchEnd: (event: ReactTouchEvent<HTMLDivElement>) => void;
}

export default function usePhotoLightbox(imageCount: number): UsePhotoLightboxResult {
    const [activeIndex, setActiveIndexState] = useState<number | null>(null);
    const [storedScrollY, setStoredScrollY] = useState(0);
    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const isClosingRef = useRef(false);

    const freezeScroll = useCallback((scrollY: number) => {
        if (typeof document === 'undefined') return;
        const { body } = document;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
        body.style.width = '100%';
        body.style.overflow = 'hidden';
    }, []);

    const restoreScroll = useCallback((scrollY: number) => {
        if (typeof document === 'undefined' || typeof window === 'undefined') return;
        const { body } = document;
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        body.style.overflow = '';
        window.scrollTo({ top: scrollY });
    }, []);

    const setIndex = useCallback(
        (index: number) => {
            if (imageCount <= 0 || isClosingRef.current) return;
            const normalized = ((index % imageCount) + imageCount) % imageCount;
            setActiveIndexState(normalized);
        },
        [imageCount]
    );

    const openLightbox = useCallback(
        (index: number) => {
            if (typeof window === 'undefined' || imageCount === 0) return;
            const currentScroll = window.scrollY;
            setStoredScrollY(currentScroll);
            freezeScroll(currentScroll);
            isClosingRef.current = false;
            setIndex(index);
        },
        [freezeScroll, imageCount, setIndex]
    );

    const closeLightbox = useCallback(() => {
        if (activeIndex === null) return;
        isClosingRef.current = true;
        restoreScroll(storedScrollY);
        setActiveIndexState(null);
    }, [activeIndex, restoreScroll, storedScrollY]);

    const showNext = useCallback(() => {
        setActiveIndexState((prev) => {
            if (prev === null || imageCount <= 0) return prev;
            if (imageCount === 1) return prev;
            return (prev + 1) % imageCount;
        });
    }, [imageCount]);

    const showPrev = useCallback(() => {
        setActiveIndexState((prev) => {
            if (prev === null || imageCount <= 0) return prev;
            if (imageCount === 1) return prev;
            return (prev - 1 + imageCount) % imageCount;
        });
    }, [imageCount]);

    useEffect(() => {
        return () => {
            if (typeof document !== 'undefined') {
                const { body } = document;
                body.style.position = '';
                body.style.top = '';
                body.style.width = '';
                body.style.overflow = '';
            }
        };
    }, []);

    useEffect(() => {
        if (activeIndex !== null) {
            isClosingRef.current = false;
        }
    }, [activeIndex]);

    useEffect(() => {
        if (activeIndex === null) return undefined;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeLightbox();
            } else if (event.key === 'ArrowRight') {
                showNext();
            } else if (event.key === 'ArrowLeft') {
                showPrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, closeLightbox, showNext, showPrev]);

    const handleTouchStart = useCallback((event: ReactTouchEvent<HTMLDivElement>) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
    }, []);

    const handleTouchEnd = useCallback(
        (event: ReactTouchEvent<HTMLDivElement>) => {
            if (!touchStart.current) return;

            const touch = event.changedTouches[0];
            const deltaX = touch.clientX - touchStart.current.x;
            const deltaY = touch.clientY - touchStart.current.y;

            if (Math.abs(deltaX) > 60 && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    showPrev();
                } else {
                    showNext();
                }
            } else if (deltaY > 80) {
                closeLightbox();
            }

            touchStart.current = null;
        },
        [closeLightbox, showNext, showPrev]
    );

    return {
        activeIndex,
        openLightbox,
        closeLightbox,
        showNext,
        showPrev,
        setIndex,
        handleTouchStart,
        handleTouchEnd,
    };
}
