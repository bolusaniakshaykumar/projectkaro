import CTA from "@/components/CTA/CTA";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbSchema, createPageMetadata, serviceListSchema, webPageSchema } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Our Services",
  description:
    "Explore ProjectKaro (Project Karo) services: website development, portfolio websites, full-stack applications, AI solutions, student major and minor projects, research projects, startup MVPs, business websites, and technical consulting.",
  path: "/services",
});

const SERVICE_CATEGORIES = [
  {
    category: "Web Development",
    description: "Professional digital solutions for businesses, startups, and individuals.",
    services: [
      {
        title: "Website Development",
        description: "Custom websites designed and developed to meet your goals. Responsive across all devices, optimised for performance, and built with modern frameworks.",
        outcome: "A fast, responsive website built around your goals.",
        deliverables: ["Complete source code", "Responsive design", "SEO-ready structure", "Deployment support"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
      {
        title: "Personal Portfolio Websites",
        description: "Polished, professional portfolio sites that effectively showcase your skills, experience, and projects to clients, employers, or recruiters.",
        outcome: "A polished portfolio that presents your work at its best.",
        deliverables: ["Custom design", "Project showcase section", "Contact form integration", "Live deployment"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        ),
      },
      {
        title: "Full Stack Applications",
        description: "Complete web applications with modern frontend interfaces, robust backend APIs, database architecture, and authentication systems.",
        outcome: "Complete web apps, from frontend to database, ready to scale.",
        deliverables: ["Frontend + Backend code", "Database schema", "API documentation", "Deployment guide"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
      {
        title: "Business Websites",
        description: "Professional websites for businesses that build credibility and drive conversions: service pages, landing pages, contact integrations, and more.",
        outcome: "A credible site that turns visitors into enquiries.",
        deliverables: ["Multi-page site", "Contact & lead forms", "Google Analytics setup", "CMS integration (optional)"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
      },
      {
        title: "Startup MVP Development",
        description: "Rapid MVP development to validate your product idea, attract early users, and accelerate your fundraising or go-to-market strategy.",
        outcome: "Your idea as a working product, shipped fast.",
        deliverables: ["Core feature set", "Clean codebase", "Basic documentation", "Scalable architecture"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Student Projects",
    description: "Technical development and project support for academic work: implementation, documentation guidance, testing, and viva preparation.",
    services: [
      {
        title: "Student Major Projects",
        description: "Technical development and project support for final-year and capstone projects: implementation, testing, and documentation guidance in alignment with your institution's requirements.",
        outcome: "Implementation, documentation guidance, and viva preparation support.",
        deliverables: ["Complete source code", "Project report", "Presentation slides", "Viva preparation support"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        ),
      },
      {
        title: "Student Minor Projects",
        description: "Technical support for semester submissions, lab projects, and mini assignments: proper code structure and documentation guidance in a short turnaround.",
        outcome: "Working code and documentation guidance, delivered in 2 to 5 days.",
        deliverables: ["Working source code", "Setup guide", "Basic documentation", "Fast delivery (2–5 days)"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        ),
      },
      {
        title: "Research Projects",
        description: "Structured research project support including literature survey, methodology design, data collection, analysis, and formatted academic documentation.",
        outcome: "Structured research support with clean academic documentation.",
        deliverables: ["Research report", "Data analysis", "Literature review", "IEEE-format technical documentation support (on request)"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Specialised Services",
    description: "Advanced technical capabilities for projects that require deeper expertise.",
    services: [
      {
        title: "AI Solutions",
        description: "AI-powered features, machine learning models, NLP integrations, and intelligent automation built into your applications or academic submissions.",
        outcome: "Practical AI features built into your product or project.",
        deliverables: ["Trained ML model", "Integration code", "Technical documentation", "Explanation session"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
            <circle cx="9" cy="14" r="1" fill="currentColor" stroke="none" />
            <circle cx="15" cy="14" r="1" fill="currentColor" stroke="none" />
            <path d="M9.5 18a3.5 3.5 0 0 0 5 0" />
          </svg>
        ),
      },
      {
        title: "Technical Consulting",
        description: "Expert advisory on tech stack selection, system architecture, code quality, and development roadmaps. Ideal for teams or individuals building something new.",
        outcome: "Clear technical direction from an experienced builder.",
        deliverables: ["Architecture review", "Technology recommendation", "Written report", "Follow-up session"],
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2-2V8z" />
          </svg>
        ),
      },
    ],
  },
];

const ALL_SERVICES_FOR_SCHEMA = SERVICE_CATEGORIES.flatMap((category) =>
  category.services.map((service) => ({
    title: service.title,
    description: service.description,
  }))
);

/* Unique geometric line-art motifs per service, drawn in white over brand gradients. */
const CARD_ARTS = [
  /* 1. Website Development: browser window */
  (
    <svg key="svc-1" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <rect x="20" y="14" width="120" height="82" rx="10" stroke="#fff" strokeWidth="3" />
      <line x1="20" y1="36" x2="140" y2="36" stroke="#fff" strokeWidth="3" />
      <circle cx="34" cy="25" r="4" fill="#fff" />
      <circle cx="48" cy="25" r="4" fill="#fff" opacity="0.55" />
      <circle cx="62" cy="25" r="4" fill="#fff" opacity="0.55" />
      <rect x="34" y="52" width="60" height="10" rx="5" fill="#fff" opacity="0.85" />
      <rect x="34" y="70" width="92" height="10" rx="5" fill="#fff" opacity="0.5" />
    </svg>
  ),
  /* 2. Personal Portfolio Websites: identity card */
  (
    <svg key="svc-2" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <rect x="28" y="14" width="104" height="82" rx="10" stroke="#fff" strokeWidth="3" />
      <circle cx="58" cy="46" r="11" stroke="#fff" strokeWidth="3" />
      <path d="M40 80c3-10 10-15 18-15s15 5 18 15" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <rect x="88" y="36" width="30" height="8" rx="4" fill="#fff" opacity="0.85" />
      <rect x="88" y="52" width="30" height="8" rx="4" fill="#fff" opacity="0.5" />
      <rect x="88" y="68" width="20" height="8" rx="4" fill="#fff" opacity="0.5" />
    </svg>
  ),
  /* 3. Full Stack Applications: stacked layers */
  (
    <svg key="svc-3" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <path d="M80 16l52 24-52 24-52-24z" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <path d="M36 56l44 20 44-20" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <path d="M36 76l44 20 44-20" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
    </svg>
  ),
  /* 4. Business Websites: storefront */
  (
    <svg key="svc-4" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <path d="M40 44l8-24h64l8 24z" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <rect x="44" y="44" width="72" height="48" rx="4" stroke="#fff" strokeWidth="3" />
      <rect x="70" y="64" width="20" height="28" rx="2" stroke="#fff" strokeWidth="3" />
      <rect x="52" y="56" width="10" height="8" fill="#fff" opacity="0.7" />
      <rect x="98" y="56" width="10" height="8" fill="#fff" opacity="0.7" />
    </svg>
  ),
  /* 5. Startup MVP Development: rocket */
  (
    <svg key="svc-5" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <path d="M80 12c14 10 18 26 14 44l-14 8-14-8c-4-18 0-34 14-44z" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <circle cx="80" cy="38" r="7" stroke="#fff" strokeWidth="3" />
      <path d="M66 56l-12 22 14-6M94 56l12 22-14-6" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M80 78v12" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
    </svg>
  ),
  /* 6. Student Major Projects: graduation cap */
  (
    <svg key="svc-6" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <path d="M80 24l52 18-52 18-52-18z" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <path d="M48 50v20c0 10 64 10 64 0V50" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <line x1="124" y1="48" x2="124" y2="76" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="124" cy="82" r="4" fill="#fff" />
    </svg>
  ),
  /* 7. Student Minor Projects: bolt */
  (
    <svg key="svc-7" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <path d="M88 12L46 62h24l-8 36 42-50H80z" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  ),
  /* 8. Research Projects: flask */
  (
    <svg key="svc-8" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <path d="M66 12h28M70 12v30l-30 44a8 8 0 0 0 7 12h66a8 8 0 0 0 7-12L90 42V12" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="58" y1="72" x2="102" y2="72" stroke="#fff" strokeWidth="3" opacity="0.6" />
      <circle cx="76" cy="32" r="3" fill="#fff" opacity="0.8" />
      <circle cx="88" cy="24" r="2" fill="#fff" opacity="0.6" />
    </svg>
  ),
  /* 9. AI Solutions: connected nodes */
  (
    <svg key="svc-9" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <circle cx="40" cy="55" r="10" stroke="#fff" strokeWidth="3" />
      <circle cx="80" cy="30" r="10" stroke="#fff" strokeWidth="3" />
      <circle cx="80" cy="80" r="10" stroke="#fff" strokeWidth="3" />
      <circle cx="120" cy="55" r="10" fill="#fff" />
      <line x1="50" y1="55" x2="70" y2="55" stroke="#fff" strokeWidth="3" />
      <line x1="48" y1="48" x2="72" y2="34" stroke="#fff" strokeWidth="3" opacity="0.7" />
      <line x1="48" y1="62" x2="72" y2="76" stroke="#fff" strokeWidth="3" opacity="0.7" />
      <line x1="90" y1="30" x2="110" y2="48" stroke="#fff" strokeWidth="3" opacity="0.7" />
      <line x1="90" y1="80" x2="110" y2="62" stroke="#fff" strokeWidth="3" opacity="0.7" />
    </svg>
  ),
  /* 10. Technical Consulting: conversation bubble */
  (
    <svg key="svc-10" viewBox="0 0 160 110" fill="none" aria-hidden="true">
      <path d="M28 22h104a8 8 0 0 1 8 8v44a8 8 0 0 1-8 8H76l-20 16v-16H28a8 8 0 0 1-8-8V30a8 8 0 0 1 8-8z" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
      <rect x="40" y="44" width="60" height="8" rx="4" fill="#fff" opacity="0.85" />
      <rect x="40" y="60" width="44" height="8" rx="4" fill="#fff" opacity="0.5" />
    </svg>
  ),
];

const TONE_CLASSES = [styles.tone0, styles.tone1, styles.tone2];

const ARROW_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export default function ServicesPage() {
  const pageTitle = "Our Services";

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/services",
            title: pageTitle,
            description:
              "ProjectKaro offers website development, student projects, research work, AI solutions, startup MVPs, and technical consulting.",
          }),
          serviceListSchema(ALL_SERVICES_FOR_SCHEMA),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: pageTitle, path: "/services" },
          ]),
        ]}
      />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="services-hero-h">
        <div className="container">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              Services
            </p>
            <h1 id="services-hero-h" className={styles.heroTitle}>
              What we build, <em>end to end.</em>
            </h1>
            <p className={styles.heroLede}>
              Ten services across web development, student projects, and specialised
              technical work. Every engagement starts the same way: a detailed quote within 24 hours.
            </p>
            <div className={styles.heroMeta}>
              <span>10 services</span>
              <span>3 disciplines</span>
              <span>Quote within 24 hours</span>
            </div>
          </div>
          <figure className={styles.heroPhoto}>
            <Image
              src="/images/code-screen.jpg"
              alt="Clean, production-grade code behind every ProjectKaro build"
              width={1400}
              height={935}
              loading="lazy"
              sizes="100vw"
            />
          </figure>
        </div>
      </section>

      {/* ── STATEMENT BAND ────────────────────────────── */}
      <section className={styles.statement} aria-label="Our delivery standard">
        <div className="container">
          <p className={styles.statementEyebrow}>The standard, in one line</p>
          <p className={styles.statementText}>
            Every project ships with source code, documentation, and a handover session.
          </p>
        </div>
      </section>

      {/* ── SERVICES: cards ──────────────────────────── */}
      <section className={styles.services} aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Services</p>
            <h2 id="services-heading" className={styles.sectionHeading}>
              What we build
            </h2>
            <p className={styles.sectionSub}>
              Ten services across three disciplines. Every engagement starts the same way: a detailed quote within 24 hours.
            </p>
          </div>

          {SERVICE_CATEGORIES.map((category, ci) => {
            const artOffset = SERVICE_CATEGORIES.slice(0, ci).reduce(
              (n, c) => n + c.services.length,
              0
            );
            return (
              <div key={category.category} className={styles.chapter}>
                <div className={styles.chapterHead}>
                  <div>
                    <h3 className={styles.chapterTitle}>{category.category}</h3>
                    <p className={styles.chapterDesc}>{category.description}</p>
                  </div>
                </div>

                <div className={styles.cardGrid}>
                  {category.services.map((service, si) => {
                    const artIndex = artOffset + si;
                    return (
                      <article key={service.title} className={styles.serviceCard}>
                        <div
                          className={`${styles.cardArt} ${TONE_CLASSES[artIndex % 3]}`}
                          aria-hidden="true"
                        >
                          {CARD_ARTS[artIndex]}
                        </div>
                        <div className={styles.cardBody}>
                          <h4 className={styles.cardTitle}>{service.title}</h4>
                          <p className={styles.cardOutcome}>{service.outcome}</p>
                          <Link
                            href="/start-a-project"
                            className={styles.cardLink}
                            aria-label={`Get a quote for ${service.title}`}
                          >
                            Get a quote {ARROW_ICON}
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className={styles.pricingNote} role="note">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p>
              <strong>Pricing is per project, quoted after we read your requirements.</strong>{" "}
              No packages, no hidden fees. Submit your details and ProjectKaro responds within 24 hours
              with a detailed proposal and timeline.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title="Like what you see? Start yours."
        description="Tell us about your project and receive a detailed proposal within 24 hours: scope, quote, and timeline, no surprises."
      />
    </>
  );
}
