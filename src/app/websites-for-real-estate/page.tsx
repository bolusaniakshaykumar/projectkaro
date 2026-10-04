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

const PATH = "/websites-for-real-estate";
const pageTitle = "Websites for Real Estate";
const pageDescription =
  "Real estate websites in Hyderabad that turn property searches into site-visit enquiries. Listings, agent profile, WhatsApp enquiries and local SEO. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "real estate website hyderabad",
    "website for realtors",
    "property dealer website",
    "real estate agent website design",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a real estate website cost?",
    answer:
      "Real estate websites start from ₹25,000. The final quote depends on the number of listings, pages, and features like filters or a self-update listings panel. Share your requirements and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard real estate website takes 2 to 3 weeks from content approval, depending on how many listings and area pages it includes. If you need it faster for a launch, mention your date and we will plan around it.",
  },
  {
    question: "Can buyers enquire about a specific listing on WhatsApp?",
    answer:
      "Yes. Every listing carries its own WhatsApp enquire button, pre-filled with the property reference, so you know exactly which listing the buyer is asking about.",
  },
  {
    question: "Can we add new listings ourselves?",
    answer:
      "Yes. We build a simple process for adding listings, photos, and prices without touching code, and we show you how it works before handover. You can also ask us to update listings for you.",
  },
  {
    question: "Why have my own website when I already list on 99acres and other portals?",
    answer:
      "Portals charge per lead and put your listings next to dozens of competing agents. Your own website collects enquiries directly with zero per-lead cost, presents your listings exactly the way you want, and builds your personal brand so buyers come to you first.",
  },
  {
    question: "Will the website rank for the localities I serve?",
    answer:
      "Yes. We create dedicated pages for each area you serve, with location-specific content and local SEO setup, so buyers searching for properties in those localities can find you on Google.",
  },
];

