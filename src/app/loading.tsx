import {
  CTASkeleton,
  DefinitionSkeleton,
  FAQSkeleton,
  HomeHeroSkeleton,
  ProcessSkeleton,
  ProofStripSkeleton,
  ServicesSkeleton,
  StakesSkeleton,
  StatementSkeleton,
} from "@/components/Skeleton/Skeleton";

export default function Loading() {
  return (
    <>
      <HomeHeroSkeleton />
      <StakesSkeleton />
      <ServicesSkeleton />
      <ProofStripSkeleton />
      <ProcessSkeleton />
      <StatementSkeleton />
      <DefinitionSkeleton />
      <FAQSkeleton />
      <CTASkeleton />
    </>
  );
}
