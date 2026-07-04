import Link from "next/link";
import CTA from "@/components/CTA/CTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "ProjectKaro (Project Karo) is a professional development studio in India focused on websites, full-stack applications, and complete student project delivery. Learn about our mission, values, and approach.",
  path: "/about",
});

const VALUES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Our Mission",
    text: "We help students, individuals, and businesses bring their ideas to life through professional development and structured project execution. Quality, reliability, and clear communication from brief to delivery.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Technical Excellence",
    text: "Every line of code is clean, maintainable, and documented. We use modern frameworks and industry best practices — built to be functional today and scalable for the future.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Client-Centric Approach",
    text: "We treat every project as a partnership. Transparent timelines, regular progress updates, and responsive communication. Your requirements drive every decision — not templates or assumptions.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Results-Driven Execution",
    text: "We focus on outcomes, not just output. Whether you need a website live by a deadline, a student project submitted on time, or an MVP in the hands of investors — we structure our work around the result.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Full Documentation",
    text: "Every delivery includes relevant documentation — setup guides, code comments, academic reports, and presentation support. For students, we stay available until submission is complete.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "On-Time Delivery",
    text: "Defined milestones and realistic timelines agreed upfront. We commit to deadlines — and we meet them. No surprises, no extensions without communication.",
  },
];

export default function AboutPage() {
  const pageTitle = "About Us";

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/about",
            title: pageTitle,
            description:
              "ProjectKaro is a professional development studio in India focused on websites, full-stack applications, and complete student project delivery.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: pageTitle, path: "/about" },
          ]),
        ]}
      />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="about-heading">
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
        </div>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroContent}>
              <p className={styles.heroLabel}>About ProjectKaro</p>
              <h1 id="about-heading" className={styles.heroTitle}>
                We build what you need,{" "}
                <span className={styles.heroAccent}>on time — every time</span>
              </h1>
              <p className={styles.heroSubtitle}>
                ProjectKaro — also known as Project Karo — is a professional development studio built around two core offerings: websites and web applications for businesses and individuals, and complete project delivery for students. We pair technical depth with a structured, transparent process so every engagement ends with a result you can be proud of.
              </p>
              <div className={styles.heroActions}>
                <Link href="/start-a-project" className={styles.heroCta}>
                  Start a Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link href="/projects" className={styles.heroGhost}>
                  View Services
                </Link>
              </div>
            </div>

            {/* Stats column */}
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>60+</span>
                <span className={styles.heroStatLabel}>College Projects Delivered</span>
              </div>
              <div className={styles.heroStatDivider} aria-hidden="true" />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>300+</span>
                <span className={styles.heroStatLabel}>Clients Served</span>
              </div>
              <div className={styles.heroStatDivider} aria-hidden="true" />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>10</span>
                <span className={styles.heroStatLabel}>Services Offered</span>
              </div>
              <div className={styles.heroStatDivider} aria-hidden="true" />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>24h</span>
                <span className={styles.heroStatLabel}>Response Guarantee</span>
              </div>

              <div className={styles.heroHighlight}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Fixed pricing, zero hidden fees
              </div>
              <div className={styles.heroHighlight}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Full documentation included
              </div>
              <div className={styles.heroHighlight}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Viva preparation support for students
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES GRID ────────────────────────────────── */}
      <section className={styles.values} aria-labelledby="values-heading">
        <div className="container">
          <div className={styles.valuesHeader}>
            <p className={styles.eyebrow}>What We Stand For</p>
            <h2 id="values-heading" className={styles.valuesTitle}>
              How we work
            </h2>
          </div>

          <div className={styles.valuesGrid}>
            {VALUES.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon} aria-hidden="true">
                  {v.icon}
                </div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to start your project?"
        description="Tell us what you need and we will get back to you within 24 hours with a proposal, timeline, and fixed quote."
      />
    </>
  );
}
