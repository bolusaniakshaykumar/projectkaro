"use client";

import { useState } from "react";
import { demoWhatsAppLink } from "@/components/DemoShell/demo-constants";
import styles from "./page.module.css";

export default function QuoteRequestForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [partDetails, setPartDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [timeline, setTimeline] = useState("2 to 4 weeks");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Quote request (sample demo)\nName: ${name}\nCompany: ${company}\nPhone: ${phone}\nPart details: ${partDetails}\nQuantity: ${quantity}\nTimeline: ${timeline}`;
    window.open(demoWhatsAppLink(text), "_blank");
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <label>
        Your name
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your full name"
        />
      </label>
      <label>
        Company
        <input
          type="text"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company name"
        />
      </label>
      <label>
        Phone
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 XXXXX XXXXX"
        />
      </label>
      <label>
        Part details
        <textarea
          required
          rows={4}
          value={partDetails}
          onChange={(e) => setPartDetails(e.target.value)}
          placeholder="Material, dimensions, tolerances, finish, drawing link if any"
        />
      </label>
      <div className={styles.formRow}>
        <label>
          Quantity
          <input
            type="text"
            required
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="e.g. 500 nos"
          />
        </label>
        <label>
          Timeline
          <select value={timeline} onChange={(e) => setTimeline(e.target.value)}>
            <option>2 to 4 weeks</option>
            <option>1 to 2 months</option>
            <option>More than 2 months</option>
            <option>Urgent</option>
          </select>
        </label>
      </div>
      <button type="submit" className={styles.primaryBtn}>
        Send Quote Request via WhatsApp
      </button>
    </form>
  );
}
