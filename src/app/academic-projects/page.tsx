import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { FormSkeleton } from "@/components/Skeleton/Skeleton";
import { BackToTop, Reveal, StickyMiniCta } from "@/components/PageKit/PageKit";
import { WHATSAPP_LINK } from "@/lib/site-config";
import type { FaqItem } from "@/lib/faq-data";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  webPageSchema,
} from "@/lib/seo";
import styles from "./page.module.css";

const StartProjectForm = dynamic(() => import("@/components/StartProjectForm/StartProjectForm"), {
  loading: () => <FormSkeleton />,
});

export const metadata = createPageMetadata({
  title: "B.Tech Major Projects in Hyderabad | ProjectKaro",
  description:
    "B.Tech major project development in Hyderabad for CSE, IT, ECE and other engineering branches. AI/ML, web, IoT and full-stack projects with documentation and viva prep.",
  path: "/academic-projects",
  keywords: [
    "btech major projects hyderabad",
    "final year project hyderabad",
    "student major project help",
    "final year project india",
    "academic project documentation",
    "viva preparation support",
  ],
});

const pageTitle = "Academic Projects";

const ANGLES = [
  {
    title: "Deadline pressure",
    text: "Your submission date is fixed. Tell us the deadline and we plan backwards from it, with a working project ready before you need it.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Full documentation",
    text: "Every project comes with a complete report: abstract, design, implementation, testing, and conclusion, plus presentation slides.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Viva preparation",
    text: "We walk you through your own project before the viva, so you can explain the architecture, the logic, and the choices with confidence.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2-2V8z" />
      </svg>
    ),
  },
  {
    title: "Your topic, your tech",
    text: "Pick your own idea and stack, or ask us for suggestions that match your department's expectations and your skill level.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const WHAT_YOU_GET = [
  "Complete working source code, clean and commented",
  "Project report formatted for submission",
  "Presentation slides for your demo",
  "Viva preparation walkthrough session",
  "Setup guide, so you can run it on your own machine",
  "Revisions until your submission is complete",
];

const MINI_STEPS = [
  {
    num: "01",
    title: "Share your topic and deadline",
    text: "Fill the form or message us on WhatsApp. Attach your abstract if you have one. Tell us your deadline and your college requirements.",
  },
  {
    num: "02",
    title: "Get a detailed quote in 24 hours",
    text: "We respond within 24 hours with a detailed quote and a delivery plan that fits your deadline. Per-project pricing, nothing vague.",
  },
  {
    num: "03",
    title: "Submit with confidence",
    text: "We build the project, deliver the code and documentation, and walk you through everything before your viva or presentation.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "Can you finish my major project before my deadline?",
    answer:
      "Yes. Your deadline is the first thing we plan around. Most major projects take 1 to 3 weeks, and we confirm a delivery date before starting. Tell us your submission date in the form and we will tell you honestly whether it fits.",
  },
  {
    question: "Do you provide documentation and a project report?",
    answer:
      "Yes. Every student project includes a complete report: abstract, design, implementation, testing, and conclusion, plus presentation slides. Documentation is part of the delivery, not an extra.",
  },
  {
    question: "What if my viva asks questions I cannot answer?",
    answer:
      "We include a viva preparation walkthrough where we explain your project's architecture, logic, and implementation choices in detail. You will understand your own project well enough to handle the viva confidently.",
  },
  {
    question: "Can I choose my own project topic?",
    answer:
      "Yes. Bring your own topic, or ask us to suggest ideas that suit your department, your skills, and current trends. We will scope it so it is achievable within your deadline.",
  },
  {
    question: "Do you take minor projects with short deadlines?",
    answer:
      "Yes. Minor and semester projects are typically delivered in 2 to 5 days. If your deadline is tighter, mention it when you submit the form and we will tell you what is possible.",
  },
  {
    question: "Do you work with students in Hyderabad?",
    answer:
      "Yes. ProjectKaro is based in Hyderabad and works directly with final-year engineering students here on major projects: implementation, documentation, testing, and viva preparation. You talk to us on WhatsApp or call, with no middlemen.",
  },
  {
    question: "How does the pricing work for student projects?",
    answer:
      "Pricing is per project, based on the complexity and your requirements. Submit your topic and deadline, and ProjectKaro will share a detailed quote within 24 hours. There are no fixed prices and no hidden charges.",
  },
];

