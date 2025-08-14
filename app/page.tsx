import FadeInStagger from "./components/animations/fade-in-stagger";
import EducationSection from "./components/education-section";
import PresentationCard from "./components/presentation-card";
import SkillsSection from "./components/skills-section";
import SummarySection from "./components/summary-section";
import SwitchThemeButton from "./components/switch-theme-button";
import WorkExperiencesSection from "./components/work-experiences-section";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center p-6 md:p-16 relative">
      <SwitchThemeButton />
      <FadeInStagger className="flex flex-col w-full max-w-screen-md space-y-10 mt-10">
        <PresentationCard />
        <SummarySection />
        <WorkExperiencesSection />
        <EducationSection />
        <SkillsSection />
      </FadeInStagger>
    </div>
  );
}
