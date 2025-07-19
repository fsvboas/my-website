import Image from "next/image";
import Link from "next/link";
import { SkillsType } from "../types/skills-type";

interface SkillCardProps {
  skill: SkillsType;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Link
      className="flex flex-col h-[140px] xs:w-[140px] items-center justify-between border border-gray-300 dark:border-gray-600 dark:bg-[#202020] p-5 rounded-xl hover:scale-105 duration-300 hover:border-gray-400 dark:hover:border-gray-400"
      href={skill.link}
      target="_blank"
    >
      <Image height={80} width={80} src={skill.src} alt={skill.name} />
      <span className="text-xs">{skill.name}</span>
    </Link>
  );
};

export default SkillCard;
