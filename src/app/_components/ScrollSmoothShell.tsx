"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import type { MutableRefObject } from "react";
import { createContext, useLayoutEffect, useRef, useSyncExternalStore } from "react";

const LenisRefContext = createContext<MutableRefObject<Lenis | null> | undefined>(undefined);

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function shouldUseLenis() {
  const ua = navigator.userAgent.toLowerCase();
  const isSafari = ua.includes("safari") && !ua.includes("chrome") && !ua.includes("android");
  return !isSafari;
}

export default function ScrollSmoothShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    if (prefersReducedMotion || !shouldUseLenis()) {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      return;
    }

    const instance = new Lenis({
      smoothWheel: true,
      lerp: 0.055,
      wheelMultiplier: 0.92,
      touchMultiplier: 0.92,
      syncTouch: true,
      syncTouchLerp: 0.065,
      autoRaf: true,
      anchors: true,
    });
    lenisRef.current = instance;
    return () => {
      instance.destroy();
      if (lenisRef.current === instance) lenisRef.current = null;
    };
  }, [prefersReducedMotion]);

  useLayoutEffect(() => {
    try {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    } catch {
      /* ignore */
    }

    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const target = hash ? document.querySelector(hash) : null;
    const L = lenisRef.current;

    if (target instanceof HTMLElement) {
      if (L) {
        requestAnimationFrame(() => {
          L.scrollTo(target, { offset: -72, immediate: false });
        });
      } else {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
      return;
    }

    if (L) L.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, prefersReducedMotion]);

  return <LenisRefContext.Provider value={lenisRef}>{children}</LenisRefContext.Provider>;
}
