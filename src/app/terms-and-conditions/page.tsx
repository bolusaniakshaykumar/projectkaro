import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description:
    "ProjectKaro Terms and Conditions: how quotes, pricing, payments, timelines, revisions, intellectual property, and cancellations work for our website and project services.",
  path: "/terms-and-conditions",
  noIndex: false,
});

const LAST_UPDATED = "2 October 2026";

const SECTIONS = [
  {
    title: "The services",
    body: [
      "ProjectKaro (a registered micro enterprise, Udyam UDYAM-TS-12-0052800, Hyderabad, India) provides business websites, student academic projects, full-stack applications, startup MVPs, AI solutions, and technical consulting.",
      "By requesting a quote or placing an order with us, you agree to these terms. Anything we agree with you in writing for a specific project takes priority over these general terms.",
    ],
  },
  {
    title: "Quotes and pricing",
    body: [
      "Share your requirements through our quote form, email, or WhatsApp, and we will send you a detailed written quote, usually within 24 hours.",
      "Our pricing is dynamic: every quote is prepared based on the scope and complexity of your specific project. The quote we send you states the price, the scope included, and how long the quote stays valid.",
    ],
  },
  {
    title: "Payments",
    body: [
      "Our standard payment schedule is 50% advance to begin work and the remaining 50% before final delivery. We will confirm the schedule in writing before we start.",
      "Work begins after the advance is received. Final files, credentials, and launch happen after the balance is paid.",
    ],
  },
  {
    title: "Timelines and revisions",
    body: [
      "Delivery timelines are agreed in writing for each project and depend on the scope and on receiving your inputs (content, images, feedback) on time. Delays in inputs can shift the timeline fairly.",
      "Every project includes reasonable revisions within the agreed scope. Requests that go beyond the agreed scope are quoted separately before we proceed.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "Once your project is fully paid for, the final deliverables are yours: the website files, source code, and documentation we created for you.",
      "We may showcase completed work in our portfolio unless you ask us in writing not to.",
    ],
  },
  {
    title: "Academic projects",
    body: [
      "For student projects, we build complete, working projects with documentation and explanation support so you genuinely understand what was built.",
      "You are responsible for following your institution's academic honesty policies when submitting or presenting the work.",
    ],
  },
  {
    title: "Cancellations and refunds",
    body: [
      "If you cancel before work begins, your advance is refunded in full. If you cancel after work has begun, we refund the advance minus the value of work already completed.",
      "Refund and cancellation details for your specific project will always be confirmed in writing before we start.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "We work hard to deliver quality, but our total liability for any project is limited to the amount you paid us for that project. We are not liable for indirect losses such as lost profits.",
    ],
  },
  {
    title: "Contact and governing law",
    body: [
      "Questions about these terms? Write to contact@projectkaro.com or WhatsApp +91 73969 91624.",
      "These terms are governed by the laws of India. Any disputes will be handled in the courts of Hyderabad, Telangana.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Terms and Conditions",
            description: metadata.description as string,
            path: "/terms-and-conditions",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms and Conditions", path: "/terms-and-conditions" },
          ]),
        ]}
      />
      <article className={styles.legal}>
        <div className={styles.inner}>
          <p className={styles.kicker}>Legal</p>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>
          <p className={styles.intro}>
            Simple, fair terms for working with ProjectKaro. No fine print
            traps, just a clear picture of how quotes, payments, and delivery
            work.
          </p>
          {SECTIONS.map((section) => (
            <section key={section.title} className={styles.section}>
              <h2 className={styles.heading}>{section.title}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </article>
    </>
  );
}
