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

function BedIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 4v16" /><path d="M2 8h18a2 2 0 0 1 2 2v10" /><path d="M2 17h20" /><path d="M6 8v9" />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5H4" />
      <path d="M10 5 8 7" /><path d="M2 12h20" /><path d="M6 19l-1 2" /><path d="M18 19l1 2" />
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#c9a227" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" />
      <circle cx="16.5" cy="7.5" r="0.5" fill="#c9a227" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

const LISTINGS = [
  {
    type: "2 BHK Apartment",
    locality: "Kukatpally",
    sqft: "1,050 sq.ft",
    price: "₹68 L",
    beds: "2 Bed",
    baths: "2 Bath",
    bg: "listingA",
    tag: "Ready to move",
  },
  {
    type: "3 BHK Apartment",
    locality: "Manikonda",
    sqft: "1,450 sq.ft",
    price: "₹1.15 Cr",
    beds: "3 Bed",
    baths: "2 Bath",
    bg: "listingB",
    tag: "Gated community",
  },
  {
    type: "3 BHK Apartment",
    locality: "Gachibowli",
    sqft: "1,680 sq.ft",
    price: "₹1.45 Cr",
    beds: "3 Bed",
    baths: "3 Bath",
    bg: "listingC",
    tag: "Near IT corridor",
  },
  {
    type: "4 BHK Villa",
    locality: "Kompally",
    sqft: "2,800 sq.ft",
    price: "₹2.6 Cr",
    beds: "4 Bed",
    baths: "4 Bath",
    bg: "listingD",
    tag: "Independent villa",
  },
  {
    type: "2 BHK Apartment",
    locality: "Miyapur",
    sqft: "1,120 sq.ft",
    price: "₹75 L",
    beds: "2 Bed",
    baths: "2 Bath",
    bg: "listingE",
    tag: "Metro nearby",
  },
  {
    type: "3 BHK Apartment",
    locality: "Nallagandla",
    sqft: "1,520 sq.ft",
    price: "₹1.28 Cr",
    beds: "3 Bed",
    baths: "3 Bath",
    bg: "listingF",
    tag: "Lake view",
  },
];

const WHY_POINTS = [
  { title: "Local expertise", desc: "Deep knowledge of Hyderabad localities, pricing trends and upcoming developments." },
  { title: "Verified listings only", desc: "Every property is physically verified for clear titles and genuine documentation." },
  { title: "End to end support", desc: "From shortlisting and site visits to negotiation, registration and handover." },
  { title: "Zero pressure approach", desc: "Honest advice on what suits your budget. No pushy sales, ever." },
];

const TESTIMONIALS = [
  {
    quote: "We were first-time buyers and nervous about everything. Every step was explained patiently and we closed on our 2BHK in six weeks.",
    meta: "Homebuyer, Kukatpally (Sample)",
  },
  {
    quote: "Sold our old flat above the expected price and moved into a villa in Kompally. The negotiation alone saved us lakhs.",
    meta: "Seller and buyer (Sample)",
  },
  {
    quote: "As an NRI I could not visit often. Site videos, clear paperwork and regular updates made the whole purchase stress free.",
    meta: "NRI investor (Sample)",
  },
];

