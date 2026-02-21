import Footer from "@/app/components/footer";
import ProjectsSection from "@/app/components/projects-section";
import FadeInStagger from "./components/animations/fade-in-stagger";
import EducationSection from "./components/education-section";
import PresentationCard from "./components/presentation-card";
import SkillsSection from "./components/skills-section";
import SummarySection from "./components/summary-section";
import SwitchThemeButton from "./components/switch-theme-button";
import WorkExperiencesSection from "./components/work-experiences-section";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center p-6 md:p-16">
      <FadeInStagger className="flex flex-col w-full max-w-screen-md gap-10">
        <SwitchThemeButton />
        <PresentationCard />
        <SummarySection />
        <SkillsSection />
        <ProjectsSection />
        <WorkExperiencesSection />
        <EducationSection />
        <Footer />
      </FadeInStagger>
    </div>
  );
}
