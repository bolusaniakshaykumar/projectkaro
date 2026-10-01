import styles from "./page.module.css";
import load from "./loading.module.css";
import { SkeletonLine, SkeletonTitle } from "@/components/Skeleton/Skeleton";

/* Branded skeleton for /about, mirroring the page layout so there
   is no layout shift when the real content streams in. */

function FactRows() {
  return (
    <dl className={styles.studioFacts}>
      {[0, 1, 2, 3].map((i) => (
        <div key={i}>
          <SkeletonLine style={{ width: 90, height: 12 }} />
          <SkeletonLine style={{ width: 130, height: 14 }} />
        </div>
      ))}
    </dl>
  );
}

export default function AboutLoading() {
  return (
    <div aria-hidden="true">
      {/* HERO: editorial copy + studio card */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div
                className={`${load.accentBase} ${load.pillShimmer}`}
                style={{ marginBottom: "1.5rem" }}
              />
              <SkeletonTitle
                style={{ width: "85%", height: "3.5rem", margin: "0 0 1.25rem" }}
              />
              <SkeletonLine style={{ width: "100%", height: "1.25rem" }} />
              <SkeletonLine style={{ width: "90%", height: "1.25rem" }} />
              <div className={styles.heroMeta} style={{ marginTop: "1.25rem" }}>
                <div className={`${load.accentBase} ${load.metaPillShimmer}`} />
                <div className={`${load.accentBase} ${load.metaPillShimmer}`} />
                <div className={`${load.accentBase} ${load.metaPillShimmer}`} />
              </div>
            </div>
            <aside className={styles.studioCard}>
              <div className={styles.sealWrap}>
                <div className={`${load.accentBase} ${load.markShimmer}`} />
              </div>
              <FactRows />
            </aside>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className={styles.statsBand}>
        <div className="container">
          <ul className={styles.statsList}>
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className={styles.statItem}>
                <SkeletonTitle
                  style={{ width: "55%", height: "3rem", margin: "0 0 0.4rem" }}
                />
                <SkeletonLine style={{ width: "75%", margin: 0 }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STORY */}
      <section className={styles.story}>
        <div className="container">
          <SkeletonLine style={{ width: 140, height: 12 }} />
          <SkeletonTitle
            style={{ width: "42%", height: "2.75rem", margin: "0 0 1.75rem" }}
          />
          <div className={styles.storyProse}>
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <SkeletonLine
                key={i}
                style={{ width: i % 3 === 2 ? "80%" : "100%", height: "1.125rem" }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <SkeletonLine style={{ width: 140, height: 12 }} />
            <SkeletonTitle
              style={{ width: "30%", height: "2.75rem", margin: 0 }}
            />
          </div>
          <ul className={styles.valuesGrid}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <li key={i} className={styles.valueCard}>
                <div className={`${load.accentBase} ${load.iconShimmer}`} />
                <SkeletonTitle
                  style={{ width: "60%", height: "1.25rem", margin: "0 0 0.6rem" }}
                />
                <SkeletonLine style={{ width: "100%" }} />
                <SkeletonLine style={{ width: "85%" }} />
                <SkeletonLine style={{ width: "70%", marginBottom: 0 }} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINE PRINT */}
      <section className={styles.finePrint}>
        <div className="container">
          <div className={styles.finePrintHeader}>
            <SkeletonLine style={{ width: 140, height: 12 }} />
            <SkeletonTitle
              style={{ width: "38%", height: "2.75rem", margin: 0 }}
            />
          </div>
          <ul className={styles.finePrintList}>
            {[0, 1, 2, 3].map((i) => (
              <li key={i} className={styles.finePrintItem}>
                <div className={`${load.accentBase} ${load.checkShimmer}`} />
                <div style={{ flex: 1 }}>
                  <SkeletonTitle
                    style={{ width: "55%", height: "1.1rem", margin: "0 0 0.35rem" }}
                  />
                  <SkeletonLine style={{ width: "100%" }} />
                  <SkeletonLine style={{ width: "80%", marginBottom: 0 }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
