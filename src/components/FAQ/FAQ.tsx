"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq-data";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const midpoint = Math.ceil(FAQ_ITEMS.length / 2);
  const column1 = FAQ_ITEMS.slice(0, midpoint);
  const column2 = FAQ_ITEMS.slice(midpoint);

  const renderFAQItem = (item: (typeof FAQ_ITEMS)[number], index: number, columnOffset: number) => {
    const actualIndex = index + columnOffset;
    return (
      <li key={actualIndex} className={styles.item} data-open={openIndex === actualIndex}>
        <button
          type="button"
          className={styles.question}
          onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)}
          aria-expanded={openIndex === actualIndex}
          aria-controls={`faq-answer-${actualIndex}`}
          id={`faq-question-${actualIndex}`}
        >
          <span className={styles.questionText}>{item.question}</span>
          <div className={styles.questionIcon}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.chevron}
            >
              <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
        <div
          id={`faq-answer-${actualIndex}`}
          role="region"
          aria-labelledby={`faq-question-${actualIndex}`}
          className={styles.answerWrap}
        >
          <div className={styles.answer}>
            <p>{item.answer}</p>
          </div>
        </div>
      </li>
    );
  };

  return (
    <section className={styles.faq} aria-labelledby="faq-heading">
      <div className="container">
        <div className={styles.faqHeader}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2 id="faq-heading" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.faqSubtitle}>
            Everything you need to know about ProjectKaro (Project Karo) — our services and how we work.
          </p>
        </div>
        <div className={styles.faqGrid}>
          <ul className={styles.list} role="list">
            {column1.map((item, index) => renderFAQItem(item, index, 0))}
          </ul>
          <ul className={styles.list} role="list">
            {column2.map((item, index) => renderFAQItem(item, index, midpoint))}
          </ul>
        </div>
      </div>
    </section>
  );
}
