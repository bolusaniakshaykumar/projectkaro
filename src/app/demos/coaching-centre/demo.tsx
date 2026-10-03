"use client";

import type { FormEvent } from "react";
import {
  DEMO_PHONE_DISPLAY,
  DEMO_PHONE_LINK,
  demoWhatsAppLink,
} from "@/components/DemoShell/demo-constants";
import styles from "./page.module.css";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function CourseIcon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

const courses = [
  {
    tag: "Most popular",
    title: "JEE Mains + Advanced",
    description:
      "A complete two year classroom program covering Physics, Chemistry and Maths with daily practice, weekly tests and personal mentoring.",
    duration: "2 years, Classes XI to XII",
    fee: "Rs. 1,20,000 per year (Sample)",
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    tag: "Small batches",
    title: "NEET-UG",
    description:
      "Focused Biology, Physics and Chemistry preparation with NCERT-first teaching, regular mock tests and one-on-one doubt sessions.",
    duration: "2 years, Classes XI to XII",
    fee: "Rs. 1,10,000 per year (Sample)",
    icon: "M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6.5 5.5 5.5 0 0 1 21.5 12c-2.5 4.4-9.5 9-9.5 9z",
  },
  {
    tag: "Early start",
    title: "Foundation IX-X",
    description:
      "Build strong concepts in Science and Maths early, with Olympiad and NTSE training woven into the school syllabus schedule.",
    duration: "1 year, Classes IX and X",
    fee: "Rs. 60,000 per year (Sample)",
    icon: "M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5",
  },
];

const faculty = [
  {
    initials: "PH",
    role: "Physics Faculty, 10 yrs (Sample)",
    bio: "Known for making mechanics and electrodynamics feel simple with real life examples.",
  },
  {
    initials: "CH",
    role: "Chemistry Faculty, 8 yrs (Sample)",
    bio: "Specialises in organic chemistry shortcuts and NCERT line-by-line revision.",
  },
  {
    initials: "BI",
    role: "Biology Faculty, 12 yrs (Sample)",
    bio: "NEET mentor with diagram-first teaching and daily MCQ drills.",
  },
];

const results = [
  { value: "120+", label: "Selections in 2025 (Sample)" },
  { value: "95%", label: "Average board score (Sample)" },
  { value: "30", label: "Students per batch (Sample)" },
  { value: "40+", label: "IIT and AIIMS alumni (Sample)" },
];

const testimonials = [
  {
    quote:
      "The small batch size meant teachers knew exactly where I was struggling. My physics score doubled in six months.",
    name: "Kiran R. (Sample)",
    detail: "JEE Advanced Qualifier, Parent of Student",
  },
  {
    quote:
      "Weekly tests and personal feedback kept my daughter on track through Class XII. The mentors genuinely care.",
    name: "Sneha P. (Sample)",
    detail: "Parent of NEET Student",
  },
  {
    quote:
      "Doubt sessions after every class made the difference. I never carried a single doubt into the next chapter.",
    name: "Vikram T. (Sample)",
    detail: "JEE Mains, 99.2 Percentile",
  },
];

const batches = [
  { name: "Morning Batch", time: "7:00 AM to 10:00 AM", days: "Mon to Sat", who: "Class XI" },
  { name: "Evening Batch", time: "4:00 PM to 7:30 PM", days: "Mon to Sat", who: "Class XII" },
  { name: "Weekend Batch", time: "9:00 AM to 1:00 PM", days: "Sat and Sun", who: "Foundation IX-X" },
  { name: "Dropper Batch", time: "10:00 AM to 2:00 PM", days: "Mon to Fri", who: "Repeaters" },
];

