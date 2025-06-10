import { WorkExperiencesType } from "../types/work-experiences-type";
import { Column } from "./utils/column";
import WorkExperienceCard from "./work-experience-card";

const WorkExperiencesSection = () => {
  const workExperiences: WorkExperiencesType[] = [
    {
      company: "Freelance",
      companyLink: "",
      employmentDuration: "Agosto de 2024 - Dezembro de 2024",
      jobTitle: "Desenvolvedor Front-end Web",
      jobDescription:
        "Como freelancer, fui responsável pela manutenção de um software já existente, buscando otimizar a interatividade do usuário, o desempenho e os mecanismos de busca (SEO) do produto.",
    },
    {
      company: "80 Lines",
      companyLink: "https://br.linkedin.com/company/80lines",
      employmentDuration: "Junho de 2022 - Dezembro de 2023",
      jobTitle: "Desenvolvedor Front-end Web & Mobile",
      jobDescription: (
        <>
          Entrei na 80 Lines como desenvolvedor front-end trainee, onde tive a
          oportunidade de aprender com mentores altamente capacitados. Essas
          mentorias foram fundamentais para meu crescimento técnico e
          profissional, permitindo que, em poucos meses, eu evoluísse para a
          posição de desenvolvedor júnior.
          <br />
          <br />
          Como desenvolvedor júnior, trabalhei em diversos projetos
          simultaneamente, incluindo o desenvolvimento do site institucional da
          empresa, além de sistemas administrativos, financeiros e de
          e-commerce. Essa experiência me proporcionou a oportunidade de
          aprimorar habilidades essenciais, como resolução de problemas, gestão
          eficiente de tempo e colaboração em equipe.
          <br />
          <br />
          Minha dedicação e capacidade de entregar resultados consistentes me
          levaram à promoção para desenvolvedor pleno. Nessa nova etapa, assumi
          responsabilidades mais complexas, sendo um dos principais
          desenvolvedores front-end da empresa.
        </>
      ),
    },
    {
      company: "NEORIS",
      companyLink: "https://www.linkedin.com/company/neoris/",
      employmentDuration: "Maio de 2021 - Novembro de 2021",
      jobTitle: "Desenvolvedor SAP",
      jobDescription:
        "Iniciei minha carreira profissional na NEORIS, como desenvolvedor SAP trainee. Esta foi uma importante porta de entrada para o mercado de trabalho, permitindo-me adquirir os conhecimentos fundamentais sobre o funcionamento do setor de tecnologia. Durante minha trajetória na empresa, trabalhei tanto com desenvolvimento do front-end quanto o do back-end das aplicações, o que me proporcionou uma visão ampla e aprofundada de todas as etapas de criação e manutenção de sistemas.",
    },
  ];

  return (
    <Column className="space-y-2">
      <h3 className="text-black dark:text-white font-bold text-xl">
        Experiências Profissionais
      </h3>
      {workExperiences?.map((item, index) => (
        <WorkExperienceCard key={index} workExperience={item} />
      ))}
    </Column>
  );
};

export default WorkExperiencesSection;
