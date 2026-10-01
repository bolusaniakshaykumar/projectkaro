import CTA from "@/components/CTA/CTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, createPageMetadata, howToSchema, webPageSchema } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "ProjectKaro (Project Karo) four-step process: submit your requirements, receive a detailed quote within 24 hours, approve the proposal, and get your project delivered with full documentation and support.",
  path: "/how-it-works",
});

/* Refined static artifact cards: what the client RECEIVES at each step. */
const ART_BRIEF = (
  <svg viewBox="0 0 360 300" fill="none" aria-hidden="true" className="artifactSvg">
    <circle cx="180" cy="150" r="120" className="aWash" />
    <rect x="80" y="26" width="200" height="248" rx="16" className="aCard" />
    <rect x="104" y="50" width="88" height="18" rx="9" className="aTint" />
    <text x="148" y="63" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="2" className="aBrandText">BRIEF</text>
    <rect x="104" y="84" width="152" height="10" rx="5" className="aLine" />
    <rect x="104" y="102" width="152" height="10" rx="5" className="aLine" />
    <rect x="104" y="120" width="120" height="10" rx="5" className="aLine" />
    <rect x="104" y="150" width="16" height="16" rx="4" fill="#ffffff" strokeWidth="2" className="aBrandStroke" />
    <polyline points="107,158 111,162 117,154" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="aBrandStroke" />
    <rect x="128" y="152" width="112" height="10" rx="5" className="aLine" />
    <rect x="104" y="178" width="16" height="16" rx="4" fill="#ffffff" strokeWidth="2" className="aBrandStroke" />
    <polyline points="107,186 111,190 117,182" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="aBrandStroke" />
    <rect x="128" y="180" width="88" height="10" rx="5" className="aLine" />
    <circle cx="232" cy="238" r="38" fill="none" strokeWidth="2" strokeDasharray="4 6" opacity="0.5" className="aBrandStroke" />
    <circle cx="232" cy="238" r="29" className="aBrand" />
    <polyline points="220,238 228,246 245,228" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="aWhiteStroke" />
  </svg>
);

