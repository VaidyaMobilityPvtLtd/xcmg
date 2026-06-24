/**
 * Hero background images for inner routes (`public/page-heroes/`).
 * Not referenced from the landing page (`src/app/page.tsx`).
 */

export const pageHeroSrc = {
  aboutUs: "/page-heroes/about-us.png",
  news: "/page-heroes/news.png",
  downloadBrochures: "/page-heroes/download-brochures.png",
  /** No Services-specific asset in pack; hoisting plate used for Services and child routes. */
  services: "/page-heroes/hoisting-machinery.png",
  productsOverview: "/page-heroes/earth-moving.png",
} as const;

const productsSegmentHero: Record<string, string> = {
  "earth-moving": "/page-heroes/earth-moving.png",
  "road-building": "/page-heroes/road-building.png",
  hoisting: "/page-heroes/hoisting-machinery.png",
  "underground-mining": "/page-heroes/underground-mining.png",
  piling: "/page-heroes/drilling-machinery.png",
  concrete: "/page-heroes/concrete-machinery.png",
  "electric-vehicle": "/page-heroes/electric-vehicle-alt.png",
  "other-machinery": "/page-heroes/earth-moving.png",
};

export function pageHeroSrcForProductsSegment(segmentKey: string | undefined): string {
  if (!segmentKey) return pageHeroSrc.productsOverview;
  return productsSegmentHero[segmentKey] ?? pageHeroSrc.productsOverview;
}

/** Default `imageSrc` for `PageHero` when a page does not pass one. */
export const pageHeroDefaultInnerSrc = pageHeroSrc.productsOverview;
