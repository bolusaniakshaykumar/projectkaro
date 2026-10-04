"use client";

import { useState, type FormEvent } from "react";
import { demoWhatsAppLink } from "@/components/DemoShell/demo-constants";
import styles from "./page.module.css";

const CONCERN_OPTIONS = [
  "General Skin Consultation",
  "Acne & Acne Scars",
  "Pigmentation & Dark Spots",
  "Laser Hair Reduction",
  "Anti-Aging & Wrinkles",
];

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState(CONCERN_OPTIONS[0]);
  const [date, setDate] = useState("");
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    const message = [
      "Hi GlowSkin! I would like to book a skin consultation.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Concern: ${concern}`,
      `Preferred date: ${date || "Flexible"}`,
    ].join("\n");
    window.open(demoWhatsAppLink(message), "_blank", "noopener");
    window.setTimeout(() => setSending(false), 1200);
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
          <span>Skin concern</span>
          <select value={concern} onChange={(e) => setConcern(e.target.value)}>
            {CONCERN_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.field}>
          <span>Preferred date</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
      </div>
      <button type="submit" className={styles.formButton} disabled={sending}>
        {sending ? "Opening WhatsApp…" : "Confirm on WhatsApp"}
      </button>
      <p className={styles.formNote}>
        This is a sample form. Submitting opens WhatsApp with your details, nothing is
        stored online.
      </p>
    </form>
  );
}
