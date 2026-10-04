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

const PATH = "/ieee-projects-hyderabad";
const pageTitle = "IEEE Projects in Hyderabad";
const pageDescription =
  "IEEE-based final-year projects in Hyderabad: base paper implementation, literature survey, IEEE-format documentation and viva prep for B.Tech students.";

export const metadata = createPageMetadata({
  title: `${pageTitle} | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "ieee projects hyderabad",
    "ieee final year projects hyderabad",
    "ieee base paper implementation",
    "research projects hyderabad btech",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Academic Projects", path: "/academic-projects" },
  { name: pageTitle, path: PATH },
];

function IconUnbuildable() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="15" x2="15" y2="15" />
      <circle cx="12" cy="12" r="10" strokeDasharray="3 2" />
    </svg>
  );
}

function IconCopied() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      <line x1="4" y1="4" x2="20" y2="20" />
    </svg>
  );
}

function IconNoBaseline() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" strokeDasharray="3 2" />
      <path d="M2 17l6-6 4 4 8-8" strokeDasharray="3 2" />
    </svg>
  );
}

function IconBlindFormat() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 7V4h16v3" />
      <path d="M9 20h6" />
      <path d="M12 4v16" />
      <line x1="4" y1="4" x2="20" y2="20" />
    </svg>
  );
}

function IconPaper() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconSurvey() {
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

function IconResults() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function IconDefend() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const FAQS: Faq[] = [
  {
    question: "I already have a base paper. Can you implement it?",
    answer:
      "Yes. Share the paper and we assess whether it is implementable within your timeline and available compute. If it is not, we tell you honestly and suggest alternative papers in the same domain that are.",
  },
  {
    question: "I don't have a base paper yet. Can you help me choose one?",
    answer:
      "Yes. We shortlist papers in your domain that have public datasets, feasible compute requirements, and a scope that fits your deadline. You make the final choice with our guidance, so you own the topic.",
  },
  {
    question: "Which domains do you cover for IEEE projects?",
    answer:
      "AI and machine learning, deep learning, computer vision, NLP, data science, IoT, and cybersecurity, for CSE, IT, ECE and related branches. Tell us your domain and we shortlist implementable papers.",
  },
  {
    question: "Will the report follow IEEE formatting?",
    answer:
      "Yes. The report follows IEEE structure and citation conventions, written against your actual implementation and results, not assembled from other papers.",
  },
  {
    question: "What do examiners usually probe, and will I be ready?",
    answer:
      "Examiners probe methodology choices, baseline selection, why your results differ from the base paper, and dataset limitations. The viva walkthrough covers all of these against your specific project, so you can defend every decision.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is per project and depends on the paper's complexity and your deadline, so there are no fixed prices. Share your base paper or topic and we respond within 24 hours with a detailed quote.",
  },
];

const content: ServicePageContent = {
  eyebrow: "Hyderabad",
  title: pageTitle,
  intro:
    "ProjectKaro implements IEEE-based final-year projects in Hyderabad for B.Tech students: choosing an implementable base paper, full implementation, literature survey, IEEE-format report, results and comparison tables, and viva preparation. We pick papers you can actually build, not just cite. Suitable for students of JNTUH-affiliated and other Hyderabad engineering colleges.",
  heroNote: "Based in Hyderabad. Base paper to final report. Detailed quote within 24 hours.",
  breadcrumbs: CRUMBS,
  painsHeading: "Why IEEE projects stall",
  painsIntro:
    "An IEEE project carries a research bar on top of an engineering bar. Most stall because the paper was chosen for its title, not its implementability.",
  pains: [
    {
      icon: <IconUnbuildable />,
      title: "A base paper nobody can implement",
      text: "Impressive titles with no public code, no accessible dataset, and compute requirements no student machine can meet. The paper looks great and builds nothing.",
    },
    {
      icon: <IconCopied />,
      title: "A literature survey that is copied, not understood",
      text: "Related-work sections pasted from other papers that fall apart the moment the examiner asks why this paper was chosen and not that one.",
    },
    {
      icon: <IconNoBaseline />,
      title: "Results with nothing to compare against",
      text: "Numbers with no baseline, no ablation, and no comparison table. Examiners probe methodology first, and there is nothing to defend.",
    },
    {
      icon: <IconBlindFormat />,
      title: "An IEEE-format report written blind",
      text: "Formatting rules, citation style, and section structure improvised at the last minute. Reviewers and examiners notice immediately.",
    },
  ],
  outcomesHeading: "What a ProjectKaro IEEE project looks like",
  outcomesIntro: "Every IEEE project ships the same way:",
  outcomes: [
    {
      icon: <IconPaper />,
      title: "A base paper you can actually build",
      text: "We help you choose a paper with available datasets, feasible compute, and a scope that fits your timeline, then implement it faithfully.",
    },
    {
      icon: <IconSurvey />,
      title: "A literature survey you can defend",
      text: "Related work selected for a reason, with a comparison table that positions your implementation honestly against the baselines.",
    },
    {
      icon: <IconResults />,
      title: "Results, baselines, and comparison tables",
      text: "Experiments run properly, with baseline comparisons and results tables that survive examiner questions.",
    },
    {
      icon: <IconDefend />,
      title: "An IEEE-format report and a viva you can win",
      text: "Report structured to IEEE conventions with correct citations, plus a walkthrough of the methodology, the results, and the questions examiners actually ask.",
    },
  ],
  deliverablesHeading: "Every IEEE project includes",
  deliverables: [
    "Base paper selection guidance: implementable, scoped to your timeline",
    "Complete implementation of the paper's method with clean code",
    "Literature survey with a positioning comparison table",
    "Experiments with baselines, metrics, and results tables",
    "IEEE-format project report with correct structure and citations",
    "Presentation slides for your final review",
    "Viva preparation walkthrough: methodology, results, and examiner questions",
    "Revisions until your submission is complete",
  ],
  faqs: FAQS,
  ctaHeading: "Turn your base paper into a defensible project",
  ctaText:
    "Share your base paper or topic, branch, and deadline. ProjectKaro responds within 24 hours with a detailed quote and an honest assessment of what is implementable.",
  related: [
    {
      name: "B.Tech Major Projects in Hyderabad",
      path: "/btech-major-projects-hyderabad",
      blurb: "Hyderabad-focused major project support for CSE, IT, ECE and other branches.",
    },
    {
      name: "AI/ML Projects in Hyderabad",
      path: "/ai-ml-projects-hyderabad",
      blurb: "AI and machine learning final-year projects in Hyderabad.",
    },
    {
      name: "Academic Projects",
      path: "/academic-projects",
      blurb: "Major, minor, and research project support for students.",
    },
  ],
};

export default function IeeeProjectsHyderabadPage() {
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
