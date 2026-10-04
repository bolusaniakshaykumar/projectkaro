import type { Metadata } from "next";
import DemoShell from "@/components/DemoShell/DemoShell";
import {
  DEMO_PHONE_DISPLAY,
  DEMO_PHONE_LINK,
  demoWhatsAppLink,
} from "@/components/DemoShell/demo-constants";
import QuoteRequestForm from "./QuoteForm";
import styles from "./page.module.css";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Deccan Precision Works (Sample) | Demo",
  description:
    "Sample manufacturer website demo: CNC machined parts, sheet metal fabrication, fasteners, and custom tooling.",
};

const products = [
  {
    title: "CNC Machined Parts",
    specs: ["Tolerances up to ±0.02 mm", "Aluminium, steel, brass, plastics", "Batch sizes 50 to 50,000"],
  },
  {
    title: "Sheet Metal Fabrication",
    specs: ["Laser cutting and bending", "Sheet thickness 0.8 to 12 mm", "Powder coating and plating"],
  },
  {
    title: "Industrial Fasteners",
    specs: ["Bolts, nuts, studs, washers", "Standard and custom threads", "Zinc, hot dip, SS finishes"],
  },
  {
    title: "Custom Tooling",
    specs: ["Jigs, fixtures, and dies", "Built to your drawings", "Trial and first article inspection"],
  },
];

const capabilities = [
  "5 axis CNC machining centres (Sample)",
  "CNC turning and milling",
  "Laser cutting and press brake",
  "MIG / TIG welding bay",
  "In house CMM inspection",
  "ISO 9001-style QA (Sample)",
];

const industries = ["Automotive", "Aerospace", "Pharma", "Construction", "Electrical", "Textiles"];

export default function ManufacturerDemoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/demos/manufacturer",
            title: 'Deccan Precision Works (Sample) | Demo',
            description: 'Sample manufacturer website demo: CNC machined parts, sheet metal fabrication, fasteners, and custom tooling.',
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: 'Manufacturer Demo', path: "/demos/manufacturer" },
          ]),
        ]}
      />
    <DemoShell businessName="Deccan Precision Works (Sample)"
      industryPath="/websites-for-small-businesses"
      industryLabel="small businesses">
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a href="#top" className={styles.brand}>
              <svg className={styles.brandLogo} viewBox="0 0 40 40" aria-hidden="true">
                <rect x="2" y="2" width="36" height="36" rx="6" fill="#1f4e79" />
                <circle cx="20" cy="20" r="9" fill="none" stroke="#ea580c" strokeWidth="3.5" />
                <circle cx="20" cy="20" r="2.5" fill="#ea580c" />
              </svg>
              <span className={styles.brandText}>
                Deccan Precision Works
                <small>Precision Manufacturing (Sample)</small>
              </span>
            </a>
            <nav className={styles.nav} aria-label="Primary">
              <a href="#products">Products</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#industries">Industries</a>
              <a href="#quote">Quote</a>
            </nav>
            <div className={styles.headerCtas}>
              <a className={styles.callBtn} href="tel:+919000000000">
                Call
              </a>
              <a
                className={styles.waBtn}
                href={demoWhatsAppLink("Hi, I would like to request a quote for machined parts.")}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </header>

        <section className={styles.hero} id="top">
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>Precision Components, Made Locally</p>
            <h1>Machined parts and fabrications, delivered on spec and on time.</h1>
            <p className={styles.heroSub}>
              Deccan Precision Works is a fictional sample manufacturer. We machine, fabricate, and
              finish precision components for industrial buyers who cannot afford rework.
            </p>
            <div className={styles.heroCtas}>
              <a href="#quote" className={styles.primaryBtn}>
                Request a Quote
              </a>
              <a href="#capabilities" className={styles.ghostBtn}>
                View Capabilities
              </a>
            </div>
            <ul className={styles.heroBadges}>
              <li>ISO 9001-style QA (Sample)</li>
              <li>Sample dispatch record: 98% on time</li>
              <li>Prototype to production</li>
            </ul>
          </div>
        </section>

        <section className={styles.section} id="products">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>What We Make</p>
            <h2>Four product lines, one quality standard.</h2>
            <div className={styles.grid4}>
              {products.map((p) => (
                <article key={p.title} className={styles.card}>
                  <h3>{p.title}</h3>
                  <ul>
                    {p.specs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt} id="capabilities">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>Shop Floor</p>
            <h2>Capabilities you can audit.</h2>
            <div className={styles.capGrid}>
              <ul className={styles.capList}>
                {capabilities.map((c) => (
                  <li key={c}>
                    <svg viewBox="0 0 20 20" className={styles.check} aria-hidden="true">
                      <path
                        d="M4 10.5l4 4 8-9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {c}
                  </li>
                ))}
              </ul>
              <div className={styles.qaBox}>
                <h3>Quality process (Sample)</h3>
                <ol>
                  <li>Incoming material verification</li>
                  <li>In process inspection at each operation</li>
                  <li>Final CMM report with every dispatch</li>
                  <li>Traceable batch numbering</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="industries">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>Who We Serve</p>
            <h2>Industries we supply (Sample).</h2>
            <div className={styles.chips}>
              {industries.map((i) => (
                <span key={i} className={styles.chip}>
                  {i}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.sectionAlt} ${styles.quoteBand}`} id="quote">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>Get Pricing</p>
            <h2>Request a quote in two minutes.</h2>
            <div className={styles.contactGrid}>
              <QuoteRequestForm />
              <div className={styles.factoryInfo}>
                <h3>Factory (Sample)</h3>
                <p>Plot 12, Industrial Estate, Hyderabad, Telangana (Sample address)</p>
                <p>
                  Phone (sample): <a href={DEMO_PHONE_LINK}>{DEMO_PHONE_DISPLAY}</a>
                </p>
                <p>Working hours: Mon to Sat, 9 AM to 7 PM IST (Sample)</p>
                <p>
                  Send your drawing or part details and we respond with pricing and lead time within
                  one working day (Sample commitment).
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div>
              <strong>Deccan Precision Works (Sample)</strong>
              <p>A fictional sample business built to demonstrate a manufacturer website.</p>
            </div>
            <nav aria-label="Footer">
              <a href="#products">Products</a>
              <a href="#capabilities">Capabilities</a>
              <a href="#industries">Industries</a>
              <a href="#quote">Quote</a>
            </nav>
          </div>
        </footer>
      </div>
    </DemoShell>
    </>
  );
}
