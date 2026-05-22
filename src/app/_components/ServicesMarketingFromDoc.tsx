import {
  serviceCommitmentBlock,
  serviceMarketingIntro,
  serviceStandOutRows,
  serviceWhyChooseRows,
} from "../_data/servicesContent";
import { siteShellClass } from "../_data/siteShell";

export function ServicesMarketingFromDoc() {
  return (
    <section
      id="services-overview"
      className="scroll-mt-28 border-b border-[var(--border-subtle)] bg-white"
      aria-label="XCMG Nepal service information"
    >
      <div className={`${siteShellClass} py-14 md:py-16 lg:py-20`}>
        <div className="max-w-none space-y-4 text-base leading-relaxed text-[#334155] md:text-[17px] md:leading-relaxed">
          {serviceMarketingIntro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ul className="mt-12 grid list-none gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-6" role="list">
          {serviceStandOutRows.map((row) => (
            <li
              key={row.title}
              className="interactive-card rounded-xl border border-[var(--border-subtle)] bg-[#f8fafc] p-5 shadow-sm md:p-6 lg:p-7"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[var(--brand-blue)]">{row.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#475569] md:text-[15px] md:leading-relaxed">{row.body}</p>
            </li>
          ))}
        </ul>

        <ul className="mt-14 grid list-none gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-6" role="list">
          {serviceWhyChooseRows.map((row) => (
            <li
              key={row.en}
              className="interactive-card flex flex-col rounded-xl border border-[var(--border-subtle)] bg-white p-5 shadow-sm ring-1 ring-black/[0.03] md:p-6"
            >
              <p className="text-base font-semibold text-[#0f172a]">{row.en}</p>
              <p className="mt-1 text-sm font-medium text-[#64748b]">{row.np}</p>
              <p className="mt-4 text-sm leading-relaxed text-[#475569] md:text-[15px]">{row.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 border border-[var(--border-subtle)] bg-gradient-to-br from-[#f0f4fa] to-white p-6 md:mt-16 md:p-10">
          <h2 className="text-xl font-semibold tracking-tight text-[var(--brand-blue)] md:text-2xl">
            {serviceCommitmentBlock.heading}
          </h2>
          <p className="mt-3 text-lg font-medium text-[#0f172a] md:text-xl">{serviceCommitmentBlock.en}</p>
          <p className="mt-2 text-base text-[#475569] md:text-lg">{serviceCommitmentBlock.np}</p>
        </div>
      </div>
    </section>
  );
}
