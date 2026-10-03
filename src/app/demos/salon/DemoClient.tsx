"use client";

import { useState } from "react";
import styles from "./page.module.css";
import {
  DEMO_PHONE_DISPLAY,
  demoWhatsAppLink,
} from "@/components/DemoShell/demo-constants";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.79.66 2.64a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.44-1.23a2 2 0 0 1 2.11-.45c.85.32 1.74.54 2.64.66A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.85 9.85 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.89c0 5.45-4.44 9.88-9.89 9.88m8.42-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.41" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z" />
    </svg>
  );
}

const SERVICE_GROUPS: { title: string; desc: string; items: { name: string; price: string }[] }[] = [
  {
    title: "Haircut & Styling",
    desc: "Precision cuts tailored to your face shape and lifestyle.",
    items: [
      { name: "Classic Haircut", price: "₹499" },
      { name: "Luxury Cut + Blowout", price: "₹899" },
      { name: "Global Hair Colour", price: "₹2,499" },
      { name: "Balayage / Highlights", price: "₹3,999" },
      { name: "Keratin Smoothening", price: "₹4,999" },
    ],
  },
  {
    title: "Hair Spa",
    desc: "Deep nourishment rituals for scalp and strands.",
    items: [
      { name: "Express Hair Spa", price: "₹799" },
      { name: "Deep Repair Ritual", price: "₹1,299" },
      { name: "Scalp Detox Treatment", price: "₹999" },
    ],
  },
  {
    title: "Facials",
    desc: "Radiance treatments for every skin type.",
    items: [
      { name: "Glow Facial", price: "₹999" },
      { name: "Anti-Tan De-Pigmentation", price: "₹1,499" },
      { name: "Hydra Boost Facial", price: "₹1,999" },
      { name: "24K Gold Facial", price: "₹2,999" },
    ],
  },
  {
    title: "Manicure & Pedicure",
    desc: "Finishing touches, done beautifully.",
    items: [
      { name: "Classic Manicure", price: "₹499" },
      { name: "Luxury Pedicure", price: "₹799" },
      { name: "Gel Polish Add-on", price: "₹599" },
    ],
  },
  {
    title: "Bridal Packages",
    desc: "Your big day, styled to perfection.",
    items: [
      { name: "Bridal Trial Session", price: "₹2,999" },
      { name: "Signature Bridal Makeup", price: "₹9,999" },
      { name: "Complete Bridal Package", price: "₹14,999" },
    ],
  },
];

const STYLISTS = [
  { role: "Senior Hair Stylist (Sample)", speciality: "Balayage, precision cuts and colour correction", bg: styles.stylistA },
  { role: "Skin & Facial Specialist (Sample)", speciality: "Advanced facials, de-tan and glow therapies", bg: styles.stylistB },
  { role: "Nail Artist (Sample)", speciality: "Nail art, extensions and gel artistry", bg: styles.stylistC },
];

const GALLERY = ["Salon Lounge", "Styling Station", "Spa Room", "Bridal Suite", "Nail Bar", "Product Wall"];

const TESTIMONIALS = [
  {
    quote: "My balayage turned out better than the reference photos I carried in. The stylist understood exactly what would suit my hair.",
    meta: "Hair colour client (Sample)",
  },
  {
    quote: "The bridal package was worth every rupee. Calm team, on-time start, and my makeup lasted the entire wedding.",
    meta: "Bridal client (Sample)",
  },
  {
    quote: "Finally a salon where the facial feels like a ritual and not a rush job. The spa room alone is worth the visit.",
    meta: "Facial client (Sample)",
  },
];

