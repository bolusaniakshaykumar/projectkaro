import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { BackToTop, Reveal, StickyMiniCta } from "@/components/PageKit/PageKit";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";
import PricingFaq from "./PricingFaq";
import styles from "./page.module.css";

const pageTitle = "Website and Project Pricing in India";
const pagePath = "/pricing";
const pageDescription =
  "Indicative starting prices for websites and student projects in India. Business website from ₹15,000. Final per-project quote shared within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} | ProjectKaro`,
  description: pageDescription,
  path: pagePath,
  keywords: [
    "website cost in india",
    "how much does a website cost in india",
    "website development cost india",
  ],
});

/* ── Website strategy bands (featured strip) ── */
const BANDS = [
  {
    name: "Starter",
    price: "₹15,000",
    desc: "Small business websites. A professional presence that covers who you are, what you offer, and how to reach you.",
  },
  {
    name: "Business",
    price: "₹25,000",
    desc: "More pages and a site built for lead generation. Made to bring in real enquiries, not just look good.",
    featured: true,
  },
  {
    name: "Advanced",
    price: "₹40,000",
    desc: "Custom features and integrations. Built around what your business actually needs, not a template.",
  },
  {
    name: "E-commerce",
    price: "₹30,000",
    desc: "Online stores. Depends on catalogue size, payments, and logistics. We scope every store before quoting.",
  },
];

/* ── Price groups: verbatim from the founder's intern pricing card ── */
type PriceRow = { name: string; price: string; custom: boolean };

const WEBSITES_SOFTWARE: PriceRow[] = [
  { name: "Business/Static Website", price: "₹15,000", custom: false },
  { name: "Dynamic Website", price: "₹25,000", custom: false },
  { name: "E-Commerce Website", price: "₹30,000", custom: false },
  { name: "Full-Stack Application", price: "₹25,000", custom: false },
  { name: "Startup MVP Development", price: "Custom Quote", custom: true },
  { name: "AI/ML Solutions", price: "₹6,000", custom: false },
];

const STUDENT_RESEARCH: PriceRow[] = [
  { name: "Minor Student Project", price: "₹5,000", custom: false },
  { name: "Major Student Project", price: "₹8,000-₹15,000+", custom: false },
  { name: "IoT Solutions", price: "Custom Quote", custom: true },
  { name: "Research/Technical Support", price: "~₹15,000", custom: false },
  { name: "IEEE Paper Writing", price: "₹2,500", custom: false },
  { name: "Technical Consultation", price: "Custom Quote", custom: true },
];

const NOTES = [
  {
    title: "Per-project pricing",
    text: "Every project is different, so pricing is per project, never one-size-fits-all. The numbers above are indicative starting prices to help you plan.",
  },
  {
    title: "Detailed quote within 24 hours",
    text: "Share your requirements and we send a detailed, written, itemised quote within 24 hours. That quote is the final word on cost before work starts.",
  },
  {
    title: "Final quote depends on scope",
    text: "No fixed pricing. The exact cost depends on your requirements: pages, features, integrations, content, and timeline. What you approve is what you pay.",
  },
  {
    title: "Milestone-based payments",
    text: "You pay as agreed stages of the project are completed. The payment schedule is part of your written quote, so there are no surprises.",
  },
];

