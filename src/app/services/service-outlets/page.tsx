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
import { siteContacts, officeMapsExternalHref } from "../../_data/siteContacts";
import { siteShellClass } from "../../_data/siteShell";

const serviceEmail =
  siteContacts.departments.find((d) => d.title === "Services")?.email ?? siteContacts.generalEmail;

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

export default function ServiceOutletsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#f4f6f9] text-[#0f172a] [color-scheme:light]">
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
            <Link href="/services" className="inner-cta-ghost">
              All services
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-subtle)] bg-white">
          <div className={`${siteShellClass} py-10 md:py-12`}>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: String(serviceOutletLocations.length), label: "Outlet cities", detail: "Nationwide footprint" },
                { value: "Field", label: "Service dispatch", detail: "Jobsite-priority routing" },
                { value: "XCMG", label: "Genuine parts", detail: "Aligned with field service" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[var(--border-subtle)] bg-[#f8fafc] px-5 py-5 shadow-sm"
                >
                  <p className="text-3xl font-semibold tracking-tight text-[var(--brand-blue)] md:text-4xl">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-[#0f172a]">{stat.label}</p>
                  <p className="mt-0.5 text-sm text-[#64748b]">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-[#f8fafc]">
          <div className={`${siteShellClass} py-12 md:py-16`}>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                Network
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">Outlet locations</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-[15px] md:leading-relaxed">
                Service outlets across Nepal — contact the nearest channel or reach central dispatch through Kathmandu.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {serviceOutletLocations.map((loc) => (
                <li key={loc.order}>
                  <article className="interactive-card group flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-white to-[#f4f7fb] p-6 shadow-sm ring-1 ring-black/[0.03] hover:border-[var(--brand-blue)]/30">
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0b3c91]/10 text-[#0b3c91]">
                        <MapPinIcon className="h-5 w-5" />
                      </span>
                      <span className="text-[10px] font-bold tabular-nums uppercase tracking-[0.2em] text-[#94a3b8]">
                        {String(loc.order).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[var(--brand-blue)]">{loc.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[#64748b]">{loc.region}</p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#475569] md:text-[15px] md:leading-relaxed">
                      {loc.role}
                    </p>
                  </article>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-center text-sm leading-relaxed text-[#64748b] md:text-[15px]">
              Head office:{" "}
              <span className="font-semibold text-[#0f172a]">{siteContacts.localityLine}</span>
              {" · "}
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

        <section className="border-b border-[var(--border-subtle)] bg-white">
          <div className={`${siteShellClass} py-12 md:py-16`}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                How we support you
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
                Coverage, dispatch &amp; uptime
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-[15px] md:leading-relaxed">
                Field service is planned around your equipment criticality and project timeline — not a one-size response.
              </p>
            </div>

            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {serviceOutletSupportPillars.map((pillar, index) => {
                const Icon = pillarIcons[index] ?? TruckIcon;
                return (
                  <li key={pillar.title}>
                    <article className="interactive-card h-full rounded-xl border border-[var(--border-subtle)] bg-[#f8fafc] p-5 shadow-sm md:p-6 lg:p-7">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#0b3c91] text-white shadow-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-[var(--brand-blue)]">{pillar.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-[15px] md:leading-relaxed">
                        {pillar.body}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[var(--brand-blue)] py-14 text-white md:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--brand-yellow)]/10 blur-3xl"
            aria-hidden
          />
          <div
            className={`relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12 ${siteShellClass} py-0`}
          >
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Get in touch</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Need service or spare parts?</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-[15px]">
                Reach the service desk for dispatch, technical support, or parts availability. Include your model, location,
                and jobsite context for faster routing.
              </p>
              <p className="mt-4 text-sm text-white/70">
                <span className="font-medium text-white">Phone:</span>{" "}
                <a href={`tel:${siteContacts.phones.primary.tel}`} className="underline-offset-2 hover:underline">
                  {siteContacts.phones.primary.display}
                </a>
                {" · "}
                <a href={`tel:${siteContacts.phones.mobile.tel}`} className="underline-offset-2 hover:underline">
                  {siteContacts.phones.mobile.display}
                </a>
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <a href={`mailto:${serviceEmail}`} className="inner-cta-primary shadow-lg shadow-black/20 hover:shadow-xl">
                Email service team
              </a>
              <Link
                href="/#contact"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/35 bg-white/10 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-[transform,background-color] duration-200 hover:bg-white/20 active:translate-y-px"
              >
                Contact form
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/35 bg-transparent px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
              >
                All services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
