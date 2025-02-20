import AboutMeSection from "./components/about-me-section";
import EducationSection from "./components/education-section";
import PresentationCard from "./components/presentation-card";
import SkillsSection from "./components/skills-section";
import SwitchTheme from "./components/switch-theme";
import { Column } from "./components/utils/column";
import WorkExperiencesSection from "./components/work-experiences-section";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-[#f4f2ee] dark:bg-[#080808] p-6 md:p-16">
      <Column className="w-full max-w-screen-md space-y-10">
        <SwitchTheme />
        <PresentationCard />
        <AboutMeSection />
        <WorkExperiencesSection />
        <EducationSection />
        <SkillsSection />
      </Column>
    </div>
  );
}
