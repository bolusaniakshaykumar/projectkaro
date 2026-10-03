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

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ServiceIcon({ d }: { d: string }) {
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

const services = [
  {
    title: "Income Tax Filing",
    description:
      "Accurate ITR filing for individuals, professionals and businesses, with deductions planned the right way so you never overpay.",
    icon: "M6 2h12a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM9 7h6M9 11h.01M12 11h.01M15 11h.01M9 15h.01M12 15h.01M15 15h.01M9 19h.01M12 19h.01M15 19h.01",
  },
  {
    title: "GST Registration & Filing",
    description:
      "New GST registrations, monthly and quarterly returns, and reconciliation handled end to end, with reminders before every due date.",
    icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 13h6M9 17h6",
  },
  {
    title: "Company Audit",
    description:
      "Statutory, internal and tax audits conducted thoroughly and on schedule, with clear reports your board and bankers can trust.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4",
  },
  {
    title: "Bookkeeping",
    description:
      "Clean monthly books, reconciled accounts and MIS reports, so you always know exactly where your business stands.",
    icon: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
  },
  {
    title: "Startup Compliance",
    description:
      "Incorporation support, ROC filings, DPIIT recognition and investor-ready documentation for early stage companies.",
    icon: "M2 7h20a1 1 0 0 1 1 1v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20",
  },
];

const team = [
  {
    initials: "VA",
    role: "Founder, FCA (Sample)",
    bio: "Leads audits and complex tax matters for growing companies.",
  },
  {
    initials: "TA",
    role: "Partner, Tax & Audit (Sample)",
    bio: "Heads GST compliance and direct tax advisory for clients.",
  },
  {
    initials: "BK",
    role: "Manager, Bookkeeping (Sample)",
    bio: "Runs monthly bookkeeping and MIS reporting for retainers.",
  },
];

const steps = [
  {
    n: "1",
    title: "Share your details",
    text: "Tell us about your business and what you need on a quick call or WhatsApp chat.",
  },
  {
    n: "2",
    title: "Document review",
    text: "We collect your documents securely and review them for gaps or savings.",
  },
  {
    n: "3",
    title: "Filing and compliance",
    text: "Returns, registrations and audits are completed accurately and on time.",
  },
  {
    n: "4",
    title: "Ongoing support",
    text: "Due-date reminders and year-round guidance keep you fully compliant.",
  },
];

const testimonials = [
  {
    quote:
      "They took over our GST filings and books completely. We have not missed a single due date in two years.",
    name: "Rohit S. (Sample)",
    detail: "Manufacturing Business Owner",
  },
  {
    quote:
      "Clear advice, fixed timelines and zero jargon. Our audit and tax planning finally feel under control.",
    name: "Priya M. (Sample)",
    detail: "Startup Founder",
  },
  {
    quote:
      "From registration to monthly returns, everything is handled. I just focus on running my store.",
    name: "Anil K. (Sample)",
    detail: "Retail Business Owner",
  },
];

export default function CaFirmDemo() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();
    const text =
      `Hello Verma & Associates, this is a demo enquiry.\n` +
      `Name: ${name}\nPhone: ${phone}\nService: ${service}\n` +
      `Message: ${message}`;
    window.open(demoWhatsAppLink(text), "_blank");
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#top" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 11h.01M15 11h.01M12 8h.01" />
              </svg>
            </span>
            <span className={styles.brandName}>Verma &amp; Associates</span>
          </a>
          <nav className={styles.nav} aria-label="Primary">
            <a href="#services">Services</a>
            <a href="#team">Team</a>
            <a href="#process">Process</a>
            <a href="#testimonials">Clients</a>
            <a href="#contact">Contact</a>
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
                <p className={styles.eyebrow}>Chartered Accountants</p>
                <h1 className={styles.heroTitle}>
                  Tax, audit and compliance for growing businesses
                </h1>
                <p className={styles.heroSub}>
                  Verma &amp; Associates helps startups, traders and professionals stay
                  fully compliant, with filings done right and on time, every time.
                </p>
                <div className={styles.heroCtas}>
                  <a className={styles.btnPrimary} href="#contact">
                    Book Free Consultation
                  </a>
                  <a className={styles.btnGhost} href="#services">
                    View Services
                  </a>
                </div>
                <ul className={styles.trustRow}>
                  <li>
                    <CheckIcon />
                    <span>15+ years of practice (Sample)</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>500+ clients served (Sample)</span>
                  </li>
                  <li>
                    <CheckIcon />
                    <span>Zero missed due dates (Sample)</span>
                  </li>
                </ul>
              </div>
              <div className={styles.heroVisual} aria-hidden="true">
                <div className={styles.heroCard}>
                  <p className={styles.heroCardTitle}>This quarter, done for you</p>
                  <div className={styles.heroCardRow}>
                    <span className={styles.heroCardCheck}><CheckIcon /></span>
                    <div>
                      <p>Income tax return filed</p>
                      <small>Verified and acknowledged</small>
                    </div>
                  </div>
                  <div className={styles.heroCardRow}>
                    <span className={styles.heroCardCheck}><CheckIcon /></span>
                    <div>
                      <p>GST returns reconciled</p>
                      <small>GSTR-1, GSTR-3B matched</small>
                    </div>
                  </div>
                  <div className={styles.heroCardRow}>
                    <span className={styles.heroCardCheck}><CheckIcon /></span>
                    <div>
                      <p>Books closed monthly</p>
                      <small>MIS report shared</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>What we do</p>
              <h2 className={styles.sectionTitle}>Services that keep you compliant</h2>
              <p className={styles.sectionSub}>
                One firm for every tax and compliance need, so nothing falls through the cracks.
              </p>
            </div>
            <div className={styles.servicesGrid}>
              {services.map((s) => (
                <article key={s.title} className={styles.card}>
                  <span className={styles.iconWrap}>
                    <ServiceIcon d={s.icon} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="team" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Our people</p>
              <h2 className={styles.sectionTitle}>Qualified professionals, personal attention</h2>
              <p className={styles.sectionSub}>
                You always know exactly who is handling your work.
              </p>
            </div>
            <div className={styles.teamGrid}>
              {team.map((t) => (
                <article key={t.role} className={styles.card}>
                  <span className={styles.avatar} aria-hidden="true">{t.initials}</span>
                  <h3>{t.role}</h3>
                  <p>{t.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>How it works</p>
              <h2 className={styles.sectionTitle}>Simple process, zero hassle</h2>
              <p className={styles.sectionSub}>
                From first call to ongoing support in four clear steps.
              </p>
            </div>
            <ol className={styles.stepsGrid}>
              {steps.map((s) => (
                <li key={s.n} className={styles.step}>
                  <span className={styles.stepNum} aria-hidden="true">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="testimonials" className={`${styles.section} ${styles.sectionAlt}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Client words</p>
              <h2 className={styles.sectionTitle}>
                Trusted by business owners <span className={styles.sampleTag}>Sample</span>
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

        <section id="contact" className={`${styles.section} ${styles.contactBand}`}>
          <div className={styles.container}>
            <div className={styles.sectionHead}>
              <p className={styles.eyebrow}>Get in touch</p>
              <h2 className={styles.sectionTitle}>Book your free consultation</h2>
              <p className={styles.sectionSub}>
                Share your details and we will reach out within one working day.
              </p>
            </div>
            <div className={styles.contactGrid}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                  <label htmlFor="ca-name">Full name</label>
                  <input id="ca-name" name="name" type="text" required placeholder="Your name" autoComplete="name" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="ca-phone">Phone number</label>
                  <input id="ca-phone" name="phone" type="tel" required placeholder="Your phone number" autoComplete="tel" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="ca-service">Service you need</label>
                  <select id="ca-service" name="service" required defaultValue="">
                    <option value="" disabled>Select a service</option>
                    <option>Income Tax Filing</option>
                    <option>GST Registration &amp; Filing</option>
                    <option>Company Audit</option>
                    <option>Bookkeeping</option>
                    <option>Startup Compliance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="ca-message">Tell us briefly</label>
                  <textarea id="ca-message" name="message" rows={4} placeholder="e.g. Need GST filing for my trading business" />
                </div>
                <button type="submit" className={styles.btnPrimary}>
                  <WhatsAppIcon />
                  Send Enquiry on WhatsApp
                </button>
                <p className={styles.formNote}>
                  Submitting opens WhatsApp with your enquiry pre-filled. Demo only, no data is stored.
                </p>
              </form>
              <aside className={styles.officeCard}>
                <h3>Office</h3>
                <p>
                  2nd Floor, Sample Towers,<br />
                  Kothaguda, Hyderabad 500081 (Sample)
                </p>
                <p>
                  <strong>Phone:</strong> {DEMO_PHONE_DISPLAY}
                </p>
                <p>
                  <strong>Hours:</strong> Mon to Sat, 10:00 AM to 7:00 PM
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
              <p className={styles.footerBrand}>Verma &amp; Associates</p>
              <p className={styles.footerText}>
                Chartered Accountants serving growing businesses with honest, timely compliance.
              </p>
            </div>
            <nav aria-label="Footer">
              <a href="#services">Services</a>
              <a href="#team">Team</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
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
