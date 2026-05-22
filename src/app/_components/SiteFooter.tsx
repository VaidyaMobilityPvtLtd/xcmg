import Link from "next/link";
import { displayEquipmentCatalog } from "../_data/displayEquipment";
import { siteContacts } from "../_data/siteContacts";
import { siteShellClass } from "../_data/siteShell";

export default function SiteFooter() {
  const products = displayEquipmentCatalog.map((c) => ({
    label: c.label,
    href: `/products?segment=${encodeURIComponent(c.key)}`,
  }));
  const services = [
    { label: "Services overview", href: "/services#services-overview" },
    { label: "Service Outlets", href: "/services/service-outlets" },
    { label: "Download brochure", href: "/DownloadBrochure" },
    { label: "Satisfaction Survey", href: "/services/satisfaction-survey" },
    { label: "Financial Services", href: "/services/financial-services" },
  ];

  const headingClass =
    "text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]";
  const subLabelClass = "text-[11px] font-medium uppercase tracking-[0.12em] text-[#94a3b8]";
  const bodyClass = "text-sm leading-relaxed text-[#64748b]";
  const listLinkClass =
    "block py-1 text-sm leading-relaxed text-[#64748b] transition-colors hover:text-[var(--brand-yellow)]";

  return (
    <footer
      id="contact"
      className="scroll-mt-[clamp(3.75rem,11vw,5.75rem)] font-sans border-t border-[var(--border-subtle)] bg-gradient-to-b from-[#f0f3f8] to-[#e8ecf2] shadow-[inset_0_2px_0_0_var(--brand-yellow)]"
    >
      <div className={`${siteShellClass} py-10 md:py-12 2xl:py-14`}>
        <div className="grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10 xl:gap-x-10">
          <div className="lg:col-span-5">
            <p className={headingClass}>XCMG Nepal</p>
            <p className={`mt-4 max-w-md ${bodyClass}`}>
              Operated by United Heavy Equipment &amp; Earth Movers Pvt. Ltd. (UHEEM), the sole authorized distributor of
              XCMG in Nepal. We provide nationwide support for products, customized solutions, and reliable after-sales
              service to ensure maximum performance and customer satisfaction.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="inline-flex min-h-[40px] items-center justify-center border border-[var(--brand-blue)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue)] transition-colors hover:bg-[var(--brand-blue)] hover:text-white"
              >
                Explore products
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-[40px] items-center justify-center border border-[var(--border-subtle)] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#334155] transition-colors hover:border-[var(--brand-yellow)] hover:text-[var(--brand-blue)]"
              >
                Support &amp; service
              </Link>
            </div>
          </div>

          <nav className="min-w-0 lg:col-span-2" aria-label="Product categories">
            <p className={headingClass}>Products</p>
            <ul className="mt-3 space-y-0">
              {products.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className={listLinkClass}>
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 lg:col-span-3">
            <p className={headingClass}>Contact</p>
            <div className={`mt-3 space-y-5 ${bodyClass}`}>
              <div>
                <p className={subLabelClass}>Phone</p>
                <p className="mt-1">
                  <a
                    href={`tel:${siteContacts.phones.primary.tel}`}
                    className={`${bodyClass} hover:text-[var(--brand-blue)] hover:underline`}
                  >
                    {siteContacts.phones.primary.display}
                  </a>
                  <span className="mx-1.5 text-[#cbd5e1]" aria-hidden>
                    |
                  </span>
                  <a
                    href={`tel:${siteContacts.phones.mobile.tel}`}
                    className={`${bodyClass} hover:text-[var(--brand-blue)] hover:underline`}
                  >
                    {siteContacts.phones.mobile.display}
                  </a>
                </p>
              </div>
              <div>
                <p className={subLabelClass}>Office location</p>
                <p className={`mt-1 ${bodyClass}`}>
                  {siteContacts.legalName}
                  <br />
                  <span className="italic">{siteContacts.localityLine}</span>
                  <br />
                  {siteContacts.postalCountryLine}
                </p>
              </div>
              <div>
                <p className={subLabelClass}>General email</p>
                <p className="mt-1">
                  <a
                    href={`mailto:${siteContacts.generalEmail}`}
                    className="text-sm leading-relaxed text-[var(--brand-blue)] underline decoration-[var(--brand-yellow)] decoration-1 underline-offset-2 transition-colors hover:text-[#0a3376]"
                  >
                    {siteContacts.generalEmail}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <nav className="min-w-0 lg:col-span-2" aria-label="Services">
            <p className={headingClass}>Services</p>
            <ul className="mt-3 space-y-0">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className={listLinkClass}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="min-w-0 lg:col-span-12" aria-labelledby="footer-departments-heading">
            <div className="min-w-0 border-t border-[var(--border-subtle)] pt-12 lg:pt-14">
              <h2 id="footer-departments-heading" className={headingClass}>
                Departments
              </h2>
              <div role="list" className="footer-departments mt-10">
                {siteContacts.departments.map((d) => (
                  <div role="listitem" key={d.email} className="footer-department-item flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue-muted)] sm:text-[11px] sm:tracking-[0.14em] md:text-[12px]">
                      {d.title}
                    </span>
                    <a
                      href={`mailto:${d.email}`}
                      className="mt-2 block break-words text-[12px] font-medium leading-snug text-[var(--brand-blue)] underline decoration-[var(--brand-yellow)] decoration-1 underline-offset-[3px] transition-colors hover:text-[#0a3376] sm:mt-3 sm:text-[14px] md:text-[15px] md:underline-offset-4"
                    >
                      {d.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-[var(--border-subtle)] pt-5 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
          © {new Date().getFullYear()} XCMG Nepal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
