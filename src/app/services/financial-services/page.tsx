import Link from "next/link";
import SiteHeader from "../../_components/SiteHeader";
import SiteFooter from "../../_components/SiteFooter";
import {
  PageHero,
  PageHeroBreadcrumbs,
  pageHeroActionsClass,
  pageHeroEyebrowBrandClass,
  pageHeroLeadBrandClass,
  pageHeroTitleBrandClass,
} from "../../_components/PageHero";
import { pageHeroSrc } from "../../_data/pageHeroBanners";

export default function FinancialServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#f4f6f9] text-[#0f172a] [color-scheme:light]">
        <PageHero variant="brand" imageSrc={pageHeroSrc.services} imageAlt="XCMG Nepal financing support">
          <PageHeroBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Financial Services", current: true },
            ]}
          />
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Services</p>
          <h1 className={`mt-3 ${pageHeroTitleBrandClass}`}>Financial Services</h1>
          <p className={pageHeroLeadBrandClass}>
            Structured support for equipment acquisition and lifecycle planning aligned to project requirements.
          </p>
          <div className={pageHeroActionsClass}>
            <Link href="/contact#contact-form" className="inner-cta-primary">
              Request consultation
            </Link>
            <Link href="/products" className="inner-cta-ghost">
              View products
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-subtle)] bg-white">
          <div className="mx-auto w-[92vw] max-w-[1000px] px-4 py-12 md:px-6 md:py-16">
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-[var(--border-subtle)] p-6">
                <h2 className="text-lg font-semibold text-[var(--brand-blue)]">Procurement planning</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Support for selecting machine configurations and acquisition pathways that match project scale, deployment
                  timeline, and budget constraints.
                </p>
              </article>
              <article className="rounded-lg border border-[var(--border-subtle)] p-6">
                <h2 className="text-lg font-semibold text-[var(--brand-blue)]">Lifecycle value focus</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                  Financial guidance is aligned with uptime, maintenance planning, and long-term ownership value for Nepal
                  operations.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