const CHECK_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ARROW_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* Custom line-art: the submission package (document, slides, checklist) */
const PACKAGE_ART = (
  <svg viewBox="0 0 560 220" fill="none" aria-hidden="true" className="artSvg">
    <g>
      <rect x="36" y="34" width="150" height="152" rx="8" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
      <path d="M150,34 L186,34 L186,70 Z" strokeWidth="2.5" strokeLinejoin="round" className="artFold" />
      <rect x="58" y="96" width="90" height="10" rx="5" className="artBrandSoft" />
      <rect x="58" y="118" width="106" height="10" rx="5" className="artBrandSoft" />
      <rect x="58" y="140" width="70" height="10" rx="5" className="artBrandSoft" />
    </g>
    <g>
      <rect x="216" y="60" width="150" height="126" rx="8" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
      <path d="M216,68 Q216,60 224,60 L358,60 Q366,60 366,68 L366,94 L216,94 Z" className="artBrandWash" />
      <rect x="236" y="112" width="60" height="10" rx="5" className="artBrandSoft" />
      <rect x="236" y="132" width="110" height="10" rx="5" className="artBrandSoft" />
      <rect x="236" y="152" width="84" height="10" rx="5" className="artBrandSoft" />
    </g>
    <g>
      <rect x="396" y="44" width="128" height="142" rx="8" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
      {[
        { y: 78 }, { y: 108 }, { y: 138 },
      ].map((row, i) => (
        <g key={i}>
          <circle cx={420} cy={row.y} r="9" stroke="currentColor" strokeWidth="2.5" className="artBrandStroke" />
          <rect x="438" y={row.y - 5} width={i === 2 ? 52 : 68} height="10" rx="5" className="artBrandSoft" />
        </g>
      ))}
    </g>
    <line x1="192" y1="110" x2="210" y2="110" stroke="currentColor" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" className="artBrandStroke" opacity="0.6" />
    <line x1="372" y1="110" x2="390" y2="110" stroke="currentColor" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" className="artBrandStroke" opacity="0.6" />
  </svg>
);

/* Custom line-art: deadline-first calendar with a completion badge */
const DEADLINE_ART = (
  <svg viewBox="0 0 240 176" fill="none" aria-hidden="true" className="artSvg">
    <rect x="56" y="34" width="128" height="118" rx="12" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
    <path d="M56,46 Q56,34 68,34 L172,34 Q184,34 184,46 L184,62 L56,62 Z" className="artBrandWash" />
    <rect x="84" y="20" width="12" height="26" rx="6" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
    <rect x="144" y="20" width="12" height="26" rx="6" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
    {[0, 1, 2, 3].map((col) =>
      [0, 1, 2].map((row) => (
        <rect
          key={`${col}-${row}`}
          x={76 + col * 22}
          y={78 + row * 20}
          width="12"
          height="12"
          rx="6"
          className="artBrandSoft"
        />
      ))
    )}
    <circle cx="192" cy="142" r="24" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
    <polyline points="182,142 189,149 202,134" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="artBrandStroke" />
  </svg>
);

