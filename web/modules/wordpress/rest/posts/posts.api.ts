import wpApi from "../api";
import { IPostResponse } from "./posts.model";

export class PostsRestApi {
  static getPosts(take: number, page: number): Promise<IPostResponse> {
    return wpApi.posts().page(page).perPage(take).get();
  }

  static getPostBySlug(slug: string): Promise<IPostResponse> {
    return wpApi.posts().slug(slug).get();
  }
}
