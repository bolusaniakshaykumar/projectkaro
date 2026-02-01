"use client";

import styles from "./Skeleton.module.css";

export function SkeletonLine({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={`${styles.shimmer} ${styles.line} ${className}`} style={style} />;
}

export function SkeletonCircle({ size = 40, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return <div className={`${styles.shimmer} ${styles.circle} ${className}`} style={{ width: size, height: size, borderRadius: '50%', ...style }} />;
}

export function SkeletonTitle({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return <div className={`${styles.shimmer} ${styles.title} ${className}`} style={style} />;
}

export function SkeletonBlock({ height = 120, className = "", style }: { height?: number; className?: string; style?: React.CSSProperties }) {
  return <div className={`${styles.shimmer} ${styles.block} ${className}`} style={{ height, ...style }} />;
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
          {[...Array(6)].map((_, i) => (
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
