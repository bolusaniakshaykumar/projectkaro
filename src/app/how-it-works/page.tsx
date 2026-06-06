import CTA from "@/components/CTA/CTA";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, createPageMetadata, howToSchema, webPageSchema } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "ProjectKaro's four-step process: submit your requirements, receive a fixed quote within 24 hours, approve the proposal, and get your project delivered with full documentation and support.",
  path: "/how-it-works",
});

const STEPS = [
  {
    number: 1,
    title: "Submit Your Requirements",
    description: "Fill out the project form with your requirements, goals, and deadline. For student projects, attach your abstract or problem statement. For web projects, describe the functionality and design preferences you need.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    note: "No requirement too small or too complex.",
  },
  {
    number: 2,
    title: "Receive a Detailed Proposal",
    description: "Our team reviews your submission and responds within 24 hours with a structured proposal — including a fixed price, defined scope, and milestone-based timeline. Everything in writing, no ambiguity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    note: "Fixed price. No hidden costs.",
  },
  {
    number: 3,
    title: "We Build Your Project",
    description: "Once you approve the proposal, our developers begin work. You receive regular progress updates at each milestone. For web projects, you can review designs before development proceeds. For student projects, we follow your institution's requirements precisely.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    note: "Transparent progress at every milestone.",
  },
  {
    number: 4,
    title: "Delivery & Handover",
    description: "You receive the complete deliverables — source code, documentation, deployment support, or academic reports as agreed. We provide a handover session to walk you through the project and answer any questions. Revisions within the agreed scope are handled at no extra charge.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    note: "Full handover with documentation included.",
  },
];

export default function HowItWorksPage() {
  const pageTitle = "How It Works";

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/how-it-works",
            title: pageTitle,
            description:
              "A four-step process to submit requirements, receive a fixed quote, build your project, and get full delivery with documentation.",
          }),
          howToSchema(
            STEPS.map((step) => ({
              name: step.title,
              text: step.description,
            }))
          ),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: pageTitle, path: "/how-it-works" },
          ]),
        ]}
      />

      <section className="section" aria-labelledby="how-heading">
        <div className="container">
          <div className={styles.header}>
            <p className={styles.eyebrow}>Process</p>
            <h1 id="how-heading" className={styles.title}>
              How It Works
            </h1>
            <p className={styles.intro}>
              A straightforward, four-step process designed to keep you informed and in control — from initial requirement to final delivery.
            </p>
          </div>

          <div className={styles.timeline}>
            {STEPS.map((step) => (
              <div key={step.number} className={styles.step}>
                <div className={styles.stepLeft}>
                  <div className={styles.stepMarker}>
                    <span className={styles.stepNumber}>{step.number}</span>
                  </div>
                  {step.number < STEPS.length && (
                    <div className={styles.stepConnector} aria-hidden="true" />
                  )}
                </div>

                <div className={styles.stepContent}>
                  <div className={styles.stepIconTitle}>
                    <div className={styles.stepIcon} aria-hidden="true">
                      {step.icon}
                    </div>
                    <h2 className={styles.stepTitle}>{step.title}</h2>
                  </div>
                  <p className={styles.stepDesc}>{step.description}</p>
                  <div className={styles.stepNote}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {step.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Ready to get started?"
        description="Submit your project requirements and receive a detailed proposal within 24 hours — fixed price, defined timeline, no surprises."
      />
    </>
  );
}
