import { useTranslations } from "next-intl";
import { Column } from "./utils/column";
import { Flex } from "./utils/flex";

const EducationSection = () => {
  const i18n = useTranslations("EducationSection");

  return (
    <Column className="space-y-2">
      <h3 className="text-black dark:text-white font-bold text-xl">
        {i18n("title")}
      </h3>
      <Column className="justify-between border border-gray-300 dark:border-gray-600 p-4 rounded-xl bg-gray-200 dark:bg-[#202020]  space-y-2 hover:border-gray-400 dark:hover:border-gray-400 duration-300">
        <Flex className="flex-col sm:flex-row sm:items-center justify-between">
          <h4 className="font-bold"> {i18n("university")}</h4>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {i18n("date")}
          </span>
        </Flex>
        <p className="text-sm">{i18n("course")}</p>
        <p className="text-gray-600 dark:text-gray-400 text-justify text-sm">
          {i18n("courseSummary")}
        </p>
      </Column>
    </Column>
  );
};

export default EducationSection;
