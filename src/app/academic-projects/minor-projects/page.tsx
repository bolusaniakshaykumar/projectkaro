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

const pageTitle = "Mini and Minor Projects for BTech Students";
const pagePath = "/academic-projects/minor-projects";
const pageDescription =
  "Quick minor and mini projects for BTech students, delivered in 2 to 5 days with working code and documentation. Per-project pricing, quote within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle}`,
  description: pageDescription,
  path: pagePath,
  keywords: [
    "mini project for btech",
    "minor project for engineering students",
    "btech mini project cse",
    "semester project help",
  ],
});

/* Approved copy, restructured for hierarchy. */
const PAINS = [
  {
    title: "The deadline is days away",
    text: "Semester reviews arrive faster than expected. We are set up for exactly this: complete minor projects delivered in 2 to 5 days.",
  },
  {
    title: "Topic approved, no code yet",
    text: "Getting the topic signed off is only step one. We take it from an approved title to a running project without delay.",
  },
  {
    title: "Borrowed code that will not run",
    text: "Half-working code from seniors or the internet wastes the little time you have. We build clean, running code from the start.",
  },
  {
    title: "No time left for documentation",
    text: "Reviews need more than a demo. Documentation comes with the project, so you are not writing it at midnight before the review.",
  },
];

const OUTCOMES = [
  {
    title: "Delivered in 2 to 5 days",
    text: "A turnaround built for semester timelines. Tell us your review date and we plan backwards from it.",
  },
  {
    title: "Working code, guaranteed",
    text: "Your project runs when the reviewer opens it. We test everything before delivery, no last-minute debugging on your side.",
  },
  {
    title: "Documentation included",
    text: "Project documentation ships with the code, plus help with your report and presentation outline.",
  },
  {
    title: "Explain it with confidence",
    text: "A walkthrough of what was built and why, so you can answer reviewer questions without memorising scripts.",
  },
];

const DELIVERABLES = [
  "Complete working source code, tested before delivery",
  "Project documentation",
  "Setup and run instructions",
  "Walkthrough explaining the implementation",
  "Report and presentation outline support",
  "Delivery in 2 to 5 days from confirmed requirements",
  "Revision support after faculty feedback",
];

const PROCESS = [
  {
    title: "Share topic and review date",
    text: "Your approved topic and the date you need it ready.",
  },
  {
    title: "Confirmed quote and timeline",
    text: "A written quote with a confirmed delivery date, within 24 hours.",
  },
  {
    title: "Review-ready delivery",
    text: "Working code, documentation, and a walkthrough before your review.",
  },
];

const FAQS = [
  {
    question: "Can you really deliver in 2 to 5 days?",
    answer:
      "Yes, for standard minor and mini project scopes. When you share your requirements we confirm the exact timeline in your quote, and we plan backwards from your review date.",
  },
  {
    question: "Is documentation really included?",
    answer:
      "Yes. Documentation ships with every minor project, along with help structuring your report and presentation outline. It is part of the package, not an add-on.",
  },
  {
    question: "Can I suggest my own topic?",
    answer:
      "Absolutely. Share your approved topic and we build it. If you are still choosing, we can suggest a topic that fits your branch and can be completed well within your timeline.",
  },
  {
    question: "What does a minor project cost?",
    answer:
      "Minor projects start from ₹2,500 (indicative). Final pricing is per project based on scope. Share your requirements and we will send a detailed written quote within 24 hours.",
  },
  {
    question: "Will I understand the code well enough for the review?",
    answer:
      "Yes. Every delivery includes a walkthrough of the implementation in plain terms, so you can explain what was built and answer reviewer questions confidently.",
  },
  {
    question: "What if my faculty asks for changes after the review?",
    answer:
      "Revision support after faculty feedback is included. Tell us what was asked for and we will make the corrections.",
  },
];

const RELATED = [
  {
    name: "Major Projects",
    path: "/academic-projects/major-projects",
    blurb: "Final year major projects with full documentation and viva prep.",
  },
  {
    name: "Academic Projects",
    path: "/academic-projects",
    blurb: "The full picture: major, minor, and research project support for students.",
  },
  {
    name: "Website Development",
    path: "/services/website-development",
    blurb: "Want a portfolio site to present your project work? We build those too.",
  },
];

