import Link from "next/link";
import { Suspense } from "react";
import { HeaderLinkClickClose, HeaderRouteSyncClose } from "./HeaderMegaClose";
import MobileNavDrawer from "./MobileNavDrawer";
import {
  displayEquipmentCatalog,
  productHref,
  productsSegmentHref,
  productsSubtypeHref,
} from "../_data/displayEquipment";

function Caret({ className }: { className?: string }) {
  return (
    <span className={`text-current transition-transform ${className ?? ""}`}>
      <svg
        width="10"
        height="10"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M2.5 4.5L6 8L9.5 4.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function SiteHeader() {
  const totalProducts = displayEquipmentCatalog.reduce(
    (sum, c) => sum + c.subtypes.reduce((s, sub) => s + sub.models.length, 0),
    0,
  );

  return (
    <header className="sticky top-0 z-30 transform-gpu border-b border-[var(--border-subtle)] bg-white shadow-[inset_0_-2px_0_0_var(--brand-yellow)]">
      <Suspense fallback={null}>
        <HeaderRouteSyncClose />
      </Suspense>
      <div className="mx-auto flex w-[92vw] max-w-[1600px] items-center justify-between gap-2 px-4 py-3 md:gap-3 md:px-6">
        <MobileNavDrawer />

        <Link
          href="/"
          aria-label="XCMG Nepal home"
          className="inline-flex h-9 min-w-0 shrink items-center bg-white [color-scheme:light] md:h-10 lg:h-11"
        >
          <img
            src="/xcmg-logo.png"
            alt="XCMG"
            width={1024}
            height={224}
            decoding="async"
            fetchPriority="high"
            className="block max-h-full w-auto max-w-[min(140px,38vw)] bg-white sm:max-w-[min(180px,50vw)]"
            style={{ backgroundColor: "#ffffff" }}
          />
        </Link>

        <HeaderLinkClickClose>
          <>
        <nav className="hidden items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.04em] text-[var(--brand-blue)] xl:gap-6 xl:text-[13px] 2xl:text-[14px] 3xl:text-[15px] lg:flex">
          <details name="site-header-mega" className="relative group">
            <summary className="inline-flex cursor-pointer items-center gap-1 list-none rounded px-1.5 py-1 transition-colors hover:text-[var(--brand-yellow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b3c91]/30">
              PRODUCTS <Caret className="group-open:rotate-180" />
            </summary>
            <div className="absolute left-0 top-full z-50 mt-2 w-[min(880px,calc(100vw-1.5rem))] rounded-xl border border-[#e2e8f0] bg-white shadow-[0_12px_40px_-12px_rgba(15,23,42,0.25)]">
              <div className="flex items-start justify-between gap-4 border-b border-[#e2e8f0] bg-gradient-to-br from-[#f8fafc] to-white px-4 py-3.5 sm:px-5">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue-muted)]">
                    Products
                  </p>
                  <p className="mt-0.5 text-[15px] font-semibold leading-tight text-[var(--brand-blue)] sm:text-base">
                    Nepal catalogue
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-[#64748b]">
                    <span className="font-medium text-[#475569]">{totalProducts}</span> products · pick a category or product code
                  </p>
                </div>
                <Link
                  href="/products"
                  className="shrink-0 rounded-md bg-[var(--brand-blue)] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white shadow-sm transition-colors hover:bg-[#0a3376]"
                >
                  View all
                </Link>
              </div>
              <div
                className="max-h-[min(58vh,480px)] overflow-y-auto overscroll-contain px-4 py-4 sm:px-5 sm:py-4"
                data-lenis-prevent
              >
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
                  {displayEquipmentCatalog.map((category) => {
                    const categoryProductCount = category.subtypes.reduce((n, s) => n + s.models.length, 0);
                    const previewModels = category.subtypes.flatMap((s) =>
                      s.models.slice(0, 2).map((model) => ({ model, subtypeSlug: s.slug })),
                    ).slice(0, 4);
                    return (
                      <div
                        key={category.key}
                        className="group/card relative overflow-hidden rounded-lg border border-[#e2e8f0] bg-[#fafbfc] p-3.5 transition-shadow hover:border-[#cbd5e1] hover:shadow-sm"
                      >
                        <div
                          className="absolute left-0 top-0 h-full w-0.5 bg-[var(--brand-yellow)] opacity-0 transition-opacity group-hover/card:opacity-100"
                          aria-hidden
                        />
                        <Link
                          href={productsSegmentHref(category.key)}
                          className="block text-[14px] font-semibold leading-snug text-[var(--brand-blue)] transition-colors hover:text-[#0a3376] sm:text-[15px]"
                        >
                          {category.label}
                        </Link>
                        <p className="mt-0.5 text-[11px] text-[#64748b]">
                          {categoryProductCount} product{categoryProductCount === 1 ? "" : "s"}
                        </p>
                        <p className="mt-2.5 text-[9px] font-semibold uppercase tracking-[0.1em] text-[#94a3b8]">
                          Product type
                        </p>
                        <ul className="mt-1.5 space-y-0.5 text-[13px] text-[#334155]">
                          {category.subtypes.map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                href={productsSubtypeHref(category.key, sub.slug)}
                                className="flex items-center justify-between gap-2 rounded-md py-1 pl-0 pr-0.5 transition-colors hover:text-[var(--brand-blue)]"
                              >
                                <span className="min-w-0 truncate">{sub.name}</span>
                                <span className="shrink-0 tabular-nums text-[11px] text-[#94a3b8]">{sub.models.length}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {previewModels.length > 0 ? (
                          <div className="mt-2.5 flex flex-wrap gap-1.5 border-t border-[#e2e8f0] pt-2.5">
                            <span className="w-full text-[9px] font-semibold uppercase tracking-[0.08em] text-[#94a3b8]">
                              Quick open
                            </span>
                            {previewModels.map(({ model, subtypeSlug }) => (
                              <Link
                                key={`${category.key}-${subtypeSlug}-${model}`}
                                href={productHref(category.key, subtypeSlug, model)}
                                className="rounded border border-[#e2e8f0] bg-white px-2 py-0.5 font-mono text-[10px] font-semibold text-[var(--brand-blue)] transition-colors hover:border-[var(--brand-yellow)] hover:text-[#0a3376]"
                              >
                                {model}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </details>

         
          <Link href="/DownloadBrochure" className="rounded px-1.5 py-1 transition-colors hover:text-[var(--brand-yellow)]">
           DOWNLOAD BROCHURE
          </Link>

          <Link href="/services" className="rounded px-1.5 py-1 transition-colors hover:text-[var(--brand-yellow)]">
            SERVICES
          </Link>

          <Link href="/contact#contact-form" className="rounded px-1.5 py-1 transition-colors hover:text-[var(--brand-yellow)]">
            CONTACT
          </Link>

          <Link href="/news" className="rounded px-1.5 py-1 transition-colors hover:text-[var(--brand-yellow)]">
            NEWS
          </Link>
          <Link href="/AboutUs" className="rounded px-1.5 py-1 transition-colors hover:text-[var(--brand-yellow)]">
            ABOUT US
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-1 md:gap-1.5 lg:gap-2">
          <details name="site-header-mega" className="relative hidden lg:block">
            <summary
              aria-label="Search products"
              className="inline-flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-none border border-[#e5e7eb] bg-white text-[#0b3c91] transition-colors hover:text-[var(--brand-yellow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b3c91]/30"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M16.5 16.5L21 21"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </summary>
            <div className="absolute right-0 top-full z-50 mt-3 w-[min(320px,calc(100vw-2rem))] rounded-lg border border-[#e5e7eb] bg-white p-4 shadow-lg">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-blue-muted)]">
                Quick Search
              </p>
              <form action="/products" method="get" className="mt-3">
                <label htmlFor="header-model-search" className="sr-only">
                  Search product
                </label>
                <div className="flex items-stretch gap-2">
                  <input
                    id="header-model-search"
                    name="model"
                    type="text"
                    placeholder="Search product e.g. XC936"
                    className="h-10 min-w-0 flex-1 border border-[var(--border-subtle)] px-3 text-sm text-[#0f172a] outline-none focus:border-[var(--brand-blue)]"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 items-center justify-center bg-[var(--brand-blue)] px-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#0a3376]"
                  >
                    Search
                  </button>
                </div>
                <p className="mt-2 text-[11px] text-[#64748b]">Try: Lw200kv, XC936, XE215I_K</p>
              </form>
            </div>
          </details>

          <span className="hidden min-[520px]:inline-flex h-9 shrink-0 items-center justify-end bg-white [color-scheme:light] sm:h-9 md:h-10 lg:h-11">
            <img
              src="/top-logo.png"
              alt="United Heavy Equipment & Earth Movers"
              width={1024}
              height={224}
              decoding="async"
              className="block max-h-full w-auto max-w-[min(120px,28vw)] bg-white object-contain object-right min-[480px]:max-w-[min(180px,36vw)] sm:max-w-[min(240px,42vw)] md:max-w-[min(460px,58vw)] lg:max-w-[min(540px,52vw)] xl:max-w-[min(600px,48vw)]"
              style={{ backgroundColor: "#ffffff" }}
            />
          </span>
        </div>
          </>
        </HeaderLinkClickClose>
      </div>
    </header>
  );
}

