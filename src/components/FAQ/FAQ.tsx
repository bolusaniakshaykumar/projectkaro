"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQ_ITEMS = [
  // Column 1 - General & Services
  {
    question: "What is ProjectKaro and how does it help students complete projects?",
    answer: "ProjectKaro is an academic project execution platform that provides structured, guided support for engineering students and tech beginners. We help you complete college mini projects, final-year projects, portfolio projects, and IoT projects through expert mentorship, clear milestones, and comprehensive documentation that meets institutional standards.",
  },
  {
    question: "How long does it take to get a response after submitting my project abstract?",
    answer: "We typically respond within 3-6 hours after you submit your project abstract. Our team carefully reviews each submission to understand the scope, technical requirements, and academic objectives before providing personalized guidance and next steps.",
  },
  {
    question: "What types of academic projects does ProjectKaro support?",
    answer: "We support a wide range of academic projects including college mini projects, final-year capstone projects, portfolio projects for career building, IoT and embedded systems projects, web and mobile application projects, and domain-specific engineering projects across CSE, ECE, EEE, and mechanical engineering.",
  },
  {
    question: "Is there any upfront payment required before submitting my project idea?",
    answer: "No, submitting your project abstract is completely free and non-binding. We only discuss pricing and timelines after reviewing your specific requirements and understanding your project scope. There are no hidden costs or upfront commitments.",
  },
  {
    question: "How does the guided project execution process work at ProjectKaro?",
    answer: "Our guided execution follows a structured approach: we start with requirement analysis, create a detailed project roadmap with milestones, provide regular mentorship sessions, assist with implementation and debugging, prepare academic documentation (reports, presentations, abstracts), and ensure timely completion aligned with your submission deadlines.",
  },

  // Column 2 - Academic & Support
  {
    question: "What kind of academic support and documentation do you provide?",
    answer: "We provide comprehensive academic support including project reports, abstracts, literature surveys, system design documents, implementation guides, presentation slides, demonstration videos, and viva preparation. All documentation is tailored to meet your institution's specific requirements and evaluation criteria.",
  },
  {
    question: "Will ProjectKaro help me with college project submissions and evaluations?",
    answer: "Yes, absolutely. Our approach is specifically designed to align with academic submission standards. We help you prepare all required deliverables, understand evaluation criteria, practice presentations, and build confidence for viva voce examinations while ensuring you gain genuine understanding of your project.",
  },
  {
    question: "Who is ProjectKaro best suited for - which students should use this service?",
    answer: "ProjectKaro is ideal for engineering students (B.Tech, M.Tech, diploma) who need structured project support, tech beginners building their first real-world projects, students struggling to start or complete their projects, those facing time constraints or last-minute deadlines, and anyone seeking expert mentorship to build quality academic projects.",
  },
  {
    question: "How much does ProjectKaro cost and what is included in the pricing?",
    answer: "Pricing varies based on project complexity, timeline, and specific requirements. We offer transparent, customized quotes after reviewing your project abstract. Our pricing typically includes complete project execution, expert mentorship, all documentation, unlimited revisions during development, and post-submission support for queries.",
  },
  {
    question: "Can I get help with both hardware and software components in IoT projects?",
    answer: "Yes, we provide end-to-end support for IoT projects covering both hardware (Arduino, Raspberry Pi, ESP32, sensors, actuators) and software components (embedded programming, mobile apps, web dashboards, cloud integration). We help with circuit design, component selection, coding, testing, and complete system integration.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Split FAQs into two columns
  const column1 = FAQ_ITEMS.slice(0, 5);
  const column2 = FAQ_ITEMS.slice(5, 10);

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
