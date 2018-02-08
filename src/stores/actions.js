 import { fetchUrl, get } from '../fetch';
import {HTTP_STATUS} from "../constants/httpConstants";

export const fetchGetUserinfo = () => {
    const getUserinfoUrl = fetchUrl.USER_INFO_URL;

    return {
        promise: get(getUserinfoUrl).then(response => {
            if (response.status !== 200) {
                throw new Error("Get userinfo without code 200!");
            }
            return response.json().then(result => result);
        }),
        types: [HTTP_STATUS.LOADING, HTTP_STATUS.SUCCESS, HTTP_STATUS.ERROR]
    }
}