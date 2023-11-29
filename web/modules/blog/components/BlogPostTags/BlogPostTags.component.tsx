import { HashtagIcon } from "@heroicons/react/24/outline";
import { memo } from "react";
import styles from "./BlogPostTags.module.css";

interface IBlogPostTagsPropTypes {
  tags: string[];
}

const BlogPostTags = ({ tags }: IBlogPostTagsPropTypes) => {
  return (
    <div className="flex items-center">
      {tags.map((tag, index) => (
        <div key={index} className="text-gray-400 flex items-center mr-2">
          <div className={styles["icon-wrapper"]}>
            <HashtagIcon />
          </div>
          {tag}
        </div>
      ))}
    </div>
  );
};

export default memo(BlogPostTags);
