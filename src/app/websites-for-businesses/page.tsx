import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { FormSkeleton } from "@/components/Skeleton/Skeleton";
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
  title: "Websites for Businesses",
  description:
    "Get a professional business website in India that builds trust and brings enquiries. Per-project pricing, detailed quote within 24 hours.",
  path: "/websites-for-businesses",
  keywords: [
    "business website india",
    "website development for business",
    "small business website",
    "professional website cost india",
  ],
});

const pageTitle = "Websites for Businesses";

const PAINS = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" />
      </svg>
    ),
    title: "Your current site looks outdated",
    text: "Visitors judge your business in seconds. An old or broken site quietly sends them to your competitors.",
    consequence: "The cost: trust lost before the first call.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <line x1="4" y1="4" x2="20" y2="20" />
      </svg>
    ),
    title: "No enquiries come through your site",
    text: "A site without clear contact paths is just a brochure. We build every page around one job: getting you enquiries.",
    consequence: "The cost: visitors who never become customers.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.5" y2="16.5" />
      </svg>
    ),
    title: "Customers cannot find you on Google",
    text: "We set up the SEO basics properly, page titles, structure, and local signals, so nearby customers can actually find you.",
    consequence: "The cost: customers who never find you.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    ),
    title: "You keep paying for leads elsewhere",
    text: "Marketplace commissions and ads add up. Your own website is an asset that keeps working without a per-lead tax.",
    consequence: "The cost: rent paid to someone else's platform, forever.",
  },
];

const OUTCOMES = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="9" r="5" />
        <path d="M8.6 13.4L7 22l5-3 5 3-1.6-8.6" />
        <polyline points="9.8 9 11 10.2 13.4 7.6" />
      </svg>
    ),
    title: "Design that builds trust",
    text: "A professional look that makes visitors take your business seriously from the very first visit.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 2L11 13" />
        <path d="M22 2l-7 20-4-9-9-4z" />
      </svg>
    ),
    title: "Enquiries in one tap",
    text: "Forms and WhatsApp buttons placed where visitors are ready to act, so no lead slips away.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2.5" />
        <line x1="11" y1="18.5" x2="13" y2="18.5" strokeLinecap="round" />
        <line x1="2.5" y1="8" x2="4.5" y2="8" strokeLinecap="round" />
        <line x1="2.5" y1="12" x2="4.5" y2="12" strokeLinecap="round" />
      </svg>
    ),
    title: "Fast on every phone",
    text: "Most of your visitors are on mobile. Your site loads fast and looks sharp on small screens.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.5" y2="16.5" />
        <polyline points="8.5 11 10.3 12.8 13.8 9" />
      </svg>
    ),
    title: "Found on Google",
    text: "Proper titles, clean structure, and local signals give your business a fair shot at being discovered.",
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 11.5 11.2 13.7 15.2 9.5" />
      </svg>
    ),
    title: "Yours, outright",
    text: "You own the site, the domain, and the content. No lock-in, no rental model, no surprises.",
  },
];

const INDUSTRIES = [
  { href: "/websites-for-dental-clinics", name: "Dental Clinics", blurb: "Appointment-ready websites for dental practices." },
  { href: "/websites-for-doctors", name: "Doctors", blurb: "Trust-building websites for doctors and clinics." },
  { href: "/websites-for-restaurants", name: "Restaurants", blurb: "Menu-first websites that bring diners in." },
  { href: "/websites-for-salons", name: "Salons", blurb: "Booking-focused websites for salons." },
  { href: "/websites-for-real-estate", name: "Real Estate", blurb: "Listing-led websites for property businesses." },
  { href: "/websites-for-startups", name: "Startups", blurb: "Launch-ready websites for startups." },
  { href: "/websites-for-cas", name: "CAs and Accountants", blurb: "Credible websites for CA and accounting firms." },
  { href: "/websites-for-coaching-centres", name: "Coaching Centres", blurb: "Enrolment-focused websites for coaching institutes." },
  { href: "/websites-for-consultants", name: "Consultants", blurb: "Authority-building websites for consultants." },
  { href: "/websites-for-small-businesses", name: "Small Businesses", blurb: "Affordable websites for small businesses." },
];

