import { HeroSkeleton, StatsSkeleton, FAQSkeleton } from "@/components/Skeleton/Skeleton";

export default function Loading() {
    return (
        <>
            <HeroSkeleton />
            <StatsSkeleton />
            <div className="container" style={{ margin: '4rem auto' }}>
                <div style={{ height: '300px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }} />
            </div>
            <FAQSkeleton />
        </>
    );
}
