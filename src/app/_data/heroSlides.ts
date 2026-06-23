export type HeroSlide = {
  src: string;
  alt: string;
  positionClassName?: string;
  unoptimized?: boolean;
};

export const heroSlides: readonly HeroSlide[] = [
  {
    src: "/hero/slide-1.webp",
    alt: "XCMG hero banner",
    positionClassName: "object-cover object-center",
  },
  {
    src: "/hero/slide-2.webp",
    alt: "XCMG construction equipment in action",
    positionClassName: "object-cover object-center",
  },
  {
    src: "/hero/slide-3.webp",
    alt: "XCMG machinery on a Nepal infrastructure project",
    positionClassName: "object-cover object-center",
  },
  {
    src: "/hero/slide-4.webp",
    alt: "XCMG heavy equipment fleet overview",
    positionClassName: "object-cover object-center",
  },
];
