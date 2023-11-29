export interface IMediaDetailsSizes {
  file: string;
  width: number;
  height: number;
  mime_type: string;
  source_url: string;
}

export interface IMediaDetails {
  width: number;
  height: number;
  file: string;
  filesize: number;
  sizes: {
    [key: string]: IMediaDetailsSizes;
  };
  mime_type: string;
  source_url: string;
}

export interface IMediaCaption {
  rendered: string;
}

export interface IMedia {
  alt_text: string;
  author: number;
  caption: IMediaCaption;
  comment_status: string;
  date: string;
  date_gmt: string;
  description: {
    rendered: string;
  };
  guid: {
    rendered: string;
  };
  id: number;
  link: string;
  media_details: IMediaDetails;
  media_type: string;
  meta: any[];
  mime_type: string;
  modified: string;
  modified_gmt: string;
  ping_status: string;
  post: number;
  slug: string;
  source_url: string;
  status: string;
  template: string;
  title: {
    rendered: string;
  };
  type: string;
}
