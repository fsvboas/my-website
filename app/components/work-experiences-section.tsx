import { WorkExperiencesType } from "../types/work-experiences-type";
import { Column } from "./utils/column";
import WorkExperienceCard from "./work-experience-card";

const WorkExperiencesSection = () => {
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

const workExperiences: WorkExperiencesType[] = [
  {
    company: "Grupo Viriato",
    companyLink: "https://linkedin.com/company/grupo-viriato/",
    employmentDuration: "Set/2025 - o momento",
    jobTitle: "Desenvolvedor Front-end Web",
    jobDescription: (
      <>
        Desenvolvimento de uma plataforma completa de precificação de produtos,
        focada nos impactos da Reforma Tributária, possibilitando a simulação de
        cenários com IBS/CBS, definição de margens e análise dos efeitos fiscais
        na formação de preços.
        <br />
        <br />
        Também sou responsável pela criação da landing page do produto, com foco
        em apresentar a solução de forma clara, esclarecer os impactos da
        Reforma Tributária para o cliente e captar o interesse de potenciais
        usuários. O trabalho inclui otimizações de SEO, performance e
        acessibilidade, utilizando Google Search Console e Lighthouse.
        <br />
        <br />
        Conheça a{" "}
        <a
          href="https://precificapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Precific
        </a>
        !
      </>
    ),
  },
  {
    company: "Hypn Tech",
    companyLink: "https://linkedin.com/company/hypn-tech/",
    employmentDuration: "Set/2025 - Dez/2025",
    jobTitle: "Desenvolvedor Front-end Web",
    jobDescription:
      "Desenvolvimento e manutenção do front-end de um ecossistema B2B de pagamentos.",
  },
  {
    company: "Nau! SaaS",
    companyLink: "https://linkedin.com/company/fabrika-apps/",
    employmentDuration: "Jun/2025 - Jul/2025",
    jobTitle: "Desenvolvedor Front-end Web & Mobile",
    jobDescription:
      "Responsável pela manutenção e desenvolvimento de novas funcionalidades em uma plataforma SaaS de e-commerce, atuando tanto nos aplicativos voltados para o cliente (web e mobile) quanto no painel administrativo.",
  },
  {
    company: "Freelance",
    companyLink: "",
    employmentDuration: "Ago/2024 - Dez/2024",
    jobTitle: "Desenvolvedor Front-end Web",
    jobDescription:
      "Como freelancer, fui responsável pela manutenção de um software já existente, buscando otimizar a interatividade do usuário (UX), o desempenho e os mecanismos de busca (SEO) do produto.",
  },
  {
    company: "80 Lines",
    companyLink: "https://br.linkedin.com/company/80lines",
    employmentDuration: "Jun/2022 - Dez/2023",
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
        empresa, além de sistemas administrativos, financeiros e de e-commerce.
        Essa experiência me proporcionou a oportunidade de aprimorar habilidades
        essenciais, como resolução de problemas, gestão eficiente de tempo e
        colaboração em equipe.
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
    companyLink: "https://linkedin.com/company/neoris/",
    employmentDuration: "Mai/2021 - Nov/2021",
    jobTitle: "Desenvolvedor SAP",
    jobDescription:
      "Iniciei minha carreira profissional na NEORIS, como desenvolvedor SAP trainee. Esta foi uma importante porta de entrada para o mercado de trabalho, permitindo-me adquirir os conhecimentos fundamentais sobre o funcionamento do setor de tecnologia. Durante minha trajetória na empresa, trabalhei tanto com desenvolvimento do front-end quanto o do back-end das aplicações, o que me proporcionou uma visão ampla e aprofundada de todas as etapas de criação e manutenção de sistemas.",
  },
];
