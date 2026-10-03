import type { Metadata } from "next";
import DemoShell from "@/components/DemoShell/DemoShell";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "Lumiere Salon & Spa | Demo Website by ProjectKaro",
  description:
    "A sample salon and spa website concept by ProjectKaro: services, stylists, gallery, testimonials and online appointment booking.",
};

export default function SalonDemoPage() {
  return (
    <DemoShell businessName="Lumiere Salon & Spa">
      <DemoClient />
    </DemoShell>
  );
}
