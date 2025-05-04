import { useTranslations } from "next-intl";
import { WorkExperiencesType } from "../types/work-experiences-type";
import { Column } from "./utils/column";
import WorkExperienceCard from "./work-experience-card";

const WorkExperiencesSection = () => {
  const i18n = useTranslations("WorkExperiencesSection");

  const workExperiences: WorkExperiencesType[] = [
    {
      company: "80 Lines",
      companyLink: "https://br.linkedin.com/company/80lines",
      employmentDuration: i18n("companies.80lines.employmentDuration"),
      jobTitle: i18n("companies.80lines.jobTitle"),
      jobDescription: i18n("companies.80lines.jobDescription"),
    },
    {
      company: "NEORIS",
      companyLink: "https://www.linkedin.com/company/neoris/",
      employmentDuration: i18n("companies.neoris.employmentDuration"),
      jobTitle: i18n("companies.neoris.jobTitle"),
      jobDescription: i18n("companies.neoris.jobDescription"),
    },
  ];

  return (
    <Column className="space-y-2">
      <h3 className="text-black dark:text-white font-bold text-xl">
        {i18n("title")}
      </h3>
      {workExperiences?.map((item, index) => (
        <WorkExperienceCard key={index} workExperience={item} />
      ))}
    </Column>
  );
};

export default WorkExperiencesSection;
