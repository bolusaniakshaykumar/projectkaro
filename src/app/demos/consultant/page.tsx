import { createPageMetadata } from "@/lib/seo";
import DemoShell from "@/components/DemoShell/DemoShell";
import {
  DEMO_PHONE_DISPLAY,
  DEMO_PHONE_LINK,
  demoWhatsAppLink,
} from "@/components/DemoShell/demo-constants";
import ConsultantContactForm from "./ContactForm";
import styles from "./page.module.css";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "A. Rao, Business Consultant (Sample) | Demo",
  description:
    "Sample consultant website demo: growth strategy, operations, sales systems, and financial clarity for SMEs.",
  noIndex: true,
  path: "/demos/consultant",
});

const services = [
  {
    title: "Growth Strategy",
    copy: "A clear 90 day roadmap that ties marketing, sales, and delivery together, so growth stops being guesswork.",
    points: ["Market and competitor review", "Revenue target setting", "Priority action plan"],
  },
  {
    title: "Operations & SOPs",
    copy: "Turn tribal knowledge into written systems your team can run without you watching every step.",
    points: ["Process documentation", "Role clarity and checklists", "Handoff and QA workflows"],
  },
  {
    title: "Sales Systems",
    copy: "A repeatable pipeline: how leads come in, how they are followed up, and how quotes close.",
    points: ["Lead tracking setup", "Follow up cadence", "Quote and close playbook"],
  },
  {
    title: "Financial Clarity",
    copy: "Simple dashboards that show what is making money and what is quietly draining it.",
    points: ["Monthly P&L summary", "Cash flow forecasting", "Pricing and margin review"],
  },
];

const testimonials = [
  {
    quote:
      "Within two quarters our order backlog stopped swinging wildly. We finally plan ahead instead of firefighting.",
    name: "Sample Client A",
    role: "Owner, Manufacturing Unit (Sample)",
  },
  {
    quote:
      "The SOP work paid for itself in the first month. New staff get up to speed in days, not weeks.",
    name: "Sample Client B",
    role: "Partner, Services Firm (Sample)",
  },
  {
    quote:
      "For the first time I know exactly which services make money. We raised prices with confidence.",
    name: "Sample Client C",
    role: "Founder, Distribution Business (Sample)",
  },
];

