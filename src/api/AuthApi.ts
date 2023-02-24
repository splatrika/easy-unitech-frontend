import axios from "axios";
import { Keys } from "../models/Keys";
import { KeysValidation } from "../models/KeysValidation";
import { ApiOptions } from "./ApiOptions";
import { IAuthApi } from "./interfaces/IAuthApi";

const apiServiceHost = 'localhost';

export class AuthApi implements IAuthApi {
    constructor(private options: ApiOptions) {}

    async tryLogin(login: string, password: string, callback: (keys: Keys) => {}): Promise<boolean> {
        var response = await axios.post<Keys>(this.options.apiHost + '/login', {
            login: login,
            password: password
        });
        if (response.status != 200)
            return false;
        callback(response.data);
        return true;
    }

    async validate(keys: Keys): Promise<boolean> {
        if (!keys.csrf && !keys.sessCommon)
            return false;
        let validationResponse = await axios.post<KeysValidation>(
            this.options.apiHost + '/login/validate', 
            keys);
        if (validationResponse.status != 200)
            return false;
        return validationResponse.data.valid;
    }
}