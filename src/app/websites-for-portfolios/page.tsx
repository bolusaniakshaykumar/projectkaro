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

const PATH = "/websites-for-portfolios";
const pageTitle = "Portfolio Websites";
const pageDescription =
  "Personal portfolio websites for freelancers, creators, and professionals in Hyderabad. Your work, your story, and a clear way to hire you. Proposal within 24 hours.";

export const metadata = createPageMetadata({
  title: `${pageTitle} in Hyderabad | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "portfolio website development hyderabad",
    "personal website design hyderabad",
    "freelancer portfolio website",
    "portfolio website for designers",
    "personal brand website india",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Websites for Businesses", path: "/websites-for-businesses" },
  { name: pageTitle, path: PATH },
];

const FAQS = [
  {
    question: "How much does a portfolio website cost?",
    answer:
      "Portfolio websites start from ₹15,000. The final quote depends on the number of pages, work samples, and features like a blog or booking form. Share what you do and ProjectKaro will send a detailed proposal within 24 hours.",
  },
  {
    question: "How long does it take to build?",
    answer:
      "A standard portfolio website takes 1 to 2 weeks from content approval. If you need it ready for applications or a launch, mention your date and we will plan around it.",
  },
  {
    question: "I don't have professional photos of my work. Is that a problem?",
    answer:
      "No. We design around whatever you have: screenshots, phone photos, PDFs, or links. We will tell you exactly what to send and how to present it so your work looks its best.",
  },
  {
    question: "Can I update my portfolio myself after launch?",
    answer:
      "Yes. We build portfolio sites so you can add new work, update your bio, and publish posts without touching code. We also show you how in a short handover call.",
  },
  {
    question: "Will my website rank when someone searches my name?",
    answer:
      "Yes. We set up every portfolio site to rank for your name and your profession plus city, so clients and recruiters find your website first, not your old social profiles.",
  },
  {
    question: "Can you redesign my existing portfolio?",
    answer:
      "Yes. If your current site looks dated or does not bring enquiries, we rebuild it around your best work and a clear hire-me path, keeping anything worth keeping.",
  },
];

const content: IndustryPageContent = {
  variant: "showcase",
  eyebrow: "Portfolios",
  title: pageTitle,
  titleHighlight: "Portfolios",
  intro:
    "Your work deserves better than a social media profile. A portfolio website puts your best work, your story, and a clear way to hire you in one place you own.",
  heroNote: "Get a proposal within 24 hours.",
  breadcrumbs: CRUMBS,
  mockupDomain: "yourname.in",
  mockupKind: "browser",
  mockupTitle: "Your Name (sample)",
  mockupItems: [
    {
      title: "Selected work (sample)",
      meta: "12 projects · case studies",
      tag: "Featured",
    },
    {
      title: "About",
      meta: "Your story in your words",
    },
    {
      title: "Hire me",
      meta: "WhatsApp · Email · Form",
    },
  ],
  floatCards: [
    {
      kind: "profile",
      title: "Your personal brand",
      text: "Name, photo, and story (sample)",
    },
    {
      kind: "rating",
      title: "Work that speaks",
      text: "Case studies, not just screenshots",
    },
  ],
  ticker: [
    "Designers",
    "Developers",
    "Photographers",
    "Writers",
    "Architects",
    "Consultants",
  ],
  journeyHeading: "How clients decide to hire you",
  journeyIntro:
    "When someone considers hiring you, they follow the same three steps. Your website needs to win each one.",
  journey: [
    {
      title: "Discover",
      text: "They find your name through a referral, an application, or a search, usually on a phone.",
    },
    {
      title: "Judge in seconds",
      text: "They scan your work and decide in under a minute whether you are the right person.",
    },
    {
      title: "Contact",
      text: "The portfolio that makes reaching out effortless gets the message. The rest get closed.",
    },
  ],
  problemHeading: "Great work, invisible online.",
  problemIntro:
    "Talent is not the problem. Being found, believed, and contacted is. That is where opportunities leak away.",
  problems: [
    {
      title: "Scattered everywhere",
      text: "\u201CMy work is scattered across Instagram, Behance, and a Google Drive link. Nothing feels like mine.\u201D",
    },
    {
      title: "Outdated first impression",
      text: "\u201CRecruiters ask for my portfolio and I send a PDF from two years ago.\u201D",
    },
    {
      title: "Lost in the marketplace",
      text: "\u201COn freelance platforms I look the same as a thousand other profiles competing on price.\u201D",
    },
    {
      title: "Buried by the algorithm",
      text: "\u201CMy best work is buried under yesterday's posts. Nobody scrolls back far enough to find it.\u201D",
    },
  ],
  problemStyle: "quotes",
  solutionHeading: "A website that sells you while you sleep",
  solutionIntro:
    "Every element shows your capability and moves the visitor one step closer to contacting you.",
  solutions: [
    {
      icon: "star",
      title: "Work-first gallery",
      text: "Your projects presented as case studies with context, not just screenshots. Visitors see how you think, not only what you made.",
    },
    {
      icon: "chat",
      title: "Your story, well told",
      text: "An about page that reads like an introduction, not a resume. Clients hire people they feel they know.",
    },
    {
      icon: "phone",
      title: "Hire-me paths everywhere",
      text: "WhatsApp, email, and a short contact form on every page. The path from impressed to in-touch takes seconds.",
    },
  ],
  solutionLayout: "bento",
  structureHeading: "What your portfolio website includes",
  structureIntro:
    "A proven structure for personal brands. Adjusted to your profession and the way your clients find you.",
  structure: [
    {
      page: "Home",
      children: [
        "Hero with your name and craft",
        "Selected work highlights",
        "Short intro and hire CTA",
      ],
    },
    {
      page: "Work",
      children: [
        "Project gallery",
        "Case study pages",
        "Filter by type or skill",
      ],
    },
    {
      page: "About",
      children: [
        "Your story and background",
        "Skills and tools",
        "Photo and credentials",
      ],
    },
    {
      page: "Services",
      children: [
        "What you offer",
        "How you work",
        "Starting prices (optional)",
      ],
    },
    {
      page: "Contact",
      children: ["Contact form", "WhatsApp button", "Social and email links"],
    },
  ],
  featuresHeading: "Everything a portfolio website needs",
  featuresIntro:
    "Built to get you discovered, believed, and contacted.",
  features: [
    {
      icon: "star",
      title: "Gallery-first design",
      text: "Your work is the hero. Fast-loading galleries that look sharp on every screen.",
    },
    {
      icon: "file",
      title: "Case study pages",
      text: "Give key projects the full story: problem, process, and outcome.",
    },
    {
      icon: "phone",
      title: "Mobile-first design",
      text: "Most of your visitors arrive on a phone. Your site loads fast and reads beautifully there.",
    },
    {
      icon: "chat",
      title: "Easy contact paths",
      text: "WhatsApp, email, and a short form, so no interested visitor ever wonders how to reach you.",
    },
    {
      icon: "search",
      title: "Rank for your name",
      text: "Structured so clients and recruiters find your website when they search your name.",
    },
    {
      icon: "clock",
      title: "Easy to update",
      text: "Add new work and posts yourself after launch. We show you how in a short handover call.",
    },
    {
      icon: "pin",
      title: "Your own domain",
      text: "Guidance on getting yourname.in or .com so your brand lives at an address you own.",
    },
    {
      icon: "shield",
      title: "You own everything",
      text: "No platform lock-in, no monthly rent for your own presence. The site and domain are yours.",
    },
  ],
  featureStyle: "grid",
  priceBand: "₹15,000",
  pricePoints: [
    "Work gallery with case study pages",
    "About, services, and contact pages",
    "WhatsApp and contact form on every page",
    "SEO for your name and profession",
  ],
  priceNote:
    "Starting from ₹15,000 for a complete portfolio website. Final quote depends on pages and features. You own the site outright.",
  processHeading: "From enquiry to launch",
  processSteps: [
    {
      title: "Tell us what you do",
      text: "Share your work samples, bio, and the kind of clients or roles you want in a short call or form.",
    },
    {
      title: "We design around your work",
      text: "ProjectKaro structures your gallery, story, and contact paths within days.",
    },
    {
      title: "You review and approve",
      text: "You check every word and image. Nothing about you goes live without your approval.",
    },
    {
      title: "Launch in 1 to 2 weeks",
      text: "Your site goes live on your own domain, ready to share everywhere.",
    },
  ],
  faqs: FAQS,
  ctaHeading: "Get a portfolio website proposal within 24 hours",
  ctaText:
    "Tell us what you do and share a few samples of your work. ProjectKaro responds within 24 hours with a detailed proposal, scope, and timeline.",
  related: [
    {
      name: "Websites for Consultants",
      path: "/websites-for-consultants",
      blurb: "Professional websites for consultants and independent practitioners.",
    },
    {
      name: "Startup MVP Development",
      path: "/services/startup-mvp-development",
      blurb: "Turn your idea into a working product, fast.",
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

export default function PortfoliosPage() {
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
