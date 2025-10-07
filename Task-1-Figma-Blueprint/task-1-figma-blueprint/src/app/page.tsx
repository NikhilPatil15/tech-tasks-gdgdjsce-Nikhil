import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/HeroSection";
import SelectCarSection from "@/components/Home/SelectCarSection";
import StepsSection from "@/components/Home/stepsSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <SelectCarSection />
    </div>
  );
}
