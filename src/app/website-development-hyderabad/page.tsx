import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { BackToTop, Reveal, StickyMiniCta } from "@/components/PageKit/PageKit";
import { WHATSAPP_LINK } from "@/lib/site-config";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";
import styles from "./page.module.css";

const pageTitle = "Website Development Company in Hyderabad";
const pagePath = "/website-development-hyderabad";
const pageDescription =
  "ProjectKaro is a website development company in Hyderabad building business websites that bring enquiries. Per-project pricing, detailed quote within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} | ProjectKaro`,
  description: pageDescription,
  path: pagePath,
  keywords: [
    "website development company in hyderabad",
    "web development company hyderabad",
    "website designers in hyderabad",
  ],
});

/* Approved copy, restructured for hierarchy. */
const PAINS = [
  {
    title: "Your site looks older than your business",
    text: "Customers compare you with competitors in seconds. An outdated site makes even an established Hyderabad business look small.",
  },
  {
    title: "Enquiries go to JustDial, not to you",
    text: "Without your own site capturing leads, you keep paying directories and marketplaces for every customer. Your website should be your own enquiry channel.",
  },
  {
    title: "Nearby customers cannot find you",
    text: "People search on Google before they visit or call. We set up the on-page basics and local signals so customers in your area can actually find you.",
  },
  {
    title: "Your site fails on phones",
    text: "Most of your customers browse on mobile. A site that is slow or broken on phones quietly turns away the majority of your visitors.",
  },
];

const OUTCOMES = [
  {
    title: "Design that builds trust",
    text: "A professional look matched to your brand, so first-time visitors take your business seriously from the first scroll.",
  },
  {
    title: "Enquiries in one tap",
    text: "Contact forms and WhatsApp buttons placed where visitors are ready to act. Every enquiry reaches you directly, with no middleman.",
  },
  {
    title: "Fast on every phone",
    text: "Mobile-first builds that load quickly on Indian networks, because that is where your customers are.",
  },
  {
    title: "Local visibility basics",
    text: "Proper page structure, titles, and local signals so customers searching in Hyderabad have a real chance of finding you.",
  },
];

const DELIVERABLES = [
  "Custom design matched to your brand, never a template",
  "Mobile-first, responsive build",
  "Contact forms and WhatsApp enquiry buttons",
  "On-page SEO setup: titles, structure, and meta",
  "Fast loading, optimised for mobile networks",
  "Content guidance: what to write on each page",
  "Full handover: you own the site, domain, and content",
  "Support after launch",
];

const PROCESS = [
  {
    title: "Share requirements",
    text: "Tell us about your business, your customers, and what you want the website to do.",
  },
  {
    title: "Proposal in 24 hours",
    text: "A detailed, per-project quote with scope and timeline. No vague estimates.",
  },
  {
    title: "Build and review",
    text: "We build the site. You review every page before anything goes live.",
  },
  {
    title: "Launch and support",
    text: "Your site goes live with support after launch, so you are never stuck alone.",
  },
];

const FAQS = [
  {
    question: "Where in Hyderabad are you based?",
    answer:
      "ProjectKaro is based in Hyderabad, Telangana, and works with businesses across the city. Most communication happens on WhatsApp or calls, so location never slows a project down.",
  },
  {
    question: "How much does a website cost in Hyderabad?",
    answer:
      "Business websites start from ₹15,000 (indicative). The final price depends on pages, features, and design scope. Share your requirements and we will send a detailed written quote within 24 hours.",
  },
  {
    question: "How long does it take to build my website?",
    answer:
      "Most business websites take 1 to 4 weeks depending on scope. We agree on a timeline upfront in your quote and commit to it.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We rebuild outdated sites into modern, fast, enquiry-focused websites while keeping your content, branding, and any search presence you have built.",
  },
  {
    question: "Will I be able to update the site myself?",
    answer:
      "Yes. We hand over everything with guidance on managing your content, and you own the site, domain, and all content outright.",
  },
  {
    question: "Do you work with businesses outside Hyderabad?",
    answer:
      "Yes. While we are based in Hyderabad, we build websites for clients across India. The process is the same: requirements on WhatsApp or our form, detailed quote within 24 hours.",
  },
];

