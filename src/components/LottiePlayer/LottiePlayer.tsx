"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

interface LottiePlayerProps {
  /** Path to the JSON under /public, e.g. "/lottie/hiw-submit.json" */
  src: string;
  /** Accessible label for the animation region */
  label: string;
  className?: string;
  loop?: boolean;
}

/**
 * Fetches a local Lottie JSON and plays it. Always render this component
 * behind next/dynamic with ssr:false to avoid hydration mismatches.
 * Respects prefers-reduced-motion by freezing on the first frame.
 */
export default function LottiePlayer({ src, label, className, loop = true }: LottiePlayerProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);

    let cancelled = false;
    fetch(src)
      .then((r) => {
        if (!r.ok) throw new Error(`Lottie fetch failed: ${src}`);
        return r.json();
      })
      .then((data) => {
        if (!cancelled) setAnimationData(data);
      })
      .catch(() => {
        /* leave the (empty) frame; the surrounding design must stand alone */
      });
    return () => {
      cancelled = true;
      mq.removeEventListener("change", onChange);
    };
  }, [src]);

  return (
    <div className={className} role="img" aria-label={label}>
      {animationData && (
        <Lottie
          animationData={animationData}
          loop={reducedMotion ? false : loop}
          autoplay={!reducedMotion}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
