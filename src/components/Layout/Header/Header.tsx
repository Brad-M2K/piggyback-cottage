
"use client";

import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { GoArrowUpRight } from "react-icons/go"; // use your own icon import if react-icons is not available
import { Instagram, Mail } from "lucide-react";
/* eslint-disable @next/next/no-img-element */

type CardNavLink = {
    label: string;
    href?: string;
    ariaLabel: string;
    icon?: string;
};

export type CardNavItem = {
    label: string;
    bgColor: string;
    textColor: string;
    links: CardNavLink[];
};

export interface CardNavProps {
    logo: string;
    logoAlt?: string;
    items: CardNavItem[];
    className?: string;
    ease?: string;
    baseColor?: string;
    menuColor?: string;
    buttonBgColor?: string;
    buttonTextColor?: string;
    topBarHeight?: number; // collapsed height of the header (in px)
}

const CardNav: React.FC<CardNavProps> = ({
    logo,
    logoAlt = "Logo",
    items,
    className = "",
    ease = "power3.out",
    baseColor = "#fff",
    menuColor,
    buttonBgColor,
    buttonTextColor,
    topBarHeight = 60,
}) => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement | null>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Hide-on-scroll state
    const [hidden, setHidden] = useState(false);
    const [hideOffset, setHideOffset] = useState(0);
    const lastScrollYRef = useRef(0);
    const [atTop, setAtTop] = useState(true);

    // Keep CTA button visually balanced regardless of header height
    const ctaHeight = Math.max(36, Math.min(topBarHeight - 20, 44));

    const calculateHeight = useCallback(() => {
        const navEl = navRef.current;
        if (!navEl) return 260;

        const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement | null;
        if (!contentEl) {
            return 260;
        }

        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';
        void contentEl.offsetHeight;

        const topBar = topBarHeight;
        const padding = 24;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return Math.max(topBar + contentHeight + padding, 260);
    }, [topBarHeight]);

    const createTimeline = useCallback(() => {
        const navEl = navRef.current;
        if (!navEl) return null;

        gsap.set(navEl, { height: topBarHeight, overflow: "hidden" });
        gsap.set(cardsRef.current, { y: 50, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(navEl, {
            height: calculateHeight,
            duration: 0.4,
            ease,
        });

        tl.to(
            cardsRef.current,
            { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
            "-=0.1"
        );

        return tl;
    }, [topBarHeight, ease, calculateHeight]);

    useLayoutEffect(() => {
        const tl = createTimeline();
        tlRef.current = tl;
        return () => {
            tl?.kill();
            tlRef.current = null;
        };
    }, [createTimeline]);

    // Measure how far we need to move the header to fully hide it
    useLayoutEffect(() => {
        const computeHideOffset = () => {
            const el = containerRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            // Move the element completely out of view (its height + current top offset), with a small buffer
            setHideOffset(rect.top + rect.height + 8);
        };
        computeHideOffset();
        window.addEventListener("resize", computeHideOffset);
        return () => window.removeEventListener("resize", computeHideOffset);
    }, []);

    // Hide on scroll down, show on scroll up
    useEffect(() => {
        lastScrollYRef.current = window.scrollY;
        setAtTop(window.scrollY <= 0);
        const onScroll = () => {
        const currentY = window.scrollY;
        setAtTop(currentY <= 0);
        if (isExpanded) {
            // Keep visible while menu is open
            setHidden(false);
            lastScrollYRef.current = currentY;
            return;
        }
        if (currentY <= 0) {
            setHidden(false);
        } else if (currentY > lastScrollYRef.current + 8) {
            // Scrolling down
            setHidden(true);
        } else if (currentY < lastScrollYRef.current - 8) {
            // Scrolling up
            setHidden(false);
        }
        lastScrollYRef.current = currentY;
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isExpanded]);

    const closeMenu = useCallback(() => {
        if (!isExpanded) return;
        const tl = tlRef.current;
        if (!tl) return;

        setIsHamburgerOpen(false);
        tl.eventCallback('onReverseComplete', () => {
            setIsExpanded(false);
            tl.eventCallback('onReverseComplete', null);
        });
        tl.reverse();
    }, [isExpanded]);

    const toggleMenu = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!isExpanded) {
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play(0);
        } else {
            closeMenu();
        }
    };

    useLayoutEffect(() => {
        const handleResize = () => {
            if (!tlRef.current) return;

            if (isExpanded) {
                const newHeight = calculateHeight();
                gsap.set(navRef.current, { height: newHeight });
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) {
                    newTl.progress(1);
                    tlRef.current = newTl;
                }
            } else {
                tlRef.current.kill();
                const newTl = createTimeline();
                if (newTl) tlRef.current = newTl;
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isExpanded, calculateHeight, createTimeline]);

    useEffect(() => {
        if (!isExpanded) return;

        const handlePointerDown = (event: PointerEvent) => {
            const container = containerRef.current;
            if (!container) return;
            if (container.contains(event.target as Node)) {
                return;
            }
            closeMenu();
        };

        window.addEventListener('pointerdown', handlePointerDown);
        return () => window.removeEventListener('pointerdown', handlePointerDown);
    }, [isExpanded, closeMenu]);

    const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) cardsRef.current[i] = el;
    };

    // CSS variable style for Tailwind translate Y
    interface ContainerStyle extends React.CSSProperties {
        "--tw-translate-y"?: string;
    }
    const containerStyle: ContainerStyle = {
        "--tw-translate-y": `${hidden && !isExpanded ? -hideOffset : 0}px`,
    };

    const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
        instagram: Instagram,
        email: Mail,
    };

    const scrollToContact = useCallback(() => {
        const el = document.getElementById('contact');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.location.hash = '#contact';
        }
        closeMenu();
    }, [closeMenu]);

    const renderLink = (link: CardNavLink) => {
        const Icon = link.icon ? iconMap[link.icon] ?? GoArrowUpRight : GoArrowUpRight;

        const anchorAttributes = link.href && link.href.startsWith('http')
            ? { target: '_blank', rel: 'noopener noreferrer' as const }
            : {};

        if (!link.href) {
            return (
                <button
                    type="button"
                    className="nav-card-link inline-flex items-center gap-[6px] text-[15px] md:text-[16px] opacity-70 cursor-not-allowed"
                    aria-label={link.ariaLabel}
                    disabled
                >
                    <Icon className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {link.label}
                </button>
            );
        }

        const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
            if (!link.href) {
                return;
            }

            if (link.href.startsWith('#contact')) {
                event.preventDefault();
                scrollToContact();
                return;
            }

            const anchor = event.currentTarget;

            if (!link.href.startsWith('http')) {
                closeMenu();
                return;
            }

            anchor.setAttribute('aria-busy', 'true');
            anchor.classList.add('loading');

            const opened = window.open(link.href, '_blank', 'noopener,noreferrer');

            if (!opened) {
                anchor.removeAttribute('aria-busy');
                anchor.classList.remove('loading');
                closeMenu();
                return;
            }

            event.preventDefault();

            closeMenu();

            window.requestAnimationFrame(() => {
                setTimeout(() => {
                    anchor.removeAttribute('aria-busy');
                    anchor.classList.remove('loading');
                }, 1200);
            });
        };

        return (
            <a
                className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px] relative"
                href={link.href}
                aria-label={link.ariaLabel}
                style={{ color: "inherit" }}
                onClick={handleClick}
                {...anchorAttributes}
            >
                <Icon className="nav-card-link-icon shrink-0" aria-hidden="true" />
                <span>{link.label}</span>
                <span className="loading-text ml-2 text-xs text-current">Loading…</span>
            </a>
        );
    };

    return (
        <div
            ref={containerRef}
            className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[900px] z-[9999] top-[0.6em] md:top-[0.8em] transition-transform duration-300 will-change-transform transform-gpu ${className}`}
            style={containerStyle}
        >
            <nav
                ref={navRef}
                className={`card-nav ${isExpanded ? "open shadow-2xl" : (atTop ? "shadow-none" : "shadow-sm")} block p-0 rounded-xl  relative overflow-hidden will-change-[height] transition-shadow  ease-in-out duration-300`}
                style={{ backgroundColor: baseColor, height: topBarHeight }}
            >
                <div
                    className="card-nav-top absolute inset-x-0 top-0 flex items-center justify-between p-2 pl-[1.1rem] z-[2]"
                    style={{ height: topBarHeight }}
                >
                    <div
                        className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group relative w-8 h-6 cursor-pointer order-2 md:order-none flex items-center justify-center`}
                        onClick={toggleMenu}
                        role="button"
                        aria-label={isExpanded ? "Close menu" : "Open menu"}
                        tabIndex={0}
                        style={{ color: menuColor || "#000" }}
                    >
                        <span
                            className={`absolute left-1/2 top-1/2 block h-[2px] w-[30px] bg-current -translate-x-1/2 transition-transform duration-300 ease-in-out [transform-origin:50%_50%] ${
                                isHamburgerOpen ? "rotate-45 translate-y-0" : "-translate-y-[6px]"
                            } group-hover:opacity-75`}
                        />
                        <span
                            className={`absolute left-1/2 top-1/2 block h-[2px] w-[30px] bg-current -translate-x-1/2 transition-transform duration-300 ease-in-out [transform-origin:50%_50%] ${
                                isHamburgerOpen ? "-rotate-45 translate-y-0" : "translate-y-[6px]"
                            } group-hover:opacity-75`}
                        />
                    </div>

                    <div className="logo-container flex items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 order-1 md:order-none">
                        <button
                            type="button"
                            className="logo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
                            onClick={() => {
                                window.location.href = '/';
                            }}
                            aria-label="Go to homepage"
                            style={{ height: Math.max(topBarHeight - 16, 0) }}
                        >
                            <img
                                src={logo}
                                alt={logoAlt}
                                style={{ height: '100%', width: 'auto' }}
                            />
                        </button>
                    </div>

                    <button
                        type="button"
                        className="card-nav-cta-button hidden md:inline-flex border-0 rounded-[calc(0.75rem-0.2rem)] px-4 md:px-5 font-medium cursor-pointer transition-colors duration-300 items-center justify-center py-0"
                        style={{ backgroundColor: buttonBgColor, color: buttonTextColor, height: ctaHeight }}
                        onClick={scrollToContact}
                    >
                        Enquire
                    </button>
                </div>

                <div
                    className={`card-nav-content absolute left-0 right-0 bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-[1] ${
                        isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none"
                    } md:flex-row md:items-end md:gap-[12px]`}
                    style={{ top: topBarHeight }}
                    aria-hidden={!isExpanded}
                >
                    {(items || []).slice(0, 3).map((item, idx) => (
                        <div
                            key={`${item.label}-${idx}`}
                            className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
                            ref={setCardRef(idx)}
                            style={{ backgroundColor: item.bgColor, color: item.textColor }}
                        >
                            <div className="nav-card-label font-bold tracking-[-0.5px] text-[18px] md:text-[22px]">
                                {item.label}
                            </div>
                            <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                                {item.links?.map((lnk) => (
                                    <span key={lnk.label} style={{ color: item.textColor }}>
                                        {renderLink(lnk)}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    );
};

export default CardNav;
