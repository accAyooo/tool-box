import { get } from '../fetch/';
import { fetchUrl } from '../fetch/';
import {HTTP_CODE, HTTP_STATUS} from "../constants/httpConstants";
import {
    FETCH_GET_USERINFO_ERROR, FETCH_GET_USERINFO_LOADING,
    FETCH_GET_USERINFO_SUCCESS
} from "../constants/actionTypes";

const loadingHandler = () => ({
    type: FETCH_GET_USERINFO_LOADING
})

const successHandler = (result) => ({
    type: FETCH_GET_USERINFO_SUCCESS,
    result
})

const errorHandler = (message) => ({
    type: FETCH_GET_USERINFO_ERROR,
    message
})

export const fetchGetUserinfo = () => {
    return (dispatch) => {
        dispatch(loadingHandler());

        get(fetchUrl.USER_INFO_URL).then((result) => {
            try {
                if (result.status !== 200) {
                    throw new Error("get userinfo failed");
                }

                result.json().then((resultJson) => {
                    if (resultJson.code === HTTP_CODE.ERROR) {
                        dispatch(errorHandler(resultJson.message));
                        return;
                    }

                    dispatch(successHandler(resultJson.data));
                } )
            } catch (error) {
                dispatch(errorHandler(error.message));
            }

        })
    }
}