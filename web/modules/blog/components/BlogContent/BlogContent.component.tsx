import { memo } from "react";
import { marked } from "marked";
import styles from "./BlogContent.module.css";

interface IBlogContentPropTypes {
  content: string;
}

const BlogContent = ({ content }: IBlogContentPropTypes) => {
  return (
    <div
      className={styles["blog-content"]}
      dangerouslySetInnerHTML={{ __html: marked.parse(content) as any }}
    />
  );
};

export default memo(BlogContent);
