import axios from "axios";
import { getCookie } from "typescript-cookie";
import { ApiOptions } from "./ApiOptions";
import { ApiError } from "./errors/ApiError";

export class ApiBase {
    constructor (protected readonly options: ApiOptions) {}

    protected async get<T>(url: string, resourse: string, params: any = null) : Promise<T> {
        let response = await axios.get(
            url, 
            { 
                params: params,
                headers: { 'Authorization': this.getAuthorizationValue() }
            });
        if (response.status != 200) {
            throw new ApiError('Unable to load ' + resourse);
        }
        return response.data;
    }

    private getAuthorizationValue(): string {
        return `${getCookie('csrf')}/${getCookie('sessCommon')}`;
    }
}