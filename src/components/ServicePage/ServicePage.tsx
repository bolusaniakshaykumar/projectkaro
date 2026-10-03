"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/site-config";
import styles from "./ServicePage.module.css";

/* ------------------------------------------------------------------ */
/* Type contract (extended, backward compatible)                       */
/* ------------------------------------------------------------------ */

export interface Crumb {
  name: string;
  path: string;
}

export interface Card {
  icon: ReactNode;
  title: string;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface RelatedLink {
  name: string;
  path: string;
  blurb: string;
}

export interface Project {
  name: string;
  blurb: string;
  stack: string;
}

export interface JourneyStep {
  title: string;
  text: string;
}

export interface FloatCard {
  kind: "whatsapp" | "rating" | "booking" | "profile" | "checklist" | "call";
  title: string;
  text: string;
}

export interface MockupItem {
  title: string;
  meta?: string;
}

export type ServiceCharacter = "website" | "mvp" | "ai" | "fullstack";

export interface ServicePageContent {
  eyebrow: string;
  title: string;
  intro: string;
  heroNote?: string;
  breadcrumbs: Crumb[];
  painsHeading: string;
  painsIntro?: string;
  pains: Card[];
  outcomesHeading: string;
  outcomesIntro?: string;
  outcomes: Card[];
  projects?: Project[];
  projectsHeading?: string;
  deliverablesHeading: string;
  deliverables: string[];
  processHeading?: string;
  faqs: Faq[];
  ctaHeading: string;
  ctaText: string;
  relatedHeading?: string;
  related: RelatedLink[];

  /* Showcase fields. When mockupKind is absent the legacy layout renders. */
  titleHighlight?: string;
  character?: ServiceCharacter;
  mockupKind?: "browser" | "dashboard" | "chat" | "stack";
  mockupDomain?: string;
  mockupTitle?: string;
  mockupItems?: MockupItem[];
  floatCards?: [FloatCard, FloatCard];
  ticker?: string[];
  journeyHeading?: string;
  journeyIntro?: string;
  journey?: [JourneyStep, JourneyStep, JourneyStep];
  priceBand?: string;
  pricePoints?: string[];
  priceNote?: string;
  stickyText?: string;
}

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: CSSProperties | undefined = delay
    ? { transitionDelay: `${delay}ms` }
    : undefined;

