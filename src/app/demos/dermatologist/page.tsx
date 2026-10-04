import { createPageMetadata } from "@/lib/seo";
import DemoShell from "@/components/DemoShell/DemoShell";
import {
  DEMO_PHONE_DISPLAY,
  DEMO_PHONE_LINK,
  demoWhatsAppLink,
} from "@/components/DemoShell/demo-constants";
import BookingForm from "./BookingForm";
import styles from "./page.module.css";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "GlowSkin Clinic (Sample) | ProjectKaro Demo",
  description:
    "A sample dermatology clinic website concept by ProjectKaro: skin treatments with sample pricing, results gallery, testimonials, and WhatsApp booking.",
  path: "/demos/dermatologist",
});

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l1.9 6.1L20 10l-6.1 1.9L12 18l-1.9-6.1L4 10l6.1-1.9L12 2zm7 11 .9 2.6 2.6.9-2.6.9L19 20l-.9-2.6-2.6-.9 2.6-.9L19 13zM5 15l.7 2.1 2.1.7-2.1.7L5 20.6l-.7-2.1-2.1-.7 2.1-.7L5 15z" />
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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l8 3.5V11c0 4.9-3.4 9.4-8 11-4.6-1.6-8-6.1-8-11V5.5L12 2zm0 4.2L7 8.1V11c0 3.4 2.1 6.6 5 7.9 2.9-1.3 5-4.5 5-7.9V8.1l-5-1.9z" />
    </svg>
  );
}

const TREATMENTS = [
  {
    name: "Acne Treatment",
    description:
      "Medical-grade peels and personalised routines that calm breakouts and fade acne marks.",
    price: "from ₹1,499",
  },
  {
    name: "Pigmentation Correction",
    description:
      "Targeted laser and serum therapy for melasma, sun spots, and uneven skin tone.",
    price: "from ₹2,499",
  },
  {
    name: "Laser Hair Reduction",
    description:
      "Painless full-body and facial laser sessions, safe for Indian skin types.",
    price: "from ₹1,999 / session",
  },
  {
    name: "Anti-Aging",
    description:
      "Botox, fillers, and skin boosters that soften fine lines and restore natural glow.",
    price: "from ₹3,999",
  },
];

const REVIEWS = [
  {
    quote:
      "My acne finally cleared after two years of trying everything. The doctor mapped out a simple plan and checked in after every session.",
    name: "Sneha R. (Sample)",
  },
  {
    quote:
      "Laser sessions were quick and genuinely painless. The pricing was clear from the first consultation, exactly as quoted.",
    name: "Divya K. (Sample)",
  },
  {
    quote:
      "My pigmentation faded visibly in three sessions. It feels like a clinic that actually cares about results, not upselling.",
    name: "Meera J. (Sample)",
  },
];

const FAQS = [
  {
    q: "Is laser hair reduction safe for Indian skin?",
    a: "Yes. We use modern diode lasers with cooling technology designed for darker skin tones, and every plan starts with a patch test.",
  },
  {
    q: "How many sessions will my acne need?",
    a: "Most mild to moderate acne responds in 4 to 6 sessions. Your dermatologist will give you a clear session plan and timeline at the first consultation.",
  },
  {
    q: "Are the treatments painful?",
    a: "Most treatments are comfortable. We use numbing cream where needed, and laser sessions feel like a mild warm snap on the skin.",
  },
  {
    q: "Do I need a consultation first?",
    a: "Yes, and it is the most important step. Every treatment at GlowSkin starts with a dermatologist consultation so your plan fits your skin exactly.",
  },
  {
    q: "Is there downtime after peels or lasers?",
    a: "Usually very little. Mild redness for a day is normal, and you can return to work the same day. We share aftercare on WhatsApp.",
  },
];

