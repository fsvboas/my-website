import { Column } from "./utils/column";

const SummarySection = () => {
  return (
    <Column className="space-y-2">
      <h3 className="text-black dark:text-white font-bold text-xl">Resumo</h3>
      <p className="text-gray-600 dark:text-gray-400 text-justify">
        Desenvolvedor Front-end com mais de 2 anos de experiência na criação de
        interfaces modernas, responsivas e performáticas para aplicações web e
        mobile. Possui domínio em tecnologias como React, Next.js, React Native,
        TypeScript, Tailwind CSS e TanStack Query, além de experiência sólida na
        integração com APIs RESTful. Atua com boas práticas de versionamento
        utilizando Git e tem familiaridade com metodologias ágeis, como Scrum,
        colaborando de forma eficiente em times multidisciplinares.
      </p>
    </Column>
  );
};

export default SummarySection;
