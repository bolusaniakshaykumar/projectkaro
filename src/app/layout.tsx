import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingCTA from "@/components/FloatingCTA/FloatingCTA";
import "./globals.css";

const SITE_URL = "https://projectkaro.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ProjectKaro | Build & Complete Real-World Projects",
    template: "%s | ProjectKaro",
  },
  description:
    "ProjectKaro helps engineering students and beginners build and complete real-world projects. College mini projects, final-year projects, portfolio projects, and IoT projects with guided support.",
  keywords: [
    "project completion",
    "engineering projects",
    "final year project",
    "college projects",
    "student projects",
    "IoT projects",
    "portfolio projects",
  ],
  authors: [{ name: "ProjectKaro", url: SITE_URL }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "ProjectKaro",
    title: "ProjectKaro | Build & Complete Real-World Projects",
    description:
      "Helping students build and complete real-world projects with guided, academic-focused support.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Google Search Console Verification - Replace with your verification code */}
        <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&family=Orbitron:wght@900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