const MINI_STEPS = [  {
    num: "01",
    title: "Tell us about your business",
    text: "Fill the form or message us on WhatsApp. Share your business, your services, and what a good enquiry looks like for you.",
  },
  {
    num: "02",
    title: "Get a detailed quote in 24 hours",
    text: "We review your requirements and respond within 24 hours with a detailed quote, a clear scope, and a timeline. Per-project pricing, nothing vague.",
  },
  {
    num: "03",
    title: "Launch and start getting enquiries",
    text: "We design, build, and deploy your site, then hand everything over with documentation. You approve every step before it goes live.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "How much does a business website cost in India?",
    answer:
      "It depends on your requirements. A simple 5-page business website costs less than a site with booking flows, product catalogues, or custom integrations. We price every project individually: tell us what you need, and ProjectKaro will share a detailed quote within 24 hours. No fixed packages, no hidden charges.",
  },
  {
    question: "How long does it take to build a business website?",
    answer:
      "Most business websites take 1 to 4 weeks from approval to launch, depending on the number of pages and features. We agree on a timeline upfront and commit to it.",
  },
  {
    question: "I already have a website but it looks old. Can you redesign it?",
    answer:
      "Yes. We review your current site, keep what works (your content, your Google rankings), and rebuild the design and structure so it converts visitors into enquiries. Redesigns follow the same process: detailed quote within 24 hours, then build.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "We build every site with the SEO basics done right: proper titles, clean structure, fast loading, and local signals for Indian businesses. Ranking takes time and no one can promise the first position, but your site will be set up correctly from day one.",
  },
  {
    question: "Do I own the website and domain?",
    answer:
      "Yes. You own everything: the domain, the site files, and the content. We hand over complete documentation and access, so you are never locked in.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Just a few basics: your business name, the services or products you want to show, any content or photos you have, and how you want customers to reach you. If you do not have content ready, we can help draft it as part of the project.",
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

/* Custom line-art: storefront with a click badge */
const STOREFRONT_ART = (
  <svg viewBox="0 0 320 260" fill="none" aria-hidden="true" className="artSvg">
    <line x1="20" y1="232" x2="300" y2="232" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="artInkStroke" opacity="0.4" />
    <rect x="70" y="92" width="180" height="140" rx="6" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
    <path d="M58,92 L72,58 L248,58 L262,92 Z" strokeWidth="2.5" strokeLinejoin="round" className="artAwning" />
    <line x1="100" y1="58" x2="94" y2="92" stroke="currentColor" strokeWidth="2" className="artBrandStroke" opacity="0.55" />
    <line x1="140" y1="58" x2="136" y2="92" stroke="currentColor" strokeWidth="2" className="artBrandStroke" opacity="0.55" />
    <line x1="180" y1="58" x2="184" y2="92" stroke="currentColor" strokeWidth="2" className="artBrandStroke" opacity="0.55" />
    <line x1="220" y1="58" x2="226" y2="92" stroke="currentColor" strokeWidth="2" className="artBrandStroke" opacity="0.55" />
    <rect x="126" y="104" width="68" height="22" rx="11" className="artSign" />
    <rect x="92" y="142" width="42" height="52" rx="4" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
    <line x1="113" y1="142" x2="113" y2="194" stroke="currentColor" strokeWidth="2" className="artInkStroke" opacity="0.5" />
    <rect x="186" y="142" width="42" height="52" rx="4" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
    <line x1="207" y1="142" x2="207" y2="194" stroke="currentColor" strokeWidth="2" className="artInkStroke" opacity="0.5" />
    <rect x="144" y="158" width="32" height="74" rx="4" stroke="currentColor" strokeWidth="2.5" className="artInkStroke" />
    <circle cx="168" cy="196" r="2.5" fill="currentColor" className="artInkFill" />
    <circle cx="258" cy="186" r="24" fill="#ffffff" stroke="currentColor" strokeWidth="2.5" className="artBrandStroke" />
    <polyline points="249 186 256 193 268 179" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="artBrandStroke" />
  </svg>
);

export default function WebsitesForBusinessesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/websites-for-businesses",
            title: pageTitle,
            description:
              "Get a professional business website in India that builds trust and brings enquiries. Per-project pricing, detailed quote within 24 hours.",
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: pageTitle, path: "/websites-for-businesses" },
          ]),
        ]}
      />

      {/* ── HERO: asymmetric ───────────────────────── */}
      <section className={styles.hero} aria-labelledby="biz-heading">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                For business owners
              </p>
              <h1 id="biz-heading" className={styles.heroTitle}>
                A website that <em>brings in customers.</em>
              </h1>
              <p className={styles.heroSub}>
                If your site is outdated, slow, or simply not bringing enquiries, ProjectKaro builds professional business websites in India that turn visitors into customers, with per-project pricing and a detailed quote within 24 hours.
              </p>
              <div className={styles.heroCtas}>
                <a href="#quote" className={styles.ctaPrimary}>
                  Get a Free Quote {ARROW_ICON}
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaGhost}>
                  Chat on WhatsApp
                </a>
              </div>
              <div className={styles.heroFacts}>
                <span>Per-project pricing</span>
                <span>Quote in 24 hours</span>
                <span>You own the site outright</span>
              </div>
            </div>
            <div className={styles.heroArt} aria-hidden="true">
              {STOREFRONT_ART}
              <div className={styles.heroPhoto}>
                <Image
                  src="/images/business-counter.jpg"
                  alt=""
                  width={1400}
                  height={934}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PAINS: problem cards ─────────────────────── */}
      <section className={styles.pains} aria-labelledby="pains-h">
        <div className="container">
          <p className={styles.sectionEyebrow}>The problem</p>
          <h2 id="pains-h" className={styles.sectionHeading}>
            Sound familiar?
          </h2>
          <ul className={styles.painGrid} role="list">
            {PAINS.map((pain) => (
              <li key={pain.title} className={styles.painCard}>
                <span className={styles.painIcon} aria-hidden="true">{pain.icon}</span>
                <h3 className={styles.painTitle}>{pain.title}</h3>
                <p className={styles.painText}>{pain.text}</p>
                <p className={styles.painCost}>{pain.consequence}</p>
              </li>
            ))}
          </ul>
          <a href="#quote" className={styles.painCta}>
            Get a website that fixes this {ARROW_ICON}
          </a>
        </div>
      </section>

      {/* ── OUTCOMES: outcome cards ──────────────────── */}
      <section className={styles.outcomes} aria-labelledby="outcomes-h">
        <div className="container">
          <div className={styles.outcomesGrid}>
            <div className={styles.outcomesSticky}>
              <p className={styles.sectionEyebrow}>What you get</p>
              <h2 id="outcomes-h" className={styles.sectionHeading}>
                A website built to win business
              </h2>
              <p className={styles.outcomesSub}>
                Not a digital brochure. Every page has one job: turning a visitor into an enquiry.
              </p>
              <p className={styles.outcomesSub}>
                We build the way an owner would: clear services, real photos of your work, reviews people can verify, and a contact path that is always one tap away. No bloated templates, no pages nobody asked for.
              </p>
              <ul className={styles.outcomesProof} role="list">
                <li>{CHECK_ICON} Built around your business, not a template</li>
                <li>{CHECK_ICON} Content help included, we draft what you do not have</li>
                <li>{CHECK_ICON} Per-project pricing, detailed quote within 24 hours</li>
                <li>{CHECK_ICON} You approve every page before it goes live</li>
              </ul>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.outcomesWhats}
              >
                <span className={styles.outcomesWhatsIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </span>
                <span>
                  <strong>Talk to us on WhatsApp</strong>
                  <small>Free quote, no obligation</small>
                </span>
              </a>
              <div className={styles.outcomeLinks}>
                <Link href="/services/website-development">Website development service {ARROW_ICON}</Link>
                <Link href="/services">See all services {ARROW_ICON}</Link>
                <Link href="/how-it-works">How it works {ARROW_ICON}</Link>
              </div>
            </div>
            <ul className={styles.outcomeGrid} role="list">
              {OUTCOMES.map((outcome) => (
                <li key={outcome.title} className={styles.outcomeCard}>
                  <span className={styles.outcomeIcon} aria-hidden="true">{outcome.icon}</span>
                  <h3 className={styles.outcomeCardTitle}>{outcome.title}</h3>
                  <p className={styles.outcomeCardText}>{outcome.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────────── */}
      <section className={styles.industries} aria-labelledby="industries-h">
        <div className="container">
          <p className={styles.sectionEyebrow}>Built for your line of work</p>
          <h2 id="industries-h" className={styles.sectionHeading}>
            Websites for your industry
          </h2>
          <p className={styles.sectionSub}>
            Every industry has its own customers, its own questions, and its own way of booking. Explore website concepts built for yours.
          </p>
          <ul className={styles.industryGrid} role="list">
            {INDUSTRIES.map((industry) => (
              <li key={industry.href}>
                <Link href={industry.href} className={styles.industryCard}>
                  <span className={styles.industryName}>{industry.name}</span>
                  <span className={styles.industryBlurb}>{industry.blurb}</span>
                  <span className={styles.industryArrow} aria-hidden="true">{ARROW_ICON}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── DELIVERY STANDARD ────────────────────────── */}
      <section className={styles.standard} aria-labelledby="standard-h">
        <div className="container">
          <div className={styles.standardBand}>
            <div>
              <p className={styles.standardEyebrow}>The delivery standard</p>
              <h2 id="standard-h" className={styles.standardTitle}>
                Every project ships complete
              </h2>
              <ul className={styles.standardList} role="list">
                <li>
                  <span className={styles.standardCheck} aria-hidden="true">{CHECK_ICON}</span>
                  <span><strong>Source code:</strong> complete and commented, handed over in full.</span>
                </li>
                <li>
                  <span className={styles.standardCheck} aria-hidden="true">{CHECK_ICON}</span>
                  <span><strong>Documentation:</strong> setup and usage guides written for a non-technical owner.</span>
                </li>
                <li>
                  <span className={styles.standardCheck} aria-hidden="true">{CHECK_ICON}</span>
                  <span><strong>Handover:</strong> a walkthrough session where we answer every question.</span>
                </li>
              </ul>
            </div>
            <Link href="/start-a-project" className={styles.standardLink}>
              Start your project {ARROW_ICON}
            </Link>
          </div>
        </div>
      </section>

      {/* ── MINI PROCESS ─────────────────────────────── */}
      <section className={styles.miniProcess} aria-labelledby="mini-h">
        <div className="container">
          <p className={styles.sectionEyebrow}>Getting started</p>
          <h2 id="mini-h" className={styles.sectionHeading}>
            Three steps to your new website
          </h2>
          <ol className={styles.miniSteps}>
            {MINI_STEPS.map((step) => (
              <li key={step.num} className={styles.miniStep}>
                <span className={styles.miniNum} aria-hidden="true">{step.num}</span>
                <h3 className={styles.miniTitle}>{step.title}</h3>
                <p className={styles.miniText}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className={styles.faq} aria-labelledby="biz-faq-h">
        <div className="container">
          <div className={styles.faqGrid}>
            <div className={styles.faqSticky}>
              <p className={styles.sectionEyebrow}>Questions, answered</p>
              <h2 id="biz-faq-h" className={styles.sectionHeading}>
                Business website FAQs
              </h2>
              <p className={styles.faqSub}>
                Good questions lead to good websites. If yours is not answered here,
                ask us directly. A human replies, and it costs nothing to ask.
              </p>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.faqWhats}
              >
                <span className={styles.faqWhatsIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </span>
                <span>
                  <strong>Chat on WhatsApp</strong>
                  <small>Typically replies within a few hours</small>
                </span>
              </a>
              <ul className={styles.faqReassure} role="list">
                <li>{CHECK_ICON} Free to ask, no obligation</li>
                <li>{CHECK_ICON} A human replies, not a bot</li>
                <li>{CHECK_ICON} Detailed quote within 24 hours</li>
              </ul>
            </div>
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
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ───────────────────────────────── */}
      <section id="quote" className={styles.quote} aria-labelledby="quote-h">
        <div className="container">
          <div className={styles.quoteGrid}>
            <div className={styles.quoteCopy}>
              <p className={styles.sectionEyebrow}>Get started</p>
              <h2 id="quote-h" className={styles.sectionHeading}>
                Get your detailed quote
              </h2>
              <p className={styles.sectionSub}>
                Tell us about your business and we will respond within 24 hours with a detailed quote and timeline.
              </p>
              <ul className={styles.quoteReassure}>
                <li>{CHECK_ICON} Reply within 24 hours, written by a human</li>
                <li>{CHECK_ICON} Free quote, no obligation to proceed</li>
                <li>{CHECK_ICON} After you submit: scope, quote, and timeline in your inbox</li>
                <li>{CHECK_ICON} Per-project pricing, no hidden costs</li>
                <li>{CHECK_ICON} You own the site and domain outright</li>
                <li>{CHECK_ICON} You approve everything before launch</li>
              </ul>
            </div>
            <div className={styles.formWrap}>
              <StartProjectForm initialProjectType="Business Website" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