export default function DemoClient() {
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICE_GROUPS[0].title, date: "", time: "11:00 AM" });

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Appointment Request (Demo)\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nTime: ${form.time}`;
    window.open(demoWhatsAppLink(msg), "_blank");
  };

  return (
    <div className={styles.demo}>
      <header className={styles.header}>
        <a href="#top" className={styles.brand}>
          <SparkIcon />
          <span>Lumiere</span>
        </a>
        <nav className={styles.nav} aria-label="Demo navigation">
          <a href="#services">Services</a>
          <a href="#stylists">Stylists</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Reviews</a>
          <a href="#visit">Visit</a>
        </nav>
        <div className={styles.headerCtas}>
          <a href={demoWhatsAppLink("Hi Lumiere Salon, I would like to book an appointment. (Demo enquiry)")} className={styles.waBtn} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> WhatsApp
          </a>
          <a href="#book" className={styles.ctaBtn}>Book Appointment</a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Salon & Spa</p>
          <h1>
            Look radiant.
            <span>Feel extraordinary.</span>
          </h1>
          <p className={styles.heroSub}>
            Lumiere blends expert stylists, premium products and a serene spa atmosphere, so every visit leaves you glowing inside and out.
          </p>
          <div className={styles.heroCtas}>
            <a href="#book" className={styles.ctaBtnLarge}>Book Appointment</a>
            <a href="#services" className={styles.ghostBtn}>Explore Services</a>
          </div>
          <div className={styles.heroBadges}>
            <span>Certified stylists</span>
            <span>Premium products</span>
            <span>Hygiene first</span>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Our Menu</p>
          <h2>Services crafted for you</h2>
          <div className={styles.serviceGrid}>
            {SERVICE_GROUPS.map((g) => (
              <article key={g.title} className={styles.serviceCard}>
                <h3>{g.title}</h3>
                <p className={styles.serviceDesc}>{g.desc}</p>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <span>{it.name}</span>
                      <span className={styles.price}>{it.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className={styles.sampleNote}>Prices shown are sample prices for this demo concept.</p>
        </div>
      </section>

      <section className={styles.stylistsSection} id="stylists">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>The Team</p>
          <h2>Meet your stylists</h2>
          <div className={styles.stylistGrid}>
            {STYLISTS.map((s) => (
              <article key={s.role} className={styles.stylistCard}>
                <div className={`${styles.stylistPhoto} ${s.bg}`} aria-hidden="true">
                  <span className={styles.sampleBadge}>Sample</span>
                </div>
                <h3>{s.role}</h3>
                <p>{s.speciality}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallerySection} id="gallery">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Gallery</p>
          <h2>Inside Lumiere</h2>
          <div className={styles.galleryGrid}>
            {GALLERY.map((label, i) => (
              <div key={label} className={`${styles.tile} ${styles[`tile${i % 4}`]}`}>
                <span className={styles.tileLabel}>{label}</span>
                <span className={styles.sampleBadge}>Sample</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection} id="testimonials">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Love Notes</p>
          <h2>What clients say</h2>
          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t) => (
              <article key={t.meta} className={styles.testimonialCard}>
                <div className={styles.quoteMark} aria-hidden="true">&ldquo;</div>
                <p>{t.quote}</p>
                <footer>{t.meta}</footer>
              </article>
            ))}
          </div>
          <p className={styles.sampleNote}>Testimonials shown are sample reviews for this demo concept.</p>
        </div>
      </section>

      <section className={styles.bookSection} id="book">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Appointments</p>
          <h2>Reserve your chair</h2>
          <p className={styles.bookSub}>Tell us what you need and we will confirm your slot on WhatsApp.</p>
          <form className={styles.form} onSubmit={submitBooking}>
            <label>
              Your name
              <input required value={form.name} onChange={update("name")} placeholder="e.g. Ananya Rao" />
            </label>
            <label>
              Phone number
              <input required value={form.phone} onChange={update("phone")} placeholder="e.g. 98765 43210" inputMode="tel" />
            </label>
            <label>
              Service
              <select value={form.service} onChange={update("service")}>
                {SERVICE_GROUPS.map((g) => (
                  <option key={g.title} value={g.title}>{g.title}</option>
                ))}
              </select>
            </label>
            <label>
              Preferred date
              <input required type="date" value={form.date} onChange={update("date")} />
            </label>
            <label>
              Preferred time
              <select value={form.time} onChange={update("time")}>
                {["10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "7:30 PM"].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>
            <button type="submit" className={styles.submitBtn}>
              <WhatsAppIcon /> Confirm on WhatsApp
            </button>
          </form>
        </div>
      </section>

      <section className={styles.visitSection} id="visit">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Visit Us</p>
          <h2>Find your glow</h2>
          <div className={styles.visitGrid}>
            <div className={styles.infoRow}>
              <PinIcon />
              <div>
                <strong>Address</strong>
                <p>8-2-616, Rosewood Lane, Sample Enclave,<br />Hyderabad, Telangana 500034</p>
              </div>
            </div>
            <div className={styles.infoRow}>
              <ClockIcon />
              <div>
                <strong>Hours</strong>
                <p>Tue to Sun: 10:00 AM to 8:00 PM<br />Closed on Mondays</p>
              </div>
            </div>
            <div className={styles.infoRow}>
              <PhoneIcon />
              <div>
                <strong>Contact</strong>
                <p>{DEMO_PHONE_DISPLAY}<br />hello@lumieresalon.demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.demoFooter}>
        <p className={styles.footerBrand}>Lumiere Salon & Spa</p>
        <p className={styles.footerSmall}>This is a fictional sample website created by ProjectKaro to show what your salon site could look like.</p>
      </footer>
    </div>
  );
}
