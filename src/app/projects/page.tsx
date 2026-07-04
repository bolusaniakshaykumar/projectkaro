import CTA from "@/components/CTA/CTA";
import JsonLd from "@/components/JsonLd";
import Link from "next/link";
import { breadcrumbSchema, createPageMetadata, serviceListSchema, webPageSchema } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Our Services",
  description:
    "Explore ProjectKaro (Project Karo) services: website development, portfolio websites, full-stack applications, AI solutions, student major and minor projects, research projects, startup MVPs, business websites, and technical consulting.",
  path: "/projects",
});

const SERVICE_CATEGORIES = [
  {
    category: "Web Development",
    description: "Professional digital solutions for businesses, startups, and individuals.",
    services: [
      {
        title: "Website Development",
        description: "Custom websites designed and developed to meet your goals. Responsive across all devices, optimised for performance, and built with modern frameworks.",
        deliverables: ["Complete source code", "Responsive design", "SEO-ready structure", "Deployment support"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        ),
      },
      {
        title: "Personal Portfolio Websites",
        description: "Polished, professional portfolio sites that effectively showcase your skills, experience, and projects to clients, employers, or recruiters.",
        deliverables: ["Custom design", "Project showcase section", "Contact form integration", "Live deployment"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          </svg>
        ),
      },
      {
        title: "Full Stack Applications",
        description: "Complete web applications with modern frontend interfaces, robust backend APIs, database architecture, and authentication systems.",
        deliverables: ["Frontend + Backend code", "Database schema", "API documentation", "Deployment guide"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        ),
      },
      {
        title: "Business Websites",
        description: "Professional websites for businesses that build credibility and drive conversions — service pages, landing pages, contact integrations, and more.",
        deliverables: ["Multi-page site", "Contact & lead forms", "Google Analytics setup", "CMS integration (optional)"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
      },
      {
        title: "Startup MVP Development",
        description: "Rapid MVP development to validate your product idea, attract early users, and accelerate your fundraising or go-to-market strategy.",
        deliverables: ["Core feature set", "Clean codebase", "Basic documentation", "Scalable architecture"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
      },
    ],
  },
  {
    category: "Student Projects",
    description: "Complete academic and research project delivery — from concept to submission-ready.",
    services: [
      {
        title: "Student Major Projects",
        description: "End-to-end execution of final-year and capstone projects. We handle implementation, testing, and documentation in alignment with your institution's requirements.",
        deliverables: ["Complete source code", "Project report", "Presentation slides", "Viva preparation support"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        ),
      },
      {
        title: "Student Minor Projects",
        description: "Semester submissions, lab projects, and mini assignments completed with proper code structure and basic documentation in a short turnaround.",
        deliverables: ["Working source code", "Setup guide", "Basic documentation", "Fast delivery (2–5 days)"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        ),
      },
      {
        title: "Research Projects",
        description: "Structured research project support including literature survey, methodology design, data collection, analysis, and formatted academic documentation.",
        deliverables: ["Research report", "Data analysis", "Literature review", "IEEE/formatted paper (on request)"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        deliverables: ["Trained ML model", "Integration code", "Technical documentation", "Explanation session"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        deliverables: ["Architecture review", "Technology recommendation", "Written report", "Follow-up session"],
        icon: (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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

export default function ServicesPage() {
  const pageTitle = "Our Services";

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/projects",
            title: pageTitle,
            description:
              "ProjectKaro offers website development, student projects, research work, AI solutions, startup MVPs, and technical consulting.",
          }),
          serviceListSchema(ALL_SERVICES_FOR_SCHEMA),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: pageTitle, path: "/projects" },
          ]),
        ]}
      />

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className={styles.header}>
            <p className={styles.eyebrow}>Services</p>
            <h1 id="services-heading" className={styles.title}>
              Our Services
            </h1>
            <p className={styles.intro}>
              We offer a comprehensive range of web development and project delivery services. Each engagement begins with a free consultation to understand your requirements, followed by a fixed quote and defined timeline.
            </p>
          </div>

          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.category} className={styles.categorySection}>
              <div className={styles.categoryHeader}>
                <h2 className={styles.categoryTitle}>{category.category}</h2>
                <p className={styles.categoryDesc}>{category.description}</p>
              </div>

              <ul className={styles.serviceList} role="list">
                {category.services.map((service) => (
                  <li key={service.title} className={styles.serviceCard}>
                    <div className={styles.serviceCardLeft}>
                      <div className={styles.iconWrapper}>{service.icon}</div>
                    </div>
                    <div className={styles.serviceCardRight}>
                      <h3 className={styles.serviceTitle}>{service.title}</h3>
                      <p className={styles.serviceDesc}>{service.description}</p>
                      <div className={styles.deliverablesWrap}>
                        <p className={styles.deliverablesLabel}>Deliverables include:</p>
                        <ul className={styles.deliverablesList}>
                          {service.deliverables.map((d) => (
                            <li key={d} className={styles.deliverableItem}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className={styles.pricingNote} role="note">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p>
              <strong>Pricing is determined after reviewing your requirements.</strong> Submit your project details and our team will respond within 24 hours with a detailed proposal, timeline, and fixed price.
            </p>
          </div>

          <div className={styles.ctaWrap}>
            <Link href="/start-a-project" className="btn btn--primary btn--large">
              Get a Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
