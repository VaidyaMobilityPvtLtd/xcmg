import Image from "next/image";
import Link from "next/link";
import { preload } from "react-dom";
import SiteHeader from "./_components/SiteHeader";
import SiteFooter from "./_components/SiteFooter";
import HeroSlider from "./_components/HeroSlider";
import EquipmentCategoryExplorer from "./_components/EquipmentCategoryExplorer";
import { ProductCategoryCards } from "./_components/ProductCategoryCards";
import { displayEquipmentCatalog } from "./_data/displayEquipment";
import { heroSlides } from "./_data/heroSlides";

const newsActivities = [
  {
    date: "Update",
    title: "Product availability and category updates",
    excerpt:
      "Nepal-specific product categories and specifications are organized here for quick reference and selection.",
  },
  {
    date: "Update",
    title: "Service coverage and support information",
    excerpt:
      "Service outlets, spare parts guidance, and maintenance support details are available for Nepal customers.",
  },
  {
    date: "Update",
    title: "News and media announcements",
    excerpt:
      "Verified announcements and media highlights relevant to XCMG Nepal are published in this section.",
  },
];

const aboutSplitPairedGridClassName =
  "mx-auto grid w-[92vw] max-w-[1600px] px-4 md:grid-cols-2 md:items-stretch md:min-h-0 md:px-6";


const aboutPairedImageFrameClassName =
  "relative min-h-[220px] w-full flex-1 overflow-hidden sm:min-h-[260px] md:h-full md:min-h-0";

const aboutTextLeftColumnPairedClassName =
  "order-1 flex min-h-0 w-full min-w-0 flex-col justify-start bg-gradient-to-br from-white via-white to-[#f5f8fb] px-4 py-6 sm:px-7 md:h-full md:py-7 md:pl-10 md:pr-8 lg:pl-12 lg:pr-10";

const aboutImageRightColumnClassName =
  "order-2 flex min-h-[220px] flex-col border-t border-[var(--border-subtle)] bg-[#eef2f6] sm:min-h-[260px] md:h-full md:min-h-0 md:border-l md:border-t-0 md:border-[var(--border-subtle)]";

