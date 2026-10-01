# ProjectKaro Flagship Site, 2026-10-01

A **from-scratch narrative and layout rebuild** of projectkaro.com. This is not a
recolor of the revamp: the homepage and every inner page were restructured around
a new editorial story arc, with a new hero, new sections, Lottie motion, and
hand-drawn custom SVG craft. All 9 approved revamp changes and the full SEO pass
were carried over unchanged.

## (a) What was structurally rebuilt

**Homepage — new narrative arc.** The page now follows one story: the visitor's
problem, how ProjectKaro works, proof, and the close. Sections in order:
editorial hero (new headline, staggered reveal, Lottie `hero-build.json` visual,
"Get my detailed quote" + "Chat on WhatsApp" CTAs), stakes section (four honest
pain points: invisible online, visitors leaving, repeated questions, viva marks),
craft section (custom SVG iconography: designed like it matters, built to
production standard, delivered with proof), services ledger (all 10 services as
an indexed editorial ledger), process in four steps, stats, honest Selected Work
centerpiece, CTA, FAQ.

**Inner pages rebuilt.** `/projects` (proof-first gallery: real externify.in
case + honestly-labelled "more case studies on the way" placeholder block with
`gallery.json` Lottie, no staged mockups), `/about` (studio story, values,
stats, Registered MSME trust line), `/how-it-works` (four-chapter process story
with per-chapter Lottie: submit, quote, build, deliver), `/start-a-project`
(premium intake page with the slim quote form), `/websites-for-businesses`
(owner-voice conversion page), `/academic-projects` (student-voice conversion
page).

**Shared components polished.** CTA (confident editorial close on every page),
FAQ accordion (incl. "Is Project Karo the same as ProjectKaro?" for the
alternate spelling), Stats band, and StartProjectForm. Lottie + custom SVG
craft throughout; light editorial theme locked.

## (b) Inventory carried over unchanged

1. **Floating WhatsApp button, site-wide** — green circle, bottom-right after
   scroll, pre-filled greeting, single config constant in
   `src/lib/site-config.ts`. Number: **+91 7396991624** (his confirmed
   published number).
2. **Footer** — labelled Email / LinkedIn: ProjectKaro / Instagram: @projectkaro
   links, "Registered MSME (Udyam)" trust line (no registration number printed),
   "Hyderabad, India".
3. **Slim 4-field quote form** — 4 required (Full Name, Email, Phone with
   country code, Project Type) + 2 optional (Project Title, Project
   Description), "Get my detailed quote" submit. (QA 2026-10-01: removed an
   added third optional "Project Abstract" file upload; form is back to the
   locked 4+2.)
4. **Honest Selected Work** — externify.in linked live; two placeholder cards
   honestly marked, no fake names/metrics/testimonials.
5. **Landing pages** — `/websites-for-businesses` and `/academic-projects`.
6. **Homepage brand title** — "Web Development & Student Project Solutions |
   ProjectKaro". (QA 2026-10-01: the page metadata helper bypassed the layout
   title template and rendered without the brand suffix; fixed and verified.)
7. **Search Console recrawl** — still HIS 5-minute task after deploy
   (URL Inspection > Request Indexing for `/`, `/websites-for-businesses`,
   `/academic-projects`).
8. **SEO pass** — JSON-LD on every page, per-page metadata, `/sitemap.xml`,
   `/robots.txt` (AI crawlers allowed on `/llms.txt`), `public/llms.txt`,
   OG + Twitter cards, `og:image` route.

## (c) Your local check (5 minutes)

1. Unzip `projectkaro-site-flagship-2026-10-01.zip`.
2. `cd` into the folder, run `npm install` (a `package-lock.json` is included).
3. `npm run dev` and open http://localhost:3000 — or `npm run build`
   then `npm start` for the production build (verified green 2026-10-01).
4. Push/deploy exactly as you did the revamp zip.

**Screenshot drop-in:** real project screenshots go in `public/work/` —
`externify.png` (real project), `client-1.png` / `client-2.png` (the two
honest placeholders, renamed only when you have client permission). Export at
1200 × 800, rebuild, redeploy. Full instructions in `public/work/README.md`.

**Lottie assets:** 7 valid JSON animations in `public/lottie/`
(`hero-build`, `intake`, `hiw-submit`, `hiw-quote`, `hiw-build`,
`hiw-deliver`, `gallery`) — no external fetches, all local.

Build: Next.js 14, `npm run build` green 2026-10-01. Static pages except
`/api/*` (quote intake email) and dynamic OG-image route.
