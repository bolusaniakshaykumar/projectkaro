import sk from "@/components/Skeleton/Skeleton.module.css";
import {
  SkeletonTitle,
  SkeletonLine,
  SkeletonBlock,
  SkeletonCircle,
  CardGridSkeleton,
  TimelineSkeleton,
  FormSkeleton,
} from "@/components/Skeleton/Skeleton";
import styles from "./loading.module.css";

/* Branded skeleton that mirrors /academic-projects layout:
   centered hero (pill, title, sub, CTAs, facts, art block),
   4 angle cards, dark deliverables band, steps section with side
   panel, FAQ list, and quote band with form. Sized to match the
   real sections so there is no layout shift. */
export default function Loading() {
  return (
    <>
      {/* HERO: centered */}
      <section className={styles.hero} aria-label="Loading page">
        <div className="container">
          <div className={styles.heroCenter}>
            <div className={`${styles.blueBlock} ${styles.pill}`} />
            <SkeletonTitle style={{ width: "72%", height: "3.25rem", margin: "0 auto 1rem" }} />
            <SkeletonTitle style={{ width: "48%", height: "3.25rem", margin: "0 auto 1.25rem" }} />
            <SkeletonLine style={{ width: "64%", height: "1.1rem", margin: "0 auto" }} />
            <SkeletonLine style={{ width: "44%", height: "1.1rem", margin: "0 auto 1.75rem" }} />
            <div className={styles.ctaRow}>
              <SkeletonBlock height={52} className={sk.btnSkeleton} />
              <SkeletonBlock height={52} className={sk.btnSkeleton} />
            </div>
            <div className={styles.factsRow}>
              <div className={`${sk.shimmer} ${styles.fact}`} />
              <div className={`${sk.shimmer} ${styles.fact}`} />
              <div className={`${sk.shimmer} ${styles.fact}`} />
            </div>
          </div>
          <SkeletonBlock height={320} className={styles.heroArt} />
        </div>
      </section>

      {/* ANGLES: 4 cards */}
      <section className={styles.angles} aria-label="Loading content">
        <div className="container">
          <SkeletonLine style={{ width: 180 }} />
          <SkeletonTitle style={{ width: 320, height: "2.5rem" }} />
          <CardGridSkeleton />
        </div>
      </section>

      {/* DELIVERABLES: dark ink band */}
      <section className={styles.band} aria-label="Loading content">
        <div className="container">
          <div className={styles.bandGrid}>
            <div>
              <div className={styles.darkLine} style={{ width: 120 }} />
              <div className={styles.darkTitle} style={{ width: "85%", height: "2.25rem" }} />
              <div className={styles.darkLine} style={{ width: "95%" }} />
              <div className={styles.darkLine} style={{ width: "70%" }} />
            </div>
            <div className={styles.bandList}>
              {[88, 76, 64, 88, 76, 64].map((w, i) => (
                <div key={i} className={styles.bandRow}>
                  <div className={styles.darkCircle} />
                  <div className={styles.darkLine} style={{ width: `${w}%`, margin: 0, flex: 1 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STEPS: stepper + side panel */}
      <section className={styles.steps} aria-label="Loading content">
        <div className="container">
          <SkeletonLine style={{ width: 180 }} />
          <SkeletonTitle style={{ width: 340, height: "2.5rem" }} />
          <div className={styles.stepsGrid}>
            <TimelineSkeleton />
            <div className={styles.sideCol}>
              <SkeletonBlock height={380} className={styles.sideCard} />
              <div className={`${styles.blueBlock} ${styles.sideChat}`} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} aria-label="Loading FAQs">
        <div className="container">
          <div className={styles.faqCenter}>
            <SkeletonLine style={{ width: 160 }} />
            <SkeletonTitle style={{ width: 300, height: "2.5rem" }} />
            <SkeletonLine style={{ width: 380 }} />
          </div>
          <div className={styles.faqList}>
            {[...Array(6)].map((_, i) => (
              <SkeletonBlock key={i} height={62} className={styles.faqItem} />
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE: copy + form band */}
      <section className={styles.quote} aria-label="Loading form">
        <div className="container">
          <div className={styles.quoteBand}>
            <div>
              <SkeletonLine style={{ width: 120 }} />
              <SkeletonTitle style={{ width: "80%", height: "2.5rem" }} />
              <SkeletonLine style={{ width: "95%" }} />
              <SkeletonLine style={{ width: "75%" }} />
            </div>
            <div className={styles.formWrap}>
              <FormSkeleton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
