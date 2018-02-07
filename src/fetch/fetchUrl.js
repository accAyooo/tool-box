const AJAX_URL = "http://localhost:3000";

export default {
    /**
     * description 获取用户信息
     * @return string
     */
    USER_INFO_URL: AJAX_URL + "/user/userinfo",

    /**
     * description 用户登陆
     * @param string username
     * @param string password
     * @return user
     */
    USER_LOGIN_URL: AJAX_URL + "/user/login"
}