const FAQS = [
  {
    question: "Why do you not publish a fixed price list?",
    answer:
      "Because no two projects are the same. A fixed list either overcharges simple work or cuts corners on complex work. Indicative starting prices help you plan, and a per-project quote after reviewing your requirements gives you the exact number.",
  },
  {
    question: "What affects the final cost of a website?",
    answer:
      "The number of pages, design customisation, features like forms, WhatsApp integration or payment gateways, content volume, and timeline. Your quote breaks each of these down so you can see where the cost comes from.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are milestone-based: you pay as agreed stages of the project are completed. The payment schedule is part of your written quote, so there are no surprises.",
  },
  {
    question: "Are domain and hosting included in the price?",
    answer:
      "Your quote lists exactly what is included. Domain and hosting are typically registered in your name so you own them outright, and we guide you through it or handle it as quoted.",
  },
  {
    question: "How much does a student project cost?",
    answer:
      "Minor projects start from ₹5,000 (indicative). Major projects are priced on scope after we review your topic or abstract. Share your requirements for a detailed quote within 24 hours.",
  },
  {
    question: "How fast will I get my quote?",
    answer:
      "Within 24 hours of submitting your requirements through our start-a-project form or WhatsApp. The quote includes scope, deliverables, timeline, and the milestone payment schedule.",
  },
];

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function PricingPage() {
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
            name: "Website and Project Pricing",
            description: pageDescription,
            path: pagePath,
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: pagePath },
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
                Pricing
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero: answer-first. The visitor's question is "how much?" - the
          page answers it in the first viewport, then explains. */}
      <section className={styles.hero} aria-labelledby="pricing-title">
        <div className="container">
          <Reveal className={styles.heroCenter}>
            <p className={styles.eyebrow}>Pricing</p>
            <h1 id="pricing-title" className={styles.title}>
              {pageTitle}
            </h1>
            <p className={styles.answer}>
              Business websites start from{" "}
              <strong>₹15,000</strong>, minor student projects from{" "}
              <strong>₹5,000</strong>. Every final quote is per-project and
              shared within <strong>24 hours</strong>.
            </p>
            <p className={styles.intro}>
              The numbers below are indicative starting prices to help you
              plan. Share your requirements and we send a detailed, written,
              itemised quote within 24 hours. That quote is the final word on
              cost before work starts.
            </p>
            <div className={styles.heroCtas}>
              <Link href="/start-a-project" className={styles.ctaPrimary}>
                Get your quote <ArrowIcon />
              </Link>
              <Link href="#bands" className={styles.ctaGhost}>
                See starting prices
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Website strategy bands: the visual climax. Four cards, the middle
          (Business) anchor gets the brand wash - the most common choice. */}
      <section
        id="bands"
        className={styles.bands}
        aria-labelledby="bands-heading"
      >
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>Website strategy bands</p>
            <h2 id="bands-heading" className={styles.sectionTitle}>
              How website builds are sized
            </h2>
            <p className={styles.sectionSub}>
              Four starting bands for business websites. Your exact band and
              final quote are set after we review your requirements, within
              24 hours.
            </p>
          </Reveal>
          <div className={styles.bandsGrid}>
            {BANDS.map((band, i) => (
              <Reveal
                key={band.name}
                delay={i * 90}
                className={`${styles.bandCard} ${
                  band.featured ? styles.bandFeatured : ""
                }`}
              >
                <p className={styles.bandName}>{band.name}</p>
                <p className={styles.bandPrice}>
                  <span className={styles.bandPriceLabel}>Starting from</span>
                  <span className={styles.bandPriceValue}>{band.price}</span>
                </p>
                <p className={styles.bandDesc}>{band.desc}</p>
                <Link
                  href="/start-a-project"
                  className={styles.bandCta}
                  aria-label={`Get a quote for the ${band.name} website band`}
                >
                  Get a quote <ArrowIcon />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full price tables: quiet, tabular, scannable. */}
      <section className={styles.group} aria-labelledby="group-web-heading">
        <div className="container">
          <Reveal className={styles.groupGrid}>
            <div className={styles.groupHead}>
              <p className={styles.sectionEyebrow}>Indicative starting prices</p>
              <h2 id="group-web-heading" className={styles.sectionTitle}>
                Websites &amp; Software
              </h2>
              <p className={styles.sectionSub}>
                Websites, applications, MVPs, and AI solutions for businesses
                and startups. Final quote depends on scope and is confirmed in
                writing before work begins.
              </p>
            </div>
            <ul className={styles.priceList}>
              {WEBSITES_SOFTWARE.map((row) => (
                <li
                  key={row.name}
                  className={`${styles.priceRow} ${
                    row.custom ? styles.priceRowCustom : ""
                  }`}
                >
                  <span className={styles.priceName}>{row.name}</span>
                  <span className={styles.priceBlock}>
                    <span className={styles.priceLabel}>
                      {row.custom ? "Custom Quote" : "Starting from"}
                    </span>
                    <span className={styles.priceValue}>{row.price}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className={styles.group} aria-labelledby="group-student-heading">
        <div className="container">
          <Reveal className={styles.groupGrid}>
            <div className={styles.groupHead}>
              <p className={styles.sectionEyebrow}>Indicative starting prices</p>
              <h2 id="group-student-heading" className={styles.sectionTitle}>
                Student &amp; Research
              </h2>
              <p className={styles.sectionSub}>
                Academic projects and research support for students, priced per
                project. Share your topic or abstract for a detailed quote
                within 24 hours.
              </p>
            </div>
            <ul className={styles.priceList}>
              {STUDENT_RESEARCH.map((row) => (
                <li
                  key={row.name}
                  className={`${styles.priceRow} ${
                    row.custom ? styles.priceRowCustom : ""
                  }`}
                >
                  <span className={styles.priceName}>{row.name}</span>
                  <span className={styles.priceBlock}>
                    <span className={styles.priceLabel}>
                      {row.custom ? "Custom Quote" : "Starting from"}
                    </span>
                    <span className={styles.priceValue}>{row.price}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Pricing principles: 2x2 bento. Quiet after the tables. */}
      <section className={styles.notes} aria-labelledby="notes-heading">
        <div className="container">
          <Reveal>
            <h2 id="notes-heading" className={styles.sectionTitle}>
              How our pricing works
            </h2>
            <p className={styles.sectionSub}>
              Four principles behind every number on this page.
            </p>
          </Reveal>
          <div className={styles.notesGrid}>
            {NOTES.map((note, i) => (
              <Reveal key={note.title} delay={(i % 2) * 90}>
                <div className={styles.noteItem}>
                  <span className={styles.noteIcon} aria-hidden="true">
                    <CheckIcon />
                  </span>
                  <div>
                    <h3 className={styles.noteTitle}>{note.title}</h3>
                    <p className={styles.noteText}>{note.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ: narrow column, quiet. */}
      <section className={styles.faq} aria-labelledby="pricing-faq-heading">
        <div className="container">
          <Reveal className={styles.faqInner}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 id="pricing-faq-heading" className={styles.sectionTitle}>
              Pricing questions, answered
            </h2>
            <PricingFaq items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* Dark CTA band: the final conversion moment. */}
      <section className={styles.ctaBand} aria-labelledby="pricing-cta-heading">
        <div className="container">
          <Reveal className={styles.ctaInner}>
            <p className={styles.ctaEyebrow}>Detailed quote within 24 hours</p>
            <h2 id="pricing-cta-heading" className={styles.ctaTitle}>
              Get your exact number within 24 hours.
            </h2>
            <p className={styles.ctaText}>
              Tell us what you need. A detailed, itemised, per-project quote
              with scope and timeline, no commitment required.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/start-a-project" className={styles.ctaPrimaryLight}>
                Get your quote <ArrowIcon />
              </Link>
              <Link href="/how-it-works" className={styles.ctaGhostLight}>
                How it works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <StickyMiniCta
        label="Starting from ₹15,000 · Quote in 24h"
        buttonText="Get a quote"
      />
      <BackToTop />
    </main>
  );
}
