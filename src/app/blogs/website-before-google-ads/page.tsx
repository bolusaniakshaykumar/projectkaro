import Link from "next/link";
import BlogArticle from "@/components/BlogArticle/BlogArticle";
import JsonLd from "@/components/JsonLd";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  webPageSchema,
} from "@/lib/seo";
import extras from "../post-extras.module.css";

const PATH = "/blogs/website-before-google-ads";
const TITLE = "7 Things Your Business Website Should Have Before Running Google Ads";
const DESCRIPTION =
  "Spending on Google Ads with a website that cannot convert is paying for clicks you will never get back. Here are the 7 things to fix on your site first, with Hyderabad business context.";
const DATE_PUBLISHED = "2026-10-04";

export const metadata = createPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  keywords: [
    "google ads landing page tips",
    "website before google ads",
    "increase google ads conversions",
    "business website checklist india",
    "google ads hyderabad business",
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

export default function WebsiteBeforeGoogleAdsPage() {
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
        ]}
      />
      <main>
        <BlogArticle title={TITLE} date="October 4, 2026" dateTime="2026-10-04">
          <p>
            Picture a clinic owner in Kukatpally who finally decides to try
            Google Ads. She sets a daily budget, picks keywords like
            &ldquo;dental clinic near me&rdquo;, and watches the clicks roll in.
            Two weeks later she has paid for hundreds of visitors and received
            almost no calls. The agency tells her to increase the budget. The
            real problem is somewhere else entirely: the website those clicks
            land on.
          </p>
          <p>
            Google charges you for the click, not the customer. Every paid
            visitor who lands on a slow, confusing, or untrustworthy site is
            money you paid Google for nothing. Ads amplify whatever your
            website already does. If your site converts visitors well, ads
            multiply that. If it does not, ads multiply the waste.
          </p>
          <p>
            Before you switch on your first campaign, make sure these seven
            things are in place. They cost far less than a month of wasted ad
            spend, and they keep paying off long after the campaign ends.
          </p>

          <h2>1. It loads fast on a phone, not just your office laptop</h2>
          <p>
            Most Google Ads clicks in India come from mobile phones, often on
            ordinary mobile data rather than fast broadband. A page that takes
            more than a few seconds to open will make the visitor tap the back
            button before they ever see your offer. You still paid for that
            click.
          </p>
          <p>
            The usual culprits are easy to fix: oversized images uploaded
            straight from a phone camera, auto-playing video banners, and
            cheap shared hosting that crawls during peak hours. Compress every
            image, skip the heavy sliders, and test your site on a real phone
            with mobile data switched on. If it feels slow to you, it will
            feel slower to a stranger who owes you nothing.
          </p>

          <h2>2. Your offer is obvious in the first screen</h2>
          <p>
            A visitor arriving from an ad gives you about five seconds. In
            that first screen, without scrolling, they should be able to
            answer three questions: what do you do, who is it for, and where
            are you.
          </p>
          <p>
            Compare &ldquo;Welcome to Smile Care, where your smile is our
            passion&rdquo; with &ldquo;Painless dental implants in Kukatpally.
            Single-visit procedure. Book a free consultation.&rdquo; The first
            is decoration. The second is a reason to stay. Write your headline
            like an answer to the exact search that brought the visitor, and
            put one clear action next to it.
          </p>

          <h2>3. Calling or WhatsApping you takes exactly one tap</h2>
          <p>
            Indian customers overwhelmingly prefer WhatsApp and phone calls
            over filling in long contact forms. Yet many business websites
            bury the phone number in a Contact page footer, or show it as
            plain text that cannot be tapped.
          </p>
          <p>
            Put a sticky call button and a WhatsApp chat button where they are
            visible on every screen, especially on mobile. Make the phone
            number a tap-to-call link. Every extra step between interest and
            contact, copying a number, switching apps, typing a message from
            scratch, loses a share of the people your ads paid to bring in.
          </p>

          <h2>4. A stranger can verify that you are trustworthy</h2>
          <p>
            An ad clicker does not know you. They found you thirty seconds
            ago. Before they share their phone number or visit your shop, they
            look for proof that you are real.
          </p>
          <p>
            The trust signals that matter most are simple: genuine Google
            reviews shown or linked on the site, real photographs of your
            shop, clinic, or team instead of stock images, your full address
            with an embedded map, and consistent business details. Your name,
            address, and phone number on the website should match your Google
            Business Profile exactly, because mismatches make both Google and
            visitors suspicious. If your business is registered, mentioning
            your GST or Udyam registration adds quiet credibility.
          </p>

          <h2>5. It is actually built for mobile, not shrunk from desktop</h2>
          <p>
            Many small business sites are desktop designs squeezed onto a
            phone screen: text you have to pinch and zoom, buttons too small
            to tap, and enquiry forms asking for ten fields. Since your ad
            traffic is mostly mobile, a desktop-first site is a leak you pay
            for on every click.
          </p>
          <p>
            A mobile-ready site has tap targets big enough for thumbs, text
            that reads without zooming, an address that opens Google Maps on
            tap, and short forms that ask only for what you need to call the
            person back. Name, phone number, and one line about their
            requirement is enough to start a conversation.
          </p>

          <h2>6. You can tell which click became a customer</h2>
          <p>
            Running ads without conversion tracking is like running a shop
            with the lights off. You need to know which keyword, which ad,
            and which page produced the call or WhatsApp message, so you can
            spend more on what works and stop paying for what does not.
          </p>
          <p>
            At minimum, set up Google Analytics and Google Ads conversion
            tracking on the actions that matter: call button taps, WhatsApp
            clicks, and form submissions. Use separate landing pages or tagged
            links for different campaigns so the numbers stay clean. And keep
            one low-tech backup that never fails: ask every new customer how
            they found you, and write it down.
          </p>

          <h2>7. Each ad gets its own landing page, not your homepage</h2>
          <p>
            Your homepage tries to speak to everyone: existing customers, job
            seekers, casual browsers. A paid visitor is none of those. They
            searched for one specific thing, and the page should deliver
            exactly that.
          </p>
          <p>
            If your ad promises bridal makeup packages, the landing page
            should open with bridal packages, prices or a price range, photos
            of your work, reviews from brides, and one booking action. No
            generic &ldquo;welcome to our salon&rdquo; intro, no menu of
            twenty services competing for attention. One page, one offer, one
            action. This principle, called message match, is the single
            biggest lever on conversion after page speed.
          </p>

          <h2>The bottom line</h2>
          <p>
            Google Ads is a magnifier, not a fixer. A website that loads
            fast, states its offer clearly, makes contact effortless, proves
            it is trustworthy, works beautifully on phones, tracks every
            enquiry, and greets each ad with a dedicated page will turn the
            same ad budget into several times more customers.
          </p>
          <p>
            Work through this checklist before your first campaign, and you
            will spend your budget on growth instead of tuition fees paid to
            Google. If your current site fails more than two or three of
            these checks, it is usually cheaper to rebuild it properly than to
            keep feeding clicks into it.
          </p>
          <p>
            That is exactly what we build at ProjectKaro: conversion-ready
            business websites with one-tap calling, WhatsApp integration,
            review sections, and landing pages that match your ads. Starter
            websites start from &#8377;15,000, and every project gets a
            detailed quote within 24 hours.{" "}
            <Link href="/start-a-project">Tell us about your business</Link>{" "}
            and we will tell you honestly whether your site is ad-ready.
          </p>
        </BlogArticle>

        <section className={extras.ctaBand} aria-label="Get started">
          <div className={extras.ctaCard}>
            <h2 className={extras.ctaTitle}>Is your website ready for paid traffic?</h2>
            <p className={extras.ctaText}>
              Get a conversion-ready business website built for mobile, with
              one-tap call and WhatsApp buttons, trust sections, and landing
              pages that match your ads. Quote within 24 hours.
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
              <Link href="/services/website-development" className={extras.relatedLink}>
                Website Development
                <small>How ProjectKaro builds websites: process, technology, and what you get.</small>
              </Link>
            </li>
            <li className={extras.relatedItem}>
              <Link href="/pricing" className={extras.relatedLink}>
                Pricing
                <small>Transparent website pricing bands, quote within 24 hours.</small>
              </Link>
            </li>
            <li className={extras.relatedItem}>
              <Link href="/blogs/dental-clinic-website-checklist" className={extras.relatedLink}>
                Dental Clinic Website Checklist
                <small>Everything a clinic site needs to turn searches into appointments.</small>
              </Link>
            </li>
            <li className={extras.relatedItem}>
              <Link href="/websites-for-small-businesses" className={extras.relatedLink}>
                Websites for Small Businesses
                <small>How a professional website brings enquiries to local businesses.</small>
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </>
  );
}
