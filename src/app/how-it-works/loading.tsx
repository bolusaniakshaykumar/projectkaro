import {
    SkeletonBlock,
    SkeletonCircle,
    SkeletonLine,
    SkeletonTitle,
    CTABandSkeleton,
} from "@/components/Skeleton/Skeleton";
import styles from "./page.module.css";

/* Mirrors how-it-works/page.tsx: hero (copy + journey art), four alternating
   chapter articles (visual + body), the "never" anti-list band, the promise
   statement, and the CTA. Structural blocks only, no copy. */
export default function Loading() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className={styles.hero} aria-label="Loading">
                <div className="container">
                    <div className={styles.heroGrid}>
                        <div className={styles.heroCopy}>
                            <SkeletonLine style={{ width: 130 }} />
                            <SkeletonTitle style={{ width: "88%", height: "3.5rem" }} />
                            <SkeletonLine style={{ width: "90%", height: "1.25rem" }} />
                            <SkeletonLine style={{ width: "65%", height: "1.25rem" }} />
                            <div className={styles.heroMeta} style={{ marginTop: "1.5rem" }}>
                                <SkeletonLine style={{ width: 110 }} />
                                <SkeletonLine style={{ width: 130 }} />
                                <SkeletonLine style={{ width: 170 }} />
                            </div>
                        </div>
                        <div className={styles.heroArt}>
                            <SkeletonBlock height={280} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CHAPTERS ─────────────────────────────── */}
            <section className={styles.chapters} aria-label="Loading">
                <div className="container">
                    {[1, 2, 3, 4].map((i) => (
                        <article
                            key={i}
                            className={`${styles.chapter} ${i % 2 === 0 ? styles.chapterFlip : ""}`}
                        >
                            <div className={styles.chapterVisual}>
                                <SkeletonBlock height={300} style={{ borderRadius: "1rem" }} />
                            </div>
                            <div className={styles.chapterBody}>
                                <SkeletonTitle style={{ width: "45%", height: "2rem", marginBottom: "1rem" }} />
                                <SkeletonLine style={{ width: "95%" }} />
                                <SkeletonLine style={{ width: "88%" }} />
                                <SkeletonLine style={{ width: "70%" }} />
                                <div className={styles.chapterArtifact} style={{ marginTop: "1.5rem" }}>
                                    <SkeletonLine style={{ width: 120, height: "0.9rem" }} />
                                    <SkeletonLine style={{ width: "80%" }} />
                                </div>
                                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginTop: "1rem" }}>
                                    <SkeletonCircle size={16} />
                                    <SkeletonLine style={{ width: "55%", margin: 0 }} />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* ── NEVER BAND ───────────────────────────── */}
            <section className={styles.never} aria-label="Loading">
                <div className="container">
                    <SkeletonLine style={{ width: 120, margin: "0 auto 1rem" }} />
                    <SkeletonTitle style={{ width: "50%", height: "2.5rem", margin: "0 auto 2.5rem" }} />
                    <ul className={styles.neverList} role="list">
                        {[1, 2, 3].map((i) => (
                            <li key={i} className={styles.neverItem}>
                                <SkeletonCircle size={40} style={{ marginBottom: "1rem" }} />
                                <SkeletonTitle style={{ width: "60%", marginBottom: "0.75rem" }} />
                                <SkeletonLine style={{ width: "90%" }} />
                                <SkeletonLine style={{ width: "75%" }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── STATEMENT ────────────────────────────── */}
            <section className={styles.statement} aria-label="Loading">
                <div className="container">
                    <SkeletonTitle style={{ width: "70%", height: "2rem", margin: "0 auto" }} />
                </div>
            </section>

            <CTABandSkeleton />
        </>
    );
}
