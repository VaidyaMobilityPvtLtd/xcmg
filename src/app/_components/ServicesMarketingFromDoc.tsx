import {
  serviceMarketingIntro,
  serviceStandOutRows,
  serviceWhyChooseRows,
} from "../_data/servicesContent";
import { siteShellClass } from "../_data/siteShell";

const introStats = [
  { value: "24/7", label: "Support availability" },
  { value: "100%", label: "Genuine XCMG parts" },
  { value: "Nepal", label: "Nationwide coverage" },
] as const;

function StandOutIcon({ index }: { index: number }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24" as const,
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (index) {
    case 0:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case 1:
      return (
        <svg {...common}>
          <path d="M3 17h13v-5H3v5ZM16 17h4l1-4h-5v4ZM5 12V7h11v5M7 7V5h7v2" />
        </svg>
      );
    case 2:
      return (
        <svg {...common}>
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case 3:
      return (
        <svg {...common}>
          <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
        </svg>
      );
    case 4:
      return (
        <svg {...common}>
          <path d="M12 3v18M3 12h18" />
        </svg>
      );
    case 5:
      return (
        <svg {...common}>
          <path d="M14.7 6.3a1 1 0 0 0-1.4 0l-7 7a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l7-7a1 1 0 0 0 0-1.4l-2.6-2.6Z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18" />
        </svg>
      );
  }
}

function StandOutCard({
  row,
  index,
  featured = false,
}: {
  row: (typeof serviceStandOutRows)[number];
  index: number;
  featured?: boolean;
}) {
  const number = String(index + 1).padStart(2, "0");

  if (featured) {
    return (
      <li className="interactive-card group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-[#fffdf5] via-white to-[#f8fafc] p-6 shadow-sm ring-1 ring-black/[0.03] min-[480px]:col-span-2 min-[480px]:flex-row min-[480px]:items-center min-[480px]:gap-8 min-[480px]:p-8 xl:col-span-3">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[var(--brand-yellow)]"
          aria-hidden
        />
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--brand-yellow)]/20 text-[var(--brand-blue)] ring-1 ring-[var(--brand-yellow)]/35">
          <StandOutIcon index={index} />
        </span>
        <div className="mt-5 min-w-0 min-[480px]:mt-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#94a3b8]">{number}</p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-[var(--brand-blue)] sm:text-2xl">{row.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#475569] md:text-base">{row.body}</p>
        </div>
      </li>
    );
  }

  return (
    <li className="interactive-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white p-5 shadow-sm ring-1 ring-black/[0.02] md:p-6">
      <div
        className="pointer-events-none absolute inset-y-4 left-0 w-[3px] rounded-full bg-[var(--brand-yellow)]"
        aria-hidden
      />
      <div className="flex items-start justify-between gap-3 pl-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f1f5f9] text-[var(--brand-blue)] ring-1 ring-[var(--border-subtle)] transition-colors duration-300 group-hover:bg-[var(--brand-yellow)]/15 group-hover:ring-[var(--brand-yellow)]/30">
          <StandOutIcon index={index} />
        </span>
        <span className="text-[11px] font-bold tabular-nums tracking-[0.18em] text-[#cbd5e1]">{number}</span>
      </div>
      <h3 className="mt-4 pl-3 text-base font-bold leading-snug tracking-tight text-[#0f172a] md:text-lg">{row.title}</h3>
      <p className="mt-3 flex-1 pl-3 text-sm leading-relaxed text-[#475569] md:text-[15px]">{row.body}</p>
    </li>
  );
}

export function ServicesMarketingFromDoc() {
  const regularStandOut = serviceStandOutRows.slice(0, -1);
  const featuredStandOut = serviceStandOutRows[serviceStandOutRows.length - 1];

  return (
    <section
      id="services-overview"
      className="scroll-mt-28 border-b border-[var(--border-subtle)] bg-white"
      aria-label="XCMG Nepal service information"
    >
      <div className={`${siteShellClass} py-14 md:py-16 lg:py-20`}>
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[#f8fafc] p-6 md:p-8 lg:p-10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[var(--brand-yellow)]"
            aria-hidden
          />
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-10">
            <div className="space-y-4 pl-3 text-base leading-relaxed text-[#334155] md:text-[17px] md:leading-relaxed">
              {serviceMarketingIntro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="grid grid-cols-1 gap-3 md:gap-4" role="list">
              {introStats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-xl border border-[var(--border-subtle)] bg-white px-4 py-4 text-center shadow-sm md:px-5 md:py-5 md:text-left"
                >
                  <p className="font-mono text-2xl font-bold tracking-tight text-[var(--brand-blue)] md:text-[1.65rem]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748b]">{stat.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 md:mt-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
            Service strengths
          </p>
          <div className="mt-3 border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--brand-blue)] md:text-3xl">
              What sets our support apart
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#64748b] md:text-base">
              Responsive teams, genuine parts, and practical solutions built for Nepal&apos;s jobsites.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid list-none grid-cols-1 gap-5 min-[480px]:grid-cols-2 xl:grid-cols-3 xl:gap-6" role="list">
          {regularStandOut.map((row, index) => (
            <StandOutCard key={row.title} row={row} index={index} />
          ))}
          {featuredStandOut ? <StandOutCard row={featuredStandOut} index={regularStandOut.length} featured /> : null}
        </ul>

        <div className="mt-16 border-t border-[var(--border-subtle)] pt-14 md:mt-20 md:pt-16">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">Why UHEEM</p>
          <div className="mt-3 border-l-[3px] border-[var(--brand-yellow)] pl-5 sm:pl-6">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--brand-blue)] md:text-3xl">
              Why choose XCMG Nepal for service
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#64748b] md:text-base">
              One partner for equipment, parts, financing, and after-sales care — aligned to how projects run in Nepal.
            </p>
          </div>

          <ul className="mt-10 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6" role="list">
            {serviceWhyChooseRows.map((row, index) => (
              <li key={row.en}>
                <article className="interactive-card flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white shadow-sm ring-1 ring-black/[0.02]">
                  <div className="border-b border-[var(--border-subtle)] bg-[#fafbfc] px-5 py-4 md:px-6">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-yellow)] text-[11px] font-bold text-[#0f172a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-base font-bold leading-snug text-[#0f172a]">
                      {row.en.replace(/^\d+\.\s*/, "")}
                    </p>
                    <p className="mt-1.5 text-sm font-medium text-[#64748b]">{row.np}</p>
                  </div>
                  <p className="flex-1 px-5 py-4 text-sm leading-relaxed text-[#475569] md:px-6 md:py-5 md:text-[15px]">
                    {row.body}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
