"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  displayEquipmentCatalog,
  equipmentImageForModel,
  equipmentImageShouldBypassOptimization,
  productHref,
} from "../_data/displayEquipment";
import { equipmentCatalogGridVisual } from "../_lib/productsListing";
import { warmImageSrcs } from "../_lib/warmImages";

const EQUIP_PREWARM_MAX = 48;

const previewImageByCategory: Record<string, string> = {
  "earth-moving": "/portfolio-categories/earth-moving.png",
  "road-building": "/portfolio-categories/road-building.png",
  hoisting: "/portfolio-categories/hoisting.png",
  piling: "/portfolio-categories/piling.png",
  "underground-mining": "/portfolio-categories/underground-mining.png",
  concrete: "/portfolio-categories/concrete.png",
  "electric-vehicle": "/portfolio-categories/electric-vehicle.png",
};

function collectEquipmentImageUrls(categoryKey: string, subtype: "all" | string): string[] {
  const cat = displayEquipmentCatalog.find((c) => c.key === categoryKey);
  if (!cat) return [];
  const seen = new Set<string>();
  const list: string[] = [];
  const push = (u: string) => {
    if (!seen.has(u)) {
      seen.add(u);
      list.push(u);
    }
  };
  const fallback = previewImageByCategory[categoryKey] ?? "/hero2.png";
  push(fallback);
  const subs = subtype === "all" ? cat.subtypes : cat.subtypes.filter((s) => s.slug === subtype);
  for (const sub of subs) {
    for (const model of sub.models) {
      push(equipmentImageForModel(model, sub.slug) ?? fallback);
    }
  }
  return list;
}

type GridItem = { model: string; subtypeName: string; subtypeSlug: string };