export default function AcademicProjectsPage() {
  return (
    <main className={styles.page}>
      <JsonLd
        data={[
          webPageSchema({
            path: "/academic-projects",
            title: pageTitle,
            description:
              "B.Tech major project development in Hyderabad for CSE, IT, ECE and other engineering branches. AI/ML, web, IoT and full-stack projects with documentation and viva prep.",
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: pageTitle, path: "/academic-projects" },
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
              <span className={styles.crumbCurrent} aria-current="page">
                {pageTitle}
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Split hero: student voice left, the submission package right. */}
      <section className={styles.hero} aria-labelledby="acad-heading">
        <div className="container">
          <div className={styles.heroGrid}>
            <Reveal className={styles.heroText}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                For students
              </p>
              <h1 id="acad-heading" className={styles.heroTitle}>
                Your major project, <em>delivered before your deadline.</em>
              </h1>
              <p className={styles.heroSub}>
                ProjectKaro provides B.Tech major project development and technical support
                in Hyderabad for final-year engineering students: implementation,
                documentation guidance, testing, and viva preparation. Tell us your
                deadline first, we plan everything backwards from it.
              </p>
              <div className={styles.heroCtas}>
                <a href="#quote" className={styles.ctaPrimary}>
                  Get a Free Quote {ARROW_ICON}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaGhost}>
                  Chat on WhatsApp
                </a>
              </div>
              <ul className={styles.heroFacts}>
                <li>60+ college projects delivered</li>
                <li>Full documentation</li>
                <li>Viva prep included</li>
                <li>Deadline-first planning</li>
              </ul>
            </Reveal>
            <Reveal className={styles.heroVisual} delay={120}>
              <div className={styles.heroArt} aria-hidden="true">
                {PACKAGE_ART}
              </div>
              <div className={styles.heroPhoto}>
                <Image
                  src="/images/students-collab.jpg"
                  alt="Students collaborating on a project"
                  width={1400}
                  height={933}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Angles bento: the first card anchors the core promise. */}
      <section className={styles.angles} aria-labelledby="angles-h">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>Why students choose us</p>
            <h2 id="angles-h" className={styles.sectionHeading}>
              Built around your submission
            </h2>
          </Reveal>
          <div className={styles.angleBento}>
            {ANGLES.map((angle, i) => (
              <Reveal
                key={angle.title}
                delay={(i % 2) * 90}
                className={`${styles.angleCard} ${i === 0 ? styles.angleLead : ""}`}
              >
                <div className={styles.angleIcon} aria-hidden="true">
                  {angle.icon}
                </div>
                <h3 className={styles.angleTitle}>{angle.title}</h3>
                <p className={styles.angleText}>{angle.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Three paths: where to go next. */}
      <section className={styles.paths} aria-labelledby="paths-h">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>Find your path</p>
            <h2 id="paths-h" className={styles.sectionHeading}>
              Three ways we help
            </h2>
          </Reveal>
          <div className={styles.pathGrid}>
            <Reveal delay={0}>
              <Link href="/btech-major-projects-hyderabad" className={styles.pathCard}>
                <p className={styles.pathKicker}>In Hyderabad</p>
                <h3 className={styles.pathTitle}>B.Tech Major Projects in Hyderabad</h3>
                <p className={styles.pathText}>
                  Hyderabad-focused major project support for CSE, IT, ECE, and other branches.
                </p>
                <span className={styles.pathArrow} aria-hidden="true">{ARROW_ICON}</span>
              </Link>
            </Reveal>
            <Reveal delay={90}>
              <Link href="/academic-projects/major-projects" className={styles.pathCard}>
                <p className={styles.pathKicker}>Across India</p>
                <h3 className={styles.pathTitle}>Major Projects</h3>
                <p className={styles.pathText}>
                  Final-year major project delivery across India, planned backwards from your deadline.
                </p>
                <span className={styles.pathArrow} aria-hidden="true">{ARROW_ICON}</span>
              </Link>
            </Reveal>
            <Reveal delay={180}>
              <Link href="/academic-projects/minor-projects" className={styles.pathCard}>
                <p className={styles.pathKicker}>2 to 5 days</p>
                <h3 className={styles.pathTitle}>Minor Projects</h3>
                <p className={styles.pathText}>
                  Mini and semester projects delivered in 2 to 5 days, with documentation.
                </p>
                <span className={styles.pathArrow} aria-hidden="true">{ARROW_ICON}</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deliverables: dark band. One delivery, complete. */}
      <section className={styles.deliverables} aria-labelledby="get-h">
        <div className="container">
          <div className={styles.deliverablesGrid}>
            <Reveal>
              <p className={styles.deliverablesEyebrow}>The package</p>
              <h2 id="get-h" className={styles.deliverablesTitle}>
                Everything your submission needs
              </h2>
              <p className={styles.deliverablesSub}>
                One delivery, complete. Nothing to chase, nothing missing on submission day.
              </p>
              <Link href="/services" className={styles.deliverablesLink}>
                See all services {ARROW_ICON}
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <ul className={styles.deliverablesList}>
                {WHAT_YOU_GET.map((item) => (
                  <li key={item} className={styles.deliverableItem}>
                    <span className={styles.deliverableCheck} aria-hidden="true">{CHECK_ICON}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process: vertical stepper + sticky deadline reassurance card. */}
      <section className={styles.miniProcess} aria-labelledby="mini-h">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>Getting started</p>
            <h2 id="mini-h" className={styles.sectionHeading}>
              Three steps to submission day
            </h2>
          </Reveal>
          <div className={styles.stepsGrid}>
            <ol className={styles.stepper}>
              {MINI_STEPS.map((step, i) => (
                <Reveal key={step.num} delay={i * 80} className={styles.stepWrap}>
                  <li className={styles.stepperItem}>
                    <div className={styles.stepperRail} aria-hidden="true">
                      <span className={styles.stepperNum}>{step.num}</span>
                      <span className={styles.stepperLine} />
                    </div>
                    <div className={styles.stepperBody}>
                      <h3 className={styles.stepperTitle}>{step.title}</h3>
                      <p className={styles.stepperText}>{step.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <aside className={styles.stepsSide} aria-label="Why deadlines are safe with us">
              <Reveal delay={120}>
                <div className={styles.stepsCard}>
                  <div className={styles.stepsCardHead}>
                    <div className={styles.stepsArt} aria-hidden="true">
                      {DEADLINE_ART}
                    </div>
                    <h3 className={styles.stepsCardTitle}>Your deadline drives everything</h3>
                  </div>
                  <p className={styles.stepsCardText}>
                    Most students come to us with a date that cannot move. That is exactly
                    what we plan around. Share your submission date and we tell you honestly
                    what fits, then build backwards from it.
                  </p>
                  <ul className={styles.stepsReassure}>
                    <li>
                      <span className={styles.stepsCheck} aria-hidden="true">{CHECK_ICON}</span>
                      <span><strong>Minor projects:</strong> typically 2 to 5 days</span>
                    </li>
                    <li>
                      <span className={styles.stepsCheck} aria-hidden="true">{CHECK_ICON}</span>
                      <span><strong>Major projects:</strong> typically 1 to 3 weeks</span>
                    </li>
                    <li>
                      <span className={styles.stepsCheck} aria-hidden="true">{CHECK_ICON}</span>
                      <span><strong>Detailed quote</strong> within 24 hours, no obligation</span>
                    </li>
                    <li>
                      <span className={styles.stepsCheck} aria-hidden="true">{CHECK_ICON}</span>
                      <span><strong>Revisions</strong> until your submission is complete</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} aria-labelledby="acad-faq-h">
        <div className="container">
          <Reveal className={styles.faqCenter}>
            <p className={styles.sectionEyebrow}>Questions, answered</p>
            <h2 id="acad-faq-h" className={styles.sectionHeading}>
              Student project FAQs
            </h2>
            <p className={styles.faqSub}>
              Still unsure? Message us on{" "}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a>{" "}
              and ask directly.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className={styles.faqList}>
              {FAQS.map((faq) => (
                <details key={faq.question} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>
                    <span>{faq.question}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

      {/* Quote form: the conversion climax. */}
      <section id="quote" className={styles.quote} aria-labelledby="quote-h">
        <div className="container">
          <div className={styles.quoteBand}>
            <Reveal className={styles.quoteCopy}>
              <p className={styles.quoteEyebrow}>Get started</p>
              <h2 id="quote-h" className={styles.quoteTitle}>
                Get your detailed quote
              </h2>
              <p className={styles.quoteSub}>
                Share your topic and deadline. We respond within 24 hours with a detailed quote
                and a delivery plan that fits your submission date.
              </p>
              <ul className={styles.quoteReassure}>
                <li>{CHECK_ICON} Deadline-first delivery plan</li>
                <li>{CHECK_ICON} Documentation and viva prep included</li>
                <li>{CHECK_ICON} Per-project pricing, no hidden costs</li>
              </ul>
            </Reveal>
            <Reveal delay={120} className={styles.formWrap}>
              <StartProjectForm initialProjectType="Student Major Project" />
            </Reveal>
          </div>
        </div>
      </section>

      <StickyMiniCta
        label="Deadline approaching? Quote in 24h"
        buttonText="Get a quote"
      />
      <BackToTop />
    </main>
  );
}
