import { User } from "../models/User";
import { ApiBase } from "./ApiBase";
import { IUserApi } from "./interfaces/IUserApi";

export class UserApi extends ApiBase implements IUserApi {
    async getCurrent(): Promise<User> {
        return await this.get<User>(this.options.apiHost + '/user', 'user');
    }
}