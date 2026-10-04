import { createPageMetadata } from "@/lib/seo";
import DemoShell from "@/components/DemoShell/DemoShell";
import DemoClient from "./DemoClient";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Lumiere Salon & Spa | Demo Website by ProjectKaro",
  description:
    "A sample salon and spa website concept by ProjectKaro: services, stylists, gallery, testimonials and online appointment booking.",
  path: "/demos/salon",
});

export default function SalonDemoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/demos/salon",
            title: 'Lumiere Salon & Spa | Demo Website by ProjectKaro',
            description: 'A sample salon and spa website concept by ProjectKaro: services, stylists, gallery, testimonials and online appointment booking.',
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: 'Salon Demo', path: "/demos/salon" },
          ]),
        ]}
      />
    <DemoShell businessName="Lumiere Salon & Spa"
      industryPath="/websites-for-salons"
      industryLabel="salons and spas">
      <DemoClient />
    </DemoShell>
    </>
  );
}
