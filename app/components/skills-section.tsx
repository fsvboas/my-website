import { SkillsType } from "../types/skills-type";
import SkillCard from "./skill-card";
import { Column } from "./utils/column";

const SkillsSection = () => {
  return (
    <Column className="space-y-2 ">
      <h3 className="text-black dark:text-white font-bold text-xl">
        Habilidades
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

const skills: SkillsType[] = [
  {
    name: "React",
    src: "/svgs/react-logo.svg",
  },
  {
    name: "Next.js",
    src: "/svgs/nextjs-logo.svg",
  },
  {
    name: "Vue.js",
    src: "/svgs/vuejs-logo.svg",
  },
  {
    name: "Nuxt.js",
    src: "/svgs/nuxtjs-logo.svg",
  },
  {
    name: "React Native",
    src: "/svgs/react-native-logo.svg",
  },
  {
    name: "TypeScript",
    src: "/svgs/typescript-logo.svg",
  },
  {
    name: "Tailwind CSS",
    src: "/svgs/tailwindcss-logo.svg",
  },
  {
    name: "Zustand",
    src: "/svgs/zustand-logo.svg",
  },
  {
    name: "Pinia",
    src: "/svgs/pinia-logo.svg",
  },
  {
    name: "Axios",
    src: "/svgs/axios-logo.svg",
  },
  {
    name: "TanStack Query",
    src: "/svgs/tanstack-query-logo.svg",
  },
  {
    name: "Vitest",
    src: "/svgs/vitest-logo.svg",
  },
  {
    name: "Vite",
    src: "/svgs/vite-logo.svg",
  },
  {
    name: "Git",
    src: "/svgs/git-logo.svg",
  },
  {
    name: "GitHub",
    src: "/svgs/github-logo.svg",
  },
];
