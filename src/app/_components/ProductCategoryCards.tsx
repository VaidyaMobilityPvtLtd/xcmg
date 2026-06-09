"use client";

import Image from "next/image";
import Link from "next/link";
import type { DisplayCategory } from "../_data/displayEquipment";
import { productsSegmentHref } from "../_data/displayEquipment";

/** Homepage category cards — distinct previews from `public/land-page/`. */
const homeCategoryImageByKey: Record<string, string> = {
  "earth-moving": "/land-page/earth-moving.png",
  "road-building": "/land-page/road-building.png",
  hoisting: "/land-page/hoisting.png",
  "underground-mining": "/land-page/underground-mining.png",
  piling: "/land-page/piling.png",
  concrete: "/land-page/concrete.png",
  "electric-vehicle": "/land-page/electric-vehicle.png",
};

type Props = {
  catalog: DisplayCategory[];
};

export function ProductCategoryCards({ catalog }: Props) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {catalog.map((card) => (
        <article
          key={card.key}
          className="interactive-card group overflow-hidden border border-[var(--border-subtle)] bg-white shadow-md"
        >
          <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-[#eef2f6] to-[#f8fafc] sm:h-44">
            <Image
              src={homeCategoryImageByKey[card.key] ?? "/hero2.png"}
              alt={card.label}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">{card.label}</p>
            </div>
          </div>
          <div className="p-5">
            <p className="text-sm font-semibold text-[var(--brand-blue)]">{card.label}</p>
            <p className="mt-2 text-sm leading-6 text-[#64748b]">{card.blurb}</p>
            <Link
              href={productsSegmentHref(card.key)}
              className="mt-4 inline-flex text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0b3c91] decoration-[var(--brand-yellow)] decoration-2 underline-offset-4 transition-colors duration-300 hover:text-[#0a3376] hover:underline"
            >
              View products →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
