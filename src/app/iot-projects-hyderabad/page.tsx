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

const PATH = "/iot-projects-hyderabad";
const pageTitle = "IoT Projects in Hyderabad";
const pageDescription =
  "IoT and embedded final-year projects in Hyderabad: sensor hardware, Arduino/Raspberry Pi builds, dashboards, documentation and viva preparation.";

export const metadata = createPageMetadata({
  title: `${pageTitle} | ProjectKaro`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "iot projects hyderabad",
    "iot final year projects hyderabad",
    "embedded systems projects hyderabad",
    "raspberry pi projects hyderabad",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: "Academic Projects", path: "/academic-projects" },
  { name: pageTitle, path: PATH },
];

function IconChip() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <line x1="9" y1="2" x2="9" y2="7" />
      <line x1="15" y1="2" x2="15" y2="7" />
      <line x1="9" y1="17" x2="9" y2="22" />
      <line x1="15" y1="17" x2="15" y2="22" />
      <line x1="2" y1="9" x2="7" y2="9" />
      <line x1="2" y1="15" x2="7" y2="15" />
      <line x1="17" y1="9" x2="22" y2="9" />
      <line x1="17" y1="15" x2="22" y2="15" />
    </svg>
  );
}

function IconBrokenLink() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7" />
      <path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7" />
      <line x1="4" y1="4" x2="20" y2="20" />
    </svg>
  );
}

function IconAlert() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function IconSplit() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 9v3a4 4 0 0 0 4 4h5" strokeDasharray="3 2" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconPipeline() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="6" height="6" rx="1" />
      <rect x="16" y="15" width="6" height="6" rx="1" />
      <path d="M8 6h6a3 3 0 0 1 3 3v6" />
      <polyline points="14 12 17 15 20 12" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconGrad() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      <line x1="22" y1="10" x2="22" y2="16" />
    </svg>
  );
}

const FAQS: Faq[] = [
  {
    question: "I don't have the hardware yet. Can you still help?",
    answer:
      "Yes. We guide you on exactly what to buy, boards and sensors, within a student budget, and build the software around that hardware. If procurement is not possible in your timeline, we build with a simulation layer so the project is still fully demoable and explainable.",
  },
  {
    question: "Is this suitable for ECE and EEE branches?",
    answer:
      "Yes. IoT and embedded projects are a natural fit for ECE and EEE final-year submissions, and we keep the electronics content real: circuits, communication protocols, and sensor interfacing, not just a web dashboard with an IoT label.",
  },
  {
    question: "Which boards and sensors do you work with?",
    answer:
      "Arduino (Uno, Nano, ESP32, ESP8266) and Raspberry Pi are the most common. Sensor choice follows your topic: DHT11/DHT22 temperature and humidity, ultrasonic, soil moisture, PIR motion, GPS modules, and similar standard parts.",
  },
  {
    question: "What happens if my hardware fails before the demo?",
    answer:
      "We build a demo-day fallback into every IoT project: a simulation mode and recorded data paths, so the review still demonstrates the full system even if a sensor dies the morning of your presentation.",
  },
  {
    question: "Do I get documentation and a report?",
    answer:
      "Yes. You get a full project report including circuit and architecture diagrams, presentation slides, and a setup guide. The documentation is written against your actual build, not a generic template.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is per project and depends on scope and hardware complexity, so there are no fixed prices. Share your topic, branch, and deadline and we respond within 24 hours with a detailed quote.",
  },
];

const content: ServicePageContent = {
  eyebrow: "Hyderabad",
  title: pageTitle,
  intro:
    "ProjectKaro builds IoT and embedded final-year projects in Hyderabad: sensor hardware selection, Arduino and Raspberry Pi implementation, data pipelines into live dashboards, complete documentation, and viva preparation. We scope every build so it is demoable on your review day, not just in a block diagram. Suitable for students of JNTUH-affiliated and other Hyderabad engineering colleges.",
  heroNote: "Based in Hyderabad. Hardware guidance plus full software. Detailed quote within 24 hours.",
  breadcrumbs: CRUMBS,
  painsHeading: "Why IoT projects fail at the final review",
  painsIntro:
    "An IoT build has two failure surfaces: the code and the hardware. Most student IoT projects break on the second one.",
  pains: [
    {
      icon: <IconChip />,
      title: "Hardware picked from a list, not from availability",
      text: "Sensors and boards ordered late, arriving wrong, or discontinued mid-semester. The project plan assumes parts that never actually show up.",
    },
    {
      icon: <IconBrokenLink />,
      title: "A diagram with no working data path",
      text: "Block diagrams look complete, but no sensor reading ever reaches the dashboard. On demo day there is nothing live to show.",
    },
    {
      icon: <IconAlert />,
      title: "Dead hardware on demo day",
      text: "A sensor dies the morning of the review and there is no fallback. The entire demonstration depends on one fragile component.",
    },
    {
      icon: <IconSplit />,
      title: "Software and hardware built by different people",
      text: "The firmware comes from one source, the dashboard from another, and they never actually talk to each other when it matters.",
    },
  ],
  outcomesHeading: "What a ProjectKaro IoT project looks like",
  outcomesIntro: "Every project ships the same way:",
  outcomes: [
    {
      icon: <IconWrench />,
      title: "Hardware scoped to what you can actually get",
      text: "We select Arduino and Raspberry Pi boards plus sensors that are available and affordable, with a backup option for every critical component.",
    },
    {
      icon: <IconPipeline />,
      title: "A real data pipeline, sensor to dashboard",
      text: "Readings flow from the hardware through the backend into a live dashboard you can show, with the full path explained to you line by line.",
    },
    {
      icon: <IconShield />,
      title: "Demo-day contingency built in",
      text: "Simulation modes and fallback data paths, so the project still demonstrates end to end even if a sensor fails before your review.",
    },
    {
      icon: <IconGrad />,
      title: "ECE and EEE friendly, viva ready",
      text: "Projects aligned with electronics and electrical branch expectations, with a walkthrough so you can explain the circuit, the code, and the protocol.",
    },
  ],
  deliverablesHeading: "Every IoT project includes",
  deliverables: [
    "Hardware selection guidance: boards, sensors, and where to source them",
    "Complete Arduino/Raspberry Pi firmware and backend code",
    "Live dashboard showing real or simulated sensor data",
    "Circuit and architecture diagrams for your report",
    "Project report formatted for submission, written to the actual build",
    "Presentation slides for your final review",
    "Viva preparation walkthrough: circuit, code, and protocol questions",
    "Demo-day fallback plan, so a hardware failure does not mean project failure",
  ],
  faqs: FAQS,
  ctaHeading: "Build an IoT project that works on demo day",
  ctaText:
    "Tell us your topic, branch, and deadline. ProjectKaro responds within 24 hours with a detailed quote, hardware guidance, and a delivery plan built around your submission date.",
  related: [
    {
      name: "B.Tech Major Projects in Hyderabad",
      path: "/btech-major-projects-hyderabad",
      blurb: "Hyderabad-focused major project support for CSE, IT, ECE and other branches.",
    },
    {
      name: "CSE Projects in Hyderabad",
      path: "/cse-projects-hyderabad",
      blurb: "Final-year project development for computer science students in Hyderabad.",
    },
    {
      name: "Major Projects",
      path: "/academic-projects/major-projects",
      blurb: "Final-year major project delivery across India, planned backwards from your deadline.",
    },
  ],
};

export default function IotProjectsHyderabadPage() {
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
