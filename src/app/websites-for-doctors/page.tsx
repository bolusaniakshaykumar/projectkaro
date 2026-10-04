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

const PATH = "/websites-for-doctors";
const pageTitle = "Websites for Doctors";
const pageDescription =
  "Professional websites for doctors and specialty practices in Hyderabad. Profiles, treatments, appointment booking and local SEO. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "website for doctors hyderabad",
    "doctor website design hyderabad",
    "clinic website for doctors",
    "medical website development",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a doctor website cost?",
    answer:
      "Doctor websites start from ₹15,000. The final quote depends on the number of pages, features like WhatsApp booking, and content needs. Share your speciality and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard doctor website takes 1 to 2 weeks from content approval. If you need it faster for a clinic launch, mention your date and we will plan around it.",
  },
  {
    question: "Can patients book appointments on WhatsApp?",
    answer:
      "Yes. Every doctor website we build includes a WhatsApp booking button, a click-to-call button, and a short enquiry form, so patients can reach you on the channel they already use.",
  },
  {
    question: "Do you write the medical content for us?",
    answer:
      "We structure and polish the content you provide: your qualifications, specialisations, treatments, and FAQs. You review and approve everything before launch, so the site always says exactly what you want it to say.",
  },
  {
    question: "Will the website rank for my speciality and locality?",
    answer:
      "Yes. We build every doctor site with local SEO fundamentals, structured for searches like your speciality in your locality, aligned with your Google Business Profile, and fast on mobile where most patient searches happen.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. If your current site looks outdated or does not bring enquiries, we rebuild it around appointment conversion while keeping your existing Google presence intact.",
  },
];

