"use client";

import {
  Fragment,
  useLayoutEffect,
  useMemo,
  useRef,
  type CSSProperties,
} from "react";
import styles from "./BlurText.module.css";

export type BlurTextSegment = {
  /** Text of this run; each word reveals individually. */
  text: string;
  /** Optional class applied to every word in this run (e.g. an accent color). */
  className?: string;
  /** Skip the space before this run's first word (e.g. trailing punctuation). */
  noSpaceBefore?: boolean;
};

type BlurTextProps = {
  segments: BlurTextSegment[];
  /** Extra class names applied to the wrapper. */
  className?: string;
  /**
   * "mount": play once on mount (for above-the-fold content).
   * "view": play when scrolled into view (IntersectionObserver).
   */
  trigger?: "mount" | "view";
  /** Delay before the first word starts, in ms. */
  startDelay?: number;
  /** Per-word stagger in ms. */
  stagger?: number;
};

type Word = {
  text: string;
  className?: string;
  gapBefore: boolean;
  delay: number;
};

/**
 * BlurText: words start blurred and slightly transparent, then sharpen into
 * focus with a soft stagger (React Bits style, hand-rolled, dependency-free).
 *
 * Progressive enhancement: words render fully visible until JS marks the
 * wrapper with `.isInit`, so no-JS and pre-hydration visitors always see the
 * text. Motion only ever touches opacity/filter, so no layout shift.
 * Fully disabled under `prefers-reduced-motion`.
 */
export default function BlurText({
  segments,
  className = "",
  trigger = "view",
  startDelay = 0,
  stagger = 45,
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const words = useMemo<Word[]>(() => {
    const out: Word[] = [];
    let idx = 0;
    segments.forEach((seg, si) => {
      const parts = seg.text.trim().split(/\s+/).filter(Boolean);
      parts.forEach((text, pi) => {
        const gapBefore = idx > 0 && !(si > 0 && pi === 0 && seg.noSpaceBefore);
        out.push({
          text,
          className: seg.className,
          gapBefore,
          delay: startDelay + idx * stagger,
        });
        idx += 1;
      });
    });
    return out;
  }, [segments, startDelay, stagger]);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Mark as animation-driven (CSS hides words) before the browser paints.
    el.classList.add(styles.isInit);
    let raf = 0;
    const play = () => {
      raf = requestAnimationFrame(() => {
        el.classList.add(styles.isVisible);
      });
    };
    if (trigger === "mount") {
      play();
      return () => cancelAnimationFrame(raf);
    }
    if (typeof IntersectionObserver === "undefined") {
      play();
      return () => cancelAnimationFrame(raf);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            play();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -4% 0px" }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [trigger]);

  return (
    <span ref={ref} className={`${styles.blurText} ${className}`}>
      {words.map((w, i) => (
        <Fragment key={i}>
          {w.gapBefore ? " " : null}
          <span
            className={`${styles.word}${w.className ? ` ${w.className}` : ""}`}
            style={{ transitionDelay: `${w.delay}ms` } as CSSProperties}
          >
            {w.text}
          </span>
        </Fragment>
      ))}
    </span>
  );
}
