"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import {
  displayEquipmentCatalog,
  productsSegmentHref,
  productsSubtypeHref,
} from "../_data/displayEquipment";

export default function MobileNavDrawer() {
  const pathname = usePathname();
  return <MobileNavDrawerInner key={pathname} />;
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 7h14M5 12h14M5 17h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className={className} aria-hidden>
      <path d="M10 8l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const summaryBtn =
  "flex min-h-12 w-full cursor-pointer list-none items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-[14px] font-semibold tracking-wide text-[var(--brand-blue)] transition-colors active:bg-[#f1f5f9] [&::-webkit-details-marker]:hidden";

const subLink =
  "flex min-h-11 items-center rounded-lg px-3 py-2.5 text-[13px] font-medium leading-snug text-[#334155] transition-colors hover:bg-[#f1f5f9] hover:text-[var(--brand-blue)] active:bg-[#e2e8f0]";

function MobileNavDrawerInner() {
  const [open, setOpen] = useState(false);
  const searchId = useId();
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const totalProducts = displayEquipmentCatalog.reduce(
    (sum, c) => sum + c.subtypes.reduce((s, sub) => s + sub.models.length, 0),
    0,
  );

  const drawer = open ? (
      <div
        className="fixed inset-0 z-[200] flex justify-start lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <button
          type="button"
          aria-label="Close menu"
          className="mobile-nav-drawer-backdrop absolute inset-0 z-0 bg-[#0f172a]/55"
          onClick={close}
        />
        <div
          className="mobile-nav-drawer-panel relative z-10 flex h-[100dvh] max-h-[100dvh] min-h-0 w-[min(88vw,21rem)] flex-col rounded-r-2xl border border-[#e2e8f0] bg-white shadow-[0_25px_50px_-12px_rgba(15,23,42,0.35)] pt-[max(0.75rem,env(safe-area-inset-top))] pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#e8ecf1] px-4 pb-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-blue-muted)]">Navigate</p>
              <p className="mt-0.5 text-[15px] font-semibold text-[#0f172a]">XCMG Nepal</p>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#0f172a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]/35"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-2 scroll-smooth"
            aria-label="Primary"
            data-lenis-prevent
          >
            <ul className="space-y-1">
              <li>
                <details className="group rounded-xl border border-transparent bg-[#fafbfc] open:border-[#e2e8f0] open:bg-white open:shadow-sm">
                  <summary className={summaryBtn}>
                    <span>Products</span>
                    <ChevronRight className="shrink-0 text-[#94a3b8] transition-transform duration-200 group-open:rotate-90 motion-reduce:transition-none" />
                  </summary>
                  <div className="border-t border-[#f1f5f9] px-2 pb-3 pt-1">
                    <Link
                      href="/products"
                      onClick={close}
                      className={`${subLink} font-semibold text-[var(--brand-blue)]`}
                    >
                      All products
                      <span className="ml-auto tabular-nums text-[12px] font-normal text-[#94a3b8]">{totalProducts}</span>
                    </Link>
                    {displayEquipmentCatalog.map((cat) => (
                      <details key={cat.key} className="group/cat mt-1 overflow-hidden rounded-lg border border-[#eef2f6] bg-white">
                        <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-2 px-3 py-2 text-[13px] font-semibold text-[#0f172a] active:bg-[#f8fafc] [&::-webkit-details-marker]:hidden">
                          <span className="min-w-0 truncate">{cat.label}</span>
                          <ChevronRight className="shrink-0 text-[#cbd5e1] transition-transform duration-200 group-open/cat:rotate-90 motion-reduce:transition-none" />
                        </summary>
                        <ul className="border-t border-[#f1f5f9] py-1">
                          <li>
                            <Link
                              href={productsSegmentHref(cat.key)}
                              onClick={close}
                              className={`${subLink} text-[var(--brand-blue)]`}
                            >
                              View category
                            </Link>
                          </li>
                          {cat.subtypes.map((sub) => (
                            <li key={sub.slug}>
                              <Link
                                href={productsSubtypeHref(cat.key, sub.slug)}
                                onClick={close}
                                className={`${subLink} justify-between gap-2`}
                              >
                                <span className="min-w-0 truncate">{sub.name}</span>
                                <span className="shrink-0 tabular-nums text-[12px] text-[#94a3b8]">{sub.models.length}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                </details>
              </li>
              <li>
                <Link href="/services" onClick={close} className={`${subLink} min-h-12 font-semibold text-[var(--brand-blue)]`}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact#contact-form" onClick={close} className={`${subLink} min-h-12 font-semibold text-[var(--brand-blue)]`}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/DownloadBrochure"
                  onClick={close}
                  className={`${subLink} min-h-12 font-semibold text-[var(--brand-blue)]`}
                >
                  Brochure
                </Link>
              </li>
              <li>
                <Link href="/news" onClick={close} className={`${subLink} min-h-12 font-semibold text-[var(--brand-blue)]`}>
                  News
                </Link>
              </li>
              <li>
                <Link href="/AboutUs" onClick={close} className={`${subLink} min-h-12 font-semibold text-[var(--brand-blue)]`}>
                  About us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="shrink-0 border-t border-[#e8ecf1] bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">Search product</p>
            <form action="/products" method="get" className="mt-2 flex gap-2" onSubmit={close}>
              <label htmlFor={searchId} className="sr-only">
                Search product
              </label>
              <input
                id={searchId}
                name="model"
                type="search"
                enterKeyHint="search"
                placeholder="e.g. XC936"
                className="h-11 min-w-0 flex-1 rounded-xl border border-[#e2e8f0] bg-white px-3.5 text-[15px] text-[#0f172a] shadow-sm outline-none placeholder:text-[#94a3b8] focus:border-[var(--brand-blue)] focus:ring-2 focus:ring-[var(--brand-blue)]/20"
              />
              <button
                type="submit"
                className="h-11 shrink-0 rounded-xl bg-[var(--brand-blue)] px-4 text-[11px] font-bold uppercase tracking-[0.1em] text-white shadow-sm transition-colors hover:bg-[#0a3376] active:scale-[0.98] motion-reduce:active:scale-100"
              >
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
    ) : null;

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#0b3c91] shadow-sm transition-transform active:scale-95 motion-reduce:active:scale-100 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]/40 focus-visible:ring-offset-2"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <HamburgerIcon />
        )}
      </button>

      {drawer && typeof document !== "undefined" ? createPortal(drawer, document.body) : null}
    </>
  );
}
