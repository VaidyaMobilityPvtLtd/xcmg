"use client";

import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "../_data/heroSlides";
import { warmImageSrc, warmImageSrcs } from "../_lib/warmImages";

const heroMinHeightClass =
  "min-h-[clamp(240px,42dvh,480px)] sm:min-h-[clamp(300px,48dvh,560px)] md:min-h-[clamp(380px,52dvh,640px)]";

const SLIDE_INTERVAL_MS = 6000;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlayTick, setAutoPlayTick] = useState(0);
  const slideCount = heroSlides.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (slideCount === 0) return;
      setActiveIndex(((index % slideCount) + slideCount) % slideCount);
    },
    [slideCount],
  );

  const goNext = useCallback(() => {
    if (slideCount === 0) return;
    setActiveIndex((current) => (current + 1) % slideCount);
  }, [slideCount]);

  const goToSlideManual = useCallback(
    (index: number) => {
      goToSlide(index);
      setAutoPlayTick((tick) => tick + 1);
    },
    [goToSlide],
  );

  useEffect(() => {
    warmImageSrcs(heroSlides.map((slide) => slide.src));
  }, []);

  useEffect(() => {
    if (slideCount <= 1) return;

    const nextIndex = (activeIndex + 1) % slideCount;
    const prevIndex = (activeIndex - 1 + slideCount) % slideCount;
    warmImageSrc(heroSlides[nextIndex]?.src ?? "");
    warmImageSrc(heroSlides[prevIndex]?.src ?? "");
  }, [activeIndex, slideCount]);

  useEffect(() => {
    if (slideCount <= 1) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(goNext, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [autoPlayTick, goNext, slideCount]);

  if (slideCount === 0) return null;

  return (
    <section className="relative overflow-hidden border-b border-[var(--border-subtle)]" aria-label="Featured equipment">
      <div className={`relative ${heroMinHeightClass} w-full overflow-hidden`}>
        <div className="hero-enter absolute inset-0 isolate overflow-hidden">
          <div className="relative h-full w-full bg-[#0b1f4a]">
            {heroSlides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={slide.src}
                  className={[
                    "hero-slide-layer absolute inset-0",
                    isActive ? "opacity-100" : "pointer-events-none opacity-0",
                  ].join(" ")}
                  aria-hidden={!isActive}
                >
                  <img
                    src={slide.src}
                    alt={isActive ? slide.alt : ""}
                    loading={index <= 1 ? "eager" : "lazy"}
                    decoding={index === 0 ? "sync" : "async"}
                    fetchPriority={index === 0 ? "high" : index === 1 ? "auto" : "low"}
                    className={[
                      "pointer-events-none absolute inset-0 box-border h-full w-full object-cover",
                      slide.positionClassName ?? "object-center",
                    ].join(" ")}
                  />
                </div>
              );
            })}
          </div>

          <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-[#0b3c91]/18 via-[#0b3c91]/10 to-black/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-28 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />
        </div>

        {slideCount > 1 ? (
          <div className="absolute inset-x-0 bottom-4 z-[4] flex items-center justify-center gap-2 sm:bottom-5">
            {heroSlides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={`hero-dot-${slide.src}`}
                  type="button"
                  aria-label={`Show slide ${index + 1} of ${slideCount}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => goToSlideManual(index)}
                  className={[
                    "h-2.5 rounded-full transition-all duration-300",
                    isActive
                      ? "w-7 bg-[var(--brand-yellow)]"
                      : "w-2.5 bg-white/55 hover:bg-white/80",
                  ].join(" ")}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
