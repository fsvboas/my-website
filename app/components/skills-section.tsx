import { SkillsType } from "../types/skills-type";
import SkillCard from "./skill-card";
import { Column } from "./utils/column";

const SkillsSection = () => {
  return (
    <Column className="space-y-2 ">
      <h3 className="text-black dark:text-white font-bold text-xl">
        Conhecimentos
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
    link: "https://react.dev/",
  },
  {
    name: "React Native",
    src: "/svgs/react-native-logo.svg",
    link: "https://reactnative.dev/",
  },
  {
    name: "Next.js",
    src: "/svgs/nextjs-logo.svg",
    link: "https://nextjs.org/",
  },
  {
    name: "Vue.js",
    src: "/svgs/vuejs-logo.svg",
    link: "https://vuejs.org/",
  },
  {
    name: "TypeScript",
    src: "/svgs/typescript-logo.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind CSS",
    src: "/svgs/tailwindcss-logo.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Axios",
    src: "/svgs/axios-logo.svg",
    link: "https://axios-http.com/",
  },
  {
    name: "TanStack Query",
    src: "/svgs/tanstack-query-logo.svg",
    link: "https://tanstack.com/",
  },
  {
    name: "Motion",
    src: "/svgs/motion-logo.svg",
    link: "https://motion.dev/",
  },
  {
    name: "Vitest",
    src: "/svgs/vitest-logo.svg",
    link: "https://vitest.dev/",
  },
  {
    name: "Zustand",
    src: "/svgs/zustand-logo.svg",
    link: "https://zustand-demo.pmnd.rs/",
  },
  {
    name: "Redux",
    src: "/svgs/redux-logo.svg",
    link: "https://redux.js.org/",
  },
  {
    name: "Vite",
    src: "/svgs/vite-logo.svg",
    link: "https://vite.dev/",
  },
  {
    name: "Git",
    src: "/svgs/git-logo.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    src: "/svgs/github-logo.svg",
    link: "https://github.com/",
  },
];
