import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/lib/site-config";
import { INDUSTRY_LINKS } from "@/lib/industry-links";
import styles from "./Footer.module.css";

const WEBSITES_LINKS = [
  { href: "/websites-for-businesses", label: "Websites for Businesses" },
  { href: "/services/website-development", label: "Website Development" },
  { href: "/website-development-hyderabad", label: "Website Development in Hyderabad" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blogs", label: "Blogs" },
];

const INDUSTRY_SUBGROUP_LINKS = INDUSTRY_LINKS.map((link) => ({
  href: link.href,
  label: `Websites for ${link.label}`,
}));

const STUDENTS_LINKS = [
  { href: "/academic-projects", label: "Academic Projects" },
  { href: "/btech-major-projects-hyderabad", label: "B.Tech Major Projects in Hyderabad" },
  { href: "/btech-final-year-projects-hyderabad", label: "B.Tech Final Year Projects in Hyderabad" },
  { href: "/cse-projects-hyderabad", label: "CSE Projects in Hyderabad" },
  { href: "/ai-ml-projects-hyderabad", label: "AI & ML Projects in Hyderabad" },
  { href: "/iot-projects-hyderabad", label: "IoT Projects in Hyderabad" },
  { href: "/ieee-projects-hyderabad", label: "IEEE Projects in Hyderabad" },
  { href: "/academic-projects/major-projects", label: "Major Projects" },
  { href: "/academic-projects/minor-projects", label: "Minor Projects" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/services", label: "All Services" },
  { href: "/start-a-project", label: "Get a Quote" },
];

interface FooterLink {
  href: string;
  label: string;
}

interface FooterColumn {
  label: string;
  links: FooterLink[];
  subgroups?: { label: string; links: FooterLink[] }[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    label: "Websites",
    links: WEBSITES_LINKS,
    subgroups: [{ label: "By industry", links: INDUSTRY_SUBGROUP_LINKS }],
  },
  { label: "Students", links: STUDENTS_LINKS },
  { label: "Company", links: COMPANY_LINKS },
];

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
            <address className={styles.napBlock}>
              <span>Hyderabad, Telangana, India</span>
              <a href="tel:+917396991624">+91 73969 91624</a>
              <a href="mailto:contact@projectkaro.com">contact@projectkaro.com</a>
            </address>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <WhatsAppIcon />
              <span>+91 73969 91624</span>
            </a>
            <div className={styles.socialRow}>
              <a
                href="https://www.linkedin.com/company/111834938"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="ProjectKaro on LinkedIn"
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/projectkaro"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="ProjectKaro on Instagram"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {FOOTER_COLUMNS.map(({ label, links, subgroups }) => (
            <nav key={label} className={styles.nav} aria-label={`Footer ${label.toLowerCase()}`}>
              <p className={styles.columnLabel}>{label}</p>
              <ul className={styles.navList}>
                {links.map(({ href, label: linkLabel }) => (
                  <li key={href}>
                    <Link href={href} className={styles.navLink}>
                      {linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
              {subgroups?.map((sub) => (
                <div key={sub.label} className={styles.subGroup}>
                  <p className={styles.subLabel}>{sub.label}</p>
                  <ul className={`${styles.navList} ${styles.industryList}`}>
                    {sub.links.map(({ href, label: linkLabel }) => (
                      <li key={href}>
                        <Link href={href} className={styles.navLink}>
                          {linkLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          ))}
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
