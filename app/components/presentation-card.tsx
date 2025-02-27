import Image from "next/image";
import SocialLinks from "./social-links";
import { Column } from "./utils/column";
import { Row } from "./utils/row";

const PresentationCard = () => {
  return (
    <Row className="items-center justify-between border border-gray-300 dark:border-gray-600 p-4 rounded-xl duration-300">
      <Column className="space-y-2">
        <h1 className="text-2xl xs:text-3xl font-bold text-black dark:text-white">
          Felippe Vilas Boas
        </h1>
        <h2 className="text-lg text-black dark:text-gray-400">
          Desenvolvedor Front-end
        </h2>
        <span className="text-sm text-gray-600 dark:text-gray-500">
          São Paulo, SP - Brasil 🇧🇷
        </span>
        <SocialLinks />
      </Column>
      <Image
        src="/felippe.jpeg"
        alt="Foto de Perfil"
        height={150}
        width={150}
        className="hidden sm:block rounded-xl"
      />
    </Row>
  );
};

export default PresentationCard;
