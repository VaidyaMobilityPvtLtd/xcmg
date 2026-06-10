import Link from "next/link";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import { ServicesActionHub } from "../_components/ServicesActionHub";
import { ServicesGallery } from "../_components/ServicesGallery";
import { ServicesMarketingFromDoc } from "../_components/ServicesMarketingFromDoc";
import {
  PageHero,
  PageHeroBreadcrumbs,
  pageHeroActionsClass,
  pageHeroEyebrowBrandClass,
  pageHeroTitleBrandClass,
} from "../_components/PageHero";
import { pageHeroSrc } from "../_data/pageHeroBanners";
import { serviceMarketingTagline, serviceMarketingTitle } from "../_data/servicesContent";
import { siteShellClass } from "../_data/siteShell";

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="justify-copy min-h-screen bg-[#f4f6f9] text-[#0f172a] [color-scheme:light]">
        <PageHero
          variant="brand"
          imageSrc={pageHeroSrc.services}
          imageAlt="XCMG Nepal services"
          contentAlign="center"
          contentMaxWidthClass="max-w-none"
        >
          <PageHeroBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", current: true },
            ]}
          />
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Services</p>
          <h1 className={`mt-2 max-w-[56rem] text-balance ${pageHeroTitleBrandClass}`}>
            {serviceMarketingTitle}
          </h1>
          <p className="mt-4 max-w-[56rem] text-pretty text-base font-medium leading-snug text-white/95 sm:text-lg md:text-xl lg:text-2xl">
            {serviceMarketingTagline}
          </p>
          <div className={pageHeroActionsClass}>
            <Link href="#services-overview" className="inner-cta-primary">
              Read overview
            </Link>
            <Link href="#service-options" className="inner-cta-ghost">
              Service pages
            </Link>
            <Link href="/contact#contact-form" className="inner-cta-ghost">
              Contact UHEEM
            </Link>
          </div>
        </PageHero>

        <ServicesMarketingFromDoc />
        <ServicesGallery />
        <ServicesActionHub />

        <section className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--brand-blue)] py-14 text-white md:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--brand-yellow)]/10 blur-3xl"
            aria-hidden
          />
          <div className={`relative flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12 ${siteShellClass} py-0`}>
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Equipment</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Need a specific model?</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-[15px]">
                Browse the Nepal catalogue for products, specifications, and distributor contact paths.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <Link href="/products" className="inner-cta-primary shadow-lg shadow-black/20 hover:shadow-xl">
                Explore products
              </Link>
              <Link
                href="/AboutUs"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/35 bg-white/10 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-[transform,background-color] duration-200 hover:bg-white/20 active:translate-y-px"
              >
                Company profile
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
