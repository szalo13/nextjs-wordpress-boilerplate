import { IListResponse } from "../model";

export interface IContent {
  rendered: string;
  protected: boolean;
}

export interface IExcerpt {
  rendered: string;
  protected: boolean;
}

export interface IGuid {
  rendered: string;
}

export interface IPostLink {
  self: Array<any>;
  collection: Array<any>;
  about: Array<any>;
  author: Array<any>;
  replies: Array<any>;
  // Add any other link properties here
}

export interface IPost {
  author: number;
  categories: number[];
  comment_status: string;
  content: IContent;
  date: string;
  date_gmt: string;
  excerpt: IExcerpt;
  featured_media: number;
  format: string;
  guid: IGuid;
  id: number;
  link: string;
  meta: any;
  modified: string;
  modified_gmt: string;
  ping_status: string;
  slug: string;
  status: string;
  sticky: boolean;
  tags: any[];
  template: string;
  title: IContent;
  type: string;
  _links: IPostLink;
}

export type IPostResponse = IListResponse<IPost>;
