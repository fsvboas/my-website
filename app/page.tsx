import AboutMeSection from "./components/about-me-section";
import PresentationCard from "./components/presentation-card";
import { Column } from "./components/utils/column";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-[#f4f2ee] p-6 md:p-16">
      <Column className="w-full max-w-screen-md space-y-10">
        <PresentationCard />
        <AboutMeSection />
      </Column>
    </div>
  );
}
