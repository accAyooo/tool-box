 import { fetchUrl, get } from '../fetch';
 import {
     FETCH_GET_USERINFO_ERROR, FETCH_GET_USERINFO_LOADING, FETCH_GET_USERINFO_SUCCESS
} from "./actionTypes";

export const fetchGetUserinfo = () => {
    const getUserinfoUrl = fetchUrl.USER_INFO_URL;

    return {
        promise: get(getUserinfoUrl).then(response => {
            if (response.status !== 200) {
                throw new Error("Get userinfo with code " + response.status);
            }
            return response.json().then(result => (result));
        }),
        types: [FETCH_GET_USERINFO_LOADING, FETCH_GET_USERINFO_SUCCESS, FETCH_GET_USERINFO_ERROR]
    }
}