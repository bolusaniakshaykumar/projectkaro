import JsonLd from "@/components/JsonLd";
import IndustryPage, {
  type IndustryPageContent,
} from "@/components/IndustryPage/IndustryPage";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

const PATH = "/websites-for-startups";
const pageTitle = "Websites for Startups";
const pageDescription =
  "Startup websites in Hyderabad that convert visitors into users, demos and investors. Positioning, product pages and launch-ready builds. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "startup website hyderabad",
    "website for startups",
    "mvp website design",
    "startup landing page",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a startup website cost?",
    answer:
      "Startup websites start from ₹25,000. The final quote depends on the number of pages, conversion flows like signup and demo booking, and content needs. Share your requirements and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "How fast can you build an MVP website?",
    answer:
      "We build at startup speed. A launch-ready website typically ships in 1 to 2 weeks from content approval, and we prioritise a launch date if you share it with us.",
  },
  {
    question: "Can the website collect waitlist signups before launch?",
    answer:
      "Yes. Waitlist and early-access signup flows are built in, so you start collecting users before the product is ready and launch to an audience instead of silence.",
  },
  {
    question: "Will the website hold up in front of investors?",
    answer:
      "Yes. About, traction, and contact pages are built to hold up in a diligence check, so your site backs up your pitch instead of undermining it.",
  },
  {
    question: "Can we iterate on the website after launch?",
    answer:
      "Yes. The site is built on a clean, extensible codebase, so iterating after launch is a content update rather than a rebuild.",
  },
  {
    question: "Do you also build the MVP itself?",
    answer:
      "Yes. ProjectKaro builds startup MVPs end to end, from idea to a working launch-ready build. Share your product idea and we will scope the website and the MVP together.",
  },
];

