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
import { serviceOutletLocations, serviceOutletSupportPillars } from "../../_data/serviceOutlets";
import {
  officeMapsEmbedSrc,
  officeMapsExternalHref,
  siteContacts,
} from "../../_data/siteContacts";
import { siteShellClass } from "../../_data/siteShell";

const serviceEmail =
  siteContacts.departments.find((d) => d.title === "Services")?.email ?? siteContacts.generalEmail;

const outletStats = [
  { value: String(serviceOutletLocations.length), label: "Outlet cities", detail: "Nationwide footprint" },
  { value: "Field", label: "Service dispatch", detail: "Jobsite-priority routing" },
  { value: "XCMG", label: "Genuine parts", detail: "Aligned with field service" },
] as const;

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-4.438 7-11a7 7 0 1 0-14 0c0 6.562 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 8h11v8H3V8Zm11 2h3l2 2v4h-5v-6ZM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m14 6 4 4-6 6H8v-4l6-6Zm-2 2-6 6v4h4l6-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PartsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

const pillarIcons = [TruckIcon, WrenchIcon, PartsIcon] as const;

const headOffice = serviceOutletLocations[0];
const regionalOutlets = serviceOutletLocations.slice(1);

export default function ServiceOutletsPage() {
  return (
    <>
      <SiteHeader />
      <main className="justify-copy min-h-screen bg-white text-[#0f172a] [color-scheme:light]">
        <PageHero variant="brand" imageSrc={pageHeroSrc.services} imageAlt="XCMG Nepal support network">
          <PageHeroBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Service Outlets", current: true },
            ]}
          />
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Services</p>
          <h1 className={`mt-3 ${pageHeroTitleBrandClass}`}>Service Outlets</h1>
          <p className={pageHeroLeadBrandClass}>
            Local support channels and response routing for XCMG machinery across Nepal.
          </p>
          <div className={pageHeroActionsClass}>
            <Link href={`mailto:${serviceEmail}`} className="inner-cta-primary">
              Email service team
            </Link>
            <Link href="#outlet-locations" className="inner-cta-ghost">
              View outlets
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-subtle)] bg-[#f8fafc]">
          <div className={`${siteShellClass} py-10 md:py-12`}>
            <ul className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 min-[480px]:gap-4" role="list">
              {outletStats.map((stat) => (
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

        <section
          id="outlet-locations"
          className="scroll-mt-28 border-b border-[var(--border-subtle)] bg-white"
          aria-labelledby="outlet-locations-heading"
        >
          <div className={`${siteShellClass} py-12 md:py-16`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
              Network
            </p>
            <div className="mt-3 border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6">
              <h2 id="outlet-locations-heading" className="text-2xl font-bold tracking-tight text-[var(--brand-blue)] md:text-3xl">
                Outlet locations
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748b] md:text-base">
                Service outlets across Nepal — contact the nearest channel or reach central dispatch through Kathmandu.
              </p>
            </div>

            {headOffice ? (
              <article className="interactive-card relative mt-10 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-[#fffdf5] via-white to-[#f8fafc] p-6 shadow-sm ring-1 ring-black/[0.02] md:p-8">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[var(--brand-yellow)]"
                  aria-hidden
                />
                <div className="flex flex-col gap-5 min-[480px]:flex-row min-[480px]:items-start min-[480px]:justify-between">
                  <div className="min-w-0 pl-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#94a3b8]">01 · Head office</p>
                    <h3 className="mt-2 text-xl font-bold text-[var(--brand-blue)] md:text-2xl">{headOffice.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-[#64748b]">{headOffice.region}</p>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#475569] md:text-[15px]">{headOffice.role}</p>
                    <p className="mt-4 text-sm text-[#334155]">
                      <span className="font-semibold">{siteContacts.legalName}</span>
                      <br />
                      {siteContacts.localityLine}
                      <br />
                      {siteContacts.postalCountryLine}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 pl-2 min-[480px]:items-end">
                    <a
                      href={`tel:${siteContacts.phones.sparePartsService.tel}`}
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[var(--brand-blue)] bg-[var(--brand-blue)] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#0a3376]"
                    >
                      Call service line
                    </a>
                    <a
                      href={officeMapsExternalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-blue)] transition-colors hover:bg-[#f8fafc]"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </article>
            ) : null}

            <ul className="mt-5 grid list-none grid-cols-1 gap-4 min-[480px]:grid-cols-2 lg:grid-cols-4" role="list">
              {regionalOutlets.map((loc) => (
                <li key={loc.order}>
                  <article className="interactive-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white p-5 shadow-sm ring-1 ring-black/[0.02] md:p-6">
                    <div
                      className="pointer-events-none absolute inset-y-5 left-0 w-[3px] rounded-full bg-[var(--brand-yellow)] opacity-80"
                      aria-hidden
                    />
                    <div className="flex items-start justify-between gap-3 pl-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f9] text-[var(--brand-blue)] ring-1 ring-[var(--border-subtle)] transition-colors group-hover:bg-[var(--brand-yellow)]/15">
                        <MapPinIcon className="h-5 w-5" />
                      </span>
                      <span className="text-[10px] font-bold tabular-nums tracking-[0.18em] text-[#cbd5e1]">
                        {String(loc.order).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 pl-3 text-lg font-bold text-[#0f172a]">{loc.name}</h3>
                    <p className="mt-1 pl-3 text-sm font-medium text-[#64748b]">{loc.region}</p>
                    <p className="mt-3 flex-1 pl-3 text-sm leading-relaxed text-[#475569]">{loc.role}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-[#f8fafc]" aria-labelledby="outlet-map-heading">
          <div className={`${siteShellClass} py-12 md:py-16`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
              Visit us
            </p>
            <h2 id="outlet-map-heading" className="mt-3 text-xl font-bold tracking-tight text-[var(--brand-blue)] md:text-2xl">
              UHEEM head office — Kathmandu
            </h2>
            <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[#e8edf3] shadow-sm sm:h-[280px] md:h-[320px]">
              <iframe
                title={`Map: ${siteContacts.localityLine}, Kathmandu`}
                src={officeMapsEmbedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-sm text-[#64748b]">
              <a
                href={officeMapsExternalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[var(--brand-blue)] underline decoration-[var(--brand-yellow)] decoration-2 underline-offset-4 transition-colors hover:text-[#0a3376]"
              >
                Open in Google Maps
              </a>
            </p>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-white" aria-labelledby="support-pillars-heading">
          <div className={`${siteShellClass} py-12 md:py-16`}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
              How we support you
            </p>
            <div className="mt-3 border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6">
              <h2 id="support-pillars-heading" className="text-2xl font-bold tracking-tight text-[var(--brand-blue)] md:text-3xl">
                Coverage, dispatch &amp; uptime
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748b] md:text-base">
                Field service is planned around your equipment criticality and project timeline — not a one-size response.
              </p>
            </div>

            <ul className="mt-10 grid list-none grid-cols-1 gap-5 md:grid-cols-3 md:gap-6" role="list">
              {serviceOutletSupportPillars.map((pillar, index) => {
                const Icon = pillarIcons[index] ?? TruckIcon;
                return (
                  <li key={pillar.title}>
                    <article className="interactive-card flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-white p-5 shadow-sm ring-1 ring-black/[0.02] md:p-6">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-yellow)] text-[11px] font-bold text-[#0f172a]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1f5f9] text-[var(--brand-blue)] ring-1 ring-[var(--border-subtle)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-lg font-bold tracking-tight text-[#0f172a]">{pillar.title}</h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-[#475569] md:text-[15px]">{pillar.body}</p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-[#f8fafc] py-12 md:py-16">
          <div className={siteShellClass}>
            <div className="rounded-2xl border border-[var(--border-subtle)] bg-white p-6 shadow-sm md:flex md:items-center md:justify-between md:gap-10 md:p-8 lg:p-10">
              <div className="min-w-0 max-w-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                  Get in touch
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--brand-blue)] md:text-3xl">
                  Need service or spare parts?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#64748b] md:text-[15px]">
                  Reach the service desk for dispatch, technical support, or parts availability. Include your model,
                  location, and jobsite context for faster routing.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-[#334155]">
                  {siteContacts.phones.lines.map((line) => (
                    <li key={line.tel}>
                      {line.label ? (
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.1em] text-[#94a3b8]">
                          {line.label}
                        </span>
                      ) : null}
                      <a
                        href={`tel:${line.tel}`}
                        className="font-semibold text-[var(--brand-blue)] underline decoration-[var(--brand-yellow)] decoration-1 underline-offset-2 hover:text-[#0a3376]"
                      >
                        {line.display}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 flex flex-shrink-0 flex-col gap-2.5 sm:flex-row sm:flex-wrap md:mt-0 md:flex-col lg:flex-row">
                <a
                  href={`mailto:${serviceEmail}`}
                  className="inner-cta-primary inline-flex min-h-[44px] items-center justify-center px-6 py-2.5 text-center"
                >
                  Email service team
                </a>
                <Link
                  href="/contact#contact-form"
                  className="inner-cta-outline inline-flex min-h-[44px] items-center justify-center px-6 py-2.5 text-center"
                >
                  Contact form
                </Link>
                <Link
                  href="/services"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[var(--border-subtle)] bg-[#f8fafc] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue)] transition-colors hover:bg-white"
                >
                  All services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
