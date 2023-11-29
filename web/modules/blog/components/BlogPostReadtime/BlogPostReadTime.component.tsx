import { ClockIcon } from "@heroicons/react/24/outline";
import { memo } from "react";
import { calculateReadTime } from "../../utils/calculateReadTime";
import styles from "./BlogPostReadTime.module.css";

interface IPostReadTimePropTypes {
  readTime: string;
}

const BlogPostReadTime = ({ readTime }: IPostReadTimePropTypes) => {
  return (
    <div className="flex items-center">
      <div className={styles["icon-wrapper"]}>
        <ClockIcon />
      </div>
      {readTime} min
    </div>
  );
};

export default memo(BlogPostReadTime);
