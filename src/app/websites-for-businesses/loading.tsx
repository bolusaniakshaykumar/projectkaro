import {
    SkeletonBlock,
    SkeletonCircle,
    SkeletonLine,
    SkeletonTitle,
    SectionHeadSkeleton,
    CTABandSkeleton,
    FormSkeleton,
} from "@/components/Skeleton/Skeleton";
import styles from "./page.module.css";

/* Mirrors websites-for-businesses/page.tsx: hero (copy + art), pains grid,
   outcomes (sticky rail + card grid), delivery-standard band, mini process,
   FAQ, and the quote form section. Structural blocks only, no copy. */
export default function Loading() {
    return (
        <>
            {/* ── HERO ─────────────────────────────────── */}
            <section className={styles.hero} aria-label="Loading">
                <div className="container">
                    <div className={styles.heroGrid}>
                        <div className={styles.heroCopy}>
                            <SkeletonLine style={{ width: 150 }} />
                            <SkeletonTitle style={{ width: "92%", height: "3.5rem" }} />
                            <SkeletonLine style={{ width: "85%", height: "1.25rem" }} />
                            <SkeletonLine style={{ width: "70%", height: "1.25rem" }} />
                            <div className={styles.heroCtas} style={{ marginTop: "2rem" }}>
                                <SkeletonBlock height={52} style={{ width: 200, borderRadius: 9999 }} />
                                <SkeletonBlock height={52} style={{ width: 200, borderRadius: 9999 }} />
                            </div>
                            <div className={styles.heroFacts} style={{ marginTop: "2rem" }}>
                                <SkeletonLine style={{ width: 120 }} />
                                <SkeletonLine style={{ width: 150 }} />
                                <SkeletonLine style={{ width: 110 }} />
                            </div>
                        </div>
                        <div className={styles.heroArt}>
                            <SkeletonBlock height={320} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PAINS ────────────────────────────────── */}
            <section className={styles.pains} aria-label="Loading">
                <div className="container">
                    <SectionHeadSkeleton titleWidth="52%" subWidth="58%" />
                    <ul className={styles.painGrid} role="list">
                        {[1, 2, 3, 4].map((i) => (
                            <li key={i} className={styles.painCard}>
                                <SkeletonCircle size={44} style={{ marginBottom: "1rem" }} />
                                <SkeletonTitle style={{ width: "65%", marginBottom: "0.75rem" }} />
                                <SkeletonLine style={{ width: "90%" }} />
                                <SkeletonLine style={{ width: "75%" }} />
                                <SkeletonLine style={{ width: "55%", height: "1.1rem" }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ── OUTCOMES ─────────────────────────────── */}
            <section className={styles.outcomes} aria-label="Loading">
                <div className="container">
                    <div className={styles.outcomesGrid}>
                        <div className={styles.outcomesSticky}>
                            <SectionHeadSkeleton align="left" titleWidth="80%" subWidth="95%" />
                            <SkeletonLine style={{ width: "70%" }} />
                            <SkeletonLine style={{ width: "60%" }} />
                            <SkeletonBlock height={52} style={{ width: 220, borderRadius: 9999, marginTop: "1.5rem" }} />
                        </div>
                        <ul className={styles.outcomeGrid} role="list">
                            {[1, 2, 3, 4].map((i) => (
                                <li key={i} className={styles.outcomeCard}>
                                    <SkeletonCircle size={44} style={{ marginBottom: "1rem" }} />
                                    <SkeletonTitle style={{ width: "60%", marginBottom: "0.75rem" }} />
                                    <SkeletonLine style={{ width: "90%" }} />
                                    <SkeletonLine style={{ width: "75%" }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── DELIVERY STANDARD ────────────────────── */}
            <section className={styles.standard} aria-label="Loading">
                <div className="container">
                    <div className={styles.standardBand}>
                        <SkeletonLine style={{ width: 160, margin: "0 auto 1rem" }} />
                        <SkeletonTitle style={{ width: "55%", height: "2.5rem", margin: "0 auto 1.5rem" }} />
                        <div className={styles.standardList}>
                            {[1, 2, 3].map((i) => (
                                <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                                    <SkeletonCircle size={20} />
                                    <SkeletonLine style={{ width: 220, margin: 0 }} />
                                </div>
                            ))}
                        </div>
                        <SkeletonBlock height={48} style={{ width: 220, borderRadius: 9999, margin: "2rem auto 0" }} />
                    </div>
                </div>
            </section>

            {/* ── MINI PROCESS ─────────────────────────── */}
            <section className={styles.miniProcess} aria-label="Loading">
                <div className="container">
                    <SectionHeadSkeleton titleWidth="45%" subWidth="50%" />
                    <ol className={styles.miniSteps} role="list">
                        {[1, 2, 3].map((i) => (
                            <li key={i} className={styles.miniStep}>
                                <SkeletonTitle style={{ width: 48, height: 36, marginBottom: "1rem" }} />
                                <SkeletonLine style={{ width: "60%", height: "1.1rem" }} />
                                <SkeletonLine style={{ width: "90%" }} />
                                <SkeletonLine style={{ width: "75%" }} />
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ── FAQ ──────────────────────────────────── */}
            <section className={styles.faq} aria-label="Loading">
                <div className="container">
                    <div className={styles.faqGrid}>
                        <div className={styles.faqSticky}>
                            <SectionHeadSkeleton align="left" titleWidth="75%" subWidth="90%" />
                            <SkeletonLine style={{ width: "65%" }} />
                            <SkeletonLine style={{ width: "70%" }} />
                            <SkeletonBlock height={52} style={{ width: 200, borderRadius: 9999, marginTop: "1.5rem" }} />
                        </div>
                        <div className={styles.faqList}>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={styles.faqItem} style={{ marginBottom: "0.75rem" }}>
                                    <SkeletonLine style={{ width: "85%" }} />
                                    <SkeletonLine style={{ width: "60%" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── QUOTE FORM ───────────────────────────── */}
            <section className={styles.quote} aria-label="Loading">
                <div className="container">
                    <div className={styles.quoteGrid}>
                        <div className={styles.quoteCopy}>
                            <SectionHeadSkeleton align="left" titleWidth="80%" subWidth="95%" />
                            <ul className={styles.quoteReassure} role="list">
                                {[1, 2, 3, 4].map((i) => (
                                    <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                                        <SkeletonCircle size={20} />
                                        <SkeletonLine style={{ width: "75%", margin: 0 }} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.formWrap}>
                            <FormSkeleton />
                        </div>
                    </div>
                </div>
            </section>

            <CTABandSkeleton />
        </>
    );
}
