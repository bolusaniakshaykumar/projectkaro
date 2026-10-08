"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import styles from "./StartProjectForm.module.css";

const COUNTRY_CODES = [
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+1", country: "USA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+1", country: "Canada", flag: "🇨🇦" },
  { code: "+61", country: "Australia", flag: "🇦🇺" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+81", country: "Japan", flag: "🇯🇵" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+86", country: "China", flag: "🇨🇳" },
  { code: "+55", country: "Brazil", flag: "🇧🇷" },
  { code: "+7", country: "Russia", flag: "🇷🇺" },
  { code: "+52", country: "Mexico", flag: "🇲🇽" },
  { code: "+34", country: "Spain", flag: "🇪🇸" },
  { code: "+39", country: "Italy", flag: "🇮🇹" },
  { code: "+82", country: "South Korea", flag: "🇰🇷" },
  { code: "+62", country: "Indonesia", flag: "🇮🇩" },
  { code: "+90", country: "Turkey", flag: "🇹🇷" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+65", country: "Singapore", flag: "🇸🇬" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+41", country: "Switzerland", flag: "🇨🇭" },
  { code: "+46", country: "Sweden", flag: "🇸🇪" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+45", country: "Denmark", flag: "🇩🇰" },
  { code: "+353", country: "Ireland", flag: "🇮🇪" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
];

const PROJECT_TYPES = [
  "Website Development",
  "Personal Portfolio",
  "Full Stack Application",
  "Business Website",
  "Startup MVP",
  "Student Major Project",
  "Student Minor Project",
  "Research Project",
  "AI Solution",
  "Technical Consulting",
];

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectType?: string;
}

interface StartProjectFormProps {
  initialProjectType?: string;
}

// Strip a duplicated country code when the user typed it into the phone field
// (e.g. "+91" selected and "917219797946" typed -> "+91 7219797946").
// Only strips when a full national number remains, so a number that merely
// starts with the same digits is never mangled.
function normalizePhone(countryCode: string, phone: string): string {
  const digits = phone.replace(/\D/g, "");
  const ccDigits = countryCode.replace(/\D/g, "");
  let rest = digits;
  if (ccDigits && rest.startsWith(ccDigits) && rest.length - ccDigits.length >= 10) {
    rest = rest.slice(ccDigits.length);
  }
  return `${countryCode} ${rest}`;
}

export default function StartProjectForm({ initialProjectType }: StartProjectFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectType, setProjectType] = useState(
    initialProjectType && PROJECT_TYPES.includes(initialProjectType)
      ? initialProjectType
      : ""
  );
  const [message, setMessage] = useState("");

  // Custom Country Dropdown State
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{4,15}$/.test(phone.replace(/\D/g, ''))) {
      newErrors.phone = "Enter a valid phone number.";
    }
    if (!projectType) newErrors.projectType = "Please select a project type.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("idle");
    setErrorMessage("");
    if (!validate()) return;

    setStatus("submitting");

    const formData = new FormData();
    formData.append("fullName", fullName.trim());
    formData.append("email", email.trim());
    formData.append("phone", normalizePhone(countryCode, phone.trim()));
    formData.append("projectTitle", projectTitle.trim());
    formData.append("projectType", projectType);
    formData.append("message", message.trim());

    try {
      const res = await fetch("/api/submit-project", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setProjectTitle("");
      setProjectType("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  // Filter countries for search
  const filteredCountries = COUNTRY_CODES.filter(item =>
    item.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.code.includes(searchTerm)
  );

  const currentCountry = COUNTRY_CODES.find(c => c.code === countryCode) || COUNTRY_CODES[0];

  if (status === "success") {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <span className={styles.successCheck} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <h2 className={styles.successTitle}>Thank you for submitting your project</h2>
        <p className={styles.successText}>
          Our team will review your details and respond within 24 hours at the email address you provided. If you have any questions in the meantime, contact us at{" "}
          <a href="mailto:contact@projectkaro.com">contact@projectkaro.com</a>.
        </p>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Project submission form"
    >
      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          autoComplete="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          disabled={status === "submitting"}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
        />
        {errors.fullName && <p id="fullName-error" className="form-error">{errors.fullName}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "submitting"}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && <p id="email-error" className="form-error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <div className={styles.phoneWrapper}>

          {/* Custom Searchable Select */}
          <div className={styles.customSelect} ref={dropdownRef}>
            <button
              type="button"
              className={styles.selectedCountry}
              onClick={() => setIsCountryOpen(!isCountryOpen)}
              disabled={status === "submitting"}
              aria-expanded={isCountryOpen}
              aria-haspopup="listbox"
            >
              <span>{currentCountry.flag} {currentCountry.code}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {isCountryOpen && (
              <div className={styles.dropdownMenu} role="listbox">
                <input
                  type="text"
                  placeholder="Search country..."
                  className={styles.searchInput}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                  onClick={(e) => e.stopPropagation()} // Prevent close
                />
                <div className={styles.optionsList}>
                  {filteredCountries.map((item, index) => (
                    <div
                      key={index}
                      className={`${styles.option} ${item.code === countryCode ? styles.optionSelected : ''}`}
                      role="option"
                      aria-selected={item.code === countryCode}
                      onClick={() => {
                        setCountryCode(item.code);
                        setIsCountryOpen(false);
                        setSearchTerm("");
                      }}
                    >
                      <span className={styles.optionFlag}>{item.flag}</span>
                      <span className={styles.optionName}>{item.country}</span>
                      <span className={styles.optionCode}>{item.code}</span>
                    </div>
                  ))}
                  {filteredCountries.length === 0 && (
                    <div className={styles.option} style={{ cursor: 'default', color: '#64748b' }}>No result</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            inputMode="numeric"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 15))}
            required
            disabled={status === "submitting"}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            placeholder="Mobile Number"
          />
        </div>
        {errors.phone && <p id="phone-error" className="form-error">{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="projectTitle">Project Title (optional)</label>
        <input
          type="text"
          id="projectTitle"
          name="projectTitle"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          disabled={status === "submitting"}
        />
      </div>

      <div className="form-group">
        <label htmlFor="projectType">Project Type *</label>
        <select
          id="projectType"
          name="projectType"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          required
          disabled={status === "submitting"}
          aria-invalid={!!errors.projectType}
        >
          <option value="" disabled>Select a service…</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.projectType && <p className="form-error">{errors.projectType}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Project Description (optional)</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          disabled={status === "submitting"}
        />
      </div>



      {status === "error" && (
        <div className={styles.apiError} role="alert">{errorMessage}</div>
      )}

      <button type="submit" className={`btn btn--primary ${styles.submitBtn}`} disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Submitting…
          </>
        ) : (
          <>
            Get my detailed quote
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </>
        )}
      </button>
      <p className={styles.consentNote}>
        By submitting this form, you agree to our{" "}
        <a href="/privacy-policy">Privacy Policy</a> and{" "}
        <a href="/terms-and-conditions">Terms &amp; Conditions</a>. We only use
        your details to prepare and discuss your quote.
      </p>
    </form>
  );
}
