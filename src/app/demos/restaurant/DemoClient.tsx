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

function FlameIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

const MENU: { title: string; items: { name: string; desc: string; price: string; tag?: string }[] }[] = [
  {
    title: "Starters",
    items: [
      { name: "Paneer Tikka Angaar", desc: "Smoked cottage cheese, mint chutney, charred onions", price: "₹249", tag: "Bestseller" },
      { name: "Chicken 65", desc: "South Indian classic, curry leaves, red chilli glaze", price: "₹229" },
      { name: "Crispy Corn Salt & Pepper", desc: "Golden corn tossed with cracked pepper and scallions", price: "₹179" },
      { name: "Hara Bhara Kebab", desc: "Spinach and green pea patties, beetroot mayo", price: "₹189", tag: "Veg" },
      { name: "Samosa Chaat Bomb", desc: "Crushed samosa, chole, tamarind, sev crunch", price: "₹129" },
    ],
  },
  {
    title: "Mains",
    items: [
      { name: "Hyderabadi Chicken Biryani", desc: "Dum-cooked, mirchi ka salan, raita", price: "₹299", tag: "Bestseller" },
      { name: "Butter Chicken & Naan", desc: "Tandoor chicken, tomato makhani gravy, butter naan", price: "₹329" },
      { name: "Paneer Lababdar", desc: "Rich onion tomato masala, kasuri methi, cream", price: "₹279", tag: "Veg" },
      { name: "Dal Makhani & Jeera Rice", desc: "Slow-cooked black lentils, fragrant cumin rice", price: "₹249" },
      { name: "Veg Kolhapuri", desc: "Fiery Kolhapuri masala, mixed garden vegetables", price: "₹259", tag: "Spicy" },
    ],
  },
  {
    title: "Desserts & Beverages",
    items: [
      { name: "Gulab Jamun Cheesecake", desc: "Baked cheesecake, warm gulab jamun, pistachio dust", price: "₹159", tag: "Chef's Pick" },
      { name: "Brownie with Ice Cream", desc: "Warm chocolate brownie, vanilla bean scoop", price: "₹179" },
      { name: "Mango Lassi", desc: "Alphonso pulp, cardamom, saffron strands", price: "₹99" },
      { name: "Filter Coffee Affogato", desc: "South Indian filter coffee over vanilla ice cream", price: "₹149" },
      { name: "Masala Chai", desc: "Assam leaves, crushed ginger, full spice blend", price: "₹49" },
    ],
  },
];

const GALLERY = [
  "Tandoor Nights",
  "Biryani Pot",
  "Dessert Counter",
  "Family Seating",
  "Chef's Specials",
  "Evening Ambience",
];

const REVIEWS = [
  {
    quote: "The biryani here beats every delivery app option we have tried. Dum flavour is deep and the portions are generous for the price.",
    name: "Guest Review (Sample)",
    meta: "Dined in, March 2026",
  },
  {
    quote: "Booked a family dinner for twelve and the team handled it perfectly. The paneer tikka angaar is a must order starter.",
    name: "Guest Review (Sample)",
    meta: "Family dinner, April 2026",
  },
  {
    quote: "Cozy place, quick service and the filter coffee affogato is genius. Our go to weekend spot now.",
    name: "Guest Review (Sample)",
    meta: "Weekend visit, May 2026",
  },
];

