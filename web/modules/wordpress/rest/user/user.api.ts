import wpApi from "../api";
import { IListResponse } from "../model";
import { IUser } from "./user.model";

export class UserRestApi {
  static findById(id: number): Promise<IUser> {
    return wpApi.users().id(id).get();
  }

  static findByIds(ids: number[]): Promise<IListResponse<IUser>> {
    return wpApi.users().include(ids).get();
  }
}
