import type { Metadata } from "next";
import DemoShell from "@/components/DemoShell/DemoShell";
import {
  DEMO_PHONE_DISPLAY,
  DEMO_PHONE_LINK,
  demoWhatsAppLink,
} from "@/components/DemoShell/demo-constants";
import AppointmentForm from "./AppointmentForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SmileCare Dental Clinic (Sample) | ProjectKaro Demo",
  description:
    "A sample dental clinic website concept by ProjectKaro: treatments with sample pricing, doctors, patient stories, and WhatsApp appointment booking.",
};

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C8.5 2 6 4.8 6 8c0 1.9.9 3.6 2 4.8V20c0 1.1.9 2 2 2 1 0 1.7-.7 2-1.6V15c0-.6.4-1 1-1s1 .4 1 1v5.4c.3.9 1 1.6 2 1.6 1.1 0 2-.9 2-2v-7.2c1.1-1.2 2-2.9 2-4.8 0-3.2-2.5-6-6-6z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 448 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-32.4 3.6-7.4 1.8-13.9-1-18.5-2.8-4.6-12.5-30.1-17.1-41.3-4.5-10.8-9-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

const TREATMENTS = [
  {
    name: "Teeth Cleaning & Polishing",
    description:
      "Gentle ultrasonic scaling and polishing that removes stains and tartar in a single sitting.",
    price: "from ₹999",
  },
  {
    name: "Root Canal Treatment",
    description:
      "Painless single-visit root canals with digital X-rays and rotary endodontics.",
    price: "from ₹4,999",
  },
  {
    name: "Braces & Aligners",
    description:
      "Metal, ceramic, and invisible aligner options with a personalised smile plan.",
    price: "from ₹24,999",
  },
  {
    name: "Dental Implants",
    description:
      "Natural-looking permanent tooth replacements planned with 3D imaging.",
    price: "from ₹19,999",
  },
];

const DOCTORS = [
  { role: "Lead Dentist", speciality: "Orthodontics (Sample)" },
  { role: "Cosmetic Dentist", speciality: "Smile Design (Sample)" },
  { role: "Implant Specialist", speciality: "Prosthodontics (Sample)" },
];

const REVIEWS = [
  {
    quote:
      "I was terrified of dentists for years. My root canal here was completely painless, and the doctor explained every step.",
    name: "Priya S. (Sample)",
  },
  {
    quote:
      "Got my aligners here and the whole journey was clear from day one. Pricing was exactly what they quoted, no surprises.",
    name: "Rahul V. (Sample)",
  },
  {
    quote:
      "Took my 6-year-old for a checkup and she actually looks forward to her visits now. The team is wonderful with kids.",
    name: "Anitha M. (Sample)",
  },
];

const FAQS = [
  {
    q: "Does dental treatment hurt?",
    a: "Not with us. We use modern local anaesthesia and gentle techniques, and most patients tell us their root canals and fillings felt like nothing at all.",
  },
  {
    q: "What happens on my first visit?",
    a: "A complete checkup, digital X-rays if needed, and a clear treatment plan with upfront pricing. You decide what to do next, with no pressure.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. Braces, aligners, and implants can be split into easy monthly instalments at zero added cost. Ask us on WhatsApp for the current plans.",
  },
  {
    q: "Do you treat children?",
    a: "Absolutely. We make first visits fun and fear-free, with preventive care, fluoride application, and habit counselling for kids.",
  },
  {
    q: "How do I reschedule an appointment?",
    a: "Just message us on WhatsApp a day before and we will move your slot. No cancellation charges for reschedules made 24 hours ahead.",
  },
];

