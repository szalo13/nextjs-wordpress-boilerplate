import { IEdge, IPageInfo } from "../model";

export interface ITagNode {
  name: string;
  slug: string;
  uri: string;
}

export interface IAuthor {
  node: {
    avatar: {
      url: string;
    };
    email: null;
    firstName: null;
    lastName: null;
    name: string;
    nickname: null;
    slug: string;
    description: string;
  };
}

export interface IFeaturedImage {
  node: {
    sourceUrl: string;
  };
}

export interface ICategory {
  nodes: {
    slug: string;
    name: string;
  }[];
}

export interface IPostView {
  author?: IAuthor;
  content: string;
  date: string;
  excerpt: string;
  featuredImage?: IFeaturedImage;
  id: string;
  isPreview: boolean;
  isRestricted: boolean;
  modified: string;
  slug: string;
  status: string;
  tags: {
    nodes: ITagNode[];
  };
  title: string;
  uri: string;
  categories: ICategory;
}

export interface IPostsListView {
  nodes: IPostView[];
  edges: IEdge[];
  pageInfo: IPageInfo;
}
