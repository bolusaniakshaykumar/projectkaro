import Link from "next/link";
import styles from "./CTA.module.css";

interface CTAProps {
  title?: string;
  description?: string;
  showButton?: boolean;
}

export default function CTA({
  title = "Ready to pass with zero stress?",
  description = "Submit your abstract now, and we'll handle the rest. Code, Report, PPT — All sorted for you.",
  showButton = true,
}: CTAProps) {
  return (
    <section className={`section ${styles.section}`} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.card}>
          {/* Background Decor */}
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.gridPattern} aria-hidden="true" />

          <div className={styles.content}>
            <h2 id="cta-heading" className={styles.title}>
              {title}
            </h2>
            <p className={styles.description}>{description}</p>
            {showButton && (
              <div className={styles.actions}>
                <Link href="/start-a-project" className={styles.primaryBtn}>
                  Start a Project
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
                <Link href="/projects" className={styles.secondaryBtn}>
                  View Examples
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