const content: IndustryPageContent = {
  variant: "listings",
  eyebrow: "Real estate",
  title: pageTitle,
  titleHighlight: "Real Estate",
  intro:
    "Turn property searches into site visits. A professional website with your listings, your track record, and instant WhatsApp enquiries, so buyers contact you first.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "cityhomes-demo.in",
  mockupKind: "listings",
  mockupTitle: "City Homes (sample listings)",
  mockupItems: [
    {
      title: "2BHK · Kondapur",
      meta: "1100 sq.ft · East facing",
      tag: "₹85 L (sample)",
    },
    {
      title: "3BHK · Gachibowli",
      meta: "1650 sq.ft · Gated",
      tag: "₹1.2 Cr (sample)",
    },
    {
      title: "Plot · Shadnagar",
      meta: "200 sq.yd · Clear title",
      tag: "₹40 L (sample)",
    },
  ],
  mockupCta: "Book site visit",
  floatCards: [
    {
      kind: "booking",
      title: "Site visit · Sun 11 AM",
      text: "Sample enquiry",
    },
    {
      kind: "whatsapp",
      title: "New enquiry",
      text: "Is the Kondapur 2BHK available? (sample)",
    },
  ],
  ticker: [
    "Kondapur",
    "Gachibowli",
    "Miyapur",
    "Kukatpally",
    "LB Nagar",
    "Dilsukhnagar",
  ],
  journeyHeading: "How buyers find property",
  journeyIntro:
    "Buyers shortlist properties and agents online long before they pick up the phone. Your website needs to win each step.",
  journey: [
    {
      title: "Search",
      text: "Buyers search for properties in a specific locality, with a budget in mind.",
    },
    {
      title: "Shortlist",
      text: "They compare listings and agents. The listings presented best, and the agent who looks most credible, make the shortlist.",
    },
    {
      title: "Visit",
      text: "One tap to enquire on WhatsApp, and the buyer is scheduling a site visit with you.",
    },
  ],
  problemHeading: "Buyers search online. Most agents have nothing to show.",
  problemIntro:
    "Property is a high-trust purchase. Buyers shortlist agents online long before they pick up the phone.",
  problems: [
    {
      title: "Your listings are buried in portals",
      text: "On a portal you pay per lead and compete with fifty other agents for the same buyer. Your name is one small card among hundreds, and the enquiry goes to whoever responds fastest, not to you.",
    },
    {
      title: "Buyers cannot verify you",
      text: "A property purchase is a big ticket decision. Without a professional presence of your own, buyers have no way to check your experience, your areas, or your track record, so the trust gap costs you the call.",
    },
    {
      title: "WhatsApp forwards look unprofessional",
      text: "Listings shared as text messages and photo forwards get lost in chat threads and look like every other broker's. Serious buyers remember the agent who presented the property well.",
    },
    {
      title: "Your best deals never get seen",
      text: "Exclusive listings and pre-launch opportunities deserve a showcase, not a story that expires in 24 hours. Without your own platform, your best inventory stays invisible.",
    },
  ],
  problemStyle: "rows",
  solutionHeading: "A website that sells the property before the visit",
  solutionIntro:
    "Every element answers a buyer question and moves them one step closer to a site visit.",
  solutions: [
    {
      icon: "home",
      title: "Listings that sell the property",
      text: "Photo-led listing cards with price, location, carpet area, amenities, and filters by budget, type, and locality. Buyers shortlist themselves and arrive informed.",
    },
    {
      icon: "pin",
      title: "An agent profile buyers trust",
      text: "Your experience, areas served, and past transactions presented professionally. On a big ticket purchase, the agent's credibility is half the sale.",
    },
    {
      icon: "phone",
      title: "Instant enquiry on WhatsApp",
      text: "Every listing carries its own WhatsApp enquire button, pre-filled with the property reference. One tap and the buyer is talking to you, with context.",
    },
  ],
  solutionLayout: "bento",
  structureHeading: "Property page anatomy",
  structureIntro:
    "A proven structure for real estate professionals. Adjusted to your listings and the areas you serve.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with enquiry CTA",
        "Featured listings",
        "Areas served",
        "Why work with this agent",
      ],
    },
    {
      page: "Listings",
      children: [
        "Listing cards with photos, price, and details",
        "Filters: location, budget, property type",
      ],
    },
    {
      page: "About the Agent",
      children: ["Agent profile", "Areas served", "Experience and track record"],
    },
    {
      page: "Services",
      children: ["Buying assistance", "Selling assistance", "Rental assistance"],
    },
    {
      page: "Contact",
      children: ["Enquiry form", "WhatsApp button", "Office map and directions"],
    },
  ],
  featuresHeading: "Everything a real estate website needs",
  featuresIntro:
    "Built to win buyer trust and turn searches into site-visit enquiries.",
  features: [
    {
      icon: "home",
      title: "Listings with smart filters",
      text: "Filter by locality, budget, and property type.",
    },
    {
      icon: "chat",
      title: "Per-listing WhatsApp enquire",
      text: "Each listing carries its own WhatsApp button, pre-filled with the property reference.",
    },
    {
      icon: "phone",
      title: "Click-to-call header",
      text: "One tap to reach you from every page.",
    },
    {
      icon: "pin",
      title: "Area pages for local SEO",
      text: "Dedicated pages for each locality you serve.",
    },
    {
      icon: "award",
      title: "Agent profile",
      text: "Experience, areas served, and track record presented professionally.",
    },
    {
      icon: "file",
      title: "Enquiry forms",
      text: "Short forms on every key page that route straight to you.",
    },
  ],
  featureStyle: "grid",
  priceBand: "₹25,000",
  pricePoints: [
    "Listings with photos, prices, and smart filters",
    "Per-listing WhatsApp enquire buttons",
    "Agent profile plus dedicated area pages",
    "Local SEO for the localities you serve",
  ],
  priceNote:
    "Starting from ₹25,000 for a complete website. Final quote depends on pages and features. You own the site outright.",
  processHeading: "From enquiry to launch",
  processSteps: [
    {
      title: "Share your areas and listings",
      text: "Tell us the localities you serve and share your current listings with photos.",
    },
    {
      title: "We build the listings experience",
      text: "ProjectKaro designs your listing pages, filters, and enquiry flow around how buyers search.",
    },
    {
      title: "You review and approve",
      text: "You check every listing, price, and area page. Nothing goes live without your approval.",
    },
    {
      title: "Launch in 2 to 3 weeks",
      text: "Your site goes live with local SEO, maps, and enquiry buttons in place.",
    },
  ],
  faqs: FAQS,
  ctaHeading: "Get a real estate website proposal within 24 hours",
  ctaText:
    "Tell us about the areas you serve and roughly how many listings you want live at launch. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Website Development Service",
      path: "/services/website-development",
      blurb: "How ProjectKaro builds websites: process, technology, and what you get.",
    },
    {
      name: "Live demo: CityNest Properties",
      path: "/demos/real-estate-agent",
      blurb: "A working sample real estate website with listings, agent profiles, and enquiry forms.",
    },
    {
      name: "Websites for Consultants",
      path: "/websites-for-consultants",
      blurb: "Authority-building websites for consultants and advisors in Hyderabad.",
    },
    {
      name: "Websites for Small Businesses",
      path: "/websites-for-small-businesses",
      blurb: "Affordable, enquiry-focused websites for small businesses getting online.",
    },
    {
      name: "Websites for Startups",
      path: "/websites-for-startups",
      blurb: "Launch-ready websites for startups in Hyderabad.",
    },
    {
      name: "Website Before Google Ads",
      path: "/blogs/website-before-google-ads",
      blurb: "Why your website should come before your ad spend.",
    },
    {
      name: "Websites for Businesses",
      path: "/websites-for-businesses",
      blurb: "The full website track: how ProjectKaro builds sites that bring enquiries.",
    },
  ],
};

export default function RealEstatePage() {
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
