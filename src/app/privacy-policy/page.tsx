import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, createPageMetadata, webPageSchema } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "ProjectKaro Privacy Policy: what personal data we collect through our quote form and WhatsApp, why we collect it, how we store it, and your rights under Indian data protection law.",
  path: "/privacy-policy",
  noIndex: false,
});

const LAST_UPDATED = "2 October 2026";

const SECTIONS = [
  {
    title: "Who we are",
    body: [
      "This website is operated by ProjectKaro, a registered micro enterprise (Udyam Registration UDYAM-TS-12-0052800) based in Hyderabad, India. We build business websites, student academic projects, full-stack applications, startup MVPs, and AI solutions.",
      "If you have any questions about this policy or your personal data, write to us at contact@projectkaro.com or WhatsApp +91 73969 91624.",
    ],
  },
  {
    title: "What data we collect",
    body: [
      "We collect personal data only when you choose to share it with us:",
      "Quote form: your name, email address, phone number, the service you are interested in, and the project details you describe. These fields are needed to prepare your quote.",
      "Direct contact: if you email us or message us on WhatsApp, we receive whatever you send, such as your name, contact details, and your enquiry.",
      "We do not run advertising trackers on this site, and we do not buy or collect personal data from third parties.",
    ],
  },
  {
    title: "Why we collect it",
    body: [
      "We use your data for one purpose: to respond to your enquiry and deliver the service you asked about. That means preparing a quote (usually within 24 hours), discussing requirements with you, delivering your project, and following up on support.",
      "We will never sell your personal data. We do not share it with third parties for marketing.",
    ],
  },
  {
    title: "How we store and protect it",
    body: [
      "Form submissions are emailed to our business inbox and logged in our internal lead tracker so we can respond and keep a record of the conversation.",
      "We take reasonable steps to protect your data: access is limited to the ProjectKaro team, accounts are password protected, and we do not publish or expose your details publicly.",
      "We keep enquiry records only as long as needed for the purpose they were collected for, such as maintaining project history and support.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can ask us at any time to see the personal data we hold about you, correct it, or delete it. Write to contact@projectkaro.com with the subject line \"Data Request\" and we will respond within a reasonable time.",
      "If you asked us for a quote and change your mind, just tell us and we will delete your enquiry details.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "This site uses only the technical storage needed to make pages work (for example, remembering your theme or form state). We do not use advertising or cross-site tracking cookies.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "If we change this policy, we will update the date at the top of this page. Continued use of the site after a change means you accept the updated policy.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Privacy Policy",
            description: metadata.description as string,
            path: "/privacy-policy",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ]}
      />
      <article className={styles.legal}>
        <div className={styles.inner}>
          <p className={styles.kicker}>Legal</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>
          <p className={styles.intro}>
            When you share your details with ProjectKaro, for example through
            our quote form, you deserve to know exactly what happens with them.
            This page explains it in plain language.
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
