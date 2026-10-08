import dynamic from "next/dynamic";
import Link from "next/link";
import CTA from "@/components/CTA/CTA";
import JsonLd from "@/components/JsonLd";
import { FAQSkeleton } from "@/components/Skeleton/Skeleton";

const FAQ = dynamic(() => import("@/components/FAQ/FAQ"), {
  loading: () => <FAQSkeleton />,
});
import { SITE_CONFIG } from "@/lib/constants";
import { FAQ_ITEMS } from "@/lib/faq-data";
import {
  createPageMetadata,
  faqPageSchema,
  speakableSchema,
  webPageSchema,
} from "@/lib/seo";
import { WHATSAPP_LINK } from "@/lib/site-config";
import Reveal from "./Reveal";
import HeroVisual from "./HeroVisual";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "ProjectKaro | Websites, AI Solutions & Student Projects",
  description:
    "ProjectKaro builds business websites, AI solutions, full-stack applications and B.Tech major projects in Hyderabad, with documentation and viva support.",
  path: "/",
});

/* ── Who we build for: two tracks ── */
const TRACKS = [
  {
    title: "For businesses",
    desc: "Websites that bring enquiries, apps that run your operations, AI that actually ships.",
    links: [
      { name: "Website development", href: "/services/website-development" },
      { name: "Web applications", href: "/services/full-stack-development" },
      { name: "AI solutions", href: "/services/ai-solutions" },
      { name: "Startup MVPs", href: "/services/startup-mvp-development" },
    ],
    cta: { text: "Websites for businesses", href: "/websites-for-businesses" },
  },
  {
    title: "For students & researchers",
    desc: "Final-year projects with working code, documentation, and viva support, planned backwards from your deadline.",
    links: [
      { name: "Major projects", href: "/academic-projects/major-projects" },
      { name: "Minor projects", href: "/academic-projects/minor-projects" },
      { name: "Research & technical support", href: "/academic-projects" },
    ],
    cta: { text: "Academic projects", href: "/academic-projects" },
  },
];

const STAKES = [
  {
    title: "Customers never find you",
    desc: "People search on Google first. If your business is not there, a competitor with a better website is.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /><line x1="8" y1="8" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    title: "Visitors leave in seconds",
    desc: "A slow or dated site tells people the business behind it is not serious. They go back and click someone else.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
  },
  {
    title: "You answer the same questions daily",
    desc: "Timings, prices, location, services. A good website answers them for you, around the clock.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><line x1="9" y1="9" x2="15" y2="9" /><line x1="9" y1="12.5" x2="13" y2="12.5" />
      </svg>
    ),
  },
  {
    title: "Students lose marks in the viva",
    desc: "Rushed code and missing documentation fall apart the moment the examiner asks how it works.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

/* ── Selected work: live sample sites. Fictional businesses, real craft. ── */
const WORK = [
  {
    name: "Restaurant website",
    detail: "Menu, reservations, and location in one fast page.",
    href: "/demos/restaurant",
    accent: "amber",
  },
  {
    name: "Salon website",
    detail: "Services, gallery, and booking that feels premium.",
    href: "/demos/salon",
    accent: "rose",
  },
  {
    name: "Dental clinic website",
    detail: "Treatments, trust signals, and appointment flow.",
    href: "/demos/dental-clinic",
    accent: "teal",
  },
] as const;

const CRAFT = [
  {
    title: "Designed like it matters",
    desc: "Layout, type, and color chosen on purpose. Your site should look like the business you want to become.",
  },
  {
    title: "Built to production standard",
    desc: "Clean code, fast loads, mobile-first. No shortcuts that break the week after launch.",
  },
  {
    title: "Delivered with proof",
    desc: "Documentation, handover, and support included. You own everything we make, and you can run it without us.",
  },
];

const STEP_ICONS = {
  submit: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  ),
  proposal: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  ),
  build: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  deliver: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><polyline points="8.5 12.5 11 15 15.5 9.5" />
    </svg>
  ),
};

const PROCESS = [
  { key: "submit", title: "Submit", desc: "Share your requirements, abstract, or brief." },
  { key: "proposal", title: "Proposal", desc: "A detailed quote and timeline within 24 hours, priced for exactly what you need." },
  { key: "build", title: "Build", desc: "We develop with milestone updates you can follow." },
  { key: "deliver", title: "Deliver", desc: "Full handover with documentation and support." },
] as const;

/* ── Pricing teaser: honest starting points, dynamic pricing ── */
const PRICE_BANDS = [
  {
    name: "Business websites",
    price: "₹15,000",
    note: "Starter sites that bring enquiries",
  },
  {
    name: "Academic projects",
    price: "₹5,000",
    note: "Minor projects with documentation",
  },
  {
    name: "AI solutions",
    price: "₹6,000",
    note: "Practical AI features that ship",
  },
];

