import CTA from "@/components/CTA/CTA";
import styles from "./page.module.css";

export const metadata = {
  title: "About ProjectKaro | Our Mission & Values",
  description:
    "ProjectKaro's mission: Help students complete real-world projects with an academic-first, student-centric approach. Focus on execution, not just ideas.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className={styles.hero}>
            <p className={styles.heroLabel}>About ProjectKaro</p>
            <h1 id="about-heading" className={styles.heroTitle}>
              Empowering students to <span className={styles.heroAccent}>complete</span> their projects
            </h1>
            <p className={styles.heroSubtitle}>
              We bridge the gap between ideas and execution, helping engineering students and beginners turn concepts into finished, submission-ready projects.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Projects Completed</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Success Rate</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support Available</div>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {/* Card 1: Mission */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardText}>
                We help students complete real-world projects. Many students have ideas or requirements but struggle to execute—from choosing a problem statement to writing code, documentation, and delivering on time. ProjectKaro exists to bridge that gap with guided, structured support.
              </p>
            </div>

            {/* Card 2: Academic Approach */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Academic-First Approach</h3>
              <p className={styles.cardText}>
                We align with academic standards and requirements. Whether it&apos;s a college mini project, final-year project, or portfolio piece, we ensure the work is appropriate for submission, presentation, and evaluation. Documentation and deliverables are tailored to what institutions expect.
              </p>
            </div>

            {/* Card 3: Student Guidance */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Student-Centric Guidance</h3>
              <p className={styles.cardText}>
                Our support is designed around the student. We focus on clarity, timelines, and actionable steps so you can understand and own your project. The goal is not just to deliver a project for you, but to help you learn and complete it with confidence.
              </p>
            </div>

            {/* Card 4: Execution */}
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Focus on Execution</h3>
              <p className={styles.cardText}>
                Ideas are easy; execution is hard. We help you move from abstract to working solution—with real-world problem statements, structured milestones, and completion-focused delivery. If you&apos;re ready to start or finish a project, we&apos;re here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
