import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import {
  PageHero,
  PageHeroBreadcrumbs,
  pageHeroEyebrowBrandClass,
  pageHeroEyebrowClass,
  pageHeroLeadBrandClass,
} from "../_components/PageHero";
import { pageHeroSrc } from "../_data/pageHeroBanners";
import { officeMapsEmbedSrc, officeMapsExternalHref, officeMapsQuery, siteContacts } from "../_data/siteContacts";

const corporateValues = [
  "Customer Focus",
  "Quality & Reliability",
  "Integrity",
  "Innovation",
  "Commitment to Development",
  "Service Excellence",
] as const;

type ManagementLeader = {
  role: string;
  name: string;
  initials: string;
  tagline?: string;
  photoSrc?: string;
  photoAlt?: string;
  photoPositionClass?: string;
  photoZoomClass?: string;
  paragraphs: string[];
};

const managementTeam: ManagementLeader[] = [
  {
    role: "President",
    name: "Mr. Suraj Vaidya",
    initials: "SV",
    tagline: "Together building the future",
    photoSrc: "/about/management-suraj-vaidya.png",
    photoAlt: "Suraj Vaidya, President — UHEEM / XCMG Nepal",
    photoPositionClass: "object-[42%_34%]",
    paragraphs: [
      "The history of Vaidya's growth reflects continuous determination and a strong commitment to achieving ambitious goals. This success has been driven by consistent investment in research, marketing, and development, along with maintaining high performance across all areas.",
      "These achievements are the result of the dedicated efforts of the entire Vaidya family, delivering products and services tailored to customer needs in Nepal and beyond. Vaidya remains focused on growth by embracing new challenges, improving management efficiency, and prioritizing customers. By fulfilling its social responsibilities, the company aims to grow in harmony with society and continue building trust both nationally and globally.",
      "Vaidya will secure steady growth by seizing every opportunity.",
    ],
  },
  {
    role: "Managing Director",
    name: "Mrs. Ritu Singh Vaidya",
    initials: "RSV",
    photoSrc: "/about/ritu-s-vaidya.webp",
    photoAlt: "Ritu Singh Vaidya, Managing Director — UHEEM / XCMG Nepal",
    photoPositionClass: "object-[50%_28%]",
    photoZoomClass: "origin-center scale-[1.22]",
    paragraphs: [
      "Vaidya is guided by the principles of serving, caring, and growing together, forming the foundation of its organizational culture. The company strongly believes that sustainable success is achieved through ensuring customer satisfaction, adapting to continuous change, and consistently improving its processes, services, and overall performance.",
      "Its core objective is to enhance the quality of life within communities by engaging in meaningful business activities that generate positive social impact. By emphasizing operational efficiency, innovation, and organizational excellence, Vaidya strives to strengthen its position as a reliable and forward-thinking enterprise.",
      "With a clear focus on long-term growth and responsibility, Vaidya aspires to be recognized as one of Nepal's most trusted, respected, dependable, customer-focused, and progressive business groups.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#f4f6f9] text-[#0f172a] [color-scheme:light]">
        <PageHero variant="brand" imageSrc={pageHeroSrc.aboutUs} imageAlt="XCMG construction machinery in Nepal">
          <PageHeroBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About us", current: true },
            ]}
          />
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Meet XCMG Nepal</p>
          <h1
            className={`mt-3 max-w-4xl text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl md:leading-tight lg:text-[2.75rem] line-clamp-3`}
          >
            United Heavy Equipment &amp; Earth Movers Pvt. Ltd.
          </h1>
          <p className={pageHeroLeadBrandClass}>
            <span className="font-semibold text-white">UHEEM</span>{" "}
            is a proud member of Vaidya&apos;s Organization of Industries
            &amp; Trading Houses and serves as the
            authorized distributor of XCMG in Nepal. UHEEM delivers a wide range of world-class construction and heavy
            equipment, genuine spare parts, and after-sales services across the country.
          </p>
        </PageHero>
 
        <section className="relative border-b border-[var(--border-subtle)] bg-gradient-to-b from-white to-[#fafbfd]" aria-labelledby="company-journey">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/12 to-transparent" aria-hidden />
          <div className="mx-auto grid w-[92vw] max-w-[1600px] gap-10 px-4 py-14 md:grid-cols-2 md:items-stretch md:gap-14 md:px-6 md:py-20">
            <div className="flex min-h-0 flex-col justify-center">
              <p className={pageHeroEyebrowClass}>Our story</p>
              <h2 id="company-journey" className="mt-3 text-2xl font-semibold tracking-tight text-[var(--brand-blue)] md:text-3xl md:leading-tight">
                The company&apos;s journey
              </h2>
              <div className="mt-8 space-y-6 text-[15px] leading-[1.85] text-[#475569]">
                <p>
                  UHEEM was established in <span className="font-semibold text-[#334155]">2017 AD </span> with a vision to
                  support Nepal&apos;s growing infrastructure and construction sector. UHEEM has played a vital role in
                  introducing advanced heavy machinery and engineering solutions to the market.
                </p>
                <p>
                  Backed by the legacy and trust of Vaidya&apos;s Organization of Industries &amp; Trading Houses, UHEEM has
                  consistently expanded its footprint by
                  providing reliable equipment and technical expertise to meet the nation&apos;s development needs. From roads
                  and hydropower projects to urban construction, UHEEM continues to contribute to Nepal&apos;s
                  modernization.
                </p>
              </div>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[#eef2f6] shadow-[0_20px_50px_-28px_rgb(11_60_145_/_0.35)] ring-1 ring-black/[0.04] md:min-h-[380px]">
              <Image
                src="/about/company-journey-page-pic.jpg"
                alt="United Traders Syndicate building exterior"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" aria-hidden />
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-[var(--surface-muted)]" aria-labelledby="philosophy">
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-14 md:px-6 md:py-20">
            <p className={pageHeroEyebrowClass}>How we work</p>
            <h2 id="philosophy" className="mt-3 text-2xl font-semibold tracking-tight text-[var(--brand-blue)] md:text-3xl md:leading-tight">
              Philosophy
            </h2>
            <p className="mt-6 max-w-3xl text-[15px] leading-[1.85] text-[#475569]">
              Our philosophy revolves around strengthening infrastructure, empowering industries, and growing with the
              nation. We are committed to delivering durable, efficient, and innovative heavy equipment solutions that ensure
              productivity and safety for our customers.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                "Providing cutting-edge machinery",
                "Ensuring reliable after-sales support",
                "Building long-term partnerships with clients",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-[var(--border-subtle)] bg-white p-5 text-[14px] font-medium leading-snug text-[#334155] shadow-sm ring-1 ring-black/[0.02] transition-shadow hover:shadow-md"
                >
                  <span className="mb-3 block h-1 w-10 rounded-full bg-gradient-to-r from-[var(--brand-yellow)] to-[#f5d84a]" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-3xl text-[15px] leading-[1.85] text-[#64748b]">
              Together with XCMG, we embrace continuous improvement and innovation to meet the evolving demands of the
              construction and infrastructure sectors. Our skilled workforce, modern service facilities, and commitment to quality
              enable us to stay ahead in the industry.
            </p>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-white" aria-labelledby="vision-mission">
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-14 md:px-6 md:py-20">
            <p className={pageHeroEyebrowClass}>Direction</p>
            <h2 id="vision-mission" className="mt-3 text-2xl font-semibold tracking-tight text-[var(--brand-blue)] md:text-3xl md:leading-tight">
              Vision &amp; mission
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-white via-white to-[#f4f7fb] p-8 shadow-[0_4px_24px_-12px_rgb(11_60_145_/_0.12)] ring-1 ring-black/[0.03] md:p-9">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--brand-yellow)] to-[#f0d24a]" aria-hidden />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-yellow)]">Vision</p>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#475569]">
                  To become Nepal&apos;s most trusted and leading provider of heavy equipment and construction solutions.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-white via-white to-[#f4f7fb] p-8 shadow-[0_4px_24px_-12px_rgb(11_60_145_/_0.12)] ring-1 ring-black/[0.03] md:p-9">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--brand-blue)] to-[#3d6eb8]" aria-hidden />
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">Mission</p>
                <p className="mt-4 text-[15px] leading-[1.85] text-[#475569]">
                  To empower Nepal&apos;s infrastructure development by delivering advanced, reliable, and efficient heavy
                  machinery solutions, ensuring customer satisfaction and contributing to national growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[#0b3c91] py-14 text-white md:py-20"
          aria-labelledby="corporate-values"
        >
          <div
            className="pointer-events-none absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--brand-yellow)]/10 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto w-[92vw] max-w-[1600px] px-4 md:px-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">What we stand for</p>
            <h2 id="corporate-values" className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Corporate values
            </h2>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {corporateValues.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/[0.08] px-5 py-4 text-sm font-medium shadow-sm backdrop-blur-md transition-[transform,background-color] duration-200 hover:bg-white/[0.12]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-yellow)]/20 text-[var(--brand-yellow)]" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none" className="opacity-90" aria-hidden>
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="border-b border-stone-200/80 bg-gradient-to-b from-[#faf8f4] via-[#f7f4ef] to-[#f3efe8]"
          aria-labelledby="management-messages"
        >
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-14 md:px-6 md:py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-500">Leadership</p>
              <h2
                id="management-messages"
                className="mt-3 text-2xl font-semibold tracking-tight text-stone-800 md:text-3xl md:leading-tight"
              >
                Management&apos;s message to you
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-stone-600">
                A note from the team guiding UHEEM and XCMG Nepal forward.
              </p>
            </div>

            <div className="mx-auto mt-12 grid w-full gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-10">
              {managementTeam.map((leader, leaderIndex) => (
                <article
                  key={leader.name}
                  className="relative flex flex-col overflow-hidden rounded-2xl border border-stone-200/90 bg-[#fffefb] p-6 shadow-[0_4px_28px_-12px_rgb(28_25_23_/_0.12)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_-20px_rgb(28_25_23_/_0.18)] md:p-8"
                >
                  <span
                    className="pointer-events-none absolute right-4 top-4 font-serif text-7xl leading-none text-[var(--brand-yellow)]/[0.12] md:right-6 md:top-5 md:text-8xl"
                    aria-hidden
                  >
                    “
                  </span>

                  <div className="relative flex gap-5 md:gap-6">
                    <div className="relative shrink-0">
                      {leader.photoSrc ? (
                        <div className="relative h-[5.5rem] w-[5.5rem] overflow-hidden rounded-full bg-stone-200 shadow-[0_4px_14px_-6px_rgb(120_113_108_/_0.25)] ring-2 ring-[var(--brand-yellow)]/45 md:h-28 md:w-28">
                          <Image
                            src={leader.photoSrc}
                            alt={leader.photoAlt ?? leader.name}
                            fill
                            sizes="(max-width: 768px) 88px, 112px"
                            quality={95}
                            className={[
                              "object-cover",
                              leader.photoPositionClass ?? "object-center",
                              leader.photoZoomClass,
                            ]
                              .filter(Boolean)
                              .join(" ")}
                            priority={leaderIndex === 0}
                          />
                        </div>
                      ) : (
                        <>
                          <div
                            className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full bg-gradient-to-br from-[#fff9ed] via-[#f3ebe0] to-[#e8dfd2] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.85),0_4px_14px_-6px_rgb(120_113_108_/_0.25)] ring-2 ring-[var(--brand-yellow)]/45 md:h-28 md:w-28"
                            aria-hidden
                          >
                            <span className="text-2xl font-bold tracking-tight text-stone-700 md:text-3xl">
                              {leader.initials}
                            </span>
                          </div>
                          {/* <p className="mt-2 text-center text-[9px] font-medium uppercase tracking-[0.12em] text-stone-400">
                            Photo soon
                          </p> */}
                        </>
                      )}
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">{leader.role}</p>
                      <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-stone-800 md:text-2xl">{leader.name}</h3>
                      {leader.tagline ? (
                        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#b8860b]">
                          {leader.tagline}
                        </p>
                      ) : (
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-stone-500">
                          Serving · Caring · Growing together
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-stone-200/90 pt-6">
                    <div className="space-y-4 text-left text-[14px] leading-[1.82] text-stone-600 md:text-[15px]">
                      {leader.paragraphs.map((text, i) => (
                        <p key={`${leader.name}-${i}`}>{text}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-t border-[var(--border-subtle)] bg-gradient-to-b from-[#f8fafc] to-white py-14 md:py-20"
          aria-labelledby="office-location-heading"
        >
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 md:px-6">
            <div className="w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white p-8 shadow-[0_4px_28px_-14px_rgb(11_60_145_/_0.12)] ring-1 ring-black/[0.02] md:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">
                Visit us
              </p>
              <h2
                id="office-location-heading"
                className="mt-2 text-lg font-semibold tracking-tight text-[var(--brand-blue)] md:text-xl"
              >
                UHEEM office
              </h2>
              <div className="mt-1.5 max-w-2xl space-y-1.5 text-sm leading-relaxed text-[#64748b]">
                <p>
                  <span className="font-medium text-[#475569]">{siteContacts.legalName}</span>
                </p>
                <p>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue-muted)]">
                    Office location
                  </span>
                  <br />
                  <span className="text-[#334155]">
                    {siteContacts.localityLine}
                    <br />
                    {siteContacts.postalCountryLine}
                  </span>
                </p>
              </div>
              <div className="relative mt-6 h-[232px] w-full overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-[#e8edf3] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.8)] sm:h-[268px] md:h-[300px] lg:h-[328px]">
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
                  className="font-medium text-[var(--brand-blue)] underline decoration-[var(--brand-yellow)] decoration-1 underline-offset-2 transition-colors hover:text-[#0a3376]"
                >
                  Open in Google Maps
                </a>
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/products" className="inner-cta-solid">
                  View products
                </Link>
                <Link href="/services" className="inner-cta-outline">
                  Services
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
