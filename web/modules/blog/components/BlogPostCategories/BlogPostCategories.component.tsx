import { TagIcon } from "@heroicons/react/24/outline";
import { memo } from "react";
import styles from "./BlogPostCategories.module.css";
import Link from "next/link";

interface ICategory {
  name: string;
  redirectUrl?: string;
}

export interface IBlogPostCategoryPropTypes {
  categories: ICategory[];
}

const CATEGORY_CLASSES = "mr-2";

const SingleCategory = (category: ICategory) => {
  if (category.redirectUrl) {
    return (
      <Link
        className={CATEGORY_CLASSES}
        key={category.name}
        href={category.redirectUrl}
      >
        {category.name}
      </Link>
    );
  }

  return (
    <span className={CATEGORY_CLASSES} key={category.name}>
      {category.name}
    </span>
  );
};

const BlogPostCategories = ({ categories }: IBlogPostCategoryPropTypes) => {
  return (
    <div className="flex items-center">
      <div className={styles["icon-wrapper"]}>
        <TagIcon />
      </div>
      {categories.map((category, index) => (
        <>
          <SingleCategory {...category} />
          {categories.length - 1 !== index && <span className="mr-2">/</span>}
        </>
      ))}
    </div>
  );
};

export default memo(BlogPostCategories);
