"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/** Soft fade when navigating between pages — no scroll-triggered motion. */
export default function SmoothPage({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="smooth-page">
      {children}
    </div>
  );
}
