import { SkeletonTitle, SkeletonLine, FormSkeleton, SkeletonBlock } from "@/components/Skeleton/Skeleton";
import styles from "./page.module.css"; // Reuse page styles for grid

export default function Loading() {
    return (
        <section className="section">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
                    <SkeletonTitle style={{ width: '40%', height: '3rem', marginBottom: '1rem' }} />
                    <SkeletonLine style={{ width: '60%', height: '1.25rem' }} />
                </div>

                <div className={styles.grid}>
                    {/* Left Column: Form */}
                    <div className={styles.formColumn}>
                        <FormSkeleton />
                    </div>

                    {/* Right Column: Info */}
                    <aside className={styles.infoColumn}>
                        <SkeletonBlock height={200} style={{ borderRadius: '1rem' }} />
                        <SkeletonBlock height={150} style={{ borderRadius: '1rem' }} />
                        <SkeletonBlock height={150} style={{ borderRadius: '1rem' }} />
                    </aside>
                </div>
            </div>
        </section>
    );
}
