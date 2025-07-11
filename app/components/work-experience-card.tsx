import { Link as LucideLink } from "lucide-react";
import Link from "next/link";
import { WorkExperiencesType } from "../types/work-experiences-type";
import { Column } from "./utils/column";
import { Flex } from "./utils/flex";
import { Show } from "./utils/show";

interface WorkExperienceCardProps {
  workExperience: WorkExperiencesType;
}

const WorkExperienceCard = ({ workExperience }: WorkExperienceCardProps) => {
  const companyLinkExists = workExperience.companyLink !== "";

  return (
    <Column className="justify-between border border-gray-300 dark:border-gray-600 p-4 rounded-xl bg-gray-200 dark:bg-[#202020] space-y-2 hover:border-gray-400 dark:hover:border-gray-400 duration-300">
      <Flex className="flex-col sm:flex-row sm:items-center justify-between">
        <h4 className="font-bold">
          <Link
            href={workExperience.companyLink}
            target={companyLinkExists ? "_blank" : ""}
            className="hover:underline flex flex-row items-center space-x-1"
          >
            <p>{workExperience.company}</p>
            <Show when={companyLinkExists}>
              <LucideLink size={16} />
            </Show>
          </Link>
        </h4>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {workExperience.employmentDuration}
        </span>
      </Flex>
      <h5 className="text-sm">{workExperience.jobTitle}</h5>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {workExperience.jobDescription}
      </p>
    </Column>
  );
};

export default WorkExperienceCard;
