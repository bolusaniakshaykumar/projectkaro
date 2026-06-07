import styles from "./Testimonials.module.css";

const REVIEWS = [
  {
    name: "Arjun M.",
    role: "Business Owner, Mumbai",
    text: "ProjectKaro built our company website from scratch. The process was smooth, communication was excellent, and they delivered exactly what we discussed — on time and within budget.",
    rating: 5,
  },
  {
    name: "Priya S.",
    role: "Final Year, Computer Science",
    text: "They completed my major project including the full report and presentation slides. The code walkthrough before my viva was incredibly helpful — I felt genuinely prepared.",
    rating: 5,
  },
  {
    name: "Rahul T.",
    role: "Startup Founder",
    text: "We needed an MVP built quickly to show investors. ProjectKaro turned around a fully functional application in under three weeks. Clean code, proper architecture, no shortcuts.",
    rating: 5,
  },
  {
    name: "Sneha K.",
    role: "B.Tech Electronics, Final Year",
    text: "My research project on IoT-based sensor networks was delivered with detailed documentation and analysis. The report structure was exactly what my department required.",
    rating: 5,
  },
  {
    name: "Vikram P.",
    role: "Freelance Designer",
    text: "Needed a portfolio website that matched my brand. They understood the brief from the first conversation and built something I'm genuinely proud to show clients.",
    rating: 5,
  },
  {
    name: "Nisha R.",
    role: "B.Tech CSE, Semester 5",
    text: "Had a minor project due in 3 days and was completely stuck. ProjectKaro delivered a working solution with documentation in 2 days. Exactly what I needed.",
    rating: 5,
  },
  {
    name: "Aditya L.",
    role: "Co-founder, EdTech Startup",
    text: "The full-stack application they built handles thousands of users without issues. The codebase is clean and well-documented — our in-house dev team had no trouble understanding it.",
    rating: 5,
  },
  {
    name: "Meera D.",
    role: "Research Scholar, Data Science",
    text: "The technical consulting session saved us weeks of rework. They reviewed our ML pipeline, identified the bottlenecks, and gave us a clear path forward with documented recommendations.",
    rating: 5,
  },
  {
    name: "Karthik B.",
    role: "Final Year, Information Technology",
    text: "ProjectKaro handled my entire final-year AI project. From the model training to the web interface. My internal guide was impressed with the quality and structure of the work.",
    rating: 5,
  },
  {
    name: "Divya N.",
    role: "Small Business Owner",
    text: "Our previous website was embarrassingly outdated. The new one ProjectKaro built has already brought in three new clients. Professional, fast, and straightforward to work with.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Client Feedback</p>
          <h2 id="testimonials-heading" className={styles.title}>
            What our clients say
          </h2>
        </div>

        <div className={styles.scrollContainer}>
          <div className={styles.track}>
            {REVIEWS.map((review, i) => (
              <div key={`s1-${i}`} className={styles.cardWrapper}>
                <div className={styles.card}>
                  <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
                  <div className={styles.author}>
                    <div className={styles.avatar}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.name}>{review.name}</div>
                      <div className={styles.role}>{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {REVIEWS.map((review, i) => (
              <div key={`s2-${i}`} className={styles.cardWrapper}>
                <div className={styles.card}>
                  <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
                  <div className={styles.author}>
                    <div className={styles.avatar}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className={styles.name}>{review.name}</div>
                      <div className={styles.role}>{review.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.fadeLeft} aria-hidden="true" />
          <div className={styles.fadeRight} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