const RELATED = [
  {
    name: "Website Development",
    path: "/services/website-development",
    blurb: "Our full website development service: process, deliverables, and scope.",
  },
  {
    name: "Websites for Businesses",
    path: "/websites-for-businesses",
    blurb: "How a professional website turns visitors into enquiries.",
  },
  {
    name: "Pricing",
    path: "/pricing",
    blurb: "Indicative starting prices and how our per-project quotes work.",
  },
];

function Icon({
  children,
  size = 26,
}: {
  children: React.ReactNode;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const ICONS = [
  <Icon key="p1">
    <circle cx="12" cy="12" r="9" />
    <line x1="4" y1="4" x2="20" y2="20" />
  </Icon>,
  <Icon key="p2">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </Icon>,
  <Icon key="p3">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.5" y2="16.5" />
  </Icon>,
  <Icon key="p4">
    <rect x="7" y="2" width="10" height="20" rx="2.5" />
    <line x1="11" y1="18.5" x2="13" y2="18.5" strokeLinecap="round" />
  </Icon>,
];

const OUTCOME_ICONS = [
  <Icon key="o1">
    <circle cx="12" cy="9" r="5" />
    <path d="M8.6 13.4L7 22l5-3 5 3-1.6-8.6" />
    <polyline points="9.8 9 11 10.2 13.4 7.6" />
  </Icon>,
  <Icon key="o2">
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4z" />
  </Icon>,
  <Icon key="o3">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Icon>,
  <Icon key="o4">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>,
];

const JOURNEY = [
  {
    title: "Search",
    text: "A customer in Hyderabad searches on Google for what you offer.",
  },
  {
    title: "Compare",
    text: "They compare your site with two or three competitors in seconds.",
  },
  {
    title: "Enquire",
    text: "One tap on WhatsApp or the form sends the enquiry straight to you.",
  },
];

export default function HyderabadPage() {
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
            name: "Website Development in Hyderabad",
            description: pageDescription,
            path: pagePath,
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Website Development in Hyderabad", path: pagePath },
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
                Website Development in Hyderabad
              </span>
            </li>
          </ol>
        </div>
      </nav>

      {/* Split hero: local trust on the left, a sample local business
          browser mockup on the right with floating enquiry cards. */}
      <section className={styles.hero} aria-labelledby="hyd-title">
        <div className="container">
          <div className={styles.heroGrid}>
            <Reveal className={styles.heroText}>
              <p className={styles.eyebrow}>Hyderabad</p>
              <h1 id="hyd-title" className={styles.title}>
                {pageTitle}
              </h1>
              <p className={styles.intro}>
                ProjectKaro is based in Hyderabad and builds websites for
                businesses across the city: clinics, coaching institutes,
                salons, real estate firms, and local brands. You talk to the
                people actually building your site, on WhatsApp or a call, in
                your timezone, with a detailed quote within 24 hours.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/start-a-project" className={styles.ctaPrimary}>
                  Get a proposal
                  <Icon size={17}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </Icon>
                </Link>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaSecondary}
                >
                  <Icon size={17}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </Icon>
                  Chat on WhatsApp
                </a>
              </div>
              <div className={styles.trustRow}>
                <span className={styles.trustItem}>
                  <span className={styles.trustCheck} aria-hidden="true">
                    <Icon size={13}>
                      <polyline points="20 6 9 17 4 12" strokeWidth={2.4} />
                    </Icon>
                  </span>
                  Per-project pricing
                </span>
                <span className={styles.trustItem}>
                  <span className={styles.trustCheck} aria-hidden="true">
                    <Icon size={13}>
                      <polyline points="20 6 9 17 4 12" strokeWidth={2.4} />
                    </Icon>
                  </span>
                  Detailed quote within 24 hours
                </span>
              </div>
            </Reveal>

            <Reveal className={styles.heroVisual} delay={120}>
              <div className={styles.mockup} role="img" aria-label="Sample local business website mockup">
                <div className={styles.mockBar} aria-hidden="true">
                  <span className={styles.mockDot} />
                  <span className={styles.mockDot} />
                  <span className={styles.mockDot} />
                  <span className={styles.mockUrl}>sample-business.in</span>
                </div>
                <div className={styles.mockBody}>
                  <p className={styles.mockKicker}>Welcome</p>
                  <p className={styles.mockTitle}>Sample business homepage (sample)</p>
                  <span className={styles.mockCta}>Enquire on WhatsApp</span>
                  <div className={styles.mockChips} aria-hidden="true">
                    <span>Services</span>
                    <span>About</span>
                    <span>Reviews</span>
                    <span>Contact</span>
                  </div>
                  <div className={styles.mockLines} aria-hidden="true">
                    <span style={{ width: "92%" }} />
                    <span style={{ width: "78%" }} />
                    <span style={{ width: "84%" }} />
                  </div>
                </div>
              </div>
              <div className={styles.floatCard} aria-hidden="true">
                <span className={styles.floatIcon}>
                  <Icon size={18}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </Icon>
                </span>
                <span className={styles.floatText}>
                  <strong>New enquiry</strong>
                  <span>Hi, I need a quote for my site. (sample)</span>
                </span>
              </div>
              <div className={`${styles.floatCard} ${styles.floatCardPin}`} aria-hidden="true">
                <span className={styles.floatIcon}>
                  <Icon size={18}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </Icon>
                </span>
                <span className={styles.floatText}>
                  <strong>Found on Google</strong>
                  <span>Local search ready (sample)</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Journey: the visual narrative - how YOUR customer finds you. */}
      <section className={styles.journey} aria-labelledby="journey-heading">
        <div className="container">
          <Reveal>
            <h2 id="journey-heading" className={styles.sectionTitle}>
              How your customers find you
            </h2>
            <p className={styles.sectionSub}>
              Your website sits in the middle of this journey. We build it to
              win at every step.
            </p>
          </Reveal>
          <ol className={styles.journeySteps}>
            {JOURNEY.map((step, i) => (
              <li key={step.title} className={styles.journeyStepItem}>
                <Reveal delay={i * 100} className={styles.journeyStepWrap}>
                  <div className={styles.journeyStep}>
                    <span className={styles.journeyNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.journeyTitle}>{step.title}</h3>
                    <p className={styles.journeyText}>{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pains: rows. Local voice, local problems. */}
      <section className={styles.pains} aria-labelledby="pains-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The problems</p>
            <h2 id="pains-heading" className={styles.sectionTitle}>
              What Hyderabad businesses tell us
            </h2>
            <p className={styles.sectionSub}>
              The same website problems come up in every part of the city,
              from Ameerpet to Gachibowli.
            </p>
          </Reveal>
          <div className={styles.painRows}>
            {PAINS.map((pain, i) => (
              <Reveal key={pain.title} delay={Math.min(i, 3) * 70}>
                <article className={styles.painRow}>
                  <span className={styles.painIcon} aria-hidden="true">
                    {ICONS[i]}
                  </span>
                  <div>
                    <h3 className={styles.painTitle}>{pain.title}</h3>
                    <p className={styles.painText}>{pain.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes: bento. First card anchors the promise. */}
      <section className={styles.outcomes} aria-labelledby="outcomes-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The result</p>
            <h2 id="outcomes-heading" className={styles.sectionTitle}>
              A website built for Hyderabad businesses
            </h2>
            <p className={styles.sectionSub}>
              Local understanding, professional build, and a site that works
              as hard as you do.
            </p>
          </Reveal>
          <div className={styles.outcomeBento}>
            {OUTCOMES.map((outcome, i) => (
              <Reveal
                key={outcome.title}
                delay={(i % 2) * 90}
                className={`${styles.outcomeCard} ${
                  i === 0 ? styles.outcomeLead : ""
                }`}
              >
                <span className={styles.outcomeIcon} aria-hidden="true">
                  {OUTCOME_ICONS[i]}
                </span>
                <h3 className={styles.outcomeTitle}>{outcome.title}</h3>
                <p className={styles.outcomeText}>{outcome.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + sticky pricing card: features and the commercial
          anchor side by side, like the locked industry-page pattern. */}
      <section className={styles.includes} aria-labelledby="includes-heading">
        <div className="container">
          <div className={styles.includesGrid}>
            <Reveal>
              <p className={styles.sectionEyebrow}>What is included</p>
              <h2 id="includes-heading" className={styles.sectionTitle}>
                Every Hyderabad website includes
              </h2>
              <ul className={styles.checklist}>
                {DELIVERABLES.map((item) => (
                  <li key={item} className={styles.checkItem}>
                    <span className={styles.checkBadge} aria-hidden="true">
                      <Icon size={14}>
                        <polyline points="20 6 9 17 4 12" strokeWidth={2.4} />
                      </Icon>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <aside className={styles.priceCard} aria-label="Pricing">
                <p className={styles.priceKicker}>Starting from</p>
                <p className={styles.priceValue}>₹15,000</p>
                <ul className={styles.pricePoints}>
                  <li>Custom design, no templates</li>
                  <li>Mobile-first build</li>
                  <li>WhatsApp enquiry buttons</li>
                  <li>Local SEO basics</li>
                </ul>
                <p className={styles.priceNote}>
                  Indicative starting price. Your final quote depends on pages
                  and features. You own the site outright.
                </p>
                <Link href="/start-a-project" className={styles.ctaPrimary}>
                  Get a proposal
                  <Icon size={17}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </Icon>
                </Link>
                <p className={styles.priceReassure}>
                  Detailed quote within 24 hours. No obligation.
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process stepper */}
      <section className={styles.process} aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionEyebrow}>The process</p>
            <h2 id="process-heading" className={styles.sectionTitle}>
              From first call to launch
            </h2>
          </Reveal>
          <ol className={styles.stepper}>
            {PROCESS.map((step, i) => (
              <li key={step.title} className={styles.stepItem}>
                <Reveal delay={i * 90} className={styles.stepWrap}>
                  <div className={styles.step}>
                    <span className={styles.stepNum} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} aria-labelledby="hyd-faq-heading">
        <div className="container">
          <Reveal className={styles.faqInner}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 id="hyd-faq-heading" className={styles.sectionTitle}>
              Common questions
            </h2>
            <div className={styles.faqList}>
              {FAQS.map((faq) => (
                <details key={faq.question} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>
                    <span>{faq.question}</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
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

      {/* Related */}
      <section className={styles.related} aria-labelledby="related-heading">
        <div className="container">
          <Reveal>
            <h2 id="related-heading" className={styles.relatedTitle}>
              Related
            </h2>
          </Reveal>
          <div className={styles.relatedGrid}>
            {RELATED.map((link, i) => (
              <Reveal key={link.path} delay={i * 90}>
                <Link href={link.path} className={styles.relatedCard}>
                  <h3 className={styles.relatedName}>{link.name}</h3>
                  <p className={styles.relatedBlurb}>{link.blurb}</p>
                  <span className={styles.relatedArrow} aria-hidden="true">
                    <Icon size={16}>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </Icon>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA band */}
      <section className={styles.ctaBand} aria-labelledby="hyd-cta-heading">
        <div className="container">
          <Reveal className={styles.ctaInner}>
            <p className={styles.ctaEyebrow}>Based in Hyderabad</p>
            <h2 id="hyd-cta-heading" className={styles.ctaTitle}>
              Let us build the website your business deserves.
            </h2>
            <p className={styles.ctaText}>
              Tell us about your business and what you need the site to do. A
              detailed, per-project quote lands within 24 hours.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/start-a-project" className={styles.ctaPrimaryLight}>
                Get your proposal
                <Icon size={17}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </Icon>
              </Link>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaGhostLight}
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <StickyMiniCta
        label="Hyderabad websites from ₹15,000 · Quote in 24h"
        buttonText="Get a proposal"
      />
      <BackToTop />
    </main>
  );
}
