import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Admin",
  description: "Internal admin tool.",
  path: "/emailonly",
  noIndex: true,
});

export default function EmailOnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
