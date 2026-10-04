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

const pageTitle = "Final Year Major Projects for BTech Students";
const pagePath = "/academic-projects/major-projects";
const pageDescription =
  "Complete final year major projects for BTech and engineering students. Working code, documentation, report support and viva prep, with guidance so you can explain every part of it.";

export const metadata = createPageMetadata({
  title: `${pageTitle}`,
  description: pageDescription,
  path: pagePath,
  keywords: [
    "final year major project btech",
    "btech final year project cse",
    "major project for engineering students",
    "final year project development",
  ],
});

/* Approved copy, restructured for hierarchy. */
const PAINS = [
  {
    title: "The topic is too big to finish",
    text: "Ambitious ideas sound good in the synopsis and collapse near the deadline. We scope your project so it is genuinely finishable on time.",
  },
  {
    title: "Copied code that breaks in the demo",
    text: "Code lifted from the internet rarely runs as-is and falls apart the moment an examiner asks a question. We build working code from scratch.",
  },
  {
    title: "No documentation or report",
    text: "Many students reach the review with code but nothing written down. Documentation and report support come standard with every major project.",
  },
  {
    title: "Viva panic",
    text: "The most common reason for lost marks is not being able to explain your own project. Our walkthrough prepares you for the exact questions examiners ask.",
  },
];

const OUTCOMES = [
  {
    title: "Working code, built with you",
    text: "A complete, running project matched to your branch and syllabus, in web, full-stack, AI/ML, or IoT. Tested before it reaches you, and explained so you can present every part of it.",
  },
  {
    title: "Code you can actually explain",
    text: "Clean, commented code with a walkthrough of the architecture and logic, so every line is something you understand.",
  },
  {
    title: "Documentation and report support",
    text: "Full project documentation plus help structuring your report and presentation, the parts examiners read first.",
  },
  {
    title: "Viva preparation included",
    text: "A preparation session covering implementation, design decisions, and likely examiner questions, so you walk in confident.",
  },
];

const DELIVERABLES = [
  "Complete working source code, tested end to end",
  "Full project documentation",
  "Project report structuring support",
  "Presentation (PPT) guidance",
  "Viva preparation walkthrough covering implementation and logic",
  "Explanation of the architecture in plain terms",
  "Delivery committed before your deadline",
  "Support for corrections after faculty review",
];

const PROCESS = [
  {
    title: "Share your topic and deadline",
    text: "Send your topic, abstract, or just your branch and deadline. Tell us what your college expects.",
  },
  {
    title: "Get a detailed quote in 24 hours",
    text: "A written quote with scope and a delivery timeline that fits your submission date. Per-project pricing.",
  },
  {
    title: "Submit with confidence",
    text: "We build the project, deliver code and documentation, and walk you through everything before your viva.",
  },
];

const FAQS = [
  {
    question: "How long does a major project take to build?",
    answer:
      "Most major projects take 1 to 3 weeks depending on scope and complexity. We agree on a timeline upfront when we share your quote, and we commit to delivering before your deadline.",
  },
  {
    question: "Will I be able to explain the project in my viva?",
    answer:
      "Yes. Every major project includes a walkthrough of the implementation, architecture, and logic, plus preparation for the questions examiners typically ask. You will understand every part of what was built.",
  },
  {
    question: "Do you provide documentation and the project report?",
    answer:
      "Full documentation comes with every project, and we help you structure your project report and presentation. Documentation is never an extra.",
  },
  {
    question: "Which domains and technologies do you cover?",
    answer:
      "Web development, full-stack applications, artificial intelligence and machine learning, IoT and embedded systems, data science, and more across computer science, electronics, and related branches.",
  },
  {
    question: "Can the project be based on my own idea or topic?",
    answer:
      "Yes. Share your approved topic or your own idea and we will build around it. If you do not have a topic yet, we can suggest one that fits your branch and is finishable on time.",
  },
  {
    question: "How is the pricing decided?",
    answer:
      "Pricing is per project, based on scope and complexity after we review your requirements. Share your topic or abstract and we will send a detailed written quote within 24 hours. No fixed price lists, no hidden charges.",
  },
];

