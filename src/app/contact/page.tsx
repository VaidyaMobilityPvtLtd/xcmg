import Link from "next/link";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import ContactForm from "../_components/ContactForm";
import ContactPhoneList from "../_components/ContactPhoneList";
import SocialLinks from "../_components/SocialLinks";
import {
  PageHero,
  PageHeroBreadcrumbs,
  pageHeroEyebrowBrandClass,
  pageHeroLeadBrandClass,
  pageHeroTitleBrandClass,
} from "../_components/PageHero";
import { pageHeroSrc } from "../_data/pageHeroBanners";
import {
  officeMapsEmbedSrc,
  officeMapsExternalHref,
  officeMapsQuery,
  siteContacts,
} from "../_data/siteContacts";
import { siteShellClass } from "../_data/siteShell";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="justify-copy min-h-screen bg-[#f4f6f9] text-[#0f172a] [color-scheme:light]">
        <PageHero variant="brand" imageSrc={pageHeroSrc.services} imageAlt="Contact XCMG Nepal / UHEEM">
          <PageHeroBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Contact", current: true },
            ]}
          />
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Get in touch</p>
          <h1 className={`mt-3 ${pageHeroTitleBrandClass}`}>Contact UHEEM</h1>
          <p className={pageHeroLeadBrandClass}>
            Reach our Sales, Service, or Parts teams for equipment enquiries, support, and spare parts across Nepal.
          </p>
        </PageHero>

        <section
          id="contact-form"
          className="scroll-mt-[clamp(3.75rem,11vw,5.75rem)] border-b border-[var(--border-subtle)] bg-white py-12 md:py-16"
          aria-labelledby="contact-form-heading"
        >
          <div className={`${siteShellClass} grid gap-10 lg:grid-cols-12 lg:gap-12`}>
            <div className="min-w-0 lg:col-span-7">
              <div className="rounded-xl border border-[var(--border-subtle)] bg-[#fafbfd] p-5 shadow-sm sm:p-6 md:p-8">
                <ContactForm />
              </div>
            </div>

            <aside className="min-w-0 lg:col-span-5">
              <h2
                id="contact-form-heading"
                className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]"
              >
                Direct contact
              </h2>
              <div className="mt-4 space-y-6 text-sm leading-relaxed text-[#64748b]">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">Phone</p>
                  <ContactPhoneList
                    linkClass="text-sm font-medium text-[var(--brand-blue)] hover:underline"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">General email</p>
                  <a
                    href={`mailto:${siteContacts.generalEmail}`}
                    className="mt-1 inline-block font-medium text-[var(--brand-blue)] underline decoration-[var(--brand-yellow)] decoration-1 underline-offset-2"
                  >
                    {siteContacts.generalEmail}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">Departments</p>
                  <ul className="mt-2 space-y-3">
                    {siteContacts.departments.map((d) => (
                      <li key={d.email}>
                        <span className="font-semibold text-[#334155]">{d.title}</span>
                        <br />
                        <a href={`mailto:${d.email}`} className="text-[var(--brand-blue)] hover:underline">
                          {d.email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">Office</p>
                  <p className="mt-1 text-[#334155]">
                    {siteContacts.legalName}
                    <br />
                    {siteContacts.localityLine}
                    <br />
                    {siteContacts.postalCountryLine}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">Social</p>
                  <SocialLinks className="mt-3" />
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className="inner-cta-solid">
                  View products
                </Link>
                <Link href="/services/service-outlets" className="inner-cta-outline">
                  Service outlets
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-gradient-to-b from-[#f8fafc] to-white py-12 md:py-16">
          <div className={siteShellClass}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">
              Visit us
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-[var(--brand-blue)] md:text-2xl">
              UHEEM office — Kathmandu
            </h2>
            <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[#e8edf3] sm:h-[280px] md:h-[320px]">
              <iframe
                title={`Map: ${officeMapsQuery}`}
                src={officeMapsEmbedSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-2 text-xs text-[#94a3b8]">
              <a
                href={officeMapsExternalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--brand-blue)] underline decoration-[var(--brand-yellow)] decoration-1 underline-offset-2"
              >
                Open in Google Maps
              </a>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
