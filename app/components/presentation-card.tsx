import { Download } from "lucide-react";
import Image from "next/image";
import SocialLinks from "./social-links";
import { Button } from "./ui/button";
import { Column } from "./utils/column";
import { Row } from "./utils/row";

const PresentationCard = () => {
  return (
    <Row className="items-center justify-between border border-gray-300 dark:border-gray-600 p-4 rounded-xl duration-300">
      <Column className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-black dark:text-white">
          Felippe Vilas Boas
        </h1>
        <h2 className="text-lg text-black dark:text-gray-400">
          Desenvolvedor Front-end
        </h2>
        <span className="text-sm text-gray-600 dark:text-gray-500">
          São Paulo, SP - Brasil 🇧🇷
        </span>
        <SocialLinks />
        <a href="/curriculum-vitae.pdf" target="_blank" download>
          <Button
            aria-label="download-cv"
            className="border border-gray-300 dark:border-gray-600 px-4 rounded-[8px] hover:bg-gray-500 duration-300 hover:text-white"
          >
            <Download /> Baixar Currículo
          </Button>
        </a>
      </Column>
      <Image
        src="/felippe.webp"
        alt="Foto de Perfil"
        height={150}
        width={150}
        className="hidden xs:block rounded-xl"
      />
    </Row>
  );
};

export default PresentationCard;
