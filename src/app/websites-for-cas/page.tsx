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

const PATH = "/websites-for-cas";
const pageTitle = "Websites for CAs";
const pageDescription =
  "CA websites in Hyderabad that turn compliance searches into client enquiries. Services, team, deadlines and WhatsApp consultation booking. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "ca website hyderabad",
    "website for chartered accountants",
    "accountant website design",
    "ca firm website development",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a CA website cost?",
    answer:
      "CA websites start from ₹15,000. The final quote depends on the number of service pages, features like consultation booking, and content needs. Share your requirements and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "Can clients book an appointment through the website?",
    answer:
      "Yes. Clients can request a consultation through a short form or a WhatsApp button, so bookings arrive organized instead of as scattered calls and messages.",
  },
  {
    question: "Can the website help us collect documents from clients?",
    answer:
      "Yes. The site can carry downloadable document checklists and a structured enquiry form, so clients arrive with the right documents and your team spends less time chasing them.",
  },
  {
    question: "How does a website help during tax season?",
    answer:
      "A tax-season-ready site answers the repeat questions on the page itself, so your team fields fewer basic calls and more serious enquiries. Deadline pages can also rank for seasonal searches.",
  },
  {
    question: "Why do we need a website when clients can use ClearTax?",
    answer:
      "ClearTax sells filing software. Your website sells your firm: your advice, your team, and your relationship with the client. Clients who want a CA rather than an app choose the firm they trust.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard CA website takes 1 to 2 weeks from content approval. If you need it live before a deadline season, mention your date and we will plan around it.",
  },
];

