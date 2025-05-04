import { useTranslations } from "next-intl";
import SkillCard from "./skill-card";
import { Column } from "./utils/column";

const SkillsSection = () => {
  const i18n = useTranslations("SkillsSection");

  const skills = [
    {
      src: "/react-logo.svg",
      name: "React",
    },
    {
      src: "/react-native-logo.svg",
      name: "React Native",
    },
    {
      src: "/nextjs-logo.svg",
      name: "Next.js",
    },
    {
      src: "/typescript-logo.svg",
      name: "TypeScript",
    },
    {
      src: "/tanstack-query-logo.svg",
      name: "TanStack Query",
    },
    {
      src: "/zustand-logo.svg",
      name: "Zustand",
    },
    {
      src: "/redux-logo.svg",
      name: "Redux",
    },
    {
      src: "/git-logo.svg",
      name: "Git",
    },
    {
      src: "/github-logo.svg",
      name: "GitHub",
    },
    {
      src: "/vercel-logo.svg",
      name: "Vercel",
    },
  ];

  return (
    <Column className="space-y-2 ">
      <h3 className="text-black dark:text-white font-bold text-xl">
        {i18n("title")}
      </h3>
      <div className="w-full grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills?.map((item, index) => (
          <SkillCard skill={item} key={index} />
        ))}
      </div>
    </Column>
  );
};

export default SkillsSection;