export default function DentalClinicDemo() {
  return (
    <DemoShell businessName="SmileCare Dental Clinic">
      <div className={styles.page}>
        <header className={styles.siteHeader}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoMark}>
              <ToothIcon className={styles.logoIcon} />
            </span>
            <span className={styles.logoText}>
              SmileCare
              <span className={styles.logoSub}>Dental Clinic</span>
            </span>
          </a>
          <nav className={styles.nav} aria-label="Primary">
            <a href="#treatments">Treatments</a>
            <a href="#doctors">Doctors</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className={styles.headerActions}>
            <a href="tel:+919000000000" className={styles.callButton}>
              <PhoneIcon className={styles.buttonIcon} />
              <span>Call</span>
            </a>
            <a
              href={demoWhatsAppLink("Hi SmileCare! I have a question about dental treatments.")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <WhatsAppIcon className={styles.buttonIcon} />
              <span>WhatsApp</span>
            </a>
          </div>
        </header>

        <section className={styles.hero} id="top">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Dental care in Hyderabad (Sample)</p>
              <h1 className={styles.heroTitle}>
                A healthy smile changes everything
              </h1>
              <p className={styles.heroSub}>
                Painless treatments, honest pricing, and doctors who explain before
                they begin. Book your visit in under a minute.
              </p>
              <div className={styles.heroCtas}>
                <a href="#appointment" className={styles.primaryButton}>
                  Book an Appointment
                </a>
                <a
                  href={demoWhatsAppLink("Hi SmileCare! I would like to book a dental appointment.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryButton}
                >
                  <WhatsAppIcon className={styles.buttonIcon} />
                  Chat on WhatsApp
                </a>
              </div>
              <ul className={styles.trustBullets}>
                <li>
                  <CheckIcon className={styles.checkIcon} />
                  Gentle, pain-free dentistry
                </li>
                <li>
                  <CheckIcon className={styles.checkIcon} />
                  Sterilised, modern equipment
                </li>
                <li>
                  <CheckIcon className={styles.checkIcon} />
                  Transparent, upfront pricing
                </li>
              </ul>
            </div>
            <div className={styles.heroArt} aria-hidden="true">
              <div className={styles.heroArtCard}>
                <ToothIcon className={styles.heroTooth} />
              </div>
              <div className={`${styles.heroChip} ${styles.heroChipTop}`}>
                <CheckIcon className={styles.checkIcon} />
                Pain-free promise
              </div>
              <div className={`${styles.heroChip} ${styles.heroChipBottom}`}>
                <ClockIcon className={styles.checkIcon} />
                Same-day appointments
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="treatments">
          <div className={styles.container}>
            <p className={styles.sectionEyebrow}>Treatments</p>
            <h2 className={styles.sectionTitle}>Complete care for every smile</h2>
            <p className={styles.sectionSub}>
              Indicative starting prices, so you always know what to expect.
            </p>
            <div className={styles.treatmentGrid}>
              {TREATMENTS.map((t) => (
                <article key={t.name} className={styles.treatmentCard}>
                  <span className={styles.treatmentIcon}>
                    <ToothIcon className={styles.treatmentSvg} />
                  </span>
                  <h3>{t.name}</h3>
                  <p>{t.description}</p>
                  <div className={styles.treatmentFoot}>
                    <span className={styles.price}>{t.price}</span>
                    <a href="#appointment" className={styles.cardLink}>
                      Book this
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`} id="doctors">
          <div className={styles.container}>
            <p className={styles.sectionEyebrow}>Our doctors</p>
            <h2 className={styles.sectionTitle}>Specialists you can trust</h2>
            <p className={styles.sectionSub}>
              Every treatment is led by a qualified specialist, never rushed.
            </p>
            <div className={styles.doctorGrid}>
              {DOCTORS.map((d) => (
                <article key={d.role} className={styles.doctorCard}>
                  <div className={styles.doctorAvatar} aria-hidden="true">
                    <ToothIcon className={styles.doctorSvg} />
                    <span className={styles.sampleTag}>Sample photo</span>
                  </div>
                  <h3>{d.role}</h3>
                  <p className={styles.doctorSpec}>{d.speciality}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="gallery">
          <div className={styles.container}>
            <p className={styles.sectionEyebrow}>Smile gallery</p>
            <h2 className={styles.sectionTitle}>Real transformations</h2>
            <p className={styles.sectionSub}>Before and after results from our clinic.</p>
            <div className={styles.galleryGrid}>
              {["Aligner journey", "Whitening", "Implant restoration"].map((label) => (
                <figure key={label} className={styles.galleryPair}>
                  <div className={styles.galleryTiles}>
                    <div className={`${styles.galleryTile} ${styles.before}`}>
                      <span>Before</span>
                    </div>
                    <div className={`${styles.galleryTile} ${styles.after}`}>
                      <span>After</span>
                    </div>
                  </div>
                  <figcaption>
                    {label} <span className={styles.sampleTagInline}>(Sample images)</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`} id="reviews">
          <div className={styles.container}>
            <p className={styles.sectionEyebrow}>Patient stories</p>
            <h2 className={styles.sectionTitle}>Smiles that speak for us</h2>
            <div className={styles.reviewGrid}>
              {REVIEWS.map((r) => (
                <article key={r.name} className={styles.reviewCard}>
                  <div className={styles.stars} aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <StarIcon key={i} className={styles.starIcon} />
                    ))}
                  </div>
                  <p className={styles.reviewQuote}>{r.quote}</p>
                  <p className={styles.reviewName}>{r.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section} id="appointment">
          <div className={styles.container}>
            <div className={styles.appointmentWrap}>
              <div className={styles.appointmentCopy}>
                <p className={styles.sectionEyebrow}>Book a visit</p>
                <h2 className={styles.sectionTitle}>Your appointment is one step away</h2>
                <p className={styles.sectionSub}>
                  Fill in your details and we will confirm your slot on WhatsApp
                  within 30 minutes during clinic hours.
                </p>
                <ul className={styles.appointmentPoints}>
                  <li>
                    <CheckIcon className={styles.checkIcon} />
                    Free first consultation
                  </li>
                  <li>
                    <CheckIcon className={styles.checkIcon} />
                    Digital X-ray included
                  </li>
                  <li>
                    <CheckIcon className={styles.checkIcon} />
                    Easy rescheduling on WhatsApp
                  </li>
                </ul>
              </div>
              <div className={styles.appointmentCard}>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`} id="contact">
          <div className={styles.container}>
            <p className={styles.sectionEyebrow}>Visit us</p>
            <h2 className={styles.sectionTitle}>Find us in Banjara Hills</h2>
            <div className={styles.visitGrid}>
              <div className={styles.visitInfo}>
                <div className={styles.infoRow}>
                  <PinIcon className={styles.infoIcon} />
                  <div>
                    <h3>Address</h3>
                    <p>Road No. 12, Banjara Hills, Hyderabad (Sample)</p>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <ClockIcon className={styles.infoIcon} />
                  <div>
                    <h3>Clinic hours</h3>
                    <p>Mon to Sat: 10:00 AM to 8:00 PM</p>
                    <p>Sunday: 11:00 AM to 2:00 PM</p>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <PhoneIcon className={styles.infoIcon} />
                  <div>
                    <h3>Call or WhatsApp</h3>
                    <p>
                      <a href={DEMO_PHONE_LINK}>{DEMO_PHONE_DISPLAY}</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.mapPlaceholder} aria-hidden="true">
                <PinIcon className={styles.mapPin} />
                <p>Interactive map</p>
                <span className={styles.sampleTag}>Sample</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.containerNarrow}>
            <p className={styles.sectionEyebrow}>FAQ</p>
            <h2 className={styles.sectionTitle}>Common questions</h2>
            <div className={styles.faqList}>
              {FAQS.map((f) => (
                <details key={f.q} className={styles.faqItem}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <footer className={styles.siteFooter}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div>
                <p className={styles.footerLogo}>
                  <ToothIcon className={styles.footerTooth} />
                  SmileCare Dental Clinic
                </p>
                <p className={styles.footerText}>
                  Gentle, honest dentistry for the whole family.
                </p>
              </div>
              <div>
                <h3>Quick links</h3>
                <ul className={styles.footerLinks}>
                  <li><a href="#treatments">Treatments</a></li>
                  <li><a href="#doctors">Doctors</a></li>
                  <li><a href="#reviews">Reviews</a></li>
                  <li><a href="#appointment">Book a visit</a></li>
                </ul>
              </div>
              <div>
                <h3>Clinic hours</h3>
                <p className={styles.footerText}>Mon to Sat: 10 AM to 8 PM</p>
                <p className={styles.footerText}>Sunday: 11 AM to 2 PM</p>
                <p className={styles.footerText}>
                  <a href={DEMO_PHONE_LINK}>{DEMO_PHONE_DISPLAY}</a>
                </p>
              </div>
            </div>
            <p className={styles.footerBottom}>
              © 2026 SmileCare Dental Clinic. This is a fictional sample website.
            </p>
          </div>
        </footer>
      </div>
    </DemoShell>
  );
}
