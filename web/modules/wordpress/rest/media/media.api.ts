import wpApi from "../api";
import { IListResponse } from "../model";
import { IMedia } from "./media.model";

export class MediaRestApi {
  static findById(id: number): Promise<IMedia> {
    return wpApi.media().id(id).get();
  }

  static findByIds(ids: number[]): Promise<IListResponse<IMedia>> {
    return wpApi.media().include(ids).get();
  }

  static findByPage(page: number): Promise<IListResponse<IMedia>> {
    return wpApi.media().page(page).get();
  }

  static findByPages(pages: number): Promise<IListResponse<IMedia>> {
    return wpApi.media().pages(pages).get();
  }

  static findByPerPage(perPage: number): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).get();
  }

  static findByPerPageAndPage(
    perPage: number,
    page: number
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).page(page).get();
  }

  static findByPerPageAndPages(
    perPage: number,
    pages: number
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).pages(pages).get();
  }

  static findByPerPageAndOffset(
    perPage: number,
    offset: number
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).offset(offset).get();
  }

  static findByPerPageAndOffsetAndPage(
    perPage: number,
    offset: number,
    page: number
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).offset(offset).page(page).get();
  }

  static findByPerPageAndOffsetAndPages(
    perPage: number,
    offset: number,
    pages: number
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).offset(offset).pages(pages).get();
  }

  static findByPerPageAndOffsetAndExclude(
    perPage: number,
    offset: number,
    exclude: number[]
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).offset(offset).exclude(exclude).get();
  }

  static findByPerPageAndOffsetAndInclude(
    perPage: number,
    offset: number,
    include: number[]
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).offset(offset).include(include).get();
  }

  static findByPerPageAndOffsetAndOrder(
    perPage: number,
    offset: number,
    order: "asc" | "desc"
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).offset(offset).order(order).get();
  }

  static findByPerPageAndOffsetAndOrderBy(
    perPage: number,
    offset: number,
    orderBy: number
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).offset(offset).orderBy(orderBy).get();
  }

  static findByPerPageAndOffsetAndParent(
    perPage: number,
    offset: number,
    parent: number
  ): Promise<IListResponse<IMedia>> {
    return wpApi.media().perPage(perPage).offset(offset).parent(parent).get();
  }

  static findByPerPageAndOffsetAndParentExclude(
    perPage: number,
    offset: number,
    parentExclude: number
  ): Promise<IListResponse<IMedia>> {
    return wpApi
      .media()
      .perPage(perPage)
      .offset(offset)
      .parentExclude(parentExclude)
      .get();
  }
}
