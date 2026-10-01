"use client";

import styles from "./Skeleton.module.css";

type SkeletonTone = "default" | "dark" | "blue";

function toneClass(tone: SkeletonTone): string {
  if (tone === "dark") return styles.shimmerOnDark;
  if (tone === "blue") return styles.shimmerBlue;
  return styles.shimmer;
}

type SkeletonProps = {
  className?: string;
  style?: React.CSSProperties;
  /** "default" = light ink shimmer on light surfaces, "dark" = white shimmer on dark surfaces, "blue" = brand-blue shimmer */
  tone?: SkeletonTone;
};

export function SkeletonLine({ className = "", style, tone = "default" }: SkeletonProps) {
  return <div className={`${toneClass(tone)} ${styles.line} ${className}`} style={style} />;
}

export function SkeletonCircle({ size = 40, className = "", style, tone = "default" }: SkeletonProps & { size?: number }) {
  return <div className={`${toneClass(tone)} ${styles.circle} ${className}`} style={{ width: size, height: size, borderRadius: '50%', ...style }} />;
}

export function SkeletonTitle({ className = "", style, tone = "default" }: SkeletonProps) {
  return <div className={`${toneClass(tone)} ${styles.title} ${className}`} style={style} />;
}

export function SkeletonBlock({ height = 120, className = "", style, tone = "default" }: SkeletonProps & { height?: number }) {
  return <div className={`${toneClass(tone)} ${styles.block} ${className}`} style={{ height, ...style }} />;
}

export function HeroSkeleton() {
  return (
    <section className={styles.heroSkeleton}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <SkeletonCircle size={32} />
        <SkeletonTitle style={{ width: '60%', height: '3rem' }} />
        <SkeletonLine style={{ width: '80%', height: '1.5rem' }} />
        <SkeletonLine style={{ width: '50%', height: '1.5rem' }} />
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <SkeletonBlock height={50} className={styles.btnSkeleton} />
          <SkeletonBlock height={50} className={styles.btnSkeleton} />
        </div>
      </div>
    </section>
  );
}

