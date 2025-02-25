import { Column } from "./utils/column";
import { Flex } from "./utils/flex";

const EducationSection = () => {
  return (
    <Column className="space-y-2">
      <h3 className="text-black dark:text-white font-bold text-xl">Formação</h3>
      <Column className="justify-between border border-gray-300 dark:border-gray-600 p-4 rounded-xl bg-gray-200 dark:bg-[#202020]  space-y-2 hover:border-gray-400 dark:hover:border-gray-400 duration-300">
        <Flex className="flex-col sm:flex-row sm:items-center justify-between">
          <h4 className="font-bold">Universidade Anhembi Morumbi</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Fevereiro de 2020 - Julho de 2022
          </span>
        </Flex>
        <p className="text-sm">
          Análise e Desenvolvimento de Sistemas, Tecnologia da Informação
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-justify text-sm">
          Curso superior focado na formação de profissionais capazes de
          analisar, projetar, desenvolver, implementar e gerenciar sistemas de
          informação. Ele integra áreas de tecnologia, negócios e resolução de
          problemas, oferecendo uma ampla gama de habilidades em informática e
          processos de gestão.
        </p>
      </Column>
    </Column>
  );
};

export default EducationSection;
