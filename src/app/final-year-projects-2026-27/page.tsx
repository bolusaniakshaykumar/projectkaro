import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { BackToTop, Reveal, StickyMiniCta } from "@/components/PageKit/PageKit";
import { WHATSAPP_LINK } from "@/lib/site-config";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  webPageSchema,
} from "@/lib/seo";
import styles from "./page.module.css";

const pageTitle = "Final-Year Projects 2026-27";
const pagePath = "/final-year-projects-2026-27";
const pageDescription =
  "Final-year engineering projects for 2026-27: IoT, machine learning, web and IEEE-format paper support. Working code, documentation and viva prep, built with you. 300+ students mentored. Quote within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} | IoT, ML, Web & IEEE Support`,
  description: pageDescription,
  path: pagePath,
  keywords: [
    "final year projects 2026-27",
    "btech final year project",
    "iot final year project",
    "machine learning final year project",
    "ieee paper support",
    "engineering final year project hyderabad",
  ],
});

const TRACKS = [
  {
    title: "IoT Projects",
    text: "Sensor-based builds with working hardware-software integration, matched to your branch and syllabus. You get a running prototype plus documentation you can defend.",
  },
  {
    title: "Machine Learning Projects",
    text: "ML implementations with clean, commented code and results you can explain. Model choice, training and evaluation walked through with you, step by step.",
  },
  {
    title: "Web Projects",
    text: "Full-stack web applications with real functionality, not mockups. Deployed, documented and demo-ready for your review panel.",
  },
  {
    title: "IEEE-Format Papers",
    text: "Research paper support in IEEE format: structure, formatting, figures and references, aligned with your project implementation.",
  },
];

const PROCESS = [
  {
    title: "Share your brief",
    text: "Your branch, topic or abstract, and the deadline that cannot move. WhatsApp or the quote form, whichever is faster.",
  },
  {
    title: "Scoped quote in 24 hours",
    text: "A detailed proposal: exactly what gets built, what you receive, and the timeline, priced per project.",
  },
  {
    title: "Built with you",
    text: "Milestone updates as the project takes shape. Every part is explained so you can present and defend it yourself.",
  },
  {
    title: "Submission-ready delivery",
    text: "Working code, documentation, report support and a viva walkthrough, planned backwards from your deadline.",
  },
];

const FAQS = [
  {
    question: "Do you build the project for me or with me?",
    answer:
      "With you. We build the implementation, but every part is explained so you can present it, answer examiner questions, and defend your work. A project you cannot explain is a project that loses marks.",
  },
  {
    question: "Which branches and technologies do you support?",
    answer:
      "IoT, machine learning, and web projects across engineering branches. Each project is matched to your branch and syllabus, not pulled from a generic list.",
  },
  {
    question: "Do you support IEEE-format research papers?",
    answer:
      "Yes. IEEE-format paper support covers structure, formatting, figures and references, aligned with your project implementation.",
  },
  {
    question: "What exactly do I receive?",
    answer:
      "Working code, complete documentation, report support, and a viva walkthrough. Everything is scoped in writing before we start, so there are no surprises.",
  },
  {
    question: "My deadline is close. Can you still help?",
    answer:
      "We plan backwards from your deadline and tell you honestly what is finishable in the time left. If the timeline is too tight for quality work, we say so upfront.",
  },
  {
    question: "How do I start?",
    answer:
      "Message us on WhatsApp or submit the quote form with your branch, topic and deadline. You will have a detailed quote with scope and timeline within 24 hours.",
  },
];

export default function FinalYearProjects202627() {
  return (
    <main className={styles.page}>
      <JsonLd
        data={[
          webPageSchema({
            title: `${pageTitle} | ProjectKaro`,
            description: pageDescription,
            path: pagePath,
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Academic Projects", path: "/academic-projects" },
            { name: pageTitle, path: pagePath },
          ]),
        ]}
      />

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="fyp-hero-h">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Admissions open · 2026-27</p>
            <h1 id="fyp-hero-h" className={styles.heroTitle}>
              Final-year projects, <em>done right.</em>
            </h1>
            <p className={styles.heroLede}>
              IoT, machine learning, web projects and IEEE-format paper
              support for the 2026-27 academic year. Working code,
              documentation and viva prep, built with you. We have mentored
              300+ engineering students through final-year projects.
            </p>
            <div className={styles.heroCtas}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimary}
              >
                Chat on WhatsApp
              </a>
              <Link href="/start-a-project" className={styles.ctaGhost}>
                Get your quote
              </Link>
            </div>
            <p className={styles.heroNote}>
              Detailed quote with scope and timeline within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACKS */}
      <section className={styles.tracks} aria-labelledby="fyp-tracks-h">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>What we take on</p>
            <h2 id="fyp-tracks-h" className={styles.sectionTitle}>
              Four tracks, one standard.
            </h2>
          </Reveal>
          <div className={styles.trackGrid}>
            {TRACKS.map((t, i) => (
              <Reveal key={t.title} delay={i * 80}>
                <article className={styles.trackCard}>
                  <h3 className={styles.trackTitle}>{t.title}</h3>
                  <p className={styles.trackText}>{t.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF STRIP */}
      <section className={styles.proofStrip} aria-label="ProjectKaro track record">
        <div className="container">
          <div className={styles.proofGrid}>
            <div className={styles.proofItem}>
              <span className={styles.proofValue}>300+</span>
              <span className={styles.proofLabel}>
                Engineering students mentored through final-year projects
              </span>
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofValue}>100+</span>
              <span className={styles.proofLabel}>
                Projects delivered across academic, research and business work
              </span>
            </div>
            <div className={styles.proofItem}>
              <span className={styles.proofValue}>23</span>
              <span className={styles.proofLabel}>
                Person team: developers, the IoT team, interns and campus
                ambassadors
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.process} aria-labelledby="fyp-process-h">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The process</p>
            <h2 id="fyp-process-h" className={styles.sectionTitle}>
              From topic to submission-ready.
            </h2>
          </Reveal>
          <ol className={styles.stepper}>
            {PROCESS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <li className={styles.step}>
                  <span className={styles.stepNum} aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} aria-labelledby="fyp-faq-h">
        <div className="container">
          <Reveal className={styles.faqInner}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 id="fyp-faq-h" className={styles.sectionTitle}>
              Common questions
            </h2>
            <div className={styles.faqList}>
              {FAQS.map((faq) => (
                <details key={faq.question} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>
                    <span>{faq.question}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className={styles.ctaBand} aria-labelledby="fyp-cta-h">
        <div className="container">
          <Reveal className={styles.ctaInner}>
            <p className={styles.ctaEyebrow}>2026-27 intake</p>
            <h2 id="fyp-cta-h" className={styles.ctaTitle}>
              Your deadline is fixed. Start now.
            </h2>
            <p className={styles.ctaText}>
              Send your branch, topic and deadline. You will have a detailed
              quote with scope and timeline within 24 hours.
            </p>
            <div className={styles.ctaActions}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaPrimaryLight}
              >
                Chat on WhatsApp
              </a>
              <Link href="/start-a-project" className={styles.ctaGhostLight}>
                Get your quote
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <StickyMiniCta
        label="Final-year project 2026-27? Quote with scope and timeline in 24h"
        buttonText="Get a quote"
      />
      <BackToTop />
    </main>
  );
}
