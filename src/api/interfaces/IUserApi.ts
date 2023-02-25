import { User } from "../../models/User";

export const UserApiKey = 'IUserApi';

export interface IUserApi {
    getCurrent(): Promise<User>;
};