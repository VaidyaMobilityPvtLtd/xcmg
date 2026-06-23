import Link from "next/link";
import SiteHeader from "../../_components/SiteHeader";
import SiteFooter from "../../_components/SiteFooter";
import SatisfactionSurveyForm from "../../_components/SatisfactionSurveyForm";
import {
  PageHero,
  PageHeroBreadcrumbs,
  pageHeroActionsClass,
  pageHeroEyebrowBrandClass,
  pageHeroLeadBrandClass,
  pageHeroTitleBrandClass,
} from "../../_components/PageHero";
import { pageHeroSrc } from "../../_data/pageHeroBanners";
import { serviceHubCards } from "../../_data/serviceHubCards";
import { siteShellClass } from "../../_data/siteShell";

const surveyStats = [
  { value: "2 min", label: "Typical time", detail: "Short structured feedback" },
  { value: "Direct", label: "Service team", detail: "Routed to UHEEM Services" },
  { value: "Nepal", label: "Field focused", detail: "Improves local support standards" },
] as const;

const surveyFocusAreas = [
  {
    title: "After-sales service",
    detail: "Workshop response, technician quality, repair turnaround, and jobsite support.",
  },
  {
    title: "Parts availability",
    detail: "Genuine XCMG parts supply, stock readiness, and delivery across Nepal.",
  },
  {
    title: "Sales & handover",
    detail: "Equipment guidance, delivery coordination, and operator handover experience.",
  },
] as const;

const surveySteps = [
  {
    step: "01",
    title: "Share your details",
    detail: "Tell us which equipment and UHEEM team supported your project.",
  },
  {
    step: "02",
    title: "Rate the experience",
    detail: "Score overall satisfaction and note what worked well or needs attention.",
  },
  {
    step: "03",
    title: "We review & improve",
    detail: "Feedback is reviewed to strengthen service standards nationwide.",
  },
] as const;

const relatedServicePages = serviceHubCards.filter((card) => card.href !== "/services/satisfaction-survey");

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
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Customer feedback</p>
          <h1 className={`mt-3 ${pageHeroTitleBrandClass}`}>Customer Satisfaction Survey</h1>
          <p className={pageHeroLeadBrandClass}>
            Help UHEEM improve product support, after-sales service, and the overall customer experience across Nepal.
          </p>
          <div className={pageHeroActionsClass}>
            <a href="#survey-form" className="inner-cta-primary">
              Start survey
            </a>
            <Link href="/services" className="inner-cta-ghost">
              All services
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-subtle)] bg-[#f8fafc]">
          <div className={`${siteShellClass} py-10 md:py-12`}>
            <ul className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 min-[480px]:gap-4" role="list">
              {surveyStats.map((stat) => (
                <li
                  key={stat.label}
                  className="stat-card rounded-xl border border-[var(--border-subtle)] bg-white px-5 py-5 shadow-sm"
                >
                  <p className="text-xl font-bold tracking-tight text-[var(--brand-blue)] sm:text-2xl md:text-[1.75rem]">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold leading-snug text-[#0f172a]">{stat.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#64748b]">{stat.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-white" aria-labelledby="survey-overview-heading">
          <div className={`${siteShellClass} grid gap-10 py-12 md:gap-12 md:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-20`}>
            <div className="min-w-0 lg:order-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                Why it matters
              </p>
              <div className="mt-3 border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6">
                <h2
                  id="survey-overview-heading"
                  className="text-2xl font-bold tracking-tight text-[var(--brand-blue)] md:text-3xl"
                >
                  Your feedback shapes our service
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#64748b] md:text-[15px] md:leading-[1.75]">
                  UHEEM invites customers to share honest feedback on equipment support, workshop service, and parts
                  supply. Your input helps us respond faster, train teams better, and deliver practical solutions for
                  Nepal&apos;s construction and infrastructure projects.
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {surveyFocusAreas.map((area) => (
                  <li
                    key={area.title}
                    className="rounded-xl border border-[var(--border-subtle)] bg-[#fafbfd] px-5 py-4 shadow-sm"
                  >
                    <h3 className="text-base font-bold tracking-tight text-[var(--brand-blue)]">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{area.detail}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                  How it works
                </p>
                <ol className="mt-4 space-y-4">
                  {surveySteps.map((item) => (
                    <li key={item.step} className="flex gap-4 rounded-xl border border-[var(--border-subtle)] bg-white p-4">
                      <span className="font-mono text-lg font-bold tabular-nums text-[var(--brand-yellow)]">
                        {item.step}
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-[#0f172a]">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-[#64748b]">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="min-w-0 lg:order-2">
              <SatisfactionSurveyForm />
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-[#f8fafc]" aria-labelledby="related-services-heading">
          <div className={`${siteShellClass} py-12 md:py-16`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
              More from services
            </p>
            <h2 id="related-services-heading" className="mt-2 text-2xl font-bold tracking-tight text-[var(--brand-blue)] md:text-3xl">
              Related service pages
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServicePages.map((card) => (
                <li key={card.href}>
                  <Link
                    href={card.href}
                    className="interactive-card group flex h-full flex-col rounded-xl border border-[var(--border-subtle)] bg-white p-5 shadow-sm transition-colors hover:border-[var(--brand-blue)]/25"
                  >
                    <span className="text-lg font-bold tracking-tight text-[var(--brand-blue)] group-hover:text-[#0a3376]">
                      {card.title}
                    </span>
                    <span className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">{card.description}</span>
                    <span className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-yellow)]">
                      Open page →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--brand-blue)] py-14 text-white md:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--brand-yellow)]/10 blur-3xl"
            aria-hidden
          />
          <div className={`relative flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between md:gap-10 ${siteShellClass} py-0`}>
            <div className="max-w-xl space-y-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-yellow)]">
                Need direct help?
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Prefer to speak with our service team?
              </h2>
              <p className="text-sm leading-relaxed text-white/82 md:text-[15px]">
                Visit a service outlet, call UHEEM, or use the contact form for urgent support and parts enquiries.
              </p>
            </div>
            <div className="cta-action-row shrink-0">
              <Link href="/services/service-outlets" className="inner-cta-primary shadow-lg shadow-black/20 hover:shadow-xl">
                Service outlets
              </Link>
              <Link
                href="/contact#contact-form"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/35 bg-white/10 px-6 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-[transform,background-color] duration-200 hover:bg-white/20 active:translate-y-px"
              >
                Contact UHEEM
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
