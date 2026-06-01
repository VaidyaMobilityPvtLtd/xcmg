import { siteContacts, type SitePhoneLine } from "../_data/siteContacts";

type Props = {
  lines?: SitePhoneLine[];
  /** Tighter spacing for footer contact column */
  compact?: boolean;
  className?: string;
  labelClass?: string;
  linkClass?: string;
};

const defaultLinkClass =
  "text-sm leading-relaxed text-[#64748b] transition-colors hover:text-[var(--brand-blue)] hover:underline";

export default function ContactPhoneList({
  lines = siteContacts.phones.lines,
  compact = false,
  className,
  labelClass = "text-[11px] font-medium uppercase tracking-[0.08em] text-[#94a3b8]",
  linkClass = defaultLinkClass,
}: Props) {
  const listClass = className ?? (compact ? "mt-1.5 space-y-2" : "mt-1 space-y-2.5");

  if (compact) {
    return (
      <ul className={listClass}>
        {lines.map((line) => (
          <li key={line.tel}>
            {line.label ? <p className={labelClass}>{line.label}</p> : null}
            <a
              href={`tel:${line.tel}`}
              className={`${linkClass} ${line.label ? "mt-0.5 inline-block font-medium tabular-nums" : "block font-medium tabular-nums"}`}
            >
              {line.display}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={listClass}>
      {lines.map((line) => (
        <li key={line.tel}>
          {line.label ? <p className={labelClass}>{line.label}</p> : null}
          <a href={`tel:${line.tel}`} className={`${linkClass} ${line.label ? "mt-0.5 inline-block font-medium" : ""}`}>
            {line.display}
          </a>
        </li>
      ))}
    </ul>
  );
}
