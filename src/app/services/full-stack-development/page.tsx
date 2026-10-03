import JsonLd from "@/components/JsonLd";
import ServicePage, {
  type ServicePageContent,
} from "@/components/ServicePage/ServicePage";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

const PAGE_TITLE = "Full-Stack Development Services in India";
const PAGE_PATH = "/services/full-stack-development";
const PAGE_DESCRIPTION =
  "Full-stack development services in India. ProjectKaro builds production-grade web applications, APIs, and admin panels. Per-project pricing, quote in 24 hours.";

export const metadata = createPageMetadata({
  title: `${PAGE_TITLE} | ProjectKaro`,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    "full stack development services india",
    "full stack web application development",
    "custom web app development india",
  ],
});

const svg = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const FAQS = [
  {
    question: "What technology stack do you use?",
    answer:
      "Next.js or React for the frontend, Node.js for the backend, and PostgreSQL or MongoDB for data. We choose the stack that fits your product and document every decision, so future developers know exactly why things are built the way they are.",
  },
  {
    question: "Can you take over and fix my existing application?",
    answer:
      "Yes. We start with a code audit: what is broken, what is risky, and what is worth keeping. Then we quote the repair or rebuild as its own project with a clear scope, so you know exactly what you are paying for.",
  },
  {
    question: "How long does it take to build a web application?",
    answer:
      "Focused applications typically take 1 to 3 weeks. Larger platforms are split into milestones with working software at each step. The timeline is agreed in the quote itself, and we commit to it.",
  },
  {
    question: "Do you build mobile apps too?",
    answer:
      "We build web applications with fully responsive, mobile-first interfaces that work like apps on a phone. If you need native iOS or Android apps later, the backend APIs we build are ready for them.",
  },
  {
    question: "Who owns the code?",
    answer:
      "You do. The full codebase, database schemas, and all accounts (hosting, domain, third-party services) are handed over with documentation. No lock-in, no hostage code.",
  },
  {
    question: "What kind of support do I get after launch?",
    answer:
      "Every build includes handover documentation and support after launch. When you need new features, we quote each round as its own project, so you always know the scope and price upfront.",
  },
];