const content: IndustryPageContent = {
  variant: "trust",
  eyebrow: "Doctors",
  title: pageTitle,
  titleHighlight: "Doctors",
  intro:
    "A professional online presence for your practice. Patients research their doctor before they book. Give them a website that answers their questions and makes booking effortless.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "cityclinic-demo.in",
  mockupKind: "browser",
  mockupTitle: "City Clinic (sample)",
  mockupItems: [
    {
      title: "Dr. A. Sharma (sample)",
      meta: "MBBS, MD · Cardiology",
      tag: "Verified",
    },
    {
      title: "Book appointment",
      meta: "Today · 4 slots left (sample)",
    },
    {
      title: "Services",
      meta: "ECG, Echo, Consultation",
    },
  ],
  floatCards: [
    {
      kind: "profile",
      title: "Verified doctor profile",
      text: "Qualifications, timings, fees (sample)",
    },
    {
      kind: "rating",
      title: "4.8 · sample rating",
      text: "Sample patient rating",
    },
  ],
  ticker: [
    "Cardiology",
    "Dermatology",
    "Orthopaedics",
    "Paediatrics",
    "Gynaecology",
    "General Medicine",
  ],
  journeyHeading: "How patients choose a doctor",
  journeyIntro:
    "Most patient journeys follow the same three steps. Your website needs to win each one.",
  journey: [
    {
      title: "Search symptoms",
      text: "Patients search their symptom or speciality plus their locality, usually on a phone.",
    },
    {
      title: "Compare credentials",
      text: "They compare qualifications, treatments, and timings across the doctors they find.",
    },
    {
      title: "Book",
      text: "The doctor whose site answers their questions and offers one-tap booking gets the appointment.",
    },
  ],
  problemHeading: "Patients Google you before they trust you.",
  problemIntro:
    "A doctor without a proper website leaves patients to judge them by a directory listing. That is where enquiries leak away.",
  problems: [
    {
      title: "Patients Google you before they trust you",
      text: "Before booking, patients search your name and speciality. If all they find is a bare listing, they pick the doctor whose website answers their questions.",
    },
    {
      title: "Practo and directories treat you like a listing",
      text: "You sit between dozens of other names on a platform you do not control. There is no space for your story, your specialisations, or your way of treating patients.",
    },
    {
      title: "Your qualifications are invisible",
      text: "Years of study, fellowships, and registrations are reduced to a line or two on a directory. Patients cannot see what makes you the right doctor for them.",
    },
    {
      title: "Referrals have nowhere to land",
      text: "A satisfied patient tells a friend your name. The friend searches, finds nothing convincing, and the referral fades away.",
    },
  ],
  problemStyle: "rows",
  solutionHeading: "A website that builds trust before the first visit",
  solutionIntro:
    "Every element answers a patient question and moves them one step closer to booking an appointment.",
  solutions: [
    {
      icon: "shield",
      title: "A profile that reads like a reputation",
      text: "Qualifications, specialisations, experience, and registrations presented professionally, so patients feel they know their doctor before the first visit.",
    },
    {
      icon: "calendar",
      title: "Appointment paths everywhere",
      text: "WhatsApp booking, click-to-call, and a short enquiry form on every page. The path from interest to appointment takes seconds.",
    },
    {
      icon: "chat",
      title: "Condition and treatment pages",
      text: "Clear pages for what you treat, the procedures you do, and answers to the questions patients always ask. They arrive informed and ready to book.",
    },
  ],
  solutionLayout: "bento",
  structureHeading: "What your doctor website includes",
  structureIntro:
    "A proven structure for doctors and specialty practices. Adjusted to your speciality and the way your patients find you.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with booking CTA",
        "Specialities overview",
        "About the doctor snippet",
        "Patient reviews",
      ],
    },
    {
      page: "About the Doctor",
      children: [
        "Qualifications and experience",
        "Registrations and memberships",
      ],
    },
    {
      page: "Treatments & Conditions",
      children: [
        "Conditions you treat",
        "Procedures with explanations",
        "FAQs per condition",
      ],
    },
    {
      page: "Patient Info",
      children: ["Consultation fees", "Timings and location", "General FAQs"],
    },
    {
      page: "Contact & Appointments",
      children: ["Enquiry form", "WhatsApp booking button", "Map and directions"],
    },
  ],
  featuresHeading: "Everything a doctor website needs",
  featuresIntro:
    "Built for patient trust and appointment conversion, not just to look nice.",
  features: [
    {
      icon: "phone",
      title: "Mobile-first design",
      text: "Fast on budget phones, where most patient searches happen.",
    },
    {
      icon: "chat",
      title: "WhatsApp booking",
      text: "A booking button on every page, for the channel patients already use.",
    },
    {
      icon: "shield",
      title: "Doctor profile with credentials",
      text: "Qualifications, specialisations, and registrations presented professionally.",
    },
    {
      icon: "file",
      title: "Treatment and condition pages",
      text: "Clear explanations of what you treat and the procedures you do.",
    },
    {
      icon: "pin",
      title: "Timings and location",
      text: "Google Maps embed with consultation hours and fee information.",
    },
    {
      icon: "search",
      title: "Local SEO",
      text: "Structured for searches like your speciality in your locality.",
    },
    {
      icon: "clock",
      title: "Click-to-call header",
      text: "One tap to call your clinic from the header on every page.",
    },
    {
      icon: "star",
      title: "Reviews section",
      text: "Patient reviews that build trust before the first visit.",
    },
  ],
  featureStyle: "grid",
  priceBand: "₹15,000",
  pricePoints: [
    "Doctor profile with qualifications and registrations",
    "Treatment and condition pages for your speciality",
    "WhatsApp booking plus click-to-call on every page",
    "Local SEO for your speciality and locality",
  ],
  priceNote:
    "Starting from ₹15,000 for a complete website. Final quote depends on pages and features. You own the site outright.",
  processHeading: "From enquiry to launch",
  processSteps: [
    {
      title: "Tell us your speciality",
      text: "Share your qualifications, treatments, and clinic timings in a short call or form.",
    },
    {
      title: "We draft your site",
      text: "ProjectKaro structures your profile, treatment pages, and booking paths within days.",
    },
    {
      title: "You review and approve",
      text: "You check every word. Nothing about your practice goes live without your approval.",
    },
    {
      title: "Launch in 1 to 2 weeks",
      text: "Your site goes live with local SEO, maps, and booking buttons in place.",
    },
  ],
  faqs: FAQS,
  ctaHeading: "Get a doctor website proposal within 24 hours",
  ctaText:
    "Tell us your speciality and a little about your practice. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Website Development Service",
      path: "/services/website-development",
      blurb: "How ProjectKaro builds websites: process, technology, and what you get.",
    },
    {
      name: "Live demo: GlowSkin Clinic",
      path: "/demos/dermatologist",
      blurb: "A working sample clinic website with services, doctor profiles, and online booking.",
    },
    {
      name: "Websites for Dental Clinics",
      path: "/websites-for-dental-clinics",
      blurb: "Appointment-focused websites for dental clinics in Hyderabad.",
    },
    {
      name: "Websites for Consultants",
      path: "/websites-for-consultants",
      blurb: "Professional websites for consultants and independent practitioners.",
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

export default function DoctorsPage() {
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
