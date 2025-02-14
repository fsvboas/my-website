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
    <Column className="h-32 w-32 flex items-center justify-between border border-gray-300 p-5 rounded-xl mr-3 mb-3">
      <Image height={100} width={100} src={skill.src} alt={skill.alt} />
    </Column>
  );
};

export default SkillCard;
