import dynamic from "next/dynamic";
import { FormSkeleton } from "@/components/Skeleton/Skeleton";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/site-config";
import styles from "./page.module.css";

const StartProjectForm = dynamic(() => import("@/components/StartProjectForm/StartProjectForm"), {
  loading: () => <FormSkeleton />,
});

export const metadata = createPageMetadata({
  title: "Get a Free Quote",
  description:
    "Submit your project requirements to ProjectKaro (Project Karo). We respond within 24 hours with a detailed proposal, per-project quote, and timeline for web development or student project work.",
  path: "/start-a-project",
});

const NEXT_STEPS = [
  {
    num: "01",
    title: "We review",
    text: "Your submission is reviewed by our team within a few hours.",
  },
  {
    num: "02",
    title: "You receive a proposal",
    text: "A detailed proposal with per-project pricing and timeline, within 24 hours.",
  },
  {
    num: "03",
    title: "We start work",
    text: "On your approval, development begins immediately.",
  },
];

const COMMITMENTS = [
  "Per-project pricing, no hidden costs",
  "On-time delivery, every time",
  "Complete documentation included",
  "Revisions within scope at no charge",
];

/* Custom SVG: circular atelier seal */
const SEAL = (
  <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={styles.sealSvg}>
    <defs>
      <path id="sealArcTop" d="M14,60 A46,46 0 0,1 106,60" />
      <path id="sealArcBottom" d="M14,60 A46,46 0 0,0 106,60" />
    </defs>
    <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="2" />
    <circle cx="60" cy="60" r="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 5" opacity="0.6" />
    <text fontSize="8.5" fontWeight="700" letterSpacing="1.2" fill="currentColor" fontFamily="Inter, sans-serif" textAnchor="middle">
      <textPath href="#sealArcTop" startOffset="50%">
        FREE · NO OBLIGATION
      </textPath>
    </text>
    <text fontSize="8.5" fontWeight="700" letterSpacing="1.2" fill="currentColor" fontFamily="Inter, sans-serif" textAnchor="middle">
      <textPath href="#sealArcBottom" startOffset="50%">
        REPLY WITHIN 24 HOURS
      </textPath>
    </text>
    <polyline points="50 60 57 67 71 52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function StartAProjectPage() {
  const pageTitle = "Get a Free Quote";

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/start-a-project",
            title: pageTitle,
            description:
              "Submit your project requirements and receive a detailed quote within 24 hours.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: pageTitle, path: "/start-a-project" },
          ]),
        ]}
      />

      {/* ── HERO: dossier header ─────────────────────── */}
      <section className={styles.hero} aria-labelledby="start-heading">
        <div className="container">
          <p className={styles.dossierNo}>Intake · Nº 01</p>
          <h1 id="start-heading" className={styles.heroTitle}>
            Get a detailed <em>quote.</em>
          </h1>
          <p className={styles.heroLede}>
            Four required fields, two minutes of your time. A human reads your brief and replies
            within 24 hours with scope, timeline, and a per-project quote.
          </p>
          <div className={styles.heroFacts}>
            <span>24h response</span>
            <span>Per-project pricing</span>
            <span>No obligation</span>
          </div>
        </div>
      </section>

      {/* ── INTAKE ───────────────────────────────────── */}
      <section className={styles.intake} aria-label="Project intake form">
        <div className="container">
          <div className={styles.intakeGrid}>
            {/* Dossier card with the form */}
            <div className={styles.dossier}>
              <div className={styles.dossierHead}>
                <div>
                  <p className={styles.dossierEyebrow}>Project intake</p>
                  <h2 className={styles.dossierTitle}>Tell us about your project</h2>
                </div>
                <div className={styles.sealWrap} aria-hidden="true">
                  {SEAL}
                </div>
              </div>
              <p className={styles.altContact}>
                Prefer not to fill the form? Message us on{" "}
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a>{" "}
                or email <a href="mailto:contact@projectkaro.com">contact@projectkaro.com</a>.{" "}
                ProjectKaro will share a detailed quote within 24 hours.
              </p>
              <StartProjectForm />
            </div>

            {/* Sticky reassurance rail */}
            <aside className={styles.rail} aria-label="What happens after you submit">
              <div className={styles.emblemCard}>
                <svg viewBox="0 0 200 160" fill="none" aria-hidden="true" className={styles.emblemSvg}>
                  <circle cx="100" cy="80" r="58" className="eWash" />
                  <circle cx="46" cy="44" r="4" fill="#1e56e8" opacity="0.35" />
                  <circle cx="160" cy="120" r="3" fill="#1e56e8" opacity="0.25" />
                  <path d="M30,128 C70,120 102,98 132,70" strokeWidth="2.5" strokeDasharray="5 7" strokeLinecap="round" className="ePath" />
                  <g transform="translate(118,42) scale(2.6)">
                    <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" className="ePlane" />
                    <polyline points="2,10 17,12 2,14" strokeWidth="1.1" fill="none" strokeLinecap="round" className="ePlaneFold" opacity="0.7" />
                  </g>
                </svg>
                <p className={styles.emblemCaption}>
                  Replied within 24 hours.
                </p>
              </div>

              <div className={styles.railCard}>
                <h2 className={styles.railTitle}>What happens next</h2>
                <ol className={styles.nextList}>
                  {NEXT_STEPS.map((step) => (
                    <li key={step.num} className={styles.nextItem}>
                      <span className={styles.nextNum} aria-hidden="true">{step.num}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className={styles.railCard}>
                <h2 className={styles.railTitle}>Our commitment</h2>
                <ul className={styles.commitList}>
                  {COMMITMENTS.map((c) => (
                    <li key={c}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.railCard}>
                <h2 className={styles.railTitle}>Prefer to talk directly?</h2>
                <ul className={styles.directList}>
                  <li>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      <span>WhatsApp us</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:contact@projectkaro.com">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <span>contact@projectkaro.com</span>
                    </a>
                  </li>
                </ul>
                <p className={styles.directNote}>Response within 24 hours.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── REASSURANCE BAND ─────────────────────────── */}
      <section className={styles.reassure} aria-label="Our reassurance">
        <div className="container">
          <p className={styles.reassureText}>
            Every submission is read by a person, not a bot. If anything in your brief is unclear,
            we ask before we quote.
          </p>
        </div>
      </section>
    </>
  );
}
