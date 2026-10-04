import type { Metadata } from "next";
import DemoShell from "@/components/DemoShell/DemoShell";
import DemoClient from "./DemoClient";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Spice Route Kitchen | Demo Website by ProjectKaro",
  description:
    "A sample restaurant website concept by ProjectKaro: menu, gallery, reviews and online table reservations for a fictional eatery.",
};

export default function RestaurantDemoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/demos/restaurant",
            title: 'Spice Route Kitchen | Demo Website by ProjectKaro',
            description: 'A sample restaurant website concept by ProjectKaro: menu, gallery, reviews and online table reservations for a fictional eatery.',
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: 'Restaurant Demo', path: "/demos/restaurant" },
          ]),
        ]}
      />
    <DemoShell businessName="Spice Route Kitchen"
      industryPath="/websites-for-restaurants"
      industryLabel="restaurants">
      <DemoClient />
    </DemoShell>
    </>
  );
}
