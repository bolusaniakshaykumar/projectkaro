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

const PAGE_TITLE = "AI Solution Development in India";
const PAGE_PATH = "/services/ai-solutions";
const PAGE_DESCRIPTION =
  "AI solution development in India. ProjectKaro builds custom AI agents, chatbots, and automation wired into your workflow. Per-project pricing, quote in 24 hours.";

export const metadata = createPageMetadata({
  title: `${PAGE_TITLE} | ProjectKaro`,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    "ai solution development india",
    "ai agent development",
    "custom ai solutions india",
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
    question: "What kinds of AI solutions do you build?",
    answer:
      "Custom AI agents and chatbots for customer support and sales, lead qualification agents, document intelligence (search, summarise, and answer questions over your own files), and workflow automation that removes repetitive manual work. If it involves language, documents, or decisions, we can probably automate part of it.",
  },
  {
    question: "Do I need a lot of data to use AI?",
    answer:
      "No. Most business AI runs on the documents and processes you already have: FAQs, price lists, manuals, past tickets. We start with what exists and design the solution around it, rather than asking you to collect data for months.",
  },
  {
    question: "How much does a custom AI solution cost?",
    answer:
      "Pricing is per project, based on the use case and integrations involved. Share what you want the AI to do and we send a detailed written quote within 24 hours. Focused builds, like a support chatbot trained on your docs, are very affordable.",
  },
  {
    question: "Who owns the AI solution once it is built?",
    answer:
      "You do. The code, the prompts, the configuration, and all accounts are handed over to you with documentation. There are no ongoing licence fees owed to us.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A focused AI build, such as a chatbot or a document Q&A tool, typically takes 2 to 4 weeks including testing. Larger automation across multiple workflows is scoped and quoted as its own project.",
  },
  {
    question: "Is my business data safe?",
    answer:
      "Yes. Your data stays in accounts and infrastructure you control. We do not train public models on your data, and access is limited to what the build needs. If you have specific compliance needs, tell us upfront and we design around them.",
  },
];

const content: ServicePageContent = {
  eyebrow: "AI Solutions",
  title: PAGE_TITLE,
  intro:
    "ProjectKaro is a Hyderabad-based studio building custom AI solutions for businesses across India. We build AI agents, chatbots, and automation that plug into your actual workflow: trained on your business, measured on results, and owned entirely by you.",
  heroNote: "Per-project pricing. Detailed quote within 24 hours.",
  titleHighlight: "AI Solution",
  character: "ai",
  mockupKind: "chat",
  mockupDomain: "sample.projectkaro.com",
  mockupTitle: "Sample AI assistant",
  floatCards: [
    { kind: "whatsapp", title: "AI assistant", text: "Trained on your docs" },
    { kind: "checklist", title: "Guardrails on", text: "Human reviews flagged replies" },
  ],
  ticker: [
    "Trained on your business",
    "Humans stay in control",
    "Wired into your workflow",
    "Measurable from week one",
    "Quote within 24 hours",
  ],
  journeyHeading: "From repetitive work to AI that works",
  journeyIntro:
    "A practical path from demos that die to AI wired into your actual workflow.",
  journey: [
    {
      title: "Use-case mapping",
      text: "We find where AI actually pays off in your business, starting from the documents and processes you already have.",
    },
    {
      title: "Build on your material",
      text: "Custom agents and chatbots trained on your content, your tone, and your rules.",
    },
    {
      title: "Measure from week one",
      text: "Success defined before building, with guardrails, testing, and humans in control.",
    },
  ],
  priceBand: "₹6,000",
  pricePoints: [
    "Use-case mapping first",
    "Trained on your business",
    "Guardrails and human controls",
  ],
  priceNote:
    "Indicative starting price. Every solution is quoted individually after we review your use case.",
  stickyText: "Get your AI proposal",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "AI Solutions", path: PAGE_PATH },
  ],
  painsHeading: "Where AI goes wrong for businesses",
  painsIntro:
    "Most companies have tried AI and ended up with a demo. These are the failure patterns we are hired to fix.",
  pains: [
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M9 9h.01M15 9h.01M8 14a5 5 0 0 0 8 0" />
        </svg>
      ),
      title: "AI demos that never become products",
      text: "A prototype in a notebook that nobody can deploy, maintain, or trust. It impresses in a meeting and dies the week after.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <line x1="9" y1="11" x2="9.01" y2="11" />
          <line x1="15" y1="11" x2="15.01" y2="11" />
          <path d="M9 16h6" />
        </svg>
      ),
      title: "Generic chatbots that frustrate customers",
      text: "Off-the-shelf bots that do not know your products, your prices, or your tone. Customers get wrong answers and ask for a human anyway.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
          <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      ),
      title: "Your team drowns in repetitive work",
      text: "Manual data entry, ticket triage, lead follow-ups, report formatting. Hours of skilled time spent on work software should be doing.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </svg>
      ),
      title: "Documents nobody can use",
      text: "Policies, manuals, past tickets, and price lists sitting in folders. The answers are in there, but nobody can find them when a customer is waiting.",
    },
  ],
  outcomesHeading: "AI that does real work",
  outcomesIntro:
    "We build AI around your business, not the other way around.",
  outcomes: [
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
        </svg>
      ),
      title: "Wired into your workflow",
      text: "Not a side demo. The AI lives where the work happens: your support inbox, your sales pipeline, your document store.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      title: "Trained on your business",
      text: "Your documents, your FAQs, your tone, your rules. The AI answers like someone who works for you, because it learned from your material.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <polyline points="9.8 9 11 10.2 13.4 7.6" />
          <path d="M8.6 13.4L7 22l5-3 5 3-1.6-8.6" />
        </svg>
      ),
      title: "Humans stay in control",
      text: "Approval steps, confidence thresholds, and clean fallbacks to a human where it matters. Automation with guardrails, not autopilot.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
      title: "Measurable from week one",
      text: "We define what success looks like before building: tickets resolved, hours saved, leads qualified. Then we measure it.",
    },
  ],
  deliverablesHeading: "What we build",
  deliverables: [
    "Use-case mapping: we find where AI actually pays off in your business",
    "Custom AI chatbots for support and sales, trained on your content",
    "AI agents that qualify leads, follow up, and route them to your team",
    "Document intelligence: search, summarise, and Q&A over your own files",
    "Workflow automation for repetitive operational work",
    "Integrations with your existing tools: CRM, WhatsApp, email, sheets",
    "Guardrails, testing, and human-in-the-loop controls",
    "Deployment, documentation, and full handover. You own everything",
  ],
  faqs: FAQS,
  ctaHeading: "Put AI to work on your business",
  ctaText:
    "Describe the repetitive work or the customer questions eating your team's time. Within 24 hours you will have a detailed quote with the proposed solution, timeline, and price.",
  related: [
    {
      name: "Full-Stack Development",
      path: "/services/full-stack-development",
      blurb:
        "AI needs a solid product around it. We build production-grade web apps end to end.",
    },
    {
      name: "Startup MVP Development",
      path: "/services/startup-mvp-development",
      blurb:
        "Building an AI-first startup? We ship lean, launch-ready MVPs in weeks.",
    },
    {
      name: "Website Development",
      path: "/services/website-development",
      blurb:
        "Pair your AI with a website that converts: fast, SEO-ready, enquiry-focused.",
    },
  ],
};

export default function AiSolutionsPage() {
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
