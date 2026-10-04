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

const PATH = "/websites-for-dental-clinics";
const pageTitle = "Websites for Dental Clinics";
const pageDescription =
  "Dental clinic websites in Hyderabad that turn Google searches into appointment enquiries. Treatments, doctor profiles, WhatsApp booking and local SEO. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "dental clinic website hyderabad",
    "website for dentists hyderabad",
    "dental clinic website design",
    "dentist website development",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a dental clinic website cost?",
    answer:
      "Clinic websites start from ₹15,000. The final quote depends on the number of pages, features like online appointment booking, and content needs. Share your requirements and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard clinic website takes 1 to 2 weeks from content approval. If you need it faster for a launch or a campaign, mention your date and we will plan around it.",
  },
  {
    question: "Will patients be able to book appointments on WhatsApp?",
    answer:
      "Yes. Every clinic website we build includes a WhatsApp appointment button and an enquiry form, so patients can reach you on the channel they already use.",
  },
  {
    question: "Do you write the treatment content for us?",
    answer:
      "We structure and polish the content you provide: treatment descriptions, doctor profiles, and FAQs. You review and approve everything before launch, so the site always says what you want it to say.",
  },
  {
    question: "Will the website show up on Google when people search for a dentist near me?",
    answer:
      "Yes. We build every clinic site with local SEO fundamentals: proper page structure, location pages, Google Business Profile alignment, and fast mobile performance, which is where most patient searches happen.",
  },
  {
    question: "Can you redesign our existing clinic website?",
    answer:
      "Yes. If your current site looks outdated or does not bring enquiries, we rebuild it around appointment conversion while keeping your existing Google presence intact.",
  },
];

