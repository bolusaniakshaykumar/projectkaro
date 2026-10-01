"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  /** Final numeric value to count to. */
  end: number;
  /** Text appended after the number (e.g. "+", "h"). */
  suffix?: string;
  /** Text prepended before the number. */
  prefix?: string;
  /** Animation duration in ms. */
  duration?: number;
  className?: string;
};

/**
 * CountUp — animated number counter (React Bits style, hand-rolled).
 * Counts from 0 to `end` with an ease-out-expo curve when scrolled into view.
 *
 * Progressive enhancement: the final value renders in the HTML, so no-JS
 * visitors always see the real number; JS takes over and replays the count.
 * Fully disabled under `prefers-reduced-motion`.
 */
export default function CountUp({
  end,
  suffix = "",
  prefix = "",
  duration = 1600,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    let raf = 0;
    let started = false;
    const play = () => {
      if (started) return;
      started = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / duration, 1);
        // easeOutExpo: fast start, long smooth settle — very visible.
        const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
        setDisplay(Math.round(eased * end));
        if (p < 1) {
          raf = requestAnimationFrame(tick);
        }
      };
      raf = requestAnimationFrame(tick);
    };
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
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display === null ? end : display}
      {suffix}
    </span>
  );
}