export default function CoachingDemo() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const course = String(data.get("course") || "").trim();
    const klass = String(data.get("class") || "").trim();
    const text =
      `Hello Aspire Academy, this is a demo admission enquiry.\n` +
      `Name: ${name}\nPhone: ${phone}\nCourse: ${course}\nClass: ${klass}`;
    window.open(demoWhatsAppLink(text), "_blank");
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10 12 5 2 10l10 5 10-5zM6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 10v6" />
              </svg>
            </span>
            <span className={styles.brandName}>Aspire Academy</span>
          </a>
          <nav className={styles.nav} aria-label="Primary">
            <a href="#courses">Courses</a>
            <a href="#faculty">Faculty</a>
            <a href="#results">Results</a>
            <a href="#batches">Batches</a>
            <a href="#admissions">Admissions</a>
          </nav>
          <div className={styles.headerCtas}>
            <a className={styles.btnCall} href="tel:+919000000000" aria-label={`Call ${DEMO_PHONE_DISPLAY}`}>
              <PhoneIcon />
              <span>Call</span>
            </a>
            <a className={styles.btnWhats} href={DEMO_PHONE_LINK} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>Admissions open 2026-27</p>
                <h1 className={styles.heroTitle}>
                  Crack JEE and NEET with small batches that actually know you
                </h1>
                <p className={styles.heroSub}>
                  Max 30 students per batch, teachers who track every test you take,
                  and a study plan built around your school schedule.
                </p>
                <div className={styles.heroCtas}>
                  <a className={styles.btnPrimary} href="#admissions">
                    Admission Enquiry
                  </a>
                  <a className={styles.btnGhost} href="#courses">
                    Explore Courses
                  </a>
                </div>
                <p className={styles.heroNote}>
                  Free demo class every Sunday. No fee, just bring your notebook.
                </p>
              </div>
              <div className={styles.heroVisual} aria-hidden="true">
                <div className={styles.heroCard}>
                  <p className={styles.heroCardTag}>Sample batch card</p>
                  <p className={styles.heroCardTitle}>JEE 2027, Morning Batch</p>
                  <div className={styles.heroCardStats}>
                    <div>
                      <strong>30</strong>
                      <span>students max</span>
                    </div>
                    <div>
                      <strong>120+</strong>
                      <span>tests a year</span>
                    </div>
                    <div>
                      <strong>1:1</strong>
                      <span>mentoring</span>
                    </div>
                  </div>
                  <div className={styles.heroCardBar}>
                    <span>Seats filled</span>
                    <span>22 / 30</span>
                  </div>
                  <div className={styles.heroCardProgress}>
                    <i style={{ width: "73%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="courses" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Programs</p>
              <h2 className={styles.sectionTitle}>Courses built for one goal: your selection</h2>
              <p className={styles.sectionSub}>
                Every course includes study material, test series and personal mentoring.
              </p>
            </div>
            <div className={styles.coursesGrid}>
              {courses.map((c) => (
                <article key={c.title} className={styles.card}>
                  <span className={styles.courseTag}>{c.tag}</span>
                  <span className={styles.iconWrap}>
                    <CourseIcon d={c.icon} />
                  </span>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <dl className={styles.courseMeta}>
                    <div>
                      <dt>Duration</dt>
                      <dd>{c.duration}</dd>
                    </div>
                    <div>
                      <dt>Fee</dt>
                      <dd>{c.fee}</dd>
                    </div>
                  </dl>
                  <a className={styles.cardCta} href="#admissions">
                    Enquire for this course
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faculty" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Teachers</p>
              <h2 className={styles.sectionTitle}>Learn from people who love teaching</h2>
              <p className={styles.sectionSub}>
                Full time faculty, not visiting lecturers. They know every student by name.
              </p>
            </div>
            <div className={styles.facultyGrid}>
              {faculty.map((f) => (
                <article key={f.role} className={styles.card}>
                  <span className={styles.avatar} aria-hidden="true">{f.initials}</span>
                  <h3>{f.role}</h3>
                  <p>{f.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className={styles.resultsStrip}>
          <div className={styles.container}>
            <p className={styles.resultsLabel}>
              Our track record <span className={styles.sampleTag}>Sample</span>
            </p>
            <div className={styles.resultsGrid}>
              {results.map((r) => (
                <div key={r.label} className={styles.result}>
                  <strong>{r.value}</strong>
                  <span>{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Success stories</p>
              <h2 className={styles.sectionTitle}>
                Students and parents speak <span className={styles.sampleTag}>Sample</span>
              </h2>
            </div>
            <div className={styles.testiGrid}>
              {testimonials.map((t) => (
                <figure key={t.name} className={styles.card}>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.detail}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="batches" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Schedule</p>
              <h2 className={styles.sectionTitle}>Batches and timings</h2>
              <p className={styles.sectionSub}>
                Pick the slot that fits your school hours. Timings are illustrative samples.
              </p>
            </div>
            <div className={styles.batchTable} role="table" aria-label="Batch timings">
              <div className={styles.batchHead} role="row">
                <span role="columnheader">Batch</span>
                <span role="columnheader">Timings</span>
                <span role="columnheader">Days</span>
                <span role="columnheader">For</span>
              </div>
              {batches.map((b) => (
                <div key={b.name} className={styles.batchRow} role="row">
                  <span className={styles.batchName} role="cell">
                    <ClockIcon />
                    {b.name}
                  </span>
                  <span role="cell">{b.time}</span>
                  <span role="cell">{b.days}</span>
                  <span role="cell">{b.who}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="admissions" className={`${styles.section} ${styles.admissionsBand}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Join us</p>
              <h2 className={styles.sectionTitle}>Admission enquiry</h2>
              <p className={styles.sectionSub}>
                Fill this in and our counsellor will call you back to plan your free demo class.
              </p>
            </div>
            <div className={styles.contactGrid}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="as-name">Student name</label>
                    <input id="as-name" name="name" type="text" required placeholder="Student's name" autoComplete="name" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="as-phone">Phone number</label>
                    <input id="as-phone" name="phone" type="tel" required placeholder="Parent's phone number" autoComplete="tel" />
                  </div>
                </div>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="as-course">Course</label>
                    <select id="as-course" name="course" required defaultValue="">
                      <option value="" disabled>Select a course</option>
                      <option>JEE Mains + Advanced</option>
                      <option>NEET-UG</option>
                      <option>Foundation IX-X</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="as-class">Current class</label>
                    <select id="as-class" name="class" required defaultValue="">
                      <option value="" disabled>Select class</option>
                      <option>Class IX</option>
                      <option>Class X</option>
                      <option>Class XI</option>
                      <option>Class XII</option>
                      <option>Dropper</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className={styles.btnPrimary}>
                  <WhatsAppIcon />
                  Send Enquiry on WhatsApp
                </button>
                <p className={styles.formNote}>
                  Submitting opens WhatsApp with your enquiry pre-filled. Demo only, no data is stored.
                </p>
              </form>
              <aside className={styles.infoCard}>
                <h3>Visit the centre</h3>
                <p>
                  3rd Floor, Sample Plaza, Dilsukhnagar,<br />
                  Hyderabad 500060 (Sample)
                </p>
                <p>
                  <strong>Phone:</strong> {DEMO_PHONE_DISPLAY}
                </p>
                <p>
                  <strong>Counselling hours:</strong> 9:00 AM to 8:00 PM, all days
                </p>
                <div className={styles.officeCtas}>
                  <a className={styles.btnCall} href="tel:+919000000000">
                    <PhoneIcon />
                    <span>Call Now</span>
                  </a>
                  <a className={styles.btnWhats} href={DEMO_PHONE_LINK} target="_blank" rel="noreferrer">
                    <WhatsAppIcon />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <p className={styles.footerBrand}>Aspire Academy</p>
              <p className={styles.footerText}>
                Small-batch JEE and NEET coaching with personal mentoring for every student.
              </p>
            </div>
            <nav aria-label="Footer">
              <a href="#courses">Courses</a>
              <a href="#faculty">Faculty</a>
              <a href="#results">Results</a>
              <a href="#admissions">Admissions</a>
            </nav>
          </div>
          <p className={styles.footerFine}>
            Sample website concept. All names, figures and addresses are fictional.
          </p>
        </div>
      </footer>
    </div>
  );
}
