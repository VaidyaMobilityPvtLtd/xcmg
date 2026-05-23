import Link from "next/link";
import SiteHeader from "../_components/SiteHeader";
import SiteFooter from "../_components/SiteFooter";
import {
  PageHero,
  PageHeroBreadcrumbs,
  pageHeroActionsClass,
  pageHeroEyebrowBrandClass,
  pageHeroLeadBrandClass,
  pageHeroTitleBrandClass,
} from "../_components/PageHero";
import { pageHeroSrc } from "../_data/pageHeroBanners";

type BrochureCategory = {
  title: string;
  files: { label: string; href: string }[];
};

/** PDF paths under `public/` — labels match `displayEquipment.ts` model strings. */
const brochureCategories: BrochureCategory[] = [
  {
    title: "Earth moving · Excavator",
    files: [
      { label: "XE140I-K", href: "/brochures/catalog/Xcmg%20pdf/Excavator/XE%20140I-K.pdf" },
      { label: "XE215I-K", href: "/brochures/catalog/Xcmg%20pdf/Excavator/XE%20215%20I-K.pdf" },
      { label: "XE230CLC", href: "/brochures/catalog/Xcmg%20pdf/Excavator/XE%20230CLC.pdf" },
      { label: "XE380C", href: "/brochures/catalog/Xcmg%20pdf/Excavator/XE%20380C%20.pdf" },
    ],
  },
  {
    title: "Earth moving · Wheelloader",
    files: [
      { label: "Lw200kv", href: "/brochures/catalog/Xcmg%20pdf/wheelloader%20pdf/LW200KV.pdf" },
      { label: "XC936", href: "/brochures/catalog/Xcmg%20pdf/wheelloader%20pdf/XC936.pdf" },
      { label: "XC958", href: "/brochures/catalog/Xcmg%20pdf/wheelloader%20pdf/XC958.pdf" },
      { label: "XC938EV", href: "/brochures/catalog/Xcmg%20pdf/wheelloader%20pdf/XC938-EV.pdf" },
      { label: "XC968EV", href: "/brochures/catalog/Xcmg%20pdf/wheelloader%20pdf/XC968-EV.pdf" },
    ],
  },
  {
    title: "Road building · Grader",
    files: [
      { label: "GR150", href: "/brochures/catalog/Xcmg%20pdf/motor%20grader/XCMG%20GR150.pdf" },
      { label: "GR165", href: "/brochures/catalog/Xcmg%20pdf/motor%20grader/XCMG%20GR165.pdf" },
    ],
  },
  {
    title: "Road building · Pneumatic roller",
    files: [{ label: "XP163", href: "/brochures/catalog/Xcmg%20pdf/pneumatic%20roller/XP163.pdf" }],
  },
  {
    title: "Hoisting · Truck crane",
    files: [
      { label: "XCT25L4_Y", href: "/brochures/catalog/Xcmg%20pdf/truck%20crane/XCT25L4_Y1.pdf" },
      { label: "XCT25-Y1", href: "/brochures/catalog/Xcmg%20pdf/truck%20crane/XCT25L4_Y1.pdf" },
      { label: "XCT50-Y1", href: "/brochures/catalog/Xcmg%20pdf/truck%20crane/XCT50_Y1.pdf" },
      { label: "XCT80-Y1", href: "/brochures/catalog/Xcmg%20pdf/truck%20crane/XCT80_Y1.pdf" },
      { label: "XCT110-Y1", href: "/brochures/catalog/Xcmg%20pdf/truck%20crane/1_XCT110_Y.pdf" },
    ],
  },
  {
    title: "Hoisting · Truck mounted crane",
    files: [{ label: "SQS68TL-5", href: "/brochures/catalog/Xcmg%20pdf/truck%20mounted%20crane/SQS68TL-4%20.pdf" }],
  },
  {
    title: "Underground mining · Road header",
    files: [
      { label: "XTR4/260", href: "/brochures/catalog/Xcmg%20pdf/Roadheader/Road%20Header%204-260.pdf" },
      { label: "XTR6/280", href: "/brochures/catalog/Xcmg%20pdf/Roadheader/Road%20Header%206-280.pdf" },
      { label: "XTR7/360", href: "/brochures/catalog/Xcmg%20pdf/Roadheader/Road%20Header%207-360.pdf" },
      { label: "Road header overview", href: "/brochures/catalog/Xcmg%20pdf/Roadheader/Road%20Header%20Brochure_.pdf" },
    ],
  },
  {
    title: "Underground mining · Drill jumbo",
    files: [
      { label: "XUD135", href: "/brochures/catalog/Xcmg%20pdf/piling%20machinery/Jumbo%20Drilling%20XTD%20135.pdf" },
      { label: "XUD295", href: "/brochures/catalog/Xcmg%20pdf/piling%20machinery/Jumbo%20Drilling%20XTD%20295.pdf" },
      {
        label: "XUD275 (regional drilling catalog)",
        href: "/brochures/catalog/Xcmg%20pdf/piling%20machinery/South%20Asia%20piling%20rig%20catalog.pdf",
      },
    ],
  },
  {
    title: "Drilling machinery · Drilling rig",
    files: [
      {
        label: "XR138E · XR158E · XR178E · XR210C · XR240E (South Asia catalog)",
        href: "/brochures/catalog/Xcmg%20pdf/piling%20machinery/South%20Asia%20piling%20rig%20catalog.pdf",
      },
    ],
  },
  {
    title: "Concrete machinery",
    files: [
      { label: "SLM4", href: "/brochures/catalog/Xcmg%20pdf/concrete%20machinery/SLM4EJ.pdf" },
      { label: "XS30175 Shotcrete", href: "/brochures/catalog/Xcmg%20pdf/concrete%20machinery/XS3017S%20Shotcrete.pdf" },
    ],
  },
];

