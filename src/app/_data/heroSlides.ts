export type HeroSlide = {
  src: string;
  alt: string;
  positionClassName?: string;
  unoptimized?: boolean;
};

/** Full-composition WebP renders; regenerate with scripts/optimize-hero-images.mjs. */
export const heroSlides: readonly HeroSlide[] = [
  {
    src: "/hero/top-final.webp",
    alt: "XCMG hero banner",
    positionClassName: "object-cover object-center",
  },
  {
    src: "/hero/top-pic-2.webp",
    alt: "XCMG construction equipment in action",
    positionClassName: "object-cover object-center",
  },
  {
    src: "/hero/top-pic-3.webp",
    alt: "XCMG machinery on a Nepal infrastructure project",
    positionClassName: "object-cover object-center",
  },
  {
    src: "/hero/top-pic-4.webp",
    alt: "XCMG heavy equipment fleet overview",
    positionClassName: "object-cover object-center",
  },
];
