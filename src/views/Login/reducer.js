import {
    FETCH_GET_USERINFO_ERROR, FETCH_GET_USERINFO_LOADING,
    FETCH_GET_USERINFO_SUCCESS
} from "../../constants/actionTypes";
import {HTTP_STATUS} from "../../constants/httpConstants";

export default (state = {}, action) => {
    switch(action.type) {
        case FETCH_LOGIN_ERROR:
            return {status: HTTP_STATUS.ERROR, message: action.message};
        case FETCH_LOGIN_SUCCESS:
            return {status: HTTP_STATUS.SUCCESS, data: action.result};
        case FETCH_LOGIN_LOADING:
            return {status: HTTP_STATUS.LOADING};
        default:
            return state;
    }
}