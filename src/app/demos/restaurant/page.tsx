import type { Metadata } from "next";
import DemoShell from "@/components/DemoShell/DemoShell";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "Spice Route Kitchen | Demo Website by ProjectKaro",
  description:
    "A sample restaurant website concept by ProjectKaro: menu, gallery, reviews and online table reservations for a fictional eatery.",
};

export default function RestaurantDemoPage() {
  return (
    <DemoShell businessName="Spice Route Kitchen">
      <DemoClient />
    </DemoShell>
  );
}
