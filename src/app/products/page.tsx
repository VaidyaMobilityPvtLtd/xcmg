import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import {
  PageHero,
  PageHeroBreadcrumbs,
  type PageHeroCrumb,
  pageHeroEyebrowBrandClass,
  pageHeroLeadBrandClass,
  pageHeroTitleBrandClass,
} from "../_components/PageHero";
import {
  displayEquipmentCatalog,
  equipmentImageForModel,
  equipmentImageShouldBypassOptimization,
  productHref,
  productsSegmentHref,
  productsSubtypeHref,
} from "../_data/displayEquipment";
import { formatEquipmentTypeLabel, portfolioImageForCategory } from "../_lib/productsListing";
import { evProductDescriptionsByModel } from "../_data/evSpecifications";
import { concreteDescriptionForModel, concreteSpecificationsForModel } from "../_data/concreteSpecifications";
import { productSpecificationsForModel } from "../_data/productSpecifications";
import { roadEarthDescriptionForModel, roadEarthSpecificationsForModel } from "../_data/roadEarthSpecifications";
import { siteContacts } from "../_data/siteContacts";
import { pageHeroSrcForProductsSegment } from "../_data/pageHeroBanners";

const salesDeptEmail =
  siteContacts.departments.find((d) => d.title === "Sales")?.email ?? siteContacts.generalEmail;

/**
 * Model-detail image area: plain white (no panel chrome), fixed height + `fill` + `object-contain`
 * so wide/tall PNGs stay fully visible.
 */
const catalogModelDetailImageShell =
  "relative block w-full min-w-0 max-w-full overflow-hidden bg-white [color-scheme:light] " +
  "min-h-[240px] h-[min(48vh,420px)] max-h-[min(56vh,480px)] sm:min-h-[300px] sm:h-[min(52vh,500px)] sm:max-h-[min(60vh,540px)] " +
  "md:min-h-[420px] md:h-[min(64vh,640px)] md:max-h-[min(72vh,680px)]";

/** Listing image strip: plain white, fixed height, same contain rules as detail. */
const catalogListingThumbShell =
  "relative block w-full min-w-0 overflow-hidden bg-white [color-scheme:light] p-2 sm:p-3 h-[200px] sm:h-[260px] md:h-[300px]";

type Props = {
  searchParams: Promise<{ segment?: string; type?: string; subtype?: string; model?: string }>;
};

type ModelMatchEntry = {
  model: string;
  subtypeName: string;
  subtypeSlug: string;
  segmentKey: string;
  segmentLabel: string;
};

type ProductDetailMeta = {
  family: string;
  drive: string;
  caseTitle: string;
  caseImage: string;
  description: string;
};

function resolveProductDetailMeta(entry: ModelMatchEntry, equipmentImage: string | null): ProductDetailMeta | null {
  const ev = evModelDisplayMeta[entry.model];
  if (ev) return ev;

  const concreteSpecs = concreteSpecificationsForModel(entry.model);
  const concreteDesc = concreteDescriptionForModel(entry.model);
  if (concreteSpecs.length > 0 || concreteDesc) {
    const caseImage = equipmentImage ?? portfolioImageForCategory(entry.segmentKey);
    return {
      family: entry.subtypeName,
      drive: "Diesel",
      caseTitle: `${entry.model} — technical specifications`,
      caseImage,
      description:
        concreteDesc ??
        `${entry.model} — concrete machinery from the Nepal catalog with local support from UHEEM.`,
    };
  }

  const roadSpecs = roadEarthSpecificationsForModel(entry.model);
  const roadDesc = roadEarthDescriptionForModel(entry.model);
  if (roadSpecs.length === 0 && !roadDesc) return null;
  const caseImage = equipmentImage ?? portfolioImageForCategory(entry.segmentKey);
  return {
    family: entry.subtypeName,
    drive: "Diesel",
    caseTitle: `${entry.model} — technical specifications`,
    caseImage,
    description:
      roadDesc ??
      `${entry.model} — diesel earth-moving and road-building equipment from the Nepal catalog with local support from UHEEM.`,
  };
}