export default function DermatologistDemo() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/demos/dermatologist",
            title: 'GlowSkin Clinic (Sample) | ProjectKaro Demo',
            description: 'A sample dermatology clinic website concept by ProjectKaro: skin treatments with sample pricing, results gallery, testimonials, and WhatsApp booking.',
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: 'Dermatologist Demo', path: "/demos/dermatologist" },
          ]),
        ]}
      />
    <DemoShell businessName="GlowSkin Clinic"
      industryPath="/websites-for-doctors"
      industryLabel="doctors">
      <div className={styles.page}>
        <header className={styles.siteHeader}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoMark}>
              <SparkleIcon className={styles.logoIcon} />
            </span>
            <span className={styles.logoText}>
              GlowSkin
              <span className={styles.logoSub}>Skin Clinic</span>
            </span>
          </a>
          <nav className={styles.nav} aria-label="Primary">
            <a href="#treatments">Treatments</a>
            <a href="#doctor">Doctor</a>
            <a href="#results">Results</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className={styles.headerActions}>
            <a href="tel:+919000000000" className={styles.callButton}>
              <PhoneIcon className={styles.buttonIcon} />
              <span>Call</span>
            </a>
            <a
              href={demoWhatsAppLink("Hi GlowSkin! I have a question about skin treatments.")}
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
              <p className={styles.eyebrow}>Skin health in Hyderabad (Sample)</p>
              <h1 className={styles.heroTitle}>
                Healthy skin is a habit, not a miracle
              </h1>
              <p className={styles.heroSub}>
                Dermatologist-led treatments for acne, pigmentation, unwanted hair,
                and aging skin. Clear plans, honest pricing, visible results.
              </p>
              <div className={styles.heroCtas}>
                <a href="#booking" className={styles.primaryButton}>
                  Book a Consultation
                </a>
                <a
                  href={demoWhatsAppLink("Hi GlowSkin! I would like to book a skin consultation.")}
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
                  Dermatologist-led care
                </li>
                <li>
                  <CheckIcon className={styles.checkIcon} />
                  Advanced laser technology
                </li>
                <li>
                  <CheckIcon className={styles.checkIcon} />
                  Safe for Indian skin tones
                </li>
              </ul>
            </div>
            <div className={styles.heroArt} aria-hidden="true">
              <div className={styles.heroArtCard}>
                <SparkleIcon className={styles.heroSparkle} />
              </div>
              <div className={`${styles.heroChip} ${styles.heroChipTop}`}>
                <ShieldIcon className={styles.checkIcon} />
                Patch test first, always
              </div>
              <div className={`${styles.heroChip} ${styles.heroChipBottom}`}>
                <ClockIcon className={styles.checkIcon} />
                30-minute consultations
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="treatments">
          <div className={styles.container}>
            <p className={styles.sectionEyebrow}>Treatments</p>
            <h2 className={styles.sectionTitle}>Care for every skin concern</h2>
            <p className={styles.sectionSub}>
              Indicative starting prices, quoted exactly after your consultation.
            </p>
            <div className={styles.treatmentGrid}>
              {TREATMENTS.map((t) => (
                <article key={t.name} className={styles.treatmentCard}>
                  <span className={styles.treatmentIcon}>
                    <SparkleIcon className={styles.treatmentSvg} />
                  </span>
                  <h3>{t.name}</h3>
                  <p>{t.description}</p>
                  <div className={styles.treatmentFoot}>
                    <span className={styles.price}>{t.price}</span>
                    <a href="#booking" className={styles.cardLink}>
                      Book this
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`} id="doctor">
          <div className={styles.containerNarrow}>
            <p className={styles.sectionEyebrow}>Your dermatologist</p>
            <h2 className={styles.sectionTitle}>Care led by a specialist</h2>
            <article className={styles.doctorCard}>
              <div className={styles.doctorAvatar} aria-hidden="true">
                <SparkleIcon className={styles.doctorSvg} />
                <span className={styles.sampleTag}>Sample photo</span>
              </div>
              <h3>Chief Dermatologist</h3>
              <p className={styles.doctorSpec}>12 yrs experience (Sample)</p>
              <div className={styles.specialityChips}>
                <span>Acne & Scarring</span>
                <span>Pigmentation</span>
                <span>Lasers</span>
                <span>Anti-Aging</span>
              </div>
              <p className={styles.doctorBio}>
                Every treatment plan at GlowSkin is designed and supervised by our
                chief dermatologist, so your skin is always in expert hands.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section} id="results">
          <div className={styles.container}>
            <p className={styles.sectionEyebrow}>Results gallery</p>
            <h2 className={styles.sectionTitle}>Progress our patients love</h2>
            <p className={styles.sectionSub}>Documented journeys, shared with consent.</p>
            <div className={styles.galleryGrid}>
              {["Acne recovery", "Pigmentation fade", "Glow facial series"].map((label) => (
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
            <h2 className={styles.sectionTitle}>Glowing reviews, literally</h2>
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

        <section className={`${styles.section} ${styles.bookingBand}`} id="booking">
          <div className={styles.container}>
            <div className={styles.appointmentWrap}>
              <div className={styles.appointmentCopy}>
                <p className={styles.sectionEyebrow}>Book a visit</p>
                <h2 className={styles.sectionTitle}>Start with a consultation</h2>
                <p className={styles.sectionSub}>
                  Tell us your concern and we will confirm your consultation on
                  WhatsApp within 30 minutes during clinic hours.
                </p>
                <ul className={styles.appointmentPoints}>
                  <li>
                    <CheckIcon className={styles.checkIcon} />
                    30-minute skin analysis
                  </li>
                  <li>
                    <CheckIcon className={styles.checkIcon} />
                    Personalised treatment plan
                  </li>
                  <li>
                    <CheckIcon className={styles.checkIcon} />
                    No-obligation consultation
                  </li>
                </ul>
              </div>
              <div className={styles.appointmentCard}>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.altSection}`} id="contact">
          <div className={styles.container}>
            <p className={styles.sectionEyebrow}>Visit us</p>
            <h2 className={styles.sectionTitle}>Find us in Jubilee Hills</h2>
            <div className={styles.visitGrid}>
              <div className={styles.visitInfo}>
                <div className={styles.infoRow}>
                  <PinIcon className={styles.infoIcon} />
                  <div>
                    <h3>Address</h3>
                    <p>Plot 42, Road No. 36, Jubilee Hills, Hyderabad (Sample)</p>
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <ClockIcon className={styles.infoIcon} />
                  <div>
                    <h3>Clinic hours</h3>
                    <p>Mon to Sat: 11:00 AM to 8:00 PM</p>
                    <p>Sunday: 11:00 AM to 3:00 PM</p>
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
                  <SparkleIcon className={styles.footerSparkle} />
                  GlowSkin Clinic
                </p>
                <p className={styles.footerText}>
                  Dermatologist-led skincare for lasting, healthy glow.
                </p>
              </div>
              <div>
                <h3>Quick links</h3>
                <ul className={styles.footerLinks}>
                  <li><a href="#treatments">Treatments</a></li>
                  <li><a href="#doctor">Doctor</a></li>
                  <li><a href="#results">Results</a></li>
                  <li><a href="#booking">Book a visit</a></li>
                </ul>
              </div>
              <div>
                <h3>Clinic hours</h3>
                <p className={styles.footerText}>Mon to Sat: 11 AM to 8 PM</p>
                <p className={styles.footerText}>Sunday: 11 AM to 3 PM</p>
                <p className={styles.footerText}>
                  <a href={DEMO_PHONE_LINK}>{DEMO_PHONE_DISPLAY}</a>
                </p>
              </div>
            </div>
            <p className={styles.footerBottom}>
              © 2026 GlowSkin Clinic. This is a fictional sample website.
            </p>
          </div>
        </footer>
      </div>
    </DemoShell>
    </>
  );
}
