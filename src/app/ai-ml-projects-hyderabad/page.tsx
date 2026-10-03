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

const PATH = "/ai-ml-projects-hyderabad";
const pageTitle = "AI/ML Projects in Hyderabad";
const pageDescription =
  "AI and machine learning final-year projects in Hyderabad: model development, datasets, explainability, documentation and viva prep for CSE students.";

export const metadata = createPageMetadata({
  title: `${pageTitle} | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "ai ml projects hyderabad",
    "machine learning final year project hyderabad",
    "ai final year projects hyderabad",
    "deep learning projects hyderabad",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Academic Projects", path: "/academic-projects" },
  { name: pageTitle, path: PATH },
];

function IconDataset() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.7-4 3-9 3s-9-1.3-9-3" />
      <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
    </svg>
  );
}

function IconBaseline() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconWhy() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function IconLaptop() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function IconScope() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconArc() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function IconExplain() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function IconDeploy() {
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
    question: "Do I need a GPU for an ML final-year project?",
    answer:
      "No. We scope projects so training finishes on ordinary hardware within your timeline. If deep learning fits the topic, we keep the models small or use efficient pretrained approaches rather than training from scratch.",
  },
  {
    question: "Which frameworks do you use?",
    answer:
      "scikit-learn, TensorFlow, and PyTorch for modeling, with pandas for data work and FastAPI or Streamlit for the demo application. The stack is chosen to match the project and your department's expectations.",
  },
  {
    question: "Can you do deep learning or computer vision projects?",
    answer:
      "Yes. CNN-based projects for classification and detection are common. We scope them carefully, dataset first, so the model actually trains and converges in the time you have.",
  },
  {
    question: "How do I answer 'why this model' in the viva?",
    answer:
      "With your own results. We prepare you using the baseline comparisons from your project and the explainability analysis we run on your trained model, so the answer comes from evidence, not memory.",
  },
  {
    question: "What datasets do you use?",
    answer:
      "Public datasets matched to the problem, for example medical, retail, or sensor data, cleaned and documented as part of the project. The dataset choice is documented in your report so it stands up to review.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is per project and depends on scope, so there is no fixed price list. Share your domain interest and deadline, and we respond within 24 hours with a detailed quote. You approve the quote before any work begins.",
  },
];

const content: ServicePageContent = {
  eyebrow: "Hyderabad",
  title: pageTitle,
  intro:
    "ProjectKaro builds AI and machine learning final-year projects in Hyderabad for CSE students: model development on real datasets, explainability prepared for viva questions, and deployment as a working demo app, with documentation and presentation support. For students of JNTUH-affiliated and other Hyderabad engineering colleges.",
  heroNote: "ML projects scoped to your timeline. Detailed quote within 24 hours.",
  breadcrumbs: CRUMBS,
  painsHeading: "Where ML projects fall apart",
  painsIntro:
    "Machine learning projects fail in predictable ways. Each one is avoidable if the project is scoped right at the start.",
  pains: [
    {
      icon: <IconDataset />,
      title: "A dataset that never trains",
      text: "The wrong dataset means weeks of preprocessing and a model that never converges, with nothing to show for it.",
    },
    {
      icon: <IconBaseline />,
      title: "A model with no baseline",
      text: "Jumping straight to deep learning with nothing to compare against leaves you with no story for the report or the viva.",
    },
    {
      icon: <IconWhy />,
      title: "'Why this model?' you can't answer",
      text: "Examiners always ask why you chose an algorithm. 'It gave good accuracy' is not an answer, and they know it.",
    },
    {
      icon: <IconLaptop />,
      title: "A demo that only works on one machine",
      text: "Notebooks that run nowhere else turn the review demo into a debugging session in front of your panel.",
    },
  ],
  outcomesHeading: "ML projects scoped to succeed",
  outcomesIntro: "Here is how every AI/ML project is delivered:",
  outcomes: [
    {
      icon: <IconScope />,
      title: "Scoped to train and demo in weeks",
      text: "Dataset and model chosen so training finishes on ordinary hardware within your timeline, with margin for the write-up.",
    },
    {
      icon: <IconArc />,
      title: "A baseline-to-final model arc",
      text: "Start simple, improve step by step, so your report tells a real experimental story with comparisons that hold up.",
    },
    {
      icon: <IconExplain />,
      title: "Explainability built in for viva questions",
      text: "Feature importance and clear reasoning for every modeling choice, prepared from your own results.",
    },
    {
      icon: <IconDeploy />,
      title: "Deployed as a demo app",
      text: "The model ships inside a working web app, so the examiner interacts with the project instead of watching a notebook.",
    },
  ],
  projects: [
    { name: "Ecommerce Recommendation System", blurb: "hybrid product recommender", stack: "FastAPI, scikit-learn" },
    { name: "Anemia ML Pipeline", blurb: "explainable ML diagnostics", stack: "scikit-learn, SHAP" },
    { name: "Deepfake Detection", blurb: "image forgery detection", stack: "PyTorch" },
    { name: "SkinCare AI", blurb: "CNN skin analysis served as a web app", stack: "Python, PyTorch, FastAPI" },
  ],
  deliverablesHeading: "Every AI/ML project includes",
  deliverables: [
    "Dataset selection, cleaning, and documentation",
    "Baseline model plus an improved final model",
    "Training and evaluation results for the report",
    "Explainability analysis prepared for viva defense",
    "Demo web app serving the trained model",
    "Complete project report with experimental results",
    "Presentation slides for your final review",
    "Revisions until your submission is complete",
  ],
  faqs: FAQS,
  ctaHeading: "Build an ML project you can explain",
  ctaText:
    "Share your domain interest and deadline. ProjectKaro responds within 24 hours with a scoped ML plan and a detailed quote.",
  related: [
    {
      name: "B.Tech Major Projects in Hyderabad",
      path: "/btech-major-projects-hyderabad",
      blurb: "Hyderabad-focused major project support for CSE, IT, ECE, and other branches.",
    },
    {
      name: "IEEE Projects in Hyderabad",
      path: "/ieee-projects-hyderabad",
      blurb: "IEEE-paper-inspired final-year projects with rigorous documentation.",
    },
    {
      name: "CSE Projects in Hyderabad",
      path: "/cse-projects-hyderabad",
      blurb: "Branch-specific final-year projects for CSE and IT students.",
    },
  ],
};

export default function AIMLProjectsHyderabadPage() {
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