export default function DemoClient() {
  const [form, setForm] = useState({ name: "", phone: "", date: "", guests: "2" });

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submitReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Table Reservation Request (Demo)\nName: ${form.name}\nPhone: ${form.phone}\nDate: ${form.date}\nGuests: ${form.guests}`;
    window.open(demoWhatsAppLink(msg), "_blank");
  };

  return (
    <div className={styles.demo}>
      <header className={styles.header}>
        <a href="#top" className={styles.brand}>
          <FlameIcon />
          <span>Spice Route Kitchen</span>
        </a>
        <nav className={styles.nav} aria-label="Demo navigation">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#visit">Visit Us</a>
        </nav>
        <div className={styles.headerCtas}>
          <a href={demoWhatsAppLink("Hi Spice Route Kitchen, I would like to reserve a table. (Demo enquiry)")} className={styles.waBtn} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> WhatsApp
          </a>
          <a href="#reserve" className={styles.ctaBtn}>Reserve a Table</a>
        </div>
      </header>

      <section className={styles.hero} id="top">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>North Indian & Mughlai Kitchen</p>
          <h1>
            Slow fire. Bold flavour.
            <span> Real comfort food.</span>
          </h1>
          <p className={styles.heroSub}>
            From dum biryanis to tandoor classics, every plate at Spice Route Kitchen is cooked over real fire and served with warmth. Walk in hungry, leave planning your next visit.
          </p>
          <div className={styles.heroCtas}>
            <a href="#reserve" className={styles.ctaBtnLarge}>Reserve a Table</a>
            <a href="#menu" className={styles.ghostBtn}>View Menu</a>
          </div>
          <div className={styles.heroStats}>
            <div><strong>4.8</strong><span>Sample rating</span></div>
            <div><strong>120+</strong><span>Dishes on menu</span></div>
            <div><strong>15 min</strong><span>Avg. wait time</span></div>
          </div>
        </div>
      </section>

      <section className={styles.aboutStrip} id="about">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrowDark}>Our Story</p>
          <h2>A kitchen built on fire and family recipes</h2>
          <p>
            Spice Route Kitchen began as a small family kitchen with recipes passed down three generations. Today we serve those same slow-cooked flavours to the whole neighbourhood, with spices ground fresh every morning and breads baked to order in our clay tandoor.
          </p>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}><strong>Fresh daily</strong><span>Spices ground in-house each morning</span></div>
            <div className={styles.aboutCard}><strong>Clay tandoor</strong><span>Breads and kebabs cooked over real fire</span></div>
            <div className={styles.aboutCard}><strong>Family run</strong><span>Recipes from three generations</span></div>
          </div>
        </div>
      </section>

      <section className={styles.menuSection} id="menu">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Taste the Menu</p>
          <h2>Crowd favourites, priced for everyone</h2>
          {MENU.map((cat) => (
            <div key={cat.title} className={styles.menuCat}>
              <h3>{cat.title}</h3>
              <ul>
                {cat.items.map((item) => (
                  <li key={item.name} className={styles.menuItem}>
                    <div>
                      <p className={styles.itemName}>
                        {item.name}
                        {item.tag && <span className={styles.tag}>{item.tag}</span>}
                      </p>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                    <span className={styles.itemPrice}>{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className={styles.menuNote}>Prices are sample prices for this demo concept. Full menu available at the restaurant.</p>
        </div>
      </section>

      <section className={styles.gallerySection} id="gallery">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrowDark}>Gallery</p>
          <h2>A glimpse inside</h2>
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

      <section className={styles.reviewsSection} id="reviews">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrow}>Reviews</p>
          <h2>What our guests say</h2>
          <div className={styles.reviewGrid}>
            {REVIEWS.map((r) => (
              <article key={r.meta} className={styles.reviewCard}>
                <div className={styles.stars} aria-label="5 out of 5 stars">★★★★★</div>
                <p>&ldquo;{r.quote}&rdquo;</p>
                <footer>
                  <strong>{r.name}</strong>
                  <span>{r.meta}</span>
                </footer>
              </article>
            ))}
          </div>
          <p className={styles.sampleNote}>Reviews shown are sample reviews for this demo concept.</p>
        </div>
      </section>

      <section className={styles.reserveSection} id="reserve">
        <div className={styles.sectionInner}>
          <p className={styles.eyebrowDark}>Reservations</p>
          <h2>Book your table</h2>
          <p className={styles.reserveSub}>Send us your details and we will confirm your table on WhatsApp within minutes.</p>
          <form className={styles.form} onSubmit={submitReservation}>
            <label>
              Your name
              <input required value={form.name} onChange={update("name")} placeholder="e.g. Rohan Sharma" />
            </label>
            <label>
              Phone number
              <input required value={form.phone} onChange={update("phone")} placeholder="e.g. 98765 43210" inputMode="tel" />
            </label>
            <label>
              Date
              <input required type="date" value={form.date} onChange={update("date")} />
            </label>
            <label>
              Guests
              <select value={form.guests} onChange={update("guests")}>
                {["1", "2", "3", "4", "5", "6", "8", "10+"].map((g) => (
                  <option key={g} value={g}>{g} {g === "1" ? "guest" : "guests"}</option>
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
          <p className={styles.eyebrowDark}>Visit Us</p>
          <h2>Find us in the city</h2>
          <div className={styles.visitGrid}>
            <div className={styles.mapPlaceholder} aria-hidden="true">
              <PinIcon />
              <span>Map Placeholder</span>
              <span className={styles.sampleBadge}>Sample</span>
            </div>
            <div className={styles.visitInfo}>
              <div className={styles.infoRow}>
                <PinIcon />
                <div>
                  <strong>Address</strong>
                  <p>12-4-880, Food Street, Sample Nagar,<br />Hyderabad, Telangana 500034</p>
                </div>
              </div>
              <div className={styles.infoRow}>
                <ClockIcon />
                <div>
                  <strong>Hours</strong>
                  <p>Mon to Sun: 11:30 AM to 11:00 PM<br />Lunch thali 12 PM to 3 PM</p>
                </div>
              </div>
              <div className={styles.infoRow}>
                <PhoneIcon />
                <div>
                  <strong>Contact</strong>
                  <p>{DEMO_PHONE_DISPLAY}<br />hello@spiceroutekitchen.demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.demoFooter}>
        <p><strong>Spice Route Kitchen</strong> &middot; Slow fire, bold flavour.</p>
        <p className={styles.footerSmall}>This is a fictional sample website created by ProjectKaro to show what your restaurant site could look like.</p>
      </footer>
    </div>
  );
}
