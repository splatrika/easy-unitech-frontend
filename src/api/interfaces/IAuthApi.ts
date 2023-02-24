import { Keys } from "../../models/Keys";

export const AuthServiceKey = 'IAuthService';

export interface IAuthApi {
    tryLogin(login : string, password : string, callback: () => Keys): Promise<boolean>;
    validate(keys: Keys): Promise<boolean>;
}