# CHANGES-V3 — ProjectKaro Flagship Site (2026-10-02)

Revision v3, built from his 9-point review of v2 on localhost. Source: `~/workspace/projectkaro-site-flagship/`. Supersedes v2 (v2 zip kept untouched).

## His 9 feedback points

1. **The Stakes redesigned (homepage dark band).** The old 2x2 icon-card grid is gone. New "incident ledger" layout: sticky left column (eyebrow, headline, intro, CTA) beside a stacked list of four hairline-separated rows, each with the original icon in a bordered signal chip, large serif title, and description. Dark band kept, with a subtle dot-grid texture and hover states. Same copy intent, all four pain points word-for-word.

2. **Hero redesigned (homepage).** The floating-cards collage is removed entirely (all `deck*`/`float*`/`heroBadge` markup and CSS deleted). New hero: strong typography plus ONE visual — a single elegant browser mockup of a believable website (dental clinic homepage: nav, headline, CTAs, services strip, footer strip; CSS/SVG only, no animation). Asymmetric editorial offset on desktop. Kept: dual CTAs (Get my detailed quote / Chat on WhatsApp) and the trust row (300+ clients served / Registered MSME (Udyam) / quote within 24 hours). The eyebrow line stays removed.

3. **Menu order.** Now: Home, About, Services, Websites for Businesses, Academic Projects, How It Works, Get a Quote (CTA-styled). Desktop and mobile share one NAV_LINKS list, so both update together.

4. **Services section = services only.** Verified: the section already contained only the heading, sub-copy, and the 10 service cards. No related-links or cross-promo blocks existed; nothing to remove. Cards untouched.

5. **Websites-for-businesses, "What you get", left side filled.** Left column now: eyebrow + heading + original intro paragraph + a second intro paragraph (owner voice) + a 4-point proof card with check icons (built around your business / content help included / per-project pricing, quote in 24 hours / you approve every page) + a compact WhatsApp CTA card + the two original links. Right-side outcome cards untouched.

6. **Homepage FAQ restyled to match the businesses-page FAQ.** The shared FAQ component (homepage-only) now uses the same design: sticky sidebar (heading, sub copy, WhatsApp card, reassurance bullets) beside a single-column accordion of rounded cards. FAQ content and JSON-LD schema untouched.

7. **About, "The short version" full width.** The 46rem max-width removed; prose now fills the section width in a two-column magazine layout on desktop (single column on mobile). Drop-cap preserved. No more empty right side.

8. **About, "What we stand for" redesigned.** The numbered ledger rows are replaced with a 3-column card grid: brand-tint icon medallion with custom stroke line-art SVG per value, title, original text. Same copy, hover lift, responsive, reduced-motion safe.

9. **Copy fix.** "Reviewed by a human, replied within 24 hours." is now "Replied within 24 hours." (start-a-project page; the only occurrence in the codebase).

## Standing rules kept
Light theme; no em dashes in copy (dashes found only in CSS comments); WhatsApp wa.me/917396991624; Instagram footer link; SEO assets (llms.txt, sitemap.xml, robots.txt, JSON-LD) intact; quote form 4 required + 2 optional fields; no invented testimonials; dynamic pricing; no dash lines before sub-headings; no decorative numberings; externify.in exactly once on the homepage (one case slot, lines ~651-692 of page.tsx); theiqleap.com iframe on the projects page; "How we think" section untouched.

## QA
- `npm run build` green: 19/19 static pages, lint + types clean.
- externify: 1 visible case slot on homepage, 0 mentions on all other pages.
- "Reviewed by a human": 0 occurrences in src/.
- Nav order verified in Header.tsx.

## Note for him
Worth one quick visual pass on his phone before pushing, especially the new hero and the redesigned Stakes band.
