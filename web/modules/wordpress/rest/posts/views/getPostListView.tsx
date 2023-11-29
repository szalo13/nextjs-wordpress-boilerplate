import { MediaRestApi } from "../../media/media.api";
import { IMedia } from "../../media/media.model";
import { IListViewResponse } from "../../model";
import { UserRestApi } from "../../user/user.api";
import { IUser } from "../../user/user.model";
import { PostsRestApi } from "../posts.api";
import { IPost } from "../posts.model";

export interface IPostListView
  extends Omit<IPost, "featured_media" | "author"> {
  featured_media: IMedia | null;
  author: IUser | null;
}

const getAuthorsMap = async (posts: IPost[]): Promise<Map<number, IUser>> => {
  const uniqueAuthorsIds = Array.from(
    new Set([...posts.map((post) => post.author)])
  );
  const authors = await UserRestApi.findByIds(uniqueAuthorsIds);
  const authorsMap = new Map(authors.map((author) => [author.id, author]));
  return authorsMap;
};

const getMediasMap = async (posts: IPost[]): Promise<any> => {
  const uniqueMediasIds = Array.from(
    new Set([...posts.map((post) => post.featured_media)])
  );
  const medias = await MediaRestApi.findByIds(uniqueMediasIds);
  const mediaMap = new Map(medias.map((media: any) => [media.id, media]));
  return mediaMap;
};

export const getPostListView = async (
  take: number,
  page: number
): Promise<IListViewResponse<IPostListView>> => {
  const posts = await PostsRestApi.getPosts(take, page);
  const paging = posts._paging;
  const [authorsMap, mediasMap] = await Promise.all([
    getAuthorsMap(posts),
    getMediasMap(posts),
  ]);

  const postsListView = posts.map((post, idx) => ({
    ...post,
    author: authorsMap.get(post.author) || null,
    featured_media: mediasMap.get(post.featured_media) || null,
  }));

  return {
    items: postsListView,
    paging,
  };
};
