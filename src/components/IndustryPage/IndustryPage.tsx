"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/site-config";
import styles from "./IndustryPage.module.css";

/* ------------------------------------------------------------------ */
/* Exact TypeScript contract                                           */
/* ------------------------------------------------------------------ */

export type IndustryVariant =
  | "baseline"
  | "trust"
  | "menu"
  | "showcase"
  | "listings"
  | "courses"
  | "editorial"
  | "checklist"
  | "compact"
  | "dashboard";

export interface Crumb {
  name: string;
  path: string;
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

export interface Problem {
  title: string;
  text: string;
}

export interface Solution {
  icon: string;
  title: string;
  text: string;
}

export interface StructureNode {
  page: string;
  children?: string[];
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
  tag?: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export interface IndustryPageContent {
  variant: IndustryVariant;
  eyebrow: string;
  title: string;
  titleHighlight: string;
  intro: string;
  heroNote?: string;
  breadcrumbs: Crumb[];
  ratingLabel?: string;
  mockupDomain: string;
  mockupKind: "browser" | "menu" | "listings" | "courses" | "dashboard" | "checklist" | "none";
  mockupTitle?: string;
  mockupItems?: MockupItem[];
  mockupCta?: string;
  floatCards?: [FloatCard, FloatCard];
  ticker: string[];
  journeyHeading: string;
  journeyIntro?: string;
  journey: [JourneyStep, JourneyStep, JourneyStep];
  problemHeading: string;
  problemIntro?: string;
  problems: Problem[];
  problemStyle?: "rows" | "quotes";
  solutionHeading: string;
  solutionIntro?: string;
  solutions: [Solution, Solution, Solution];
  solutionLayout?: "bento" | "steps";
  structureHeading: string;
  structureIntro?: string;
  structure: StructureNode[];
  structureNote?: string;
  hideStructure?: boolean;
  featuresHeading: string;
  featuresIntro?: string;
  features: Feature[];
  featureStyle?: "grid" | "checklist";
  priceBand: string;
  pricePoints?: string[];
  priceNote?: string;
  priceFirst?: boolean;
  processHeading?: string;
  processSteps?: ProcessStep[];
  beforeAfter?: {
    heading: string;
    intro?: string;
    beforeLabel: string;
    afterLabel: string;
    caption: string;
  };
  mvpScope?: { heading: string; intro?: string; items: string[] };
  faqs: Faq[];
  ctaHeading: string;
  ctaText: string;
  relatedHeading?: string;
  related: RelatedLink[];
}

/* ------------------------------------------------------------------ */
/* Icons: inline SVG, 24 viewBox, stroke currentColor, 1.8 width       */
/* ------------------------------------------------------------------ */

const ICON_PATHS: Record<string, ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2" />
      <line x1="3" y1="9.5" x2="21" y2="9.5" />
      <line x1="8" y1="2.5" x2="8" y2="6.5" />
      <line x1="16" y1="2.5" x2="16" y2="6.5" />
    </>
  ),
  chat: <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-2.9-.3-4.1-.9L3 21l1.9-5.4a8.5 8.5 0 1 1 16.1-4.1z" />,
  star: <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7a2 2 0 0 1 1.7 2.05z" />
  ),
  menu: (
    <>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </>
  ),
  home: (
    <>
      <path d="M3 9.5 12 3l9 6.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <path d="M9 22v-8h6v8" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z" />
      <path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  chart: (
    <>
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </>
  ),
  shield: <path d="M12 22s8-3.6 8-10V5l-8-3-8 3v7c0 6.4 8 10 8 10z" />,
  check: <polyline points="20 6 9 17 4 12" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <polyline points="12 7 12 12 15.5 13.5" />
    </>
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  sparkle: <path d="M12 3l1.9 5.6 5.6 1.4-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z" />,
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </>
  ),
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21.2l7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />,
  zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
  award: (
    <>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
    </>
  ),
  camera: (
    <>
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </>
  ),
};

