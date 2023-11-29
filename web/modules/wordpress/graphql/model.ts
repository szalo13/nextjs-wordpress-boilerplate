export type IResponse<K extends string, T> = {
  [k in K]: T;
};

export interface IPaginationParams {
  take?: number;
  endCursor?: string;
}

export interface IPageInfo {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

export interface IEdge {
  cursor: string;
}
