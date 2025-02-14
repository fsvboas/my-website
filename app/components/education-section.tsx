import { Column } from "./utils/column";
import { Row } from "./utils/row";

const EducationSection = () => {
  return (
    <Column className="space-y-2">
      <h3 className="text-black font-bold text-xl">Formação</h3>
      <Column className="flex justify-between border border-gray-300 p-4 rounded-xl bg-gray-200 space-y-2">
        <Row className="items-center justify-between">
          <h4 className="font-bold">Universidade Anhembi Morumbi</h4>
          <span className="text-sm text-[#6c6c6c]">
            Fevereiro de 2020 - Julho de 2022
          </span>
        </Row>
        <p className="text-sm">
          Análise e Desenvolvimento de Sistemas, Tecnologia da Informação
        </p>
        <p className="text-[#6c6c6c] text-justify text-sm">
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
