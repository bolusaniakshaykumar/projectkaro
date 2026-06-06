import type { Metadata } from "next";
import { CONTACT_INFO, SERVICE_TYPES, SITE_CONFIG } from "./constants";
import type { FaqItem } from "./faq-data";

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${SITE_CONFIG.name} — Web Development & Student Project Solutions`,
};

export function absoluteUrl(path = ""): string {
  return `${SITE_CONFIG.url}${path}`;
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
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: SITE_CONFIG.name,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@projectkaro",
      images: [OG_IMAGE.url],
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
    url: SITE_CONFIG.url,
    logo: absoluteUrl("/logo.png"),
    image: absoluteUrl("/opengraph-image"),
    description: SITE_CONFIG.description,
    email: CONTACT_INFO.email,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [...SERVICE_TYPES],
    serviceType: [...SERVICE_TYPES],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: CONTACT_INFO.email,
      availableLanguage: ["English", "Hindi"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ProjectKaro Services",
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
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: { "@id": `${SITE_CONFIG.url}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/projects?q={search_term_string}`,
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
  name = "How to get a project built with ProjectKaro"
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description:
      "A four-step process to submit requirements, receive a fixed quote, build your project, and get full delivery with documentation.",
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
    name: "ProjectKaro Services",
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
