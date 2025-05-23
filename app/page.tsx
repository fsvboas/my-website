import EducationSection from "./components/education-section";
import PresentationCard from "./components/presentation-card";
import SkillsSection from "./components/skills-section";
import SummarySection from "./components/summary-section";
import SwitchThemeButton from "./components/switch-theme-button";
import { Column } from "./components/utils/column";
import WorkExperiencesSection from "./components/work-experiences-section";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-[#f4f2ee] dark:bg-[#101010] p-6 md:p-16">
      <Column className="w-full max-w-screen-md space-y-10">
        <SwitchThemeButton />
        <PresentationCard />
        <SummarySection />
        <WorkExperiencesSection />
        <EducationSection />
        <SkillsSection />
      </Column>
    </div>
  );
}
