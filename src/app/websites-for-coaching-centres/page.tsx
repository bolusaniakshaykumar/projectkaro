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

const PATH = "/websites-for-coaching-centres";
const pageTitle = "Websites for Coaching Centres";
const pageDescription =
  "Coaching institute websites in Hyderabad that convert searches into admission enquiries. Courses, faculty, results and WhatsApp admissions. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "coaching institute website hyderabad",
    "website for coaching centre",
    "tuition centre website",
    "education website development",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a coaching centre website cost?",
    answer:
      "Coaching websites start from ₹25,000. The final quote depends on the number of courses, pages, and features like demo class booking or a downloadable brochure. Share your requirements and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "Can students book a demo class through the website?",
    answer:
      "Yes. Every coaching website we build includes a demo class booking form and WhatsApp enquiry buttons on each course page, so parents can book a demo in seconds without calling during working hours.",
  },
  {
    question: "Can we display our fee structure and batch timings?",
    answer:
      "Yes. Each course page can display subjects, batch timings, and the fee structure. At handover we show you a simple update process, so you can change batches and fees yourself with no technical knowledge.",
  },
  {
    question: "Can the website showcase our results and toppers?",
    answer:
      "Yes. A dedicated results section showcases toppers, ranks, and selection counts clearly and honestly. Nothing sells admissions like proof that the teaching works.",
  },
  {
    question: "Why do we need a website when we are listed on Justdial?",
    answer:
      "A listing site rents you space and shows competitor ads right next to your name. Your website is owned by you: your courses, your faculty, your enquiry flow, and your Google ranking, with no distractions.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard coaching website takes 2 to 3 weeks from content approval. If admissions season is approaching, mention your date and we will prioritise the launch.",
  },
];

