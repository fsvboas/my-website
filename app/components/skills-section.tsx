import SkillCard from "./skill-card";
import { Column } from "./utils/column";
import { Flex } from "./utils/flex";

const SkillsSection = () => {
  const skills = [
    {
      src: "/react-logo.svg",
      alt: "React",
    },
    {
      src: "/react-native-logo.svg",
      alt: "React Native",
    },
    {
      src: "/nextjs-logo.svg",
      alt: "Next.js",
    },
    {
      src: "/typescript-logo.svg",
      alt: "Typescript",
    },
    {
      src: "/tanstack-query-logo.svg",
      alt: "TanStack Query",
    },
    {
      src: "/zustand-logo.svg",
      alt: "Zustand",
    },
    {
      src: "/redux-logo.svg",
      alt: "Redux",
    },
    {
      src: "/git-logo.svg",
      alt: "Git",
    },
    {
      src: "/github-logo.svg",
      alt: "GitHub",
    },
    {
      src: "/vercel-logo.svg",
      alt: "Vercel",
    },
  ];

  return (
    <Column className="space-y-2 ">
      <h3 className="text-black font-bold text-xl">Conhecimentos</h3>
      <Flex className="w-full flex-wrap">
        {skills?.map((item, index) => (
          <SkillCard skill={item} key={index} />
        ))}
      </Flex>
    </Column>
  );
};

export default SkillsSection;