const ART_PROPOSAL = (
  <svg viewBox="0 0 360 300" fill="none" aria-hidden="true" className="artifactSvg">
    <circle cx="180" cy="150" r="120" className="aWash" />
    <rect x="80" y="26" width="200" height="248" rx="16" className="aCard" />
    <text x="180" y="62" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="2.5" className="aBrandText">PROPOSAL</text>
    <line x1="104" y1="78" x2="256" y2="78" strokeWidth="1.5" className="aLineStroke" />
    {[
      { y: 108, label: "SCOPE" },
      { y: 148, label: "QUOTE" },
      { y: 188, label: "TIMELINE" },
    ].map((row) => (
      <g key={row.label}>
        <circle cx="118" cy={row.y} r="13" className="aBrand" />
        <polyline points={`112,${row.y} 116,${row.y + 4} 125,${row.y - 6}`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="aWhiteStroke" />
        <text x="140" y={row.y - 1} fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="1.5" className="aBrandText">{row.label}</text>
        <rect x="140" y={row.y + 6} width="88" height="9" rx="4.5" className="aLine" />
      </g>
    ))}
    <rect x="104" y="222" width="152" height="32" rx="16" className="aBrand" />
    <text x="180" y="242" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="1.5" className="aWhiteText">24-HOUR REPLY</text>
  </svg>
);

const ART_BUILD = (
  <svg viewBox="0 0 360 300" fill="none" aria-hidden="true" className="artifactSvg">
    <circle cx="180" cy="150" r="120" className="aWash" />
    <rect x="80" y="34" width="200" height="232" rx="16" className="aCard" />
    <text x="180" y="66" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="2.5" className="aBrandText">BUILD PROGRESS</text>
    {[
      { y: 106, done: true },
      { y: 148, done: true },
      { y: 190, done: false },
    ].map((row, i) => (
      <g key={i}>
        {row.done ? (
          <>
            <circle cx="114" cy={row.y} r="12" className="aBrand" />
            <polyline points={`108,${row.y} 112,${row.y + 4} 121,${row.y - 6}`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="aWhiteStroke" />
          </>
        ) : (
          <circle cx="114" cy={row.y} r="12" fill="#ffffff" strokeWidth="2.5" className="aBrandStroke" />
        )}
        <rect x="136" y={row.y - 6} width="88" height="9" rx="4.5" className="aLine" />
        <rect x="136" y={row.y + 7} width="58" height="9" rx="4.5" className="aLine" />
      </g>
    ))}
    <rect x="104" y="222" width="152" height="12" rx="6" className="aTint" />
    <rect x="104" y="222" width="101" height="12" rx="6" className="aBrand" />
    <text x="180" y="252" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="1.5" className="aMutedText">MILESTONE 2 OF 3</text>
  </svg>
);

const ART_HANDOVER = (
  <svg viewBox="0 0 360 300" fill="none" aria-hidden="true" className="artifactSvg">
    <circle cx="180" cy="150" r="120" className="aWash" />
    <rect x="80" y="34" width="200" height="232" rx="16" className="aCard" />
    <text x="180" y="66" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" letterSpacing="2.5" className="aBrandText">HANDOVER</text>
    {[
      { y: 106, label: "Source code" },
      { y: 142, label: "Documentation" },
      { y: 178, label: "Walkthrough" },
    ].map((row) => (
      <g key={row.label}>
        <circle cx="114" cy={row.y} r="12" className="aBrand" />
        <polyline points={`108,${row.y} 112,${row.y + 4} 121,${row.y - 6}`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="aWhiteStroke" />
        <text x="136" y={row.y + 4} fontFamily="Inter, sans-serif" fontSize="12" className="aInkText">{row.label}</text>
      </g>
    ))}
    <circle cx="228" cy="224" r="36" fill="none" strokeWidth="2" strokeDasharray="4 6" opacity="0.5" className="aBrandStroke" />
    <circle cx="228" cy="224" r="27" className="aBrand" />
    <polyline points="217,224 224,231 240,214" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="aWhiteStroke" />
  </svg>
);

/* Chapters double as the HowTo schema steps (name/text kept factual). */
const CHAPTERS = [
  {
    visual: ART_BRIEF,
    title: "You send the brief",
    scene:
      "Fill out the project form with your requirements, goals, and deadline. Students attach their abstract or problem statement; businesses describe the functionality and design they need. It takes about two minutes, and a human reads every word within hours.",
    artifact: "A confirmation that your brief landed, and a reply within 24 hours.",
    note: "No requirement too small or too complex.",
    schemaName: "Submit Your Requirements",
    schemaText:
      "Fill out the project form with your requirements, goals, and deadline. For student projects, attach your abstract or problem statement. For web projects, describe the functionality and design preferences you need.",
  },
  {
    visual: ART_PROPOSAL,
    title: "We write the proposal",
    scene:
      "We read your submission and respond within 24 hours with a structured proposal: defined scope, a detailed per-project quote, and a milestone-based timeline. Everything in writing, no ambiguity, no sales call required.",
    artifact: "A written proposal: scope, quote, and timeline.",
    note: "Priced per project. No hidden costs.",
    schemaName: "Receive a Detailed Proposal",
    schemaText:
      "Our team reviews your submission and responds within 24 hours with a structured proposal, including a detailed quote, defined scope, and milestone-based timeline. Everything in writing, no ambiguity.",
  },
  {
    visual: ART_BUILD,
    title: "We build, you watch",
    scene:
      "Once you approve the proposal, development begins. You get progress updates at every milestone. For web projects, you review designs before production code. For student projects, we follow your institution's requirements to the letter.",
    artifact: "Milestone updates, and designs to approve before build.",
    note: "Transparent progress at every milestone.",
    schemaName: "We Build Your Project",
    schemaText:
      "Once you approve the proposal, our developers begin work. You receive regular progress updates at each milestone. For web projects, you can review designs before development proceeds. For student projects, we follow your institution's requirements precisely.",
  },
  {
    visual: ART_HANDOVER,
    title: "Delivery and handover",
    scene:
      "You receive the complete deliverables: source code, documentation, deployment support, or academic reports, as agreed. We walk you through the project in a handover session and answer every question. Revisions within the agreed scope are handled at no extra charge.",
    artifact: "Source code, documentation, and a handover walkthrough.",
    note: "Full handover with documentation included.",
    schemaName: "Delivery & Handover",
    schemaText:
      "You receive the complete deliverables: source code, documentation, deployment support, or academic reports as agreed. We provide a handover session to walk you through the project and answer any questions. Revisions within the agreed scope are handled at no extra charge.",
  },
];

const NEVER_ITEMS = [
  {
    title: "Chase us for updates",
    text: "Progress lands in your inbox at every milestone. Silence is not part of the process.",
  },
  {
    title: "Decode a surprise invoice",
    text: "The quote is per project, agreed in writing before we start. The number does not move.",
  },
  {
    title: "Guess what happens next",
    text: "Scope, timeline, and deliverables are set before development begins. You always know the next step.",
  },
];

/* Custom line-art: winding journey with four nodes */
const JOURNEY_ART = (
  <svg viewBox="0 0 320 260" fill="none" aria-hidden="true" className="artSvg">
    <path
      d="M36,216 C70,212 82,190 118,158 C150,130 142,108 168,84 C198,54 232,62 284,42"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeDasharray="2 10"
      strokeLinecap="round"
      className="artBrandStroke"
    />
    {[
      { x: 36, y: 216 },
      { x: 118, y: 158 },
      { x: 168, y: 84 },
      { x: 284, y: 42 },
    ].map((node, idx) => (
      <g key={idx}>
        <circle cx={node.x} cy={node.y} r="17" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
        {idx === 0 && (
          <circle cx={node.x} cy={node.y} r="6" fill="#1e56e8" />
        )}
      </g>
    ))}
    <polyline points="235 48 250 52 239 62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="artBrandStroke" opacity="0.7" />
  </svg>
);

export default function HowItWorksPage() {
  const pageTitle = "How It Works";

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/how-it-works",
            title: pageTitle,
            description:
              "A four-step process to submit requirements, receive a detailed quote, build your project, and get full delivery with documentation.",
          }),
          howToSchema(
            CHAPTERS.map((c) => ({
              name: c.schemaName,
              text: c.schemaText,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: pageTitle, path: "/how-it-works" },
          ]),
        ]}
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="how-heading">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                How it works
              </p>
              <h1 id="how-heading" className={styles.heroTitle}>
                From first message to <em>final handover.</em>
              </h1>
              <p className={styles.heroLede}>
                Four chapters, no black box. This is exactly what happens between your brief
                and your delivery, including what lands in your hands at each step.
              </p>
              <div className={styles.heroMeta}>
                <span>4 chapters</span>
                <span>24h first reply</span>
                <span>You approve everything</span>
              </div>
            </div>
            <div className={styles.heroArt} aria-hidden="true">
              {JOURNEY_ART}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHAPTERS ─────────────────────────────────── */}
      <section className={styles.chapters} aria-label="The four chapters">
        <div className="container">
          {CHAPTERS.map((chapter, i) => (
            <article
              key={chapter.title}
              className={`${styles.chapter} ${i % 2 === 1 ? styles.chapterFlip : ""}`}
            >
              <div className={styles.chapterVisual} aria-hidden="true">
                {chapter.visual}
              </div>
              <div className={styles.chapterBody}>
                <h2 className={styles.chapterTitle}>{chapter.title}</h2>
                <p className={styles.chapterScene}>{chapter.scene}</p>
                <div className={styles.chapterArtifact}>
                  <span className={styles.artifactLabel}>You receive</span>
                  <p>{chapter.artifact}</p>
                </div>
                <p className={styles.chapterNote}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {chapter.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── NEVER BAND ───────────────────────────────── */}
      <section className={styles.never} aria-labelledby="never-h">
        <div className="container">
          <p className={styles.neverEyebrow}>The anti-list</p>
          <h2 id="never-h" className={styles.neverTitle}>
            Three things you will <em>never</em> have to do
          </h2>
          <ul className={styles.neverList} role="list">
            {NEVER_ITEMS.map((item) => (
              <li key={item.title} className={styles.neverItem}>
                <span className={styles.neverIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── STATEMENT ────────────────────────────────── */}
      <section className={styles.statement} aria-label="Our promise">
        <div className="container">
          <p className={styles.statementText}>
            You approve everything before it goes live. Designs, scope, timeline. Nothing ships on assumption.
          </p>
        </div>
      </section>

      <CTA
        title="Ready to start chapter one?"
        description="Send your brief today and receive a detailed proposal within 24 hours: scope, quote, and timeline, no surprises."
      />
    </>
  );
}