function Icon({
  name,
  size = 20,
  filled = false,
  strokeWidth = 1.8,
}: {
  name?: string;
  size?: number;
  filled?: boolean;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {ICON_PATHS[name ?? ""] ?? ICON_PATHS.check}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Scroll reveal wrapper                                               */
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

  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

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
/* Hero helpers                                                        */
/* ------------------------------------------------------------------ */

function highlightTitle(title: string, highlight: string): ReactNode {
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

function CtaButtons({ light = false }: { light?: boolean }) {
  return (
    <div className={styles.heroCtas}>
      <Link href="/start-a-project" className={light ? styles.ctaPrimaryLight : styles.ctaPrimary}>
        Get a proposal <Icon name="chat" size={17} />
      </Link>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={light ? styles.ctaSecondaryLight : styles.ctaSecondary}
      >
        <Icon name="phone" size={17} /> Chat on WhatsApp
      </a>
    </div>
  );
}

function TrustRow({ ratingLabel }: { ratingLabel?: string }) {
  return (
    <div className={styles.trustRow}>
      <span className={styles.avatars} aria-hidden="true">
        <span className={`${styles.avatar} ${styles.avatar1}`}>A</span>
        <span className={`${styles.avatar} ${styles.avatar2}`}>R</span>
        <span className={`${styles.avatar} ${styles.avatar3}`}>S</span>
      </span>
      <span className={styles.trustItem}>
        <span className={styles.trustCheck}>
          <Icon name="check" size={13} strokeWidth={2.4} />
        </span>
        Proposal within 24 hours
      </span>
      {ratingLabel && (
        <span className={styles.trustItem}>
          <span className={styles.stars} aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <Icon key={i} name="star" size={14} filled />
            ))}
          </span>
          {ratingLabel}
        </span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Browser mockup                                                      */
/* ------------------------------------------------------------------ */

const FLOAT_ICON: Record<FloatCard["kind"], string> = {
  whatsapp: "chat",
  rating: "star",
  booking: "calendar",
  profile: "users",
  checklist: "check",
  call: "phone",
};

function floatClass(kind: FloatCard["kind"]): string {
  switch (kind) {
    case "whatsapp":
      return styles.floatWhatsapp;
    case "rating":
      return styles.floatRating;
    case "booking":
      return styles.floatBooking;
    case "profile":
      return styles.floatProfile;
    case "checklist":
      return styles.floatChecklist;
    case "call":
      return styles.floatCall;
  }
}

function FloatCardView({ card }: { card: FloatCard }) {
  return (
    <div className={`${styles.floatCard} ${floatClass(card.kind)}`}>
      <span className={styles.floatIcon} aria-hidden="true">
        <Icon name={FLOAT_ICON[card.kind]} size={18} />
      </span>
      <span className={styles.floatText}>
        <strong>{card.title}</strong>
        <span>{card.text}</span>
      </span>
    </div>
  );
}

function MockupBody({ content }: { content: IndustryPageContent }) {
  const items = content.mockupItems ?? [];

  switch (content.mockupKind) {
    case "browser":
      return (
        <div className={styles.mbBrowser}>
          <div className={styles.mbHeroBlock}>
            <span className={styles.mbKicker}>Welcome</span>
            <span className={styles.mbHeroTitle}>{content.mockupTitle ?? "Sample homepage"}</span>
            <span className={styles.mbCta}>{content.mockupCta ?? "Get a proposal"}</span>
          </div>
          <div className={styles.mbChips}>
            {(items.length > 0 ? items.slice(0, 4).map((i) => i.title) : ["Services", "About", "Reviews", "Contact"]).map(
              (chip, i) => (
                <span key={i} className={styles.mbChip}>
                  {chip}
                </span>
              )
            )}
          </div>
          <div className={styles.mbLines} aria-hidden="true">
            <span style={{ width: "92%" }} />
            <span style={{ width: "78%" }} />
            <span style={{ width: "84%" }} />
          </div>
        </div>
      );

    case "menu":
      return (
        <ul className={styles.mockRows} role="list">
          {items.map((item, i) => (
            <li key={i} className={styles.mockRow}>
              <span className={styles.mockRowMain}>
                <strong>{item.title}</strong>
                {item.meta && <span className={styles.mockRowMeta}>{item.meta}</span>}
              </span>
              {item.tag && <span className={styles.mockTag}>{item.tag}</span>}
            </li>
          ))}
        </ul>
      );

    case "listings":
      return (
        <div className={styles.mockCards}>
          {items.map((item, i) => (
            <div key={i} className={styles.mockCard}>
              <span className={styles.mockCardImg} aria-hidden="true">
                <Icon name="home" size={22} />
              </span>
              {item.tag && <span className={styles.mockTag}>{item.tag}</span>}
              <strong>{item.title}</strong>
              {item.meta && <span className={styles.mockRowMeta}>{item.meta}</span>}
            </div>
          ))}
        </div>
      );

    case "courses":
      return (
        <div className={styles.mockCards}>
          {items.map((item, i) => (
            <div key={i} className={styles.mockCard}>
              <span className={styles.mockCardIcon} aria-hidden="true">
                <Icon name="book" size={20} />
              </span>
              {item.tag && <span className={styles.mockTag}>{item.tag}</span>}
              <strong>{item.title}</strong>
              {item.meta && <span className={styles.mockRowMeta}>{item.meta}</span>}
            </div>
          ))}
        </div>
      );

    case "dashboard":
      return (
        <div className={styles.dashWrap}>
          <span className={styles.dashTitle}>{content.mockupTitle ?? "Sample dashboard"}</span>
          <div className={styles.dashGrid}>
            {(items.length > 0
              ? items
              : [{ title: "Bookings" }, { title: "Enquiries" }, { title: "Visitors" }, { title: "Leads" }]
            )
              .slice(0, 4)
              .map((item, i) => (
                <div key={i} className={styles.dashWidget}>
                  <span className={styles.dashWidgetTitle}>{item.title}</span>
                  <span className={styles.dashBars} aria-hidden="true">
                    <span style={{ width: `${68 + ((i * 13) % 28)}%` }} />
                    <span style={{ width: `${46 + ((i * 17) % 30)}%` }} />
                    <span style={{ width: `${58 + ((i * 7) % 26)}%` }} />
                  </span>
                </div>
              ))}
          </div>
        </div>
      );

    case "checklist":
      return (
        <ul className={styles.mockCheckRows} role="list">
          {items.map((item, i) => (
            <li key={i} className={styles.mockCheckRow}>
              <span className={styles.mockCheckIcon} aria-hidden="true">
                <Icon name="check" size={14} strokeWidth={2.4} />
              </span>
              <span>
                <strong>{item.title}</strong>
                {item.meta && <span className={styles.mockRowMeta}>{item.meta}</span>}
              </span>
            </li>
          ))}
        </ul>
      );

    case "none":
    default: {
      const initial = (content.mockupTitle ?? content.titleHighlight ?? content.title ?? "P").trim().charAt(0) || "P";
      return (
        <div className={styles.abstractPanel}>
          <span className={styles.abstractInitial} aria-hidden="true">
            {initial}
          </span>
          <span className={styles.abstractLines} aria-hidden="true">
            <span style={{ width: "70%" }} />
            <span style={{ width: "52%" }} />
            <span style={{ width: "64%" }} />
          </span>
        </div>
      );
    }
  }
}

function Mockup({ content }: { content: IndustryPageContent }) {
  return (
    <div className={styles.mockupWrap}>
      <div className={styles.mockup} role="img" aria-label={`Sample website concept for ${content.mockupDomain}`}>
        <div className={styles.chrome}>
          <span className={styles.dots} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className={styles.urlPill}>
            <Icon name="globe" size={12} />
            {content.mockupDomain}
          </span>
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

function Ticker({ items }: { items: string[] }) {
  if (items.length === 0) return null;
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
/* Before / after slider                                               */
/* ------------------------------------------------------------------ */

function BeforeAfter({
  data,
}: {
  data: NonNullable<IndustryPageContent["beforeAfter"]>;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div className={styles.baBlock}>
      <div
        className={styles.baWrap}
        role="group"
        aria-label={`${data.beforeLabel} versus ${data.afterLabel}, sample comparison`}
      >
        <div className={styles.baBefore}>
          <span className={`${styles.baPanelLabel} ${styles.baLabelLeft}`}>{data.beforeLabel}</span>
          <div className={styles.baBeforeInner} aria-hidden="true">
            <span className={styles.baOldNav} />
            <span className={styles.baOldHero} />
            <span className={styles.baOldRow} />
            <span className={styles.baOldRow} />
          </div>
        </div>
        <div className={styles.baAfter} style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          <div className={styles.baAfterInner} aria-hidden="true">
            <span className={styles.baNewNav} />
            <span className={styles.baNewHero} />
            <span className={styles.baNewCards}>
              <span />
              <span />
              <span />
            </span>
          </div>
        </div>
        <span className={`${styles.baPanelLabel} ${styles.baLabelRight}`}>{data.afterLabel}</span>
        <div className={styles.baDivider} style={{ left: `${pos}%` }} aria-hidden="true">
          <span className={styles.baHandle}>
            <Icon name="menu" size={14} />
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className={styles.baRange}
          aria-label="Drag to compare before and after"
        />
      </div>
      <p className={styles.baCaption}>{data.caption}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Defaults                                                            */
/* ------------------------------------------------------------------ */

const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
  { title: "Share requirements", text: "Tell us what you need. A short call or message is enough." },
  { title: "Proposal in 24 hours", text: "A clear plan, timeline, and quote within one working day." },
  { title: "Build and review", text: "We build your site and refine it together with your feedback." },
  { title: "Launch and support", text: "We launch, test everything, and stay available after go-live." },
];

function Divider() {
  return <div className={styles.divider} aria-hidden="true" />;
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function IndustryPage({ content }: { content: IndustryPageContent }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBar(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const compact = content.variant === "compact";
  const priceFirst = content.priceFirst === true;
  const processSteps = content.processSteps ?? DEFAULT_PROCESS_STEPS;
  const processHeading = content.processHeading ?? "From first call to launch";

  const renderPricingCard = (compactBand: boolean) => (
    <aside
      className={compactBand ? styles.priceBandCard : styles.priceCard}
      aria-label="Pricing"
    >
      <p className={styles.priceKicker}>Starting from</p>
      <p className={styles.priceValue}>{content.priceBand}</p>
      {content.pricePoints && content.pricePoints.length > 0 && (
        <ul className={styles.pricePoints} role="list">
          {content.pricePoints.map((pt, i) => (
            <li key={i}>
              <span className={styles.priceTick} aria-hidden="true">
                <Icon name="check" size={14} strokeWidth={2.4} />
              </span>
              {pt}
            </li>
          ))}
        </ul>
      )}
      {content.priceNote && <p className={styles.priceNote}>{content.priceNote}</p>}
      <Link href="/start-a-project" className={styles.ctaPrimary}>
        Get a proposal <Icon name="chat" size={17} />
      </Link>
      <p className={styles.priceReassure}>Detailed quote within 24 hours. No obligation.</p>
    </aside>
  );

  return (
    <main className={styles.page}>
      {/* 1. Breadcrumb */}
      <nav aria-label="Breadcrumb" className={styles.crumbNav}>
        <div className="container">
          <ol className={styles.crumbs}>
            {content.breadcrumbs.map((c, i) => (
              <li key={c.path} className={styles.crumbItem}>
                {i > 0 && (
                  <span aria-hidden="true" className={styles.crumbSep}>
                    /
                  </span>
                )}
                {i === content.breadcrumbs.length - 1 ? (
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

      {/* 2. Hero */}
      <section className={`${styles.hero} ${compact ? styles.heroCentered : ""}`}>
        <div className="container">
          <Reveal>
            <div className={styles.heroGrid}>
              <div className={styles.heroText}>
                <p className={styles.eyebrow}>{content.eyebrow}</p>
                <h1 className={styles.title}>{highlightTitle(content.title, content.titleHighlight)}</h1>
                <p className={styles.intro}>{content.intro}</p>
                <CtaButtons />
                {content.heroNote && <p className={styles.heroNote}>{content.heroNote}</p>}
                <TrustRow ratingLabel={content.ratingLabel} />
              </div>
              {!compact && (
                <div className={styles.heroVisual}>
                  <Mockup content={content} />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8b. Price-first compact band */}
      {priceFirst && (
        <section className={styles.priceBandSection} aria-label="Pricing summary">
          <div className="container">
            <Reveal>{renderPricingCard(true)}</Reveal>
          </div>
        </section>
      )}

      {/* 3. Ticker */}
      <Ticker items={content.ticker} />

      {/* 4. Journey */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="journey-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionKicker}>How it works</p>
            <h2 id="journey-heading" className={styles.sectionTitle}>
              {content.journeyHeading}
            </h2>
            {content.journeyIntro && <p className={styles.sectionIntro}>{content.journeyIntro}</p>}
            <ol className={styles.timeline} role="list">
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

      <Divider />

      {/* 5. Problem */}
      <section className={styles.section} aria-labelledby="problem-heading">
        <div className="container">
          <div className={styles.split}>
            <div className={styles.splitHead}>
              <Reveal>
                <p className={styles.sectionKicker}>The problem</p>
                <h2 id="problem-heading" className={styles.sectionTitle}>
                  {content.problemHeading}
                </h2>
                {content.problemIntro && <p className={styles.sectionIntro}>{content.problemIntro}</p>}
              </Reveal>
            </div>
            <div>
              {content.problemStyle === "quotes" ? (
                <ul className={styles.quoteCards} role="list">
                  {content.problems.map((p, i) => (
                    <li key={i}>
                      <Reveal delay={i * 90}>
                        <figure className={styles.quoteCard}>
                          <blockquote className={styles.quoteText}>{p.text}</blockquote>
                          <figcaption className={styles.quoteTitle}>{p.title}</figcaption>
                        </figure>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={styles.painRows} role="list">
                  {content.problems.map((p, i) => (
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
              )}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* 6. Solution */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="solution-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionKicker}>The website solution</p>
            <h2 id="solution-heading" className={styles.sectionTitle}>
              {content.solutionHeading}
            </h2>
            {content.solutionIntro && <p className={styles.sectionIntro}>{content.solutionIntro}</p>}
          </Reveal>
          {content.solutionLayout === "steps" ? (
            <ol className={styles.stepper} role="list">
              {content.solutions.map((s, i) => (
                <li key={i}>
                  <Reveal delay={i * 90}>
                    <div className={styles.stepCard}>
                      <span className={styles.stepNum} aria-hidden="true">
                        {i + 1}
                      </span>
                      <span className={styles.stepIcon} aria-hidden="true">
                        <Icon name={s.icon} size={22} />
                      </span>
                      <h3 className={styles.stepTitle}>{s.title}</h3>
                      <p className={styles.stepText}>{s.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          ) : (
            <div className={styles.bento}>
              {content.solutions.map((s, i) => (
                <Reveal key={i} delay={i * 90} className={i === 0 ? styles.bentoLead : ""}>
                  <article className={`${styles.bentoCard} ${i === 0 ? styles.bentoCardLead : ""}`}>
                    <span className={styles.bentoIcon} aria-hidden="true">
                      <Icon name={s.icon} size={24} />
                    </span>
                    <h3 className={styles.bentoTitle}>{s.title}</h3>
                    <p className={styles.bentoText}>{s.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 7. Structure */}
      {!content.hideStructure && (
        <>
          <Divider />
          <section className={styles.section} aria-labelledby="structure-heading">
            <div className="container">
              <Reveal>
                <p className={styles.sectionKicker}>Example structure</p>
                <h2 id="structure-heading" className={styles.sectionTitle}>
                  {content.structureHeading}
                </h2>
                {content.structureIntro && <p className={styles.sectionIntro}>{content.structureIntro}</p>}
                <div className={styles.treeWrap}>
                  <ul className={styles.tree} role="list">
                    {content.structure.map((node, i) => (
                      <li key={i} className={styles.treeNode}>
                        <span className={styles.treePage}>
                          <span className={styles.treeIcon} aria-hidden="true">
                            <Icon name="file" size={16} />
                          </span>
                          {node.page}
                        </span>
                        {node.children && node.children.length > 0 && (
                          <ul className={styles.treeChildren} role="list">
                            {node.children.map((child, j) => (
                              <li key={j} className={styles.treeChild}>
                                {child}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                  {content.structureNote && <p className={styles.treeNote}>{content.structureNote}</p>}
                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}

      <Divider />

      {/* 8. Features + pricing */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="features-heading">
        <div className="container">
          <div className={priceFirst ? styles.featuresFull : styles.twoCol}>
            <div>
              <Reveal>
                <p className={styles.sectionKicker}>Features</p>
                <h2 id="features-heading" className={styles.sectionTitle}>
                  {content.featuresHeading}
                </h2>
                {content.featuresIntro && <p className={styles.sectionIntro}>{content.featuresIntro}</p>}
              </Reveal>
              {content.featureStyle === "checklist" ? (
                <ul className={styles.checkList} role="list">
                  {content.features.map((f, i) => (
                    <li key={i}>
                      <Reveal delay={i * 60}>
                        <span className={styles.checkItem}>
                          <span className={styles.checkIcon} aria-hidden="true">
                            <Icon name="check" size={15} strokeWidth={2.4} />
                          </span>
                          <span>
                            <strong className={styles.checkTitle}>{f.title}</strong>
                            <span className={styles.checkText}>{f.text}</span>
                          </span>
                        </span>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className={styles.featGrid} role="list">
                  {content.features.map((f, i) => (
                    <li key={i}>
                      <Reveal delay={i * 60}>
                        <article className={styles.featCard}>
                          <span className={styles.featIcon} aria-hidden="true">
                            <Icon name={f.icon} size={22} />
                          </span>
                          <h3 className={styles.featTitle}>{f.title}</h3>
                          <p className={styles.featText}>{f.text}</p>
                        </article>
                      </Reveal>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {!priceFirst && <Reveal delay={120}>{renderPricingCard(false)}</Reveal>}
          </div>
        </div>
      </section>

      {/* 9. Process */}
      <section className={styles.section} aria-labelledby="process-heading">
        <div className="container">
          <Reveal>
            <p className={styles.sectionKicker}>Process</p>
            <h2 id="process-heading" className={styles.sectionTitle}>
              {processHeading}
            </h2>
          </Reveal>
          <ol className={styles.processSteps} role="list">
            {processSteps.map((step, i) => (
              <li key={i}>
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

      {/* 10. Before / after */}
      {content.beforeAfter && (
        <>
          <Divider />
          <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="ba-heading">
            <div className="container">
              <Reveal>
                <p className={styles.sectionKicker}>Before and after</p>
                <h2 id="ba-heading" className={styles.sectionTitle}>
                  {content.beforeAfter.heading}
                </h2>
                {content.beforeAfter.intro && (
                  <p className={styles.sectionIntro}>{content.beforeAfter.intro}</p>
                )}
                <BeforeAfter data={content.beforeAfter} />
              </Reveal>
            </div>
          </section>
        </>
      )}

      {/* 11. MVP scope */}
      {content.mvpScope && (
        <section className={styles.section} aria-labelledby="mvp-heading">
          <div className="container">
            <Reveal>
              <p className={styles.sectionKicker}>MVP scope</p>
              <h2 id="mvp-heading" className={styles.sectionTitle}>
                {content.mvpScope.heading}
              </h2>
              {content.mvpScope.intro && <p className={styles.sectionIntro}>{content.mvpScope.intro}</p>}
              <ul className={styles.mvpChips} role="list">
                {content.mvpScope.items.map((item, i) => (
                  <li key={i} className={styles.mvpChip}>
                    <span className={styles.mvpChipIcon} aria-hidden="true">
                      <Icon name="check" size={14} strokeWidth={2.4} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      <Divider />

      {/* 12. FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`} aria-labelledby="faq-heading">
        <div className="container">
          <div className={styles.faqCenter}>
            <Reveal>
              <p className={styles.eyebrow}>FAQ</p>
              <h2 id="faq-heading" className={styles.sectionTitle}>
                Frequently asked questions
              </h2>
            </Reveal>
            <ul className={styles.faqList} role="list">
              {content.faqs.map((f, i) => (
                <li key={i} className={styles.faqItem} data-open={openFaq === i}>
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    aria-controls={`ip-faq-a-${i}`}
                    id={`ip-faq-q-${i}`}
                  >
                    <span>{f.question}</span>
                    <span className={styles.faqPlus} aria-hidden="true" />
                  </button>
                  <div
                    id={`ip-faq-a-${i}`}
                    role="region"
                    aria-labelledby={`ip-faq-q-${i}`}
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

      {/* 13. CTA band */}
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

      {/* 14. Related */}
      {content.related.length > 0 && (
        <section className={styles.section} aria-labelledby="related-heading">
          <div className="container">
            <Reveal>
              <h2 id="related-heading" className={styles.sectionTitle}>
                {content.relatedHeading || "Related pages"}
              </h2>
              <ul className={styles.relatedGrid} role="list">
                {content.related.map((r) => (
                  <li key={r.path}>
                    <Link href={r.path} className={styles.relatedCard}>
                      <span className={styles.relatedName}>{r.name}</span>
                      <span className={styles.relatedBlurb}>{r.blurb}</span>
                      <span className={styles.relatedArrow} aria-hidden="true">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {/* 15. Sticky mini-CTA + back to top */}
      <div className={styles.stickyBar} data-show={showBar} aria-hidden={!showBar}>
        <span className={styles.stickyText}>Get your website proposal</span>
        <Link
          href="/start-a-project"
          className={styles.stickyBtn}
          tabIndex={showBar ? 0 : -1}
        >
          Get a proposal
        </Link>
      </div>
      <button
        type="button"
        className={styles.backTop}
        data-show={showBar}
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
          strokeWidth={2}
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
