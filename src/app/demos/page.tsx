import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  breadcrumbSchema,
  createPageMetadata,
  webPageSchema,
} from "@/lib/seo";
import styles from "./page.module.css";

const PATH = "/demos";
const pageTitle = "Demo Websites";
const pageDescription =
  "Sample websites crafted by ProjectKaro: clinics, restaurants, salons, real estate, CA firms, coaching, gyms and more. Fictional concepts showing what we build.";

export const metadata = createPageMetadata({
  title: `${pageTitle}`,
  description: pageDescription,
  path: PATH,
  keywords: [
    "projectkaro demo websites",
    "sample business websites",
    "website design examples hyderabad",
  ],
});

const CRUMBS = [
  { name: "Home", path: "/" },
  { name: pageTitle, path: PATH },
];

const DEMOS = [
  {
    path: "/demos/dental-clinic",
    name: "SmileCare Dental Clinic",
    industry: "Dental clinic",
    blurb: "Treatments, doctors, patient stories, and WhatsApp appointment booking.",
  },
  {
    path: "/demos/dermatologist",
    name: "GlowSkin Clinic",
    industry: "Skin clinic",
    blurb: "Services, doctor profiles, and online appointment booking.",
  },
  {
    path: "/demos/restaurant",
    name: "Spice Route Kitchen",
    industry: "Restaurant",
    blurb: "Menu-first design with reservations and location info.",
  },
  {
    path: "/demos/salon",
    name: "Lumiere Salon & Spa",
    industry: "Salon",
    blurb: "Services, pricing, and appointment booking for a premium salon.",
  },
  {
    path: "/demos/real-estate-agent",
    name: "CityNest Properties",
    industry: "Real estate",
    blurb: "Property listings, agent profiles, and enquiry forms.",
  },
  {
    path: "/demos/ca-firm",
    name: "Verma & Associates",
    industry: "CA firm",
    blurb: "Services, team, and consultation booking for a CA practice.",
  },
  {
    path: "/demos/coaching-centre",
    name: "Aspire Academy",
    industry: "Coaching centre",
    blurb: "Courses, faculty, and admissions enquiries.",
  },
  {
    path: "/demos/gym",
    name: "IronPulse Fitness Studio",
    industry: "Gym",
    blurb: "Programs, trainers, and membership enquiries.",
  },
  {
    path: "/demos/consultant",
    name: "A. Rao, Business Consultant",
    industry: "Consultant",
    blurb: "Authority-building site with services and contact flow.",
  },
  {
    path: "/demos/manufacturer",
    name: "Deccan Precision Works",
    industry: "Manufacturer",
    blurb: "Capabilities, products, and quote request flow.",
  },
];

export default function DemosIndexPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: PATH,
            title: pageTitle,
            description: pageDescription,
          }),
          breadcrumbSchema(CRUMBS),
        ]}
      />
      <div className="container">
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Sample work</p>
          <h1 className={styles.title}>
            Demo websites, <span className={styles.accent}>built to win customers.</span>
          </h1>
          <p className={styles.intro}>
            Every demo below is a fictional sample business, crafted to show what
            a ProjectKaro website looks like for that industry. Open one, click
            around, then imagine your business in its place.
          </p>
        </header>

        <ul className={styles.grid} role="list">
          {DEMOS.map((demo) => (
            <li key={demo.path}>
              <Link href={demo.path} className={styles.card}>
                <span className={styles.industry}>{demo.industry}</span>
                <span className={styles.name}>{demo.name}</span>
                <span className={styles.blurb}>{demo.blurb}</span>
                <span className={styles.link}>Open demo</span>
              </Link>
            </li>
          ))}
        </ul>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>Like what you see?</h2>
          <p className={styles.ctaText}>
            Tell us about your business. ProjectKaro responds within 24 hours
            with a detailed proposal.
          </p>
          <Link href="/start-a-project" className={styles.ctaButton}>
            Start a project
          </Link>
        </section>
      </div>
    </>
  );
}
