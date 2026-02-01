import { SkeletonTitle, SkeletonLine, TimelineSkeleton } from "@/components/Skeleton/Skeleton";

export default function Loading() {
    return (
        <section className="section">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem' }}>
                    <SkeletonTitle style={{ width: '40%', height: '3rem', marginBottom: '1rem' }} />
                    <SkeletonLine style={{ width: '60%', height: '1.25rem' }} />
                </div>
                <TimelineSkeleton />
            </div>
        </section>
    );
}
