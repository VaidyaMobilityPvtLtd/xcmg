"use client";

import { useCallback, useRef, useState } from "react";

const VIDEO_SRC = "/about/xcmg-corporate-video.mp4";
const POSTER_SRC = "/about/xcmg-corporate-video-poster.jpg";

export default function AboutCorporateVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const playVideo = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;

    setHasStarted(true);
    try {
      await video.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }, []);

  const handlePause = useCallback(() => setIsPlaying(false), []);
  const handlePlay = useCallback(() => setIsPlaying(true), []);

  return (
    <section
      className="relative border-b border-[var(--border-subtle)] bg-gradient-to-b from-white to-[#fafbfd]"
      aria-labelledby="about-corporate-video-heading"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/12 to-transparent"
        aria-hidden
      />

      <div className="mx-auto w-[92vw] max-w-[1600px] px-4 py-14 md:px-6 md:py-20 lg:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-blue-muted)]">
          Corporate film
        </p>
        <div className="mt-3 flex flex-wrap items-start gap-3 sm:items-center sm:gap-4">
          <span
            className="mt-1.5 h-10 w-1 shrink-0 rounded-full bg-[var(--brand-yellow)] sm:mt-0"
            aria-hidden
          />
          <h2
            id="about-corporate-video-heading"
            className="min-w-0 flex-1 text-balance text-2xl font-bold tracking-tight text-[var(--brand-blue)] sm:text-3xl lg:text-[2rem]"
          >
            XCMG at work across Nepal
          </h2>
        </div>

        {/* Single outer card — brand blue, video left + copy right */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--brand-blue)] via-[#0a3376] to-[#08306e] shadow-[0_32px_80px_-28px_rgb(11_60_145_/_0.55)] ring-1 ring-[var(--brand-blue)]/20 sm:mt-10 md:mt-12 lg:rounded-3xl">
          <div
            className="pointer-events-none absolute -right-16 top-0 h-64 w-64 rounded-full bg-[var(--brand-yellow)]/10 blur-3xl"
            aria-hidden
          />

          <div className="relative grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-stretch">
            {/* Video panel */}
            <div className="relative aspect-video w-full md:aspect-auto md:min-h-[420px] lg:min-h-[480px]">
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                controls={hasStarted}
                playsInline
                preload="metadata"
                poster={POSTER_SRC}
                aria-label="XCMG corporate film — United Heavy Equipment and Earth Movers Nepal"
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handlePause}
              >
                <source src={VIDEO_SRC} type="video/mp4" />
                Your browser cannot play this clip inline.{" "}
                <a href={VIDEO_SRC} className="text-[var(--brand-yellow)] underline">
                  Download MP4
                </a>
              </video>

              {!isPlaying ? (
                <button
                  type="button"
                  onClick={playVideo}
                  className="group absolute inset-0 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-yellow)]"
                  aria-label={hasStarted ? "Resume XCMG corporate film" : "Play XCMG corporate film"}
                >
                  <span className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full bg-[var(--brand-yellow)] text-[var(--brand-blue)] shadow-[0_12px_40px_-12px_rgb(11_60_145_/_0.55)] ring-4 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#f5d030] md:h-[5.25rem] md:w-[5.25rem]">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1"
                      aria-hidden
                    >
                      <path d="M8 5.14v14.72a1 1 0 001.5.86l11.04-7.36a1 1 0 000-1.72L9.5 4.28A1 1 0 008 5.14z" />
                    </svg>
                  </span>
                </button>
              ) : null}
            </div>

            {/* Copy panel — same height as video */}
            <div className="relative flex min-h-0 flex-col justify-center border-t border-white/10 px-5 py-7 sm:px-7 sm:py-9 md:border-l md:border-t-0 md:px-10 md:py-12 lg:px-12 lg:py-14">
              <span
                className="pointer-events-none absolute right-4 top-3 select-none font-serif text-[4.5rem] font-bold leading-none text-[var(--brand-yellow)]/[0.12] sm:right-6 sm:top-4 sm:text-[5.5rem] md:right-8 md:top-6 md:text-[7rem] lg:text-[8rem]"
                aria-hidden
              >
                01
              </span>

              <div className="relative border-l-[3px] border-[var(--brand-yellow)] pl-4 sm:pl-6 md:pl-7">
                <p className="text-[14px] leading-[1.8] text-white/92 sm:text-[15px] sm:leading-[1.85] md:text-base md:leading-[1.9] lg:text-[17px]">
                  See how UHEEM and XCMG machinery support roads, hydropower, urban construction, and
                  infrastructure projects nationwide — backed by local service, genuine parts, and
                  VOITH&apos;s trusted legacy across Nepal.
                </p>
              </div>

              <div className="relative mt-8 md:mt-10">
                <p className="text-lg font-bold tracking-tight text-white md:text-xl">
                  United Heavy Equipment &amp; Earth Movers
                </p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-yellow)]/80">
                  Corporate film · XCMG Nepal · UHEEM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
