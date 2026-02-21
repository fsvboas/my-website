import { Column } from "./utils/column";

const SummarySection = () => {
  return (
    <Column className="space-y-2">
      <h3 className="text-black dark:text-white font-bold text-xl">Resumo</h3>
      <p className="text-gray-600 dark:text-gray-400 text-justify">
        Desenvolvedor Front-end com quase 4 anos de experiência criando
        interfaces modernas, responsivas e focadas em performance para
        aplicações web e mobile. Gosto de transformar ideias em experiências
        intuitivas, com atenção especial à usabilidade, acessibilidade e boas
        práticas de desenvolvimento.
      </p>
    </Column>
  );
};

export default SummarySection;
