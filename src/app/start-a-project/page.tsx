import dynamic from "next/dynamic";
import { FormSkeleton } from "@/components/Skeleton/Skeleton";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import styles from "./page.module.css";

const StartProjectForm = dynamic(() => import("@/components/StartProjectForm/StartProjectForm"), {
  loading: () => <FormSkeleton />,
});

export const metadata = createPageMetadata({
  title: "Get a Free Quote",
  description:
    "Submit your project requirements to ProjectKaro. We respond within 24 hours with a detailed proposal, fixed price, and timeline for web development or student project work.",
  path: "/start-a-project",
});

export default function StartAProjectPage() {
  const pageTitle = "Get a Free Quote";

  return (
    <section className="section" aria-labelledby="start-heading">
      <JsonLd
        data={[
          webPageSchema({
            path: "/start-a-project",
            title: pageTitle,
            description:
              "Submit your project requirements and receive a fixed quote within 24 hours.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: pageTitle, path: "/start-a-project" },
          ]),
        ]}
      />
      <div className="container">
        <h1 id="start-heading" className={styles.title}>
          Get a Free Quote
        </h1>
        <p className={styles.intro}>
          Tell us about your project and we will respond within{" "}
          <span className={styles.highlight}>24 hours</span> with a detailed proposal, timeline, and fixed price.
        </p>

        <div className={styles.grid}>
          <div className={styles.formColumn}>
            <StartProjectForm />
          </div>

          <aside className={styles.infoColumn}>
            {/* What Happens Next */}
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                What Happens Next
              </h2>
              <ul className={styles.processList}>
                <li className={styles.processItem}>
                  <div className={styles.processNumber}>1</div>
                  <div className={styles.processContent}>
                    <h4>We Review</h4>
                    <p>Your submission is reviewed by our team within a few hours.</p>
                  </div>
                </li>
                <li className={styles.processItem}>
                  <div className={styles.processNumber}>2</div>
                  <div className={styles.processContent}>
                    <h4>You Receive a Proposal</h4>
                    <p>A detailed proposal with fixed price and timeline — within 24 hours.</p>
                  </div>
                </li>
                <li className={styles.processItem}>
                  <div className={styles.processNumber}>3</div>
                  <div className={styles.processContent}>
                    <h4>We Start Work</h4>
                    <p>On your approval, development begins immediately.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Our Commitment */}
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Our Commitment
              </h2>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Fixed price — no hidden costs</span>
                </li>
                <li className={styles.contactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>On-time delivery, every time</span>
                </li>
                <li className={styles.contactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Complete documentation included</span>
                </li>
                <li className={styles.contactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Revisions within scope at no charge</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className={styles.infoCard}>
              <h2 className={styles.infoTitle}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.12 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Prefer to Talk Directly?
              </h2>
              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <a href="mailto:contact@projectkaro.com" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>contact@projectkaro.com</span>
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>Response within 24 hours</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
