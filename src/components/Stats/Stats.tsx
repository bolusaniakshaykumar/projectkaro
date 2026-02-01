import styles from "./Stats.module.css";

const STATS = [
  { value: "10+", label: "Colleges", icon: "colleges" },
  { value: "100+", label: "Projects delivered", icon: "projects" },
  { value: "500+", label: "Happy students", icon: "students" },
  { value: "</>", label: "All stacks covered", icon: "stacks" },
];

export default function Stats() {
  return (
    <section className={styles.stats} aria-labelledby="stats-heading">
      <div className="container">
        <h2 id="stats-heading" className={styles.visuallyHidden}>
          Our impact
        </h2>
        <ul className={styles.list} role="list">
          {STATS.map(({ value, label, icon }) => (
            <li key={label} className={styles.item}>
              <div className={styles.icon}>
                {icon === 'colleges' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-8-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9h6M9 13h6M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )}
                {icon === 'projects' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {icon === 'students' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 5.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zM17.5 9.5l2.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                {icon === 'stacks' && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span className={styles.value}>{value}</span>
              <span className={styles.label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