function resolveSelectedModelEntry(
  modelQuery: string,
  matches: ModelMatchEntry[],
  segment: string,
  subtypeRaw: string,
): ModelMatchEntry | null {
  const exact = matches.filter((e) => e.model.replace(/\s+/g, "").toUpperCase() === modelQuery);
  if (exact.length === 0) return null;
  if (segment) {
    const bySegment = exact.find((e) => e.segmentKey === segment);
    if (bySegment) return bySegment;
  }
  if (subtypeRaw) {
    const bySubtype = exact.find((e) => e.subtypeSlug === subtypeRaw);
    if (bySubtype) return bySubtype;
  }
  return exact[0];
}

const evModelDisplayMeta: Record<
  string,
  { family: string; drive: string; caseTitle: string; caseImage: string; description: string }
> = {
  XC918EV: {
    family: "Electric Wheel Loader",
    drive: "Battery Electric",
    caseTitle: "XC918EV supporting compact urban loading operations",
    caseImage: "/equipment/electric-vehicles/EV-PIC/XC918-EV.png",
    description: evProductDescriptionsByModel.XC918EV,
  },
  XC938EV: {
    family: "Electric Wheel Loader",
    drive: "Battery Electric",
    caseTitle: "XC938EV deployed for low-emission jobsite material handling",
    caseImage: "/equipment/electric-vehicles/EV-PIC/XC938-EV.png",
    description: evProductDescriptionsByModel.XC938EV,
  },
  XC968EV: {
    family: "Electric Wheel Loader",
    drive: "Battery Electric",
    caseTitle: "XC968EV used in high-volume aggregate handling applications",
    caseImage: "/equipment/electric-vehicles/EV-PIC/XC968-EV.png",
    description: evProductDescriptionsByModel.XC968EV,
  },
  XC975EV: {
    family: "Electric Wheel Loader",
    drive: "Battery Electric",
    caseTitle: "XC975EV operating in heavy-duty loading and transfer cycles",
    caseImage: "/equipment/electric-vehicles/EV-PIC/XC975-EV.png",
    description: evProductDescriptionsByModel.XC975EV,
  },
  XE215EV: {
    family: "Electric Excavator",
    drive: "Battery Electric",
    caseTitle: "XE215EV executing excavation with reduced on-site emissions",
    caseImage: "/equipment/electric-vehicles/EV-PIC/XE215-EV.png",
    description: evProductDescriptionsByModel.XE215EV,
  },
  RP905HEV: {
    family: "New Energy Paver",
    drive: "Hybrid Electric",
    caseTitle: "RP905HEV delivering paving performance on urban corridors",
    caseImage: "/equipment/electric-vehicles/EV-PIC/RP905HEV.png",
    description: evProductDescriptionsByModel.RP905HEV,
  },
  XCR40_EV: {
    family: "Rough Terrain Crane",
    drive: "Hybrid Electric",
    caseTitle: "XCR40_EV supporting lifting operations across uneven terrain",
    caseImage: "/equipment/electric-vehicles/EV-PIC/XCR40_EV.png",
    description: evProductDescriptionsByModel.XCR40_EV,
  },
  XS265HEV: {
    family: "New Energy Roller",
    drive: "Hybrid Electric",
    caseTitle: "XS265HEV performing compaction with lower operating emissions",
    caseImage: "/equipment/electric-vehicles/EV-PIC/XS265HEV.png",
    description: evProductDescriptionsByModel.XS265HEV,
  },
};

