import Link from "next/link";

export type ServiceOffering = {
  title: string;
  href: string;
  description: string;
  hint: string;
};

const cardClassName =
  "flex flex-col rounded-md border border-[var(--border-subtle)] bg-white p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)]/40 md:p-6";

type Props = {
  offering: ServiceOffering;
  index: number;
};

export function ServiceOfferingCard({ offering, index }: Props) {
  const { title, href, description, hint } = offering;
  const body = (
    <>
      <span className="text-[10px] font-medium tabular-nums text-[#94a3b8]" aria-hidden>
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--brand-blue)]">{title}</h3>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[#94a3b8]">{hint}</p>
      <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-[#475569]">{description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-blue)]">
        {href.startsWith("mailto:") ? "Send email" : "Open"}
        <span aria-hidden>→</span>
      </span>
    </>
  );

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={cardClassName}>
        {body}
      </a>
    );
  }

  return (
    <Link href={href} className={cardClassName}>
      {body}
    </Link>
  );
}
