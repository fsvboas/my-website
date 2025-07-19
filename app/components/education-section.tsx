import { EducationExperiencesType } from "../types/education-experiences-type";
import EducationExperienceCard from "./education-experience-card";
import { Column } from "./utils/column";

const EducationExperiencesSection = () => {
  return (
    <Column className="space-y-2">
      <h3 className="text-black dark:text-white font-bold text-xl">Formação</h3>
      {educationExperiences?.map((item, index) => (
        <EducationExperienceCard key={index} educationExperience={item} />
      ))}
    </Column>
  );
};

export default EducationExperiencesSection;

const educationExperiences: EducationExperiencesType[] = [
  {
    institution: "Universidade Anhembi Morumbi",
    courseName:
      "Análise e Desenvolvimento de Sistemas, Tecnologia da Informação",
    courseDuration: "Fev/2020 - Jul/2022",
    courseDescription: `Curso superior focado na formação de profissionais capazes de analisar, projetar, desenvolver, implementar e gerenciar sistemas de informação. Ele integra áreas de tecnologia, negócios e resolução de problemas, oferecendo uma ampla gama de habilidades em informática e processos de gestão.`,
  },
  {
    institution: "Colégio da Polícia Militar",
    courseName: "Ensino Médio",
    courseDuration: "Fev/2016 - Dez/2018",
  },
];