const RELATED = [
  {
    name: "Minor Projects",
    path: "/academic-projects/minor-projects",
    blurb: "Short semester projects delivered in 2 to 5 days with documentation.",
  },
  {
    name: "Academic Projects",
    path: "/academic-projects",
    blurb: "The full picture: major, minor, and research project support for students.",
  },
  {
    name: "Website Development",
    path: "/services/website-development",
    blurb: "Need a portfolio site to showcase your project work? We build those too.",
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
  <Icon key="m1">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14" />
  </Icon>,
  <Icon key="m2">
    <path d="M8 6l-6 6 6 6" />
    <path d="M16 6l6 6-6 6" />
  </Icon>,
  <Icon key="m3">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </Icon>,
  <Icon key="m4">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.5 9a2.5 2.5 0 0 1 5 .2c0 1.5-2.5 2-2.5 3.3" />
    <line x1="12" y1="17" x2="12" y2="17.2" />
  </Icon>,
];

const OUTCOME_ICONS = [
  <Icon key="mo1">
    <polyline points="20 6 9 17 4 12" />
  </Icon>,
  <Icon key="mo2">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
  </Icon>,
  <Icon key="mo3">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </Icon>,
  <Icon key="mo4">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Icon>,
];

export default function MajorProjectsPage() {
  return (
    <main className={styles.page}>
      <JsonLd
        data={[
          webPageSchema({
            path: pagePath,
            title: pageTitle,
            description: pageDescription,
          }),
          serviceSchema({
            name: "Final Year Major Project Development",
            description: pageDescription,
            path: pagePath,
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Academic Projects", path: "/academic-projects" },
            { name: "Major Projects", path: pagePath },
          ]),
        ]}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className={styles.crumbNav}>
        <div className="container">
          <ol className={styles.crumbs}>
            <li className={styles.crumbItem}>
              <Link href="/" className={styles.crumbLink}>
                Home
              </Link>
              <span className={styles.crumbSep} aria-hidden="true">
                /
              </span>
            </li>
            <li className={styles.crumbItem}>
              <Link href="/academic-projects" className={styles.crumbLink}>
                Academic Projects
              </Link>
              <span className={styles.crumbSep} aria-hidden="true">
                /
              </span>
            </li>
            <li className={styles.crumbItem}>
              <span className={styles.crumbCurrent} aria-current="page">
                Major Projects
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Split hero: the complete-package visual (code, report, viva)
          makes "built for marks and built to be understood" concrete. */}
      <section className={styles.hero} aria-labelledby="major-title">
        <div className="container">
          <div className={styles.heroGrid}>
            <Reveal className={styles.heroText}>
              <p className={styles.eyebrow}>Major Projects</p>
              <h1 id="major-title" className={styles.title}>
                {pageTitle}
              </h1>
              <p className={styles.intro}>
                Your major project carries the most weight in your final year,
                in marks and in interviews. ProjectKaro helps BTech and engineering
                students build complete, working major projects: real code you
                can explain, full documentation, project report support, and
                viva preparation, ready before your deadline.
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
                  Per-project pricing
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
              <div className={styles.packageStack} aria-hidden="true">
                <div className={`${styles.packageCard} ${styles.packageCode}`}>
                  <span className={styles.packageIcon}>
                    <Icon size={20}>
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </Icon>
                  </span>
                  <strong>Working code</strong>
                  <span>Tested end to end</span>
                </div>
                <div className={`${styles.packageCard} ${styles.packageReport}`}>
                  <span className={styles.packageIcon}>
                    <Icon size={20}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </Icon>
                  </span>
                  <strong>Report and slides</strong>
                  <span>Submission-ready</span>
                </div>
                <div className={`${styles.packageCard} ${styles.packageViva}`}>
                  <span className={styles.packageIcon}>
                    <Icon size={20}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 12 11 14 15 10" />
                    </Icon>
                  </span>
                  <strong>Viva walkthrough</strong>
                  <span>Defend every answer</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pains: the traps that cost marks. Rows. */}
      <section className={styles.pains} aria-labelledby="pains-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The traps</p>
            <h2 id="pains-heading" className={styles.sectionTitle}>
              Why major projects go wrong
            </h2>
            <p className={styles.sectionSub}>
              A major project spans months of your final year. These are the
              traps that cost students marks every semester.
            </p>
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
            <p className={styles.sectionEyebrow}>The package</p>
            <h2 id="outcomes-heading" className={styles.sectionTitle}>
              What you get with ProjectKaro
            </h2>
            <p className={styles.sectionSub}>
              A complete major project package, built for marks and built to
              be understood.
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
                  <li>Based on scope and complexity</li>
                  <li>Detailed written quote within 24 hours</li>
                  <li>No fixed price lists, no hidden charges</li>
                  <li>You approve before any work begins</li>
                </ul>
                <Link href="/start-a-project" className={styles.ctaPrimary}>
                  Get your quote
                  <Icon size={17}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </Icon>
                </Link>
                <p className={styles.priceReassure}>
                  Delivery committed before your deadline.
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process stepper: 3 steps. */}
      <section className={styles.process} aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The process</p>
            <h2 id="process-heading" className={styles.sectionTitle}>
              From topic to submission-ready
            </h2>
          </Reveal>
          <ol className={styles.stepper}>
            {PROCESS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className={styles.stepWrap}>
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
      <section className={styles.faq} aria-labelledby="major-faq-heading">
        <div className="container">
          <Reveal className={styles.faqInner}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 id="major-faq-heading" className={styles.sectionTitle}>
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
      <section className={styles.ctaBand} aria-labelledby="major-cta-heading">
        <div className="container">
          <Reveal className={styles.ctaInner}>
            <p className={styles.ctaEyebrow}>Built for marks</p>
            <h2 id="major-cta-heading" className={styles.ctaTitle}>
              Get your major project done right.
            </h2>
            <p className={styles.ctaText}>
              Send your topic, abstract, or just your branch and deadline. You
              will have a detailed quote with scope and timeline within 24
              hours.
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
        label="Major project? Quote with scope and timeline in 24h"
        buttonText="Get a proposal"
      />
      <BackToTop />
    </main>
  );
}
