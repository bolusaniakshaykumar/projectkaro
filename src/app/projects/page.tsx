import CTA from "@/components/CTA/CTA";
import styles from "./page.module.css";

export const metadata = {
  title: "Projects | ProjectKaro",
  description:
    "Project categories at ProjectKaro: College mini projects, final-year projects, portfolio projects, and IoT projects. Pricing and timelines shared after abstract review.",
};

const CATEGORIES = [
  {
    title: "Mini Projects",
    description: "Short-term, focused projects suitable for semester or lab requirements. Ideal for building foundational skills.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Final-Year Projects",
    description: "End-to-end support for your final-year or capstone project. From problem statement to documentation and delivery.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Portfolio Projects",
    description: "Projects designed to showcase your skills and strengthen your resume for placements and internships.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "IoT Projects",
    description: "Hardware and software integration for Internet of Things applications. Sensors, connectivity, and real-world deployment.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <>
      <section className="section" aria-labelledby="projects-heading">
        <div className="container">
          <h1 id="projects-heading" className={styles.title}>
            Project Categories
          </h1>
          <p className={styles.intro}>
            We support a range of project types tailored to academic and career goals. Each category is designed to help you complete a real-world project with guided execution and academic documentation support.
          </p>

          <ul className={styles.categoryList} role="list">
            {CATEGORIES.map((cat) => (
              <li key={cat.title} className={styles.categoryCard}>
                <div className={styles.iconWrapper}>
                  {cat.icon}
                </div>
                <h2 className={styles.categoryTitle}>{cat.title}</h2>
                <p className={styles.categoryDesc}>{cat.description}</p>
              </li>
            ))}
          </ul>

          <div className={styles.note} role="note">
            <p>
              <strong>Pricing and timelines are shared after abstract review.</strong> Submit your project abstract via the Start a Project page, and our team will review scope and feasibility before sharing a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
