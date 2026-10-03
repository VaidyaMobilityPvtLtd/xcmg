import Link from "next/link";
import type { ComponentProps } from "react";

/** Catalog navigation uses the HTML endpoint supported by the Apache host.
 * Avoid caching a failed RSC prefetch as a product-page 404.
 */
export default function SiteLink(props: ComponentProps<typeof Link>) {
  const { href, prefetch, replace, scroll, ...rest } = props;
  if (typeof href === "string" && /^\/products(?:[?#]|$)/.test(href)) {
    return <a {...rest} href={href} />;
  }
  return <Link {...rest} href={href} prefetch={prefetch} replace={replace} scroll={scroll} />;
}
