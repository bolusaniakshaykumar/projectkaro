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
    title: "Submit Your Abstract",
    description: "Upload your project idea, abstract, or problem statement. No abstract? No problem. Just tell us your domain (e.g., IoT, ML) and we'll suggest topics.",
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
    title: "We Review & Quote",
    description: "Our team checks the requirements and sends you a fixed price and timeline within 3-6 hours. No hidden fees.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "We Build It",
    description: "Once you confirm, our developers start building your project. We handle the coding, hardware assembly, and error fixing.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "Delivery & Viva Prep",
    description: "You get the complete source code, project report, and a 1-on-1 explanation session so you can answer any question during your viva.",
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
            From &quot;Stressed&quot; to &quot;Submitted&quot;
          </h1>
          <p className={styles.intro}>
            We&apos;ve made the process incredibly simple. You give us the requirements, we give you the completed project. Here&apos;s how it works:
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
