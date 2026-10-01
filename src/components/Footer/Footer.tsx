import Link from "next/link";
import Image from "next/image";
import { CONTACT_EMAIL, SOCIAL_LINKS, WHATSAPP_LINK } from "@/lib/site-config";
import styles from "./Footer.module.css";

const EXPLORE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/start-a-project", label: "Start a Project" },
];

const SERVICE_LINKS = [
  { href: "/websites-for-businesses", label: "Websites for Businesses" },
  { href: "/academic-projects", label: "Academic Projects" },
  { href: "/services", label: "All Services" },
  { href: "/start-a-project", label: "Get a Quote" },
];

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.5 13 17 22l-5-3-5 3 1.5-9" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.png"
                alt="ProjectKaro (Project Karo), Web Development and Student Project Solutions"
                width={150}
                height={38}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.tagline}>
              Websites for growing businesses and complete project delivery for students, built with care in Hyderabad, India.
            </p>
          </div>

          <nav className={styles.nav} aria-label="Footer navigation">
            <p className={styles.columnLabel}>Explore</p>
            <ul className={styles.navList}>
              {EXPLORE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.nav} aria-label="Footer services">
            <p className={styles.columnLabel}>Services</p>
            <ul className={styles.navList}>
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.contact}>
            <p className={styles.columnLabel}>Contact</p>
            <ul className={styles.contactList}>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={styles.contactLink}>
                  <MailIcon />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <WhatsAppIcon />
                  <span>+91 73969 91624</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <InstagramIcon />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
            <ul className={styles.trustList}>
              <li className={styles.trustItem}>
                <BadgeIcon />
                <span>Registered MSME (Udyam)</span>
              </li>
              <li className={styles.trustItem}>
                <PinIcon />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} ProjectKaro. All rights reserved.
          </p>
          <nav className={styles.legalNav} aria-label="Legal">
            <Link href="/privacy-policy" className={styles.legalLink}>
              Privacy Policy
            </Link>
            <span className={styles.legalDot} aria-hidden="true">
              &middot;
            </span>
            <Link href="/terms-and-conditions" className={styles.legalLink}>
              Terms &amp; Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
