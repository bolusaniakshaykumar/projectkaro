import Link from "next/link";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist on ProjectKaro.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <section className="section" aria-labelledby="not-found-heading">
      <div className="container" style={{ textAlign: "center", maxWidth: "640px" }}>
        <p
          style={{
            fontSize: "0.6875rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: "1rem",
          }}
        >
          404
        </p>
        <h1 id="not-found-heading" style={{ marginBottom: "1rem" }}>
          Page not found
        </h1>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
          The page you requested does not exist. Explore our services or get a free quote to start your project.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn btn-primary">
            Go to Home
          </Link>
          <Link href="/projects" className="btn btn-secondary">
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
