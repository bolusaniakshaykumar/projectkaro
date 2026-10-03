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

const PATH = "/websites-for-small-businesses";
const pageTitle = "Websites for Small Businesses";
const pageDescription =
  "Affordable websites for small businesses in Hyderabad. Services, gallery, reviews and WhatsApp enquiries that turn searches into customers. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "small business website hyderabad",
    "affordable website hyderabad",
    "website for local business",
    "business website price hyderabad",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a small business website cost?",
    answer:
      "Small business websites start from ₹15,000. The final quote depends on the number of pages, features like a gallery or quote form, and content needs. Share your requirements and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "Do I really need a website for my small business?",
    answer:
      "Yes, if customers search for what you sell. A website is your owned home base: your services, your reviews, your enquiry flow, and your Google ranking, all in one place that no platform can take away.",
  },
  {
    question: "I have a Google Business Profile. Is that not enough?",
    answer:
      "A Business Profile gets you on the map. A website gets you the customer. The profile starts the search, and the website closes it with your story, your photos, your reviews, and an enquiry button.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard small business website goes live in 1 to 2 weeks from content approval. If you need it for a launch or festival season, mention your date and we will plan around it.",
  },
  {
    question: "Can I update the website myself?",
    answer:
      "Yes. You can update text, photos, and prices yourself without technical help, and we show you how at handover. If you prefer, we can handle updates for you.",
  },
  {
    question: "Can customers message me on WhatsApp?",
    answer:
      "Yes. Every small business website we build includes a WhatsApp enquiry button and tap-to-chat links, so customers can reach you on the channel they already use.",
  },
];

const content: IndustryPageContent = {
  variant: "compact",
  eyebrow: "Small businesses",
  title: pageTitle,
  titleHighlight: "Small Businesses",
  intro:
    "Get found, look credible, get enquiries. An affordable business website with your services, your work, your reviews, and WhatsApp enquiries, built for how local customers actually search.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "yourbusiness-demo.in",
  mockupKind: "none",
  ticker: [
    "Bakeries",
    "Boutiques",
    "Kirana Stores",
    "Cafes",
    "Repair Shops",
    "Pharmacies",
  ],
  journeyHeading: "How customers find you",
  journey: [
    {
      title: "Search",
      text: "A customer nearby searches for what you sell and skims the businesses that show up.",
    },
    {
      title: "Compare",
      text: "They compare services, photos, reviews, and prices across websites and listings.",
    },
    {
      title: "Visit or call",
      text: "The business that looked credible gets the call, the WhatsApp message, or the visit.",
    },
  ],
  problemHeading: "Customers search first. Most small businesses are invisible.",
  problemIntro:
    "When someone in Hyderabad needs a local service, they search. What they find decides who gets the call.",
  problems: [
    {
      title: "Customers search, competitors appear",
      text: "Competitors show up on Google with full websites while you are nowhere to be found. The enquiry goes to whoever looks established.",
    },
    {
      title: "No website, no trust",
      text: "People check online before calling any business now. Without a website, many assume the business is too small to be serious.",
    },
    {
      title: "A listing alone cannot sell",
      text: "A Google listing with a phone number cannot show your work, explain your services, or carry your story. Customers cannot compare, so they pick someone else.",
    },
    {
      title: "Every enquiry starts from zero",
      text: "The same questions on every call: what do you offer, what does it cost, where are you. A website answers them before the phone rings.",
    },
  ],
  solutionHeading: "A website that turns searches into customers",
  solutionIntro:
    "Every element answers a customer question and moves them one step closer to an enquiry.",
  solutions: [
    {
      icon: "globe",
      title: "Found on Google",
      text: "Service and locality pages built for how local customers search, so you appear when someone nearby needs exactly what you offer.",
    },
    {
      icon: "phone",
      title: "Credibility in one visit",
      text: "Your services, work photos, and reviews on one page, so visitors understand and trust the business in a single visit.",
    },
    {
      icon: "chat",
      title: "Enquiries on WhatsApp",
      text: "Tap-to-chat buttons and a quote form on every page. Customers reach out in seconds on the channel they already use.",
    },
  ],
  structureHeading: "What your small business website includes",
  structureIntro:
    "A proven structure for small businesses. Adjusted to what you sell and how your customers find you.",
  hideStructure: true,
  structure: [
    {
      page: "Home",
      children: [
        "Hero with enquiry CTA",
        "Services overview",
        "Why choose us",
        "Customer reviews",
      ],
    },
    {
      page: "Services",
      children: ["Individual service detail pages with pricing guidance"],
    },
    {
      page: "Gallery / Our Work",
      children: ["Photo gallery of your work or products"],
    },
    {
      page: "Reviews",
      children: ["Customer reviews and testimonials"],
    },
    {
      page: "Contact",
      children: ["Quote request form", "WhatsApp enquiry button", "Hours and map"],
    },
  ],
  featuresHeading: "Everything a small business website needs",
  featuresIntro:
    "Built to get found, look credible, and bring enquiries, at a price a small business can afford.",
  featureStyle: "grid",
  features: [
    {
      icon: "globe",
      title: "Local SEO basics",
      text: "Set up so customers in your area find you first.",
    },
    {
      icon: "chat",
      title: "WhatsApp enquiry button",
      text: "Tap-to-chat on every page of the site.",
    },
    {
      icon: "phone",
      title: "Click-to-call",
      text: "Tap to call straight from the header.",
    },
    {
      icon: "camera",
      title: "Photo gallery",
      text: "Show your work, your products, or your space.",
    },
    {
      icon: "star",
      title: "Reviews section",
      text: "Your customer reviews, displayed with pride.",
    },
    {
      icon: "pin",
      title: "Map and hours",
      text: "Directions and opening hours that get customers to your door.",
    },
  ],
  priceFirst: true,
  priceBand: "₹15,000",
  pricePoints: [
    "Up to 6 pages",
    "Google Business Profile setup",
    "WhatsApp enquiry button",
    "Local SEO basics",
  ],
  priceNote:
    "Starting from ₹15,000 for a complete website. Final quote depends on pages and features. You own the site outright.",
  faqs: FAQS,
  ctaHeading: "Get a small business website proposal within 24 hours",
  ctaText:
    "Tell us about your business and the area you serve. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Websites for Restaurants",
      path: "/websites-for-restaurants",
      blurb: "Menu, reservations, and delivery-focused websites for restaurants and cafes.",
    },
    {
      name: "Websites for Salons",
      path: "/websites-for-salons",
      blurb: "Booking and gallery websites for salons and beauty businesses.",
    },
    {
      name: "Websites for Dental Clinics",
      path: "/websites-for-dental-clinics",
      blurb: "Appointment and trust-focused websites for dental clinics.",
    },
    {
      name: "Website cost in Hyderabad (2026)",
      path: "/blogs/website-cost-hyderabad-2026",
      blurb: "What a business website costs in Hyderabad in 2026, explained.",
    },
    {
      name: "Websites for Businesses",
      path: "/websites-for-businesses",
      blurb: "The full website track: how ProjectKaro builds sites that bring enquiries.",
    },
  ],
};

export default function SmallBusinessWebsitesPage() {
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
