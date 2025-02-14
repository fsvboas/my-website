import { Column } from "./utils/column";

const AboutMeSection = () => {
  return (
    <Column className="space-y-2">
      <h3 className="text-black font-bold text-xl">Sobre mim</h3>
      <p className="text-[#6c6c6c] text-justify">
        Desenvolvedor Front-end com 2 anos de experiência profissional na
        criação de interfaces dinâmicas e responsivas para aplicações web e
        mobile. Possuo um sólido conhecimento em tecnologias como React,
        Next.js, React Native, TypeScript, Tailwind CSS e TanStack Query, além
        de experiência na implementação de integrações com APIs RESTful.
        Familiarizado com práticas de versionamento de código utilizando Git e
        habituado a trabalhar em equipes ágeis, seguindo metodologias como
        Scrum.
      </p>
    </Column>
  );
};

export default AboutMeSection;
