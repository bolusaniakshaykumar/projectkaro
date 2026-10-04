import CTA from "@/components/CTA/CTA";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import type { ReactNode } from "react";
import { breadcrumbSchema, createPageMetadata, serviceListSchema, webPageSchema } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Our Services",
  description:
    "Explore ProjectKaro (Project Karo) services: website development, portfolio websites, full-stack applications, AI solutions, student major and minor projects, research projects, startup MVPs, business websites, and technical consulting.",
  path: "/services",
});

interface ServiceEntry {
  title: string;
  description: string;
  outcome: string;
  deliverables: string[];
  icon: ReactNode;
  /** Dedicated child page, when one exists */
  learnMore?: string;
}

const SERVICE_CATEGORIES: {
  category: string;
  id: string;
  tint: "web" | "student" | "special";
  description: string;
  services: ServiceEntry[];
}[] = [
  {
    category: "Web Development",
    id: "web-development",
    tint: "web",
    description: "Professional digital solutions for businesses, startups, and individuals.",
    services: [
      {
        title: "Website Development",
        description: "Custom websites designed and developed to meet your goals. Responsive across all devices, optimised for performance, and built with modern frameworks.",
        outcome: "A fast, responsive website built around your goals.",
        deliverables: ["Complete source code", "Responsive design", "SEO-ready structure", "Deployment support"],
        learnMore: "/services/website-development",
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
        learnMore: "/websites-for-portfolios",
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
        learnMore: "/services/full-stack-development",
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
        learnMore: "/services/startup-mvp-development",
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
    id: "student-projects",
    tint: "student",
    description: "Technical development and project support for academic work: implementation, documentation guidance, testing, and viva preparation.",
    services: [
      {
        title: "Student Major Projects",
        description: "Technical development and project support for final-year and capstone projects: implementation, testing, and documentation guidance in alignment with your institution's requirements.",
        outcome: "Implementation, documentation guidance, and viva preparation support.",
        deliverables: ["Complete source code", "Project report", "Presentation slides", "Viva preparation support"],
        learnMore: "/academic-projects/major-projects",
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
        learnMore: "/academic-projects/minor-projects",
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
    id: "specialised-services",
    tint: "special",
    description: "Advanced technical capabilities for projects that require deeper expertise.",
    services: [
      {
        title: "AI Solutions",
        description: "AI-powered features, machine learning models, NLP integrations, and intelligent automation built into your applications or academic submissions.",
        outcome: "Practical AI features built into your product or project.",
        deliverables: ["Trained ML model", "Integration code", "Technical documentation", "Explanation session"],
        learnMore: "/services/ai-solutions",
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

const ARROW_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CHECK_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

/** Light icon-tile tint per service group (all from existing brand tokens). */
const TINT_CLASSES: Record<string, string> = {
  web: styles.tintWeb,
  student: styles.tintStudent,
  special: styles.tintSpecial,
};

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
        </div>
      </section>

      {/* ── REASSURANCE STRIP ──────────────────────────── */}
      <section className={styles.reassure} aria-label="Our delivery standard">
        <div className="container">
          <div className={styles.reassureInner}>
            <p className={styles.reassureText}>
              <strong>The standard, in one line:</strong> every project ships with source code,
              documentation, and a handover session.
            </p>
            <Link href="/start-a-project" className={`${styles.reassureCta} btn btn--primary`}>
              Get a quote {ARROW_ICON}
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────── */}
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

          {/* Sticky group nav */}
          <nav className={styles.tabs} aria-label="Jump to a service group">
            <ul className={styles.tabList}>
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <a href={`#${category.id}`} className={styles.tab}>
                    {category.category}
                    <span className={styles.tabCount}>{category.services.length}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {SERVICE_CATEGORIES.map((category, ci) => {
            const artOffset = SERVICE_CATEGORIES.slice(0, ci).reduce(
              (n, c) => n + c.services.length,
              0
            );
            return (
              <section
                key={category.id}
                id={category.id}
                className={`${styles.chapter} ${TINT_CLASSES[category.tint]}`}
                aria-labelledby={`${category.id}-h`}
              >
                <div className={styles.chapterHead}>
                  <div>
                    <h3 id={`${category.id}-h`} className={styles.chapterTitle}>
                      {category.category}
                    </h3>
                    <p className={styles.chapterDesc}>{category.description}</p>
                  </div>
                  <span className={styles.chapterCount}>
                    {category.services.length} {category.services.length === 1 ? "service" : "services"}
                  </span>
                </div>

                <div className={styles.cardGrid}>
                  {category.services.map((service, si) => {
                    const serviceNumber = artOffset + si + 1;
                    return (
                      <article key={service.title} className={styles.serviceCard}>
                        <div className={styles.cardTop}>
                          <span className={styles.iconTile} aria-hidden="true">
                            {service.icon}
                          </span>
                          <span className={styles.cardNum}>
                            {String(serviceNumber).padStart(2, "0")}
                          </span>
                        </div>
                        <h4 className={styles.cardTitle}>{service.title}</h4>
                        <p className={styles.cardDesc}>{service.description}</p>
                        <div className={styles.cardOutcome}>
                          <span className={styles.outcomeLabel}>The outcome</span>
                          <p>{service.outcome}</p>
                        </div>
                        <ul
                          className={styles.cardDeliverables}
                          aria-label={`Included with ${service.title}`}
                        >
                          {service.deliverables.map((deliverable) => (
                            <li key={deliverable}>
                              {CHECK_ICON}
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                        <div className={styles.cardLinks}>
                          {service.learnMore && (
                            <Link
                              href={service.learnMore}
                              className={styles.cardLink}
                              aria-label={`Learn more about ${service.title}`}
                            >
                              Learn more {ARROW_ICON}
                            </Link>
                          )}
                          <Link
                            href="/start-a-project"
                            className={`${styles.cardCta} btn btn--primary`}
                            aria-label={`Get a quote for ${service.title}`}
                          >
                            Get a quote {ARROW_ICON}
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
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