export default async function ProductsPage({ searchParams }: Props) {
  const sp = await searchParams;
  const segment = typeof sp.segment === "string" ? sp.segment : "";
  const typeRaw = typeof sp.type === "string" ? sp.type : "";
  const subtypeRaw = typeof sp.subtype === "string" ? sp.subtype : "";
  const modelRaw = typeof sp.model === "string" ? decodeURIComponent(sp.model) : "";
  const typeLabel = typeRaw ? formatEquipmentTypeLabel(decodeURIComponent(typeRaw)) : "";
  const subtypeLabel = subtypeRaw ? formatEquipmentTypeLabel(decodeURIComponent(subtypeRaw)) : "";
  const selectionParts: string[] = [];
  if (segment) selectionParts.push(segment.replace(/-/g, " "));
  if (subtypeLabel || typeLabel) selectionParts.push(subtypeLabel || typeLabel);
  if (modelRaw) selectionParts.push(modelRaw);
  const hasSelection = selectionParts.length > 0;
  const modelQuery = modelRaw.trim().toUpperCase();
  const modelMatches: ModelMatchEntry[] = modelQuery
    ? displayEquipmentCatalog.flatMap((category) =>
        category.subtypes.flatMap((subtype) =>
          subtype.models
            .filter((m) => m.toUpperCase().includes(modelQuery))
            .map((model) => ({
              model,
              subtypeName: subtype.name,
              subtypeSlug: subtype.slug,
              segmentKey: category.key,
              segmentLabel: category.label,
            })),
        ),
      )
    : [];
  const selectedModel = modelQuery ? resolveSelectedModelEntry(modelQuery, modelMatches, segment, subtypeRaw) : null;
  const selectedModelImage = selectedModel
    ? equipmentImageForModel(selectedModel.model, selectedModel.subtypeSlug)
    : null;
  const selectedModelSpecs = selectedModel ? productSpecificationsForModel(selectedModel.model) : [];
  const selectedModelHighlights = selectedModelSpecs.slice(0, 3);
  const selectedMeta = selectedModel ? resolveProductDetailMeta(selectedModel, selectedModelImage) : null;
  const heroImageSrc =
    selectedMeta?.caseImage ?? selectedModelImage ?? (selectedModel ? portfolioImageForCategory(selectedModel.segmentKey) : null);
  const heroImageBypassOpt = heroImageSrc ? equipmentImageShouldBypassOptimization(heroImageSrc) : false;
  const categoryForSegment = segment
    ? displayEquipmentCatalog.find((c) => c.key === segment) ?? null
    : null;
  const subtypeFilter =
    subtypeRaw && categoryForSegment
      ? categoryForSegment.subtypes.find((s) => s.slug === subtypeRaw) ?? null
      : null;
  const listingSubtypes =
    categoryForSegment && subtypeFilter
      ? [subtypeFilter]
      : categoryForSegment
        ? categoryForSegment.subtypes
        : [];
  const listingModels =
    categoryForSegment && listingSubtypes.length > 0
      ? listingSubtypes.flatMap((sub) =>
          sub.models.map((model) => ({
            model,
            subtypeName: sub.name,
            subtypeSlug: sub.slug,
          })),
        )
      : [];
  const showListing = Boolean(categoryForSegment && listingModels.length > 0);
  const productsPageListHeroSrc = pageHeroSrcForProductsSegment(categoryForSegment?.key);

  const heroCrumbs: PageHeroCrumb[] = (() => {
    const items: PageHeroCrumb[] = [{ label: "Home", href: "/" }];
    if (!categoryForSegment) {
      items.push({ label: "Products", current: true });
      return items;
    }
    items.push({ label: "Products", href: "/products" });
    if (subtypeFilter) {
      items.push({
        label: categoryForSegment.label,
        href: productsSegmentHref(categoryForSegment.key),
      });
      if (selectedModel) {
        items.push({
          label: subtypeFilter.name,
          href: productsSubtypeHref(categoryForSegment.key, subtypeFilter.slug),
        });
        items.push({ label: selectedModel.model, current: true });
      } else {
        items.push({ label: subtypeFilter.name, current: true });
      }
    } else {
      items.push({ label: categoryForSegment.label, current: true });
    }
    return items;
  })();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-white text-[#0f172a] [color-scheme:light]">
        {selectedModel ? (
          <div className="border-b border-[#e6edf5] bg-white">
            <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-4 md:px-6">
              <nav className="line-clamp-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]" aria-label="Breadcrumb">
                {heroCrumbs.map((item, index) => (
                  <span key={`${item.label}-${index}`}>
                    {index > 0 ? (
                      <span className="mx-2 text-[#cbd5e1]" aria-hidden>
                        /
                      </span>
                    ) : null}
                    {item.href && !item.current ? (
                      <Link href={item.href} className="transition-colors hover:text-[#0b3c91]">
                        {item.label}
                      </Link>
                    ) : (
                      <span className={item.current ? "text-[#0b3c91]" : "text-[#334155]"}>{item.label}</span>
                    )}
                  </span>
                ))}
              </nav>
            </div>
          </div>
        ) : (
          <PageHero variant="brand" imageSrc={productsPageListHeroSrc} imageAlt="XCMG equipment">
            <PageHeroBreadcrumbs items={heroCrumbs} />
            <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Products</p>
            <h1 className={`mt-3 ${pageHeroTitleBrandClass}`}>
              {categoryForSegment ? categoryForSegment.label : "Equipment portfolio"}
            </h1>
            <p className={pageHeroLeadBrandClass}>
              {categoryForSegment
                ? "Filter by product type and open a model for specs — Nepal catalog only."
                : "Browse equipment categories available for Nepal projects, with local support and service readiness."}
            </p>
          </PageHero>
        )}

        {hasSelection && !selectedModel ? (
          <div className="border-b border-[var(--border-subtle)] bg-gradient-to-r from-[#f0f4fa] to-[#fafbfd]">
            <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-3 md:px-6">
              <p className="max-w-2xl text-sm leading-relaxed text-[#475569]">
                <span className="font-semibold text-[var(--brand-blue)]">Your selection:</span>{" "}
                <span className="capitalize text-[#0f172a]">{selectionParts[0]}</span>
                {selectionParts[1] ? (
                  <>
                    {" · "}
                    <span>{selectionParts[1]}</span>
                  </>
                ) : null}
                {selectionParts[2] ? (
                  <>
                    {" · "}
                    <span className="font-mono font-semibold text-[var(--brand-blue)]">{selectionParts[2]}</span>
                  </>
                ) : null}
              </p>
            </div>
          </div>
        ) : null}

        {selectedModel && selectedModelSpecs.length > 0 ? (
          <section className="border-b border-[var(--border-subtle)] bg-white">
            <div className="relative mx-auto w-[92vw] max-w-[1600px] px-4 pb-10 pt-8 text-left sm:pb-12 sm:pt-10 md:px-6 md:pb-14 md:pt-12">
              <div className="grid items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-0 xl:gap-x-12">
                <div className="order-1 min-w-0 max-w-none lg:order-1 lg:col-span-3 lg:max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                    {selectedMeta?.family ?? selectedModel.subtypeName}
                  </p>
                  <h2 className="mt-2 break-words font-mono text-[clamp(1.75rem,7vw,2.25rem)] font-extrabold leading-[1.05] tracking-tight text-[#0b2f6b] sm:text-4xl md:text-5xl lg:text-6xl">
                    {selectedModel.model}
                  </h2>
                  {selectedMeta?.drive ? (
                    <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
                      {selectedMeta.drive}
                    </p>
                  ) : null}
                  <dl className="mt-6 space-y-0 border-t border-[#e8ecf2] pt-5 sm:mt-8 sm:pt-6">
                    {selectedModelHighlights.map((row) => (
                      <div key={`highlight-${selectedModel.model}-${row.item}`} className="border-b border-[#f1f5f9] py-3 text-left last:border-b-0 sm:py-3.5">
                        <dt className="text-[12px] font-medium uppercase tracking-[0.06em] text-[#64748b] sm:text-[13px]">{row.item}</dt>
                        <dd className="mt-1 text-base font-semibold tabular-nums tracking-normal text-[#0f172a] sm:text-[17px]">
                          {row.parameter}
                          {row.unit ? <span className="ml-2 text-[15px] font-normal text-[#64748b]">{row.unit}</span> : null}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
                    <a
                      href={`mailto:${salesDeptEmail}`}
                      className="inline-flex min-h-[44px] w-full items-center justify-center rounded-sm border border-[#cbd5e1] bg-white px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#0b2f6b] transition-colors hover:bg-[#f8fafc] sm:w-auto"
                    >
                      Contact sales
                    </a>
                    <Link
                      href="/services/service-outlets"
                      className="inline-flex min-h-[44px] w-full items-center justify-center rounded-sm bg-[#0b3c91] px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#0a3376] sm:w-auto"
                    >
                      Service Outlets
                    </Link>
                  </div>
                </div>

                <div className="order-2 flex min-w-0 w-full items-start justify-center self-start lg:order-2 lg:col-span-6 lg:px-0">
                  {heroImageSrc ? (
                    <div className={`${catalogModelDetailImageShell} p-3 sm:p-4`}>
                      <Image
                        src={heroImageSrc}
                        alt={`XCMG ${selectedModel.model}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-contain object-center"
                        priority
                        unoptimized={heroImageBypassOpt}
                      />
                    </div>
                  ) : (
                    <p className="text-center text-sm text-[#94a3b8]">Product image unavailable.</p>
                  )}
                </div>

                <div className="order-3 min-w-0 text-left lg:order-3 lg:col-span-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                    Product description
                  </p>
                  <p className="mt-4 whitespace-pre-line border-t border-[#e8ecf2] pt-4 text-sm leading-relaxed text-[#475569] sm:mt-8 sm:pt-6 md:text-base">
                    {selectedMeta?.description ??
                      selectedMeta?.caseTitle ??
                      `${selectedModel.model} — catalog equipment configured for Nepal sites with local support from UHEEM.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0b3c91]">
              <div className="mx-auto flex w-[92vw] max-w-[1600px] flex-col gap-3 px-4 py-3.5 text-left text-white sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:gap-y-3 md:flex-nowrap md:px-6 md:py-3.5">
                <p className="font-mono text-[13px] font-semibold tracking-[0.02em]">{selectedModel.model}</p>
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-4 md:gap-8">
                  <a
                    href="#model-parameters"
                    className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white underline decoration-[var(--brand-yellow)] decoration-2 underline-offset-[5px]"
                  >
                    Parameters
                  </a>
                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2">
                    <a
                      href={`mailto:${salesDeptEmail}`}
                      className="inline-flex min-h-[44px] w-full items-center justify-center rounded-sm bg-[#f4bd22] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#0f172a] transition-colors hover:bg-[#f8ca4a] sm:min-h-[38px] sm:w-auto"
                    >
                      Contact sales
                    </a>
                    <Link
                      href="/services/service-outlets"
                      className="inline-flex min-h-[44px] w-full items-center justify-center rounded-sm border border-white/70 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10 sm:min-h-[38px] sm:w-auto"
                    >
                      Service Outlets
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div id="model-parameters" className="scroll-mt-28 bg-white">
              <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-10 text-left md:px-6 md:py-14">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                  Technical data
                </p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#0b2f6b] sm:text-3xl md:text-4xl">Parameters</h3>
                <div className="mt-8 border-t border-[#e8ecf2] pt-6">
                  <div className="w-full overflow-hidden rounded-lg border border-[#e6edf5] shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="min-w-[520px] w-full text-left text-xs sm:min-w-full sm:text-sm md:text-base">
                        <thead>
                          <tr className="bg-[#f4bd22] text-[#0f172a]">
                            <th className="px-4 py-3.5 font-semibold md:px-6">Item</th>
                            <th className="whitespace-nowrap px-4 py-3.5 font-semibold md:px-6">Unit</th>
                            <th className="px-4 py-3.5 font-semibold md:px-6">Parameter</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedModelSpecs.map((row, idx) => (
                            <tr
                              key={`${selectedModel.model}-${row.item}`}
                              className={`border-b border-[#edf2f7] ${idx % 2 === 0 ? "bg-[#f8fafc]" : "bg-white"} last:border-b-0`}
                            >
                              <td className="align-top px-4 py-3 text-[#0f172a] md:px-6 md:py-3.5">{row.item}</td>
                              <td className="align-top whitespace-nowrap px-4 py-3 text-[#475569] md:px-6 md:py-3.5">{row.unit}</td>
                              <td className="align-top px-4 py-3 font-semibold tabular-nums text-[#0f172a] md:px-6 md:py-3.5">
                                {row.parameter}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="mx-auto w-[92vw] max-w-[1600px] bg-gradient-to-b from-[#f8fafc] to-white px-4 py-10 md:px-6 md:py-14">
          {segment && !categoryForSegment ? (
            <div className="mb-8 rounded-lg border border-[var(--border-subtle)] bg-white p-5 shadow-sm">
              <p className="text-sm text-[#64748b]">No category matches that link.</p>
              <Link
                href="/products"
                className="mt-3 inline-block text-sm font-semibold text-[var(--brand-blue)] hover:text-[var(--brand-yellow)]"
              >
                Back to all products
              </Link>
            </div>
          ) : null}

          {showListing && !selectedModel ? (
            <div className="mb-10 rounded-xl border border-[#e2e8f0] bg-white p-4 shadow-sm md:p-6 lg:p-8">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-10">
                <aside className="shrink-0 lg:w-52 xl:w-56">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                    Product type
                  </p>
                  <ul className="mt-3 -mx-1 flex gap-1 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden">
                    <li className="shrink-0 lg:shrink">
                      <Link
                        href={productsSegmentHref(categoryForSegment!.key)}
                        className={`catalog-filter block whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-medium lg:rounded-lg lg:px-3 lg:py-2.5 ${
                          !subtypeRaw
                            ? "bg-[var(--brand-blue)] text-white lg:bg-[#eff6ff] lg:text-[var(--brand-blue)] lg:ring-1 lg:ring-[var(--brand-blue)]/20"
                            : "border border-[#e2e8f0] bg-white text-[#334155] hover:border-[#cbd5e1] lg:border-0 lg:bg-transparent lg:hover:bg-[#f8fafc]"
                        }`}
                      >
                        All types
                      </Link>
                    </li>
                    {categoryForSegment!.subtypes.map((sub) => {
                      const active = subtypeRaw === sub.slug;
                      return (
                        <li key={sub.slug} className="shrink-0 lg:shrink">
                          <Link
                            href={productsSubtypeHref(categoryForSegment!.key, sub.slug)}
                            className={`catalog-filter flex items-center justify-between gap-3 whitespace-nowrap rounded-full border px-3.5 py-2 text-[13px] font-medium lg:rounded-lg lg:px-3 lg:py-2.5 ${
                              active
                                ? "border-[var(--brand-blue)] bg-[var(--brand-blue)] text-white lg:border-0 lg:bg-[#eff6ff] lg:text-[var(--brand-blue)] lg:ring-1 lg:ring-[var(--brand-blue)]/20"
                                : "border-[#e2e8f0] bg-white text-[#334155] hover:border-[#cbd5e1] lg:border-0 lg:bg-transparent lg:hover:bg-[#f8fafc]"
                            }`}
                          >
                            <span className="min-w-0 truncate max-lg:max-w-[9rem] lg:max-w-none">{sub.name}</span>
                            <span
                              className={`tabular-nums text-[11px] ${active ? "text-white/90 lg:text-[var(--brand-blue)]/70" : "text-[#94a3b8]"}`}
                            >
                              {sub.models.length}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </aside>
                <div className="min-w-0 flex-1 border-t border-[#f1f5f9] pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                        Models
                      </p>
                      <p className="mt-1 text-sm text-[#64748b]">
                        {listingModels.length} item{listingModels.length === 1 ? "" : "s"}
                        {subtypeFilter ? ` · ${subtypeFilter.name}` : ""}
                      </p>
                    </div>
                  </div>
                  <div
                    key={`${categoryForSegment!.key}-${subtypeRaw || "all"}`}
                    className="catalog-grid-enter mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3"
                  >
                    {listingModels.map(({ model, subtypeName, subtypeSlug }) => {
                      const img = equipmentImageForModel(model, subtypeSlug);
                      const bypassOpt = img ? equipmentImageShouldBypassOptimization(img) : false;
                      return (
                        <Link
                          key={`${categoryForSegment!.key}-${subtypeSlug}-${model}`}
                          href={productHref(categoryForSegment!.key, subtypeSlug, model)}
                          className="catalog-model-card group flex min-w-0 flex-col overflow-hidden rounded-lg border border-[#e2e8f0] bg-white shadow-sm"
                        >
                          <div className={`catalog-model-media ${catalogListingThumbShell}`}>
                            {img ? (
                              <Image
                                src={img}
                                alt={model}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                unoptimized={bypassOpt}
                                className="catalog-model-img object-contain object-center"
                              />
                            ) : (
                              <span className="text-center font-mono text-sm font-bold tracking-tight text-[#cbd5e1] sm:text-base">
                                {model}
                              </span>
                            )}
                          </div>
                          <div className="border-t border-[#e2e8f0] bg-white px-4 py-3.5">
                            <p className="catalog-model-title font-mono text-[14px] font-semibold text-[var(--brand-blue)]">
                              {model}
                            </p>
                            <p className="mt-0.5 text-[12px] text-[#64748b]">{subtypeName}</p>
                            <p className="catalog-model-cta mt-2 text-[11px] text-[#94a3b8]">Contact for Nepal pricing</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {modelQuery ? (
            <div className="mb-8 rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                Search results
              </p>
              {modelMatches.length > 0 ? (
                <>
                  <p className="mt-2 text-sm text-[#475569]">
                    {modelMatches.length} match{modelMatches.length === 1 ? "" : "es"} for{" "}
                    <span className="font-mono font-semibold text-[var(--brand-blue)]">{modelRaw}</span>
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {modelMatches.map((match) => (
                      <Link
                        key={`${match.segmentKey}-${match.subtypeSlug}-${match.model}`}
                        href={productHref(match.segmentKey, match.subtypeSlug, match.model)}
                        className="catalog-model-card interactive-card rounded-lg border border-[#e2e8f0] bg-white p-4 shadow-sm"
                      >
                        <p className="font-mono text-[13px] font-semibold text-[var(--brand-blue)]">{match.model}</p>
                        <p className="mt-1 text-xs text-[#64748b]">{match.subtypeName}</p>
                        <p className="mt-1 text-xs text-[#94a3b8]">{match.segmentLabel}</p>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <p className="mt-2 text-sm text-[#64748b]">
                  No models found for <span className="font-mono font-semibold">{modelRaw}</span>.
                </p>
              )}
            </div>
          ) : null}

          {!showListing && !modelQuery ? (
            <div>
              <div className="mb-8 max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">
                  Browse by category
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                  Open a segment to see model lines, specs, and Nepal-ready configurations supported by UHEEM.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayEquipmentCatalog.map((cat) => {
                  const n = cat.subtypes.reduce((acc, s) => acc + s.models.length, 0);
                  const imgSrc = portfolioImageForCategory(cat.key);
                  return (
                    <Link
                      key={cat.key}
                      href={productsSegmentHref(cat.key)}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white shadow-[0_2px_20px_-10px_rgb(15_23_42_/_0.12)] ring-1 ring-black/[0.03] transition-all duration-300 interactive-card hover:border-[var(--brand-blue)]/18 hover:shadow-[0_24px_48px_-28px_rgb(11_60_145_/_0.22)]"
                    >
                      <div className="relative aspect-[16/9] min-h-[200px] w-full overflow-hidden bg-[#e8edf3] sm:min-h-[220px]">
                        <Image
                          src={imgSrc}
                          alt=""
                          fill
                          className="object-cover object-center transition duration-500 ease-out group-hover:scale-[1.04]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36vw"
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b3c91]/55 via-[#0b3c91]/10 to-transparent"
                          aria-hidden
                        />
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                          <span className="inline-flex rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue)] shadow-sm ring-1 ring-black/[0.04]">
                            {n} model{n === 1 ? "" : "s"}
                          </span>
                          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-white/95 drop-shadow-sm">
                            {cat.subtypes.length} type{cat.subtypes.length === 1 ? "" : "s"}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <span
                          className="h-0.5 w-10 rounded-full bg-gradient-to-r from-[var(--brand-yellow)] to-[#f0d24a] transition-all duration-300 group-hover:w-14"
                          aria-hidden
                        />
                        <h2 className="mt-3 text-base font-semibold leading-snug tracking-tight text-[var(--brand-blue)] transition-colors group-hover:text-[#0a3376]">
                          {cat.label}
                        </h2>
                        <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-[#64748b]">{cat.blurb}</p>
                        <p className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue-muted)] transition-colors group-hover:text-[var(--brand-blue)]">
                          Open listing
                          <span className="text-[var(--brand-yellow)] transition-transform group-hover:translate-x-0.5" aria-hidden>
                            →
                          </span>
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : null}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

