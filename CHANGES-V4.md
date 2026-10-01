# CHANGES-V4 — 2026-10-02

Revision v4 on the flagship source (`~/workspace/projectkaro-site-flagship/`).
Build: `npm run build` green — 19/19 static pages, lint + types clean.

## The user's 6 feedback points

1. **Homepage: "Selected work" section removed entirely.** The full section is gone:
   homepage case card, theiqleap.com iframe embed, both "Reserved" placeholder slots,
   and the "Your project could be the next one here" CTA. Dead code cleaned up
   (`WorkImage.tsx`, orphaned CSS, unused imports).
2. **Homepage FAQ trimmed to 5 questions.** Kept the 5 conversion-critical ones
   (What is ProjectKaro? / What types of projects do you take on? / How does the
   pricing work? / How long does a project typically take? / How do I get started
   with ProjectKaro?). Accordion style (matching websites-for-businesses) untouched;
   FAQ JSON-LD now matches the 5 rendered questions.
3. **About page brand mark.** The "PK" monogram circle is replaced with a filled blue
   circle containing an upward arrow, matching the nav logo's arrow motif. No "PK" text.
4. **"Founder-reported numbers. No vanity metrics." removed** — the only occurrence
   (about page) is gone, along with its dead CSS.
5. **Services page: projects/case studies removed.** The `/projects` route is now a pure
   services page: featured theiqleap case card, "Reserved" placeholder slots and all
   case-study blocks deleted; the 10 service cards, statement band, dynamic pricing
   note and CTA stay. See also route rename below.
6. **Academic projects: "Three steps to submission day" filled.** New side panel beside
   the steps: deadline-reassurance card (custom line-art calendar, planning copy,
   4 reassurance bullets incl. typical timelines) + compact WhatsApp chat card.

## Skeleton loading (new, all pages)

Tasteful branded shimmer skeletons on every user-facing route, mirroring each page's
real layout (hero, section heads, card grids, form) so there is no layout shift.
Light theme, blue accent, `prefers-reduced-motion` respected. Shared primitives in
`src/components/Skeleton/` (extended additively: `SectionHeadSkeleton`,
`CTABandSkeleton`, `tone` prop). `loading.tsx` created/upgraded for: `/`, `/about`,
`/services`, `/academic-projects`, `/how-it-works`, `/start-a-project`,
`/websites-for-businesses`. (`/emailonly` is an internal admin tool, intentionally
without one.)

## React Bits touches (new, 2)

New `src/components/effects/BlurText.tsx`: words start blurred/transparent and sharpen
into focus with a soft stagger (hand-rolled, zero dependencies, IntersectionObserver +
CSS transitions). Applied to (1) the homepage hero H1 on load, (2) the homepage
statement quote on scroll into view. Opacity/filter only (no layout shift), fully
disabled under `prefers-reduced-motion`, plain text preserved for screen readers/SEO.

## Bug fix: quote form API

`src/app/api/submit-project/route.ts` rejected submissions missing `projectTitle` or
`message` with 400, while the client form treats both as optional (4 required + 2
optional). Fixed: the API now accepts empty values; notification emails render
"Not specified" / "Not provided" fallbacks. The 4 required fields (name, email,
phone, project type) are still hard-validated.

## Audit fixes

- **Route rename `/projects` → `/services`** to match the "Services" menu label.
  `src/app/projects` moved to `src/app/services`; all internal links updated
  (Header, Footer, CTA, homepage service cards, academic-projects,
  websites-for-businesses, not-found, sitemap, seo.ts, llms.txt);
  `next.config.js` redirects reversed (`/projects` → `/services`, 308 permanent)
  so old URLs never 404 or loop.
- **Removed stray `public/README.md`** (was publicly served at `/README.md`).
- **`public/llms.txt`** updated: services URL, Selected Work section rewritten to
  reflect the single externify mention (placeholder-cards line removed).

## Standing rules verified

externify.in: exactly 1 mention, homepage only, 0 on all other pages. No em dashes in
copy. No "---" dash lines before sub-headings. No decorative 01/02 numberings.
Light theme. wa.me/917396991624 (6 homepage links) + Instagram footer link intact.
Quote form 4+2 fields unchanged. "How we think" untouched. SEO assets intact
(llms.txt, sitemap.xml, robots.txt, JSON-LD). No invented testimonials. Dynamic
pricing only.

## QA

- `npm run build`: green, 19/19 static pages.
- HTTP 200: /, /about, /services, /academic-projects, /how-it-works,
  /start-a-project, /websites-for-businesses, /sitemap.xml, /robots.txt, /llms.txt.
- `/projects` → 308 → `/services`. `/README.md` → 404.
- Note: mobile 360px eyeball check was not possible here; worth one quick visual
  pass on a phone before pushing, especially the new hero blur-in and service cards.
