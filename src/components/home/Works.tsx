"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/constants/siteConfig";
import { Frame } from "@/components/layout/Frame";
import { cn } from "@/utils/cn";

const PAUSE_MS = 1800;
const MOVE_MS = 520;

type WorkItem = {
  src: string;
  alt: string;
  caption: string;
};

function Caption({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <figcaption
      className={cn(
        "mt-3 font-mono text-[10px] tracking-[0.12em] text-muted sm:text-[11px]",
        className
      )}
    >
      {children}
    </figcaption>
  );
}

function WorksMarquee({ items }: { items: readonly WorkItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const loop = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || paused || items.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let timeoutId = 0;
    let cancelled = false;

    const stepWidth = () => {
      const first = track.children[0] as HTMLElement | undefined;
      if (!first) return 0;
      const styles = getComputedStyle(track);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      return first.offsetWidth + gap;
    };

    const jumpTo = (index: number, animate: boolean) => {
      const x = -(index * stepWidth());
      track.style.transition = animate
        ? `transform ${MOVE_MS}ms cubic-bezier(0.75, 0, 0.2, 1)`
        : "none";
      track.style.transform = `translate3d(${x}px, 0, 0)`;
    };

    const tick = () => {
      if (cancelled) return;

      indexRef.current += 1;
      jumpTo(indexRef.current, true);

      if (indexRef.current >= items.length) {
        timeoutId = window.setTimeout(() => {
          if (cancelled) return;
          indexRef.current = 0;
          jumpTo(0, false);
          timeoutId = window.setTimeout(tick, PAUSE_MS);
        }, MOVE_MS);
        return;
      }

      timeoutId = window.setTimeout(tick, PAUSE_MS + MOVE_MS);
    };

    jumpTo(indexRef.current, false);
    timeoutId = window.setTimeout(tick, PAUSE_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [paused, items.length]);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        ref={trackRef}
        className={cn(
          "flex w-max will-change-transform",
          "gap-3 px-5 sm:gap-10 sm:px-8 lg:px-[max(2rem,calc((100vw-1080px)/2))]"
        )}
      >
        {loop.map((work, i) => (
          <figure
            key={`${work.src}-${i}`}
            className="w-[78vw] shrink-0 sm:w-[calc((100vw-5rem-2.5rem)/2)] lg:w-[calc((min(100vw,1080px)-2.5rem)/2)]"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-line/40">
              <Image
                src={work.src}
                alt={work.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 78vw, 50vw"
                loading={i < 4 ? "eager" : "lazy"}
              />
            </div>
            <Caption>{work.caption}</Caption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Works() {
  const { worksMain, worksProcess, worksGroupA, worksGroupB } = siteConfig;

  return (
    <section className="pb-20 sm:pb-32">
      <Frame>
        <p className="mb-10 font-sans text-[11px] tracking-[0.28em] text-muted">
          Works
        </p>
      </Frame>

      <figure>
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-line/40 sm:aspect-[5/6]">
          <Image
            src={worksMain.src}
            alt={worksMain.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <Caption className="px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-1080px)/2))]">
          {worksMain.caption}
        </Caption>
      </figure>

      <div className="mt-16 sm:mt-20">
        <WorksMarquee items={worksGroupA} />
      </div>

      <figure className="mt-16 sm:mt-20">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-line/40">
          <Image
            src={worksProcess.src}
            alt={worksProcess.alt}
            fill
            className="object-cover"
            sizes="100vw"
            loading="eager"
          />
        </div>
        <Caption className="px-5 sm:px-8 lg:px-[max(2rem,calc((100vw-1080px)/2))]">
          {worksProcess.caption}
        </Caption>
      </figure>

      <div className="mt-16 sm:mt-20">
        <WorksMarquee items={worksGroupB} />
      </div>
    </section>
  );
}