export default function Home() {
  for (let i = 0; i < heroSlides.length; i++) {
    const slide = heroSlides[i];
    preload(slide.src, {
      as: "image",
      fetchPriority: i === 0 ? "high" : i <= 2 ? "auto" : "low",
    });
  }

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-transparent text-[#0f172a]">
        <HeroSlider />

        <section
          className="section-vision border-b border-[var(--border-subtle)] pt-12 md:pt-14"
          aria-labelledby="tagline-foundations"
        >
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 md:px-6">
            <div className="mx-auto max-w-2xl pb-10 text-center md:pb-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                Vision
              </p>
              <h2
                id="tagline-foundations"
                className="mt-4 text-lg font-semibold leading-snug tracking-tight text-[var(--brand-blue)] sm:text-xl md:text-2xl"
              >
                Building Foundations for a Better Tomorrow
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-[var(--brand-yellow)]" aria-hidden />
            </div>
          </div>
        </section>

        <section className="section-about border-b border-[var(--border-subtle)]" aria-labelledby="about-xcmg-intro">
          <div className={`split-section group ${aboutSplitPairedGridClassName}`}>
            <div className={`${aboutImageRightColumnClassName} md:order-1`}>
              <div className={`split-section-image-wrap ${aboutPairedImageFrameClassName}`}>
                <Image
                  src="/land-page-home.png"
                  alt="XCMG excavator working in a quarry"
                  fill
                  priority
                  className="split-section-img object-cover object-[center_35%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10"
                  aria-hidden
                />
              </div>
            </div>

            <div className={`${aboutTextLeftColumnPairedClassName} md:order-2`}>
              <div className="w-full text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">
                  Corporate overview
                </p>
                <div className="split-section-accent mt-3 border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6 md:mt-4">
                  <h2
                    id="about-xcmg-intro"
                    className="split-section-heading max-w-none font-bold tracking-[-0.025em]"
                  >
                    <span className="block whitespace-nowrap bg-gradient-to-br from-[#051a3d] via-[var(--brand-blue)] to-[#1a4db3] bg-clip-text text-base leading-snug text-transparent sm:text-lg sm:leading-snug md:text-xl md:leading-tight lg:text-[1.35rem]">
                      XCMG equipment for infrastructure and industry
                    </span>
                  </h2>
                  <div className="mt-4 h-px max-w-xl bg-gradient-to-r from-[var(--border-subtle)] via-[var(--border-subtle)] to-transparent md:mt-5" aria-hidden />
                  <div className="split-section-copy mt-5 md:mt-6">
                    <p>
                      <span className="font-semibold text-[var(--brand-blue)]">XCMG</span>{" "}
                      is a leading global construction machinery manufacturer, consistently ranked among the
                      world&apos;s top manufacturers. XCMG has retained its No. 1 position in China&apos;s construction
                      machinery industry and is ranked No. 3 in the global construction machinery industry. With decades
                      of innovation and engineering excellence, it delivers high-performance equipment for
                      infrastructure and industrial development. In Nepal, XCMG combines proven global technology with
                      local expertise to support infrastructure growth, productivity, and sustainable development, guided
                      by responsibility, integrity, and excellence.
                    </p>
                  </div>
                </div>
                <div className="mt-6 max-w-xl md:mt-7">
                  <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--brand-blue-muted)]">
                    Products · After-sales service
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[var(--border-subtle)] pt-5 md:mt-6 md:pt-6">
                    <a
                      href="/AboutUs"
                      className="home-cta inline-flex min-h-[44px] items-center justify-center border border-[#0b3c91] bg-[#0b3c91] px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white hover:bg-[#0a3376]"
                    >
                      Company profile
                    </a>
                    <a
                      href="/products"
                      className="home-cta home-cta-outline inline-flex min-h-[44px] items-center justify-center border border-[var(--border-subtle)] bg-white/90 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0b3c91]"
                    >
                      View product categories
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-b border-[var(--border-subtle)] bg-gradient-to-b from-white to-[#f4f6f9] py-12 md:py-16"
          aria-labelledby="tagline-standard"
        >
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 md:px-6">
            <div className="commitment-banner section-commitment-card group relative min-h-[280px] overflow-hidden border border-[var(--border-subtle)] px-4 py-8 sm:min-h-0 sm:px-6 sm:py-10 md:px-10 md:py-12">
              <Image
                src="/middleLandingPageBanner.png"
                alt="XCMG construction machinery lineup"
                fill
                className="commitment-bg object-cover object-[center_42%] sm:object-[74%_50%]"
                sizes="(max-width: 768px) 100vw, 92vw"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,38,95,0.94)_0%,rgba(11,60,145,0.88)_45%,rgba(11,60,145,0.72)_100%)] sm:bg-[linear-gradient(94deg,rgba(6,38,95,0.92)_0%,rgba(11,60,145,0.9)_38%,rgba(11,60,145,0.68)_63%,rgba(11,60,145,0.3)_100%)]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 left-0 w-[42%] bg-[radial-gradient(circle_at_8px_8px,rgba(255,255,255,0.12)_2px,transparent_2.5px)] bg-[length:18px_18px] opacity-55"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/30 backdrop-blur-[1px]" aria-hidden />
              <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-start md:gap-10">
                <div className="h-1 w-14 shrink-0 bg-[var(--brand-yellow)] shadow-[0_0_16px_rgba(232,195,26,0.55)] md:mt-2" aria-hidden />
                <div className="min-w-0 border-l-[3px] border-[var(--brand-yellow)] pl-4 md:pl-6">
                  <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[var(--brand-yellow)] drop-shadow-[0_1px_2px_rgba(15,23,42,0.45)] sm:text-sm md:text-[15px]">
                    Commitment
                  </p>
                  <h2
                    id="tagline-standard"
                    className="mt-3 max-w-3xl text-2xl font-bold leading-snug tracking-tight text-white [text-shadow:0_2px_14px_rgba(15,23,42,0.55),0_1px_0_rgba(255,253,235,0.15)] sm:text-3xl md:text-[2.125rem] md:leading-[1.12] lg:text-[2.5rem] lg:leading-tight"
                  >
                    Strength You Can Always Trust
                  </h2>
                  <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-white [text-shadow:0_1px_10px_rgba(15,23,42,0.5)] sm:text-lg md:text-xl md:leading-relaxed">
                    <span className="text-[#fff9e6]">Durable equipment</span>
                    {" "}designed to deliver reliable results and maximum productivity on every construction site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-about border-b border-[var(--border-subtle)]" aria-labelledby="about-xcmg-intro-2">
          <div className={`split-section group ${aboutSplitPairedGridClassName}`}>
            <div className={aboutTextLeftColumnPairedClassName}>
              <div className="w-full text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">
                  UHEEM
                </p>
                <div className="split-section-accent mt-3 border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6 md:mt-4">
                  <h2
                    id="about-xcmg-intro-2"
                    className="split-section-heading max-w-xl font-bold tracking-[-0.025em]"
                  >
                    <span className="block text-left bg-gradient-to-br from-[#051a3d] via-[var(--brand-blue)] to-[#1a4db3] bg-clip-text text-base leading-snug text-transparent sm:text-lg sm:leading-snug md:text-xl md:leading-tight lg:text-[1.35rem]">
                      United Heavy Equipment &amp; Earth Movers Pvt. Ltd.
                    </span>
                    <span className="mt-1 block text-left bg-gradient-to-br from-[#051a3d] via-[var(--brand-blue)] to-[#1a4db3] bg-clip-text text-base leading-snug text-transparent sm:text-lg sm:leading-snug md:text-xl md:leading-tight lg:text-[1.35rem]">
                      (XCMG Nepal)
                    </span>
                    <span className="mt-3 block max-w-none whitespace-nowrap bg-gradient-to-br from-[#051a3d] via-[var(--brand-blue)] to-[#1a4db3] bg-clip-text text-sm leading-snug text-transparent sm:mt-3.5 sm:text-base sm:leading-snug md:text-lg md:leading-tight lg:text-xl">
                      Powering Progress, Building the Nation.
                    </span>
                  </h2>
                  <div className="mt-4 h-px max-w-xl bg-gradient-to-r from-[var(--border-subtle)] via-[var(--border-subtle)] to-transparent md:mt-5" aria-hidden />
                  <div className="split-section-copy mt-5 md:mt-6">
                    <p>
                      United Heavy Equipment &amp; Earth Movers Pvt. Ltd. (UHEEM), established in 2017, is the sole authorized
                      distributor of XCMG in Nepal. Guided by XCMG&apos;s values of responsibility, integrity, and achievement,
                      UHEEM provides advanced, reliable construction and earthmoving machinery tailored to customer needs.
                    </p>
                    <p className="text-muted">
                      Backed by XCMG&apos;s technology and engineering strength, the company supports Nepal&apos;s growth in
                      infrastructure, transportation, energy, and urban development through sustainable practices, dependable
                      service, and customer-focused solutions that help drive national progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={aboutImageRightColumnClassName}>
              <div className={`split-section-image-wrap ${aboutPairedImageFrameClassName}`}>
                <Image
                  src="/landing-2.png"
                  alt="XCMG wheel loader at a construction site"
                  fill
                  priority
                  className="split-section-img scale-[1.08] object-cover object-[84%_35%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[var(--border-subtle)] bg-gradient-to-b from-[var(--surface-muted)] to-white py-10 md:py-14 lg:py-16">
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 md:px-6">
            <div className="mb-8 md:mb-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                Equipment
              </p>
              <h2 className="mt-2 border-l-4 border-[var(--brand-yellow)] pl-3 text-xl font-semibold tracking-tight text-[var(--brand-blue)] md:text-2xl">
                Find your equipment
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748b]">
                Pick a category, filter by machine type in the left column, then select a model for specs and Nepal
                pricing enquiries.
              </p>
            </div>
          </div>

          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 md:px-6">
            <div className="overflow-hidden rounded-md border border-[var(--border-subtle)] bg-[var(--surface)] shadow-[0_8px_40px_-16px_rgb(11_60_145_/_0.15)]">
              <EquipmentCategoryExplorer />
            </div>
          </div>
        </section>

        <section className="section-trust border-b border-[#082d6e]">
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-10 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="max-w-xl text-sm font-semibold leading-relaxed text-white sm:text-base md:text-lg">
                Construction machinery solutions for{" "}
                <span className="text-[var(--brand-blue-soft)]">Nepal</span> projects.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/products"
                  className="inline-flex items-center justify-center rounded-none bg-[var(--brand-yellow)] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0f172a] hover:bg-[var(--brand-yellow-hover)]"
                >
                  Explore Products
                </a>
                <a
                  href="/services/service-outlets"
                  className="inline-flex items-center justify-center rounded-none border border-white/40 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-white/15"
                >
                  Service Outlets
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-news border-b border-[var(--border-subtle)]">
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-12 md:px-6 md:py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">Updates</p>
                <h2 className="mt-2 border-l-4 border-[var(--brand-yellow)] pl-3 text-lg font-semibold text-[var(--brand-blue)] md:text-xl">
                  News Update
                </h2>
              </div>
              <a
                href="/news"
                className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0b3c91] hover:text-[#0a3376]"
              >
                View all news →
              </a>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-1">
              {newsActivities.slice(0, 1).map((n) => (
                <article
                  key={n.title}
                  className="interactive-card flex flex-col border border-[var(--border-subtle)] bg-white/95 p-6 shadow-sm"
                >
                  <p className="text-[11px] font-semibold text-[#94a3b8]">{n.date}</p>
                  <h3 className="mt-3 line-clamp-2 text-sm font-semibold leading-6 text-[var(--brand-blue)]">{n.title}</h3>
                  <p className="mt-3 line-clamp-3 text-xs leading-5 text-[#64748b]">{n.excerpt}</p>
                  <a
                    href="/news"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold text-[#0b3c91] decoration-[var(--brand-yellow)] decoration-2 underline-offset-4 hover:text-[#0a3376] hover:underline"
                  >
                    Read more <span aria-hidden="true">→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="product-categories" className="section-solutions border-b border-[var(--border-subtle)]">
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-12 md:px-6 md:py-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
                  Product categories
                </p>
                <h2 className="mt-2 text-lg font-semibold tracking-tight text-[var(--brand-blue)] md:text-xl">
                  Nepal catalogue preview
                </h2>
                <p className="mt-2 max-w-xl text-sm text-[#64748b]">
                  Same segments as the{" "}
                  <Link href="/products" className="font-medium text-[var(--brand-blue)] hover:text-[#0a3376] hover:underline">
                    products
                  </Link>{" "}
                  page—open a category for models and specifications.
                </p>
              </div>
              <Link
                href="/products"
                className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0b3c91] hover:text-[#0a3376] sm:self-end"
              >
                Full catalogue →
              </Link>
            </div>

            <ProductCategoryCards catalog={displayEquipmentCatalog} />
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
