import Link from "next/link";
import BlogArticle from "@/components/BlogArticle/BlogArticle";
import JsonLd from "@/components/JsonLd";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  faqPageSchema,
  webPageSchema,
} from "@/lib/seo";
import type { FaqItem } from "@/lib/faq-data";
import extras from "../post-extras.module.css";

const PATH = "/blogs/how-to-choose-website-company-hyderabad";
const TITLE = "How to Choose a Website Company in Hyderabad: 9 Questions to Ask Before You Pay";
const DESCRIPTION =
  "Hyderabad has freelancers, studios and big agencies quoting everything from a few thousand rupees to several lakhs for a website. These 9 questions separate the professionals from the gambles, with the answers you should expect and the red flags to walk away from.";
const DATE_PUBLISHED = "2026-10-20";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "how to choose website company hyderabad",
    "website development company hyderabad",
    "web design company hyderabad",
    "questions to ask web developer",
    "best website company hyderabad",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  author: { "@type": "Organization", name: "ProjectKaro" },
  publisher: {
    "@type": "Organization",
    name: "ProjectKaro",
    url: absoluteUrl("/"),
    logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png") },
  },
  datePublished: DATE_PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(PATH) },
};

const FAQS: FaqItem[] = [
  {
    question: "How much should a business website cost in Hyderabad?",
    answer:
      "For a professional small business website, realistic starting bands in Hyderabad in 2026 run from about ₹15,000 for a starter site to ₹25,000 to ₹40,000 for more pages and features, with e-commerce from around ₹30,000. Quotes far below these bands usually cut corners on design, mobile testing, security or after-launch support.",
  },
  {
    question: "Should I hire a freelancer or a company for my website?",
    answer:
      "A good freelancer can be cheaper and perfectly capable for a simple site, but everything depends on one person. A studio or company costs more and gives you a team, a process and continuity if someone is unavailable. Choose based on how important the website is to your revenue and how much support you will need after launch.",
  },
  {
    question: "Who should own my domain and hosting?",
    answer:
      "You should, always. The domain, hosting account and website files should be registered in your name with your access. A developer who insists on owning your domain is holding your business hostage, and moving away later becomes painful and expensive.",
  },
  {
    question: "How long does it take to build a business website?",
    answer:
      "A standard business website typically takes one to four weeks once content is ready. Stores and custom features take longer. Most delays come from content and feedback, so a realistic company will tell you what they need from you and by when, before quoting a date.",
  },
  {
    question: "What should be included in a website quote?",
    answer:
      "A proper quote names the pages, the design approach, features and integrations, who provides content, the timeline, what happens after launch, and the total price with any recurring costs listed separately. If a quote is a single number with no scope, you do not know what you are buying.",
  },
];