const toCategoryId = (title: string) => `category-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
const brochureCount = brochureCategories.reduce((sum, category) => sum + category.files.length, 0);

export default function BrochuresPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#eef4ff_0%,_#f4f6f9_46%,_#f7f9fc_100%)] text-[#0f172a] [color-scheme:light]">
        <PageHero variant="brand" imageSrc={pageHeroSrc.downloadBrochures} imageAlt="Model brochures and documentation">
          <PageHeroBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Download brochure", current: true },
            ]}
          />
          <p className={`mt-4 ${pageHeroEyebrowBrandClass}`}>Model brochures</p>
          <h1 className={`mt-3 ${pageHeroTitleBrandClass}`}>Find your model brochure</h1>
          <p className={pageHeroLeadBrandClass}>
            Only models with a brochure PDF on file are listed below—the full Nepal lineup remains on Products. Labels match the
            catalog; PDF filenames may differ from the model code (e.g. XP163 listed with file XP163.pdf).
          </p>
          <div className={pageHeroActionsClass}>
            <a href="mailto:info@uheem.com.np?subject=Brochure%20request" className="inner-cta-primary">
              Request by email
            </a>
            <Link href="/products" className="inner-cta-ghost">
              View equipment
            </Link>
          </div>
        </PageHero>

        <section className="border-b border-[var(--border-subtle)] bg-[#f6f8fb]">
          <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-12 md:px-6 md:py-16">
            <div className="rounded-xl border border-[var(--border-subtle)] bg-white px-5 py-4 shadow-[0_2px_18px_-12px_rgb(15_23_42_/_0.2)] md:px-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">Brochure center</p>
                  <p className="mt-1 text-sm text-[#64748b]">Choose a category, then download the brochure PDF.</p>
                </div>
                <div className="inline-flex w-fit items-center rounded-md border border-[var(--border-subtle)] bg-[#f8fafc] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#475569]">
                  {brochureCount} brochures
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-xl border border-[var(--border-subtle)] bg-white p-4 shadow-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">Categories</p>
                  <nav className="mt-3 space-y-1.5" aria-label="Brochure categories">
                    {brochureCategories.map((category) => (
                      <a
                        key={category.title}
                        href={`#${toCategoryId(category.title)}`}
                        className="flex items-center justify-between rounded-md border border-transparent px-3 py-2 text-sm font-medium text-[#334155] transition-colors hover:border-[var(--border-subtle)] hover:bg-[#f8fafc] hover:text-[var(--brand-blue)]"
                      >
                        <span>{category.title}</span>
                        <span className="text-xs text-[#94a3b8]">{category.files.length}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              <div className="space-y-5">
                {brochureCategories.map((category) => (
                  <section
                    key={category.title}
                    id={toCategoryId(category.title)}
                    className="overflow-hidden rounded-xl border border-[var(--border-subtle)] bg-white shadow-[0_2px_16px_-12px_rgb(15_23_42_/_0.18)]"
                  >
                    <div className="flex items-center justify-between border-b border-[var(--border-subtle)] bg-[#f9fbff] px-5 py-4 md:px-6">
                      <h3 className="text-base font-semibold tracking-tight text-[var(--brand-blue)] md:text-lg">{category.title}</h3>
                      <span className="rounded border border-[var(--border-subtle)] bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#64748b]">
                        {category.files.length} items
                      </span>
                    </div>
                    <ul className="divide-y divide-[var(--border-subtle)]">
                      {category.files.map((file) => (
                        <li key={`${category.title}-${file.label}`}>
                          <a
                            href={file.href}
                            download
                            className="group flex items-center justify-between gap-4 px-5 py-3.5 text-sm text-[#334155] transition-colors hover:bg-[#f8fbff] hover:text-[var(--brand-blue)] md:px-6"
                          >
                            <span className="truncate font-medium">{file.label}</span>
                            <span className="inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue)]">
                              Download
                              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                                →
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-[var(--brand-blue)] py-14 text-white md:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--brand-yellow)]/10 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto flex w-[92vw] max-w-[1600px] flex-col gap-10 px-4 md:flex-row md:items-center md:justify-between md:gap-12 md:px-6">
            <div className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">Next step</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">Need a printed pack or a model list?</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-[15px]">
                Call or email UHEEM—we can align brochures with your project and the models stocked for Nepal.
              </p>
            </div>
            <div className="flex flex-shrink-0 flex-wrap gap-3">
              <Link href="/products" className="inner-cta-primary shadow-lg shadow-black/20 hover:shadow-xl">
                Explore products
              </Link>
              <a
                href="mailto:info@uheem.com.np"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border-2 border-white/35 bg-white/10 px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-[transform,background-color] duration-200 hover:bg-white/20 active:translate-y-px"
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}