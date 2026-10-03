/* PageKit - shared showcase chrome for the Stream B redesign pages
   (pricing, website-development-hyderabad, academic-projects,
   btech-major-projects-hyderabad, academic-projects/major-projects,
   academic-projects/minor-projects).
   Patterns mirror the locked v9 industry-page standard: scroll reveals with
   stagger, sticky mini-CTA, back-to-top. Keyboard-accessible, reduced-motion
   safe, brand tokens only. */

"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Link from "next/link";
import styles from "./PageKit.module.css";

/* ------------------------------------------------------------------ */
/* Scroll reveal with optional stagger delay                           */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={`${styles.reveal} ${
        visible ? styles.revealVisible : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky mini-CTA: appears once the hero scrolls out of view.         */
/* Design rationale: conversion needs a persistent low-friction action */
/* on long decision pages without hijacking the viewport.              */
/* ------------------------------------------------------------------ */

export function StickyMiniCta({
  label,
  buttonText = "Get a quote",
  href = "/start-a-project",
}: {
  label: string;
  buttonText?: string;
  href?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={styles.stickyBar}
      data-show={show}
      aria-hidden={!show}
    >
      <span className={styles.stickyText}>{label}</span>
      <Link
        href={href}
        className={styles.stickyBtn}
        tabIndex={show ? 0 : -1}
      >
        {buttonText}
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Back to top                                                         */
/* ------------------------------------------------------------------ */

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={styles.backTop}
      data-show={show}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
