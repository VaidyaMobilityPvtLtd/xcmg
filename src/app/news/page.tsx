import Image from "next/image";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import {
  PageHero,
  PageHeroBreadcrumbs,
  pageHeroEyebrowBrandClass,
  pageHeroLeadBrandClass,
  pageHeroTitleBrandClass,
} from "../_components/PageHero";
import { pageHeroSrc } from "../_data/pageHeroBanners";

const newsCards = [
  {
    meta: "FIRST",
    title: "Pride Projects; Proud Customers",
    intro: "Our XCMG equipment are successfully working on big and pride projects of Nepal.",
    details: [
      "Kathmandu-Terai Express Way: 100+ Units",
      "Muglin-Pokhara Highway: 20 Units",
      "Nagdhunga-Muglin Highway: 8 Units",
      "Narayanghat-Butwal Highway: 25 Units",
      "Big Hydropower Projects: Above 100 Units & many other important projects of Nepal.",
    ],
  },
];

type GlobalNewsBlock = { heading: string; body: string };

const globalNewsArticles: Array<{
  id: string;
  region: string;
  dateLabel: string;
  headline: string;
  blocks: GlobalNewsBlock[];
}> = [
  {
    id: "global-sa-2026",
    region: "South America",
    dateLabel: "Apr 24, 2026",
    headline:
      "XCMG Showcases Strong Presence with Complete Logistics Equipment Line in South America",
    blocks: [
      {
        heading: "Venue & focus",
        body: `São Paulo, Brazil — The 30th South American Transport and Logistics Exhibition recently opened on a grand scale in São Paulo. XCMG made a significant impact by presenting its complete lineup of material handling equipment, highlighting its overall capabilities in the South American market and becoming one of the major attractions of the event.

Comprehensive Product Portfolio Meets Diverse Needs

At the exhibition, XCMG introduced several flagship products, such as 45-ton fuel-powered container reach stackers, 16-ton heavy-duty internal combustion forklifts, and electric counterbalance forklifts. These machines are designed to support a wide range of operations, including port logistics, industrial material handling, and warehouse transportation. Their advanced technology, dependable performance, and eco-friendly features were key highlights.`,
      },
      {
        heading: "Strong Customer Engagement and Successful Partnerships",
        body: `XCMG’s booth attracted a large number of visitors throughout the event, with clients from countries like Brazil, Chile, and Argentina expressing strong interest and appreciation for the company’s product quality and service standards.

One Brazilian customer shared his experience, stating that after more than 30 years of using reach stackers, he considers XCMG’s models to be among the most reliable and well-developed in the market. He noted that a unit purchased by his company has operated for nearly 14,500 hours with minimal maintenance while maintaining excellent performance.

Several purchase agreements and cooperation intentions were finalized during the exhibition. A representative from XCMG’s South American division also completed equipment deliveries on-site and emphasized that XCMG Brazil remains committed to a customer-focused approach, leveraging localized production, continuous innovation, and full lifecycle service support to deliver high-value logistics solutions across the region.`,
      },
      {
        heading: "Long-Term Commitment and Local Integration",
        body: `South America continues to play a vital role in XCMG’s global expansion strategy. The company established its Brazilian manufacturing facility in 2012, which became fully operational in 2014. As XCMG’s largest overseas production base, the facility has successfully embraced localization, with over 96% of its workforce being local employees. It stands as a strong example of China–Brazil industrial cooperation. The company’s impressive performance at this exhibition reflects its deep-rooted commitment and growing integration within the South American market.`,
      },
    ],
  },
  {
    id: "global-oceania-2026",
    region: "Oceania",
    dateLabel: "Apr 18, 2026",
    headline:
      "XCMG Unveils New Energy Equipment Portfolio at Australia's DDT Expo, Promoting Green and Smart Manufacturing",
    blocks: [
      {
        heading: "Venue & theme",
        body: `Sydney, April 17 — The National Diesel Dirt & Turf Expo (DDT) officially began in Sydney on April 17, where XCMG stood out by presenting its latest range of intelligent and environmentally friendly construction equipment. With the theme “Green Intelligence for a Better World,” the company showcased its advanced manufacturing capabilities to the Australian market through a diverse selection of smart, low-emission machinery designed specifically for regional needs.

Tailored Solutions for Australian Work Environments

To meet Australia’s strict environmental regulations and increasing demand for infrastructure and earthmoving projects, XCMG implemented a focused localization strategy. The company emphasized the development of compact, lightweight, and electrified equipment, offering customized green construction solutions suited to local conditions.

In response to the country’s shift toward smaller and more sustainable construction practices, XCMG introduced an interactive “mini job site” concept. This display featured a lightweight electric excavator as the centerpiece, supported by aerial work platforms, compact rollers, and loading equipment, demonstrating efficient performance across multiple applications within a limited space.`,
      },
      {
        heading: "Advancing Green and Intelligent Construction",
        body: `Sustainability and smart technology were key themes of XCMG’s exhibition. Its new energy product lineup, led by electric excavators, incorporates cutting-edge electric drive systems, intelligent controls, and Internet of Things (IoT) integration. These innovations reflect XCMG’s progress across the entire value chain—from core component development to complete machine production and the shift toward intelligent manufacturing systems.`,
      },
      {
        heading: "Expert Support Enhances Visitor Experience",
        body: `XCMG provided a professional on-site team of technical experts and product managers who delivered personalized explanations and live demonstrations. This ensured that visitors gained a clear understanding of the performance advantages and environmental benefits of the company’s smart equipment.

One attendee noted that XCMG effectively demonstrated its green and intelligent technologies during the event. After test-driving the compact electric excavator, the visitor praised its smooth operation and highlighted the company’s strong expertise in electric drive systems and intelligent control technologies.

Strengthening Global Collaboration

The expo created a valuable platform for meaningful engagement between XCMG and Australia’s construction sector, encouraging deeper communication, cooperation, and technological exchange on a global scale.

XCMG also expressed its commitment to working closely with international partners to drive innovation, achieve shared success, and explore new business opportunities worldwide.`,
      },
    ],
  },
  {
    id: "global-europe-2026",
    region: "Europe",
    dateLabel: "Apr 17, 2026",
    headline: "XCMG Showcases Advanced Digital Solutions at SMOPYC 2026",
    blocks: [
      {
        heading: "Venue & portfolio scale",
        body: `XCMG demonstrated its latest integrated and digitalized technologies at SMOPYC 2026, one of Spain’s  leading  construction and mining equipment exhibitions, which opened on April 15. The company exhibited 32 machines spanning seven different categories within an 800-square-meter display area, further strengthening its role as a provider of comprehensive, all-in-one solutions.

Wide-Ranging Equipment Portfolio for European Needs

The exhibition featured a diverse range of machinery designed to meet the specific requirements of the European market. These included lifting equipment, excavators, loaders, concrete machinery, road construction equipment, aerial work platforms, and forklifts.

A key highlight was the XC7-SR10 skid steer loader, developed specifically for the Iberian region. This model is engineered to enhance productivity while lowering both labor demands and operational costs. In addition, XCMG introduced multiple electric loaders along with its “Kunpeng” series forklifts, emphasizing advancements in low-noise and low-emission technologies.`,
      },
      {
        heading: "Advanced concrete equipment for urban applications",
        body: `XCMG also presented concrete machinery developed by XCMG Schwing, tailored for European standards related to safety and environmental compliance. These machines incorporate optimized hydraulic systems and a 5RZ folding boom design, making them suitable for efficient operation in tight urban spaces and indoor environments.

Industry Engagement and Media Attention

The company’s participation attracted significant attention from Spanish industry media outlets, including Interempresas. Prior to the exhibition, XCMG took part in a roundtable discussion organized by the well-known rental company GAM, where industry leaders explored topics such as digital transformation and sustainable growth.`,
      },
      {
        heading: "Strengthening partnerships and market commitment",
        body: `Company representatives emphasized that digitalization is a core element of XCMG’s long-term strategy. It supports smarter manufacturing processes, enhances product lifecycle value for customers, and accelerates localization efforts across Europe.

During the event, XCMG also organized a partner appreciation gathering, where it recognized key collaborators and formalized several new cooperation agreements. The company stated that its participation in SMOPYC 2026 reflects its continued dedication to the European market, along with its commitment to delivering environmentally friendly and intelligent solutions for modern infrastructure development.`,
      },
    ],
  },
];