function Icon({
  children,
  size = 24,
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
  <Icon key="n1">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14" />
  </Icon>,
  <Icon key="n2">
    <path d="M9 18l6-6-6-6" />
  </Icon>,
  <Icon key="n3">
    <path d="M8 6l-6 6 6 6" />
    <path d="M16 6l6 6-6 6" />
  </Icon>,
  <Icon key="n4">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
  </Icon>,
];

const OUTCOME_ICONS = [
  <Icon key="no1">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Icon>,
  <Icon key="no2">
    <polyline points="20 6 9 17 4 12" />
  </Icon>,
  <Icon key="no3">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </Icon>,
  <Icon key="no4">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Icon>,
];

export default function MinorProjectsPage() {
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
            name: "Mini and Minor Project Development",
            description: pageDescription,
            path: pagePath,
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Academic Projects", path: "/academic-projects" },
            { name: "Minor Projects", path: pagePath },
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
                Minor Projects
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Compact hero: speed is the message, so the hero is short and the
          "2 to 5 days" stat is the visual climax. */}
      <section className={styles.hero} aria-labelledby="minor-title">
        <div className="container">
          <Reveal className={styles.heroCenter}>
            <p className={styles.eyebrow}>Minor Projects</p>
            <h1 id="minor-title" className={styles.title}>
              {pageTitle}
            </h1>
            <p className={styles.intro}>
              Minor and mini projects are short semester deliverables, but they
              still need working code and proper documentation. ProjectKaro
              delivers complete minor projects for BTech and engineering students
              in 2 to 5 days: running code, documentation, and an explanation
              you can defend in the review.
            </p>
            <div className={styles.speedStrip}>
              <div className={styles.speedStat}>
                <span className={styles.speedNum}>2-5</span>
                <span className={styles.speedLabel}>days, typical delivery</span>
              </div>
              <div className={styles.speedStat}>
                <span className={styles.speedNum}>24h</span>
                <span className={styles.speedLabel}>quote turnaround</span>
              </div>
              <div className={styles.speedStat}>
                <span className={styles.speedNum}>₹2,500+</span>
                <span className={styles.speedLabel}>indicative starting price</span>
              </div>
            </div>
            <div className={styles.heroCtas}>
              <Link href="/start-a-project" className={styles.ctaPrimary}>
                Get a quote
                <Icon size={16}>
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
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Outcomes: tight 2x2 grid. Fast reading, fast rhythm. */}
      <section className={styles.outcomes} aria-labelledby="outcomes-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>What you get</p>
            <h2 id="outcomes-heading" className={styles.sectionTitle}>
              Done fast, done properly
            </h2>
            <p className={styles.sectionSub}>
              Speed without shortcuts: everything a minor project review expects.
            </p>
          </Reveal>
          <div className={styles.outcomeGrid}>
            {OUTCOMES.map((outcome, i) => (
              <Reveal key={outcome.title} delay={(i % 2) * 80}>
                <article className={styles.outcomeCard}>
                  <span className={styles.outcomeIcon} aria-hidden="true">
                    {OUTCOME_ICONS[i]}
                  </span>
                  <div>
                    <h3 className={styles.outcomeTitle}>{outcome.title}</h3>
                    <p className={styles.outcomeText}>{outcome.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pains: compact 2x2. */}
      <section className={styles.pains} aria-labelledby="pains-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The traps</p>
            <h2 id="pains-heading" className={styles.sectionTitle}>
              Why minor projects become stressful
            </h2>
            <p className={styles.sectionSub}>
              They look small on the syllabus and turn urgent fast. Here is what
              usually goes wrong.
            </p>
          </Reveal>
          <div className={styles.painGrid}>
            {PAINS.map((pain, i) => (
              <Reveal key={pain.title} delay={(i % 2) * 80}>
                <article className={styles.painCard}>
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

      {/* Deliverables: compact checklist band. */}
      <section className={styles.includes} aria-labelledby="includes-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>What is included</p>
            <h2 id="includes-heading" className={styles.sectionTitle}>
              Every minor project includes
            </h2>
          </Reveal>
          <Reveal delay={80}>
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
        </div>
      </section>

      {/* Process: condensed 3-step stepper. */}
      <section className={styles.process} aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The process</p>
            <h2 id="process-heading" className={styles.sectionTitle}>
              Three steps to review-ready
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
      <section className={styles.faq} aria-labelledby="minor-faq-heading">
        <div className="container">
          <Reveal className={styles.faqInner}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 id="minor-faq-heading" className={styles.sectionTitle}>
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
      <section className={styles.ctaBand} aria-labelledby="minor-cta-heading">
        <div className="container">
          <Reveal className={styles.ctaInner}>
            <p className={styles.ctaEyebrow}>2 to 5 days delivery</p>
            <h2 id="minor-cta-heading" className={styles.ctaTitle}>
              Review date coming up? Let us handle the build.
            </h2>
            <p className={styles.ctaText}>
              Send your topic and your deadline. You will have a detailed quote
              with a confirmed delivery date within 24 hours.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/start-a-project" className={styles.ctaPrimaryLight}>
                Get your quote
                <Icon size={16}>
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
        label="Review coming up? Delivery in 2 to 5 days"
        buttonText="Get a quote"
      />
      <BackToTop />
    </main>
  );
}
