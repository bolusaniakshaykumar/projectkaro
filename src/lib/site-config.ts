// ProjectKaro site-wide contact + link configuration.
// Single source of truth for contact details used across pages and components.

/**
 * WhatsApp number (international format, no "+", no spaces).
 * CONFIRMED published WhatsApp number (verified 2026-10-01).
 */
export const WHATSAPP_NUMBER = "917396991624";

export const CONTACT_EMAIL = "contact@projectkaro.com";

export const SOCIAL_LINKS = {
  // Verified 2026-10-01: instagram.com/projectkaro is the ProjectKaro
  // business account.
  linkedin: "https://www.linkedin.com/company/projectkaro",
  instagram: "https://www.instagram.com/projectkaro",
} as const;

const WHATSAPP_GREETING = encodeURIComponent(
  "Hi ProjectKaro, I would like a quote for my project."
);

/** Pre-filled WhatsApp chat link used by the floating button and quote page. */
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_GREETING}`;

export const SITE_URL = "https://projectkaro.com";
