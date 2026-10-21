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

const PATH = "/blogs/website-visits-no-enquiries";
const TITLE = "Your Website Gets Visits but No Enquiries? 7 Fixes That Work";
const DESCRIPTION =
  "Traffic is not your problem, conversion is. The seven website problems we find most often on sites that get visits but no calls: no HTTPS, slow pages, no WhatsApp button, unclear services, stale content, an unlinked Google profile and a broken contact path, and how to fix each one.";
const DATE_PUBLISHED = "2026-10-20";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "website not getting enquiries",
    "website traffic but no leads",
    "website conversion problems",
    "why is my website not generating leads",
    "business website fixes",
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
    question: "Why does my website get traffic but no enquiries?",
    answer:
      "Usually because visitors hit a trust or friction problem before they reach you: a Not Secure warning, slow mobile pages, no obvious call or WhatsApp button, unclear services or prices, stale content, or a contact form that fails silently. Any one of these can quietly consume most of your potential enquiries.",
  },
  {
    question: "How can I check if my enquiry form is working?",
    answer:
      "Submit a test enquiry yourself from a phone, exactly as a customer would, and confirm it arrives in your inbox or WhatsApp. Do this monthly. Forms break silently after updates, hosting changes and full inboxes, and owners often discover it months later.",
  },
  {
    question: "How fast should my website load on mobile?",
    answer:
      "Aim for the main content to appear within about two to three seconds on a typical mobile connection. Every extra second loses visitors, especially in India where most business website traffic is on phones and variable networks. Compress images, remove unused plugins and use decent hosting before anything else.",
  },
  {
    question: "Should I redesign my website or just fix these problems?",
    answer:
      "Fix first if the design is reasonably current and the problems are the ones listed here; they are cheap and quick. Consider a rebuild when the site also fails on mobile layout, cannot be updated, or needs features it cannot support. A good developer will tell you honestly which side of that line your site sits on.",
  },
  {
    question: "Does a WhatsApp button really increase enquiries?",
    answer:
      "For local businesses in India, generally yes. Many customers prefer a chat to a phone call or a form, especially outside working hours. A visible WhatsApp button with a pre-filled message removes the effort of saving your number and thinking of what to write, which is where most potential enquiries die.",
  },
];

