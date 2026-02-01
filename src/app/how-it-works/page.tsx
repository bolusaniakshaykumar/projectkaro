import CTA from "@/components/CTA/CTA";
import styles from "./page.module.css";

export const metadata = {
  title: "How It Works | ProjectKaro",
  description:
    "How ProjectKaro works: Submit your project abstract, get scope and feasibility review, receive pricing and timeline via email, then guided execution to completion.",
};

const STEPS = [
  {
    number: 1,
    title: "Submit project abstract",
    description: "Fill out the Start a Project form with your details and upload your project abstract (PDF or DOC). Include project title, description, and any specific requirements you have.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Review & Feasibility",
    description: "Our experts review your abstract to understand the scope, technical requirements, and alignment with your academic goals. We ensure it's feasible within your timeline.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "Proposal via Email",
    description: "Within 3-6 hours, we send you a tailored proposal including the project roadmap, clear pricing, and delivery timeline. No hidden costs or upfront commitments.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Execution & Delivery",
    description: "Once approved, we begin the guided execution. You receive regular updates, documentation support, and code walkthroughs until final delivery.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="section" aria-labelledby="how-heading">
        <div className="container">
          <h1 id="how-heading" className={styles.title}>
            Your Journey to Completion
          </h1>
          <p className={styles.intro}>
            We&apos;ve streamlined the process to be simple, transparent, and stress-free. From the moment you submit to the final viva, we are with you.
          </p>

          <div className={styles.timeline}>
            {STEPS.map((step) => (
              <div key={step.number} className={styles.step}>
                {/* Marker connected to the line */}
                <div className={styles.stepMarker}>
                  {step.number}
                </div>

                {/* Content Card */}
                <div className={styles.stepContent}>
                  <h2 className={styles.stepTitle}>
                    {/* Icon is decorative, adjacent to title */}
                    <span style={{ color: 'var(--color-accent)' }}>{step.icon}</span>
                    {step.title}
                  </h2>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
