"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq-data";
import styles from "./FAQ.module.css";

const WHATSAPP_LINK =
  "https://wa.me/917396991624?text=Hi%20ProjectKaro%2C%20I%20have%20a%20question.";

const REASSURANCE_ITEMS = [
  "Replies within 24 hours",
  "No question too small",
  "Talk to a human, not a bot",
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={styles.faq} aria-labelledby="faq-heading">
      <div className="container">
        <div className={styles.faqLayout}>
          <div className={styles.faqAside}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2 id="faq-heading" className={styles.title}>
              Frequently Asked Questions
            </h2>
            <p className={styles.faqSub}>
              Everything you need to know about ProjectKaro (Project Karo): our services and how
              we work.
            </p>
            <a
              className={styles.whatsappCard}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.whatsappIcon} aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </span>
              <span className={styles.whatsappText}>
                <strong>Still have questions?</strong>
                <small>Chat with us on WhatsApp</small>
              </span>
              <svg
                className={styles.whatsappArrow}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <ul className={styles.reassurance} aria-label="How we respond">
              {REASSURANCE_ITEMS.map((item) => (
                <li key={item}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <ul className={styles.faqList} role="list">
            {FAQ_ITEMS.map((item, index) => (
              <li key={index} className={styles.faqItem} data-open={openIndex === index}>
                <button
                  type="button"
                  className={styles.faqQuestion}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{item.question}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={styles.faqAnswerWrap}
                >
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