export default function WebsiteVisitsNoEnquiriesPage() {
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
            This is the most frustrating website problem a business owner can
            have: people are visiting, the numbers in your analytics are not
            zero, and yet the phone stays quiet. No calls, no WhatsApp
            messages, no form enquiries. It feels like the website is broken,
            and usually it is, just not in the way you think.
          </p>
          <p>
            When we review underperforming business websites, the traffic is
            rarely the problem. Google and your Google Business Profile are
            doing their job and sending people to you. The visitors are then
            lost on the site itself, at one of seven predictable points. The
            good news: most of these fixes are quick and cheap, and none of
            them require more traffic.
          </p>

          <h2>Fix 1: Remove the &ldquo;Not Secure&rdquo; warning</h2>
          <p>
            If your website address starts with http instead of https,
            browsers label your pages &ldquo;Not Secure&rdquo; before a
            visitor reads a single word. For a clinic, a consultant or anyone
            asking for personal details, that warning quietly destroys trust.
            The fix is an SSL certificate, which most hosts provide free, and
            a proper redirect so every page loads securely. This is a
            one-time, low-cost fix, and there is no good reason for any
            business site to still be without it.
          </p>

          <h2>Fix 2: Make the site load fast on a phone</h2>
          <p>
            Most of your visitors are on mobile phones, many on average
            connections. If your homepage takes several seconds to show
            anything useful, a large share of those visitors leave before
            they see your services, and they do not come back. The usual
            causes are fixable: oversized photos uploaded straight from a
            camera, too many plugins or scripts, and the cheapest available
            hosting. Compress images, remove what you do not use, and move
            to decent hosting before you spend anything on advertising. Our
            guide to what to fix{" "}
            <Link href="/blogs/website-before-google-ads">
              before running Google Ads
            </Link>{" "}
            covers this in more depth, because paid traffic makes slow pages
            even more expensive.
          </p>

          <h2>Fix 3: Add a one-tap call and WhatsApp button</h2>
          <p>
            Ask yourself what a visitor has to do to contact you right now.
            If the answer involves finding a menu, opening a contact page and
            copying a number, most people will not finish the journey. Add a
            call button and a floating WhatsApp button that stay visible on
            every page, with the WhatsApp chat pre-filled with a simple
            message like &ldquo;Hi, I would like to enquire about your
            services.&rdquo; In India, WhatsApp is how customers prefer to
            start a conversation, especially after hours. Meet them there.
          </p>

          <h2>Fix 4: Say clearly what you offer, and what it costs</h2>
          <p>
            Many business websites are vague at exactly the moment a visitor
            is deciding. Services are described in generic lines, every
            treatment or package is squeezed onto one page, and prices are
            nowhere to be found, so the visitor leaves to check a competitor
            who answered their questions. Give each main service its own
            clear section or page: what it is, who it is for, and a price or
            at least a &ldquo;starting from&rdquo; figure. You do not need a
            full price list. You need to remove the fear that asking will be
            embarrassing or expensive.
          </p>

          <h2>Fix 5: Update content that quietly went stale</h2>
          <p>
            Festive offers from two years ago, timings that changed during
            the pandemic, staff who left, services you no longer offer, a
            blog whose last post is ancient: each one tells a visitor that
            this business may not be running properly anymore. Visitors
            cannot tell the difference between a stale website and a closed
            business. Walk through your own site once a quarter with fresh
            eyes, or ask someone who has never seen it to, and remove or
            update anything that no longer matches reality.
          </p>

          <h2>Fix 6: Point your Google Business Profile at your website</h2>
          <p>
            For local businesses, your Google Business Profile is often seen
            more than your website, in Maps and in &ldquo;near me&rdquo;
            searches. If that profile links to a social page, an old site or
            nothing at all, you are spending your best visibility on a page
            that cannot convert. Set the profile&rsquo;s website link to
            your own site, ideally the page most relevant to searchers, and
            keep your name, address and phone identical in both places. We
            explain the reasoning in our piece on{" "}
            <Link href="/blogs/google-business-profile-website-link">
              why your Google Business Profile should link to your own
              website
            </Link>
            .
          </p>

          <h2>Fix 7: Repair the contact path, then test it like a customer</h2>
          <p>
            The saddest failures we find are silent ones: an enquiry form
            that submits into an inbox nobody checks, a form broken by a
            plugin update, a phone number on the site that belongs to a
            former employee. Everything looks fine from the outside while
            enquiries vanish. Test the whole path yourself, from a phone,
            as a customer would: submit the form, tap the call button, open
            the WhatsApp chat, and confirm each one reaches you. Repeat the
            test monthly. It takes five minutes and it protects every other
            fix on this list.
          </p>

          <h2>Where to start: a 15-minute self-audit</h2>
          <p>Open your website on your phone and work through this list:</p>
          <ol>
            <li>Does the address bar show a padlock, with no security warning?</li>
            <li>Does the homepage show useful content within a few seconds?</li>
            <li>Can you call or WhatsApp the business in one tap from any page?</li>
            <li>Can a stranger tell what you offer, and roughly what it costs, in under a minute?</li>
            <li>Is everything on the site still true: offers, timings, team, services?</li>
            <li>Does your Google Business Profile link to this website?</li>
            <li>Does a test enquiry actually reach you?</li>
          </ol>
          <p>
            Every &ldquo;no&rdquo; on that list is an enquiry leak with a
            known fix.
          </p>

          <h2>When fixes are not enough</h2>
          <p>
            Sometimes the audit reveals a deeper problem: the site does not
            work properly on mobile at all, nobody knows how to update it,
            or it was built on a platform you no longer control. In that
            case, patching is false economy and a clean rebuild on a modern
            foundation is the honest recommendation. Our guide to{" "}
            <Link href="/blogs/website-cost-hyderabad-2026">
              website costs in Hyderabad
            </Link>{" "}
            explains what a rebuild should cost, and our piece on{" "}
            <Link href="/blogs/how-to-choose-website-company-hyderabad">
              choosing a website company
            </Link>{" "}
            lists the questions to ask before you pay anyone for it.
          </p>
          <p>
            If you would like a second pair of eyes,{" "}
            <Link href="/start-a-project">send us your website address</Link>{" "}
            and we will tell you honestly which of these problems your site
            has and what fixing them involves. No obligation, and if the
            site is fine, we will say that too.
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
            <h2 className={extras.ctaTitle}>Visits are not the problem. Let us find the leak.</h2>
            <p className={extras.ctaText}>
              Send us your website address and we will review it against
              these seven points and tell you exactly what is costing you
              enquiries.
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
              <Link href="/blogs/google-business-profile-website-link" className={extras.relatedLink}>
                Why your Google Business Profile should link to your own website
                <small>Your profile gets the search views, but your website gets the customer.</small>
              </Link>
            </li>
            <li className={extras.relatedItem}>
              <Link href="/blogs/website-before-google-ads" className={extras.relatedLink}>
                7 things your business website should have before running Google Ads
                <small>The essentials to fix before you spend a rupee on ads.</small>
              </Link>
            </li>
            <li className={extras.relatedItem}>
              <Link href="/blogs/how-to-choose-website-company-hyderabad" className={extras.relatedLink}>
                How to Choose a Website Company in Hyderabad
                <small>9 questions to ask before you pay, and the answers you should hear.</small>
              </Link>
            </li>
            <li className={extras.relatedItem}>
              <Link href="/services/website-development" className={extras.relatedLink}>
                Website Development
                <small>How ProjectKaro builds websites: process, technology, and what you get.</small>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
