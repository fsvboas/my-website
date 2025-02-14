import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Column } from "./utils/column";
import { Row } from "./utils/row";

const PresentationCard = () => {
  return (
    <Row className="items-center justify-between border border-gray-300 p-4 rounded-xl">
      <Column className="space-y-2">
        <h1 className="text-2xl xs:text-3xl font-bold text-black">
          Felippe Vilas Boas
        </h1>
        <h2 className="text-lg text-black">Desenvolvedor Front-end</h2>
        <span className="text-sm text-[#6c6c6c]">
          São Paulo, SP - Brasil 🇧🇷
        </span>
        <Row className="space-x-1 pt-1">
          <Link href="https://github.com/fsvboas" target="_blank">
            <Button className="border border-gray-300 px-2.5 rounded-[8px] hover:bg-gray-300 duration-300">
              <Github className="text-black" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/fsvboas" target="_blank">
            <Button className="border border-gray-300 px-2.5 rounded-[8px] hover:bg-gray-300 duration-300">
              <Linkedin className="text-black" />
            </Button>
          </Link>
          <Link href="mailto: fsvboas.dev@gmail.com" target="_blank">
            <Button className="border border-gray-300 px-2.5 rounded-[8px] hover:bg-gray-300 duration-300">
              <Mail className="text-black" />
            </Button>
          </Link>
          <Link href="https://wa.me/5511991668762" target="_blank">
            <Button className="border border-gray-300 px-2.5 rounded-[8px] hover:bg-gray-300 duration-300">
              <Image src="/whatsapp-icon.svg" alt="" height={16} width={16} />
            </Button>
          </Link>
        </Row>
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
