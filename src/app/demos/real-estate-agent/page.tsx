import type { Metadata } from "next";
import DemoShell from "@/components/DemoShell/DemoShell";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "CityNest Properties | Demo Website by ProjectKaro",
  description:
    "A sample real estate agent website concept by ProjectKaro: featured Hyderabad listings, agent profile, testimonials and enquiry form.",
};

export default function RealEstateDemoPage() {
  return (
    <DemoShell businessName="CityNest Properties">
      <DemoClient />
    </DemoShell>
  );
}
