import Image from "next/image";
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
    title: "Our Mission",
    text: "We help students, individuals, and businesses bring their ideas to life through professional development and structured project execution. Quality, reliability, and clear communication from brief to delivery.",
  },
  {
    title: "Technical Excellence",
    text: "Every line of code is clean, maintainable, and documented. We use modern frameworks and industry best practices, built to be functional today and scalable for the future.",
  },
  {
    title: "Client-Centric Approach",
    text: "We treat every project as a partnership. Transparent timelines, regular progress updates, and responsive communication. Your requirements drive every decision, never templates or assumptions.",
  },
  {
    title: "Results-Driven Execution",
    text: "We focus on outcomes, not just output. Whether you need a website live by a deadline, a student project submitted on time, or an MVP in the hands of investors, we structure our work around the result.",
  },
  {
    title: "Full Documentation",
    text: "Every delivery includes relevant documentation: setup guides, code comments, academic reports, and presentation support. For students, we stay available until submission is complete.",
  },
  {
    title: "On-Time Delivery",
    text: "Defined milestones and realistic timelines agreed upfront. We commit to deadlines and we meet them. No surprises, no extensions without communication.",
  },
];

/* Line-art icons for the values cards (stroke style, aria-hidden) */
const iconProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const VALUE_ICONS = [
  /* Our Mission - compass */
  <svg {...iconProps} key="mission">
    <circle cx="12" cy="12" r="9" />
    <polygon points="15.5 8.5 13.2 13.2 8.5 15.5 10.8 10.8" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>,
  /* Technical Excellence - code brackets */
  <svg {...iconProps} key="code">
    <polyline points="8.5 6 3.5 12 8.5 18" />
    <polyline points="15.5 6 20.5 12 15.5 18" />
    <line x1="13" y1="4.5" x2="11" y2="19.5" />
  </svg>,
  /* Client-Centric Approach - two linked rings */
  <svg {...iconProps} key="partnership">
    <circle cx="9" cy="12" r="5.5" />
    <circle cx="15" cy="12" r="5.5" />
  </svg>,
  /* Results-Driven Execution - upward trend */
  <svg {...iconProps} key="results">
    <polyline points="3.5 17.5 9.5 11.5 13.5 14.5 20.5 7" />
    <polyline points="15.5 7 20.5 7 20.5 12" />
  </svg>,
  /* Full Documentation - page with lines */
  <svg {...iconProps} key="docs">
    <path d="M6 3.5h8l4.5 4.5v12.5H6z" />
    <polyline points="14 3.5 14 8 18.5 8" />
    <line x1="9" y1="12" x2="15.5" y2="12" />
    <line x1="9" y1="15.5" x2="15.5" y2="15.5" />
    <line x1="9" y1="19" x2="13.5" y2="19" />
  </svg>,
  /* On-Time Delivery - clock */
  <svg {...iconProps} key="clock">
    <circle cx="12" cy="12" r="8.5" />
    <polyline points="12 7.5 12 12 15.5 13.8" />
  </svg>,
];

const STATS = [
  { value: "100+", label: "Projects delivered" },
  { value: "300+", label: "Clients served" },
  { value: "10", label: "Services offered" },
  { value: "24h", label: "Detailed quote turnaround" },
];

const FINE_PRINT = [
  { title: "Registered MSME (Udyam)", text: "A registered Indian micro-enterprise. You are dealing with a real, accountable business." },
  { title: "Hyderabad, India", text: "Based in Hyderabad, working with clients across India and beyond." },
  { title: "Per-project pricing", text: "Every quote is priced for your project alone. No packages, no hidden fees." },
  { title: "Quote within 24 hours", text: "Send your requirements and get a detailed proposal back the next day." },
];

