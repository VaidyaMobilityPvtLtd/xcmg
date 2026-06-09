export type HeroSlide = {
  src: string;
  alt: string;
  positionClassName?: string;
  unoptimized?: boolean;
};

export const heroSlides: readonly HeroSlide[] = [
  {
    src: "/top-final.svg",
    alt: "XCMG hero banner",
    positionClassName: "object-cover object-center",
    unoptimized: true,
  },
  {
    src: "/hero/top-pic-2.svg",
    alt: "XCMG construction equipment in action",
    positionClassName: "object-cover object-center",
    unoptimized: true,
  },
  {
    src: "/hero/top-pic-3.svg",
    alt: "XCMG machinery on a Nepal infrastructure project",
    positionClassName: "object-cover object-center",
    unoptimized: true,
  },
  {
    src: "/hero/top-pic-4.svg",
    alt: "XCMG heavy equipment fleet overview",
    positionClassName: "object-cover object-center",
    unoptimized: true,
  },
];
