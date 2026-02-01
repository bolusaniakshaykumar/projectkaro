"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ_ITEMS = [
  // Column 1 - General & Services
  {
    question: "Do you build the entire project for me?",
    answer: "Yes. From the first line of code to the final report, we handle everything. You provide the abstract (or we suggest one), and we deliver the complete running project with documentation.",
  },
  {
    question: "How fast can you deliver?",
    answer: "We specialize in tight deadlines. For mini projects, we can deliver in 2-3 days. For major final-year projects, it typically takes 1-2 weeks depending on complexity. Need it faster? Let us know.",
  },
  {
    question: "Will the code run on my laptop?",
    answer: "100%. We frame our code to be 'plug-and-play'. We also provide a full setup guide and a 1-on-1 session to help you run it locally on your own machine before your viva.",
  },
  {
    question: "Is there any upfront payment?",
    answer: "Creating a roadmap and feasibility check is free. Once we agree on the scope and price, we take a deposit to start the work, with the rest payable upon completion/milestones.",
  },
  {
    question: "How do I explain the code in my viva?",
    answer: "This is the most important part. We don't just dump code on you. We schedule a 'Code Walkthrough' session where we explain the logic, architecture, and flow so you can answer any question the external examiner throws at you.",
  },

  // Column 2 - Academic & Support
  {
    question: "Do you provide project reports and PPTs?",
    answer: "Yes, we include standard academic documentation: Synopsis, SRS, System Design, Test Cases, and the Final Project Report (50-100 pages) formatted to IEEE/university standards.",
  },
  {
    question: "What if my guide asks for changes?",
    answer: "We support you until the final submission. If your guide needs a tweak in the UI or a clearer diagram in the report, we handle revisions at no extra chaos.",
  },
  {
    question: "I have no idea for a project. Can you suggest one?",
    answer: "Absolutely. We have a list of trending IEEE papers and real-world problem statements in AI/ML, IoT, WebDev, and Blockchain. Just tell us your domain, and we'll pitch you approval-ready ideas.",
  },
  {
    question: "How much does it cost?",
    answer: "It depends on the scope. A simple mini-project is very affordable for students. A complex hardware IoT project costs more due to components. Submit your abstract to get an exact quote within 3 hours.",
  },
  {
    question: "Do you ship IoT hardware?",
    answer: "Yes. For IoT projects, we build the circuit, test it, and ship the physical kit to your address via courier. We also send a video guide on how to assemble/power it up.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Split FAQs into two columns
  const column1 = FAQ_ITEMS.slice(0, 5);
  const column2 = FAQ_ITEMS.slice(5, 10);

  // FAQ structured data for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  const renderFAQItem = (item: typeof FAQ_ITEMS[0], index: number, columnOffset: number) => {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className={styles.faqHeader}>
          <p className={styles.eyebrow}>FAQ</p>
          <h2 id="faq-heading" className={styles.title}>
            Frequently Asked Questions
          </h2>
          <p className={styles.faqSubtitle}>
            Everything you need to know about ProjectKaro&apos;s academic project support services.
          </p>
        </div>
        <div className={styles.faqGrid}>
          <ul className={styles.list} role="list">
            {column1.map((item, index) => renderFAQItem(item, index, 0))}
          </ul>
          <ul className={styles.list} role="list">
            {column2.map((item, index) => renderFAQItem(item, index, 5))}
          </ul>
        </div>
      </div>
    </section>
  );
}
