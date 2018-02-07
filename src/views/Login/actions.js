import { get } from '../../fetch/';
import { fetchUrl } from '../../fetch/';
import {HTTP_CODE, HTTP_STATUS} from "../../constants/httpConstants";
import {FETCH_LOGIN_ERROR, FETCH_LOGIN_LOADING, FETCH_LOGIN_SUCCESS} from "../../constants/actionTypes";

const loadingHandler = () => ({
    type: FETCH_LOGIN_LOADING
})

const successHandler = (result) => ({
    type: FETCH_LOGIN_SUCCESS,
    result
})

const errorHandler = (message) => ({
    type: FETCH_LOGIN_ERROR,
    message
})

export const fetchLogin = (username, password) => {
    return (dispatch) => {
        dispatch(loadingHandler());

        get(fetchUrl.USER_LOGIN_URL, {
            password: "123",
            username: "123"
        }).then((result) => {
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