const content: IndustryPageContent = {
  variant: "baseline",
  eyebrow: "Dental clinics",
  title: pageTitle,
  titleHighlight: "Dental Clinics",
  intro:
    "Turn Google searches into appointment enquiries. A clinic website built around your treatments, your doctors, and one-tap booking, so patients choose you before they ever call.",
  heroNote: "Get a clinic website proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  ratingLabel: "4.9 · sample rating",
  mockupDomain: "smilecare-demo.in",
  mockupKind: "browser",
  mockupTitle: "SmileCare Dental (sample)",
  mockupItems: [
    { title: "Root Canal Treatment", meta: "Painless single-visit", tag: "Popular" },
    { title: "Braces & Aligners", meta: "For teens and adults" },
    { title: "Dental Implants", meta: "Permanent tooth replacement" },
  ],
  mockupCta: "Book on WhatsApp",
  floatCards: [
    {
      kind: "whatsapp",
      title: "New appointment request",
      text: "Hi, I need a root canal consultation. (sample)",
    },
    {
      kind: "rating",
      title: "4.9 · sample rating",
      text: "Sample patient rating",
    },
  ],
  ticker: [
    "Root Canal",
    "Braces & Aligners",
    "Dental Implants",
    "Teeth Cleaning",
    "Whitening",
    "Kids Dentistry",
  ],
  journeyHeading: "How patients find you",
  journey: [
    {
      title: "Search",
      text: "Someone searches 'dentist near me' on Google.",
    },
    {
      title: "Compare",
      text: "They compare treatments, reviews, and doctors.",
    },
    {
      title: "Book",
      text: "One tap on WhatsApp books the appointment.",
    },
  ],
  problemHeading: "Patients search first. Most clinics are invisible.",
  problemIntro:
    "When someone in Hyderabad needs a dentist, they search. What they find decides who gets the appointment.",
  problemStyle: "rows",
  problems: [
    {
      title: "Your Google Business Profile does the heavy lifting alone",
      text: "A profile listing with a few photos cannot explain your treatments, your experience, or why a patient should trust you over the clinic next door.",
    },
    {
      title: "Instagram shows work, but does not take bookings",
      text: "Before and after posts build interest, but there is no clear next step. Patients scroll past because booking feels like effort.",
    },
    {
      title: "An outdated site actively loses trust",
      text: "A slow, dated website tells patients the clinic behind it is dated too. They go back to Google and pick a competitor whose site looks modern.",
    },
    {
      title: "Phone-only booking loses the hesitant patient",
      text: "Many patients prefer to enquire on WhatsApp first, especially for treatments they are nervous about. If that option is missing, they never reach out.",
    },
  ],
  solutionHeading: "A website that works like your best receptionist",
  solutionIntro:
    "Every element answers a patient question and moves them one step closer to booking.",
  solutions: [
    {
      icon: "calendar",
      title: "One-tap appointment booking",
      text: "WhatsApp booking button, click-to-call button, and a short enquiry form on every page. The path from interest to appointment takes seconds.",
    },
    {
      icon: "star",
      title: "Doctor profiles that build trust",
      text: "Qualifications, specialisations, and experience presented professionally, so patients feel they know their dentist before the first visit.",
    },
    {
      icon: "chat",
      title: "Treatment pages that answer real questions",
      text: "Clear pages for root canals, braces, implants, and cleanings: what it is, who it is for, how long it takes, and what to expect. Patients arrive informed and ready to book.",
    },
  ],
  structureHeading: "What your clinic website includes",
  structureIntro:
    "A proven structure for dental clinics. Adjusted to your treatments and the way your patients find you.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with appointment CTA",
        "Treatments overview",
        "Why choose the clinic",
        "Patient reviews",
      ],
    },
    {
      page: "Treatments",
      children: [
        "Individual treatment pages (implants, braces, root canal, cleaning, whitening)",
        "FAQs per treatment",
      ],
    },
    {
      page: "Doctors",
      children: ["Doctor profiles with qualifications and specialisations"],
    },
    {
      page: "Gallery",
      children: ["Before and after results", "Clinic interiors"],
    },
    {
      page: "Appointments",
      children: ["Enquiry form", "WhatsApp booking button", "Clinic hours and map"],
    },
  ],
  featuresHeading: "Everything a clinic website needs",
  featuresIntro:
    "Built for patient trust and appointment conversion, not just to look nice.",
  features: [
    {
      icon: "globe",
      title: "Local SEO fundamentals",
      text: "Structured for searches like 'dentist near me' in your locality, with Google Business Profile alignment.",
    },
    {
      icon: "phone",
      title: "Click-to-call",
      text: "A tap-to-call button in the header on every page, ready for mobile patients.",
    },
    {
      icon: "chat",
      title: "WhatsApp booking",
      text: "Appointment requests land straight in your WhatsApp, the channel patients already use.",
    },
    {
      icon: "calendar",
      title: "Appointment form",
      text: "A short enquiry form that captures treatment interest, preferred time, and contact details.",
    },
    {
      icon: "shield",
      title: "Fast and secure",
      text: "Mobile-first, fast on budget phones, and secured with HTTPS from day one.",
    },
    {
      icon: "search",
      title: "Treatment pages that rank",
      text: "One page per treatment with FAQs, so Google and patients both find exactly what they need.",
    },
  ],
  priceBand: "₹15,000",
  pricePoints: [
    "Up to 8 pages",
    "Treatment and doctor profiles",
    "WhatsApp booking button",
    "Local SEO basics",
  ],
  priceNote:
    "Starting price for a complete clinic website. The final quote depends on pages and features. You own the site outright.",
  processHeading: "From first call to launch",
  processSteps: [
    {
      title: "Share requirements",
      text: "Tell us about your treatments, doctors, and timings.",
    },
    {
      title: "Proposal in 24 hours",
      text: "A detailed quote with scope and timeline.",
    },
    {
      title: "Build & review",
      text: "We build, you review every page before launch.",
    },
    {
      title: "Launch & support",
      text: "Go live with support after launch.",
    },
  ],
  faqs: FAQS,
  ctaHeading: "Get a clinic website proposal within 24 hours",
  ctaText:
    "Tell us about your clinic and what you want the website to do. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Website Development Service",
      path: "/services/website-development",
      blurb: "How ProjectKaro builds websites: process, technology, and what you get.",
    },
    {
      name: "Live demo: SmileCare Dental Clinic",
      path: "/demos/dental-clinic",
      blurb: "A working sample dental clinic website with treatments, doctors, and WhatsApp appointment booking.",
    },
    {
      name: "Websites for Doctors",
      path: "/websites-for-doctors",
      blurb: "Professional websites for doctors and specialty practices in Hyderabad, built around patient enquiries.",
    },
    {
      name: "Websites for Salons",
      path: "/websites-for-salons",
      blurb: "Booking-focused websites for salons and beauty clinics, with services, pricing, and WhatsApp bookings.",
    },
    {
      name: "Websites for Small Businesses",
      path: "/websites-for-small-businesses",
      blurb: "Affordable, conversion-first websites for local businesses that need enquiries, not just an online presence.",
    },
    {
      name: "Dental clinic website checklist",
      path: "/blogs/dental-clinic-website-checklist",
      blurb: "The 12 things every dental clinic website needs before launch: pages, booking flow, and local SEO.",
    },
    {
      name: "Websites for Businesses",
      path: "/websites-for-businesses",
      blurb: "The full website track: how ProjectKaro builds sites that bring enquiries.",
    },
  ],
};

export default function DentalClinicsPage() {
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
