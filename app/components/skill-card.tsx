import Image from "next/image";
import { Column } from "./utils/column";

interface SkillCardProps {
  skill: {
    src: string;
    alt: string;
  };
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <Column className="h-[140px] w-[140px] items-center justify-between border border-gray-300 p-5 rounded-xl mr-3 mb-3">
      <Image height={80} width={80} src={skill.src} alt={skill.alt} />
      <span className="text-xs">{skill.alt}</span>
    </Column>
  );
};

export default SkillCard;
