import Link from "next/link";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import { siteShellClass } from "../_data/siteShell";

export type LegalPoint = { label: string; text: string };
export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  points?: LegalPoint[];
};

type LegalDocumentPageProps = {
  title: string;
  effectiveDate: string;
  intro: string;
  sections: LegalSection[];
  originalHref: string;
  originalLabel: string;
  downloadOriginal?: boolean;
  otherDocument: { label: string; href: string };
};

export default function LegalDocumentPage({
  title,
  effectiveDate,
  intro,
  sections,
  originalHref,
  originalLabel,
  downloadOriginal = false,
  otherDocument,
}: LegalDocumentPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#f4f6f9] text-[#0f172a]">
        <section className="relative isolate overflow-hidden border-b border-[var(--border-subtle)] bg-[#0b1f4a] text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_12%,rgb(232_195_26_/_0.19),transparent_32%),radial-gradient(ellipse_at_4%_100%,rgb(58_124_220_/_0.2),transparent_46%),linear-gradient(120deg,#071a3c,#0b3c91)]" aria-hidden />
          <div className="pointer-events-none absolute -right-10 -top-20 select-none text-[clamp(10rem,28vw,24rem)] font-black leading-none text-white/[0.035]" aria-hidden>§</div>
          <div className={`relative ${siteShellClass} py-12 sm:py-16 md:py-20`}>
            <nav aria-label="Breadcrumb" className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60">
              <Link href="/" className="transition-colors hover:text-white">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span className="text-[var(--brand-yellow)]">Legal</span>
            </nav>
            <div className="mt-8 max-w-4xl">
              <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--brand-yellow)] sm:text-[11px]">
                <span className="h-px w-8 bg-[var(--brand-yellow)]" aria-hidden />
                Policies &amp; information
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">{title}</h1>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/78 sm:text-base">{intro}</p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex min-h-10 items-center rounded-full border border-white/15 bg-white/[0.08] px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/75">
                  Effective {effectiveDate}
                </span>
                <a href={originalHref} target={originalHref.endsWith(".pdf") && !downloadOriginal ? "_blank" : undefined} rel={originalHref.endsWith(".pdf") && !downloadOriginal ? "noopener noreferrer" : undefined} download={downloadOriginal} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[var(--brand-yellow)] px-4 text-[10px] font-bold uppercase tracking-[0.1em] text-[#10244b] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#f1d342]">
                  {originalLabel}<span aria-hidden>↗</span>
                </a>
                <Link href={otherDocument.href} className="inline-flex min-h-10 items-center rounded-full border border-white/20 px-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/85 transition hover:border-white/50 hover:bg-white/[0.08] hover:text-white">{otherDocument.label}</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-yellow)]/70 to-transparent" aria-hidden />
        </section>

        <div className={`${siteShellClass} grid gap-8 py-8 sm:py-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:py-14`}>
          <aside className="self-start lg:sticky lg:top-24">
            <nav aria-label="On this page" className="overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white shadow-[0_16px_44px_-34px_rgb(11_60_145_/_0.45)]">
              <div className="border-b border-[var(--border-subtle)] bg-gradient-to-r from-[#f4f7fc] to-white px-5 py-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--brand-blue-muted)]">Document guide</p>
                <p className="mt-1 text-sm font-semibold text-[#1e293b]">On this page</p>
              </div>
              <ol className="max-h-[55vh] space-y-1 overflow-auto p-3 pr-2">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="group flex gap-2 rounded-xl px-2.5 py-2.5 text-xs leading-snug text-[#475569] transition-colors hover:bg-[#f1f5f9] hover:text-[var(--brand-blue)]">
                      <span className="mt-px font-bold tabular-nums text-[#94a3b8] transition-colors group-hover:text-[var(--brand-blue)]">{String(index + 1).padStart(2, "0")}</span><span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="min-w-0 space-y-5">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-heading`} className="group relative scroll-mt-24 overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-white shadow-[0_14px_42px_-34px_rgb(11_60_145_/_0.32)] transition-shadow hover:shadow-[0_20px_48px_-32px_rgb(11_60_145_/_0.38)]">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--brand-blue)] via-[#4e7dcc] to-[var(--brand-yellow)] opacity-75" aria-hidden />
                <div className="p-5 sm:p-7 md:p-8">
                <div className="flex items-start gap-4 border-b border-[#edf0f5] pb-5">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#edf3ff] text-xs font-bold text-[var(--brand-blue)] ring-1 ring-inset ring-[var(--brand-blue)]/10">{String(index + 1).padStart(2, "0")}</span>
                  <h2 id={`${section.id}-heading`} className="pt-1 text-lg font-bold leading-snug tracking-tight text-[#173b79] sm:text-xl">{section.title}</h2>
                </div>
                {section.paragraphs?.length ? <div className="mt-5 space-y-4 text-sm leading-[1.85] text-[#475569] sm:pl-[3.5rem] sm:text-[15px]">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div> : null}
                {section.points?.length ? <ul className="mt-5 space-y-3 sm:pl-[3.5rem]">{section.points.map((point) => <li key={point.label} className="relative pl-5 text-sm leading-[1.85] text-[#475569] before:absolute before:left-0 before:top-[0.72em] before:size-1.5 before:rounded-full before:bg-[var(--brand-yellow)] sm:text-[15px]"><span className="font-semibold text-[#1e293b]">{point.label} </span>{point.text}</li>)}</ul> : null}
                </div>
              </section>
            ))}
            <p className="px-2 pt-2 text-xs leading-relaxed text-[#64748b]">This page presents the supplied legal document in a readable web format. Use the original document link above if you need the source file.</p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
