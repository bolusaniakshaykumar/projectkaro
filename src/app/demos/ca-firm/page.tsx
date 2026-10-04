import DemoShell from "@/components/DemoShell/DemoShell";
import CaFirmDemo from "./demo";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Verma & Associates, Chartered Accountants | Sample Website by ProjectKaro",
  description:
    "A sample CA firm website concept crafted by ProjectKaro: income tax filing, GST, audits and bookkeeping for growing businesses.",
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/demos/ca-firm",
            title: 'Verma & Associates, Chartered Accountants | Sample Website by ProjectKaro',
            description: 'A sample CA firm website concept crafted by ProjectKaro: income tax filing, GST, audits and bookkeeping for growing businesses.',
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: 'CA Firm Demo', path: "/demos/ca-firm" },
          ]),
        ]}
      />
    <DemoShell businessName="Verma & Associates"
      industryPath="/websites-for-cas"
      industryLabel="CA firms">
      <CaFirmDemo />
    </DemoShell>
    </>
  );
}
