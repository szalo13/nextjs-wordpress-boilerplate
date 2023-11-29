import { memo } from "react";
import HumanReadableDate from "../../../../components/atoms/utils/HumanReadableDate/HumanReadableDate.component";
import BlogPostReadTimeComponent from "../BlogPostReadtime/BlogPostReadTime.component";
import BlogPostTagsComponent from "../BlogPostTags/BlogPostTags.component";
import BlogPostCategoriesComponent, {
  IBlogPostCategoryPropTypes,
} from "../BlogPostCategories/BlogPostCategories.component";

interface IBlogPostHeaderPropTypes extends IBlogPostCategoryPropTypes {
  createdAt: string | Date;
  title: string;
  description?: string;
  content: string;
  readTime: string;
  tags: string[];
}

const BlogPostHeader = ({
  createdAt,
  title,
  description,
  readTime,
  categories,
  tags,
}: IBlogPostHeaderPropTypes) => {
  return (
    <div className="bg-white p-8 text-center w-full">
      <div className="flex justify-center items-center mb-4">
        <div className="text-gray-400 text-sm">
          <HumanReadableDate date={createdAt} />
        </div>
      </div>
      <div className="flex justify-center pt-8 pb-8">
        <h1 className="section-title-lg max-w-xl">{title}</h1>
      </div>
      {description && (
        <h2 className="text-3xl font-light mb-8">{description}</h2>
      )}
      <div className="post-information pb-12">
        <div className="article-info text-sm font-base text-black flex justify-center items-center mt-1">
          <div className="mx-2">
            <BlogPostReadTimeComponent readTime={readTime} />
          </div>
          {categories.length && (
            <div className="mx-2">
              <BlogPostCategoriesComponent categories={categories} />
            </div>
          )}
        </div>
        {tags && tags.length && (
          <div className="flex text-sm font-base text-black pt-2 justify-center w-full">
            <BlogPostTagsComponent tags={tags} />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(BlogPostHeader);
