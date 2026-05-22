import Link from "next/link";
import type { ServiceHubCardIcon } from "../_data/serviceHubCards";
import { serviceHubCards } from "../_data/serviceHubCards";
import { siteShellClass } from "../_data/siteShell";

function HubIcon({ name }: { name: ServiceHubCardIcon }) {
  const stroke = "#0b3c91";
  const common = { width: 26, height: 26, viewBox: "0 0 24 24" as const, fill: "none" as const, "aria-hidden": true as const };
  switch (name) {
    case "outlet":
      return (
        <svg {...common}>
          <path d="M4 20V10M4 10l8-6 8 6v10" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 20v-6h6v6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "survey":
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="2" stroke={stroke} strokeWidth="1.5" />
          <path d="M8 8h8M8 12h5M8 16h6" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "finance":
      return (
        <svg {...common}>
          <path d="M12 3v18M17 7H9.5a2.5 2.5 0 0 0 0 5h5a2.5 2.5 0 0 1 0 5H7" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "brochure":
      return (
        <svg {...common}>
          <path d="M8 4h11v16H8a2 2 0 0 0-2 2V6a2 2 0 0 1 2-2Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M8 8h8M8 12h8" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export function ServicesActionHub() {
  return (
    <section
      id="service-options"
      className="scroll-mt-28 border-b border-[var(--border-subtle)] bg-white py-14 md:py-20"
      aria-labelledby="service-options-heading"
    >
      <div className={siteShellClass}>
        <h2 id="service-options-heading" className="text-2xl font-semibold tracking-tight text-[#0f172a] md:text-3xl">
          Service pages
        </h2>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {serviceHubCards.map((card, index) => (
            <li key={card.title}>
              <Link
                href={card.href}
                className="interactive-card group flex h-full flex-col rounded-2xl border border-[var(--border-subtle)] bg-gradient-to-br from-white to-[#f4f7fb] p-6 shadow-sm ring-1 ring-black/[0.03] hover:border-[var(--brand-blue)]/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-blue)]/8 text-[var(--brand-blue)] ring-1 ring-[var(--brand-blue)]/15 transition-colors duration-300 group-hover:bg-[var(--brand-yellow)]/25 group-hover:ring-[var(--brand-yellow)]/40">
                    <HubIcon name={card.icon} />
                  </span>
                  <span className="text-right text-[10px] font-bold tabular-nums uppercase tracking-[0.2em] text-[#94a3b8]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="mt-5 text-lg font-semibold text-[var(--brand-blue)] transition-colors duration-300 group-hover:text-[#0a3376]">
                  {card.title}
                </span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-[#475569]">{card.description}</span>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-yellow)]">
                  Open page
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
