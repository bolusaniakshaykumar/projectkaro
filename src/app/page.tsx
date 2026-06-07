import dynamic from "next/dynamic";
import Link from "next/link";
import CTA from "@/components/CTA/CTA";
import JsonLd from "@/components/JsonLd";
import { FAQSkeleton } from "@/components/Skeleton/Skeleton";

const FAQ = dynamic(() => import("@/components/FAQ/FAQ"), {
  loading: () => <FAQSkeleton />,
});
const TechStack = dynamic(() => import("@/components/TechStack/TechStack"));
const Testimonials = dynamic(() => import("@/components/Testimonials/Testimonials"));
import { SITE_CONFIG } from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/faq-data";
import {
  createPageMetadata,
  faqPageSchema,
  speakableSchema,
  webPageSchema,
} from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Web Development & Student Project Solutions",
  description: SITE_CONFIG.description,
  path: "/",
});

const SERVICES_MARQUEE = [
  "Website Development",
  "Personal Portfolio Sites",
  "Full Stack Applications",
  "AI Solutions",
  "Student Major Projects",
  "Student Minor Projects",
  "Research Projects",
  "Startup MVP",
  "Business Websites",
  "Technical Consulting",
];

const ALL_SERVICES = [
  {
    title: "Website Development",
    description: "Custom responsive websites, fast and production-ready.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Personal Portfolio",
    description: "Portfolios that impress employers and recruiters.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Full Stack Apps",
    description: "End-to-end apps with frontend, backend, and database.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: "AI Solutions",
    description: "ML models, automation, and AI-powered features.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </svg>
    ),
  },
  {
    title: "Major Projects",
    description: "Complete final-year project from code to documentation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Minor Projects",
    description: "Semester and lab submissions with clean code in 2–5 days.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    title: "Research Projects",
    description: "Structured research with methodology, analysis, and docs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Startup MVP",
    description: "Rapid MVP to validate your idea and get to market faster.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
  {
    title: "Business Websites",
    description: "Professional sites with SEO, forms, and lead generation.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Technical Consulting",
    description: "Expert guidance on architecture, stack, and strategy.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M4.93 19.07l1.41-1.41M4.93 4.93l1.41 1.41M19.07 19.07l-1.41-1.41M12 2v2M12 20v2M2 12h2M20 12h2" />
      </svg>
    ),
  },
];

const PROCESS = [
  { num: "01", title: "Submit", desc: "Share your requirements, abstract, or brief." },
  { num: "02", title: "Proposal", desc: "Fixed price and timeline within 24 hours." },
  { num: "03", title: "Build", desc: "We develop with milestone updates." },
  { num: "04", title: "Deliver", desc: "Full handover with documentation and support." },
];

