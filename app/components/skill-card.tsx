import Image from "next/image";
import { Column } from "./utils/column";

interface SkillCardProps {
  skill: {
    src: string;
    name: string;
  };
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Column className="h-[140px] xs:w-[140px] items-center justify-between border border-gray-300 dark:border-gray-600 dark:bg-[#202020] p-5 rounded-xl hover:scale-105 duration-300">
      <Image height={80} width={80} src={skill.src} alt={skill.name} />
      <span className="text-xs">{skill.name}</span>
    </Column>
  );
};

export default SkillCard;
