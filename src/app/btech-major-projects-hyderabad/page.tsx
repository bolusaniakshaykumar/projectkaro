import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { BackToTop, Reveal, StickyMiniCta } from "@/components/PageKit/PageKit";
import { WHATSAPP_LINK } from "@/lib/site-config";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";
import styles from "./page.module.css";

const PATH = "/btech-major-projects-hyderabad";
const pageTitle = "B.Tech Major Projects in Hyderabad";
const pageDescription =
  "B.Tech major project development in Hyderabad for CSE, IT, ECE and other branches. AI/ML, IoT, web, full-stack and cybersecurity projects with documentation and viva prep.";

export const metadata = createPageMetadata({
  title: `${pageTitle} | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "btech major projects hyderabad",
    "final year projects hyderabad",
    "btech project development hyderabad",
    "engineering final year projects hyderabad",
    "cse major project hyderabad",
    "ai ml final year project hyderabad",
    "ieee projects hyderabad",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: pageTitle, path: PATH },
];

/* Approved copy, restructured for hierarchy. */
const PAINS = [
  {
    title: "Copied projects collapse in the demo",
    text: "Downloaded code that nobody understands falls apart the moment the examiner asks a question or the demo hits an edge case.",
  },
  {
    title: "Oversized topics that can't finish in time",
    text: "Ambitious IEEE paper titles that need six months get picked for a six-week timeline, and the project never reaches a working state.",
  },
  {
    title: "Documentation written on the last night",
    text: "The report gets rushed hours before submission, full of screenshots that don't match the code and sections borrowed from elsewhere.",
  },
  {
    title: "Viva questions you can't answer",
    text: "When you didn't build it, every 'why did you choose this?' becomes a risk. Examiners can tell the difference immediately.",
  },
];

const OUTCOMES = [
  {
    title: "Working code you can demo and explain",
    text: "A real, running project in your domain, built cleanly so you can walk through every module with confidence.",
  },
  {
    title: "Complete report and presentation slides",
    text: "A submission-ready project report and a presentation deck, written to match the actual implementation.",
  },
  {
    title: "A viva walkthrough that makes you the owner",
    text: "We go through the architecture, the choices, and the likely questions with you, until you can defend every part.",
  },
  {
    title: "A deadline-first plan with an honest feasibility check",
    text: "We scope the project backwards from your submission date and tell you upfront if a topic can't be done in time.",
  },
];

/* Sample project ideas (sample content, labeled). */
const PROJECT_IDEAS = [
  { name: "Biometric Sentinel", blurb: "Face recognition pipeline", stack: "YOLOv8, FaceNet" },
  { name: "SkinCare AI", blurb: "CNN skin analysis served as a web app", stack: "Python, PyTorch, FastAPI" },
  { name: "Li-Ion Battery SOH", blurb: "Battery health prediction", stack: "Python, TensorFlow" },
  { name: "Ecommerce Recommendation System", blurb: "Hybrid product recommender", stack: "FastAPI, scikit-learn" },
];

const DELIVERABLES = [
  "Complete working source code, written clean and commented",
  "Project report formatted for submission",
  "Presentation slides for your final review",
  "Viva preparation walkthrough so you own every answer",
  "Setup guide to run the project on your own machine",
  "Revisions until your submission is complete",
  "An honest deadline feasibility check before you pay anything",
];

const PROCESS = [
  {
    title: "Share your topic and deadline",
    text: "Tell us your branch, your topic or abstract, and your submission date.",
  },
  {
    title: "Honest feasibility check",
    text: "We tell you upfront whether the scope fits your timeline, before you pay anything.",
  },
  {
    title: "Build and documentation",
    text: "We build the working project with the report and slides, matched to the implementation.",
  },
  {
    title: "Viva walkthrough",
    text: "We walk you through the architecture and likely questions until you can defend every part.",
  },
];

const FAQS = [
  {
    question: "I'm in Hyderabad. Do we meet in person?",
    answer:
      "ProjectKaro is based in Hyderabad. Most students coordinate with us over WhatsApp and calls, which keeps things fast around college schedules. If you prefer, an in-person discussion can be arranged too.",
  },
  {
    question: "Which branches and domains do you cover?",
    answer:
      "We work with CSE, IT, ECE, EEE and related engineering branches. Domains include AI and machine learning, deep learning, computer vision, NLP, data science, IoT and embedded systems, cybersecurity, cloud, and full-stack web development.",
  },
  {
    question: "Can you finish before my deadline?",
    answer:
      "Major projects typically take 1 to 3 weeks depending on scope. We plan backwards from your submission date and confirm feasibility before starting, so you never discover the timeline is impossible halfway through.",
  },
  {
    question: "Will I be able to explain the project in my viva?",
    answer:
      "Yes. Every major project includes a viva walkthrough where we go through the architecture, the technology choices, and the questions examiners usually ask, until you can defend the work confidently.",
  },
  {
    question: "Do I get documentation with the project?",
    answer:
      "You get a complete project report formatted for submission, presentation slides, and a setup guide. Documentation is written against the actual implementation, not copied from elsewhere.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is per project and depends on scope, so there is no fixed price list. Share your topic, branch, and deadline and we respond within 24 hours with a detailed quote. You approve the quote before any work begins.",
  },
];

const RELATED = [
  {
    name: "Major Projects",
    path: "/academic-projects/major-projects",
    blurb: "Final-year major project delivery across India, planned backwards from your deadline.",
  },
  {
    name: "Academic Projects",
    path: "/academic-projects",
    blurb: "Major, minor, and research project support for students.",
  },
  {
    name: "Website Development in Hyderabad",
    path: "/website-development-hyderabad",
    blurb: "Professional websites for Hyderabad businesses.",
  },
];

function Icon({
  children,
  size = 26,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const PAIN_ICONS = [
  <Icon key="c1">
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </Icon>,
  <Icon key="c2">
    <path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </Icon>,
  <Icon key="c3">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </Icon>,
  <Icon key="c4">
    <circle cx="12" cy="12" r="10" />
    <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </Icon>,
];

const OUTCOME_ICONS = [
  <Icon key="o1">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </Icon>,
  <Icon key="o2">
    <rect x="2" y="4" width="20" height="14" rx="2" />
    <line x1="8" y1="22" x2="16" y2="22" />
    <line x1="12" y1="18" x2="12" y2="22" />
  </Icon>,
  <Icon key="o3">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </Icon>,
  <Icon key="o4">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </Icon>,
];

/* Deadline-first calendar line art for the hero visual. */
const DEADLINE_ART = (
  <svg
    viewBox="0 0 320 220"
    fill="none"
    aria-hidden="true"
    className={styles.heroArtSvg}
  >
    <rect x="88" y="30" width="152" height="150" rx="14" className={styles.artPaper} />
    <path d="M88,44 Q88,30 102,30 L226,30 Q240,30 240,44 L240,62 L88,62 Z" className={styles.artWash} />
    <rect x="122" y="14" width="14" height="30" rx="7" className={styles.artPaper} />
    <rect x="192" y="14" width="14" height="30" rx="7" className={styles.artPaper} />
    {[0, 1, 2, 3].map((col) =>
      [0, 1, 2].map((row) => (
        <rect
          key={`${col}-${row}`}
          x={110 + col * 28}
          y={80 + row * 26}
          width="15"
          height="15"
          rx="7.5"
          className={styles.artDot}
        />
      ))
    )}
    <rect x={110 + 3 * 28} y={80 + 2 * 26} width="15" height="15" rx="7.5" className={styles.artDotNow} />
    <circle cx="262" cy="180" r="30" className={styles.artPaper} />
    <polyline
      points="250,180 259,189 276,170"
      className={styles.artCheck}
    />
  </svg>
);

export default function BTechMajorProjectsHyderabadPage() {
  return (
    <main className={styles.page}>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            title: pageTitle,
            description: pageDescription,
          }),
          serviceSchema({
            name: pageTitle,
            description: pageDescription,
            path: PATH,
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema(CRUMBS),
        ]}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className={styles.crumbNav}>
        <div className="container">
          <ol className={styles.crumbs}>
            {CRUMBS.map((c, i) => (
              <li key={c.path} className={styles.crumbItem}>
                {i < CRUMBS.length - 1 ? (
                  <>
                    <Link href={c.path} className={styles.crumbLink}>
                      {c.name}
                    </Link>
                    <span className={styles.crumbSep} aria-hidden="true">
                      /
                    </span>
                  </>
                ) : (
                  <span className={styles.crumbCurrent} aria-current="page">
                    {c.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Split hero: deadline-first. The calendar art makes "planned
          backwards from your deadline" tangible instead of a claim. */}
      <section className={styles.hero} aria-labelledby="btech-title">
        <div className="container">
          <div className={styles.heroGrid}>
            <Reveal className={styles.heroText}>
              <p className={styles.eyebrow}>Hyderabad · Final year</p>
              <h1 id="btech-title" className={styles.title}>
                {pageTitle}
              </h1>
              <p className={styles.intro}>
                ProjectKaro provides B.Tech major project development and technical
                support in Hyderabad for final-year engineering students. Working
                projects with complete documentation, presentation slides, and viva
                preparation, planned backwards from your submission deadline.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/start-a-project" className={styles.ctaPrimary}>
                  Get a proposal
                  <Icon size={17}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </Icon>
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaSecondary}
                >
                  <Icon size={17}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </Icon>
                  Chat on WhatsApp
                </a>
              </div>
              <div className={styles.trustRow}>
                <span className={styles.trustItem}>
                  <span className={styles.trustCheck} aria-hidden="true">
                    <Icon size={13}>
                      <polyline points="20 6 9 17 4 12" strokeWidth={2.4} />
                    </Icon>
                  </span>
                  Based in Hyderabad
                </span>
                <span className={styles.trustItem}>
                  <span className={styles.trustCheck} aria-hidden="true">
                    <Icon size={13}>
                      <polyline points="20 6 9 17 4 12" strokeWidth={2.4} />
                    </Icon>
                  </span>
                  Detailed quote within 24 hours
                </span>
              </div>
            </Reveal>
            <Reveal className={styles.heroVisual} delay={120}>
              <div className={styles.heroArt}>{DEADLINE_ART}</div>
              <div className={styles.floatCard} aria-hidden="true">
                <span className={styles.floatIcon}>
                  <Icon size={18}>
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </span>
                <span className={styles.floatText}>
                  <strong>Feasibility confirmed</strong>
                  <span>Fits your deadline (sample)</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pains: why final-year projects go wrong. Rows. */}
      <section className={styles.pains} aria-labelledby="pains-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The traps</p>
            <h2 id="pains-heading" className={styles.sectionTitle}>
              Why final-year projects go wrong
            </h2>
          </Reveal>
          <div className={styles.painRows}>
            {PAINS.map((pain, i) => (
              <Reveal key={pain.title} delay={Math.min(i, 3) * 70}>
                <article className={styles.painRow}>
                  <span className={styles.painIcon} aria-hidden="true">
                    {PAIN_ICONS[i]}
                  </span>
                  <div>
                    <h3 className={styles.painTitle}>{pain.title}</h3>
                    <p className={styles.painText}>{pain.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes: bento. */}
      <section className={styles.outcomes} aria-labelledby="outcomes-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The delivery</p>
            <h2 id="outcomes-heading" className={styles.sectionTitle}>
              What a ProjectKaro major project looks like
            </h2>
            <p className={styles.sectionSub}>
              Every project ships the same way:
            </p>
          </Reveal>
          <div className={styles.outcomeBento}>
            {OUTCOMES.map((outcome, i) => (
              <Reveal
                key={outcome.title}
                delay={(i % 2) * 90}
                className={`${styles.outcomeCard} ${i === 0 ? styles.outcomeLead : ""}`}
              >
                <span className={styles.outcomeIcon} aria-hidden="true">
                  {OUTCOME_ICONS[i]}
                </span>
                <h3 className={styles.outcomeTitle}>{outcome.title}</h3>
                <p className={styles.outcomeText}>{outcome.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sample project ideas: proof of range, labeled sample. */}
      <section className={styles.ideas} aria-labelledby="ideas-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>Sample project ideas</p>
            <h2 id="ideas-heading" className={styles.sectionTitle}>
              The kind of projects we build
            </h2>
            <p className={styles.sectionSub}>
              Sample project ideas to show range. Bring your own topic, or pick
              one of these directions and we scope it for your deadline.
            </p>
          </Reveal>
          <div className={styles.ideaGrid}>
            {PROJECT_IDEAS.map((idea, i) => (
              <Reveal key={idea.name} delay={i * 90}>
                <article className={styles.ideaCard}>
                  <p className={styles.ideaSample}>Sample idea</p>
                  <h3 className={styles.ideaName}>{idea.name}</h3>
                  <p className={styles.ideaBlurb}>{idea.blurb}</p>
                  <p className={styles.ideaStack}>{idea.stack}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + pricing card. */}
      <section className={styles.includes} aria-labelledby="includes-heading">
        <div className="container">
          <div className={styles.includesGrid}>
            <Reveal>
              <p className={styles.sectionEyebrow}>What is included</p>
              <h2 id="includes-heading" className={styles.sectionTitle}>
                Every major project includes
              </h2>
              <ul className={styles.checklist}>
                {DELIVERABLES.map((item) => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkBadge} aria-hidden="true">
                      <Icon size={14}>
                        <polyline points="20 6 9 17 4 12" strokeWidth={2.4} />
                      </Icon>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <aside className={styles.priceCard} aria-label="Pricing">
                <p className={styles.priceKicker}>Major projects</p>
                <p className={styles.priceValue}>Per-project pricing</p>
                <ul className={styles.pricePoints}>
                  <li>Priced on scope, never a fixed list</li>
                  <li>Detailed quote within 24 hours</li>
                  <li>Honest feasibility check before you pay</li>
                  <li>You approve the quote before work begins</li>
                </ul>
                <Link href="/start-a-project" className={styles.ctaPrimary}>
                  Get your quote
                  <Icon size={17}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </Icon>
                </Link>
                <p className={styles.priceReassure}>
                  No hidden charges. No obligation.
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process stepper */}
      <section className={styles.process} aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The process</p>
            <h2 id="process-heading" className={styles.sectionTitle}>
              From topic to viva-ready
            </h2>
          </Reveal>
          <ol className={styles.stepper}>
            {PROCESS.map((step, i) => (
              <li key={step.title} className={styles.stepWrap}>
                <Reveal delay={i * 90} className={styles.stepReveal}>
                  <div className={styles.step}>
                    <span className={styles.stepNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} aria-labelledby="btech-faq-heading">
        <div className="container">
          <Reveal className={styles.faqInner}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 id="btech-faq-heading" className={styles.sectionTitle}>
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

      {/* Related */}
      <section className={styles.related} aria-labelledby="related-heading">
        <div className="container">
          <Reveal>
            <h2 id="related-heading" className={styles.relatedTitle}>
              Related
            </h2>
          </Reveal>
          <div className={styles.relatedGrid}>
            {RELATED.map((link, i) => (
              <Reveal key={link.path} delay={i * 90}>
                <Link href={link.path} className={styles.relatedCard}>
                  <h3 className={styles.relatedName}>{link.name}</h3>
                  <p className={styles.relatedBlurb}>{link.blurb}</p>
                  <span className={styles.relatedArrow} aria-hidden="true">
                    <Icon size={16}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </Icon>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA band */}
      <section className={styles.ctaBand} aria-labelledby="btech-cta-heading">
        <div className="container">
          <Reveal className={styles.ctaInner}>
            <p className={styles.ctaEyebrow}>Based in Hyderabad</p>
            <h2 id="btech-cta-heading" className={styles.ctaTitle}>
              Get your major project ready before your deadline
            </h2>
            <p className={styles.ctaText}>
              Share your topic, branch, and submission date. ProjectKaro responds
              within 24 hours with a detailed quote and a delivery plan built
              around your deadline.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/start-a-project" className={styles.ctaPrimaryLight}>
                Get your proposal
                <Icon size={17}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </Icon>
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaGhostLight}
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <StickyMiniCta
        label="Final-year project? Feasibility check before you pay"
        buttonText="Get a proposal"
      />
      <BackToTop />
    </main>
  );
}
