import dynamic from "next/dynamic";
import { FormSkeleton } from "@/components/Skeleton/Skeleton";
import Link from "next/link";
const StartProjectForm = dynamic(() => import("@/components/StartProjectForm/StartProjectForm"), {
  ssr: false,
  loading: () => <FormSkeleton />,
});
import styles from "./page.module.css";

export const metadata = {
  title: "Start a Project | ProjectKaro",
  description:
    "Submit your project abstract to ProjectKaro. Our team will review your abstract and respondent within 3-6 hours with next steps.",
};

export default function StartAProjectPage() {
  return (
    <section className="section" aria-labelledby="start-heading">
      <div className="container">
        <h1 id="start-heading" className={styles.title}>
          Start Your Project
        </h1>
        <p className={styles.intro}>
          Submit your project details below. We&apos;ll review it and get back to you within <span className={styles.highlight}>3-6 hours</span> with a tailored roadmap.
        </p>

        <div className={styles.grid}>
          {/* Left Column: Form */}
          <div className={styles.formColumn}>
            <StartProjectForm />
          </div>

          {/* Right Column: Info & Contact */}
          <aside className={styles.infoColumn}>
            {/* Process Card */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                What Happens Next?
              </h3>
              <ul className={styles.processList}>
                <li className={styles.processItem}>
                  <div className={styles.processNumber}>1</div>
                  <div className={styles.processContent}>
                    <h4>We Quote</h4>
                    <p>You get a strict timeline and fixed price within 6 hours.</p>
                  </div>
                </li>
                <li className={styles.processItem}>
                  <div className={styles.processNumber}>2</div>
                  <div className={styles.processContent}>
                    <h4>You Approve</h4>
                    <p>Confirm the details, and we start coding immediately.</p>
                  </div>
                </li>
                <li className={styles.processItem}>
                  <div className={styles.processNumber}>3</div>
                  <div className={styles.processContent}>
                    <h4>We Build</h4>
                    <p>Sit back. We deliver the code, report, and viva guide on time.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Why Us / Promise Card */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Our Promise
              </h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Your Project, Your IP</span>
                </li>
                <li className={styles.contactItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Full Docs Included</span>
                </li>
                <li className={styles.contactItem}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Deadlines Met, Always</span>
                </li>
              </ul>
            </div>

            {/* Contact Card */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.12 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Direct Contact
              </h3>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <a href="mailto:contact@projectkaro.com" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>contact@projectkaro.com</span>
                  </a>
                </li>
                <li className={styles.contactItem} style={{ fontSize: '0.875rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>Replies in 3-6 hours</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
