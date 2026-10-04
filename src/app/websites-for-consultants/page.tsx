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

const PATH = "/websites-for-consultants";
const pageTitle = "Websites for Consultants";
const pageDescription =
  "Consultant websites in Hyderabad that turn expertise into client enquiries. Services, case studies, thought leadership and booking. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "consultant website hyderabad",
    "website for consultants",
    "business consultant website design",
    "professional website for freelancers",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a consultant website cost?",
    answer:
      "Consultant websites start from ₹15,000. The final quote depends on the number of service pages, whether you want an insights section, and content needs. Share your requirements and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "Should the website be built around my personal brand or a firm name?",
    answer:
      "Start with your name. For an independent consultant, the personal brand carries the trust, so the site is built around you, your background, and your thinking. It can grow into a firm site later as your practice expands.",
  },
  {
    question: "How does the website capture leads?",
    answer:
      "Every key page carries a discovery call booking link, a WhatsApp contact button, and a short enquiry form. Prospects act at the moment of interest instead of waiting for an email thread.",
  },
  {
    question: "Can the website include my articles and thought leadership?",
    answer:
      "Yes. The insights section publishes your articles in an SEO-friendly layout, so your thinking keeps attracting prospects long after each piece is written.",
  },
  {
    question: "Can the website explain how retainers and engagements work?",
    answer:
      "Yes. Your retainer and engagement models can be framed as dedicated service pages, so prospects understand how you work before the discovery call.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard consultant website takes 1 to 2 weeks from content approval. If you have a launch or a campaign coming up, mention your date and we will plan around it.",
  },
];

const content: IndustryPageContent = {
  variant: "editorial",
  eyebrow: "Consultants",
  title: pageTitle,
  titleHighlight: "Consultants",
  intro:
    "Expertise, presented. A consultant website that states what you do, shows that it works, and makes the discovery call effortless.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "advizory-demo.in",
  mockupKind: "none",
  ticker: ["Strategy", "Marketing", "Finance", "HR", "Legal", "Operations"],
  journeyHeading: "How clients vet a consultant",
  journey: [
    {
      title: "Search",
      text: "A referral or a search brings your name up, and the prospect looks you up.",
    },
    {
      title: "Vet expertise",
      text: "They read your services, scan your track record, and decide whether you are the real thing.",
    },
    {
      title: "Call",
      text: "Convinced, they book a discovery call. Your site has already done the selling.",
    },
  ],
  problemHeading: "Clients research experts online. Most consultants are invisible.",
  problemIntro:
    "Referrals start the conversation, but prospects check you online before they commit. What they find decides whether the call happens.",
  problemStyle: "quotes",
  problems: [
    {
      title: "Invisible expertise",
      text: "A LinkedIn profile lists your jobs. It never sells your practice.",
    },
    {
      title: "Referrals that stall",
      text: "A warm introduction opens the door. An empty Google result closes it.",
    },
    {
      title: "The slow first call",
      text: "Booking through email threads loses half your interested prospects before the conversation starts.",
    },
    {
      title: "Priced, not valued",
      text: "Without visible proof, every conversation becomes about your fee instead of your value.",
    },
  ],
  solutionHeading: "A website that positions you as the obvious choice",
  solutionIntro:
    "Restrained, deliberate, and built around the way serious clients make decisions.",
  solutions: [
    {
      icon: "briefcase",
      title: "Positioning that names the problem",
      text: "Your services are framed around client outcomes, so prospects see themselves in every page and conclude you are the obvious choice.",
    },
    {
      icon: "file",
      title: "Proof, on the record",
      text: "Case studies, credentials, and published thinking that establish authority before the first conversation.",
    },
    {
      icon: "phone",
      title: "A call that books itself",
      text: "Calendar links and WhatsApp contact on every key page, so a discovery call is seconds away from any device.",
    },
  ],
  structureHeading: "What your consultant website includes",
  structureIntro:
    "A proven structure for independent consultants. Adjusted to your practice areas and how you win clients.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with positioning statement",
        "Services overview",
        "Proof highlights",
        "Discovery call CTA",
      ],
    },
    {
      page: "Services",
      children: ["Individual service pages framed around client outcomes"],
    },
    {
      page: "About",
      children: ["Background and credentials", "Your approach and method"],
    },
    {
      page: "Insights",
      children: ["Articles and insights section", "SEO-friendly article layout"],
    },
    {
      page: "Contact",
      children: ["Discovery call booking", "WhatsApp contact", "Enquiry form"],
    },
  ],
  featuresHeading: "Everything a consultant website needs",
  featuresIntro:
    "Built to establish authority and turn visits into discovery calls.",
  features: [
    {
      icon: "briefcase",
      title: "Positioning-led homepage",
      text: "Opens with who you serve and the outcome you deliver.",
    },
    {
      icon: "file",
      title: "Service pages",
      text: "Each practice area framed around client outcomes.",
    },
    {
      icon: "award",
      title: "Case study layout",
      text: "Client work presented as proof, not promises.",
    },
    {
      icon: "book",
      title: "Insights section",
      text: "A home for your articles that builds search visibility over time.",
    },
    {
      icon: "calendar",
      title: "Discovery call booking",
      text: "Calendar and WhatsApp contact woven into every key page.",
    },
    {
      icon: "search",
      title: "Personal SEO",
      text: "Built so your name and your niche rank for the right searches.",
    },
  ],
  priceBand: "₹15,000",
  priceNote:
    "Starting from ₹15,000 for a complete website. Final quote depends on pages and features. You own the site outright.",
  faqs: FAQS,
  ctaHeading: "Get a consultant website proposal within 24 hours",
  ctaText:
    "Tell us about your practice area and the kind of clients you want to attract. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Website Development Service",
      path: "/services/website-development",
      blurb: "How ProjectKaro builds websites: process, technology, and what you get.",
    },
    {
      name: "Live demo: Business Consultant",
      path: "/demos/consultant",
      blurb: "A working sample consultant website with services, case approach, and contact flow.",
    },
    {
      name: "Websites for Doctors",
      path: "/websites-for-doctors",
      blurb: "Professional websites for doctors and specialty practices in Hyderabad.",
    },
    {
      name: "Websites for Real Estate",
      path: "/websites-for-real-estate",
      blurb: "Listing and enquiry-focused websites for real estate businesses.",
    },
    {
      name: "Websites for CAs",
      path: "/websites-for-cas",
      blurb: "Trust-building websites for CAs and accountants in Hyderabad.",
    },
    {
      name: "Your website before Google Ads",
      path: "/blogs/website-before-google-ads",
      blurb: "Why your website should exist before you spend a rupee on Google Ads.",
    },
    {
      name: "Websites for Businesses",
      path: "/websites-for-businesses",
      blurb: "The full website track: how ProjectKaro builds sites that bring enquiries.",
    },
  ],
};

export default function ConsultantsPage() {
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
