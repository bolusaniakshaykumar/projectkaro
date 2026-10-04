import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FloatingCTA from "@/components/FloatingCTA/FloatingCTA";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SEO_KEYWORDS, SITE_CONFIG } from "@/lib/constants";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "ProjectKaro | Websites, AI Solutions & Student Projects",
    template: "%s | ProjectKaro",
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  generator: "Next.js",
  keywords: [...SEO_KEYWORDS],
  referrer: "origin-when-cross-origin",
  creator: "ProjectKaro Team",
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "ProjectKaro | Websites, AI Solutions & B.Tech Major Projects in Hyderabad",
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} (${SITE_CONFIG.alternateName}), Websites, AI Solutions & B.Tech Major Projects in Hyderabad`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectKaro | Websites, AI Solutions & B.Tech Major Projects in Hyderabad",
    description: SITE_CONFIG.description,
    creator: SITE_CONFIG.twitterHandle,
    images: [SITE_CONFIG.ogImage],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-180.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon-180.png",
    },
  },
  appleWebApp: {
    statusBarStyle: "default",
    title: SITE_CONFIG.name,
  },
  other: {
    "ai-content-declaration": "human-authored",
  },
};

export const viewport = {
  themeColor: "#ffffff",
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
    <html lang="en-IN" className={`${sans.variable} ${display.variable}`}>
      <head>
        <link rel="llms-txt" href="/llms.txt" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