export default function DemoClient() {
  const [form, setForm] = useState({ name: "", phone: "", interest: "Buying", budget: "₹50 L to ₹1 Cr", message: "" });
  const [sending, setSending] = useState(false);

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submitEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const msg = `Property Enquiry (Demo)\nName: ${form.name}\nPhone: ${form.phone}\nInterested in: ${form.interest}\nBudget: ${form.budget}\nMessage: ${form.message || "-"}`;
    window.open(demoWhatsAppLink(msg), "_blank");
    window.setTimeout(() => setSending(false), 1200);
  };

  return (
    <div className={styles.demo}>
      <header className={styles.header}>
        <a href="#top" className={styles.brand}>
          <KeyIcon />
          <span>CityNest Properties</span>
        </a>
        <nav className={styles.nav} aria-label="Demo navigation">
          <a href="#listings">Listings</a>
          <a href="#about">About</a>
          <a href="#why">Why Me</a>
          <a href="#testimonials">Reviews</a>
        </nav>
        <div className={styles.headerCtas}>
          <a href={demoWhatsAppLink("Hi CityNest Properties, I am looking for a property in Hyderabad. (Demo enquiry)")} className={styles.waBtn} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> WhatsApp
          </a>
          <a href="#contact" className={styles.ctaBtn}>Enquire Now</a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Hyderabad Real Estate</p>
          <h1>
            Find your home
            <span>in Hyderabad.</span>
          </h1>
          <p className={styles.heroSub}>
            Verified apartments and villas across the city, honest pricing guidance, and personal support from first visit to final registration.
          </p>
          <div className={styles.heroCtas}>
            <a href="#listings" className={styles.ctaBtnLarge}>Browse Listings</a>
            <a href="#contact" className={styles.ghostBtn}>Talk to Me</a>
          </div>
          <div className={styles.heroStats}>
            <div><strong>200+</strong><span>Homes matched (Sample)</span></div>
            <div><strong>8 yrs</strong><span>Market experience (Sample)</span></div>
            <div><strong>100%</strong><span>Verified listings (Sample)</span></div>
          </div>
        </div>
      </section>

      <section className={styles.listingsSection} id="listings">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrowDark}>Featured Listings</p>
          <h2>Handpicked homes this month</h2>
          <div className={styles.listingGrid}>
            {LISTINGS.map((l) => (
              <article key={`${l.type}-${l.locality}`} className={styles.listingCard}>
                <div className={`${styles.listingPhoto} ${styles[l.bg]}`} aria-hidden="true">
                  <span className={styles.listingTag}>{l.tag}</span>
                </div>
                <div className={styles.listingBody}>
                  <div className={styles.listingTop}>
                    <h3>{l.type}</h3>
                    <p className={styles.price}>{l.price}</p>
                  </div>
                  <p className={styles.locality}><PinIcon /> {l.locality}, Hyderabad</p>
                  <div className={styles.specs}>
                    <span><BedIcon /> {l.beds}</span>
                    <span><BathIcon /> {l.baths}</span>
                    <span><AreaIcon /> {l.sqft}</span>
                  </div>
                  <a
                    href={demoWhatsAppLink(`Hi CityNest Properties, I am interested in the ${l.type} in ${l.locality} (${l.price}). (Demo enquiry)`)}
                    className={styles.enquireBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon /> Enquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.sampleNote}>Listings shown are sample listings for this demo concept. Prices are illustrative.</p>
        </div>
      </section>

      <section className={styles.aboutSection} id="about">
        <div className={styles.sectionInner}>
          <div className={styles.aboutGrid}>
            <div className={styles.agentPhoto} aria-hidden="true">
              <span className={styles.sampleBadge}>Sample profile</span>
            </div>
            <div>
              <p className={styles.eyebrow}>About the Agent</p>
              <h2>Your personal guide to Hyderabad real estate</h2>
              <p>
                I help buyers and sellers navigate Hyderabad&apos;s property market with complete transparency. With 8 years across apartments, villas and plots, I bring you verified listings, fair price analysis and patient guidance, whether it is your first home or your fifth investment.
              </p>
              <p>
                Every property I recommend is one I would suggest to my own family. That is the standard I hold myself to.
              </p>
              <ul className={styles.credList}>
                <li><CheckIcon /> RERA-aware, documentation-first process</li>
                <li><CheckIcon /> Specialisation: Kukatpally, Manikonda, Gachibowli belt</li>
                <li><CheckIcon /> Fluent in English, Hindi and Telugu</li>
              </ul>
              <p className={styles.sampleNoteLight}>Sample profile for this demo concept. No real person is represented.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whySection} id="why">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrowDark}>Why Work With Me</p>
          <h2>Buying a home should feel safe</h2>
          <div className={styles.whyGrid}>
            {WHY_POINTS.map((w) => (
              <article key={w.title} className={styles.whyCard}>
                <span className={styles.checkWrap}><CheckIcon /></span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection} id="testimonials">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Client Stories</p>
          <h2>Trusted by Hyderabad families</h2>
          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t) => (
              <article key={t.meta} className={styles.testimonialCard}>
                <div className={styles.stars} aria-label="5 out of 5 stars">★★★★★</div>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <footer>{t.meta}</footer>
              </article>
            ))}
          </div>
          <p className={styles.sampleNote}>Testimonials shown are sample reviews for this demo concept.</p>
        </div>
      </section>

      <section className={styles.contactSection} id="contact">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrowDark}>Get in Touch</p>
          <h2>Start your home search today</h2>
          <p className={styles.contactSub}>Share your requirement and I will personally respond with matching options on WhatsApp.</p>
          <div className={styles.contactGrid}>
            <form className={styles.form} onSubmit={submitEnquiry}>
              <label>
                Your name
                <input required value={form.name} onChange={update("name")} placeholder="e.g. Suresh Menon" />
              </label>
              <label>
                Phone number
                <input required value={form.phone} onChange={update("phone")} placeholder="e.g. 98765 43210" inputMode="tel" />
              </label>
              <label>
                I am interested in
                <select value={form.interest} onChange={update("interest")}>
                  {["Buying", "Selling", "Renting", "Investment advice"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label>
                Budget range
                <select value={form.budget} onChange={update("budget")}>
                  {["Under ₹50 L", "₹50 L to ₹1 Cr", "₹1 Cr to ₹2 Cr", "Above ₹2 Cr"].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label className={styles.fullWidth}>
                Your requirement
                <textarea value={form.message} onChange={update("message")} rows={4} placeholder="e.g. Looking for a 3BHK near Gachibowli for a family of four." />
              </label>
              <button type="submit" className={styles.submitBtn} disabled={sending}>
                <WhatsAppIcon /> {sending ? "Opening WhatsApp…" : "Send Enquiry on WhatsApp"}
              </button>
            </form>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <PhoneIcon />
                <div>
                  <strong>Call or WhatsApp</strong>
                  <p>{DEMO_PHONE_DISPLAY}</p>
                </div>
              </div>
              <div className={styles.infoCard}>
                <PinIcon />
                <div>
                  <strong>Office</strong>
                  <p>Plot 42, Sample Business Hub,<br />Madhapur, Hyderabad 500081</p>
                </div>
              </div>
              <p className={styles.hoursNote}>Available Mon to Sat, 10 AM to 7 PM. Site visits on Sundays by appointment.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.demoFooter}>
        <p className={styles.footerBrand}>CityNest Properties</p>
        <p className={styles.footerSmall}>This is a fictional sample website created by ProjectKaro to show what your real estate site could look like.</p>
      </footer>
    </div>
  );
}
