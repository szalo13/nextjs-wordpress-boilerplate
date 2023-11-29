import { PAGE_DESCRIPTION, PAGE_KEYWORDS, PAGE_TITLE } from "../app/const";

export const getMetadata = (defaultValues: {
  title?: string;
  description?: string;
  keywords?: string;
}) => {
  return {
    title: defaultValues?.title || PAGE_TITLE,
    description: defaultValues?.description || PAGE_DESCRIPTION,
    keywords: defaultValues?.keywords || PAGE_KEYWORDS,
  };
};
