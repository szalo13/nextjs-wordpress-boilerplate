import { memo } from "react";
import BlogPostCard, {
  BlogPostCardProps,
} from "../components/BlogPostCard/BlogPostCard.component";
import styles from "./BlogPostCardList.module.css";

interface IBlogPostCardListPropTypes {
  posts: BlogPostCardProps[];
}

const BlogPostCardList = ({ posts }: IBlogPostCardListPropTypes) => {
  return (
    <div className="w-theme mx-auto p-theme">
      <div className={styles["cards-wrapper"]}>
        {posts.map((post) => (
          <div key={post.id} className="pb-12">
            <BlogPostCard {...post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(BlogPostCardList);
