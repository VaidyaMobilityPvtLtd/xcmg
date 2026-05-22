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
    positionClassName: "object-center",
    unoptimized: true,
  },
];