export default function EquipmentCategoryExplorer() {
  const [activeKey, setActiveKey] = useState(displayEquipmentCatalog[0]?.key ?? "");
  const [subtypeFilter, setSubtypeFilter] = useState<"all" | string>("all");

  const activeCategory = useMemo(
    () => displayEquipmentCatalog.find((c) => c.key === activeKey) ?? displayEquipmentCatalog[0],
    [activeKey],
  );

  const gridItems: GridItem[] = useMemo(() => {
    if (!activeCategory) return [];
    if (subtypeFilter === "all") {
      return activeCategory.subtypes.flatMap((sub) =>
        sub.models.map((model) => ({
          model,
          subtypeName: sub.name,
          subtypeSlug: sub.slug,
        })),
      );
    }
    const sub = activeCategory.subtypes.find((s) => s.slug === subtypeFilter);
    if (!sub) return [];
    return sub.models.map((model) => ({
      model,
      subtypeName: sub.name,
      subtypeSlug: sub.slug,
    }));
  }, [activeCategory, subtypeFilter]);

  const categoryFallbackImage = activeCategory
    ? previewImageByCategory[activeCategory.key] ?? "/hero2.png"
    : "/hero2.png";

  const warmEquipmentGrid = useCallback((categoryKey: string, subtype: "all" | string) => {
    warmImageSrcs(collectEquipmentImageUrls(categoryKey, subtype).slice(0, EQUIP_PREWARM_MAX));
  }, []);

  const setCategory = useCallback(
    (key: string) => {
      warmEquipmentGrid(key, "all");
      setActiveKey(key);
      setSubtypeFilter("all");
    },
    [warmEquipmentGrid],
  );

  const applySubtype = useCallback(
    (slug: "all" | string) => {
      warmEquipmentGrid(activeKey, slug);
      setSubtypeFilter(slug);
    },
    [activeKey, warmEquipmentGrid],
  );

  useEffect(() => {
    const first = displayEquipmentCatalog[0]?.key;
    if (first) warmEquipmentGrid(first, "all");
  }, [warmEquipmentGrid]);

  if (!activeCategory) return null;

  const gutterX = "px-4 md:px-6";
  const gutterL = "pl-4 md:pl-6";

  const filterBtn = (active: boolean) =>
    [
      "catalog-filter rounded-sm px-3 py-2 text-left text-[10px] font-semibold uppercase tracking-[0.1em] md:px-4 md:py-2.5 md:text-[11px]",
      active
        ? "bg-white text-[var(--brand-blue)] shadow-sm ring-1 ring-[var(--brand-yellow)] md:bg-transparent md:shadow-none md:ring-0"
        : "text-[#64748b] hover:bg-white/80 hover:text-[var(--brand-blue)] md:hover:bg-white/60",
    ].join(" ");

  const filterBtnDesktop = (active: boolean) =>
    [
      "catalog-filter relative block w-full border-l-[3px] py-2.5 pl-4 pr-2 text-left text-[11px] font-semibold uppercase tracking-[0.08em]",
      active
        ? "border-[var(--brand-yellow)] bg-white/90 text-[var(--brand-blue)] shadow-[inset_0_0_0_1px_var(--border-subtle)]"
        : "border-transparent text-[#64748b] hover:border-[var(--border-subtle)] hover:bg-[#f1f4f8] hover:text-[var(--brand-blue)]",
    ].join(" ");

  return (
    <div className="bg-[var(--surface)]">
      <div className="border-b border-[var(--border-subtle)] bg-gradient-to-b from-white to-[var(--surface-muted)]">
        <div
          className={[
            "flex flex-nowrap gap-0 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:gap-1 md:py-1 [&::-webkit-scrollbar]:hidden",
            gutterX,
          ].join(" ")}
          role="tablist"
          aria-label="Equipment category"
        >
          {displayEquipmentCatalog.map(({ key, tab }) => {
            const selected = activeKey === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={selected}
                onPointerDown={() => warmEquipmentGrid(key, "all")}
                onClick={() => setCategory(key)}
                className={[
                  "catalog-tab relative shrink-0 border-b-[3px] px-3 py-3.5 text-[10px] font-bold uppercase tracking-[0.1em] md:px-5 md:py-4 md:text-[11px]",
                  selected
                    ? "border-[var(--brand-yellow)] text-[var(--brand-blue)]"
                    : "border-transparent text-[var(--brand-blue-muted)] hover:text-[var(--brand-blue)]",
                ].join(" ")}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-stretch">
        <div className={`border-b border-[var(--border-subtle)] bg-[var(--surface-muted)] py-3 md:hidden ${gutterX}`}>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">
            Type
          </p>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => applySubtype("all")} className={filterBtn(subtypeFilter === "all")}>
              All
            </button>
            {activeCategory.subtypes.map((sub) => (
              <button
                key={sub.slug}
                type="button"
                onPointerDown={() => warmEquipmentGrid(activeCategory.key, sub.slug)}
                onClick={() => applySubtype(sub.slug)}
                className={filterBtn(subtypeFilter === sub.slug)}
              >
                {sub.name}
              </button>
            ))}
          </div>
        </div>

        <aside
          className="hidden w-[200px] shrink-0 flex-col border-[var(--border-subtle)] bg-[var(--surface-muted)] md:flex lg:w-[220px] lg:border-r"
          aria-label="Filter by type"
        >
          <div className={`sticky top-24 flex flex-col gap-0 py-6 ${gutterL} pr-3 sm:pr-4`}>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
              Filter by type
            </p>
            <nav>
              <ul className="flex flex-col gap-0.5">
                <li>
                  <button
                    type="button"
                    onClick={() => applySubtype("all")}
                    className={filterBtnDesktop(subtypeFilter === "all")}
                  >
                    All
                  </button>
                </li>
                {activeCategory.subtypes.map((sub) => (
                  <li key={sub.slug}>
                    <button
                      type="button"
                      onPointerDown={() => warmEquipmentGrid(activeCategory.key, sub.slug)}
                      onClick={() => applySubtype(sub.slug)}
                      className={filterBtnDesktop(subtypeFilter === sub.slug)}
                    >
                      {sub.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <div className="min-w-0 flex-1 bg-white">
          <div className={`border-b border-[var(--border-subtle)] py-4 md:border-b-0 md:py-6 lg:py-8 ${gutterX}`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
              {activeCategory.label}
            </p>
            <p className="mt-1 text-sm text-[#64748b]">
              {gridItems.length} product{gridItems.length === 1 ? "" : "s"} shown
              {subtypeFilter !== "all" ? ` · ${activeCategory.subtypes.find((s) => s.slug === subtypeFilter)?.name}` : ""}
            </p>
          </div>

          <div className={`pb-10 pt-2 md:pb-12 ${gutterX}`}>
            {gridItems.length === 0 ? (
              <p className="py-12 text-center text-sm text-[#64748b]">No products in this filter.</p>
            ) : (
              <div
                key={`${activeKey}-${subtypeFilter}`}
                className="catalog-grid-enter grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 xl:grid-cols-4 xl:gap-x-5"
              >
                {gridItems.map(({ model, subtypeName, subtypeSlug }) => {
                  const src = equipmentImageForModel(model, subtypeSlug) ?? categoryFallbackImage;
                  const shouldUnoptimize = equipmentImageShouldBypassOptimization(src);
                  const gridVisual = equipmentCatalogGridVisual(subtypeSlug, model);
                  return (
                    <Link
                      key={`${subtypeSlug}-${model}`}
                      href={productHref(activeCategory.key, subtypeSlug, model)}
                      className="catalog-model-card group flex w-full max-w-[280px] flex-col items-center rounded-sm border border-[var(--border-subtle)]/0 bg-white p-3 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]/30"
                    >
                      <div className="catalog-model-media relative mx-auto h-[180px] w-full shrink-0 overflow-hidden rounded-md border border-[var(--border-subtle)] bg-white sm:h-[200px]">
                        <div
                          className={`relative flex h-full w-full items-center justify-center ${gridVisual.framePaddingClass}`}
                        >
                          <Image
                            src={src}
                            alt={`XCMG ${model} ${subtypeName}`}
                            fill
                            sizes="(max-width: 640px) 45vw, 280px"
                            className={[
                              "catalog-model-img object-contain object-center",
                              gridVisual.imageScaleClass,
                            ]
                              .filter(Boolean)
                              .join(" ")}
                            unoptimized={shouldUnoptimize}
                          />
                        </div>
                      </div>
                      <p className="catalog-model-title mt-5 font-mono text-[13px] font-bold uppercase leading-snug tracking-tight text-[var(--brand-blue)]">
                        {model}
                      </p>
                      <p className="mt-1.5 text-[12px] font-medium text-[#64748b]">{subtypeName}</p>
                      <p className="catalog-model-cta mt-2 text-[11px] text-[#94a3b8]">Contact for Nepal pricing</p>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={`border-t border-[var(--border-subtle)] bg-[var(--surface-muted)] py-8 md:py-10 ${gutterX}`}>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/products"
            className="inline-flex min-h-[44px] w-full max-w-xs items-center justify-center border-2 border-[var(--brand-blue)] bg-white px-8 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue)] transition-colors hover:bg-[var(--brand-blue)] hover:text-white sm:w-auto"
          >
            Compare equipment
          </Link>
        </div>
      </div>
    </div>
  );
}
