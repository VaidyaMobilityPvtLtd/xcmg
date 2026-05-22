"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function closeAllHeaderMegaDetails() {
  if (typeof document === "undefined") return;
  document.querySelectorAll('details[name="site-header-mega"]').forEach((node) => {
    if (node instanceof HTMLDetailsElement) node.open = false;
  });
}

export function HeaderRouteSyncClose() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams.toString()}`;

  useEffect(() => {
    closeAllHeaderMegaDetails();
  }, [routeKey]);

  return null;
}

export function HeaderLinkClickClose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="contents"
      onClickCapture={(e) => {
        const t = e.target as HTMLElement;
        if (t.closest("a[href]") || t.closest('button[type="submit"]')) {
          closeAllHeaderMegaDetails();
        }
      }}
    >
      {children}
    </div>
  );
}