export default function ConsultantDemoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/demos/consultant",
            title: 'A. Rao, Business Consultant (Sample) | Demo',
            description: 'Sample consultant website demo: growth strategy, operations, sales systems, and financial clarity for SMEs.',
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: 'Consultant Demo', path: "/demos/consultant" },
          ]),
        ]}
      />
    <DemoShell businessName="A. Rao, Business Consultant (Sample)"
      industryPath="/websites-for-consultants"
      industryLabel="consultants">
      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <a href="#top" className={styles.brand}>
              <span className={styles.brandMark}>AR</span>
              <span className={styles.brandText}>
                A. Rao
                <small>Business Consultant (Sample)</small>
              </span>
            </a>
            <nav className={styles.nav} aria-label="Primary">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#results">Results</a>
              <a href="#models">Engagement</a>
            </nav>
            <div className={styles.headerCtas}>
              <a className={styles.callBtn} href="tel:+919000000000">
                Call
              </a>
              <a
                className={styles.waBtn}
                href={demoWhatsAppLink("Hi, I would like to discuss a consulting engagement.")}
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
            <p className={styles.eyebrow}>Consulting for Small & Mid Size Businesses</p>
            <h1>I help SMEs grow revenue, cleanly and predictably.</h1>
            <p className={styles.heroSub}>
              Strategy, operations, sales systems, and financial clarity for owners who are done
              with guesswork. Practical advice, implemented with your team.
            </p>
            <div className={styles.heroCtas}>
              <a href="#contact" className={styles.primaryBtn}>
                Book a Discovery Call
              </a>
              <a href="#models" className={styles.ghostBtn}>
                See Engagement Models
              </a>
            </div>
            <dl className={styles.heroStats}>
              <div>
                <dt>12+ yrs</dt>
                <dd>Sample advisory experience across industries</dd>
              </div>
              <div>
                <dt>40+</dt>
                <dd>Sample SME engagements completed</dd>
              </div>
              <div>
                <dt>Sample</dt>
                <dd>All figures on this page are illustrative</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className={styles.section} id="services">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>What I Do</p>
            <h2>Four levers, one goal: a business that runs better.</h2>
            <div className={styles.grid4}>
              {services.map((s) => (
                <article key={s.title} className={styles.card}>
                  <h3>{s.title}</h3>
                  <p>{s.copy}</p>
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt} id="about">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>About</p>
            <h2>A practitioner, not a slide deck.</h2>
            <div className={styles.aboutGrid}>
              <div>
                <p>
                  I am A. Rao, a business consultant working with SME owners on growth, operations,
                  and profitability. This is a sample profile: over a sample 12 year career I have
                  sat on both sides of the table, running a distribution business and then advising
                  founders on fixing theirs.
                </p>
                <p>
                  My style is direct and implementation focused. We agree on measurable outcomes
                  first, then I work alongside your team until the new systems run on their own.
                </p>
              </div>
              <div className={styles.credentials}>
                <h3>Credentials (Sample)</h3>
                <ul>
                  <li>Sample MBA, Operations & Strategy</li>
                  <li>Sample Certified Management Consultant credential</li>
                  <li>Sample advisor to 3 industry associations</li>
                  <li>Guest speaker, sample SME conclaves (Sample)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="results">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>Client Feedback</p>
            <h2>Sample results from sample clients.</h2>
            <p className={styles.disclaimer}>
              All testimonials and figures on this page are illustrative samples for this demo.
            </p>
            <div className={styles.grid3}>
              {testimonials.map((t) => (
                <figure key={t.name} className={styles.quoteCard}>
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionAlt} id="models">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>How We Work Together</p>
            <h2>Two simple engagement models.</h2>
            <div className={styles.grid2}>
              <article className={styles.card}>
                <h3>Advisory Retainer</h3>
                <p className={styles.price}>Sample: from ₹35,000/month</p>
                <p>
                  Ongoing guidance for owners who want a sounding board and accountability partner.
                  Monthly review, priority access, and a living action plan.
                </p>
                <ul>
                  <li>Monthly strategy review session</li>
                  <li>WhatsApp access on working days</li>
                  <li>Quarterly financial health check</li>
                </ul>
                <a href="#contact" className={styles.primaryBtn}>
                  Enquire
                </a>
              </article>
              <article className={styles.card}>
                <h3>90 Day Sprint</h3>
                <p className={styles.price}>Sample: from ₹1,20,000 fixed</p>
                <p>
                  An intensive, outcome defined project: pick one problem (sales pipeline, SOPs,
                  pricing) and we fix it together in 90 days.
                </p>
                <ul>
                  <li>Diagnostic in week 1</li>
                  <li>Weekly working sessions with your team</li>
                  <li>Handover pack and SOP library</li>
                </ul>
                <a href="#contact" className={styles.primaryBtn}>
                  Enquire
                </a>
              </article>
            </div>
            <p className={styles.disclaimer}>Pricing shown is sample only, for demonstration.</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.contactBand}`} id="contact">
          <div className={styles.sectionInner}>
            <p className={styles.eyebrow}>Contact</p>
            <h2>Start with a conversation.</h2>
            <div className={styles.contactGrid}>
              <ConsultantContactForm />
              <div className={styles.contactInfo}>
                <h3>Prefer to talk directly?</h3>
                <p>
                  Phone (sample): <a href={DEMO_PHONE_LINK}>{DEMO_PHONE_DISPLAY}</a>
                </p>
                <p>Office hours: Mon to Fri, 10 AM to 6 PM IST (Sample)</p>
                <p>
                  Based in Hyderabad, working with SMEs across India. First discovery call is 30
                  minutes and free.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div>
              <strong>A. Rao, Business Consultant (Sample)</strong>
              <p>A fictional sample profile built to demonstrate a consultant website.</p>
            </div>
            <nav aria-label="Footer">
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#results">Results</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </footer>
      </div>
    </DemoShell>
    </>
  );
}
