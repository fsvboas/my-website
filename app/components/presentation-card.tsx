import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Column } from "./utils/column";
import { Row } from "./utils/row";

const PresentationCard = () => {
  return (
    <Row className="flex items-center justify-between border border-gray-800 p-4 rounded-xl">
      <Column className="space-y-2">
        <h1 className="text-3xl font-bold text-white">Felippe Vilas Boas</h1>
        <h2 className="text-lg text-gray-400">Desenvolvedor Front-end</h2>
        <span className="text-sm text-gray-400">São Paulo, SP - Brasil 🇧🇷</span>
        <Row className="space-x-1 pt-1">
          <Link href="https://github.com/fsvboas" target="_blank">
            <Button className="border border-gray-600 px-2.5 rounded-[8px] hover:bg-gray-600 duration-300">
              <Github className="text-white" />
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/fsvboas" target="_blank">
            <Button className="border border-gray-600 px-2.5 rounded-[8px] hover:bg-gray-600 duration-300">
              <Linkedin className="text-white" />
            </Button>
          </Link>
          <Link href="mailto: fsvboas.dev@gmail.com" target="_blank">
            <Button className="border border-gray-600 px-2.5 rounded-[8px] hover:bg-gray-600 duration-300">
              <Mail className="text-white" />
            </Button>
          </Link>
        </Row>
      </Column>
      <Image
        src="/felippe.jpeg"
        alt="Foto de Perfil"
        height={150}
        width={150}
        className="rounded-xl"
      />
    </Row>
  );
};

export default PresentationCard;
