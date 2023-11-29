export const BLOG_POST_ROUTE = (slug: string) => `/blog/post/${slug}`;
export const BLOG_POSTS_ROUTE = () => `/blog/posts/1`;
export const BLOG_POSTS_PREVIOUS_ROUTE = (currentPage: number) =>
  `/blog/posts/${currentPage - 1}`;
export const BLOG_POSTS_NEXT_ROUTE = (currentPage: number) =>
  `/blog/posts/${currentPage + 1}`;
