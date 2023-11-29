import { TagIcon } from "@heroicons/react/24/outline";
import { memo } from "react";
import styles from "./BlogPostCategory.module.css";

interface IBlogPostCategoryPropTypes {
  category: string;
}

const BlogPostCategory = ({ category }: IBlogPostCategoryPropTypes) => {
  return (
    <div className="flex items-center">
      <div className={styles["icon-wrapper"]}>
        <TagIcon />
      </div>
      {category}
    </div>
  );
};

export default memo(BlogPostCategory);