export function StatsSkeleton() {
  return (
    <section className="section">
      <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
        {[1, 2, 3].map((i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <SkeletonTitle style={{ width: 80, height: 40 }} />
            <SkeletonLine style={{ width: 100 }} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function CardGridSkeleton() {
  return (
    <div className={styles.gridSkeleton}>
      {[...Array(4)].map((_, i) => (
        <div key={i} className={styles.cardSkeleton}>
          <SkeletonCircle size={60} style={{ marginBottom: '1rem' }} />
          <SkeletonTitle style={{ width: '60%', marginBottom: '1rem' }} />
          <SkeletonLine style={{ width: '90%' }} />
          <SkeletonLine style={{ width: '80%' }} />
        </div>
      ))}
    </div>
  );
}

export function TimelineSkeleton() {
  return (
    <div className={styles.timelineSkeleton}>
      {[...Array(4)].map((_, i) => (
        <div key={i} className={styles.timelineItem}>
          <SkeletonCircle size={40} />
          <div style={{ flex: 1 }}>
            <SkeletonTitle style={{ width: '40%' }} />
            <SkeletonLine style={{ width: '90%' }} />
            <SkeletonLine style={{ width: '80%' }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export function FAQSkeleton() {
  return (
    <section aria-label="Loading FAQs">
      <div className="container">
        <SkeletonLine style={{ width: 72 }} />
        <SkeletonTitle style={{ width: 280 }} />
        <SkeletonLine style={{ width: 360 }} />
        <div className={styles.faqGrid} style={{ marginTop: 12 }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className={styles.faqItem}>
              <SkeletonLine style={{ width: "85%" }} />
              <SkeletonLine style={{ width: "60%" }} />
              <SkeletonLine style={{ width: "40%" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Homepage skeletons: mirror the homepage layout ──
   Light theme, static blue eyebrow accent, shimmer elsewhere.
   Block sizes match the real homepage sections to avoid layout shift. */

export function HomeHeroSkeleton() {
  return (
    <section className={styles.homeHero} aria-label="Loading homepage">
      <div className="container">
        <div className={styles.homeHeroGrid}>
          <div>
            <SkeletonTitle style={{ width: "94%", height: "3.9rem" }} />
            <SkeletonTitle style={{ width: "66%", height: "3.9rem" }} />
            <SkeletonLine style={{ width: "100%", height: "1.35rem" }} />
            <SkeletonLine style={{ width: "82%", height: "1.35rem" }} />
            <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
              <SkeletonBlock height={56} style={{ width: 230, borderRadius: 8 }} />
              <SkeletonBlock height={56} style={{ width: 210, borderRadius: 8 }} />
            </div>
            <div style={{ display: "flex", gap: "1.75rem", marginTop: "2.75rem", flexWrap: "wrap" }}>
              <SkeletonLine style={{ width: 170, height: "1.1rem" }} />
              <SkeletonLine style={{ width: 150, height: "1.1rem" }} />
              <SkeletonLine style={{ width: 190, height: "1.1rem" }} />
            </div>
          </div>
          <div>
            <SkeletonBlock height={0} style={{ aspectRatio: "1 / 1.02", borderRadius: 12 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function StakesSkeleton() {
  return (
    <section className={styles.homeSection} aria-label="Loading">
      <div className="container">
        <div className={styles.stakesGrid}>
          <div>
            <SectionHeadSkeleton align="left" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <SkeletonCircle size={52} />
                <div style={{ flex: 1 }}>
                  <SkeletonTitle style={{ width: "55%" }} />
                  <SkeletonLine style={{ width: "95%" }} />
                  <SkeletonLine style={{ width: "80%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSkeleton() {
  return (
    <section className={styles.homeSectionAlt} aria-label="Loading services">
      <div className="container">
        <SectionHeadSkeleton align="left" />
        <div className={styles.servicesGrid}>
          {[...Array(6)].map((_, i) => (
            <div key={i} className={styles.svcCardSk}>
              <SkeletonBlock height={0} style={{ aspectRatio: "2 / 1", borderRadius: 0 }} />
              <div style={{ padding: "1.75rem 2rem 2rem" }}>
                <div className={styles.eyebrowSk} />
                <SkeletonTitle style={{ width: "70%" }} />
                <SkeletonLine style={{ width: "95%" }} />
                <SkeletonLine style={{ width: "85%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProofStripSkeleton() {
  return (
    <section className={styles.proofSk} aria-label="Loading">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className={styles.eyebrowSk} />
        <SkeletonLine style={{ width: "min(620px, 92%)", height: "1.35rem" }} />
        <SkeletonLine style={{ width: "min(460px, 70%)", height: "1.35rem" }} />
      </div>
    </section>
  );
}

export function ProcessSkeleton() {
  return (
    <section className={styles.homeSectionAlt} aria-label="Loading process">
      <div className="container">
        <SectionHeadSkeleton align="left" />
        <div className={styles.processGrid}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.75rem" }}>
              <SkeletonCircle size={56} />
              <SkeletonTitle style={{ width: "60%" }} />
              <SkeletonLine style={{ width: "95%" }} />
              <SkeletonLine style={{ width: "80%" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatementSkeleton() {
  return (
    <section className={styles.statementSk} aria-label="Loading">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <SkeletonTitle style={{ width: "min(680px, 92%)", height: "3.4rem" }} />
        <SkeletonTitle style={{ width: "min(480px, 72%)", height: "3.4rem" }} />
        <SkeletonLine style={{ width: "min(420px, 64%)", height: "1.3rem", marginTop: "1rem" }} />
        <div style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          <SkeletonBlock height={56} style={{ width: 230, borderRadius: 8 }} />
          <SkeletonBlock height={56} style={{ width: 210, borderRadius: 8 }} />
        </div>
      </div>
    </section>
  );
}

export function DefinitionSkeleton() {
  return (
    <section className={styles.definitionSk} aria-label="Loading">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <SkeletonTitle style={{ width: "min(360px, 62%)", height: "2.25rem" }} />
        <SkeletonLine style={{ width: "min(640px, 94%)" }} />
        <SkeletonLine style={{ width: "min(640px, 94%)" }} />
        <SkeletonLine style={{ width: "min(480px, 70%)" }} />
      </div>
    </section>
  );
}

export function CTASkeleton() {
  return (
    <section className={styles.ctaSk} aria-label="Loading">
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className={styles.eyebrowSk} />
        <SkeletonTitle style={{ width: "min(480px, 78%)", height: "2.5rem" }} />
        <SkeletonLine style={{ width: "min(560px, 88%)" }} />
        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap", justifyContent: "center" }}>
          <SkeletonBlock height={54} style={{ width: 220, borderRadius: 8 }} />
          <SkeletonBlock height={54} style={{ width: 180, borderRadius: 8 }} />
        </div>
      </div>
    </section>
  );
}

export function FormSkeleton() {
  return (
    <div aria-label="Loading form" className={styles.formGrid}>
      <SkeletonLine style={{ width: 160 }} />
      <SkeletonLine style={{ width: "100%" }} />
      <SkeletonLine style={{ width: 180 }} />
      <SkeletonLine style={{ width: "100%" }} />
      <SkeletonLine style={{ width: 150 }} />
      <SkeletonLine style={{ width: "100%" }} />
      <SkeletonLine style={{ width: 220 }} />
      <SkeletonBlock height={100} />
      <SkeletonLine style={{ width: 280 }} />
      <SkeletonLine style={{ width: 200 }} />
      <SkeletonLine style={{ width: 140 }} />
      <SkeletonBlock height={60} />
    </div>
  );
}

/* Centered or left-aligned section header: eyebrow bar, title, sub line. */
export function SectionHeadSkeleton({
  align = "center",
  eyebrowWidth = 130,
  titleWidth = "45%",
  subWidth = "62%",
}: {
  align?: "left" | "center";
  eyebrowWidth?: number | string;
  titleWidth?: number | string;
  subWidth?: number | string | null;
}) {
  return (
    <div
      aria-label="Loading section"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        textAlign: align === "center" ? "center" : "left",
        marginBottom: "2.5rem",
      }}
    >
      <SkeletonLine className={styles.accent} style={{ width: eyebrowWidth, marginBottom: "0.5rem" }} />
      <SkeletonTitle style={{ width: titleWidth, height: "2.5rem", marginBottom: "1rem" }} />
      {subWidth != null && <SkeletonLine style={{ width: subWidth }} />}
    </div>
  );
}

/* Mirror of the CTA band that closes most pages. */
export function CTABandSkeleton() {
  return (
    <section className={styles.ctaBand} aria-label="Loading">
      <div className="container">
        <div className={styles.ctaBandInner}>
          <SkeletonLine className={styles.accent} style={{ width: 150, margin: "0 auto 1.25rem" }} />
          <SkeletonTitle style={{ width: "48%", height: "2.75rem", margin: "0 auto 1rem" }} />
          <SkeletonLine style={{ width: "60%", margin: "0 auto 2rem" }} />
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <SkeletonBlock height={50} className={styles.btnSkeleton} />
            <SkeletonBlock height={50} className={styles.btnSkeleton} />
          </div>
        </div>
      </div>
    </section>
  );
}