const content: ServicePageContent = {
  eyebrow: "Full-Stack Development",
  title: PAGE_TITLE,
  intro:
    "ProjectKaro is a Hyderabad-based studio offering full-stack development services across India. One team builds your entire application: interface, backend, database, and integrations. Production-grade from day one, documented, and owned entirely by you.",
  heroNote: "Per-project pricing. Detailed quote within 24 hours.",
  titleHighlight: "Full-Stack Development",
  character: "fullstack",
  mockupKind: "stack",
  mockupDomain: "sample.projectkaro.com",
  mockupTitle: "Sample app architecture",
  mockupItems: [
    { title: "Frontend", meta: "Next.js, mobile-first UI" },
    { title: "APIs", meta: "Node.js, auth and validation" },
    { title: "Database", meta: "PostgreSQL, documented schema" },
  ],
  floatCards: [
    { kind: "profile", title: "Admin panel", text: "Manage it yourself" },
    { kind: "checklist", title: "Docs included", text: "Full handover, no lock-in" },
  ],
  ticker: [
    "End to end, one team",
    "Production-grade from day one",
    "Admin panel included",
    "No lock-in",
    "Quote within 24 hours",
  ],
  journeyHeading: "From scattered vendors to one team",
  journeyIntro:
    "A straight path from a half-built idea to a production-grade application you own.",
  journey: [
    {
      title: "Share what the app must do",
      text: "Plain words are fine. We turn them into architecture, milestones, and a detailed quote.",
    },
    {
      title: "One team builds it all",
      text: "Interface, APIs, database, and integrations designed together. No handoff gaps.",
    },
    {
      title: "Deploy, document, hand over",
      text: "Production-grade from day one, documented, and owned entirely by you.",
    },
  ],
  priceBand: "₹25,000",
  pricePoints: [
    "Frontend, backend, database, one team",
    "Admin panel included",
    "Documented, no lock-in",
  ],
  priceNote:
    "Indicative starting price. Every application is quoted individually after we review the scope.",
  stickyText: "Get your app proposal",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Full-Stack Development", path: PAGE_PATH },
  ],
  painsHeading: "Why web app projects go wrong",
  painsIntro:
    "Applications fail differently from websites: the problems hide in the wiring between parts.",
  pains: [
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      ),
      title: "Frontend and backend built by different hands",
      text: "When two vendors build the two halves, integration becomes finger-pointing. APIs do not match, deadlines slip, and you pay for the same work twice.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M8 6l-6 6 6 6" />
          <path d="M16 6l6 6-6 6" />
          <line x1="12" y1="2" x2="12" y2="22" strokeDasharray="2 2" />
        </svg>
      ),
      title: "Spaghetti code nobody can extend",
      text: "It works today, but every new feature risks breaking three old ones. Without structure and docs, your own product becomes the thing developers fear touching.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <rect x="2" y="4" width="20" height="14" rx="2" />
          <path d="M8 22h8M12 18v4" />
          <line x1="7" y1="10" x2="7.01" y2="10" />
          <line x1="12" y1="10" x2="12.01" y2="10" />
          <line x1="17" y1="10" x2="17.01" y2="10" />
        </svg>
      ),
      title: "Works on demo day, breaks in production",
      text: "No error handling, no validation, no thought for real users doing unexpected things. The first week of real traffic exposes everything the demo hid.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        </svg>
      ),
      title: "Vendor lock-in",
      text: "Code you cannot read, hosting you cannot access, and a vendor who knows it. Every change becomes a negotiation instead of a task.",
    },
  ],
  outcomesHeading: "One team, the whole application",
  outcomesIntro:
    "We own the full stack, so nothing falls between vendors.",
  outcomes: [
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      ),
      title: "End to end, one team",
      text: "Interface, APIs, database, and integrations designed together. No handoff gaps, no blame games, one throat to choke.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      title: "Production-grade from day one",
      text: "Authentication, validation, error handling, and security basics built in, not bolted on after the first incident.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      ),
      title: "Dashboards and admin panels",
      text: "Manage your own users, content, and data without calling a developer. The boring operational stuff, handled in the build.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
      title: "Ready to scale",
      text: "Clean architecture and documented decisions mean the app grows with you instead of needing a rewrite at the first growth spurt.",
    },
  ],
  deliverablesHeading: "What a full-stack build includes",
  deliverables: [
    "Web application frontend in Next.js or React, mobile-first",
    "Backend APIs in Node.js with proper validation and error handling",
    "Database design and setup: PostgreSQL or MongoDB",
    "User authentication, roles, and permissions",
    "Admin panel for managing users, content, and data",
    "Third-party integrations: payments, maps, SMS, email",
    "Deployment with SSL, plus staging environment for safe updates",
    "Documentation and full handover. You own the code and accounts",
  ],
  faqs: FAQS,
  ctaHeading: "Build it right the first time",
  ctaText:
    "Describe what your application needs to do. Within 24 hours you will have a detailed quote with the architecture, milestones, timeline, and price. One team, zero handoff gaps.",
  related: [
    {
      name: "Website Development",
      path: "/services/website-development",
      blurb:
        "Need the marketing site too? Fast, SEO-ready business websites that bring enquiries.",
    },
    {
      name: "AI Solutions",
      path: "/services/ai-solutions",
      blurb:
        "Add intelligence to your app: custom AI agents, chatbots, and automation.",
    },
    {
      name: "Startup MVP Development",
      path: "/services/startup-mvp-development",
      blurb:
        "Earlier stage? We ship lean, launch-ready MVPs for startups in weeks.",
    },
  ],
};

export default function FullStackDevelopmentPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PAGE_PATH,
            title: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
          }),
          serviceSchema({
            name: PAGE_TITLE,
            description: PAGE_DESCRIPTION,
            path: PAGE_PATH,
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema(content.breadcrumbs),
        ]}
      />
      <ServicePage content={content} />
    </>
  );
}
