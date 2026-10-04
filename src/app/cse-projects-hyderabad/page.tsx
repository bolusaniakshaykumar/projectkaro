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

const PATH = "/cse-projects-hyderabad";
const pageTitle = "CSE Projects in Hyderabad";
const pageDescription =
  "B.Tech CSE and IT final-year projects in Hyderabad: web apps, AI/ML, full-stack and software projects with documentation, PPT and viva preparation.";

export const metadata = createPageMetadata({
  title: `${pageTitle} | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "cse projects hyderabad",
    "cse final year projects hyderabad",
    "computer science major project hyderabad",
    "it final year projects hyderabad",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Academic Projects", path: "/academic-projects" },
  { name: pageTitle, path: PATH },
];

function IconBranch() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
      <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
    </svg>
  );
}

function IconStack() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}

function IconBackend() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3" />
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

function IconSubjects() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconApp() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function IconRocket() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2 0-2.8-.8-.7-2.2-.7-3 .8z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z" />
      <path d="M9 12H4s.6-3 2-4c1.6-1.1 5 0 5 0" />
      <path d="M12 15v5s3-.6 4-2c1.1-1.6 0-5 0-5" />
    </svg>
  );
}

const FAQS: Faq[] = [
  {
    question: "Which stacks do you work in for CSE projects?",
    answer:
      "Python with Flask or FastAPI, Java, and the MERN stack (React, Express, Node, MongoDB), plus Next.js with TypeScript. We build in the stack your department expects, and walk you through it so you can defend every choice.",
  },
  {
    question: "Do you build management systems, like library or hospital projects?",
    answer:
      "Yes. Management systems for libraries, hospitals, events, and inventory are common CSE topics. Ours come with a real database, authentication, and working business logic, not just screens.",
  },
  {
    question: "Can the project include machine learning?",
    answer:
      "Yes. Many CSE projects now include an ML component, like recommendations or predictions inside a web app. We scope the model so it is trainable in your timeline and explainable in your viva.",
  },
  {
    question: "Will examiners accept a web project as a major project?",
    answer:
      "Yes, when it has a real backend, a database, and complete documentation. Most CSE panels expect exactly this. A static site is not enough, but a full-stack application with working features is a standard major project.",
  },
  {
    question: "I'm from IT, not CSE. Does this apply to me?",
    answer:
      "Yes. The same project types, stacks, and documentation standards serve IT branches. We match the topic to your specific syllabus and your department's expectations.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is per project and depends on scope, so there is no fixed price list. Share your branch, stack preference, and deadline, and we respond within 24 hours with a detailed quote. You approve the quote before any work begins.",
  },
];

const content: ServicePageContent = {
  eyebrow: "Hyderabad",
  title: pageTitle,
  intro:
    "ProjectKaro builds B.Tech CSE and IT final-year projects in Hyderabad: web applications, AI/ML systems, and full-stack software with documentation, presentation slides, and viva preparation. Topics are matched to your branch and your stack, for students of JNTUH-affiliated and other Hyderabad engineering colleges.",
  heroNote: "CSE and IT branches. Detailed quote within 24 hours.",
  breadcrumbs: CRUMBS,
  painsHeading: "Where CSE projects fall apart",
  painsIntro:
    "A CSE panel judges software. The failure modes are specific to the branch, and they show up in the demo and the viva.",
  pains: [
    {
      icon: <IconBranch />,
      title: "A topic that doesn't fit your branch",
      text: "A topic borrowed from another branch raises questions you can't answer. CSE panels expect software, data, or systems.",
    },
    {
      icon: <IconStack />,
      title: "A stack you can't defend",
      text: "Code in a framework you never learned means every 'why did you use this?' is a risk. The stack has to be yours.",
    },
    {
      icon: <IconBackend />,
      title: "A web app with no real backend",
      text: "Static pages dressed up as a project collapse in the demo the moment the examiner asks where the data actually lives.",
    },
    {
      icon: <IconBrain />,
      title: "ML bolted on without understanding",
      text: "An AI label on a project whose model you can't explain is worse than no AI at all. Panels see through it instantly.",
    },
  ],
  outcomesHeading: "CSE projects built for your branch",
  outcomesIntro: "Here is what every CSE project engagement delivers:",
  outcomes: [
    {
      icon: <IconSubjects />,
      title: "Topics mapped to your CSE subjects",
      text: "DBMS, computer networks, software engineering, and your AI electives: topics that connect to what you actually studied.",
    },
    {
      icon: <IconApp />,
      title: "Common CSE project types, done properly",
      text: "Web applications, ML systems, and management systems, built with real backends, databases, and authentication.",
    },
    {
      icon: <IconCode />,
      title: "Stacks you can explain: Python, Java, MERN",
      text: "Pick the stack your department expects. We build it cleanly and walk you through every part until it is yours.",
    },
    {
      icon: <IconRocket />,
      title: "Deployed and demo-ready",
      text: "The project runs live, not just on one laptop, so your demo survives the review room and the final evaluation.",
    },
  ],
  deliverablesHeading: "Every CSE project includes",
  deliverables: [
    "Branch-matched topic selection for CSE or IT",
    "Working implementation in Python, Java, or MERN",
    "Database design and API documentation",
    "Complete project report formatted for submission",
    "Presentation slides for your final review",
    "Viva walkthrough mapped to your subjects",
    "Deployment so the demo runs anywhere",
    "Revisions until your submission is complete",
  ],
  faqs: FAQS,
  ctaHeading: "Get a CSE project you can defend",
  ctaText:
    "Share your branch, stack preference, and deadline. ProjectKaro responds within 24 hours with topic options and a detailed quote.",
  related: [
    {
      name: "B.Tech Major Projects in Hyderabad",
      path: "/btech-major-projects-hyderabad",
      blurb: "Hyderabad-focused major project support for CSE, IT, ECE, and other branches.",
    },
    {
      name: "AI/ML Projects in Hyderabad",
      path: "/ai-ml-projects-hyderabad",
      blurb: "AI and machine learning final-year projects with explainability for the viva.",
    },
    {
      name: "Major Projects",
      path: "/academic-projects/major-projects",
      blurb: "Final-year major project delivery across India, planned backwards from your deadline.",
    },
  ],
};

export default function CSEProjectsHyderabadPage() {
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
