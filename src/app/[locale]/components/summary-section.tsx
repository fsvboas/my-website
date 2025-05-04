import { useTranslations } from "next-intl";
import { Column } from "./utils/column";

const SummarySection = () => {
  const i18n = useTranslations("SummarySection");

  return (
    <Column className="space-y-2">
      <h3 className="text-black dark:text-white font-bold text-xl">
        {i18n("title")}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-justify">
        {i18n("summary")}
      </p>
    </Column>
  );
};

export default SummarySection;
