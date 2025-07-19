import { EducationExperiencesType } from "../types/education-experiences-type";
import { Column } from "./utils/column";
import { Flex } from "./utils/flex";
import { Show } from "./utils/show";

interface EducationExperienceCardProps {
  educationExperience: EducationExperiencesType;
}

const EducationExperienceCard = ({
  educationExperience,
}: EducationExperienceCardProps) => {
  return (
    <Column className="justify-between border border-gray-300 dark:border-gray-600 p-4 rounded-xl bg-gray-200 dark:bg-[#202020]  space-y-2 hover:border-gray-400 dark:hover:border-gray-400 duration-300">
      <Flex className="flex-col sm:flex-row sm:items-center justify-between">
        <h4 className="font-bold">{educationExperience.institution}</h4>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {educationExperience.courseDuration}
        </span>
      </Flex>
      <p className="text-sm">{educationExperience.courseName}</p>
      <Show when={educationExperience?.courseDescription}>
        <p className="text-gray-600 dark:text-gray-400 text-justify text-sm">
          {educationExperience?.courseDescription}
        </p>
      </Show>
    </Column>
  );
};

export default EducationExperienceCard;
