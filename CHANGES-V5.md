# ProjectKaro Website, Flagship v5 — Change Log (2026-10-02)

Everything in this list was a direct instruction from the founder. Checked off one by one.

## 1. Real logo on the About page
- The placeholder mark is gone. The About page now shows the actual logo mark: the arrow-circle "o" cropped from the official logo, background made transparent, quality upscaled 4x to 1024x1024.
- File: `public/logo-mark.png`.

## 2. "Recent work / We built externify.in" removed completely
- The homepage proof strip is deleted, not hidden. No externify mention remains anywhere on the site (pages, metadata, llms.txt, sitemap all verified clean).

## 3. Homepage CTA redesigned as a contained box
- "Ready to start your project?" is now a rounded box with a deep-blue gradient, subtle dot-grid pattern, diagonal sheen and soft glows, white text, white pill button. Contained, not full-bleed.

## 4. Academic "Three steps to submission day" alignment fixed
- The big calendar graphic pushed the right column ~200px below the left column. It is now a compact 64px icon inline with the card title, so both columns start at the same level.

## 5. Footer: 4 columns, shorter height
- Brand | Explore (4 links) | Services (4 links) | Contact (email, WhatsApp +91 73969 91624, LinkedIn, Instagram + trust badges). Tighter spacing, 2 columns on tablet, 1 on mobile.

## 6. React Bits animations made visible
- Hero text now fades/slides in clearly on load (was nearly invisible before). Homepage stats (100+, 300+, 10, 24h) count up when scrolled into view. Respects reduced-motion settings.

## 7. Real stock photography (5 images)
- Homepage hero mockup: real dental photo inside the sample website preview.
- Websites for Businesses: shop-counter photo in the hero.
- Academic Projects: students-with-laptops photo in the hero.
- About: wide studio-at-work photo banner.
- Services: wide code-on-screen photo banner.
- All royalty-free (Unsplash), downloaded, compressed (~160-210 KB each), lazy-loaded below the fold, responsive sizes.

## 8. Social preview images (all sizes, logo on top, services listed)
- `public/og-image.png` (1200x630, Facebook/LinkedIn/WhatsApp)
- `public/twitter-image.png` (1200x600, X/Twitter)
- `public/preview-square.png` (1080x1080, square previews)
- Each shows the ProjectKaro logo on top, the headline "Websites that win customers.", and the six services as pills. Wired into all page metadata; old auto-generated text-only preview retired.

## 9. Full optimisation pass
- SEO: 9-route sitemap, robots with AI-crawler rules, canonical URLs, JSON-LD (Organization, WebPage, FAQPage, services, breadcrumbs), keyword-rich titles/descriptions.
- AEO: FAQ schema on key pages + speakable markup for voice/answer engines.
- GEO: llms.txt brand brief for AI models (externify reference removed).
- SXO: AVIF/WebP image formats, priority loading for the hero image, lazy loading + responsive sizes everywhere, long cache headers on images, form autofill attributes.
- HXO: reduced-motion support, labelled form fields with error announcements, tap-friendly targets.
- Social/edge: static OG + Twitter images with dimensions, twitter:site tag, absolute image URLs.

## 10. Privacy Policy + Terms and Conditions (legal pages)
- New `/privacy-policy` page: what data the quote form collects (name, email, phone, project details), why (quotes and delivery only), how it is stored, user rights (access/correction/deletion via contact@projectkaro.com), no advertising trackers, no data selling.
- New `/terms-and-conditions` page: quotes within 24 hours, dynamic pricing per scope, 50% advance + 50% before delivery, timelines and revisions, IP transfers on full payment, academic honesty note for student projects, cancellation/refund terms, liability limited to project fee, Hyderabad jurisdiction.
- Both linked in the footer bottom bar (next to copyright) on every page.
- Quote form now shows a consent notice under the submit button linking both pages.
- Both added to sitemap.xml and llms.txt.

## Technical
- Build: green, 21/21 routes, first-load JS ~87-109 KB per page.
- No em dashes in copy. Light theme. WhatsApp +91 7396991624 on all pages.