  return (
    <div
      ref={ref}
      style={style}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function highlightTitle(title: string, highlight?: string): ReactNode {
  if (!highlight) return title;
  const idx = title.indexOf(highlight);
  if (idx < 0) return title;
  return (
    <>
      {title.slice(0, idx)}
      <span className={styles.titleAccent}>{highlight}</span>
      {title.slice(idx + highlight.length)}
    </>
  );
}

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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function CtaButtons({ light = false }: { light?: boolean }) {
  return (
    <div className={styles.heroCtas}>
      <Link
        href="/start-a-project"
        className={light ? styles.ctaPrimaryLight : styles.ctaPrimary}
      >
        Get a free quote <ArrowIcon />
      </Link>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={light ? styles.ctaSecondaryLight : styles.ctaSecondary}
      >
        Chat on WhatsApp
      </a>
    </div>
  );
}

function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.crumbNav}>
      <div className="container">
        <ol className={styles.crumbs}>
          {crumbs.map((c, i) => (
            <li key={c.path} className={styles.crumbItem}>
              {i > 0 && (
                <span aria-hidden="true" className={styles.crumbSep}>
                  /
                </span>
              )}
              {i === crumbs.length - 1 ? (
                <span aria-current="page" className={styles.crumbCurrent}>
                  {c.name}
                </span>
              ) : (
                <Link href={c.path} className={styles.crumbLink}>
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

function Divider() {
  return <div className={styles.divider} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/* Mockup visuals (per-page character)                                 */
/* ------------------------------------------------------------------ */

const FLOAT_ICONS: Record<FloatCard["kind"], ReactNode> = {
  whatsapp: (
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-2.9-.3-4.1-.9L3 21l1.9-5.4a8.5 8.5 0 1 1 16.1-4.1z" />
  ),
  rating: (
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
  ),
  booking: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <line x1="8" y1="2.5" x2="8" y2="6.5" />
      <line x1="16" y1="2.5" x2="16" y2="6.5" />
    </>
  ),
  profile: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
    </>
  ),
  checklist: <polyline points="20 6 9 17 4 12" />,
  call: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2.05z" />
  ),
};

function FloatCardView({ card }: { card: FloatCard }) {
  return (
    <div className={`${styles.floatCard} ${styles[`float${card.kind[0].toUpperCase()}${card.kind.slice(1)}`] ?? ""}`}>
      <span className={styles.floatIcon} aria-hidden="true">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {FLOAT_ICONS[card.kind]}
        </svg>
      </span>
      <span className={styles.floatText}>
        <strong>{card.title}</strong>
        <span>{card.text}</span>
      </span>
    </div>
  );
}

function MockupBody({ content }: { content: ServicePageContent }) {
  const items = content.mockupItems ?? [];

  switch (content.mockupKind) {
    case "browser":
      return (
        <div className={styles.mbBrowser}>
          <div className={styles.mbHeroBlock}>
            <span className={styles.mbKicker}>Welcome</span>
            <span className={styles.mbHeroTitle}>
              {content.mockupTitle ?? "Sample business website"}
            </span>
            <span className={styles.mbCta}>Get a free quote</span>
          </div>
          <div className={styles.mbChips}>
            {(items.length > 0
              ? items.slice(0, 4).map((i) => i.title)
              : ["Services", "About", "Reviews", "Contact"]
            ).map((chip, i) => (
              <span key={i} className={styles.mbChip}>
                {chip}
              </span>
            ))}
          </div>
          <div className={styles.mbLines} aria-hidden="true">
            <span style={{ width: "92%" }} />
            <span style={{ width: "78%" }} />
            <span style={{ width: "84%" }} />
          </div>
        </div>
      );

    case "dashboard":
      return (
        <div className={styles.dashWrap}>
          <span className={styles.dashTitle}>
            {content.mockupTitle ?? "Sample product dashboard"}
          </span>
          <div className={styles.dashGrid}>
            {(items.length > 0
              ? items
              : [{ title: "Signups" }, { title: "Users" }, { title: "Revenue" }, { title: "Errors" }]
            )
              .slice(0, 4)
              .map((item, i) => (
                <div key={i} className={styles.dashWidget}>
                  <span className={styles.dashWidgetTitle}>{item.title}</span>
                  <span className={styles.dashBars} aria-hidden="true">
                    <span style={{ width: `${66 + ((i * 13) % 30)}%` }} />
                    <span style={{ width: `${44 + ((i * 17) % 32)}%` }} />
                    <span style={{ width: `${56 + ((i * 7) % 28)}%` }} />
                  </span>
                </div>
              ))}
          </div>
        </div>
      );

    case "chat":
      return (
        <div className={styles.chatWrap}>
          <span className={styles.dashTitle}>
            {content.mockupTitle ?? "Sample AI assistant"}
          </span>
          <div className={styles.chatBubbleBot}>
            Hi! Looking for help with your business?
          </div>
          <div className={styles.chatBubbleUser}>
            Do you handle appointment reminders?
          </div>
          <div className={styles.chatBubbleBot}>
            Yes. I can confirm bookings and send WhatsApp reminders, so no-shows drop.
          </div>
        </div>
      );

    case "stack":
      return (
        <div className={styles.stackWrap}>
          <span className={styles.dashTitle}>
            {content.mockupTitle ?? "Sample app architecture"}
          </span>
          <ul className={styles.stackLayers} role="list">
            {(items.length > 0
              ? items
              : [
                  { title: "Frontend", meta: "Next.js, mobile-first UI" },
                  { title: "APIs", meta: "Node.js, auth and validation" },
                  { title: "Database", meta: "PostgreSQL, documented schema" },
                ]
            )
              .slice(0, 3)
              .map((layer, i) => (
                <li key={i} className={styles.stackLayer}>
                  <span className={styles.stackLayerName}>
                    <span className={styles.stackLayerNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    {layer.title}
                  </span>
                  {layer.meta && (
                    <span className={styles.stackLayerMeta}>{layer.meta}</span>
                  )}
                </li>
              ))}
          </ul>
        </div>
      );

    default:
      return null;
  }
}

function Mockup({ content }: { content: ServicePageContent }) {
  return (
    <div className={styles.mockupWrap}>
      <div
        className={styles.mockup}
        role="img"
        aria-label={`Sample concept: ${content.mockupTitle ?? content.title}`}
      >
        <div className={styles.chrome}>
          <span className={styles.dots} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className={styles.urlPill}>{content.mockupDomain ?? "sample concept"}</span>
        </div>
        <div className={styles.mockBody}>
          <MockupBody content={content} />
        </div>
        <span className={styles.sampleBadge}>Sample concept</span>
      </div>
      {content.floatCards?.map((card, i) => (
        <div
          key={`${card.kind}-${i}`}
          className={`${styles.floatSlot} ${i === 0 ? styles.floatSlotTop : styles.floatSlotBottom}`}
        >
          <FloatCardView card={card} />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Ticker                                                              */
/* ------------------------------------------------------------------ */

function Ticker({ items }: { items?: string[] }) {
  if (!items || items.length === 0) return null;
  const list = (hidden: boolean) => (
    <ul className={styles.tickerList} aria-hidden={hidden ? true : undefined}>
      {items.map((t, i) => (
        <li key={i} className={styles.tickerItem}>
          <span>{t}</span>
          <span className={styles.tickDot} aria-hidden="true">
            •
          </span>
        </li>
      ))}
    </ul>
  );
  return (
    <div className={styles.ticker}>
      <div className={styles.tickerTrack}>
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Showcase render                                                     */
/* ------------------------------------------------------------------ */

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Submit",
    text: "Share your requirements, brief, or just the idea. No format needed.",
  },
  {
    n: "02",
    title: "Proposal",
    text: "A detailed quote with scope and timeline, within 24 hours.",
  },
  {
    n: "03",
    title: "Build",
    text: "We develop with milestone updates you can follow.",
  },
  {
    n: "04",
    title: "Deliver",
    text: "Full handover with documentation and support included.",
  },
];

function ShowcasePage({ content }: { content: ServicePageContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isCustomQuote = content.priceBand === "Custom Quote";

  return (
    <main className={styles.page}>
      <Breadcrumbs crumbs={content.breadcrumbs} />

      {/* 1. Split hero with visual */}
      <section className={styles.hero}>
        <div className="container">
          <Reveal>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <p className={styles.eyebrow}>{content.eyebrow}</p>
                <h1 className={styles.title}>
                  {highlightTitle(content.title, content.titleHighlight)}
                </h1>
                <p className={styles.intro}>{content.intro}</p>
                <CtaButtons />
                {content.heroNote && (
                  <p className={styles.heroNote}>{content.heroNote}</p>
                )}
              </div>
              <div className={styles.heroVisual}>
                <Mockup content={content} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Ticker */}
      <Ticker items={content.ticker} />

      {/* 3. Journey timeline */}
      {content.journey && content.journeyHeading && (
        <section
          className={`${styles.section} ${styles.sectionAlt}`}
          aria-labelledby="journey-heading"
        >
          <div className="container">
            <Reveal>
              <p className={styles.sectionKicker}>How it works</p>
              <h2 id="journey-heading" className={styles.sectionTitle}>
                {content.journeyHeading}
              </h2>
              {content.journeyIntro && (
                <p className={styles.sectionIntro}>{content.journeyIntro}</p>
              )}
              <ol className={styles.timeline}>
                {content.journey.map((step, i) => (
                  <li key={i} className={styles.tStep}>
                    <span className={styles.tNode} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3 className={styles.tTitle}>{step.title}</h3>
                    <p className={styles.tText}>{step.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>
      )}

      <Divider />

      {/* 4. Problems */}
      <section className={styles.section} aria-labelledby="pains-heading">
        <div className="container">
          <div className={styles.split}>
            <div className={styles.splitHead}>
              <Reveal>
                <p className={styles.sectionKicker}>The problem</p>
                <h2 id="pains-heading" className={styles.sectionTitle}>
                  {content.painsHeading}
                </h2>
                {content.painsIntro && (
                  <p className={styles.sectionIntro}>{content.painsIntro}</p>
                )}
              </Reveal>
            </div>
            <ul className={styles.painRows}>
              {content.pains.map((p, i) => (
                <li key={i}>
                  <Reveal delay={i * 90}>
                    <article className={styles.painRow}>
                      <span className={styles.painNum} aria-hidden="true">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className={styles.painTitle}>{p.title}</h3>
                        <p className={styles.painText}>{p.text}</p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Divider />

      {/* 5. Outcomes bento */}
      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        aria-labelledby="outcomes-heading"
      >
        <div className="container">
          <Reveal>
            <p className={styles.sectionKicker}>What changes</p>
            <h2 id="outcomes-heading" className={styles.sectionTitle}>
              {content.outcomesHeading}
            </h2>
            {content.outcomesIntro && (
              <p className={styles.sectionIntro}>{content.outcomesIntro}</p>
            )}
          </Reveal>
          <div className={styles.bento}>
            {content.outcomes.map((o, i) => (
              <Reveal
                key={i}
                delay={i * 90}
                className={i === 0 ? styles.bentoLead : ""}
              >
                <article
                  className={`${styles.bentoCard} ${i === 0 ? styles.bentoCardLead : ""}`}
                >
                  <span className={styles.bentoIcon} aria-hidden="true">
                    {o.icon}
                  </span>
                  <h3 className={styles.bentoTitle}>{o.title}</h3>
                  <p className={styles.bentoText}>{o.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* 6. Deliverables + sticky pricing card */}
      <section className={styles.section} aria-labelledby="deliverables-heading">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <Reveal>
                <p className={styles.sectionKicker}>Included</p>
                <h2 id="deliverables-heading" className={styles.sectionTitle}>
                  {content.deliverablesHeading}
                </h2>
              </Reveal>
              <ul className={styles.checkList}>
                {content.deliverables.map((d, i) => (
                  <li key={i}>
                    <Reveal delay={Math.min(i, 5) * 60}>
                      <span className={styles.checkItem}>
                        <span className={styles.checkIcon} aria-hidden="true">
                          <CheckIcon />
                        </span>
                        <span>{d}</span>
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
            {content.priceBand && (
              <Reveal delay={120} className={styles.priceWrap}>
                <aside className={styles.priceCard} aria-label="Pricing">
                  <p className={styles.priceKicker}>
                    {isCustomQuote ? "Priced per project" : "Starting from"}
                  </p>
                  <p className={styles.priceValue}>{content.priceBand}</p>
                  {content.pricePoints && content.pricePoints.length > 0 && (
                    <ul className={styles.pricePoints}>
                      {content.pricePoints.map((pt, i) => (
                        <li key={i}>
                          <span className={styles.priceTick} aria-hidden="true">
                            <CheckIcon />
                          </span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                  {content.priceNote && (
                    <p className={styles.priceNote}>{content.priceNote}</p>
                  )}
                  <Link href="/start-a-project" className={styles.ctaPrimary}>
                    Get a proposal <ArrowIcon />
                  </Link>
                  <p className={styles.priceReassure}>
                    Detailed quote within 24 hours. No obligation.
                  </p>
                </aside>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* 7. Process stepper */}
      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        aria-labelledby="process-heading"
      >
        <div className="container">
          <Reveal>
            <p className={styles.sectionKicker}>Process</p>
            <h2 id="process-heading" className={styles.sectionTitle}>
              {content.processHeading || "From first message to launch"}
            </h2>
          </Reveal>
          <ol className={styles.processSteps}>
            {PROCESS_STEPS.map((step, i) => (
              <li key={step.n}>
                <Reveal delay={i * 90}>
                  <div className={styles.processStep}>
                    <span className={styles.processNum} aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3 className={styles.processTitle}>{step.title}</h3>
                    <p className={styles.processText}>{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Divider />

      {/* 8. FAQ */}
      <section className={styles.section} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.faqCenter}>
            <Reveal>
              <p className={styles.eyebrow}>FAQ</p>
              <h2 id="faq-heading" className={styles.sectionTitle}>
                Frequently asked questions
              </h2>
            </Reveal>
            <ul className={styles.faqList}>
              {content.faqs.map((f, i) => (
                <li
                  key={i}
                  className={styles.faqItem}
                  data-open={openFaq === i ? "true" : "false"}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`sp-faq-a-${i}`}
                    id={`sp-faq-q-${i}`}
                  >
                    <span>{f.question}</span>
                    <span className={styles.faqPlus} aria-hidden="true" />
                  </button>
                  <div
                    id={`sp-faq-a-${i}`}
                    role="region"
                    aria-labelledby={`sp-faq-q-${i}`}
                    className={styles.faqAnswerWrap}
                  >
                    <div className={styles.faqAnswer}>
                      <p>{f.answer}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 9. Dark CTA band */}
      <section className={styles.ctaBand} aria-labelledby="cta-heading">
        <div className="container">
          <Reveal>
            <h2 id="cta-heading" className={styles.ctaTitle}>
              {content.ctaHeading}
            </h2>
            <p className={styles.ctaText}>{content.ctaText}</p>
            <CtaButtons light />
          </Reveal>
        </div>
      </section>

      {/* 10. Related */}
      {content.related.length > 0 && (
        <section className={styles.section} aria-labelledby="related-heading">
          <div className="container">
            <Reveal>
              <h2 id="related-heading" className={styles.sectionTitle}>
                {content.relatedHeading || "Related services"}
              </h2>
              <ul className={styles.relatedGrid}>
                {content.related.map((r) => (
                  <li key={r.path}>
                    <Link href={r.path} className={styles.relatedCard}>
                      <span className={styles.relatedName}>{r.name}</span>
                      <span className={styles.relatedBlurb}>{r.blurb}</span>
                      <span className={styles.relatedArrow} aria-hidden="true">
                        <ArrowIcon />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* 11. Sticky mini-CTA + back to top */}
      <div
        className={styles.stickyBar}
        data-show={showBar ? "true" : "false"}
        aria-hidden={!showBar}
      >
        <span className={styles.stickyText}>
          {content.stickyText ?? "Get your free proposal"}
        </span>
        <Link
          href="/start-a-project"
          className={styles.stickyBtn}
          tabIndex={showBar ? 0 : -1}
        >
          Get a quote
        </Link>
      </div>
      <button
        type="button"
        className={styles.backTop}
        data-show={showBar ? "true" : "false"}
        aria-label="Back to top"
        tabIndex={showBar ? 0 : -1}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
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
          focusable="false"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* Legacy render (pages without showcase fields keep working)          */
/* ------------------------------------------------------------------ */

function LegacyServicePage({ content }: { content: ServicePageContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={styles.page}>
      <Breadcrumbs crumbs={content.breadcrumbs} />

      <section className={styles.legacyHero}>
        <div className="container">
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.intro}>{content.intro}</p>
          <CtaButtons />
          {content.heroNote && (
            <p className={styles.heroNote}>{content.heroNote}</p>
          )}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="legacy-pains">
        <div className="container">
          <h2 id="legacy-pains" className={styles.sectionTitle}>
            {content.painsHeading}
          </h2>
          {content.painsIntro && (
            <p className={styles.sectionIntro}>{content.painsIntro}</p>
          )}
          <ul className={styles.legacyPains}>
            {content.pains.map((p, i) => (
              <li key={i} className={styles.legacyPainRow}>
                <span className={styles.legacyPainIcon} aria-hidden="true">
                  {p.icon}
                </span>
                <div>
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                  <p className={styles.cardText}>{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        aria-labelledby="legacy-outcomes"
      >
        <div className="container">
          <h2 id="legacy-outcomes" className={styles.sectionTitle}>
            {content.outcomesHeading}
          </h2>
          {content.outcomesIntro && (
            <p className={styles.sectionIntro}>{content.outcomesIntro}</p>
          )}
          <ul className={styles.legacyOutcomeGrid}>
            {content.outcomes.map((o, i) => (
              <li key={i} className={styles.legacyOutcomeCard}>
                <span className={styles.legacyOutcomeNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className={styles.cardTitle}>{o.title}</h3>
                <p className={styles.cardText}>{o.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="legacy-deliver">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <h2 id="legacy-deliver" className={styles.sectionTitle}>
                {content.deliverablesHeading}
              </h2>
              <ul className={styles.legacyCheckList}>
                {content.deliverables.map((d, i) => (
                  <li key={i} className={styles.legacyCheckItem}>
                    <span className={styles.checkIcon} aria-hidden="true">
                      <CheckIcon />
                    </span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.legacyProcessCard}>
              <h3 className={styles.legacyProcessTitle}>
                {content.processHeading || "How we work"}
              </h3>
              <ol className={styles.legacyStepper}>
                {PROCESS_STEPS.map((s) => (
                  <li key={s.n} className={styles.legacyStep}>
                    <span className={styles.legacyStepNum} aria-hidden="true">
                      {s.n}
                    </span>
                    <div>
                      <p className={styles.legacyStepTitle}>{s.title}</p>
                      <p className={styles.legacyStepText}>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link href="/how-it-works" className={styles.legacyProcessLink}>
                See the full process <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.sectionAlt}`}
        aria-labelledby="legacy-faq"
      >
        <div className="container">
          <div className={styles.faqCenter}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2 id="legacy-faq" className={styles.sectionTitle}>
              Frequently asked questions
            </h2>
            <ul className={styles.faqList}>
              {content.faqs.map((f, i) => (
                <li
                  key={i}
                  className={styles.faqItem}
                  data-open={openFaq === i ? "true" : "false"}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`sp-legacy-faq-a-${i}`}
                    id={`sp-legacy-faq-q-${i}`}
                  >
                    <span>{f.question}</span>
                    <span className={styles.faqPlus} aria-hidden="true" />
                  </button>
                  <div
                    id={`sp-legacy-faq-a-${i}`}
                    role="region"
                    aria-labelledby={`sp-legacy-faq-q-${i}`}
                    className={styles.faqAnswerWrap}
                  >
                    <div className={styles.faqAnswer}>
                      <p>{f.answer}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.ctaBand} aria-labelledby="legacy-cta">
        <div className="container">
          <h2 id="legacy-cta" className={styles.ctaTitle}>
            {content.ctaHeading}
          </h2>
          <p className={styles.ctaText}>{content.ctaText}</p>
          <CtaButtons light />
        </div>
      </section>

      {content.related.length > 0 && (
        <section className={styles.section} aria-labelledby="legacy-related">
          <div className="container">
            <h2 id="legacy-related" className={styles.sectionTitle}>
              {content.relatedHeading || "Related services"}
            </h2>
            <ul className={styles.relatedGrid}>
              {content.related.map((r) => (
                <li key={r.path}>
                  <Link href={r.path} className={styles.relatedCard}>
                    <span className={styles.relatedName}>{r.name}</span>
                    <span className={styles.relatedBlurb}>{r.blurb}</span>
                    <span className={styles.relatedArrow} aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

/* ------------------------------------------------------------------ */

export default function ServicePage({ content }: { content: ServicePageContent }) {
  if (content.mockupKind) return <ShowcasePage content={content} />;
  return <LegacyServicePage content={content} />;
}
