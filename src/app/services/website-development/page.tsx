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

const PAGE_TITLE = "Website Development Company in India";
const PAGE_PATH = "/services/website-development";
const PAGE_DESCRIPTION =
  "Website development company in India building fast, SEO-ready business websites that turn visitors into enquiries. Per-project pricing, quote within 24 hours.";

export const metadata = createPageMetadata({
  title: `${PAGE_TITLE} | ProjectKaro`,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    "website development company in india",
    "business website development",
    "professional website development india",
    "custom website development india",
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
    question: "How much does a website cost in India?",
    answer:
      "Every project is priced on its own scope, so there is no fixed rate. Share your requirements and we send a detailed written quote within 24 hours. Our pricing page lists indicative starting prices so you know the range before you ask.",
  },
  {
    question: "How long does it take to build a business website?",
    answer:
      "A typical business website takes 1 to 4 weeks depending on pages, content readiness, and features like booking or payments. We agree on the timeline in the quote itself and commit to it.",
  },
  {
    question: "Will my website rank on Google?",
    answer:
      "Every site we build includes on-page SEO done properly: page titles, meta descriptions, semantic headings, fast load times, mobile-first layout, and a sitemap. Rankings also depend on your content and competition, and no honest company can promise a number-one spot.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We start with a quick audit of what is broken or dated on your current site, then rebuild it so you keep your domain authority and content while getting a modern design, better speed, and working enquiry paths.",
  },
  {
    question: "Do I own the website once it is built?",
    answer:
      "Completely. You own the code, the content, the domain, and the hosting account. We hand over everything with documentation, so you can run the site without us if you ever want to.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Your business details, your logo and any content you already have, and a few examples of websites you like. If you do not have content ready, we help you shape it. Then we take it from there with milestone updates.",
  },
];

