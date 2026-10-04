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

const PATH = "/websites-for-restaurants";
const pageTitle = "Websites for Restaurants";
const pageDescription =
  "Restaurant websites in Hyderabad that turn searches into table bookings and orders. Menu, reservations, gallery and local SEO. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "restaurant website hyderabad",
    "website for restaurants hyderabad",
    "cafe website design",
    "food business website",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a restaurant website cost?",
    answer:
      "Restaurant websites start from ₹25,000. The final quote depends on the number of pages, features like online reservations, and content needs. Share your cuisine and location and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "Can customers book a table or order on WhatsApp?",
    answer:
      "Yes. Every restaurant website we build includes a WhatsApp button for orders and reservations, a click-to-call button, and a reservation form, so customers can reach you instantly.",
  },
  {
    question: "Can we update the menu ourselves?",
    answer:
      "Yes. We set up the menu so you can add, remove, or change items and prices yourself, and we give you simple guidance on how to do it. No technical skills needed.",
  },
  {
    question: "We are already on Swiggy and Zomato. Why do we need our own website?",
    answer:
      "Those platforms are great for discovery, but they take a commission on every order and own the customer relationship. Your own website captures direct bookings and orders with zero commission, and it is the one place where your brand, story, and full menu live exactly the way you want them.",
  },
  {
    question: "Do you do food photography?",
    answer:
      "No. We design around the photos you already have, or guide you on the kinds of shots that work best. Good phone photos of your dishes and interiors are usually enough.",
  },
  {
    question: "Will the website show up on Google for restaurants near me?",
    answer:
      "Yes. We build every restaurant site with local SEO fundamentals: menu structured for search, hours, location, Google Business Profile alignment, and fast mobile performance.",
  },
];

