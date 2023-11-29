import { fetchGraphQlApi } from "../api";
import { PAGE_INFO_FRAGMENT } from "../fragments";
import { IResponse } from "../model";
import { POST_VIEW_FRAGMENT } from "./posts.fragments";
import { IPostView, IPostsListView } from "./posts.model";

export class PostsGqlApi {
  static getPostViewBySlug(
    slug: string
  ): Promise<IResponse<"post", IPostView>> {
    return fetchGraphQlApi(
      `
      query GetPostViewBySlug($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          ${POST_VIEW_FRAGMENT}
        }
      }
    `,
      { variables: { slug } }
    );
  }

  static getPostsAfterCursor(
    take: number,
    endCursor: string
  ): Promise<IResponse<"posts", IPostsListView>> {
    return fetchGraphQlApi(
      `
      query GetPostsView($take: Int, $endCursor: String) {
        posts(first: $take, after: $endCursor) {
          nodes {
            ${POST_VIEW_FRAGMENT}
          }
          pageInfo {
            ${PAGE_INFO_FRAGMENT}
          }
          edges {
            cursor
          }
        }
      }
    `,
      { variables: { take, endCursor } }
    );
  }

  static getPostsBeforeCursor(
    take: number,
    endCursor: string
  ): Promise<IResponse<"posts", IPostsListView>> {
    return fetchGraphQlApi(
      `
      query GetPostsView($take: Int, $endCursor: String) {
        posts(first: $take, before: $endCursor) {
          nodes {
            ${POST_VIEW_FRAGMENT}
          }
          pageInfo {
            ${PAGE_INFO_FRAGMENT}
          }
          edges {
            
          }
        }
      }
    `,
      { variables: { take, endCursor } }
    );
  }
}