const content: IndustryPageContent = {
  variant: "courses",
  eyebrow: "Coaching centres",
  title: pageTitle,
  titleHighlight: "Coaching Centres",
  intro:
    "Turn admission-season searches into enrolled students. A coaching website with your courses, faculty, results, and one-tap admission enquiries on WhatsApp.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "rankup-demo.in",
  mockupKind: "courses",
  mockupTitle: "RankUp Academy (sample)",
  mockupItems: [
    { title: "IIT-JEE 2027 Batch", meta: "Admissions open", tag: "Enquire" },
    { title: "NEET Foundation", meta: "Class 11-12", tag: "Enquire" },
    { title: "EAMCET Crash Course", meta: "45 days", tag: "Enquire" },
  ],
  mockupCta: "Book a demo class",
  floatCards: [
    {
      kind: "booking",
      title: "Demo class booked",
      text: "Physics, Sat 10 AM (sample)",
    },
    {
      kind: "whatsapp",
      title: "New enquiry",
      text: "What are the JEE batch fees? (sample)",
    },
  ],
  ticker: ["IIT-JEE", "NEET", "EAMCET", "CA Foundation", "SSC", "Spoken English"],
  journeyHeading: "How students pick a coaching",
  journey: [
    {
      title: "Search",
      text: "Parents search for coaching near them and skim the institutes that show up.",
    },
    {
      title: "Compare results",
      text: "They compare courses, faculty, and results across websites, then shortlist two or three.",
    },
    {
      title: "Demo class",
      text: "They book a demo class at the institute that made the best impression online.",
    },
  ],
  problemHeading: "Parents research online. Most institutes have nothing to show.",
  problemIntro:
    "Admission decisions start with a Google search. What parents find decides whose demo class they book.",
  problems: [
    {
      title: "Admissions lean on banners and word of mouth",
      text: "Banners reach whoever walks past, and word of mouth reaches whoever asks. Neither helps when a parent searches for the best coaching near them at 10 PM.",
    },
    {
      title: "Parents cannot compare you",
      text: "Without course details, batch timings, fee structures, or results visible anywhere, parents shortlist the institute that shows everything. You lose before the first call.",
    },
    {
      title: "Enquiries scatter across calls and DMs",
      text: "Missed calls during class hours, buried DMs, lost paper forms. Every scattered enquiry is a potential admission that goes cold.",
    },
    {
      title: "Demo class booking has no system",
      text: "If booking a demo means calling during working hours and explaining everything twice, parents pick the institute with the simpler path.",
    },
  ],
  solutionHeading: "A website that works like your best counsellor",
  solutionIntro:
    "Three steps, each one moving parents closer to an enrolled student.",
  solutions: [
    {
      icon: "search",
      title: "Enquire",
      text: "Parents find your courses, fees, and batch timings in seconds, then reach out on WhatsApp or the enquiry form.",
    },
    {
      icon: "users",
      title: "Take a demo class",
      text: "One-tap demo class booking turns an interested parent into a student sitting in your classroom.",
    },
    {
      icon: "check",
      title: "Enrol",
      text: "Course pages, faculty profiles, and results do the convincing, so enrolment conversations start warm.",
    },
  ],
  solutionLayout: "steps",
  structureHeading: "What your coaching website includes",
  structureIntro:
    "A proven structure for coaching centres. Adjusted to your courses, branches, and admission flow.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with admission CTA",
        "Courses overview",
        "Results strip",
        "Why choose the institute",
      ],
    },
    {
      page: "Courses",
      children: [
        "Individual course pages",
        "Subjects, batches, timings, and fee structure",
      ],
    },
    {
      page: "Faculty",
      children: ["Faculty profiles with qualifications and experience"],
    },
    {
      page: "Results",
      children: ["Toppers and ranks", "Selection highlights"],
    },
    {
      page: "Admissions",
      children: [
        "Enquiry form",
        "WhatsApp admission button",
        "Demo class booking",
        "Contact details and map",
      ],
    },
  ],
  featuresHeading: "Everything a coaching website needs",
  featuresIntro:
    "Built for parent trust and admission-season conversion.",
  features: [
    {
      icon: "menu",
      title: "Course pages with batches and fees",
      text: "Every course gets its own page with subjects, batch timings, and fee structure.",
    },
    {
      icon: "users",
      title: "Faculty profiles",
      text: "Qualifications and experience presented so parents trust the teachers.",
    },
    {
      icon: "award",
      title: "Results and toppers",
      text: "Ranks and selections showcased clearly to prove outcomes.",
    },
    {
      icon: "calendar",
      title: "Demo class booking",
      text: "A simple booking form that turns interest into classroom visits.",
    },
    {
      icon: "chat",
      title: "WhatsApp enquiries",
      text: "Course-wise WhatsApp buttons for instant admission questions.",
    },
    {
      icon: "pin",
      title: "Local SEO setup",
      text: "Built for local searches, so parents in your area find you first.",
    },
  ],
  priceBand: "₹25,000",
  priceNote:
    "Starting from ₹25,000 for a complete website. Final quote depends on courses, pages, and features. You own the site outright.",
  faqs: FAQS,
  ctaHeading: "Get a coaching website proposal within 24 hours",
  ctaText:
    "Tell us about your courses and how many branches the website needs to cover. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Website Development Service",
      path: "/services/website-development",
      blurb: "How ProjectKaro builds websites: process, technology, and what you get.",
    },
    {
      name: "Live demo: Aspire Academy",
      path: "/demos/coaching-centre",
      blurb: "A working sample coaching centre website with courses, faculty, and admissions enquiries.",
    },
    {
      name: "Websites for Consultants",
      path: "/websites-for-consultants",
      blurb: "Authority-building websites for consultants and advisory practices in Hyderabad.",
    },
    {
      name: "Websites for Small Businesses",
      path: "/websites-for-small-businesses",
      blurb: "Affordable, enquiry-focused websites for small businesses in Hyderabad.",
    },
    {
      name: "Websites for Startups",
      path: "/websites-for-startups",
      blurb: "Launch-ready websites for startups in Hyderabad that convert visitors.",
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

export default function CoachingCentresPage() {
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
