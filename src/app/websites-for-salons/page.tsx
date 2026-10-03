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

const PATH = "/websites-for-salons";
const pageTitle = "Websites for Salons";
const pageDescription =
  "Salon and spa websites in Hyderabad that fill appointment slots. Services with prices, stylists, WhatsApp booking and local SEO. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "salon website hyderabad",
    "spa website design",
    "beauty parlour website",
    "salon booking website",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a salon website cost?",
    answer:
      "Salon websites start from ₹15,000. The final quote depends on the number of pages, features like WhatsApp booking, and content needs. Share your services and location and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard salon website takes 1 to 2 weeks from content approval. If you need it faster for a launch or festive season, mention your date and we will plan around it.",
  },
  {
    question: "Can customers book appointments on WhatsApp?",
    answer:
      "Yes. Every salon website we build includes a WhatsApp booking button, a click-to-call button, and a short booking form, so customers can reach you on the channel they already use.",
  },
  {
    question: "Can we update prices and offers ourselves?",
    answer:
      "Yes. We set up your services and price list so you can update prices, add offers, and change packages yourself, with simple guidance from us. No technical skills needed.",
  },
  {
    question: "Will nearby customers find us on Google?",
    answer:
      "Yes. We build every salon site with local SEO fundamentals, structured for searches like salon near me in your locality, aligned with your Google Business Profile, and fast on mobile.",
  },
  {
    question: "Do you redesign existing salon websites?",
    answer:
      "Yes. If your current site looks outdated or does not bring bookings, we rebuild it around appointment conversion while keeping your existing Google presence intact.",
  },
];

