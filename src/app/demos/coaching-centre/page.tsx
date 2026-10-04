import DemoShell from "@/components/DemoShell/DemoShell";
import CoachingDemo from "./demo";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Aspire Academy | Sample Coaching Website by ProjectKaro",
  description:
    "A sample coaching centre website concept crafted by ProjectKaro: JEE and NEET preparation with small batches, expert faculty and proven results.",
  path: "/demos/coaching-centre",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/demos/coaching-centre",
            title: 'Aspire Academy | Sample Coaching Website by ProjectKaro',
            description: 'A sample coaching centre website concept crafted by ProjectKaro: JEE and NEET preparation with small batches, expert faculty and proven results.',
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: 'Coaching Centre Demo', path: "/demos/coaching-centre" },
          ]),
        ]}
      />
    <DemoShell businessName="Aspire Academy"
      industryPath="/websites-for-coaching-centres"
      industryLabel="coaching centres">
      <CoachingDemo />
    </DemoShell>
    </>
  );
}
