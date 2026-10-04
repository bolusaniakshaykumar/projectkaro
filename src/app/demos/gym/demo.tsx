"use client";

import { useState, type FormEvent } from "react";
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

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function ProgramIcon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
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

const programs = [
  {
    title: "Strength Training",
    description:
      "Barbells, dumbbells and machines with coached sessions that build real, lasting strength safely.",
    meta: "All levels, 60 min sessions",
    icon: "M6.5 6.5 17.5 17.5M4 9v6M2 11v2M20 9v6M22 11v2M9 4v3M9 17v3M15 4v3M15 17v3",
  },
  {
    title: "HIIT & Cardio",
    description:
      "High energy interval workouts that torch calories and build serious engine in 45 minutes flat.",
    meta: "Mon, Wed, Fri batches",
    icon: "M12 2v4M12 18v4M4.9 4.9l2.9 2.9M16.2 16.2l2.9 2.9M2 12h4M18 12h4M4.9 19.1l2.9-2.9M16.2 7.8l2.9-2.9M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0z",
  },
  {
    title: "Yoga & Mobility",
    description:
      "Recover, stretch and move better with guided yoga and mobility flows for lifters and desk workers.",
    meta: "Tue, Thu, Sat mornings",
    icon: "M12 21c-4 0-7-2.5-7-6 0-2.5 1.5-4.5 3.5-5.5C9.5 8 10 6.5 10 5c0-1.5 1-2.5 2-2.5s2 1 2 2.5c0 1.5.5 3 1.5 4.5 2 1 3.5 3 3.5 5.5 0 3.5-3 6-7 6z",
  },
  {
    title: "Personal Training",
    description:
      "One-on-one coaching with a custom plan, nutrition guidance and accountability every single week.",
    meta: "By appointment",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
];

const trainers = [
  {
    initials: "SC",
    role: "Strength Coach (Sample)",
    bio: "Powerlifting background. Teaches perfect form before heavy weight, every time.",
  },
  {
    initials: "HC",
    role: "HIIT Coach (Sample)",
    bio: "Runs the 6 AM burner batches. Expect loud music and zero excuses.",
  },
  {
    initials: "YI",
    role: "Yoga Instructor (Sample)",
    bio: "Mobility and recovery specialist for lifters, runners and desk workers.",
  },
];

const plans = [
  {
    name: "Monthly",
    price: "Rs. 2,000",
    period: "per month",
    features: ["Full gym floor access", "2 group classes per week", "Locker access", "Fitness assessment"],
    featured: false,
  },
  {
    name: "Quarterly",
    price: "Rs. 5,000",
    period: "per 3 months",
    features: ["Full gym floor access", "Unlimited group classes", "1 personal session", "Diet starter plan"],
    featured: true,
  },
  {
    name: "Annual",
    price: "Rs. 15,000",
    period: "per 12 months",
    features: ["Everything in Quarterly", "4 personal sessions", "Guest passes (4)", "Priority batch slots"],
    featured: false,
  },
];

const gallery: { label: string; tone: "tone1" | "tone2" | "tone3" | "tone4" }[] = [
  { label: "Strength Zone (Sample)", tone: "tone1" },
  { label: "Cardio Deck (Sample)", tone: "tone2" },
  { label: "Yoga Studio (Sample)", tone: "tone3" },
  { label: "Functional Area (Sample)", tone: "tone4" },
];

const testimonials = [
  {
    quote: "Lost 12 kg in five months. The coaches actually check your form instead of staring at their phones.",
    name: "Aditya V. (Sample)",
    detail: "Member for 1 year",
  },
  {
    quote: "The 6 AM HIIT batch changed my mornings. I have more energy at work than I have had in years.",
    name: "Meera S. (Sample)",
    detail: "Member for 8 months",
  },
  {
    quote: "Personal training here fixed my deadlift and my back pain. Worth every rupee of the plan.",
    name: "Farhan Q. (Sample)",
    detail: "Member for 6 months",
  },
];

const timings = [
  { days: "Monday to Friday", time: "5:30 AM to 10:30 PM" },
  { days: "Saturday", time: "7:00 AM to 8:00 PM" },
  { days: "Sunday", time: "7:00 AM to 12:00 PM" },
];

export default function GymDemo() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const goal = String(data.get("goal") || "").trim();
    const slot = String(data.get("slot") || "").trim();
    const text =
      `Hello IronPulse Fitness Studio, this is a demo trial booking.\n` +
      `Name: ${name}\nPhone: ${phone}\nGoal: ${goal}\nPreferred slot: ${slot}`;
    window.open(demoWhatsAppLink(text), "_blank");
    window.setTimeout(() => setSending(false), 1200);
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              <BoltIcon />
            </span>
            <span className={styles.brandName}>IronPulse</span>
          </a>
          <nav className={styles.nav} aria-label="Primary">
            <a href="#programs">Programs</a>
            <a href="#trainers">Trainers</a>
            <a href="#plans">Plans</a>
            <a href="#gallery">Gallery</a>
            <a href="#trial">Free Trial</a>
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
            <p className={styles.eyebrow}>IronPulse Fitness Studio</p>
            <h1 className={styles.heroTitle}>
              Train hard.<br />
              <span>Stay consistent.</span>
            </h1>
            <p className={styles.heroSub}>
              Strength, cardio and mobility coaching under one roof, with trainers
              who show up for you as hard as you show up for yourself.
            </p>
            <div className={styles.heroCtas}>
              <a className={styles.btnPrimary} href="#trial">
                Book Free Trial
              </a>
              <a className={styles.btnGhost} href="#plans">
                View Membership Plans
              </a>
            </div>
            <div className={styles.heroStats}>
              <div>
                <strong>500+</strong>
                <span>Active members (Sample)</span>
              </div>
              <div>
                <strong>40+</strong>
                <span>Weekly classes (Sample)</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Certified coaches (Sample)</span>
              </div>
            </div>
          </div>
        </section>

        <section id="programs" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Programs</p>
              <h2 className={styles.sectionTitle}>Pick your battlefield</h2>
              <p className={styles.sectionSub}>
                Four ways to train, one standard: coached, progressive and safe.
              </p>
            </div>
            <div className={styles.programsGrid}>
              {programs.map((p) => (
                <article key={p.title} className={styles.card}>
                  <span className={styles.iconWrap}>
                    <ProgramIcon d={p.icon} />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <p className={styles.cardMeta}>{p.meta}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trainers" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Coaches</p>
              <h2 className={styles.sectionTitle}>Train with people who care</h2>
              <p className={styles.sectionSub}>
                Certified coaches on the floor at all hours, not just for PT clients.
              </p>
            </div>
            <div className={styles.trainersGrid}>
              {trainers.map((t) => (
                <article key={t.role} className={styles.card}>
                  <span className={styles.avatar} aria-hidden="true">{t.initials}</span>
                  <h3>{t.role}</h3>
                  <p>{t.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Membership</p>
              <h2 className={styles.sectionTitle}>
                Simple pricing <span className={styles.sampleTag}>Sample pricing</span>
              </h2>
              <p className={styles.sectionSub}>
                No joining fee, no lock-in tricks. Pause anytime for travel or injury.
              </p>
            </div>
            <div className={styles.plansGrid}>
              {plans.map((p) => (
                <article key={p.name} className={`${styles.planCard} ${p.featured ? styles.planFeatured : ""}`}>
                  {p.featured && <span className={styles.planBadge}>Best value</span>}
                  <h3>{p.name}</h3>
                  <p className={styles.planPrice}>
                    {p.price} <span>{p.period}</span>
                  </p>
                  <ul>
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a className={styles.btnPlan} href="#trial">
                    Start with free trial
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Inside IronPulse</p>
              <h2 className={styles.sectionTitle}>
                Take a look around <span className={styles.sampleTag}>Sample</span>
              </h2>
            </div>
            <div className={styles.galleryGrid}>
              {gallery.map((g) => (
                <div key={g.label} className={`${styles.galleryTile} ${styles[g.tone]}`}>
                  <span className={styles.galleryLabel}>{g.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Members</p>
              <h2 className={styles.sectionTitle}>
                Results people talk about <span className={styles.sampleTag}>Sample</span>
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

        <section id="trial" className={styles.trialSection}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Free trial</p>
              <h2 className={styles.sectionTitle}>Book your free trial session</h2>
              <p className={styles.sectionSub}>
                One full workout with a coach, plus a fitness assessment. No card required.
              </p>
            </div>
            <div className={styles.contactGrid}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="ip-name">Full name</label>
                    <input id="ip-name" name="name" type="text" required placeholder="Your name" autoComplete="name" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="ip-phone">Phone number</label>
                    <input id="ip-phone" name="phone" type="tel" required placeholder="Your phone number" autoComplete="tel" />
                  </div>
                </div>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="ip-goal">Your goal</label>
                    <select id="ip-goal" name="goal" required defaultValue="">
                      <option value="" disabled>Select your goal</option>
                      <option>Build strength</option>
                      <option>Lose weight</option>
                      <option>Improve fitness</option>
                      <option>Yoga and mobility</option>
                      <option>Personal training</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="ip-slot">Preferred slot</label>
                    <select id="ip-slot" name="slot" required defaultValue="">
                      <option value="" disabled>Select a slot</option>
                      <option>Morning (6 AM to 10 AM)</option>
                      <option>Midday (10 AM to 4 PM)</option>
                      <option>Evening (4 PM to 9 PM)</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className={styles.btnPrimary} disabled={sending}>
                  <WhatsAppIcon />
                  {sending ? "Opening WhatsApp…" : "Book Trial on WhatsApp"}
                </button>
                <p className={styles.formNote}>
                  Submitting opens WhatsApp with your booking pre-filled. Demo only, no data is stored.
                </p>
              </form>
              <aside className={styles.infoCard}>
                <h3>Timings and location</h3>
                <ul className={styles.timingList}>
                  {timings.map((t) => (
                    <li key={t.days}>
                      <strong>{t.days}</strong>
                      <span>{t.time}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Ground Floor, Sample Arcade, Madhapur,<br />
                  Hyderabad 500081 (Sample)
                </p>
                <p>
                  <strong>Phone:</strong> {DEMO_PHONE_DISPLAY}
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
              <p className={styles.footerBrand}>IronPulse Fitness Studio</p>
              <p className={styles.footerText}>
                Strength, cardio and mobility coaching for people who show up.
              </p>
            </div>
            <nav aria-label="Footer">
              <a href="#programs">Programs</a>
              <a href="#trainers">Trainers</a>
              <a href="#plans">Plans</a>
              <a href="#trial">Free Trial</a>
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