const content: IndustryPageContent = {
  variant: "showcase",
  eyebrow: "Salons",
  title: pageTitle,
  titleHighlight: "Salons",
  intro:
    "Fill your appointment slots on autopilot. A salon website with your services and prices, stylist profiles, and WhatsApp booking that works while you work.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "glowstudio-demo.in",
  mockupKind: "browser",
  mockupTitle: "Glow Studio (sample)",
  mockupItems: [
    {
      title: "Haircuts & Styling",
      meta: "For all hair types",
      tag: "Popular",
    },
    {
      title: "Bridal Packages",
      meta: "Trial included",
    },
    {
      title: "Facials",
      meta: "Skin consultation free",
    },
  ],
  mockupCta: "Book appointment",
  floatCards: [
    {
      kind: "booking",
      title: "Hair spa · Sat 11 AM",
      text: "Sample booking",
    },
    {
      kind: "rating",
      title: "4.9 · sample rating",
      text: "Sample client rating",
    },
  ],
  ticker: [
    "Haircuts & Styling",
    "Facials",
    "Bridal Packages",
    "Manicure & Pedicure",
    "Hair Spa",
    "Waxing",
  ],
  journeyHeading: "How clients pick a salon",
  journeyIntro:
    "A new client chooses a salon in minutes. Your website needs to win each step.",
  journey: [
    {
      title: "Search",
      text: "Clients search for a salon near me or a service in their locality, usually on a phone.",
    },
    {
      title: "Compare work",
      text: "They compare galleries, prices, and reviews across the salons they find.",
    },
    {
      title: "Book",
      text: "The salon with clear prices and one-tap booking gets the appointment.",
    },
  ],
  beforeAfter: {
    heading: "Instagram shows your work. A website books it.",
    intro: "Drag to compare.",
    beforeLabel: "Before: Instagram only",
    afterLabel: "After: Your own website",
    caption: "Same salon. Different first impression. (sample concept)",
  },
  problemHeading: "Your chairs are great. Your online presence is empty.",
  problemIntro:
    "When someone searches for a salon in their locality, the business with the clearest website wins the appointment.",
  problems: [
    {
      title: "Bookings depend on phone calls and DMs",
      text: "Every appointment starts with a call or an Instagram message, which means missed bookings whenever you are busy with a client.",
    },
    {
      title: "Price shoppers have no price list",
      text: "Without rates online, customers who compare prices simply move on to the salon that shows them. You never even get the enquiry.",
    },
    {
      title: "Your work lives only on Instagram",
      text: "Your best transformations sit in a feed that new customers may never find. There is no lasting home for your portfolio that search engines can show.",
    },
    {
      title: "New locality, zero discovery",
      text: "People who move nearby search for salons in the area. Without a website and local SEO, your salon is invisible to them.",
    },
  ],
  problemStyle: "rows",
  solutionHeading: "A website that fills your appointment slots",
  solutionIntro:
    "Every element answers a customer question and moves them one step closer to booking.",
  solutions: [
    {
      icon: "camera",
      title: "A gallery that wins clients",
      text: "Your transformations, presented beautifully, so new visitors can see the quality of your work before they ever visit.",
    },
    {
      icon: "calendar",
      title: "WhatsApp booking in one tap",
      text: "A booking button on every page, so a customer can reserve a slot while you are busy with another client.",
    },
    {
      icon: "sparkle",
      title: "Services and prices, clearly listed",
      text: "Hair, skin, nails, and spa packages with transparent pricing, so customers book with confidence instead of moving on.",
    },
  ],
  solutionLayout: "bento",
  structureHeading: "What your salon website includes",
  structureIntro:
    "A proven structure for salons and spas. Adjusted to your services and the way your customers find you.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with booking CTA",
        "Signature services",
        "Reviews and highlights",
      ],
    },
    {
      page: "Services & Pricing",
      children: ["Hair, skin, nails services", "Spa packages with prices"],
    },
    {
      page: "Stylists",
      children: ["Stylist profiles with specialisations"],
    },
    {
      page: "Gallery",
      children: ["Transformations", "Salon interiors"],
    },
    {
      page: "Book Appointment",
      children: ["WhatsApp booking button", "Booking form", "Hours and map"],
    },
  ],
  featuresHeading: "Everything a salon website needs",
  featuresIntro: "Built for appointment bookings, not just to look pretty.",
  features: [
    {
      icon: "camera",
      title: "Gallery of transformations",
      text: "Before and after work presented to win new clients.",
    },
    {
      icon: "calendar",
      title: "WhatsApp booking",
      text: "One-tap booking button on every page.",
    },
    {
      icon: "sparkle",
      title: "Services and prices",
      text: "Transparent price list for hair, skin, nails, and packages.",
    },
    {
      icon: "users",
      title: "Stylist profiles",
      text: "Showcase your stylists so clients request their favourite by name.",
    },
    {
      icon: "pin",
      title: "Hours and location",
      text: "Maps, timings, and directions for nearby clients.",
    },
    {
      icon: "search",
      title: "Local SEO",
      text: "Built for salon near me searches in your locality.",
    },
  ],
  featureStyle: "grid",
  priceBand: "₹15,000",
  pricePoints: [
    "Services and pricing pages for all your treatments",
    "Stylist profiles that build client loyalty",
    "WhatsApp booking on every page",
    "Local SEO for your locality",
  ],
  priceNote:
    "Starting from ₹15,000 for a complete website. Final quote depends on pages and features. You own the site outright.",
  processHeading: "From enquiry to launch",
  processSteps: [
    {
      title: "Share your services and prices",
      text: "Send your service list, prices, and the best photos of your work and interiors.",
    },
    {
      title: "We design the showcase",
      text: "ProjectKaro builds your gallery, pricing pages, and booking flow around your brand.",
    },
    {
      title: "You review and approve",
      text: "You check the services, prices, and photos. Nothing goes live without your approval.",
    },
    {
      title: "Launch in 1 to 2 weeks",
      text: "Your site goes live with local SEO, maps, and booking buttons in place.",
    },
  ],
  faqs: FAQS,
  ctaHeading: "Get a salon website proposal within 24 hours",
  ctaText:
    "Tell us your services and location. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Websites for Dental Clinics",
      path: "/websites-for-dental-clinics",
      blurb: "Appointment-focused websites for dental clinics in Hyderabad.",
    },
    {
      name: "Websites for Restaurants",
      path: "/websites-for-restaurants",
      blurb: "Menu, reservations, and local SEO for restaurants and cafes.",
    },
    {
      name: "Websites for Small Businesses",
      path: "/websites-for-small-businesses",
      blurb: "Affordable websites for local businesses in Hyderabad.",
    },
    {
      name: "Website vs Instagram for Hyderabad Businesses",
      path: "/blogs/website-vs-instagram-hyderabad",
      blurb: "Why a website beats Instagram alone for Hyderabad businesses.",
    },
    {
      name: "Websites for Businesses",
      path: "/websites-for-businesses",
      blurb: "The full website track: how ProjectKaro builds sites that bring enquiries.",
    },
  ],
};

export default function SalonsPage() {
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
