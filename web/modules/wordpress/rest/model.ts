export interface IPaging {
  total: number;
  totalPages: number;
}

export interface IListResponse<T> extends Array<T> {
  _paging: IPaging;
}

export interface IListViewResponse<T> {
  items: Array<T>;
  paging: IPaging;
}
