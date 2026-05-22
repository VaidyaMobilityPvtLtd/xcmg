const warmed = new Set<string>();

export function warmImageSrc(src: string): void {
  if (typeof window === "undefined" || !src || warmed.has(src)) return;
  warmed.add(src);
  const img = new Image();
  img.src = src;
}

export function warmImageSrcs(sources: readonly string[]): void {
  for (const s of sources) warmImageSrc(s);
}
