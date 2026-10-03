import DemoShell from "@/components/DemoShell/DemoShell";
import CaFirmDemo from "./demo";

export const metadata = {
  title: "Verma & Associates, Chartered Accountants | Sample Website by ProjectKaro",
  description:
    "A sample CA firm website concept crafted by ProjectKaro: income tax filing, GST, audits and bookkeeping for growing businesses.",
};

export default function Page() {
  return (
    <DemoShell businessName="Verma & Associates">
      <CaFirmDemo />
    </DemoShell>
  );
}
