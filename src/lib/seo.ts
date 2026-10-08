import type { Metadata } from "next";
import { BRAND_KEYWORDS, CONTACT_INFO, SERVICE_TYPES, SITE_CONFIG } from "./constants";
import type { FaqItem } from "./faq-data";

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: `${SITE_CONFIG.name} (${SITE_CONFIG.alternateName}) , Web Development & Student Project Solutions`,
};

const TWITTER_IMAGE = {
  url: "/twitter-image.png",
  width: 1200,
  height: 600,
  alt: `${SITE_CONFIG.name} (${SITE_CONFIG.alternateName}) , Web Development & Student Project Solutions`,
};

export function absoluteUrl(path = ""): string {
  return `${SITE_CONFIG.url}${path}`;
}

/** Merge page-specific keywords with global brand terms (deduplicated) */
export function withBrandKeywords(keywords?: string[]): string[] {
  const merged = keywords ? [...keywords, ...BRAND_KEYWORDS] : [...BRAND_KEYWORDS];
  return Array.from(new Set(merged));
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: withBrandKeywords(keywords),
    ...(noIndex
      ? {}
      : {
          alternates: {
            canonical: url,
          },
        }),
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: noIndex ? undefined : url,
      siteName: SITE_CONFIG.name,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      site: "@projectkaro",
      title,
      description,
      creator: "@projectkaro",
      images: [TWITTER_IMAGE.url],
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: false,
            googleBot: { index: false, follow: false },
          },
        }
      : {}),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    alternateName: [...SITE_CONFIG.alternateNames],
    disambiguatingDescription: `${SITE_CONFIG.name} and ${SITE_CONFIG.alternateName} refer to the same web development and student project studio at ${SITE_CONFIG.url}.`,
    url: SITE_CONFIG.url,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/og-image.png"),
    description: SITE_CONFIG.description,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    sameAs: ["https://www.google.com/maps?cid=13782071695098891784"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [...SERVICE_TYPES, "Project Karo", "ProjectKaro"],
    serviceType: [...SERVICE_TYPES],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_INFO.email,
      telephone: CONTACT_INFO.phone,
      availableLanguage: ["English", "Hindi"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${SITE_CONFIG.name} Services`,
      itemListElement: SERVICE_TYPES.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
          provider: { "@id": `${SITE_CONFIG.url}/#organization` },
          areaServed: "IN",
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_CONFIG.url}/#website`,
    name: SITE_CONFIG.name,
    alternateName: [...SITE_CONFIG.alternateNames],
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/services?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function webPageSchema({
  path,
  title,
  description,
}: {
  path: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { "@id": `${SITE_CONFIG.url}/#website` },
    about: { "@id": `${SITE_CONFIG.url}/#organization` },
    inLanguage: "en-IN",
  };
}

/**
 * Speakable content declaration for voice assistants and answer engines.
 *
 * Usage: pass the result through the `JsonLd` component on a page, with
 * cssSelectors pointing at the page's key answer blocks, e.g.
 * `speakableSchema({ path: "/about", cssSelectors: [".faq-answer", ".key-facts"] })`.
 * Keep selectors stable: if a page's class names change, update the call site.
 * Combine with `webPageSchema` for the same path in a single JSON-LD array.
 */
export function speakableSchema({
  path,
  cssSelectors,
}: {
  path: string;
  cssSelectors: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#speakable`,
    url: absoluteUrl(path),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}

export function howToSchema(
  steps: Array<{ name: string; text: string }>,
  name = `How to get a project built with ${SITE_CONFIG.name} (Project Karo)`
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description:
      "A four-step process to submit requirements, receive a detailed quote, build your project, and get full delivery with documentation.",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function serviceListSchema(
  services: Array<{ title: string; description: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE_CONFIG.name} Services`,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@id": `${SITE_CONFIG.url}/#organization` },
        areaServed: "IN",
      },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed = "Hyderabad, IN",
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_CONFIG.url}/#organization` },
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `What's included in ${name}`,
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
