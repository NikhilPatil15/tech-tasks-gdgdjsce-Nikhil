import DownloadAppSection from "@/components/Home/DownloadAppSection";
import FactsSection from "@/components/Home/FactsSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroSection from "@/components/Home/HeroSection";
import SearchSection from "@/components/Home/SearchSection";
import SelectCarSection from "@/components/Home/SelectCarSection";
import StepsSection from "@/components/Home/stepsSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <SelectCarSection />
      <FactsSection />
      <DownloadAppSection />
      <SearchSection />
    </div>
  );
}
