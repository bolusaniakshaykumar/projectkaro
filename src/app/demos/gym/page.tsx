import DemoShell from "@/components/DemoShell/DemoShell";
import GymDemo from "./demo";

export const metadata = {
  title: "IronPulse Fitness Studio | Sample Gym Website by ProjectKaro",
  description:
    "A sample fitness studio website concept crafted by ProjectKaro: strength training, HIIT, yoga and personal training with flexible membership plans.",
};

export default function Page() {
  return (
    <DemoShell businessName="IronPulse Fitness Studio">
      <GymDemo />
    </DemoShell>
  );
}
