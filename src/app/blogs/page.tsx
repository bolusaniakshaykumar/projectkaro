import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import {
  absoluteUrl,
  breadcrumbSchema,
  createPageMetadata,
  webPageSchema,
} from "@/lib/seo";
import styles from "./page.module.css";

const POSTS = [
  {
    slug: "website-cost-hyderabad-2026",
    title: "How much does a website cost in Hyderabad in 2026?",
    date: "4 October 2026",
    dateTime: "2026-10-04",
    excerpt:
      "What actually moves the price (pages, design, features, content, integrations), the realistic starting bands from ₹15,000, and how to get an exact quote.",
  },
  {
    slug: "website-vs-instagram-hyderabad",
    title: "Website vs Instagram for a Hyderabad business",
    date: "4 October 2026",
    dateTime: "2026-10-04",
    excerpt:
      "Instagram creates demand, a website captures it. A practical comparison of discovery, ownership, enquiries, and trust, with a clear verdict for local businesses.",
  },
  {
    slug: "dental-clinic-website-checklist",
    title: "What should a dental clinic website contain?",
    date: "4 October 2026",
    dateTime: "2026-10-04",
    excerpt:
      "Treatment pages, doctor profiles, booking and WhatsApp, reviews, before-and-after galleries, maps, and local SEO: the full checklist for a clinic site that books appointments.",
  },
  {
    slug: "website-before-google-ads",
    title: "7 things your business website should have before running Google Ads",
    date: "4 October 2026",
    dateTime: "2026-10-04",
    excerpt:
      "Paid clicks are wasted on a site that cannot convert. The seven essentials, from clear offers to fast mobile pages, to fix before you spend a rupee on ads.",
  },
  {
    slug: "google-business-profile-website-link",
    title: "Why your Google Business Profile should link to your own website",
    date: "4 October 2026",
    dateTime: "2026-10-04",
    excerpt:
      "Your Business Profile gets the search views, but your website gets the customer. How linking them turns local searches into calls, bookings, and trust.",
  },
  {
    slug: "ecommerce-website-cost-india",
    title: "How much does an e-commerce website cost?",
    date: "4 October 2026",
    dateTime: "2026-10-04",
    excerpt:
      "Catalogue size, payments, shipping, and custom features: what drives the cost of selling online in India, and the starting bands to plan your budget.",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export const metadata = createPageMetadata({
  title: "Blogs",
  description:
    "Practical guides from ProjectKaro on websites, pricing, and getting customers online: written for business owners in Hyderabad and across India.",
  path: "/blogs",
  keywords: ["ProjectKaro blog", "website guides", "small business website tips"],
});

export default function BlogsPage() {
  const [featured, ...rest] = POSTS;

  return (
    <main className={styles.page}>
      <JsonLd
        data={[
          webPageSchema({
            path: "/blogs",
            title: "Blogs",
            description:
              "Practical guides from ProjectKaro on websites, pricing, and getting customers online.",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blogs", path: "/blogs" },
          ]),
        ]}
      />
      <div className={styles.container}>
        <p className={styles.eyebrow}>ProjectKaro Blog</p>
        <h1 className={styles.title}>Practical guides for getting your business online.</h1>
        <p className={styles.subtitle}>
          No fluff, no jargon. What websites actually cost, what they should
          contain, and how they bring in customers, written for business owners
          in Hyderabad and across India.
        </p>

        {/* Featured: the one to read first */}
        <article className={styles.featured} aria-labelledby="featured-title">
          <div className={styles.featuredArt} aria-hidden="true">
            <span className={styles.featuredNum}>01</span>
          </div>
          <div className={styles.featuredBody}>
            <p className={styles.featuredKicker}>
              <span className={styles.featuredKickerDot} aria-hidden="true" />
              Start here
            </p>
            <h2 id="featured-title" className={styles.featuredTitle}>
              <Link href={`/blogs/${featured.slug}`} className={styles.featuredTitleLink}>
                {featured.title}
              </Link>
            </h2>
            <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
            <p className={styles.featuredMeta}>
              <time dateTime={featured.dateTime}>{featured.date}</time>
              <span aria-hidden="true"> · </span>
              <span>ProjectKaro</span>
            </p>
            <Link href={`/blogs/${featured.slug}`} className={styles.featuredCta}>
              Read the guide <ArrowIcon />
            </Link>
          </div>
        </article>

        {/* Index: the rest, as a numbered ledger */}
        <ol className={styles.index} aria-label="All articles">
          {rest.map((post, i) => (
            <li key={post.slug} className={styles.indexRow}>
              <Link href={`/blogs/${post.slug}`} className={styles.indexLink}>
                <span className={styles.indexNum} aria-hidden="true">
                  {String(i + 2).padStart(2, "0")}
                </span>
                <span className={styles.indexBody}>
                  <span className={styles.indexMeta}>
                    <time dateTime={post.dateTime}>{post.date}</time>
                  </span>
                  <span className={styles.indexTitle}>{post.title}</span>
                  <span className={styles.indexExcerpt}>{post.excerpt}</span>
                </span>
                <span className={styles.indexArrow} aria-hidden="true">
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <p className={styles.footnote}>
          New to ProjectKaro?{" "}
          <Link href={absoluteUrl("/start-a-project")}>Start a project</Link>{" "}
          or browse <Link href="/pricing">pricing bands</Link>.
        </p>
      </div>
    </main>
  );
}
