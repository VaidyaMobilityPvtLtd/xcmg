"use client";

import { useEffect } from "react";
import { heroSlides } from "../_data/heroSlides";
import { warmImageSrcs } from "../_lib/warmImages";

const heroMinHeightClass =
  "min-h-[clamp(240px,42dvh,480px)] sm:min-h-[clamp(300px,48dvh,560px)] md:min-h-[clamp(380px,52dvh,640px)]";

export default function HeroSlider() {
  const slide = heroSlides[0];

  useEffect(() => {
    if (!slide) return;
    warmImageSrcs([slide.src]);
  }, [slide]);

  if (!slide) return null;

  return (
    <section className="relative overflow-hidden border-b border-[var(--border-subtle)]">
      <div className={`relative ${heroMinHeightClass} w-full overflow-hidden`}>
        <div className="hero-enter absolute inset-0 isolate overflow-hidden">
          <div className="relative h-full w-full bg-[#0b1f4a]">
    
            <img
              src={slide.src}
              alt={slide.alt}
              loading="eager"
              decoding="sync"
              fetchPriority="high"
              className={[
                "pointer-events-none absolute inset-0 box-border h-full w-full object-cover",
                slide.positionClassName ?? "object-center",
              ].join(" ")}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-[#0b3c91]/18 via-[#0b3c91]/10 to-black/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-28 bg-gradient-to-b from-black/35 via-black/15 to-transparent" />
        </div>
      </div>
    </section>
  );
}
