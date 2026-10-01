import {
    SkeletonBlock,
    SkeletonCircle,
    SkeletonLine,
    SkeletonTitle,
    FormSkeleton,
} from "@/components/Skeleton/Skeleton";
import styles from "./page.module.css";

/* Mirrors start-a-project/page.tsx: dossier hero header, the intake grid
   (form dossier card + reassurance rail), and the reassurance band.
   Structural blocks only, no copy. */
export default function Loading() {
    return (
        <>
            {/* ── HERO: dossier header ─────────────────── */}
            <section className={styles.hero} aria-label="Loading">
                <div className="container">
                    <SkeletonLine style={{ width: 140 }} />
                    <SkeletonTitle style={{ width: "45%", height: "3.5rem", marginTop: "1rem" }} />
                    <SkeletonLine style={{ width: "60%", height: "1.25rem" }} />
                    <SkeletonLine style={{ width: "45%", height: "1.25rem" }} />
                    <div className={styles.heroFacts} style={{ marginTop: "1.5rem" }}>
                        <SkeletonLine style={{ width: 120 }} />
                        <SkeletonLine style={{ width: 150 }} />
                        <SkeletonLine style={{ width: 110 }} />
                    </div>
                </div>
            </section>

            {/* ── INTAKE ───────────────────────────────── */}
            <section className={styles.intake} aria-label="Loading">
                <div className="container">
                    <div className={styles.intakeGrid}>
                        {/* Dossier card with the form */}
                        <div className={styles.dossier}>
                            <div className={styles.dossierHead}>
                                <div style={{ flex: 1 }}>
                                    <SkeletonLine style={{ width: 150 }} />
                                    <SkeletonTitle style={{ width: "70%", height: "2rem" }} />
                                </div>
                                <div className={styles.sealWrap}>
                                    <SkeletonCircle size={110} />
                                </div>
                            </div>
                            <SkeletonLine style={{ width: "85%" }} />
                            <SkeletonLine style={{ width: "60%", marginBottom: "1.5rem" }} />
                            <FormSkeleton />
                        </div>

                        {/* Sticky reassurance rail */}
                        <aside className={styles.rail}>
                            <div className={styles.emblemCard}>
                                <SkeletonBlock height={170} style={{ borderRadius: "0.75rem" }} />
                            </div>

                            <div className={styles.railCard}>
                                <SkeletonTitle style={{ width: "70%", height: "1.5rem", marginBottom: "1rem" }} />
                                {[1, 2, 3].map((i) => (
                                    <div key={i} style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                                        <SkeletonTitle style={{ width: 36, height: 28, margin: 0 }} />
                                        <div style={{ flex: 1 }}>
                                            <SkeletonLine style={{ width: "50%" }} />
                                            <SkeletonLine style={{ width: "90%" }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.railCard}>
                                <SkeletonTitle style={{ width: "60%", height: "1.5rem", marginBottom: "1rem" }} />
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                                        <SkeletonCircle size={18} />
                                        <SkeletonLine style={{ width: "80%", margin: 0 }} />
                                    </div>
                                ))}
                            </div>

                            <div className={styles.railCard}>
                                <SkeletonTitle style={{ width: "65%", height: "1.5rem", marginBottom: "1rem" }} />
                                <SkeletonBlock height={48} style={{ borderRadius: "0.75rem", marginBottom: "0.75rem" }} />
                                <SkeletonBlock height={48} style={{ borderRadius: "0.75rem", marginBottom: "0.75rem" }} />
                                <SkeletonLine style={{ width: "60%" }} />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* ── REASSURANCE BAND ─────────────────────── */}
            <section className={styles.reassure} aria-label="Loading">
                <div className="container">
                    <SkeletonTitle style={{ width: "65%", height: "1.75rem", margin: "0 auto" }} />
                </div>
            </section>
        </>
    );
}
