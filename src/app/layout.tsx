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
    default: "ProjectKaro | Your Engineering Project, Sorted.",
    template: "%s | ProjectKaro",
  },
  description:
    "Don't panic about your final year project. We build custom code, hardware, and reports for you. Fast, reliable, and viva-ready.",
  applicationName: "ProjectKaro",
  authors: [{ name: "ProjectKaro", url: SITE_URL }],
  generator: "Next.js",
  keywords: [
    "custom project development",
    "buy engineering projects",
    "final year project makers",
    "pay for project completion",
    "student project service",
    "IoT project builders",
    "ready made projects",
    "computer science project help",
    "electronics project sellers",
    "project documentation service",
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
    title: "ProjectKaro | Custom Engineering Projects Built for You",
    description:
      "Submit your abstract and get a fully built project with documentation. Expert project development for engineering students.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ProjectKaro - Custom Projects Built & Delivered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectKaro | We Build Your Engineering Project",
    description:
      "Struggling with your project? We build custom projects from your abstract with full documentation and viva support.",
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
