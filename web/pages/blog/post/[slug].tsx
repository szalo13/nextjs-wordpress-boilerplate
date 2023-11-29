import MainLayout from "../../../layouts/MainLayout";
import SeoHead from "../../../modules/seo/components/SeoHead";
import BlogPostHeaderComponent from "../../../modules/blog/components/BlogPostHeader/BlogPostHeader.component";
import BlogContent from "../../../modules/blog/components/BlogContent/BlogContent.component";
import BlogAuthorComponent from "../../../modules/blog/components/BlogAuthor/BlogAuthor.component";
import BlogContentRootLayoutComponent from "../../../modules/blog/layouts/BlogContentRootLayout.component";
import { calculateReadTime } from "../../../modules/blog/utils/calculateReadTime";
import { PostsGqlApi } from "../../../modules/wordpress/graphql/posts/posts.api";
import { IPostView } from "../../../modules/wordpress/graphql/posts/posts.model";
import { PostsRestApi } from "../../../modules/wordpress/rest/posts/posts.api";

interface Props {
  post: IPostView;
}

export default function BlogPage({ post }: Props) {
  if (!post) {
    return null;
  }

  const authorName = `${post?.author?.node.firstName} ${post?.author?.node.lastName}`;
  return (
    <>
      {/* {post.seo && <SeoHead {...post.seo} />} */}
      <MainLayout>
        <BlogContentRootLayoutComponent>
          <BlogPostHeaderComponent
            title={post.title}
            createdAt={post.date}
            description={post.excerpt}
            content={post.content}
            categories={post.categories.nodes.map((category) => ({
              name: category.name,
              redirectUrl: "",
            }))}
            readTime={calculateReadTime(post.content)}
            tags={post.tags.nodes.map((tag) => tag.name)}
          />
          <div className="mx-auto max-w-3xl px-4 md:px-8 sm:mb-8 md:mb-12 lg:mb-24">
            <BlogContent content={post.content.trim()} />
            {post.author && (
              <BlogAuthorComponent
                username={authorName}
                description={post.author.node.description}
                avatarProps={
                  post.author.node.avatar.url
                    ? {
                        url: post.author.node.avatar.url,
                        alt: authorName,
                      }
                    : undefined
                }
              />
            )}
          </div>
        </BlogContentRootLayoutComponent>
      </MainLayout>
    </>
  );
}

export async function getStaticProps(config: any) {
  const slug = config?.params?.slug;
  const res = await PostsGqlApi.getPostViewBySlug(slug);
  const post: IPostView = res.post;

  if (!post) {
    return {
      notFound: true,
    };
  }

  return { props: { post } };
}

export async function getStaticPaths(pathParams: any) {
  const posts = await PostsRestApi.getPosts(100, 1);
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}
