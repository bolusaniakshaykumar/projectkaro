import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingCTA from "@/components/FloatingCTA/FloatingCTA";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  applicationName: "ProjectKaro",
  authors: [{ name: "ProjectKaro", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "project completion",
    "engineering projects",
    "final year project",
    "college projects",
    "student projects",
    "IoT projects",
    "portfolio projects",
    "computer science projects",
    "electronics projects",
    "project mentorship",
  ],
  referrer: "origin-when-cross-origin",
  creator: "ProjectKaro Team",
  publisher: "ProjectKaro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "ProjectKaro",
    title: "ProjectKaro | Build & Complete Real-World Projects",
    description:
      "Helping students build and complete real-world projects with guided, academic-focused support.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ProjectKaro - From Abstract to Submission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectKaro | Build & Complete Engineering Projects",
    description:
      "Get expert guidance for your final year or mini projects. We help you build, document, and submit with confidence.",
    creator: "@projectkaro",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "YOUR_VERIFICATION_CODE_HERE",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/logo.png",
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ProjectKaro",
  },
};

export const viewport = {
  themeColor: "#0b0b12",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
        <SpeedInsights />
      </body>
    </html>
  );
}
