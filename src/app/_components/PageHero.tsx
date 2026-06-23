import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { pageHeroDefaultInnerSrc } from "../_data/pageHeroBanners";

export type PageHeroCrumb = {
  label: string;
  href?: string;
  current?: boolean;
};

type PageHeroProps = {
  variant?: "light" | "brand";
  imageSrc?: string;
  imageAlt: string;
  imageClassName?: string;
  imageQuality?: number;
  overlay?: ReactNode;
  padding?: "default" | "compact";
  priority?: boolean;
  surfaceClassName?: string;
  imageBackdropClassName?: string;
  /** Vertical placement of hero copy. `center` reads better for long intros (e.g. Services). */
  contentAlign?: "end" | "center";
  /** Override default min-height of the hero text shell (Tailwind classes). */
  shellMinHeightClass?: string;
  /** Width cap for hero copy (default matches most inner pages). Use `max-w-none` to align with full header shell. */
  contentMaxWidthClass?: string;
  children: ReactNode;
};


const paddingClass = {
  default: "py-7 sm:py-8 md:py-10",
  compact: "py-7 sm:py-8 md:py-10",
} as const;


/** Light (non-brand) heroes — shorter shell when a light variant is used. */
const heroShellMinHeightClassLight = "min-h-[clamp(320px,35dvh,420px)]";

/** Brand heroes: consistent desktop height; mobile can grow slightly so CTAs are not clipped. */
const heroHeightClassBrand =
  "min-h-[clamp(360px,52dvh,580px)] md:h-[clamp(380px,44dvh,520px)]";

/** Same treatment as Services hero: full-bleed photo, no extra wash, anchor slightly above center. */
const brandImageClass = "object-cover object-[center_38%]";
const brandSurface = "bg-[#0b1f4a]";
const brandBackdrop = "bg-[#0b1f4a]";

/** Lighter brand wash (same gradient as the Services hero reference). */
export function BrandHeroOverlaySoft() {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-br from-[#051a3d]/68 via-[#0b3c91]/38 to-[#0b3c91]/12"
      aria-hidden
    />
  );
}

export function PageHeroBreadcrumbs({ items }: { items: PageHeroCrumb[] }) {
  if (items.length === 0) return null;
  return (
    <nav
      className="line-clamp-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {index > 0 ? (
            <span className="mx-2 text-white/40" aria-hidden>
              /
            </span>
          ) : null}
          {item.href && !item.current ? (
            <Link href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span
              className={
                item.current ? "text-[var(--brand-yellow)]" : "text-white/90"
              }
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  variant = "light",
  imageSrc = pageHeroDefaultInnerSrc,
  imageAlt,
  imageClassName,
  imageQuality,
  overlay,
  padding = "default",
  priority = true,
  surfaceClassName,
  imageBackdropClassName,
  contentAlign = "end",
  shellMinHeightClass,
  contentMaxWidthClass = "max-w-4xl",
  children,
}: PageHeroProps) {
  const isBrand = variant === "brand";

  const resolvedImageQuality = imageQuality ?? (isBrand ? 100 : 75);

  const resolvedImageClass =
    imageClassName ?? (isBrand ? brandImageClass : "object-cover object-center opacity-25");
  const resolvedSurface = surfaceClassName ?? (isBrand ? brandSurface : "bg-[#f8fafc]");
  const resolvedBackdrop = imageBackdropClassName ?? (isBrand ? brandBackdrop : "bg-[#f8fafc]");
  const resolvedOverlay = overlay !== undefined ? overlay : isBrand ? <BrandHeroOverlaySoft /> : null;

  const resolvedShellMinHeight =
    shellMinHeightClass ?? (isBrand ? undefined : heroShellMinHeightClassLight);
  const contentJustify = contentAlign === "center" ? "justify-center" : "justify-end";

  return (
    <section
      className={[
        "relative isolate overflow-hidden border-b border-[var(--border-subtle)]",
        resolvedSurface,
        isBrand ? heroHeightClassBrand : "",
      ].join(" ")}
    >
      <div className={["pointer-events-none absolute inset-0 z-0", resolvedBackdrop].join(" ")}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          quality={resolvedImageQuality}
          sizes="100vw"
          className={resolvedImageClass}
        />
        {resolvedOverlay}
        {isBrand ? (
          <div
            className="absolute inset-x-0 bottom-0 z-[1] h-28 bg-gradient-to-t from-[#0b1f4a] via-[#0b1f4a]/40 to-transparent sm:h-32"
            aria-hidden
          />
        ) : null}
      </div>
      <div
        className={[
          "relative z-10 mx-auto box-border flex w-[92vw] max-w-[1600px] flex-col px-4 md:px-6",
          isBrand ? "h-full" : resolvedShellMinHeight,
          paddingClass[padding],
          contentJustify,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={`w-full ${contentMaxWidthClass}`}>{children}</div>
      </div>
    </section>
  );
}

export const pageHeroTitleClass =
  "line-clamp-3 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl md:text-[2.5rem] md:leading-tight lg:text-5xl xl:text-[3.25rem]";

export const pageHeroTitleBrandClass =
  "line-clamp-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-tight lg:text-5xl xl:text-[3.25rem]";

/** Long legal or brand titles — allow full wrap without clamping on small screens. */
export const pageHeroTitleBrandLongClass =
  "line-clamp-3 text-balance text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[2.25rem] md:leading-tight lg:text-[2.75rem] xl:text-5xl";

export const pageHeroEyebrowClass =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-[#475569]";

export const pageHeroEyebrowBrandClass =
  "text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-yellow)]";

export const pageHeroLeadClass =
  "mt-3 max-w-2xl text-sm leading-relaxed text-[#475569] sm:mt-4 md:text-base";

export const pageHeroLeadBrandClass =
  "mt-4 max-w-2xl line-clamp-4 text-pretty text-sm leading-relaxed text-white/88 sm:mt-4 md:mt-5 md:text-base";

/** Wider lead for long marketing paragraphs on brand heroes. */
export const pageHeroLeadBrandWideClass =
  "mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-white/88 sm:mt-5 md:mt-6 md:text-[15px] md:leading-relaxed";

export const pageHeroActionsClass = "page-hero-actions mt-5 sm:mt-6";
