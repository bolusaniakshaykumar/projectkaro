import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";
import styles from "./not-found.module.css";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist on ProjectKaro.",
  path: "/",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className={styles.page} aria-labelledby="not-found-heading">
      <div className={`container ${styles.inner}`}>
        <p className={styles.code}>Error 404</p>
        <h1 id="not-found-heading" className={styles.title}>
          This page went missing.
        </h1>
        <p className={styles.text}>
          The page you requested does not exist or was moved. The good news:
          everything we build is easier to find than this page.
        </p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-primary">
            Go to Home
          </Link>
          <Link href="/services" className="btn btn-secondary">
            View Services
          </Link>
          <Link href="/start-a-project" className="btn btn-secondary">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