const content: IndustryPageContent = {
  variant: "checklist",
  eyebrow: "CAs & accountants",
  title: pageTitle,
  titleHighlight: "CAs",
  intro:
    "Turn compliance season into a client pipeline. A CA website that explains your services in plain language, shows the team behind the work, and makes consultation booking easy.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "ledgerpro-demo.in",
  mockupKind: "checklist",
  mockupTitle: "LedgerPro Associates (sample)",
  mockupItems: [
    { title: "ITR filing", meta: "Due July 31", tag: "Due" },
    { title: "GST returns", meta: "GSTR-1, GSTR-3B", tag: "Monthly" },
    { title: "Audit", meta: "Statutory & tax audit" },
  ],
  mockupCta: "Get a callback",
  floatCards: [
    {
      kind: "checklist",
      title: "March compliance",
      text: "3 filings due (sample)",
    },
    {
      kind: "whatsapp",
      title: "New enquiry",
      text: "Need GST filing help (sample)",
    },
  ],
  ticker: [
    "ITR Filing",
    "GST Returns",
    "Audit & Assurance",
    "Company Registration",
    "Bookkeeping",
    "Tax Planning",
  ],
  journeyHeading: "How clients find a CA",
  journey: [
    {
      title: "Search",
      text: "A business owner searches for a CA nearby and skims the firms that look credible.",
    },
    {
      title: "Verify credibility",
      text: "They check the services, the team, and whether the firm explains things in plain language.",
    },
    {
      title: "Call",
      text: "They call or message the firm that felt trustworthy. WhatsApp is often first.",
    },
  ],
  problemHeading: "Trust is earned before the first call. Most firms have no site to earn it on.",
  problemIntro:
    "Business owners and startups compare CA firms online before they ever reach out. What they find decides who gets the engagement.",
  problems: [
    {
      title: "No presence, no trust",
      text: "When a business owner searches for a CA and finds nothing, they move to the firm with a professional site. Referrals alone no longer carry the full weight.",
    },
    {
      title: "Seasonal rush overwhelms the phone",
      text: "Tax season floods the firm with the same questions on repeat. A website answers the basics before the phone rings, so your team spends time on real work.",
    },
    {
      title: "WhatsApp chaos",
      text: "Enquiries scatter across calls, messages, and forwards. A website collects them into one clear enquiry flow that nothing falls out of.",
    },
    {
      title: "Services that read like a tax code",
      text: "Jargon-heavy service lists confuse business owners. Plain language turns your services into something they can actually hire.",
    },
  ],
  solutionHeading: "A website that turns searches into signed clients",
  solutionIntro:
    "Every element answers a prospect question and moves them one step closer to a consultation.",
  solutions: [
    {
      icon: "shield",
      title: "Trust before the first call",
      text: "Team profiles, qualifications, and a professional presence that reassure prospects before they ever reach out.",
    },
    {
      icon: "file",
      title: "Services in plain language",
      text: "ITR, GST, audit, registration, and bookkeeping explained for business owners, not accountants.",
    },
    {
      icon: "phone",
      title: "Consultation booking, simplified",
      text: "WhatsApp buttons and a short consultation form on every page, so interest becomes a booked conversation in seconds.",
    },
  ],
  structureHeading: "What your CA website includes",
  structureIntro:
    "A proven structure for CA firms. Adjusted to your practice areas and the clients you want.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with consultation CTA",
        "Services overview",
        "Why the firm",
        "Consultation call to action",
      ],
    },
    {
      page: "Services",
      children: [
        "Individual service pages: GST, audit, incorporation, bookkeeping, tax filing",
        "FAQs per service",
      ],
    },
    {
      page: "Team",
      children: ["Partner profiles with qualifications and experience"],
    },
    {
      page: "Insights",
      children: ["Deadline guides", "Compliance articles and updates"],
    },
    {
      page: "Contact",
      children: [
        "Consultation booking form",
        "WhatsApp button",
        "Office map and hours",
      ],
    },
  ],
  featuresHeading: "Everything a CA website needs",
  featuresIntro:
    "A checklist-driven build for client trust and consultation conversion.",
  featureStyle: "checklist",
  features: [
    {
      icon: "check",
      title: "Service pages in plain language",
      text: "ITR, GST, audit, registration, and bookkeeping, explained clearly.",
    },
    {
      icon: "check",
      title: "Team and partner profiles",
      text: "Credentials presented to build confidence before the first meeting.",
    },
    {
      icon: "check",
      title: "Deadline pages",
      text: "Space to publish the due dates your clients actually need.",
    },
    {
      icon: "check",
      title: "Document checklists",
      text: "Downloadable checklists that cut repeat questions in half.",
    },
    {
      icon: "check",
      title: "WhatsApp consultation booking",
      text: "Contact buttons on every page, on the channel clients use.",
    },
    {
      icon: "check",
      title: "Local SEO for Hyderabad",
      text: "Built for local CA searches in your area.",
    },
  ],
  priceBand: "₹15,000",
  priceNote:
    "Starting from ₹15,000 for a complete website. Final quote depends on pages and features. You own the site outright.",
  faqs: FAQS,
  ctaHeading: "Get a CA website proposal within 24 hours",
  ctaText:
    "Tell us about your firm's services and the clients you want to attract. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Website Development Service",
      path: "/services/website-development",
      blurb: "How ProjectKaro builds websites: process, technology, and what you get.",
    },
    {
      name: "Live demo: Verma & Associates",
      path: "/demos/ca-firm",
      blurb: "A working sample CA firm website with services, team, and consultation booking.",
    },
    {
      name: "Websites for Consultants",
      path: "/websites-for-consultants",
      blurb: "Professional websites for consultants and advisory practices in Hyderabad.",
    },
    {
      name: "Websites for Small Businesses",
      path: "/websites-for-small-businesses",
      blurb: "Affordable websites for small and local businesses in Hyderabad.",
    },
    {
      name: "Websites for Startups",
      path: "/websites-for-startups",
      blurb: "Launch-ready websites for startups in Hyderabad that convert visitors.",
    },
    {
      name: "Google Business Profile + website",
      path: "/blogs/google-business-profile-website-link",
      blurb: "How your Google Business Profile and website work together to bring local clients.",
    },
    {
      name: "Websites for Businesses",
      path: "/websites-for-businesses",
      blurb: "The full website track: how ProjectKaro builds sites that bring enquiries.",
    },
  ],
};

export default function CAWebsitesPage() {
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
