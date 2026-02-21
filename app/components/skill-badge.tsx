import { Row } from "@/app/components/utils/row";
import Image from "next/image";
import { SkillsType } from "../types/skills-type";

interface SkillBadgeProps {
  skill: SkillsType;
  imageClassName?: string;
}

const SkillBadge = ({ skill, imageClassName }: SkillBadgeProps) => {
  return (
    <Row className="h-10 w-full items-center gap-2 py-1 px-2 border border-gray-300 dark:border-gray-600 dark:bg-[#202020] rounded-lg  hover:border-gray-400 dark:hover:border-gray-400 !transition-all !duration-300">
      <Image
        height={24}
        width={24}
        src={skill.src}
        alt={skill.name}
        className={`shrink-0 w-6 h-6, ${imageClassName}`}
      />
      <span className="text-xs shrink-0">{skill.name}</span>
    </Row>
  );
};

export default SkillBadge;
