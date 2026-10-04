import DemoShell from "@/components/DemoShell/DemoShell";
import GymDemo from "./demo";
import JsonLd from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "IronPulse Fitness Studio | Sample Gym Website by ProjectKaro",
  description:
    "A sample fitness studio website concept crafted by ProjectKaro: strength training, HIIT, yoga and personal training with flexible membership plans.",
  path: "/demos/gym",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            path: "/demos/gym",
            title: 'IronPulse Fitness Studio | Sample Gym Website by ProjectKaro',
            description: 'A sample fitness studio website concept crafted by ProjectKaro: strength training, HIIT, yoga and personal training with flexible membership plans.',
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: 'Gym Demo', path: "/demos/gym" },
          ]),
        ]}
      />
    <DemoShell businessName="IronPulse Fitness Studio"
      industryPath="/websites-for-small-businesses"
      industryLabel="small businesses">
      <GymDemo />
    </DemoShell>
    </>
  );
}