/* Brand mark: cropped from the real ProjectKaro logo, upscaled */
const SEAL_ART = (
  <Image
    src="/logo-mark.png"
    alt="ProjectKaro logo mark"
    width={336}
    height={336}
    className="artSvg"
    priority={false}
  />
);

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

      {/* ── HERO: editorial + studio card ──────────────── */}
      <section className={styles.hero} aria-labelledby="about-heading">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                About ProjectKaro
              </p>
              <h1 id="about-heading" className={styles.heroTitle}>
                Small studio. <em>Serious standard.</em>
              </h1>
              <p className={styles.heroLede}>
                ProjectKaro is a registered MSME development studio in Hyderabad, India. Since 2024 we have
                delivered 100+ projects, from business websites to final-year academic work, each scoped in
                writing, priced per project, and delivered on the agreed date.
              </p>
              <div className={styles.heroMeta}>
                <span>Registered MSME (Udyam)</span>
                <span>Hyderabad, India</span>
                <span>Since 2024</span>
              </div>
            </div>
            <aside className={styles.studioCard} aria-label="ProjectKaro studio facts">
              <div className={styles.sealWrap} aria-hidden="true">{SEAL_ART}</div>
              <dl className={styles.studioFacts}>
                <div>
                  <dt>Studio</dt>
                  <dd>ProjectKaro</dd>
                </div>
                <div>
                  <dt>Founded</dt>
                  <dd>2024, Hyderabad</dd>
                </div>
                <div>
                  <dt>Registered</dt>
                  <dd>MSME (Udyam), India</dd>
                </div>
                <div>
                  <dt>Deliveries</dt>
                  <dd>100+ projects</dd>
                </div>
              </dl>
            </aside>
          </div>
          <figure className={styles.heroPhoto}>
            <Image
              src="/images/studio-work.jpg"
              alt="The ProjectKaro studio at work, designing and building client projects"
              width={1400}
              height={933}
              loading="lazy"
              sizes="100vw"
            />
          </figure>
        </div>
      </section>

      {/* ── STATS ROW ─────────────────────────────────── */}
      <section className={styles.statsBand} aria-labelledby="about-stats-h">
        <div className="container">
          <h2 id="about-stats-h" className={styles.visuallyHidden}>
            ProjectKaro in numbers
          </h2>
          <ul className={styles.statsList} role="list">
            {STATS.map((stat) => (
              <li key={stat.label} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── THE STORY ─────────────────────────────────── */}
      <section className={styles.story} aria-labelledby="story-h">
        <div className="container">
          <div className={styles.storyInner}>
            <p className={styles.storyEyebrow}>The short version</p>
            <h2 id="story-h" className={styles.storyHeading}>
              Why ProjectKaro exists
            </h2>
            <div className={styles.storyProse}>
              <p>
                <span className={styles.dropCap}>P</span>rojectKaro started in Hyderabad in 2024 with a simple observation.
                Students needed complete, submission-ready projects. Small businesses needed websites that brought in real
                enquiries. Underneath, both needed the same thing: someone reliable on the other side of the brief.
              </p>
              <p>
                So the studio runs on a fixed standard. Scope and price in writing before we start. A detailed quote within
                24 hours. Delivery on the agreed date, with full documentation. Per-project pricing, never hidden fees.
                It is not a complicated model. It is just one that holds up, across 100+ deliveries and counting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES: ledger rows ───────────────────────── */}
      <section className={styles.values} aria-labelledby="values-heading">
        <div className="container">
          <div className={styles.valuesHeader}>
            <p className={styles.eyebrow}>What we stand for</p>
            <h2 id="values-heading" className={styles.valuesTitle}>
              How we work
            </h2>
          </div>

          <ul className={styles.valuesGrid} role="list">
            {VALUES.map((v, i) => (
              <li key={v.title} className={styles.valueCard}>
                <span className={styles.valueIcon} aria-hidden="true">
                  {VALUE_ICONS[i]}
                </span>
                <h3 className={styles.valueCardTitle}>{v.title}</h3>
                <p className={styles.valueCardText}>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FINE PRINT ────────────────────────────────── */}
      <section className={styles.finePrint} aria-labelledby="fine-print-h">
        <div className="container">
          <div className={styles.finePrintHeader}>
            <p className={styles.eyebrow}>Trust, itemised</p>
            <h2 id="fine-print-h" className={styles.finePrintTitle}>
              The fine print, upfront
            </h2>
          </div>
          <ul className={styles.finePrintList} role="list">
            {FINE_PRINT.map((item) => (
              <li key={item.title} className={styles.finePrintItem}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h3 className={styles.finePrintItemTitle}>{item.title}</h3>
                  <p className={styles.finePrintItemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA
        title="Ready to start your project?"
        description="Tell us what you need and we will get back to you within 24 hours with a proposal, timeline, and a detailed quote."
      />
    </>
  );
}
