"use client";

import { useState } from "react";
import styles from "./page.module.css";

export type PricingFaq = {
  question: string;
  answer: string;
};

export default function PricingFaq({ items }: { items: PricingFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className={styles.faqItem} data-open={open}>
            <button
              type="button"
              className={styles.faqButton}
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              {item.question}
              <svg
                className={styles.faqChevron}
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
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {open && <div className={styles.faqPanel}>{item.answer}</div>}
          </div>
        );
      })}
    </div>
  );
}
