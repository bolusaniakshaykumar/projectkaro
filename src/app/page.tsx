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
import BlurText from "@/components/effects/BlurText";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "ProjectKaro | Websites, AI Solutions & B.Tech Major Projects in Hyderabad",
  description:
    "ProjectKaro builds business websites, AI solutions, full-stack applications and B.Tech major projects in Hyderabad, with documentation and viva support.",
  path: "/",
});

/* ── Services data: 10 cards, each with a crafted SVG visual ── */
const BUSINESS_SERVICES = [
  { variant: "dev", name: "Websites", outcome: "Custom websites that load fast, rank well, and turn visitors into enquiries.", href: "/websites-for-businesses" },
  { variant: "fullstack", name: "Web Applications", outcome: "End-to-end apps: frontend, backend, and database.", href: "/services" },
  { variant: "ai", name: "AI Solutions", outcome: "Machine learning, automation, and AI features that ship.", href: "/services" },
  { variant: "mvp", name: "Startup MVPs", outcome: "A fast MVP to validate your idea and reach the market sooner.", href: "/services" },
];
const ACADEMIC_SERVICES = [
  { variant: "major", name: "Major Projects", outcome: "Technical development and project support for your final-year project.", href: "/academic-projects" },
  { variant: "minor", name: "Minor Projects", outcome: "Implementation and documentation guidance for semester and lab work.", href: "/academic-projects" },
  { variant: "research", name: "Research & Technical Support", outcome: "Methodology, analysis, and IEEE-format documentation support.", href: "/academic-projects" },
];
const SERVICE_GROUPS = [
  { label: "For businesses", services: BUSINESS_SERVICES },
  { label: "For students & researchers", services: ACADEMIC_SERVICES },
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

/* Custom SVG: blueprint of how we build (craft section) */
function BlueprintArt() {
  return (
    <svg viewBox="0 0 560 440" role="img" aria-label="Blueprint sketch of a website layout being designed" className={styles.blueprintSvg}>
      {/* sheet */}
      <rect x="24" y="16" width="512" height="408" fill="#ffffff" stroke="#0d1526" strokeWidth="2.5" />
      {/* corner registration marks */}
      <g stroke="#1e56e8" strokeWidth="2.5" strokeLinecap="round">
        <path d="M48 44v-16M40 36h16" />
        <path d="M512 44v-16M504 36h16" />
        <path d="M48 412v-16M40 404h16" />
        <path d="M512 412v-16M504 404h16" />
      </g>
      {/* browser window */}
      <rect x="72" y="72" width="416" height="300" rx="8" fill="#f6f9fe" stroke="#0d1526" strokeWidth="2.5" />
      <line x1="72" y1="108" x2="488" y2="108" stroke="#0d1526" strokeWidth="2.5" />
      <circle cx="96" cy="90" r="6" fill="#1e56e8" />
      <circle cx="118" cy="90" r="6" fill="none" stroke="#0d1526" strokeWidth="2" />
      <circle cx="140" cy="90" r="6" fill="none" stroke="#0d1526" strokeWidth="2" />
      <rect x="164" y="81" width="280" height="18" rx="9" fill="#ffffff" stroke="#0d1526" strokeWidth="1.5" />
      {/* hero block */}
      <rect x="100" y="132" width="360" height="96" fill="none" stroke="#1e56e8" strokeWidth="2.5" strokeDasharray="10 7" className={styles.blueprintDraw} />
      <line x1="122" y1="160" x2="300" y2="160" stroke="#0d1526" strokeWidth="5" strokeLinecap="round" />
      <line x1="122" y1="180" x2="250" y2="180" stroke="#6b7a94" strokeWidth="4" strokeLinecap="round" />
      <rect x="330" y="150" width="108" height="30" rx="4" fill="#1e56e8" />
      {/* columns */}
      <g fill="none" stroke="#0d1526" strokeWidth="2" strokeDasharray="8 6" className={styles.blueprintDrawSlow}>
        <rect x="100" y="252" width="108" height="92" />
        <rect x="226" y="252" width="108" height="92" />
        <rect x="352" y="252" width="108" height="92" />
      </g>
      <g stroke="#6b7a94" strokeWidth="3.5" strokeLinecap="round">
        <line x1="116" y1="272" x2="192" y2="272" />
        <line x1="116" y1="286" x2="178" y2="286" />
        <line x1="242" y1="272" x2="318" y2="272" />
        <line x1="242" y1="286" x2="304" y2="286" />
        <line x1="368" y1="272" x2="444" y2="272" />
        <line x1="368" y1="286" x2="430" y2="286" />
      </g>
      {/* pencil drawing the baseline */}
      <g transform="rotate(38 470 330)">
        <rect x="462" y="280" width="16" height="80" fill="#1e56e8" />
        <polygon points="462,360 478,360 470,384" fill="#0d1526" />
        <rect x="462" y="272" width="16" height="10" fill="#0d1526" />
      </g>
      <line x1="100" y1="372" x2="420" y2="372" stroke="#1e56e8" strokeWidth="2.5" strokeDasharray="2 8" strokeLinecap="round" className={styles.blueprintDraw} />
      {/* annotations */}
      <g fontFamily="Inter, sans-serif" fontSize="13" fontWeight="600" fill="#0d1526">
        <text x="100" y="400">type scale</text>
        <text x="330" y="400">8pt grid</text>
      </g>
      <g stroke="#1e56e8" strokeWidth="1.75">
        <line x1="150" y1="392" x2="150" y2="378" />
        <line x1="380" y1="392" x2="380" y2="378" />
      </g>
    </svg>
  );
}

/* Custom SVG: per-service geometric art (services cards).
   Unique gradient + line composition per service, brand palette only. */
function ServiceArt({ variant }: { variant: string }) {
  const ink = "#0d1526";
  const brand = "#1e56e8";
  const soft = "#6b7a94";
  return (
    <svg viewBox="0 0 400 200" role="presentation" className={styles.svcArtSvg}>
      {variant === "dev" && (
        <g>
          <defs>
            <linearGradient id="sg-dev" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#eaf0fe" /><stop offset="1" stopColor="#f6f9fe" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-dev)" />
          <circle cx="336" cy="34" r="58" fill={brand} opacity="0.08" />
          <rect x="72" y="34" width="256" height="132" rx="10" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <line x1="72" y1="62" x2="328" y2="62" stroke={ink} strokeWidth="2.5" />
          <circle cx="92" cy="48" r="5" fill={brand} />
          <circle cx="110" cy="48" r="5" fill="none" stroke={ink} strokeWidth="1.75" />
          <rect x="128" y="41" width="120" height="14" rx="7" fill="none" stroke={ink} strokeWidth="1.5" />
          <g strokeLinecap="round">
            <line x1="96" y1="88" x2="180" y2="88" stroke={brand} strokeWidth="6" />
            <line x1="96" y1="106" x2="230" y2="106" stroke={soft} strokeWidth="5" />
            <line x1="96" y1="124" x2="205" y2="124" stroke={ink} strokeWidth="5" />
            <line x1="96" y1="142" x2="160" y2="142" stroke={soft} strokeWidth="5" />
          </g>
          <rect x="252" y="88" width="52" height="56" rx="6" fill={brand} opacity="0.14" stroke={brand} strokeWidth="2" />
          <polyline points="264,116 274,126 294,106" fill="none" stroke={brand} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
      {variant === "business" && (
        <g>
          <defs>
            <linearGradient id="sg-biz" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dbe7fd" /><stop offset="1" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-biz)" />
          <rect x="60" y="30" width="280" height="140" rx="10" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <g>
            <rect x="96" y="118" width="30" height="26" rx="3" fill={soft} opacity="0.55" />
            <rect x="138" y="104" width="30" height="40" rx="3" fill={soft} opacity="0.7" />
            <rect x="180" y="88" width="30" height="56" rx="3" fill={brand} opacity="0.55" />
            <rect x="222" y="70" width="30" height="74" rx="3" fill={brand} />
          </g>
          <polyline points="92,100 140,86 190,72 248,44" fill="none" stroke={ink} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <polygon points="248,44 232,44 240,60" fill={ink} />
          <circle cx="300" cy="150" r="44" fill={brand} opacity="0.08" />
        </g>
      )}
      {variant === "portfolio" && (
        <g>
          <defs>
            <linearGradient id="sg-port" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#f6f9fe" /><stop offset="1" stopColor="#eaf0fe" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-port)" />
          <circle cx="64" cy="160" r="52" fill={brand} opacity="0.08" />
          <rect x="110" y="36" width="180" height="128" rx="12" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <circle cx="200" cy="76" r="22" fill={brand} opacity="0.14" stroke={brand} strokeWidth="2.5" />
          <g strokeLinecap="round">
            <line x1="150" y1="114" x2="250" y2="114" stroke={ink} strokeWidth="6" />
            <line x1="162" y1="130" x2="238" y2="130" stroke={soft} strokeWidth="5" />
          </g>
          <rect x="168" y="142" width="64" height="12" rx="6" fill={brand} />
          <polygon points="316,60 321,71 333,71 323,78 327,90 316,82 305,90 309,78 299,71 311,71" fill={brand} opacity="0.85" />
          <polygon points="92,52 95,60 104,60 97,65 100,74 92,68 84,74 87,65 80,60 89,60" fill={ink} opacity="0.3" />
        </g>
      )}
      {variant === "fullstack" && (
        <g>
          <defs>
            <linearGradient id="sg-fs" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#e3ecfd" /><stop offset="1" stopColor="#f2f6fe" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-fs)" />
          <circle cx="340" cy="150" r="60" fill={brand} opacity="0.08" />
          <g stroke={ink} strokeWidth="2.5" strokeLinejoin="round">
            <polygon points="200,44 288,88 200,132 112,88" fill="#ffffff" />
            <polygon points="200,84 288,128 200,172 112,128" fill={brand} opacity="0.16" />
            <polyline points="128,108 200,144 272,108" fill="none" />
          </g>
          <polygon points="200,44 288,88 200,88 112,88" fill={brand} opacity="0.28" />
          <circle cx="200" cy="88" r="7" fill={brand} />
          <g fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill={soft}>
            <text x="96" y="186">frontend</text>
            <text x="188" y="186">backend</text>
            <text x="272" y="186">database</text>
          </g>
        </g>
      )}
      {variant === "mvp" && (
        <g>
          <defs>
            <linearGradient id="sg-mvp" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#d5e2fb" /><stop offset="1" stopColor="#eef3fd" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-mvp)" />
          <g transform="rotate(24 200 100)">
            <path d="M200 34c26 22 34 52 30 84l-60 0c-4-32 4-62 30-84z" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
            <circle cx="200" cy="76" r="11" fill={brand} opacity="0.25" stroke={brand} strokeWidth="2.5" />
            <path d="M172 108l-26 30 30-8z" fill={brand} opacity="0.7" />
            <path d="M228 108l26 30-30-8z" fill={brand} opacity="0.7" />
            <path d="M192 118h16l6 22h-28z" fill={ink} opacity="0.85" />
          </g>
          <g stroke={soft} strokeWidth="4" strokeLinecap="round">
            <line x1="96" y1="120" x2="130" y2="120" />
            <line x1="88" y1="144" x2="136" y2="144" />
            <line x1="100" y1="168" x2="128" y2="168" />
          </g>
          <circle cx="316" cy="52" r="8" fill={brand} opacity="0.5" />
          <circle cx="336" cy="86" r="5" fill={ink} opacity="0.25" />
        </g>
      )}
      {variant === "ai" && (
        <g>
          <defs>
            <linearGradient id="sg-ai" x1="1" y1="1" x2="0" y2="0">
              <stop offset="0" stopColor="#eaf0fe" /><stop offset="1" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-ai)" />
          <g stroke={soft} strokeWidth="2" opacity="0.7">
            <line x1="120" y1="70" x2="200" y2="100" />
            <line x1="200" y1="100" x2="280" y2="64" />
            <line x1="120" y1="70" x2="140" y2="140" />
            <line x1="200" y1="100" x2="140" y2="140" />
            <line x1="200" y1="100" x2="262" y2="142" />
            <line x1="280" y1="64" x2="262" y2="142" />
          </g>
          <circle cx="120" cy="70" r="14" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <circle cx="280" cy="64" r="14" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <circle cx="140" cy="140" r="14" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <circle cx="262" cy="142" r="14" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <circle cx="200" cy="100" r="24" fill={brand} />
          <path d="M192 100l6 6 12-13" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="120" cy="70" r="4" fill={brand} />
          <circle cx="280" cy="64" r="4" fill={brand} />
          <circle cx="140" cy="140" r="4" fill={brand} />
          <circle cx="262" cy="142" r="4" fill={brand} />
        </g>
      )}
      {variant === "consulting" && (
        <g>
          <defs>
            <linearGradient id="sg-con" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#eaf0fe" /><stop offset="1" stopColor="#f6f9fe" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-con)" />
          <circle cx="70" cy="50" r="54" fill={brand} opacity="0.08" />
          <rect x="96" y="44" width="150" height="76" rx="12" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <polygon points="130,120 130,140 152,120" fill="#ffffff" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
          <g strokeLinecap="round">
            <line x1="118" y1="70" x2="200" y2="70" stroke={ink} strokeWidth="5" />
            <line x1="118" y1="88" x2="180" y2="88" stroke={soft} strokeWidth="5" />
          </g>
          <rect x="196" y="92" width="130" height="64" rx="12" fill={brand} />
          <polygon points="286,156 286,172 268,156" fill={brand} />
          <g strokeLinecap="round" stroke="#ffffff">
            <line x1="216" y1="114" x2="292" y2="114" strokeWidth="5" />
            <line x1="216" y1="130" x2="272" y2="130" strokeWidth="5" />
          </g>
          <circle cx="318" cy="52" r="16" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <polyline points="311,52 317,58 326,46" fill="none" stroke={brand} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
      {variant === "major" && (
        <g>
          <defs>
            <linearGradient id="sg-maj" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#dbe7fd" /><stop offset="1" stopColor="#f6f9fe" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-maj)" />
          <circle cx="330" cy="150" r="56" fill={brand} opacity="0.08" />
          <polygon points="200,52 296,88 200,124 104,88" fill={ink} />
          <polygon points="200,52 296,88 200,88 104,88" fill={brand} opacity="0.35" />
          <path d="M148 104v34c0 16 104 16 104 0v-34l-52 20z" fill="#ffffff" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="296" y1="88" x2="296" y2="140" stroke={brand} strokeWidth="3" strokeLinecap="round" />
          <circle cx="296" cy="148" r="8" fill={brand} />
          <g strokeLinecap="round">
            <line x1="120" y1="166" x2="280" y2="166" stroke={soft} strokeWidth="5" />
          </g>
        </g>
      )}
      {variant === "minor" && (
        <g>
          <defs>
            <linearGradient id="sg-min" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#eaf0fe" /><stop offset="1" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-min)" />
          <rect x="140" y="30" width="120" height="140" rx="8" fill="#ffffff" stroke={ink} strokeWidth="2.5" />
          <g fill={ink}>
            <circle cx="164" cy="52" r="5" /><circle cx="188" cy="52" r="5" />
            <circle cx="212" cy="52" r="5" /><circle cx="236" cy="52" r="5" />
          </g>
          <g strokeLinecap="round">
            <line x1="160" y1="84" x2="240" y2="84" stroke={ink} strokeWidth="5" />
            <line x1="160" y1="104" x2="240" y2="104" stroke={soft} strokeWidth="5" />
            <line x1="160" y1="124" x2="216" y2="124" stroke={soft} strokeWidth="5" />
          </g>
          <circle cx="282" cy="140" r="24" fill={brand} />
          <polyline points="272,140 280,148 294,132" fill="none" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="90" cy="150" r="40" fill={brand} opacity="0.08" />
        </g>
      )}
      {variant === "research" && (
        <g>
          <defs>
            <linearGradient id="sg-res" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#e3ecfd" /><stop offset="1" stopColor="#ffffff" />
            </linearGradient>
          </defs>
          <rect width="400" height="200" fill="url(#sg-res)" />
          <circle cx="80" cy="60" r="52" fill={brand} opacity="0.08" />
          <path d="M184 36h32v44l44 66a12 12 0 0 1-10 18h-100a12 12 0 0 1-10-18l44-66z" fill="#ffffff" stroke={ink} strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M168 128h64l12 18a12 12 0 0 1-10 18h-68a12 12 0 0 1-10-18z" fill={brand} opacity="0.22" />
          <circle cx="192" cy="146" r="6" fill={brand} />
          <circle cx="210" cy="138" r="4" fill={brand} opacity="0.7" />
          <circle cx="200" cy="120" r="3" fill={brand} opacity="0.5" />
          <g strokeLinecap="round">
            <line x1="286" y1="70" x2="320" y2="70" stroke={ink} strokeWidth="5" />
            <line x1="286" y1="92" x2="312" y2="92" stroke={soft} strokeWidth="5" />
            <line x1="286" y1="114" x2="320" y2="114" stroke={ink} strokeWidth="5" />
          </g>
        </g>
      )}
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
              <h1 id="hero-heading" className={styles.heroTitle}>
                <BlurText
                  trigger="mount"
                  startDelay={200}
                  stagger={95}
                  segments={[
                    { text: "We build websites that" },
                    { text: "win customers.", className: styles.heroAccent },
                  ]}
                />
              </h1>

              <p id="hero-summary" className={`${styles.heroValue} ${styles.heroAnim} ${styles.heroDelay3}`}>
                Websites, apps, and AI solutions for businesses, plus technical
                project support for students and researchers. Designed with intent,
                delivered on time, priced per project.
              </p>

              <div className={`${styles.heroCtas} ${styles.heroAnim} ${styles.heroDelay4}`}>
                <Link href="/start-a-project" className={styles.ctaPrimary}>
                  Get a Free Quote
                  <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
                </Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsApp}>
                  <WhatsAppGlyph />
                  Chat on WhatsApp
                </a>
              </div>

              <ul className={`${styles.heroTrust} ${styles.heroAnim} ${styles.heroDelay5}`} aria-label="Why trust ProjectKaro">
                <li>{CHECK_ICON}<span><strong>20+</strong> team members</span></li>
                <li>{CHECK_ICON}<span>Registered <strong>MSME</strong> (Udyam)</span></li>
                <li>{CHECK_ICON}<span>Detailed quote <strong>within 24 hours</strong></span></li>
              </ul>
            </div>

            <div className={`${styles.heroVisual} ${styles.heroAnim} ${styles.heroDelay4}`}>
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ══ 02 · STAKES (ink ledger) ════════════════════ */}
      <section className={styles.stakes} aria-labelledby="stakes-h">
        <div className="container">
          <div className={styles.stakesLedger}>
            <div className={styles.stakesLead}>
              <Reveal>
                <p className={styles.stakesEyebrow}>The stakes</p>
                <h2 id="stakes-h" className={styles.stakesTitle}>
                  A weak website quietly costs you customers.
                </h2>
                <p className={styles.stakesIntro}>
                  Your website is often the first thing a customer sees. When it is slow,
                  dated, or missing entirely, this is what follows. Every one of these
                  is fixable, and fixing them is what we do best.
                </p>
                <div className={styles.stakesCta}>
                  <Link href="/start-a-project">
                    Start fixing it: get my detailed quote
                    <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
                  </Link>
                </div>
              </Reveal>
            </div>
            <ul className={styles.stakesList}>
              {STAKES.map((s, i) => (
                <li key={s.title} className={styles.stakeRow}>
                  <Reveal delay={i * 80} className={styles.stakeRowInner}>
                    <span className={styles.stakeSignal} aria-hidden="true">{s.icon}</span>
                    <div className={styles.stakeRowBody}>
                      <h3 className={styles.stakeRowTitle}>{s.title}</h3>
                      <p className={styles.stakeRowDesc}>{s.desc}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══ 03 · CRAFT ═════════════════════════════════ */}
      <section className={styles.craft} aria-labelledby="craft-h">
        <div className="container">
          <div className={styles.craftGrid}>
            <Reveal className={styles.craftArt}>
              <BlueprintArt />
              <p className={styles.craftArtCaption}>Every build starts on the drawing board, not in a template.</p>
            </Reveal>
            <div className={styles.craftCopy}>
              <Reveal>
                <p className={styles.eyebrow}>02, How we think</p>
                <h2 id="craft-h" className={styles.craftTitle}>
                  Craft is a process, not a coat of paint.
                </h2>
              </Reveal>
              <div className={styles.craftList}>
                {CRAFT.map((c, i) => (
                  <Reveal key={c.title} delay={i * 80}>
                    <div className={styles.craftItem}>
                      <span className={styles.craftNum} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className={styles.craftItemTitle}>{c.title}</h3>
                        <p className={styles.craftItemDesc}>{c.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 04 · SERVICES ═══════════════════════════════ */}
      <section className={styles.services} aria-labelledby="services-h">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Services</p>
            <h2 id="services-h" className={styles.servicesTitle}>Two tracks, one standard.</h2>
            <p className={styles.servicesSub}>
              Websites, apps, and AI solutions for businesses. Technical
              development and project support for students and researchers.
              Whatever the engagement, it ends the same way: delivered,
              documented, on time.
            </p>
          </Reveal>
          {SERVICE_GROUPS.map((group) => (
            <div key={group.label} className={styles.svcGroup}>
              <Reveal>
                <h3 className={styles.svcGroupTitle}>{group.label}</h3>
              </Reveal>
              <ul className={styles.svcGrid}>
                {group.services.map((s, i) => (
                  <li key={s.name} className={styles.svcCard}>
                    <Reveal delay={Math.min(i * 60, 240)} className={styles.svcReveal}>
                      <Link
                        href={s.href}
                        className={styles.svcLink}
                        aria-label={`${s.name}: ${s.outcome}`}
                      >
                        <span className={styles.svcArt} aria-hidden="true">
                          <ServiceArt variant={s.variant} />
                        </span>
                        <span className={styles.svcBody}>
                          <span className={styles.svcName}>{s.name}</span>
                          <span className={styles.svcDesc}>{s.outcome}</span>
                          <span className={styles.svcMore}>
                            Explore
                            <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
                          </span>
                        </span>
                      </Link>
                    </Reveal>
                  </li>
                ))}
              </ul>
              {group.label === "For students & researchers" && (
                <Reveal>
                  <p className={styles.svcExtra}>
                    Studying in Hyderabad? See{" "}
                    <Link href="/btech-major-projects-hyderabad" className={styles.svcExtraLink}>
                      B.Tech major projects in Hyderabad
                    </Link>
                    , built around your branch, deadline, and viva.
                  </p>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══ 05 · PROCESS ════════════════════════════════ */}
      <section className={styles.process} aria-labelledby="process-h">
        <div className="container">
          <Reveal>
            <p className={styles.eyebrow}>Process</p>
            <h2 id="process-h" className={styles.processTitle}>From first message to final delivery.</h2>
            <p className={styles.processSub}>
              Four steps, zero guesswork. Tell us what you need, get a detailed
              quote with scope and timeline within 24 hours, follow the build
              through milestone updates, and receive everything with
              documentation and support.
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
            <div className={styles.processCta}>
              <Link href="/how-it-works" className={styles.textLink}>
                See the full process
                <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 06 · STATEMENT ══════════════════════════════ */}
      <section className={styles.statement} aria-label="Our standard">
        <div className="container">
          <p className={styles.statementText}>
            <BlurText
              trigger="view"
              startDelay={0}
              stagger={75}
              segments={[
                { text: "Good websites are not decoration. They are how customers decide" },
                { text: ".", className: styles.statementDot, noSpaceBefore: true },
              ]}
            />
          </p>
          <Reveal>
            <p className={styles.statementSub}>That is the standard every ProjectKaro build is held to.</p>
            <div className={styles.statementCtas}>
              <Link href="/start-a-project" className={styles.ctaPrimary}>
                Get my detailed quote
                <span className={styles.linkArrow} aria-hidden="true">{ARROW_ICON}</span>
              </Link>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaWhatsApp}>
                <WhatsAppGlyph />
                Chat on WhatsApp
              </a>
            </div>
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
                ProjectKaro is a professional web development and student project studio in India. We help businesses, startups, freelancers, and students with websites, full-stack applications, major and minor academic projects, and research work, with a clear scope, a detailed quote within 24 hours, and on-time delivery.
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