const content: IndustryPageContent = {
  variant: "menu",
  eyebrow: "Restaurants",
  title: pageTitle,
  titleHighlight: "Restaurants",
  intro:
    "Turn hungry searches into booked tables. A restaurant website with your menu, photos that sell the food, and one-tap table booking or ordering.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "tandoorinights-demo.in",
  mockupKind: "menu",
  mockupTitle: "Tandoori Nights (sample menu)",
  mockupItems: [
    {
      title: "Butter Chicken",
      meta: "Creamy tomato gravy",
      tag: "₹320",
    },
    {
      title: "Chicken Biryani",
      meta: "Dum style, serves 2",
      tag: "₹280",
    },
    {
      title: "Paneer Tikka",
      meta: "Tandoor smoked",
      tag: "₹240",
    },
  ],
  mockupCta: "Reserve a table",
  floatCards: [
    {
      kind: "booking",
      title: "Table for 4 · Tonight 8 PM",
      text: "Sample reservation",
    },
    {
      kind: "rating",
      title: "4.7 · sample rating",
      text: "Sample diner rating",
    },
  ],
  ticker: [
    "Biryani",
    "Butter Chicken",
    "Masala Dosa",
    "Paneer Tikka",
    "Kebabs",
    "Filter Coffee",
  ],
  journeyHeading: "How diners find you",
  journeyIntro:
    "A diner decides where to eat in minutes. Your website needs to win each step.",
  journey: [
    {
      title: "Discover",
      text: "Hungry diners search for restaurants near me or a cuisine in your area.",
    },
    {
      title: "Crave",
      text: "They compare menus and photos. The restaurant that looks delicious wins the decision.",
    },
    {
      title: "Reserve",
      text: "The site with a simple one-tap booking button gets the table, not the one buried on a platform.",
    },
  ],
  problemHeading: "Hungry customers search. Most restaurants are found on someone else's platform.",
  problemIntro:
    "When someone searches for a place to eat, the restaurant with the best direct experience wins the table.",
  problems: [
    {
      title: "Zomato owns your customer relationship",
      text: "You pay commission on every order and never get the customer data. The platform decides how your restaurant appears, and to whom.",
    },
    {
      title: "Your menu lives as a blurry PDF on WhatsApp",
      text: "Customers forward a compressed, outdated menu that is hard to read and impossible to search. It does not do your food justice.",
    },
    {
      title: "Instagram looks good but does not take bookings",
      text: "Great food photos build interest, but there is no clear next step. Followers scroll past because booking feels like effort.",
    },
    {
      title: "Tourists and newcomers cannot find you",
      text: "People new to the area search for restaurants nearby. Without a proper website and local SEO, your restaurant is invisible to them.",
    },
  ],
  problemStyle: "rows",
  solutionHeading: "A website that turns searches into booked tables",
  solutionIntro:
    "Every element answers a diner question and moves them one step closer to booking or ordering.",
  solutions: [
    {
      icon: "menu",
      title: "A menu that sells",
      text: "Your full menu, searchable by category, with photos and prices, always current. Customers decide what to order before they walk in.",
    },
    {
      icon: "phone",
      title: "Direct table booking and ordering",
      text: "A reservation form plus WhatsApp booking, with no commission on any of it. The table fills, and the customer relationship is yours.",
    },
    {
      icon: "pin",
      title: "Found by nearby diners",
      text: "Structured for restaurants near me searches in your area, with hours, directions, and your Google Business Profile aligned.",
    },
  ],
  solutionLayout: "steps",
  structureHeading: "What your restaurant website includes",
  structureIntro:
    "A proven structure for restaurants and cafes. Adjusted to your cuisine and the way your customers find you.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with booking CTA",
        "Cuisine and signature dishes",
        "Highlights and reviews",
      ],
    },
    {
      page: "Menu",
      children: ["Menu categories", "Items with photos and prices"],
    },
    {
      page: "Gallery",
      children: ["Food", "Interiors", "Events"],
    },
    {
      page: "About",
      children: ["Your story", "Chef profile", "Interiors"],
    },
    {
      page: "Reservations & Contact",
      children: [
        "Table reservation form",
        "WhatsApp booking button",
        "Hours, map, and private events info",
      ],
    },
  ],
  featuresHeading: "Everything a restaurant website needs",
  featuresIntro: "Built for bookings and orders, not just to look appetising.",
  features: [
    {
      icon: "menu",
      title: "Online menu with categories",
      text: "Searchable menu with photos and prices, always current.",
    },
    {
      icon: "phone",
      title: "Table reservation",
      text: "Reservation form plus one-tap call to book a table.",
    },
    {
      icon: "chat",
      title: "WhatsApp ordering",
      text: "Order and reservation button on every page, zero commission.",
    },
    {
      icon: "camera",
      title: "Photo gallery",
      text: "Food and interiors presented so visitors start craving before they arrive.",
    },
    {
      icon: "pin",
      title: "Hours and location",
      text: "Google Maps embed with directions and opening hours.",
    },
    {
      icon: "search",
      title: "Local SEO",
      text: "Structured for restaurants near me searches in your area.",
    },
  ],
  featureStyle: "grid",
  priceBand: "₹25,000",
  pricePoints: [
    "Full online menu with categories, photos, and prices",
    "Table reservation form plus WhatsApp ordering",
    "Gallery that sells your food and interiors",
    "Local SEO for your area and cuisine",
  ],
  priceNote:
    "Starting from ₹25,000 for a complete website. Final quote depends on pages and features. You own the site outright.",
  processHeading: "From enquiry to launch",
  processSteps: [
    {
      title: "Share your menu and photos",
      text: "Send your menu items, prices, and the best photos of your food and interiors.",
    },
    {
      title: "We build the menu experience",
      text: "ProjectKaro designs your menu pages, gallery, and booking flow around your cuisine.",
    },
    {
      title: "You review and approve",
      text: "You check the menu, prices, and timings. Nothing goes live without your approval.",
    },
    {
      title: "Launch in 2 to 3 weeks",
      text: "Your site goes live with local SEO, maps, and reservation buttons in place.",
    },
  ],
  faqs: FAQS,
  ctaHeading: "Get a restaurant website proposal within 24 hours",
  ctaText:
    "Tell us your cuisine, location, and seating capacity. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Website Development Service",
      path: "/services/website-development",
      blurb: "How ProjectKaro builds websites: process, technology, and what you get.",
    },
    {
      name: "Live demo: Spice Route Kitchen",
      path: "/demos/restaurant",
      blurb: "A working sample restaurant website with menu, reservations, and location info.",
    },
    {
      name: "Websites for Salons & Spas",
      path: "/websites-for-salons",
      blurb: "Booking-focused websites for salons, spas, and beauty clinics.",
    },
    {
      name: "Websites for Small Businesses",
      path: "/websites-for-small-businesses",
      blurb: "Affordable websites for local businesses in Hyderabad.",
    },
    {
      name: "Websites for Startups",
      path: "/websites-for-startups",
      blurb: "Launch-ready websites for startups in Hyderabad.",
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

export default function RestaurantsPage() {
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