const TICKER_ITEMS = [
  "Websites from ₹15,000",
  "Quote within 24 hours",
  "100+ projects delivered",
  "20+ team members",
  "MSME registered",
  "Documentation with every build",
];

const CHECK_ICON = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ARROW_ICON = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

function WhatsAppGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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

      {/* ══ 01 · HERO ═══════════════════════════════════ */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>Web design studio · Hyderabad, India</p>
              <h1 id="hero-heading" className={styles.heroTitle}>
                Website design company in Hyderabad that{" "}
                <span className={styles.heroAccent}>wins customers.</span>
              </h1>
              <p id="hero-summary" className={styles.heroValue}>
                ProjectKaro designs and builds websites, apps, and AI solutions
                for businesses, and delivers academic projects for students.
                Scoped in writing, quoted within 24 hours, delivered on time.
              </p>
              <div className={styles.heroCtas}>
                <Link href="/start-a-project" className={styles.ctaPrimary}>
                  Get a Free Quote
                  <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
                </Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsApp}>
                  <WhatsAppGlyph />
                  Chat on WhatsApp
                </a>
              </div>
              <ul className={styles.heroTrust} aria-label="Why trust ProjectKaro">
                <li>{CHECK_ICON}<span><strong>100+</strong> projects delivered</span></li>
                <li>{CHECK_ICON}<span><strong>20+</strong> team members</span></li>
                <li>{CHECK_ICON}<span>Registered <strong>MSME</strong> (Udyam)</span></li>
                <li>{CHECK_ICON}<span>Quote <strong>within 24 hours</strong></span></li>
              </ul>
            </div>
            <div className={styles.heroVisual}>
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 02 · TICKER ═════════════════════════════════ */}
      <div className={styles.ticker} aria-hidden="true">
        <div className={styles.tickerTrack}>
          {TICKER_ITEMS.map((item) => (
            <span key={item} className={styles.tickerItem}>{item}</span>
          ))}
          {TICKER_ITEMS.map((item) => (
            <span key={`dup-${item}`} className={styles.tickerItem}>{item}</span>
          ))}
        </div>
      </div>

      {/* ══ 03 · WHO WE BUILD FOR ═══════════════════════ */}
      <section className={styles.tracks} aria-labelledby="tracks-h">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Who we build for</p>
            <h2 id="tracks-h" className={styles.sectionTitle}>Two tracks, one standard.</h2>
            <p className={styles.sectionIntro}>
              Businesses come to us for growth. Students come to us for marks.
              Both leave with work that holds up when it matters.
            </p>
          </Reveal>
          <div className={styles.trackGrid}>
            {TRACKS.map((track, i) => (
              <Reveal key={track.title} delay={i * 90} className={styles.trackReveal}>
                <article className={styles.trackCard}>
                  <h3 className={styles.trackTitle}>{track.title}</h3>
                  <p className={styles.trackDesc}>{track.desc}</p>
                  <ul className={styles.trackLinks}>
                    {track.links.map((l) => (
                      <li key={l.name}>
                        <Link href={l.href} className={styles.trackLink}>
                          {l.name}
                          <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link href={track.cta.href} className={styles.trackCta}>
                    {track.cta.text}
                    <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 04 · STAKES (dark ledger) ═══════════════════ */}
      <section className={styles.stakes} aria-labelledby="stakes-h">
        <div className="container">
          <div className={styles.stakesInner}>
            <Reveal>
              <p className={styles.stakesEyebrow}>The stakes</p>
              <h2 id="stakes-h" className={styles.stakesTitle}>
                A weak website quietly costs you customers.
              </h2>
              <p className={styles.stakesIntro}>
                Your website is often the first thing a customer sees. When it
                is slow, dated, or missing entirely, this is what follows.
                Every one of these is fixable, and fixing them is what we do best.
              </p>
            </Reveal>
            <ul className={styles.stakesList}>
              {STAKES.map((s, i) => (
                <li key={s.title} className={styles.stakeRow}>
                  <Reveal delay={i * 80}>
                    <span className={styles.stakeSignal} aria-hidden="true">{s.icon}</span>
                    <div className={styles.stakeBody}>
                      <h3 className={styles.stakeTitle}>{s.title}</h3>
                      <p className={styles.stakeDesc}>{s.desc}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal>
              <Link href="/start-a-project" className={styles.stakesCta}>
                Start fixing it: get my detailed quote
                <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ 05 · SELECTED WORK ══════════════════════════ */}
      <section className={styles.work} aria-labelledby="work-h">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Selected work</p>
            <h2 id="work-h" className={styles.sectionTitle}>
              Don&apos;t take our word for it. Explore the work.
            </h2>
            <p className={styles.sectionIntro}>
              Live sample websites we designed and built. Fictional businesses,
              real craft. Click through them like a customer would.
            </p>
          </Reveal>
          <div className={styles.workGrid}>
            {WORK.map((w, i) => (
              <Reveal key={w.name} delay={i * 90} className={styles.workReveal}>
                <Link href={w.href} className={styles.workCard} aria-label={`${w.name} sample: ${w.detail}`}>
                  <span className={`${styles.workMock} ${styles[`workMock-${w.accent}`]}`} aria-hidden="true">
                    <span className={styles.workChrome}>
                      <i /><i /><i />
                    </span>
                    <span className={styles.workHero}>
                      <span className={styles.workHeroLine} />
                      <span className={styles.workHeroLineShort} />
                      <span className={styles.workHeroBtn} />
                    </span>
                    <span className={styles.workCols}>
                      <span /><span /><span />
                    </span>
                  </span>
                  <span className={styles.workMeta}>
                    <span className={styles.workTag}>Sample concept</span>
                    <span className={styles.workName}>{w.name}</span>
                    <span className={styles.workDetail}>{w.detail}</span>
                    <span className={styles.workLink}>
                      Explore demo
                      <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className={styles.workMore}>
              Building for a specific trade? See{" "}
              <Link href="/websites-for-businesses" className={styles.textLink}>
                websites for your industry
                <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
              </Link>
              , from dental clinics to real estate. Or browse all{" "}
              <Link href="/demos" className={styles.textLink}>
                10 demo websites
                <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ 06 · CRAFT ══════════════════════════════════ */}
      <section className={styles.craft} aria-labelledby="craft-h">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>How we think</p>
            <h2 id="craft-h" className={styles.sectionTitle}>
              Craft is a process, not a coat of paint.
            </h2>
          </Reveal>
          <div className={styles.craftGrid}>
            {CRAFT.map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className={styles.craftReveal}>
                <article className={styles.craftCard}>
                  <span className={styles.craftNum} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.craftTitle}>{c.title}</h3>
                  <p className={styles.craftDesc}>{c.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 07 · PROCESS ════════════════════════════════ */}
      <section className={styles.process} aria-labelledby="process-h">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Process</p>
            <h2 id="process-h" className={styles.sectionTitle}>From first message to final delivery.</h2>
            <p className={styles.sectionIntro}>
              Four steps, zero guesswork. You always know what happens next
              and what it costs.
            </p>
          </Reveal>
          <ol className={styles.processTrack}>
            {PROCESS.map((step, i) => (
              <li key={step.key} className={styles.processStep}>
                <Reveal delay={i * 90}>
                  <span className={styles.processDot} aria-hidden="true">
                    {STEP_ICONS[step.key]}
                  </span>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal>
            <Link href="/how-it-works" className={styles.textLink}>
              See the full process
              <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══ 08 · PRICING TEASER ═════════════════════════ */}
      <section className={styles.pricing} aria-labelledby="pricing-h">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Pricing</p>
            <h2 id="pricing-h" className={styles.sectionTitle}>
              Honest starting points. Priced per project.
            </h2>
            <p className={styles.sectionIntro}>
              Every project is quoted individually within 24 hours. What you
              approve is what you pay. Nothing fixed, nothing hidden.
            </p>
          </Reveal>
          <div className={styles.priceGrid}>
            {PRICE_BANDS.map((band, i) => (
              <Reveal key={band.name} delay={i * 90} className={styles.priceReveal}>
                <article className={styles.priceCard}>
                  <h3 className={styles.priceName}>{band.name}</h3>
                  <p className={styles.priceValue}>
                    <span className={styles.priceFrom}>Starting from</span>
                    <span className={styles.priceAmount}>{band.price}</span>
                  </p>
                  <p className={styles.priceNote}>{band.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link href="/pricing" className={styles.textLink}>
              See detailed pricing
              <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══ DIRECT ANSWER (AEO / GEO) ══════════════════ */}
      <section className={styles.definition} aria-labelledby="definition-heading">
        <div className="container">
          <Reveal>
            <div className={styles.definitionInner}>
              <h2 id="definition-heading" className={styles.definitionTitle}>
                What is ProjectKaro?
              </h2>
              <p id="site-definition" className={styles.definitionText}>
                ProjectKaro is a Hyderabad-based web development and student project studio in India. We help businesses, startups, freelancers, and students with websites, full-stack applications, major and minor academic projects, and research work, with a clear scope, a detailed quote within 24 hours, and on-time delivery.
              </p>
              <div className={styles.definitionLinks}>
                <Link href="/about">About us</Link>
                <Link href="/how-it-works">How it works</Link>
                <Link href="/services">All services</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
