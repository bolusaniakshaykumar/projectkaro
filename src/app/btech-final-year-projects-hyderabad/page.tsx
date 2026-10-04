import JsonLd from "@/components/JsonLd";
import ServicePage, {
  type Faq,
  type ServicePageContent,
} from "@/components/ServicePage/ServicePage";
import {
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/seo";

const PATH = "/btech-final-year-projects-hyderabad";
const pageTitle = "B.Tech Final Year Projects in Hyderabad";
const pageDescription =
  "Final-year B.Tech project support in Hyderabad: topic selection, implementation, documentation, PPT and viva prep, planned across your final year.";

export const metadata = createPageMetadata({
  title: `${pageTitle} | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "btech final year projects hyderabad",
    "final year project help hyderabad",
    "engineering final year project support",
    "btech project documentation viva",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Academic Projects", path: "/academic-projects" },
  { name: pageTitle, path: PATH },
];

function IconTarget() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconDoc() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function IconSteps() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconSlides() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <line x1="8" y1="22" x2="16" y2="22" />
      <line x1="12" y1="18" x2="12" y2="22" />
    </svg>
  );
}

function IconMic() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <line x1="12" y1="17" x2="12" y2="22" />
    </svg>
  );
}

const FAQS: Faq[] = [
  {
    question: "Do you help with topic selection?",
    answer:
      "Yes. We suggest topics matched to your branch, your stack, and your timeline, and we help you draft the synopsis or abstract your guide needs to approve. Starting with the right scope prevents most final-year problems.",
  },
  {
    question: "What if my guide rejects the synopsis?",
    answer:
      "It happens, and it is fixable. We revise the synopsis with you and adjust the topic to fit your guide's feedback, without restarting from zero. Tell us the feedback and we rework the angle.",
  },
  {
    question: "How do you handle internal reviews?",
    answer:
      "Your project is planned in phases matched to your college's review schedule. Before each review, we make sure you have a working module to show and that you can explain what was built and what comes next.",
  },
  {
    question: "Can my project batch work with you together?",
    answer:
      "Yes. We regularly work with batches of 2 to 5 students. Everyone in the batch gets the walkthrough sessions, so each member can answer viva questions independently.",
  },
  {
    question: "Do you cover the whole final year, or just the end?",
    answer:
      "Both. Starting early lets us plan topic, phases, and reviews properly. But if you come to us mid-year with a deadline approaching, we assess where you stand and build a plan from there.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is per project and depends on scope, so there is no fixed price list. Share your branch, topic status, and timeline, and we respond within 24 hours with a detailed quote. You approve the quote before any work begins.",
  },
];

const content: ServicePageContent = {
  eyebrow: "Hyderabad",
  title: pageTitle,
  intro:
    "ProjectKaro supports B.Tech final-year projects in Hyderabad across the whole journey: topic selection and synopsis approval, phased implementation matched to your internal reviews, documentation built alongside the work, presentation slides, and viva preparation. For students of JNTUH-affiliated and other Hyderabad engineering colleges.",
  heroNote: "Final-year planning support. Detailed quote within 24 hours.",
  breadcrumbs: CRUMBS,
  painsHeading: "Where the final-year project goes wrong",
  painsIntro:
    "Most final-year trouble is not technical. It is the journey: approvals, reviews, and documents colliding in the last month.",
  pains: [
    {
      icon: <IconTarget />,
      title: "A topic your guide won't approve",
      text: "Weeks lost on a synopsis that keeps getting rejected, while the calendar keeps moving and the real work hasn't started.",
    },
    {
      icon: <IconCalendar />,
      title: "No plan across the two semesters",
      text: "Implementation, report, PPT, and viva prep all get crammed into the final month because nobody mapped the year out.",
    },
    {
      icon: <IconEye />,
      title: "Internal reviews with nothing to show",
      text: "Review panels expect progress at every stage. Showing up empty costs internal marks and shakes your confidence for the final review.",
    },
    {
      icon: <IconDoc />,
      title: "Documentation and viva treated as an afterthought",
      text: "The report and slides get rushed at the end, and the viva becomes a gamble instead of a formality you are prepared for.",
    },
  ],
  outcomesHeading: "A final-year project run like a real plan",
  outcomesIntro:
    "We treat the final year as a project in itself, with milestones you can see coming instead of deadlines that ambush you:",
  outcomes: [
    {
      icon: <IconCheck />,
      title: "A topic that survives guide approval",
      text: "Topic selection scoped to your branch and timeline, with a synopsis your guide can actually sign off on.",
    },
    {
      icon: <IconSteps />,
      title: "Phased work tied to your review schedule",
      text: "Implementation broken into phases that match your internal reviews, so you always have real progress to show.",
    },
    {
      icon: <IconDoc />,
      title: "Documentation written alongside the build",
      text: "The report grows with the implementation, chapter by chapter, instead of being invented the night before submission.",
    },
    {
      icon: <IconMic />,
      title: "PPT and viva prep that close the year",
      text: "Presentation slides built from your actual work, and a viva walkthrough covering the questions examiners ask.",
    },
  ],
  deliverablesHeading: "What the final-year journey includes",
  deliverables: [
    "Topic selection guidance and synopsis or abstract drafting",
    "Phased development plan matched to your internal reviews",
    "Working implementation in your chosen stack",
    "Project report written against the actual build",
    "Presentation slides for your final review",
    "Viva preparation walkthrough for every batch member",
    "Check-ins before each internal review",
    "Revisions until your submission is complete",
  ],
  faqs: FAQS,
  ctaHeading: "Start your final year on a real plan",
  ctaText:
    "Share your branch, your timeline, and where you stand. ProjectKaro responds within 24 hours with a topic direction, a phased plan, and a detailed quote.",
  related: [
    {
      name: "B.Tech Major Projects in Hyderabad",
      path: "/btech-major-projects-hyderabad",
      blurb: "Hyderabad-focused major project support for CSE, IT, ECE, and other branches.",
    },
    {
      name: "CSE Projects in Hyderabad",
      path: "/cse-projects-hyderabad",
      blurb: "Branch-specific final-year projects for CSE and IT students.",
    },
    {
      name: "Academic Projects",
      path: "/academic-projects",
      blurb: "Major, minor, and research project support for students.",
    },
  ],
};

export default function BTechFinalYearProjectsHyderabadPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            title: pageTitle,
            description: pageDescription,
          }),
          serviceSchema({
            name: pageTitle,
            description: pageDescription,
            path: PATH,
          }),
          faqPageSchema(FAQS),
          breadcrumbSchema(CRUMBS),
        ]}
      />
      <ServicePage content={content} />
    </>
  );
}
