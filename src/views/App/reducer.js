import {HTTP_STATUS} from "../../constants/httpConstants";
import {
    FETCH_GET_USERINFO_ERROR, FETCH_GET_USERINFO_LOADING,
    FETCH_GET_USERINFO_SUCCESS
} from "../../constants/actionTypes";

export default (state = {status: HTTP_STATUS.LOADING}, action) => {
    switch(action.type) {
        case FETCH_GET_USERINFO_ERROR:
            return {status: HTTP_STATUS.ERROR, message: action.message};
        case FETCH_GET_USERINFO_SUCCESS:
            return {status: HTTP_STATUS.SUCCESS, data: action.result};
        case FETCH_GET_USERINFO_LOADING:
            return {status: HTTP_STATUS.LOADING};
        default:
            return state;
    }
}