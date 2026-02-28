import { Column } from "@/app/components/utils/column";
import { Row } from "@/app/components/utils/row";

const ProjectsSection = () => {
  return (
    <Column className="space-y-2">
      <Row className="items-center gap-2">
        <h3 className="text-black dark:text-white font-bold text-xl">
          Projetos
        </h3>
        <Row className="h-fit w-fit p-px px-2 bg-black dark:bg-zinc-100 rounded-full">
          <span className="text-xs text-white dark:text-black font-semibold">
            Em breve
          </span>
        </Row>
      </Row>
      <p className="text-gray-600 dark:text-gray-400 text-justify">
        Esta seção está em construção. Enquanto isso, convido você a explorar
        alguns dos projetos profissionais em que participei diretamente na minha
        seção de Projetos no{" "}
        <a
          href="https://linkedin.com/in/fsvboas"
          target="_href"
          rel="noopener noreferrer"
          className="text-blue-600r hover:underline"
        >
          LinkedIn
        </a>
        .
      </p>
    </Column>
  );
};

export default ProjectsSection;
