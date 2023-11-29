import MainLayout from "../../../layouts/MainLayout";
import BlogPostCardListComponent from "../../../modules/blog/templates/BlogPostCardList.component";
import {
  BLOG_POSTS_NEXT_ROUTE,
  BLOG_POSTS_PREVIOUS_ROUTE,
  BLOG_POSTS_ROUTE,
} from "../../../modules/blog/routes";
import { calculateReadTime } from "../../../modules/blog/utils/calculateReadTime";
import NotFoundComponent from "../../../components/organisms/sections/not-found/NotFound.component";
import PaginationComponent from "../../../modules/blog/components/Pagination/Pagination.component";
import { PostsRestApi } from "../../../modules/wordpress/rest/posts/posts.api";
import {
  IPostListView,
  getPostListView,
} from "../../../modules/wordpress/rest/posts/views/getPostListView";
import { IPaging } from "../../../modules/wordpress/rest/model";
import { getStaticPagesPaths } from "../../../modules/blog/blog.utils";

interface IPostListElement {
  id: number;
  slug: string;
  title: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface IPagination extends IPaging {
  currentPage: number;
}

interface IPostsPageProps {
  posts: IPostListElement[];
  pagination: IPagination;
}

const formatPostsForView = (posts: IPostListView[]): IPostListElement[] => {
  return posts.map((post) => ({
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    date: post.date,
    imageUrl: post.featured_media?.source_url || "",
    excerpt: post.excerpt.rendered || "",
    author: {
      name: post.author?.name || "",
      avatar: post.author?.mpp_avatar[96] || "",
    },
    content: post.content.rendered || "",
  }));
};

const PAGINATION_TAKE = 1;

export default function PostsPage({ posts, pagination }: IPostsPageProps) {
  if (!posts) return null;

  if (!posts?.length) {
    return (
      <MainLayout>
        <NotFoundComponent
          title="We lost this page"
          description="We searched high and low but couldn't find what you're looking for. Let's find a better place for you to go."
          showRedirectButton={true}
          buttonLabel="Go to homepage"
          redirectUrl={BLOG_POSTS_ROUTE()}
        />
      </MainLayout>
    );
  }

  return (
    <>
      <MainLayout>
        <div className="mb-8 md:mb-12 lg:mb-24 mt-4 md:mt-8 lg:mt-12 px-4">
          <BlogPostCardListComponent
            posts={posts.map((post) => ({
              id: String(post.id),
              slug: post.slug,
              title: post.title,
              date: post.date,
              imageUrl: post.imageUrl,
              category: "",
              excerpt: post.excerpt,
              author: {
                name: post.author.name,
                avatar: post.author.avatar,
              },
              readTime: calculateReadTime(post.content),
            }))}
          />
          <div className="w-theme mx-auto p-theme">
            <PaginationComponent
              nextPageAvailable={pagination.currentPage < pagination.totalPages}
              previousPageAvailable={pagination.currentPage > 1}
              nextPageHref={BLOG_POSTS_NEXT_ROUTE(pagination.currentPage)}
              previousPageHref={BLOG_POSTS_PREVIOUS_ROUTE(
                pagination.currentPage
              )}
            />
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export async function getStaticProps(props: any) {
  try {
    const take = 1;
    const page = props.params.page;
    const res = await getPostListView(take, page);
    const posts = res.items;
    const pagination: IPagination = {
      total: res.paging.total,
      totalPages: res.paging.totalPages,
      currentPage: Number(page),
    };
    const formattedPosts: IPostListElement[] = formatPostsForView(posts);
    return { props: { posts: formattedPosts, pagination } };
  } catch (error: any) {
    if (error.data.status === 404 || error.data.status === 400) {
      return { props: { posts: [] } };
    }

    throw error;
  }
}

export async function getStaticPaths() {
  const res = await PostsRestApi.getPosts(100, 1);

  return {
    paths: getStaticPagesPaths(res._paging.total, PAGINATION_TAKE),
    fallback: true, // See the "fallback" section below
  };
}
