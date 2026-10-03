"use client";

import { useState } from "react";
import { demoWhatsAppLink } from "@/components/DemoShell/demo-constants";
import styles from "./page.module.css";

export default function ConsultantContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("Growth strategy");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `New enquiry (sample demo)\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\nMessage: ${message}`;
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
        Email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
        />
      </label>
      <label>
        Topic
        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option>Growth strategy</option>
          <option>Operations & SOPs</option>
          <option>Sales systems</option>
          <option>Financial clarity</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        What are you working on?
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A few lines about your business and your biggest challenge"
        />
      </label>
      <button type="submit" className={styles.primaryBtn}>
        Send via WhatsApp
      </button>
    </form>
  );
}
