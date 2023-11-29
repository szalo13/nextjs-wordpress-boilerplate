import Image from "next/image";
import { BLOG_POST_ROUTE } from "../../routes";
import styles from "./BlogPostCard.module.css";
import { ClockIcon, TagIcon } from "@heroicons/react/24/outline";
import { truncateText } from "../../utils/truncateText";
import BlogPostReadTimeComponent from "../BlogPostReadtime/BlogPostReadTime.component";
import BlogPostCategoryComponent from "../BlogPostCategory/BlogPostCategory.component";
import HumanReadableDateComponent from "../../../../components/atoms/utils/HumanReadableDate/HumanReadableDate.component";

interface Author {
  name: string;
  avatar: string; // URL to the author's avatar image
}

export interface BlogPostCardProps {
  id: string;
  slug: string;
  title: string;
  author?: Author;
  date: string; // You might want to use a Date type or string depending on how you handle dates
  readTime: string;
  excerpt: string;
  imageUrl: string; // URL to the blog post cover image
  category: string;
}

const BlogPostCard = ({
  title,
  author,
  date,
  readTime,
  excerpt,
  imageUrl,
  slug,
  category,
}: BlogPostCardProps) => {
  return (
    <a className={styles.card} href={BLOG_POST_ROUTE(slug)}>
      <div className={styles["card-img-wrapper"]}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt="Blog Post Cover"
            className="w-full h-48 object-cover aspect-[4/3]"
            fill={true}
          />
        )}
      </div>
      <div className="article-info text-sm font-base text-black flex justify-between items-center mt-1">
        <BlogPostReadTimeComponent readTime={readTime} />
        {category && <BlogPostCategoryComponent category={category} />}
      </div>
      <h2 className={`${styles.title}`}>{truncateText(title, 100)}</h2>
      <p className={`${styles.excerpt}`}>{truncateText(title, 200)}</p>
      {!!author && (
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            {author?.avatar && (
              <Image
                width={50}
                height={50}
                src={author.avatar}
                alt={author.name}
                className="rounded-full mr-2"
              />
            )}
            <div>
              <p className={`${styles.authorName}`}>{author.name}</p>
              <p className={`${styles.info}`}>
                <HumanReadableDateComponent date={date} /> · {readTime}min read
              </p>
            </div>
          </div>
        </div>
      )}
    </a>
  );
};

export default BlogPostCard;