const content: ServicePageContent = {
  eyebrow: "Website Development",
  title: PAGE_TITLE,
  intro:
    "ProjectKaro is a Hyderabad-based website development company serving businesses across India. We design and build custom business websites that load fast, rank on Google, and turn visitors into enquiries. No templates, no page builders, no shortcuts that break after launch.",
  heroNote: "Per-project pricing. Detailed quote within 24 hours.",
  titleHighlight: "Website Development",
  character: "website",
  mockupKind: "browser",
  mockupDomain: "sample.projectkaro.com",
  mockupTitle: "Sample business website",
  mockupItems: [
    { title: "Services" },
    { title: "About" },
    { title: "Reviews" },
    { title: "Contact" },
  ],
  floatCards: [
    { kind: "whatsapp", title: "New enquiry", text: "WhatsApp message, just now" },
    { kind: "call", title: "Click-to-call", text: "One tap to reach you" },
  ],
  ticker: [
    "Custom design, never a template",
    "Built to rank on Google",
    "Enquiries in one tap",
    "Fast on every device",
    "Quote within 24 hours",
  ],
  journeyHeading: "From weak website to enquiry machine",
  journeyIntro:
    "A clear path from where your site is today to a website that brings customers.",
  journey: [
    {
      title: "Tell us about your business",
      text: "Your services, your customers, and what a good enquiry looks like for you. Plain words are enough.",
    },
    {
      title: "We rebuild around enquiries",
      text: "Custom design, on-page SEO, and one-tap contact paths, built around a single job: turning visitors into customers.",
    },
    {
      title: "Launch a site that works",
      text: "Fast on every phone, found on Google, and owned outright by you, with support after launch.",
    },
  ],
  priceBand: "₹15,000",
  pricePoints: [
    "Custom design, never a template",
    "SEO and enquiry paths built in",
    "You own the site outright",
  ],
  priceNote:
    "Indicative starting price. Every project is quoted individually after we review your requirements.",
  stickyText: "Get your website proposal",
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Website Development", path: PAGE_PATH },
  ],
  painsHeading: "What a weak website costs you",
  painsIntro:
    "Most business websites fail quietly. They exist, but they do not bring customers. These are the patterns we fix every week.",
  pains: [
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <line x1="5.5" y1="5.5" x2="18.5" y2="18.5" />
        </svg>
      ),
      title: "Your site looks older than your business",
      text: "Visitors judge a business in seconds. A dated or broken-looking site sends them straight to a competitor with a better one, before you ever get a call.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.5" y2="16.5" />
        </svg>
      ),
      title: "Customers cannot find you on Google",
      text: "Without proper page titles, structure, and local signals, your business is invisible when nearby customers search. A competitor with basic SEO takes those clicks.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          <line x1="4" y1="4" x2="20" y2="20" />
        </svg>
      ),
      title: "The site brings zero enquiries",
      text: "A website without clear contact paths is a brochure nobody reads. If visitors cannot call, message, or book in one tap, they leave and do it on a competitor's site.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <rect x="7" y="2" width="10" height="20" rx="2.5" />
          <line x1="11" y1="18.5" x2="13" y2="18.5" />
          <path d="M9 6l6 4-6 4V6z" />
        </svg>
      ),
      title: "It falls apart on phones",
      text: "Most of your visitors arrive on a phone. A site that loads slowly or needs pinching and zooming tells them the business behind it is not serious.",
    },
  ],
  outcomesHeading: "What you get instead",
  outcomesIntro:
    "Every ProjectKaro website is built around one job: turning visitors into customers.",
  outcomes: [
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <circle cx="12" cy="9" r="5" />
          <path d="M8.6 13.4L7 22l5-3 5 3-1.6-8.6" />
          <polyline points="9.8 9 11 10.2 13.4 7.6" />
        </svg>
      ),
      title: "Design that builds trust",
      text: "A custom design matched to your brand, built to look like the business you want to become. Professional from the very first scroll.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.5" y2="16.5" />
          <polyline points="8.5 11 10.5 13 13.5 9.5" />
        </svg>
      ),
      title: "Built to rank on Google",
      text: "On-page SEO done properly from day one: titles, meta descriptions, semantic headings, speed, and structure that search engines can actually read.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4z" />
        </svg>
      ),
      title: "Enquiries in one tap",
      text: "Contact forms, click-to-call, and WhatsApp buttons placed where visitors are ready to act, so no lead slips away unanswered.",
    },
    {
      icon: (
        <svg {...svg} aria-hidden="true">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      ),
      title: "Fast on every device",
      text: "Mobile-first builds, optimized images, and clean code. Your site loads quickly on a budget phone on 4G, not just on a developer's laptop.",
    },
  ],
  deliverablesHeading: "What every website includes",
  deliverables: [
    "Custom design matched to your brand, built from scratch, never a template",
    "Mobile-first responsive layout that works on every screen size",
    "On-page SEO: titles, meta descriptions, headings, sitemap, and local signals",
    "Contact forms, click-to-call, and WhatsApp click-to-chat integration",
    "Google Business and Maps integration so local customers find you",
    "Analytics setup so you can see where visitors come from",
    "Launch checklist: SSL, speed test, and cross-browser checks",
    "Full handover with documentation, plus support after launch",
  ],
  faqs: FAQS,
  ctaHeading: "Let's build a website that works as hard as you do",
  ctaText:
    "Tell us about your business and what you need the website to do. Within 24 hours you will have a detailed quote with scope and timeline. No commitment, no pushy sales calls.",
  related: [
    {
      name: "Startup MVP Development",
      path: "/services/startup-mvp-development",
      blurb:
        "Launching something new? We build lean, launch-ready MVPs for startups in weeks.",
    },
    {
      name: "AI Solutions",
      path: "/services/ai-solutions",
      blurb:
        "Custom AI agents and chatbots that handle support, sales, and repetitive work.",
    },
    {
      name: "Website Development in Hyderabad",
      path: "/website-development-hyderabad",
      blurb:
        "Local business in Hyderabad? See how we build sites for companies here.",
    },
  ],
};

export default function WebsiteDevelopmentPage() {
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