export default function HowToChooseWebsiteCompanyHyderabadPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ path: PATH, title: TITLE, description: DESCRIPTION }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blogs" },
            { name: TITLE, path: PATH },
          ]),
          articleSchema,
          faqPageSchema(FAQS),
        ]}
      />
      <main>
        <BlogArticle title={TITLE} date="October 20, 2026" dateTime="2026-10-20">
          <p>
            Hyderabad is full of people who will build you a website:
            freelancers working from home, small studios like ours, and
            agencies with offices in Madhapur and Hitech City quoting
            several lakhs. The quotes for what sounds like the same website
            can differ by ten times, and the cheapest option regularly turns
            out to be the most expensive mistake.
          </p>
          <p>
            You cannot judge a developer the way you judge a shop, by
            looking at the goods. But you can ask questions that
            professionals answer easily and gamblers cannot. Here are the
            nine we would ask if we were sitting on your side of the table,
            with the answers you should expect, and the answers that should
            end the conversation.
          </p>

          <h2>1. Can I see live websites you have actually built?</h2>
          <p>
            Ask for links, not screenshots or mockups, and open them on your
            phone. Do they load quickly? Do they look like real businesses
            that are still operating? A company that has delivered real work
            will share live examples without hesitation. Vague answers,
            portfolio images with no links, or examples that are all
            obviously the same template are warning signs.
          </p>

          <h2>2. Who owns the domain, hosting and website files?</h2>
          <p>
            The correct answer is short: you do. Your domain should be
            registered in your name, in an account you control. The same
            goes for hosting and the website itself. This question matters
            because some developers register everything under themselves,
            and clients discover it years later when they want to move,
            redesign or simply change a phone number. Get this agreed in
            writing before any payment.
          </p>

          <h2>3. What exactly is included in this quote?</h2>
          <p>
            A professional quote is a document, not a number on WhatsApp. It
            lists the pages, the design approach, the features, who writes
            the content, how many revision rounds are included, and what is
            explicitly not included. It also separates the one-time build
            cost from recurring costs like domain, hosting and maintenance.
            If two quotes differ wildly, this document is how you find out
            why. Our guide to{" "}
            <Link href="/blogs/website-cost-hyderabad-2026">
              website costs in Hyderabad
            </Link>{" "}
            explains the bands those numbers should fall into.
          </p>

          <h2>4. How long will it take, and what do you need from me?</h2>
          <p>
            A realistic timeline for a business website is one to four
            weeks, and an honest company will tell you the schedule depends
            partly on you: your text, photos, logo and feedback. Be
            suspicious of a finished website promised in two days, and of a
            simple site that supposedly needs three months. Both usually
            mean the person is guessing.
          </p>

          <h2>5. Will it work properly on mobile and load fast?</h2>
          <p>
            Most of your customers will visit on a phone. Ask directly: will
            you test the site on real mobile devices, and what load time do
            you aim for? The answer should be specific and unembarrassed.
            A site that is beautiful on the developer&rsquo;s laptop and
            broken on your customer&rsquo;s phone is not a finished site.
          </p>

          <h2>6. What SEO basics are included?</h2>
          <p>
            You do not need an SEO agency on day one, but the foundations
            should be built in: proper page titles and descriptions, a
            Google Business Profile connection, a sitemap submitted to
            Google, fast pages, and your locality reflected naturally in
            the content. If the answer is &ldquo;SEO is extra and costs
            per month&rdquo; before the site even exists, clarify exactly
            what the build itself includes.
          </p>

          <h2>7. What happens after launch?</h2>
          <p>
            Websites need updates, backups and small changes. Ask who
            handles that, what it costs, and how quickly they respond when
            something breaks. Ask also whether you can update text and
            photos yourself, and whether you get any handover or training.
            The relationship after launch is where cheap projects usually
            fall apart, so this answer matters as much as the price.
          </p>

          <h2>8. How are revisions and extra work handled?</h2>
          <p>
            Every project involves changes. A professional quote states how
            many revision rounds are included and how work beyond the scope
            is priced, before it happens. The phrase to be careful with is
            unlimited revisions at a bargain price: it usually means the
            scope was never defined, and the bill or the disappointment
            arrives later.
          </p>

          <h2>9. What are the payment terms?</h2>
          <p>
            A common, fair structure is an advance to start and the balance
            on delivery, against a written quote. Whatever the structure,
            it should be written down, tied to deliverables, and never
            require full payment upfront for a first project with a new
            company. Ask what happens if the project stalls on either side.
            Professionals have answers because they have thought about it.
          </p>

          <h2>Red flags that should end the conversation</h2>
          <ul>
            <li>A fixed price quoted before asking a single question about your business</li>
            <li>Domain or hosting registered in the developer&rsquo;s name, not yours</li>
            <li>No written quote, scope or timeline, just verbal promises</li>
            <li>Portfolio examples that cannot be opened as live websites</li>
            <li>Pressure to pay in full today for a discount that expires tonight</li>
            <li>Guaranteed first position on Google: nobody can honestly promise that</li>
          </ul>
          <p>
            Any one of these is enough to pause. Two or more, and you are
            not choosing a website company any more, you are choosing a
            future problem.
          </p>

          <h2>How ProjectKaro answers these questions</h2>
          <p>
            Fair is fair, so here are our answers, briefly. ProjectKaro is a
            Hyderabad studio founded in January 2024, with a team of 23
            across development, IoT, interns and campus ambassadors. We have
            delivered 100+ projects across academic, research and business
            work, and mentored 300+ engineering students along the way. Our
            founder built and maintained 100+ websites at Digital Connect
            before and alongside ProjectKaro, which is where our process
            comes from.
          </p>
          <p>
            Practically: your domain and website are yours, registered in
            your name. Every quote is a detailed written document shared
            within 24 hours, with scope, timeline and recurring costs
            separated. Business websites start from &#8377;15,000. We test
            on real devices, build in the SEO foundations, and stay
            reachable after launch. If you are comparing platforms before
            you compare companies, our{" "}
            <Link href="/blogs/wordpress-vs-custom-website">
              WordPress vs custom-built comparison
            </Link>{" "}
            and our{" "}
            <Link href="/website-development-hyderabad">
              website development in Hyderabad
            </Link>{" "}
            page will help.
          </p>
          <p>
            Use these nine questions on us and on anyone else you are
            considering. Then{" "}
            <Link href="/start-a-project">compare the answers in writing</Link>,
            not the promises. That comparison, more than any portfolio, is
            how you choose well.
          </p>

          <h2>Frequently asked questions</h2>
          {FAQS.map((item) => (
            <div key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </BlogArticle>

        <section className={extras.ctaBand} aria-label="Get started">
          <div className={extras.ctaCard}>
            <h2 className={extras.ctaTitle}>Put us through the same 9 questions</h2>
            <p className={extras.ctaText}>
              Tell us about your project and get a detailed written quote
              within 24 hours: scope, timeline, recurring costs and no hidden
              charges.
            </p>
            <div className={extras.ctaButtons}>
              <Link href="/start-a-project" className={extras.btnPrimary}>
                Start a Project
              </Link>
              <Link href="/pricing" className={extras.btnSecondary}>
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        <nav className={extras.related} aria-label="Related articles">
          <h2 className={extras.relatedHeading}>Keep reading</h2>
          <ul className={extras.relatedList}>
            <li className={extras.relatedItem}>
              <Link href="/blogs/website-cost-hyderabad-2026" className={extras.relatedLink}>
                Website Cost in Hyderabad 2026
                <small>What business websites cost this year, and what drives the price.</small>
              </Link>
            </li>
            <li className={extras.relatedItem}>
              <Link href="/blogs/wordpress-website-cost-india" className={extras.relatedLink}>
                WordPress Website Cost in India (2026)
                <small>Real prices for DIY, freelancer and studio builds, plus the yearly costs nobody mentions.</small>
              </Link>
            </li>
            <li className={extras.relatedItem}>
              <Link href="/blogs/website-visits-no-enquiries" className={extras.relatedLink}>
                Your Website Gets Visits but No Enquiries?
                <small>The 7 fixes that turn existing traffic into calls and WhatsApp messages.</small>
              </Link>
            </li>
            <li className={extras.relatedItem}>
              <Link href="/website-development-hyderabad" className={extras.relatedLink}>
                Website Development in Hyderabad
                <small>How ProjectKaro builds websites for Hyderabad businesses.</small>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