const content: IndustryPageContent = {
  variant: "dashboard",
  eyebrow: "Startups",
  title: pageTitle,
  titleHighlight: "Startups",
  intro:
    "Launch with a website that converts. Positioning that explains your product in seconds, pages that turn visitors into signups and demo calls, and a build ready to scale with you.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "launchpad-demo.in",
  mockupKind: "dashboard",
  mockupTitle: "Launchpad (sample product)",
  mockupItems: [
    { title: "Waitlist", meta: "Early access signup" },
    { title: "Features", meta: "Product tour" },
    { title: "Roadmap", meta: "What ships next" },
  ],
  mockupCta: "Join the waitlist",
  floatCards: [
    {
      kind: "call",
      title: "Book a scoping call",
      text: "30-min intro call",
    },
    {
      kind: "whatsapp",
      title: "New enquiry",
      text: "We need an MVP site (sample)",
    },
  ],
  mvpScope: {
    heading: "What ships in your MVP",
    intro: "A focused first version that starts collecting users from day one.",
    items: [
      "Landing page",
      "Waitlist signup",
      "Core feature walkthrough",
      "Analytics basics",
      "Launch checklist",
    ],
  },
  ticker: ["SaaS", "D2C", "Fintech", "Edtech", "AI Tools", "Marketplaces"],
  journeyHeading: "How early users find you",
  journey: [
    {
      title: "Search",
      text: "An early user or investor finds your link and opens the site with low patience.",
    },
    {
      title: "Evaluate",
      text: "They scan the product story in seconds and decide whether it deserves a signup.",
    },
    {
      title: "Sign up",
      text: "The convinced ones join the waitlist, request a demo, or start using the product.",
    },
  ],
  problemHeading: "Your product has seconds to make its case.",
  problemIntro:
    "Investors, early users, and partners judge your startup by its website. A weak site undersells a strong product.",
  problems: [
    {
      title: "Hard to explain",
      text: "Visitors bounce in seconds when the headline does not land. If they cannot grasp the product fast, they never sign up or reach out.",
    },
    {
      title: "A template undersells the vision",
      text: "Investors and early users judge credibility from the site. A generic template makes the ambition behind it look generic too.",
    },
    {
      title: "No conversion path",
      text: "Traffic with no signup, demo, or waitlist flow is wasted. Every visitor deserves a clear next step, and most startup sites have none.",
    },
    {
      title: "You need it live yesterday",
      text: "Launch dates and investor conversations do not wait. A slow, agency-style build process misses the window when it matters.",
    },
  ],
  solutionHeading: "A website built to launch and convert",
  solutionIntro:
    "Every element is designed around one goal: turning visitors into users, demos, and investor conversations.",
  solutions: [
    {
      icon: "zap",
      title: "Positioning that lands fast",
      text: "Headline, subhead, and product story that explain what you do in seconds, so visitors stay to learn more.",
    },
    {
      icon: "users",
      title: "Users from day one",
      text: "Waitlist signup, demo booking, and launch flows built in, so the site starts collecting users immediately.",
    },
    {
      icon: "chart",
      title: "Built to measure and scale",
      text: "Analytics from day one and a clean codebase, so the site grows with your product instead of being rebuilt.",
    },
  ],
  structureHeading: "What your startup website includes",
  structureIntro:
    "A proven structure for startups. Adjusted to your product, stage, and launch goals.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with signup or demo CTA",
        "Product overview",
        "Proof and traction",
      ],
    },
    {
      page: "Product / Features",
      children: ["Feature pages with screenshots and use cases"],
    },
    {
      page: "Pricing",
      children: ["Pricing tiers (if applicable) with signup CTA"],
    },
    {
      page: "About",
      children: ["Mission and story", "Team profiles"],
    },
    {
      page: "Contact",
      children: [
        "Demo booking form",
        "Signup and waitlist capture",
        "Investor contact",
      ],
    },
  ],
  featuresHeading: "Everything a startup website needs",
  featuresIntro:
    "Built for launch speed, conversion, and a product that keeps growing.",
  features: [
    {
      icon: "zap",
      title: "Conversion-focused homepage",
      text: "Built around one goal: the next signup, demo, or call.",
    },
    {
      icon: "file",
      title: "Product and feature pages",
      text: "Walkthroughs that make the product tangible.",
    },
    {
      icon: "users",
      title: "Waitlist and signup flows",
      text: "Capture early users from the moment you launch.",
    },
    {
      icon: "calendar",
      title: "Demo booking",
      text: "Investor and customer conversations, one click away.",
    },
    {
      icon: "chart",
      title: "Analytics from day one",
      text: "Know where visitors come from and what converts.",
    },
    {
      icon: "shield",
      title: "Scalable codebase",
      text: "Fast, clean, and ready to grow with the product.",
    },
  ],
  priceBand: "₹25,000",
  priceNote:
    "Starting from ₹25,000 for a complete website. Final quote depends on pages and conversion flows. You own the site outright.",
  faqs: FAQS,
  ctaHeading: "Get a startup website proposal within 24 hours",
  ctaText:
    "Tell us about your product, your stage, and your launch date. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Website Development Service",
      path: "/services/website-development",
      blurb: "How ProjectKaro builds websites: process, technology, and what you get.",
    },
    {
      name: "Websites for Consultants",
      path: "/websites-for-consultants",
      blurb: "Professional websites for consultants and advisory practices in Hyderabad.",
    },
    {
      name: "Websites for Real Estate",
      path: "/websites-for-real-estate",
      blurb: "Listing and enquiry-focused websites for real estate businesses.",
    },
    {
      name: "Websites for Small Businesses",
      path: "/websites-for-small-businesses",
      blurb: "Affordable websites for small businesses in Hyderabad.",
    },
    {
      name: "Ecommerce website cost in India",
      path: "/blogs/ecommerce-website-cost-india",
      blurb: "What an ecommerce website costs in India, broken down.",
    },
    {
      name: "Websites for Businesses",
      path: "/websites-for-businesses",
      blurb: "The full website track: how ProjectKaro builds sites that bring enquiries.",
    },
  ],
};

export default function StartupWebsitesPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            title: `${pageTitle} in Hyderabad`,
            description: pageDescription,
          }),
          serviceSchema({
            name: `${pageTitle} in Hyderabad`,
            description: pageDescription,
            path: PATH,
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema(CRUMBS),
        ]}
      />
      <IndustryPage content={content} />
    </>
  );
}
