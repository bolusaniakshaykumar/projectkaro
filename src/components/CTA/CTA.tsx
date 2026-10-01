import Link from "next/link";
import styles from "./CTA.module.css";

interface CTAProps {
  title?: string;
  description?: string;
  showButton?: boolean;
}

export default function CTA({
  title = "Ready to start your project?",
  description = "Submit your requirements and receive a detailed proposal within 24 hours: a clear quote, defined timeline, no surprises.",
  showButton = true,
}: CTAProps) {
  return (
    <section className={styles.section} aria-labelledby="cta-heading">
      <div className="container">
        <div className={styles.content}>
          <p className={styles.eyebrow}>Ready when you are</p>
          <h2 id="cta-heading" className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>{description}</p>
          {showButton && (
            <div className={styles.actions}>
              <Link href="/start-a-project" className={styles.primaryBtn}>
                Get a Free Quote
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/services" className={styles.secondaryBtn}>
                View services
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
