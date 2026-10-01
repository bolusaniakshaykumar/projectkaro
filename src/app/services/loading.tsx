import { SkeletonBlock, SkeletonLine, SkeletonTitle } from "@/components/Skeleton/Skeleton";

/* Mirrors the /services services page layout so content swaps in with no layout shift:
   hero -> ink statement band -> services chapters (5 / 3 / 2 cards) -> pricing note -> CTA. */
const CHAPTER_CARD_COUNTS = [5, 3, 2];

export default function Loading() {
  return (
    <div role="status" aria-label="Loading services">
      {/* Hero */}
      <section style={{ padding: "4.5rem 0 3.5rem", background: "var(--paper)", borderBottom: "1px solid var(--line-soft)" }}>
        <div className="container" style={{ maxWidth: "56rem" }}>
          <SkeletonLine tone="blue" style={{ width: 150, height: 30, borderRadius: 100, margin: "0 0 1.5rem" }} />
          <SkeletonTitle style={{ width: "45%", height: "3.5rem", margin: "0 0 1.25rem" }} />
          <SkeletonLine style={{ width: "70%", height: "1.125rem" }} />
          <SkeletonLine style={{ width: "55%", height: "1.125rem", marginBottom: "1.75rem" }} />
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[0, 1, 2].map((i) => (
              <SkeletonLine key={i} style={{ width: 130, height: 20, margin: 0 }} />
            ))}
          </div>
        </div>
      </section>

      {/* Statement band */}
      <section style={{ background: "var(--ink)", padding: "4.5rem 0" }}>
        <div className="container">
          <SkeletonLine tone="dark" style={{ width: 200, height: 14, margin: "0 0 1.25rem" }} />
          <SkeletonTitle tone="dark" style={{ width: "80%", height: "2.5rem" }} />
          <SkeletonTitle tone="dark" style={{ width: "60%", height: "2.5rem" }} />
        </div>
      </section>

      {/* Services chapters */}
      <section style={{ padding: "5.5rem 0 4rem", background: "var(--paper-soft)" }}>
        <div className="container">
          <SkeletonLine style={{ width: 90, height: 12, margin: "0 0 0.75rem" }} />
          <SkeletonTitle style={{ width: 300, height: "2.5rem" }} />
          <SkeletonLine style={{ width: "60%", height: "1.0625rem", margin: "0.75rem 0 0" }} />

          {CHAPTER_CARD_COUNTS.map((count, ci) => (
            <div
              key={ci}
              style={{
                marginTop: "3.5rem",
                background: "var(--paper)",
                border: "1px solid var(--line)",
                borderRadius: 20,
                padding: "2.5rem",
              }}
            >
              <div style={{ paddingBottom: "1.75rem", borderBottom: "1px solid var(--line-soft)", marginBottom: "0.5rem" }}>
                <SkeletonTitle style={{ width: 220, height: "1.75rem", margin: "0 0 0.4rem" }} />
                <SkeletonLine style={{ width: "65%", height: "1rem", margin: 0 }} />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1.25rem",
                  marginTop: "1.75rem",
                }}
              >
                {[...Array(count)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--paper-soft)",
                      border: "1px solid var(--line)",
                      borderRadius: 18,
                      overflow: "hidden",
                    }}
                  >
                    <SkeletonBlock tone="blue" height={168} style={{ borderRadius: 0 }} />
                    <div style={{ padding: "1.5rem", background: "var(--paper)" }}>
                      <SkeletonTitle style={{ width: "60%", height: "1.25rem", margin: "0 0 0.6rem" }} />
                      <SkeletonLine style={{ width: "90%", height: "0.975rem" }} />
                      <SkeletonLine style={{ width: "70%", height: "0.975rem", marginBottom: "1rem" }} />
                      <SkeletonLine tone="blue" style={{ width: 120, height: 16, margin: 0 }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Pricing note */}
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: "1rem",
              alignItems: "flex-start",
              background: "var(--paper)",
              border: "1px solid var(--line)",
              borderLeft: "4px solid var(--brand)",
              borderRadius: 12,
              padding: "1.5rem 1.75rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <SkeletonLine style={{ width: "85%", height: "0.975rem" }} />
              <SkeletonLine style={{ width: "60%", height: "0.975rem", marginBottom: 0 }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section style={{ padding: "4rem 0", background: "var(--paper)" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.25rem" }}>
          <SkeletonTitle style={{ width: "40%", height: "2.5rem", margin: 0 }} />
          <SkeletonLine style={{ width: "55%", height: "1.125rem", margin: 0 }} />
          <SkeletonBlock tone="blue" height={52} style={{ width: 220, borderRadius: 100 }} />
        </div>
      </section>
    </div>
  );
}
