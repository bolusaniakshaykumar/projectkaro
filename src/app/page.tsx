import Link from "next/link";
import CTA from "@/components/CTA/CTA";
import Stats from "@/components/Stats/Stats";
import TechStack from "@/components/TechStack/TechStack";
import Testimonials from "@/components/Testimonials/Testimonials";
import dynamic from "next/dynamic";
import { FAQSkeleton } from "@/components/Skeleton/Skeleton";
import styles from "./page.module.css";

const FAQ = dynamic(() => import("@/components/FAQ/FAQ"), {
  ssr: false,
  loading: () => <FAQSkeleton />,
});

export const metadata = {
  title: "Build Academic Projects with Expert Guidance | ProjectKaro",
  description:
    "ProjectKaro helps engineering students build and complete real-world academic projects. Get expert mentorship, clear milestones, and comprehensive documentation for final year and mini projects.",
  keywords: [
    "academic projects for engineering students",
    "final year projects",
    "mini projects for engineering",
    "real world student projects",
    "guided academic projects",
    "project execution platform",
    "project mentorship",
    "IoT project help",
    "computer science projects",
  ],
  openGraph: {
    title: "Build Academic Projects with Expert Guidance | ProjectKaro",
    description: "Structured support for engineering students. 500+ projects completed. Expert mentorship from concept to completion.",
    type: "website",
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ProjectKaro",
    "description": "Academic project execution platform for engineering students",
    "url": "https://projectkaro.com",
    "logo": "https://projectkaro.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/projectkaro",
      "https://instagram.com/projectkaro"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "contact@projectkaro.com",
      "availableLanguage": ["English", "Hindi"]
    },
    "areaServed": "IN",
    "serviceType": ["Academic Project Support", "Engineering Project Mentorship", "IoT Project Development"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero - Premium, conversion-focused design */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroBg} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className="container">
            {/* Trust Badge */}
            <div className={styles.trustBadge}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Trusted by 500+ Engineering Students</span>
            </div>

            {/* Main Headline */}
            <h1 id="hero-heading" className={styles.heroTitle}>
              Build Real-World Academic Projects{" "}
              <span className={styles.heroTitleAccent}>— With Expert Guidance.</span>
            </h1>

            {/* Value Proposition */}
            <p className={styles.heroSubtext}>
              From concept to completion—get structured support, clear milestones, and comprehensive documentation that meets your college standards. Stop struggling with where to start. Start finishing your project with confidence.
            </p>

            {/* Social Proof Stats */}
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>100+</div>
                <div className={styles.heroStatLabel}>Projects Completed</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>3-6h</div>
                <div className={styles.heroStatLabel}>Response Time</div>
              </div>
              <div className={styles.heroStat}>
                <div className={styles.heroStatNumber}>98%</div>
                <div className={styles.heroStatLabel}>Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={styles.heroCta}>
              <Link href="/start-a-project" className="btn btn--primary btn--large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Start Your Project Now
              </Link>
              <Link href="/how-it-works" className="btn btn--secondary btn--large">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <polygon points="10,8 16,12 10,16" fill="currentColor" />
                </svg>
                See How It Works
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className={styles.heroTrust}>
              <div className={styles.heroTrustItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>No upfront payment</span>
              </div>
              <div className={styles.heroTrustItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Free project consultation</span>
              </div>
              <div className={styles.heroTrustItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Academic-focused approach</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Who It's For - CSS icons only */}
      <section className={`section section--alt ${styles.section}`} aria-labelledby="who-heading">
        <div className="container">
          <p className={styles.eyebrow}>Who it&apos;s for</p>
          <h2 id="who-heading" className={styles.sectionTitle}>
            Built for students who want to get it done
          </h2>
          <ul className={styles.cardList} role="list">
            <li className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Engineering students</h3>
              <p>Structured support for college and final-year project requirements.</p>
            </li>
            <li className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                  <line x1="2" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="16" r="1" fill="currentColor" />
                  <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 16V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Beginners in tech</h3>
              <p>Learn by doing with guided, real-world project execution.</p>
            </li>
            <li className={styles.card}>
              <div className={styles.cardIcon}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Students struggling to start or finish</h3>
              <p>Clear process and mentorship so you can complete your project on time.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* What We Offer */}
      <section className={`section ${styles.section}`} aria-labelledby="offer-heading">
        <div className="container">
          <p className={styles.eyebrow}>What we offer</p>
          <h2 id="offer-heading" className={styles.sectionTitle}>
            Project types we support
          </h2>
          <ul className={styles.cardListOffer} role="list">
            <li className={styles.cardOffer}>
              <div className={styles.cardOfferIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>College Mini Projects</h3>
              <p>Short-term, focused projects suitable for semester or lab requirements.</p>
            </li>
            <li className={styles.cardOffer}>
              <div className={styles.cardOfferIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3>Final-Year Projects</h3>
              <p>End-to-end support for your final-year or capstone project.</p>
            </li>
            <li className={styles.cardOffer}>
              <div className={styles.cardOfferIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" />
                  <line x1="8" y1="6" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="16" y1="6" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>Portfolio Projects</h3>
              <p>Projects that showcase your skills and strengthen your resume.</p>
            </li>
            <li className={styles.cardOffer}>
              <div className={styles.cardOfferIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="20" x2="12.01" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3>IoT Projects</h3>
              <p>Hardware and software integration for Internet of Things applications.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Why ProjectKaro - modern grid */}
      <section className={`section section--alt ${styles.section} ${styles.whySection}`} aria-labelledby="why-heading">
        <div className="container">
          <p className={styles.eyebrow}>Why ProjectKaro</p>
          <h2 id="why-heading" className={styles.sectionTitle}>
            Why choose us for your project
          </h2>
          <div className={styles.whyGrid}>
            <article className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 22V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 7L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 7L7 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.whyCardTitle}>Academic expertise</h3>
              <p className={styles.whyCardDesc}>Deep understanding of academic requirements and evaluation criteria.</p>
            </article>
            <article className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.whyCardTitle}>Fast turnaround</h3>
              <p className={styles.whyCardDesc}>Quick response times and efficient project execution.</p>
            </article>
            <article className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.whyCardTitle}>Expert mentorship</h3>
              <p className={styles.whyCardDesc}>Guidance from experienced professionals in your field.</p>
            </article>
            <article className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.whyCardTitle}>Quality assurance</h3>
              <p className={styles.whyCardDesc}>Rigorous testing and documentation standards.</p>
            </article>
            <article className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.whyCardTitle}>Flexible pricing</h3>
              <p className={styles.whyCardDesc}>Transparent pricing with no hidden costs.</p>
            </article>
            <article className={styles.whyCard}>
              <div className={styles.whyCardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className={styles.whyCardTitle}>Completion-focused approach</h3>
              <p className={styles.whyCardDesc}>We focus on helping you finish, not just start.</p>
            </article>
          </div>
        </div>
      </section>

      <Testimonials />

      <TechStack />

      <FAQ />

      <CTA />
    </>
  );
}