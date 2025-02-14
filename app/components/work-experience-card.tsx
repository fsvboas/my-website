import { Link as LucideLink } from "lucide-react";
import Link from "next/link";
import { WorkExperiencesType } from "../types/work-experiences-type";
import { Column } from "./utils/column";
import { Row } from "./utils/row";

interface WorkExperienceCardProps {
  workExperience: WorkExperiencesType;
}

const WorkExperienceCard = ({ workExperience }: WorkExperienceCardProps) => {
  return (
    <Column className="flex justify-between border border-gray-300 p-4 rounded-xl bg-gray-200 space-y-2">
      <Row className="flex items-center justify-between">
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
      </Row>
      <h5 className="text-sm">{workExperience.jobTitle}</h5>
      <p className="text-sm text-[#6c6c6c]">{workExperience.jobDescription}</p>
    </Column>
  );
};

export default WorkExperienceCard;
