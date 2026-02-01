"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import styles from "./StartProjectForm.module.css";

const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ALLOWED_EXTENSIONS = [".pdf", ".doc", ".docx"];
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB

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

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  projectTitle?: string;
  message?: string;
  abstract?: string;
}

export default function StartProjectForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [message, setMessage] = useState("");
  const [abstractFile, setAbstractFile] = useState<File | null>(null);

  // File upload state
  const [isDragging, setIsDragging] = useState(false);

  // Custom Country Dropdown State
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  function validateFile(file: File): string | null {
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return "Only PDF, DOC, and DOCX files are allowed.";
    }
    if (!ALLOWED_TYPES.includes(file.type) && ext !== ".doc" && ext !== ".docx") {
      return "Invalid file type. Please upload PDF, DOC, or DOCX.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File size must be 2 MB or less.";
    }
    return null;
  }

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
    if (!projectTitle.trim()) newErrors.projectTitle = "Project title is required.";
    if (!message.trim()) newErrors.message = "Project description is required.";
    if (abstractFile) {
      const fileError = validateFile(abstractFile);
      if (fileError) newErrors.abstract = fileError;
    }
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
    formData.append("phone", `${countryCode} ${phone.trim()}`);
    formData.append("projectTitle", projectTitle.trim());
    formData.append("message", message.trim());
    if (abstractFile) formData.append("abstract", abstractFile);

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
      setMessage("");
      setAbstractFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
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
        <h2 className={styles.successTitle}>Thank you for submitting your project</h2>
        <p className={styles.successText}>
          Our team will review your details and respond within 3–6 hours at the email address you provided. If you have any questions in the meantime, contact us at{" "}
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
        <label htmlFor="projectTitle">Project Title *</label>
        <input
          type="text"
          id="projectTitle"
          name="projectTitle"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
          required
          disabled={status === "submitting"}
          aria-invalid={!!errors.projectTitle}
        />
        {errors.projectTitle && <p className="form-error">{errors.projectTitle}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message / Project Description *</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          required
          disabled={status === "submitting"}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="form-error">{errors.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="abstract">Project Abstract (Optional)</label>
        <div
          className={`${styles.dropzone} ${isDragging ? styles.dropzoneDragging : ""}`}
          role="button"
          tabIndex={0}
          onClick={() => fileInputRef.current?.click()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              fileInputRef.current?.click();
            }
          }}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            const file = e.dataTransfer.files?.[0] || null;
            if (file) {
              const fileError = validateFile(file);
              if (fileError) {
                setErrors((prev) => ({ ...prev, abstract: fileError }));
                setAbstractFile(null);
              } else {
                setAbstractFile(file);
                setErrors((prev) => ({ ...prev, abstract: undefined }));
              }
            }
          }}
        >
          <svg className={styles.uploadIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7a3 3 0 0 1 3-3h7l6 6v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M14 4v5a2 2 0 0 0 2 2h5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 16v-4m0 0-2 2m2-2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <div className={styles.uploadTextWrap}>
            <p className={styles.uploadTitle}>Drag & drop your abstract (Optional)</p>
            <p id="abstract-hint" className={styles.uploadHint}>or click to browse • PDF/DOC • max 2 MB</p>
          </div>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          id="abstract"
          name="abstract"
          className={styles.hiddenInput}
          accept=".pdf,.doc,.docx"
          onChange={(e) => {
            const file = e.target.files?.[0] || null;
            if (file) {
              const fileError = validateFile(file);
              if (!fileError) {
                setAbstractFile(file);
                setErrors((prev) => ({ ...prev, abstract: undefined }));
              } else {
                setErrors((prev) => ({ ...prev, abstract: fileError }));
              }
            } else {
              setAbstractFile(null);
            }
          }}
          disabled={status === "submitting"}
          aria-hidden
        />
        {abstractFile && (
          <div className={styles.uploadMeta}>
            <span className={styles.fileName}>Selected: {abstractFile.name}</span>
            <button
              type="button"
              className={styles.removeFile}
              onClick={() => {
                setAbstractFile(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
            >
              Remove
            </button>
          </div>
        )}
        {errors.abstract && <p className="form-error">{errors.abstract}</p>}
      </div>

      {status === "error" && (
        <div className={styles.apiError} role="alert">{errorMessage}</div>
      )}

      <button type="submit" className="btn btn--primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit Project"}
      </button>
    </form>
  );
}