export default function HomePage() {
  const pageTitle = "Web Development & Student Project Solutions";

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/",
            title: pageTitle,
            description: SITE_CONFIG.description,
          }),
          faqPageSchema(FAQ_ITEMS),
          speakableSchema({
            path: "/",
            cssSelectors: ["#hero-summary", "#site-definition"],
          }),
        ]}
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        {/* Animated background */}
        <div className={styles.heroBg} aria-hidden="true">
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
          <div className={styles.gridLines} />
        </div>

        {/* Main content */}
        <div className={styles.heroBody}>
          <div className="container">
            {/* Live badge */}
            <div className={styles.badge}>
              <span className={styles.badgePulse} aria-hidden="true" />
              Web Development · Student Projects · AI Solutions
            </div>

            {/* Headline */}
            <h1 id="hero-heading" className={styles.headline}>
              Websites &amp; projects,
              <br />
              <span className={styles.gradientText}>built to perfection.</span>
            </h1>

            {/* Sub */}
            <p id="hero-summary" className={styles.heroSub}>
              ProjectKaro builds professional websites, full-stack applications, and complete student projects in India — delivered on time with fixed pricing and full documentation.
            </p>

            {/* CTAs */}
            <div className={styles.heroCtas}>
              <Link href="/start-a-project" className={styles.ctaPrimary}>
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/projects" className={styles.ctaGhost}>
                Explore Services
              </Link>
            </div>

            {/* Trust row */}
            <div className={styles.trustRow} aria-label="Key promises">
              <span>✓ Free consultation</span>
              <span>✓ Fixed pricing</span>
              <span>✓ On-time delivery</span>
              <span>✓ Full documentation</span>
            </div>
          </div>

          {/* Scrolling service pills */}
          <div className={styles.marquee} aria-hidden="true">
            <div className={styles.marqueeTrack}>
              {[...SERVICES_MARQUEE, ...SERVICES_MARQUEE].map((s, i) => (
                <span key={i} className={styles.pill}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar pinned at bottom */}
        <div className={styles.statsBar}>
          <div className="container">
            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>60+</span>
                <span className={styles.statLabel}>College Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>300+</span>
                <span className={styles.statLabel}>Happy Clients</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>10</span>
                <span className={styles.statLabel}>Services Offered</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNum}>24h</span>
                <span className={styles.statLabel}>Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER (AEO / GEO) ─────────────────── */}
      <section className={styles.definition} aria-labelledby="definition-heading">
        <div className="container">
          <div className={styles.definitionInner}>
            <h2 id="definition-heading" className={styles.definitionTitle}>
              What is ProjectKaro?
            </h2>
            <p id="site-definition" className={styles.definitionText}>
              ProjectKaro is a professional web development and student project studio in India. We help businesses, startups, freelancers, and students with websites, full-stack applications, major and minor academic projects, and research work — with a clear scope, fixed quote, and on-time delivery.
            </p>
            <div className={styles.definitionLinks}>
              <Link href="/about">About us</Link>
              <Link href="/how-it-works">How it works</Link>
              <Link href="/projects">All services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────── */}
      <section className={styles.whatWeDo} aria-labelledby="whatwedo-h">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>What We Do</p>
            <h2 id="whatwedo-h" className={styles.sectionHeading}>
              Our core services
            </h2>
            <p className={styles.whatWeDoSub}>
              Websites, student projects, and research work — we handle the full build from start to finish, so you can focus on what matters.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {/* Web Development */}
            <div className={`${styles.pillarCard} ${styles.pillarCardBlue}`}>
              <div className={styles.pillarIconWrap} aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Web Development</h3>
              <p className={styles.pillarDesc}>
                Professional websites and applications built from the ground up. For businesses, freelancers, and startups who need something that actually works in production.
              </p>
              <ul className={styles.pillarBullets}>
                {["Business Websites", "Personal Portfolios", "Full Stack Applications", "Startup MVPs", "AI-Powered Products"].map(s => (
                  <li key={s}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/start-a-project" className={`${styles.pillarBtn} ${styles.pillarBtnBlue}`}>
                Start a web project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Student Projects */}
            <div className={`${styles.pillarCard} ${styles.pillarCardViolet}`}>
              <div className={`${styles.pillarIconWrap} ${styles.pillarIconViolet}`} aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Student Projects</h3>
              <p className={styles.pillarDesc}>
                Submit your project brief and we handle everything — implementation, report, and viva prep. Delivered clean, on time, every time.
              </p>
              <ul className={`${styles.pillarBullets} ${styles.pillarBulletsViolet}`}>
                {["Final Year / Major Projects", "Minor & Semester Projects", "Lab & Assignment Work", "Viva Preparation Support"].map(s => (
                  <li key={s}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/start-a-project" className={`${styles.pillarBtn} ${styles.pillarBtnViolet}`}>
                Submit your project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>

            {/* Research Projects */}
            <div className={`${styles.pillarCard} ${styles.pillarCardGreen}`}>
              <div className={`${styles.pillarIconWrap} ${styles.pillarIconGreen}`} aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3 className={styles.pillarTitle}>Research Projects</h3>
              <p className={styles.pillarDesc}>
                Structured academic research with proper methodology, analysis, and formatted documentation — ready for submission and presentation.
              </p>
              <ul className={`${styles.pillarBullets} ${styles.pillarBulletsGreen}`}>
                {["Methodology & Literature Review", "Data Collection & Analysis", "IEEE Format Reports", "Thesis Documentation", "Presentation Support"].map(s => (
                  <li key={s}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
              <Link href="/start-a-project" className={`${styles.pillarBtn} ${styles.pillarBtnGreen}`}>
                Start a research project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── ALL SERVICES ──────────────────────────────── */}
      <section className={styles.services} aria-labelledby="services-h">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>All Services</p>
            <h2 id="services-h" className={styles.sectionHeading}>Everything we offer</h2>
          </div>

          <div className={styles.servicesGrid}>
            {ALL_SERVICES.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.serviceCardIcon} aria-hidden="true">
                  {s.icon}
                </div>
                <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                <p className={styles.serviceCardDesc}>{s.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.servicesFooterRow}>
            <Link href="/projects" className={styles.servicesViewAll}>
              View full service details
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────── */}
      <section className={styles.process} aria-labelledby="process-h">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>How It Works</p>
            <h2 id="process-h" className={styles.sectionHeading}>Simple four-step process</h2>
          </div>
          <div className={styles.processSteps}>
            {PROCESS.map((step, i) => (
              <div key={step.num} className={styles.processStep}>
                <span className={styles.processNum}>{step.num}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
                {i < PROCESS.length - 1 && (
                  <div className={styles.processArrow} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={styles.processFooter}>
            <Link href="/how-it-works" className={styles.processLink}>
              See the full process
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────── */}
      <section className={styles.whyUs} aria-labelledby="why-h">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Why ProjectKaro</p>
            <h2 id="why-h" className={styles.sectionHeading}>What makes us different</h2>
          </div>
          <div className={styles.whyGrid}>
            {[
              { title: "Experienced developers", desc: "Real-world expertise across web, AI, and academic domains." },
              { title: "On-time delivery", desc: "Defined milestones. Realistic timelines. Zero missed deadlines." },
              { title: "Fixed pricing", desc: "Detailed quote before work starts. No hidden costs." },
              { title: "Production-ready code", desc: "Clean, documented, scalable — industry standards from day one." },
              { title: "Full documentation", desc: "Technical reports, setup guides, academic papers — all included." },
              { title: "Dedicated support", desc: "Direct line throughout. Revisions handled without friction." },
            ].map((item, i) => (
              <div key={item.title} className={styles.whyCard}>
                <span className={styles.whyCardNum} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardDesc}>{item.desc}</p>
              </div>
            ))}
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
