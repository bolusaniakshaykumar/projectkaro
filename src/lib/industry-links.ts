/* Shared navigation labels for the 10 "Websites for X" industry pages.
   Used by the header mega menu, the footer, and the businesses page. */

export interface IndustryLink {
  href: string;
  label: string;
}

export const INDUSTRY_LINKS: IndustryLink[] = [
  { href: "/websites-for-dental-clinics", label: "Dental Clinics" },
  { href: "/websites-for-doctors", label: "Doctors" },
  { href: "/websites-for-restaurants", label: "Restaurants" },
  { href: "/websites-for-salons", label: "Salons" },
  { href: "/websites-for-real-estate", label: "Real Estate" },
  { href: "/websites-for-startups", label: "Startups" },
  { href: "/websites-for-cas", label: "CAs and Accountants" },
  { href: "/websites-for-coaching-centres", label: "Coaching Centres" },
  { href: "/websites-for-consultants", label: "Consultants" },
  { href: "/websites-for-small-businesses", label: "Small Businesses" },
];
