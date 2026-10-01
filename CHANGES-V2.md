# CHANGES-V2 — ProjectKaro flagship website, revision pass (2026-10-01)

A full design revision of the flagship site. Before editing, we studied
established website design rules and principles and reviewed every change
against them: visual hierarchy (one dominant element per viewport, clean type
scale), spacing and rhythm (balanced density, no hollow or cramped sections),
typography scale (Fraunces display + Inter body), color theory (single accent
#1e56e8, disciplined contrast, purposeful accent use), alignment and grids
(1200px container, even card grids), CTA placement (a next step at every scroll
depth), hover states that always preserve text contrast, inline pill badges,
mobile responsiveness (single column, 44px+ targets, no 360px overflow), and
accessibility basics (semantic HTML, aria, focus-visible, prefers-reduced-motion).

## Homepage
- Hero: new custom "delivery desk" composition (browser mockup with annotated
  callouts, tilted 24-hour quote card, floating milestone timeline and delivery
  checklist cards). Pure CSS/SVG, no Lottie. Hero eyebrow line
  ("ProjectKaro, Web Development Studio / Hyderabad, India") deleted entirely.
- The "---" dash before sub-headings is gone everywhere; "01, The stakes"
  becomes "The stakes", "02, How we think" becomes "How we think",
  "03, Services" becomes "Services", "04, Selected work" becomes
  "Selected work", "05, Process" becomes "Process". Decorative 01-10 service
  numbers and 01-04 process numbers removed (process steps now use icon markers).
- "How we think" section untouched, as instructed.
- Services: the plain ledger is now 10 attention-grabbing cards, each with a
  unique geometric SVG gradient art header, audience pill, name, one-line
  outcome, and link.
- Work: externify.in kept to exactly ONE case-study slot on the homepage and
  nowhere else on the site (it sends X-Frame-Options: DENY, so the slot uses a
  styled browser-chrome preview card linking out, no fake screenshot).
  theiqleap.com added as a second example with a REAL live iframe embed
  (framing verified allowed), plus a fallback link. Remaining slots keep the
  honest "Reserved" placeholders.
- Sections densified: richer supporting copy, new CTAs, no sparse gaps.
- Zero Lottie on the homepage; all motion is CSS-only and reduced-motion safe.

## Header
- Menu reordered: Home, Services (/projects), Websites for Businesses, Academic
  Projects, How It Works, About, Get a Quote (kept as the CTA-styled item).

## How It Works
- Chapter numberings ("01 / 04" etc.) removed. All Lottie removed; each chapter
  visual is now a refined static "artifact card" showing what the client
  receives at that step (brief with stamp, proposal, milestone tracker,
  handover checklist). No empty blue boxes remain. "HOW IT WORKS" pill now wraps
  only the text.

## Projects
- externify.in removed completely from this page. Featured case study is now
  theiqleap.com in a browser-chrome frame with the real live iframe and an
  "Open the live site" fallback; factual copy only, honest chips.
- "More case studies": the Lottie is replaced with honest "Reserved"
  placeholder cards ("Screenshots coming soon").
- Services: redesigned as 10 image cards with unique geometric SVG motifs, one-line
  outcomes, and quote links. Pricing note and JSON-LD intact.
- "SELECTED WORK" pill shrink-wrapped to text width. "Start your project" hover
  now keeps white text on darker blue; all button hovers contrast-audited.

## Start a Project
- The two intake columns now have equal height; the Lottie is replaced with a
  static paper-plane SVG. The quote form is unchanged (4 required + 2 optional).

## Websites for Businesses
- externify "proof band" removed; replaced with a "delivery standard" band
  (source code, documentation, handover).
- "The problem" redesigned as icon cards, each with a business-consequence line
  ("The cost:") and a CTA. "What you get" redesigned as outcome cards.
- The FAQ column and quote section now carry supporting copy, WhatsApp contact
  cards, and reassurance points, so no area looks hollow.

## FAQ + CTA components
- FAQ: left column is now a full sidebar (sticky on desktop) with heading,
  supporting copy, a WhatsApp contact card, and reassurance bullets; the
  accordion (with all aria attributes) is unchanged.
- CTA: decorative dash divider above the eyebrow removed; hover contrast
  verified; focus states added; props API unchanged.

## Verified constraints
- No em dashes in copy. Light theme only. WhatsApp +91 7396991624 and the
  Instagram footer link intact. No invented testimonials, reviews, or stats.
  Dynamic per-project pricing language. All SEO (metadata, Open Graph,
  JSON-LD, sitemap, robots, llms.txt) intact. Mobile responsive. TypeScript
  build green; all 19 static pages return HTTP 200.

## Externify rule (absolute)
externify.in appears exactly once: one case-study slot on the homepage.
It appears on no other page.
