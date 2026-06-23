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
import { serviceHubCards } from "../../_data/serviceHubCards";
import { siteContacts } from "../../_data/siteContacts";
import { siteShellClass } from "../../_data/siteShell";

const salesDept = siteContacts.departments[0];
const salesPhone = siteContacts.phones.equipmentInquiries;

const financeStats = [
  { value: "One partner", label: "Equipment & support", detail: "Machines, service, and commercial guidance together" },
  { value: "Sales-led", label: "Consultation", detail: "Structured discussions aligned to your project" },
  { value: "Nepal", label: "Project focused", detail: "Plans built for local site and budget realities" },
] as const;

const financePillars = [
  {
    title: "Procurement planning",
    detail:
      "Support for selecting machine configurations and acquisition pathways that match project scale, deployment timeline, and budget constraints.",
  },
  {
    title: "Lifecycle value focus",
    detail:
      "Commercial guidance aligned with uptime, maintenance planning, and long-term ownership value for Nepal operations.",
  },
  {
    title: "Fleet & project scaling",
    detail:
      "Advice when expanding equipment lines across roads, hydropower, mining, or urban infrastructure — with service readiness in view.",
  },
] as const;

const financeSteps = [
  {
    step: "01",
    title: "Share project scope",
    detail: "Tell us about your timeline, equipment needs, and deployment location across Nepal.",
  },
  {
    step: "02",
    title: "Review catalogue options",
    detail: "We align XCMG models and configurations with the work you need to perform on site.",
  },
  {
    step: "03",
    title: "Discuss commercial approach",
    detail: "UHEEM Sales walks through acquisition options and next steps based on your project plan.",
  },
  {
    step: "04",
    title: "Delivery & after-sales",
    detail: "Handover, parts, and service support continue through UHEEM after equipment is deployed.",
  },
] as const;

const consultationChecklist = [
  "Project type and expected timeline",
  "Equipment category or model shortlist",
  "Approximate fleet size or unit count",
  "Site location and operating conditions",
] as const;

const relatedServicePages = serviceHubCards.filter((card) => card.href !== "/services/financial-services");

export default function FinancialServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="justify-copy min-h-screen bg-[#f4f6f9] text-[#0f172a] [color-scheme:light]">
        <PageHero variant="brand" imageSrc={pageHeroSrc.services} imageAlt="XCMG Nepal financing support">
          <PageHeroBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Financial Services", current: true },
            ]}
          />
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Equipment finance</p>
          <h1 className={`mt-3 ${pageHeroTitleBrandClass}`}>Financial Services</h1>
          <p className={pageHeroLeadBrandClass}>
            Structured support for equipment acquisition and lifecycle planning — aligned to how infrastructure and
            construction projects run in Nepal.
          </p>
          <div className={pageHeroActionsClass}>
            <Link href="#finance-consultation" className="inner-cta-primary">
              Request consultation
            </Link>
            <Link href="/products" className="inner-cta-ghost">
              View products
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-subtle)] bg-[#f8fafc]">
          <div className={`${siteShellClass} py-10 md:py-12`}>
            <ul className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 min-[480px]:gap-4" role="list">
              {financeStats.map((stat) => (
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

        <section className="border-b border-[var(--border-subtle)] bg-white" aria-labelledby="finance-overview-heading">
          <div className={`${siteShellClass} grid gap-10 py-12 md:gap-12 md:py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 lg:py-20`}>
            <div className="min-w-0 lg:order-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                Commercial support
              </p>
              <div className="mt-3 border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6">
                <h2
                  id="finance-overview-heading"
                  className="text-2xl font-bold tracking-tight text-[var(--brand-blue)] md:text-3xl"
                >
                  Plan equipment with confidence
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#64748b] md:text-[15px] md:leading-[1.75]">
                  UHEEM helps contractors, developers, and infrastructure teams think through equipment decisions before
                  machines reach site. Financial services sit alongside sales, genuine parts, and after-sales support —
                  so acquisition plans reflect real operating needs in Nepal.
                </p>
              </div>

              <ul className="mt-8 space-y-4">
                {financePillars.map((pillar) => (
                  <li
                    key={pillar.title}
                    className="rounded-xl border border-[var(--border-subtle)] bg-[#fafbfd] px-5 py-4 shadow-sm"
                  >
                    <h3 className="text-base font-bold tracking-tight text-[var(--brand-blue)]">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{pillar.detail}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                  How it works
                </p>
                <ol className="mt-4 space-y-4">
                  {financeSteps.map((item) => (
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

            <aside
              id="finance-consultation"
              className="scroll-mt-28 min-w-0 lg:order-2"
              aria-labelledby="finance-consultation-heading"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                Get started
              </p>
              <h2
                id="finance-consultation-heading"
                className="mt-2 text-xl font-bold tracking-tight text-[var(--brand-blue)] md:text-2xl"
              >
                Request a consultation
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                Contact UHEEM Sales with your project details. We will help you review catalogue options and discuss
                the commercial path that fits your timeline.
              </p>

              <div className="mt-6 rounded-xl border border-[var(--border-subtle)] bg-[#fafbfd] p-5 sm:p-6 md:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue-muted)]">
                  Helpful to include
                </p>
                <ul className="mt-3 space-y-2.5">
                  {consultationChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#475569]">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-yellow)]/20 text-[var(--brand-blue)]"
                        aria-hidden
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2 6L5 9L10 3"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-4 border-t border-[var(--border-subtle)] pt-6 text-sm text-[#475569]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
                      {salesDept.title}
                    </p>
                    <a
                      href={`mailto:${salesDept.email}?subject=Financial%20services%20consultation`}
                      className="mt-1 block font-medium text-[var(--brand-blue)] underline decoration-[var(--brand-yellow)] decoration-1 underline-offset-2 hover:text-[#0a3376]"
                    >
                      {salesDept.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
                      Equipment inquiries
                    </p>
                    <a
                      href={`tel:${salesPhone.tel}`}
                      className="mt-1 block font-medium tabular-nums text-[var(--brand-blue)] hover:text-[#0a3376]"
                    >
                      {salesPhone.display}
                    </a>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 min-[480px]:flex-row min-[480px]:flex-wrap">
                  <Link href="/contact#contact-form" className="inner-cta-solid w-full min-[480px]:w-auto">
                    Contact form
                  </Link>
                  <Link href="/products" className="inner-cta-outline w-full min-[480px]:w-auto">
                    Browse catalogue
                  </Link>
                </div>
              </div>
            </aside>
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
                After acquisition
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Service and parts support continues nationwide
              </h2>
              <p className="text-sm leading-relaxed text-white/82 md:text-[15px]">
                Once equipment is on site, UHEEM service outlets, genuine parts, and field support keep your fleet
                running across Nepal.
              </p>
            </div>
            <div className="cta-action-row shrink-0">
              <Link href="/services/service-outlets" className="inner-cta-primary shadow-lg shadow-black/20 hover:shadow-xl">
                Service outlets
              </Link>
              <Link
                href="/DownloadBrochure"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/35 bg-white/10 px-6 py-2.5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-[transform,background-color] duration-200 hover:bg-white/20 active:translate-y-px"
              >
                Download brochures
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