export default function NewsPage() {
  const highlightNepal = (text: string) =>
    text.split(/(Nepal)/gi).map((chunk, idx) =>
      chunk.toLowerCase() === "nepal" ? (
        <span key={`${chunk}-${idx}`} className="font-semibold text-[var(--brand-blue)]">
          {chunk}
        </span>
      ) : (
        chunk
      ),
    );

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#f4f6f9] text-[#0f172a] [color-scheme:light]">
        <PageHero variant="brand" imageSrc={pageHeroSrc.news} imageAlt="News and media">
          <PageHeroBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "News", current: true },
            ]}
          />
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Nepal news</p>
          <h1 className={`mt-3 ${pageHeroTitleBrandClass}`}>XCMG Strengthens Presence in Nepal</h1>
          <p className={pageHeroLeadBrandClass}>
            XCMG, a global leader in construction machinery, continues to expand its presence in
            Nepal, supporting the country&apos;s fast-growing infrastructure sector. With advanced
            technology and durable equipment, XCMG Nepal is playing a key role in major development
            projects across the nation.
          </p>
        </PageHero>

        <section className="relative border-b border-[var(--border-subtle)] bg-gradient-to-b from-white via-[#fafbfd] to-[#f4f6f9]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/15 to-transparent" aria-hidden />
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-14 md:px-6 md:py-20">
            <section aria-labelledby="nepal-news-heading">
              <div className="mb-8 md:mb-10">
                <h2
                  id="nepal-news-heading"
                  className="text-balance text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--brand-blue)]"
                >
                  Nepal news
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#64748b]">
                  The updates, feature story, project list, and testimonial in this part of the page are about{" "}
                  <span className="font-semibold text-[var(--brand-blue)]">Nepal</span>—XCMG with UHEEM as the
                  authorized distributor. International stories are in the section below titled{" "}
                  <span className="font-semibold text-[var(--brand-blue)]">International news</span>.
                </p>
              </div>
            <article className="group relative w-full overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white shadow-[0_1px_0_rgb(255_255_255_/_0.95)_inset,0_12px_48px_-28px_rgb(11_60_145_/_0.2),0_4px_20px_-8px_rgb(15_23_42_/_0.08)] ring-1 ring-black/[0.04]">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand-yellow)] via-[#f0d24a] to-[var(--brand-yellow)]/40"
                aria-hidden
              />
              <div className="relative min-h-0 bg-gradient-to-br from-white via-white to-[#f8fafc]">
                <div className="grid min-h-0 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,38%)] lg:items-stretch">
                  <div className="flex min-h-0 flex-col justify-start p-6 sm:p-8 lg:p-10 lg:pr-8">
                    <div className="border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6">
                      <span className="inline-flex w-fit items-center rounded-full border border-[var(--brand-blue)]/10 bg-[var(--brand-blue)]/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">
                        Featured · Nepal
                      </span>
                      <h3 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-[var(--brand-blue)] sm:text-[1.65rem] sm:leading-snug md:text-3xl md:leading-[1.15]">
                        XCMG Nepal: Pride Projects, Proud Customers
                      </h3>
                      <p className="mt-4 max-w-2xl text-[15px] leading-[1.65] text-[#5c6b7f]">
                        Focused on reliability and customer support, XCMG Nepal provides efficient after-sales
                        service and technical expertise to meet diverse project needs. The company remains
                        committed to contributing to Nepal&apos;s economic growth through quality, innovation,
                        and sustainable solutions.
                      </p>
                    </div>
                  </div>
                  <div className="relative min-h-[220px] w-full overflow-hidden border-t border-[var(--border-subtle)]/80 bg-[#e8edf3] sm:min-h-[260px] lg:min-h-0 lg:h-full lg:border-l lg:border-t-0">
                    <Image
                      src="/landing-2.png"
                      alt="XCMG construction equipment — supporting infrastructure across Nepal"
                      fill
                      className="object-cover object-center transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.03] group-hover:brightness-[1.02]"
                      sizes="(max-width: 1024px) 100vw, (max-width: 1600px) 45vw, 720px"
                      priority
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b3c91]/20 via-transparent to-[#fafcff]/[0.08]"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </article>

            <section className="mt-12 md:mt-14" aria-labelledby="news-testimonial-heading">
              <div className="mx-auto max-w-[880px]">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                  Testimonial
                </p>
                <h3
                  id="news-testimonial-heading"
                  className="mt-2 text-lg font-semibold tracking-tight text-[var(--brand-blue)] md:text-xl"
                >
                  Customer video
                </h3>
                <div className="mt-5 overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-black shadow-sm">
                  {/*
                    MP4 (H.264) — supported in all major browsers.
                  */}
                  <video
                    className="aspect-video w-full max-h-[min(85vh,800px)] object-contain bg-black"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label="Customer testimonial video"
                  >
                    <source src="/testimonial-video.mp4" type="video/mp4" />
                    Your browser cannot play this clip inline.{" "}
                    <a href="/testimonial-video.mp4" className="text-[var(--brand-yellow)] underline">
                      Download MP4
                    </a>
                  </video>
                </div>
              </div>
            </section>

            <div className="mt-14 grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
              {newsCards.map((n) => (
                <article
                  key={n.title}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white p-6 shadow-[0_2px_16px_-6px_rgb(15_23_42_/_0.1)] ring-1 ring-black/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-blue)]/15 hover:shadow-[0_20px_50px_-24px_rgb(11_60_145_/_0.22)] sm:p-7"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full bg-[#f1f5f9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue-muted)] transition-colors group-hover:bg-[#e8f0fc] group-hover:text-[var(--brand-blue)]">
                      {n.meta}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-[#0f172a] transition-colors group-hover:text-[var(--brand-blue)]">
                    {n.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#475569]">{highlightNepal(n.intro)}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#475569]">
                    {n.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-1 text-[var(--brand-blue)]" aria-hidden>
                          •
                        </span>
                        <span>{highlightNepal(detail)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-1 flex-col justify-end border-t border-[var(--border-subtle)] pt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                      {highlightNepal("Nepal project highlights")}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            </section>

            <section
              className="relative mt-14 overflow-hidden rounded-2xl border border-[var(--brand-blue)]/20 bg-gradient-to-br from-[#e8f4fc] via-[#f0f7fc] to-white shadow-[0_12px_40px_-24px_rgb(11_60_145_/_0.18)] md:mt-16"
              aria-labelledby="news-global-heading"
            >
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[var(--brand-blue)] via-[var(--brand-yellow)] to-[var(--brand-blue)]"
                aria-hidden
              />
              <div className="relative px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 pl-6 sm:pl-9 md:pl-12">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-[var(--brand-blue)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-sm">
                    Global
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">
                    Outside Nepal
                  </span>
                </div>
                <h2
                  id="news-global-heading"
                  className="mt-4 text-balance border-b border-[var(--brand-blue)]/15 pb-4 text-xl font-bold uppercase tracking-[0.08em] text-[var(--brand-blue)] sm:text-2xl md:text-[1.65rem]"
                >
                  International news
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#334155] md:text-[15px]">
                  These stories are not Nepal-specific: they highlight XCMG&apos;s exhibitions, partnerships, and product
                  introductions outside Nepal—across{" "}
                  <strong className="font-semibold text-[var(--brand-blue)]">Americas</strong>,{" "}
                  <strong className="font-semibold text-[var(--brand-blue)]">Oceania</strong>, and{" "}
                  <strong className="font-semibold text-[var(--brand-blue)]">Europe</strong>, alongside{" "}
                  <strong className="font-semibold text-[var(--brand-blue)]">global</strong> momentum across XCMG&apos;s
                  international footprint.
                </p>

                <div className="mt-10 grid gap-8 lg:gap-10">
                  {globalNewsArticles.map((article, index) => (
                    <article
                      key={article.id}
                      className="rounded-xl border border-[var(--border-subtle)] bg-white/95 p-6 shadow-sm ring-1 ring-[var(--brand-blue)]/[0.06] sm:p-7"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex rounded-md bg-[var(--brand-blue)]/[0.08] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[var(--brand-blue)] ring-1 ring-[var(--brand-blue)]/20">
                          Global · {article.region}
                        </span>
                        <span className="text-[11px] font-medium text-[#64748b]">
                          XCMG News · {article.dateLabel}
                        </span>
                        {index === 0 ? (
                          <span className="sr-only">Latest global story</span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue-muted)]">
                        XCMG {article.region}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-[#0f172a] md:text-xl">
                        {article.headline}
                      </h3>
                      <div className="mt-6 space-y-5 border-t border-[var(--border-subtle)] pt-6">
                        {article.blocks.map((block) => (
                          <div key={block.heading}>
                            <p className="text-sm font-semibold text-[var(--brand-blue)]">{block.heading}</p>
                            <p className="mt-2 text-sm leading-relaxed text-[#475569]">{block.body}</p>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
