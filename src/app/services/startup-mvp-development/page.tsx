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

const PAGE_TITLE = "MVP Development Company in India";
const PAGE_PATH = "/services/startup-mvp-development";
const PAGE_DESCRIPTION =
  "MVP development company in India. ProjectKaro designs and builds lean, launch-ready MVPs for startups in weeks. Per-project pricing, quote within 24 hours.";

export const metadata = createPageMetadata({
  title: `${PAGE_TITLE}`,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    "mvp development company india",
    "startup mvp development",
    "mvp development services india",
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
    question: "How much does it cost to build an MVP?",
    answer:
      "It depends on the core features you need, which is exactly why we price per project. Share your idea and we send a detailed written quote with scope and timeline within 24 hours. A focused MVP typically costs far less than founders expect.",
  },
  {
    question: "How long does MVP development take?",
    answer:
      "Most MVPs we build launch in 2 to 6 weeks. We define the smallest version that still proves your idea, build that first, and leave a clean path to add features after launch based on real user feedback.",
  },
  {
    question: "What technology stack do you use?",
    answer:
      "Modern, proven stacks: Next.js or React for the frontend, Node.js for the backend, and PostgreSQL or MongoDB for data. We pick the stack that fits your product and your team's future, and we document every choice.",
  },
  {
    question: "Do you sign an NDA before we discuss the idea?",
    answer:
      "Yes. If you want an NDA before sharing details, just ask and we will sign one before the first conversation. Your idea stays yours.",
  },
  {
    question: "Do I own the code and the product?",
    answer:
      "Completely. You own the full codebase, the designs, and all accounts (hosting, domain, third-party services). We hand everything over with documentation so any developer can continue the work.",
  },
  {
    question: "What happens after the MVP launches?",
    answer:
      "You get a working product with analytics wired in, so you can see what users actually do. When you are ready for the next iteration, we quote it as its own project. Many founders come back for version two once the MVP proves the idea.",
  },
];

const content: ServicePageContent = {
  eyebrow: "Startup MVP Development",
  title: PAGE_TITLE,
  intro:
    "ProjectKaro is a Hyderabad-based MVP development company for startups across India. We take your idea from a rough sketch to a working product users can sign up for, in weeks, not quarters. Lean scope, clean code, and a launch you can learn from.",
  heroNote: "Per-project pricing. Detailed quote within 24 hours.",
  titleHighlight: "MVP Development",
  character: "mvp",
  mockupKind: "dashboard",
  mockupDomain: "sample.projectkaro.com",
  mockupTitle: "Sample MVP dashboard",
  mockupItems: [
    { title: "Signups" },
    { title: "Active users" },
    { title: "Revenue" },
    { title: "Errors" },
  ],
  floatCards: [
    { kind: "checklist", title: "MVP scope", text: "Core features only" },
    { kind: "profile", title: "Early users", text: "Signups coming in" },
  ],
  ticker: [
    "Launch in weeks, not quarters",
    "Ruthless scoping",
    "Clean, documented code",
    "You own everything",
    "NDA available",
    "Quote within 24 hours",
  ],
  journeyHeading: "From idea to launch in weeks",
  journeyIntro:
    "A focused path from a rough sketch to a working product users can sign up for.",
  journey: [
    {
      title: "Scope workshop",
      text: "We cut your idea down to the features that prove it, before a line of code is written.",
    },
    {
      title: "Build the core loop",
      text: "Frontend, backend, and database, built in weeks with milestone updates you can follow.",
    },
    {
      title: "Launch and learn",
      text: "A working product with analytics wired in, and a clean path to version two.",
    },
  ],
  priceBand: "Custom Quote",
  pricePoints: [
    "Scope workshop included",
    "Launch in weeks, not quarters",
    "Clean codebase, you own everything",
  ],
  priceNote:
    "MVPs are scoped individually. Share your idea for a detailed quote within 24 hours.",
  stickyText: "Get your MVP proposal",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "MVP Development", path: PAGE_PATH },
  ],
  painsHeading: "Why most MVPs never ship",
  painsIntro:
    "Founders usually do not fail for lack of ideas. They fail in the gap between the idea and a working product.",
  pains: [
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <polyline points="12 7 12 12 15.5 14" />
        </svg>
      ),
      title: "The idea stays an idea",
      text: "Months of planning, wireframes, and discussions, but nothing users can touch. Every month of delay is a month a competitor can ship first.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: "Agencies quote enterprise budgets",
      text: "Big agencies propose six-month builds with everything included, priced for companies, not for a founder testing an idea. You pay for features nobody asked for.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="17" y1="8" x2="22" y2="13" />
          <line x1="22" y1="8" x2="17" y2="13" />
        </svg>
      ),
      title: "Freelancers vanish mid-build",
      text: "A half-built product with no documentation and no one answering messages. You are left with code nobody else can understand and a deadline already missed.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v9" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      ),
      title: "You build the wrong thing first",
      text: "Without ruthless scoping, the first version tries to be the final product. It takes too long, costs too much, and still misses what users actually want.",
    },
  ],
  outcomesHeading: "An MVP built to launch and learn",
  outcomesIntro:
    "We build the smallest product that proves your idea, on a codebase ready to grow.",
  outcomes: [
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      ),
      title: "Launch in weeks, not quarters",
      text: "Ruthless scoping keeps the build to what matters: the core loop users pay for. Most MVPs ship in 2 to 6 weeks.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Built to learn from",
      text: "Analytics and feedback paths wired in from day one, so every user teaches you what to build next instead of guessing.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <rect x="2" y1="4" width="20" height="14" rx="2" />
          <line x1="8" y1="22" x2="16" y2="22" />
          <line x1="12" y1="18" x2="12" y2="22" />
        </svg>
      ),
      title: "Investor-ready presentation",
      text: "A clean, working demo with documentation and an architecture overview you can confidently show investors and early customers.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "A codebase you can grow",
      text: "Clean, documented code with no lock-in. Your next developer, or your in-house team, can extend it without rewriting it.",
    },
  ],
  deliverablesHeading: "What your MVP includes",
  deliverables: [
    "Scope workshop: we cut your idea down to the features that prove it",
    "Clickable prototype to validate the flow before a line of code",
    "Full product build: frontend, backend, and database",
    "User signup, login, and roles",
    "Payments integration (Razorpay or Stripe) where the product needs it",
    "Admin panel so you can manage users and content yourself",
    "Analytics and error tracking wired in from launch day",
    "Deployment, domain, and SSL setup, plus full docs and handover",
  ],
  faqs: FAQS,
  ctaHeading: "Ship your MVP while the idea is hot",
  ctaText:
    "Describe your idea in plain words. Within 24 hours you will have a detailed quote with the MVP scope, timeline, and price. No commitment, and we sign an NDA if you want one.",
  related: [
    {
      name: "Website Development",
      path: "/services/website-development",
      blurb:
        "Need a marketing site alongside the product? We build fast, SEO-ready business websites.",
    },
    {
      name: "AI Solutions",
      path: "/services/ai-solutions",
      blurb:
        "Want AI inside your MVP? Custom agents and automation built for your workflow.",
    },
    {
      name: "Full-Stack Development",
      path: "/services/full-stack-development",
      blurb:
        "Beyond the MVP: production-grade web applications, APIs, and dashboards.",
    },
  ],
};

export default function StartupMvpDevelopmentPage() {
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
