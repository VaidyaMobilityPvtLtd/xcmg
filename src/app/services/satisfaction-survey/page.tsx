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

export default function SatisfactionSurveyPage() {
  return (
    <>
      <SiteHeader />
      <main className="justify-copy min-h-screen bg-[#f4f6f9] text-[#0f172a] [color-scheme:light]">
        <PageHero variant="brand" imageSrc={pageHeroSrc.services} imageAlt="XCMG Nepal customer feedback">
          <PageHeroBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Satisfaction Survey", current: true },
            ]}
          />
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Services</p>
          <h1 className={`mt-3 ${pageHeroTitleBrandClass}`}>Customer Satisfaction Survey</h1>
          <p className={pageHeroLeadBrandClass}>
            Your feedback helps improve product performance, after-sales service, and customer experience in Nepal.
          </p>
          <div className={pageHeroActionsClass}>
            <a
              href="mailto:info@uheem.com.np?subject=Customer%20Satisfaction%20Survey"
              className="inner-cta-primary"
            >
              Send feedback
            </a>
            <Link href="/services" className="inner-cta-ghost">
              All services
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-subtle)] bg-white">
          <div className="mx-auto w-[92vw] max-w-[900px] px-4 py-12 md:px-6 md:py-16">
            <div className="rounded-lg border border-[var(--border-subtle)] p-6 md:p-8">
              <h2 className="text-xl font-bold tracking-tight text-[var(--brand-blue)]">Why your survey matters</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#475569]">
                We kindly invite you to participate in the UHEEM Customer Satisfaction Survey. Your input helps us improve
                equipment support quality, service response standards, and long-term customer value.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                This survey reflects our commitment to deliver better, more practical solutions based on real project needs in
                Nepal.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
