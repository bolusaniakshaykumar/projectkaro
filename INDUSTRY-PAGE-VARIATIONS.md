# Industry Page Section-Variation Plan

Locked baseline: artifact `industry-page-template-dental-clinics` (v3, 2026-10-04) —
split hero with browser mockup + floating cards, treatments ticker, patient
journey timeline, 3-card solution bento, site tree, features + pricing card,
process stepper, centered FAQ, dark CTA band.

Rule (Akshay, 2026-10-04): the 10 industry pages must NOT be identical clones.
Each page keeps the same skeleton and conversion order
(Attention → Information → Trust → Action) but varies 1–2 sections to fit its
audience's behavior. Same brand tokens everywhere; distinct visual language
per industry ("if I remove the logo, can I still tell which industry?").

## Per-page variations

1. **Dental clinics** — the locked baseline. No changes.
2. **Doctors** — hero: trust-forward (credential/verified-profile floating
   card instead of WhatsApp card); solutions: keep bento but swap icon set to
   medical; ticker: specialities.
3. **Restaurants** — hero: device mockup showing a menu page; ticker: signature
   dishes marquee; journey timeline → "diner journey" (Discover → Crave →
   Reserve). Floating card: table reservation.
4. **Salons** — add a BEFORE/AFTER slider section (unique to this page);
   editorial typography treatment; ticker: services (hair, skin, bridal).
5. **Real estate** — hero: listings mockup (property cards carousel);
   add a localities ticker; structure section → "property page anatomy".
6. **Coaching centres** — hero: course/batch cards mockup; solutions: stepper
   variant (enquire → demo class → enrol); add courses strip.
7. **Consultants** — hero: editorial/authority (large serif, abstract visual,
   no mockup); problems: quote-style rows; restrained motion.
8. **CAs** — hero: compliance/trust (checklist card mockup: filings, GST);
   features: checklist-forward grid; ticker: services (ITR, GST, audit).
9. **Small businesses** — simplest page: centered compact hero, pricing card
   moved up right after hero, fewer sections (merge structure into features).
10. **Startups** — hero: product/dashboard mockup; solutions: feature bento;
    add "MVP scope" strip (what ships in v1). Floating card: "Book a scoping call".

## Build notes
- One shared `IndustryPage` component with per-page `variant` prop switching
  the varied sections; content files per industry stay separate.
- No invented stats, testimonials, or real names on any page.
- Content optimization teaching (Akshay, pending) applies to all 10 before build.
