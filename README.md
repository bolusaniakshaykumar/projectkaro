# ProjectKaro Website

Professional, academic-oriented, SEO-ready website for **ProjectKaro** — helping students build and complete real-world projects.

**Domain:** [https://projectkaro.com](https://projectkaro.com)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Manual CSS (CSS Modules + global CSS) — no Tailwind
- **Email:** Zoho SMTP via Nodemailer

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm

### Install dependencies

```bash
npm install
```

### Environment variables

Create a `.env.local` file in the project root with:

```env
# Zoho SMTP — used for sending project submission emails
# Get these from Zoho Mail / Zoho SMTP settings (use App Password if 2FA is enabled)

SMTP_FROM_EMAIL=your-zoho-email@domain.com
SMTP_PASSWORD=your-zoho-app-password

# Recipients for project submissions (comma-separated)
SUBMISSION_EMAIL_RECIPIENTS=contact@projectkaro.com,akshay@projectkaro.com
```

- **SMTP_FROM_EMAIL:** The Zoho email address used to send emails (e.g. `noreply@projectkaro.com`).
- **SMTP_PASSWORD:** Zoho account password or, if 2FA is enabled, an [App Password](https://www.zoho.com/mail/help/adminconsole/two-factor-authentication.html#alink5).
- **SUBMISSION_EMAIL_RECIPIENTS:** Comma-separated list of emails that receive form submissions (defaults to `contact@projectkaro.com` and `akshay@projectkaro.com` if omitted).

### Run development server

```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Clear build cache (.next and node_modules/.cache)
- `npm run fresh` - Clean cache and start fresh dev server
- `npm run type-check` - Run TypeScript type checking

### Development Workflow

If you encounter build issues or the design breaks:

1. **Clear cache:** `npm run clean`
2. **Fresh start:** `npm run fresh`
3. **Type check:** `npm run type-check` (before committing)

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Global styles
│   └── ...
├── components/           # Reusable components
│   ├── index.ts         # Component exports
│   ├── Header/
│   ├── Footer/
│   ├── CTA/
│   ├── FAQ/
│   ├── Stats/
│   └── StartProjectForm/
└── lib/                 # Shared utilities
    ├── utils.ts         # Helper functions
    ├── constants.ts     # App constants
    └── types.ts         # TypeScript types
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

## Project structure

- `src/app/` — App Router pages and layouts
- `src/app/api/` — API routes (e.g. form submission)
- `src/components/` — Reusable UI (Header, Footer, CTA, StartProjectForm)
- `src/app/globals.css` — Global styles and CSS variables
- Page-specific styles use CSS Modules (`.module.css`)

## Pages

- **Home** — Hero, Who It’s For, What We Offer, Why ProjectKaro, CTA
- **Projects** — Project categories; note: pricing shared after abstract review
- **How It Works** — 4-step process
- **About** — Mission, approach, student focus
- **Start a Project** — Submission form (name, email, phone, title, description, abstract file)

## Form submission

- **Start a Project** form posts to `/api/submit-project`.
- Server validates all fields and file (PDF/DOC/DOCX, max 2 MB).
- On success, an email is sent via Zoho SMTP to the configured recipients with form data and the attached abstract.
- User sees a success message; errors are shown inline and via API response.

## SEO

- Page titles and meta descriptions set per route.
- Semantic HTML (`header`, `main`, `section`, `footer`).
- Sitemap at `/sitemap.xml`.
- `robots.txt` at `/robots.txt` (allows `/`, disallows `/api/`).

## License

Private — ProjectKaro.
# projectkaro
