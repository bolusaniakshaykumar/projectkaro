"use client";

import { useState, type FormEvent } from "react";
import { demoWhatsAppLink } from "@/components/DemoShell/demo-constants";
import styles from "./page.module.css";

const TREATMENT_OPTIONS = [
  "General Consultation",
  "Teeth Cleaning & Polishing",
  "Root Canal Treatment",
  "Braces & Aligners",
  "Dental Implants",
];

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState(TREATMENT_OPTIONS[0]);
  const [date, setDate] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = [
      "Hi SmileCare! I would like to book a dental appointment.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Treatment: ${treatment}`,
      `Preferred date: ${date || "Flexible"}`,
    ].join("\n");
    window.open(demoWhatsAppLink(message), "_blank", "noopener");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <label className={styles.field}>
          <span>Full name</span>
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={styles.field}>
          <span>Phone number</span>
          <input
            type="tel"
            required
            placeholder="+91"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className={styles.field}>
          <span>Treatment</span>
          <select value={treatment} onChange={(e) => setTreatment(e.target.value)}>
            {TREATMENT_OPTIONS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span>Preferred date</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
      </div>
      <button type="submit" className={styles.formButton}>
        Confirm on WhatsApp
      </button>
      <p className={styles.formNote}>
        This is a sample form. Submitting opens WhatsApp with your details, nothing is
        stored online.
      </p>
    </form>
  );
}
