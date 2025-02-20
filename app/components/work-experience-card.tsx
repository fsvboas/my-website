import { Link as LucideLink } from "lucide-react";
import Link from "next/link";
import { WorkExperiencesType } from "../types/work-experiences-type";
import { Column } from "./utils/column";
import { Flex } from "./utils/flex";

interface WorkExperienceCardProps {
  workExperience: WorkExperiencesType;
}

const WorkExperienceCard = ({ workExperience }: WorkExperienceCardProps) => {
  return (
    <Column className="justify-between border border-gray-300 p-4 rounded-xl bg-gray-200 space-y-2 hover:border-gray-400 duration-300">
      <Flex className="flex-col sm:flex-row sm:items-center justify-between">
        <h4 className="font-bold">
          <Link
            href={workExperience.companyLink}
            target="_blank"
            className="hover:underline flex flex-row items-center space-x-1"
          >
            <p>{workExperience.company}</p>
            <LucideLink size={16} />
          </Link>
        </h4>
        <span className="text-sm text-[#6c6c6c]">
          {workExperience.employmentDuration}
        </span>
      </Flex>
      <h5 className="text-sm">{workExperience.jobTitle}</h5>
      <p className="text-sm text-[#6c6c6c]">{workExperience.jobDescription}</p>
    </Column>
  );
};

export default WorkExperienceCard;
