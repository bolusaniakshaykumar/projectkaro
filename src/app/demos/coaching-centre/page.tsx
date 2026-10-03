import DemoShell from "@/components/DemoShell/DemoShell";
import CoachingDemo from "./demo";

export const metadata = {
  title: "Aspire Academy | Sample Coaching Website by ProjectKaro",
  description:
    "A sample coaching centre website concept crafted by ProjectKaro: JEE and NEET preparation with small batches, expert faculty and proven results.",
};

export default function Page() {
  return (
    <DemoShell businessName="Aspire Academy">
      <CoachingDemo />
    </DemoShell>
  );
}
