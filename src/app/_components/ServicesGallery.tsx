import Image from "next/image";
import Link from "next/link";
import { serviceGalleryItems } from "../_data/servicesGallery";
import { siteShellClass } from "../_data/siteShell";

const [featured, ...supporting] = serviceGalleryItems;

const galleryHighlights = [
  "Workshop-ready technicians",
  "Genuine XCMG parts",
  "Nationwide field support",
] as const;

function FeaturedPanel({
  item,
}: {
  item: (typeof serviceGalleryItems)[number];
}) {
  return (
    <figure className="group relative isolate min-h-[360px] overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[#0b1f4a] shadow-[0_24px_60px_-32px_rgb(11_60_145_/_0.45)] ring-1 ring-black/[0.04] sm:min-h-[420px] lg:min-h-[580px]">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        priority
        className="object-cover object-[center_22%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        sizes="(max-width: 1024px) 100vw, 58vw"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,38,95,0.15)_0%,rgba(11,60,145,0.35)_42%,rgba(11,31,74,0.92)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[var(--brand-yellow)] shadow-[0_0_20px_rgba(232,195,26,0.45)]"
        aria-hidden
      />
      <figcaption className="absolute inset-x-0 bottom-0 z-[1] p-6 sm:p-8 lg:p-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-yellow)]">01 · People</p>
        <h3 className="mt-3 max-w-lg text-2xl font-semibold tracking-tight text-white sm:text-[1.65rem] lg:text-3xl">
          {item.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">{item.caption}</p>
      </figcaption>
    </figure>
  );
}

function SupportingPanel({
  item,
  index,
}: {
  item: (typeof serviceGalleryItems)[number];
  index: number;
}) {
  const label = index === 0 ? "02 · Parts" : "03 · Maintenance";

  return (
    <figure className="interactive-card flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white shadow-sm ring-1 ring-black/[0.03]">
      <div className="group relative aspect-[4/5] min-h-[220px] overflow-hidden bg-[#0b1f4a] sm:min-h-[240px] lg:aspect-auto lg:min-h-0 lg:flex-1">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          sizes="(max-width: 1024px) 50vw, 22vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1f4a]/55 via-transparent to-transparent opacity-80"
          aria-hidden
        />
      </div>
      <figcaption className="border-t border-[var(--border-subtle)] bg-gradient-to-br from-white to-[#f8fafc] p-5 sm:p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">{label}</p>
        <h3 className="mt-2 text-lg font-semibold tracking-tight text-[var(--brand-blue)]">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#475569]">{item.caption}</p>
      </figcaption>
    </figure>
  );
}

export function ServicesGallery() {
  if (!featured) return null;

  return (
    <section
      className="relative overflow-hidden border-b border-[var(--border-subtle)] bg-white"
      aria-labelledby="services-gallery-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[var(--brand-blue)]/[0.04] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[var(--brand-yellow)]/[0.08] blur-3xl"
        aria-hidden
      />

      <div className={`relative ${siteShellClass} py-14 md:py-16 lg:py-20`}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
              In the field
            </p>
            <div className="mt-3 border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6">
              <h2
                id="services-gallery-heading"
                className="text-2xl font-semibold tracking-tight text-[var(--brand-blue)] md:text-3xl md:leading-tight lg:text-[2rem]"
              >
                Service in action across Nepal
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#475569] md:text-[17px]">
                Real workshop care, genuine components, and trained technicians — the support behind every XCMG machine
                on site.
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-2 lg:col-span-5 lg:justify-end" role="list">
            {galleryHighlights.map((label) => (
              <li
                key={label}
                className="rounded-full border border-[var(--border-subtle)] bg-[#f8fafc] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-blue)]"
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <FeaturedPanel item={featured} />
          </div>

          <div className="grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-6">
            {supporting.map((item, index) => (
              <SupportingPanel key={item.src} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-[#64748b]">
            Need workshop support, spare parts, or a field visit? UHEEM service teams are structured to respond across
            Nepal.
          </p>
          <Link
            href="/services/service-outlets"
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg border border-[var(--brand-blue)] bg-[var(--brand-blue)] px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#0a3376]"
          >
            Service outlets
          </Link>
        </div>
      </div>
    </section>
  );
}
