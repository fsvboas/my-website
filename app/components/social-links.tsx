import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Row } from "./utils/row";

const SocialLinks = () => {
  return (
    <Row className="space-x-1 pt-1">
      <Link href="https://github.com/fsvboas" target="_blank">
        <Button
          aria-label="github-link"
          className="border border-gray-300 dark:border-gray-600 px-2.5 rounded-[8px] hover:bg-black hover:text-white"
        >
          <Github />
        </Button>
      </Link>
      <Link href="https://linkedin.com/in/fsvboas" target="_blank">
        <Button
          aria-label="linkedin-link"
          className="border border-gray-300 dark:border-gray-600 px-2.5 rounded-[8px] duration-300 hover:bg-[#0275b3] hover:text-white"
        >
          <Linkedin />
        </Button>
      </Link>
      <Link href="mailto: fsvboas.dev@gmail.com" target="_blank">
        <Button
          aria-label="email-link"
          className="border border-gray-300 dark:border-gray-600 px-2.5 rounded-[8px] hover:bg-[#de493b] duration-300 hover:text-white"
        >
          <Mail />
        </Button>
      </Link>
      <Link href="https://wa.me/5511991668762" target="_blank">
        <Button
          aria-label="whatsapp-link"
          className="border border-gray-300 dark:border-gray-600 px-2.5 rounded-[8px] hover:bg-[#25d365] duration-300 hover:text-white"
        >
          <Phone />
        </Button>
      </Link>
    </Row>
  );
};

export default SocialLinks;
