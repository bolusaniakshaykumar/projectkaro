import type { Metadata } from "next";
import DemoShell from "@/components/DemoShell/DemoShell";
import DemoClient from "./DemoClient";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CityNest Properties | Demo Website by ProjectKaro",
  description:
    "A sample real estate agent website concept by ProjectKaro: featured Hyderabad listings, agent profile, testimonials and enquiry form.",
};

export default function RealEstateDemoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/demos/real-estate-agent",
            title: 'CityNest Properties | Demo Website by ProjectKaro',
            description: 'A sample real estate agent website concept by ProjectKaro: featured Hyderabad listings, agent profile, testimonials and enquiry form.',
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: 'Real Estate Demo', path: "/demos/real-estate-agent" },
          ]),
        ]}
      />
    <DemoShell businessName="CityNest Properties"
      industryPath="/websites-for-real-estate"
      industryLabel="real estate professionals">
      <DemoClient />
    </DemoShell>
    </>
  );
}
