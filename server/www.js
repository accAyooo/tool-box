var express = require('express');

var app = express();

app.get('/user/userinfo', function (req, res) {
    /**
     * description 获取用户信息接口
     */


    var code = 1; //更改code = 1 时会返回登陆成功信息， code=0时返回错误信息
    var errorMessage = "用户未登录";
    var successMessage = "用户已登录";
    var data = {
        user: "石翔宇",
        role: "管理员",
        role_type: "0",
        user_id: "1"
    }

    // 错误返回　

    if (code == 1) {
        var json = {
            code: 1,
            message: successMessage,
            data: data
        }
    } else {
        var json = {
            code: 0,
            message: errorMessage
        }
    }

    res.send(json);
});

app.get('/user/login?username=shixiangyu&password=123', function (req, res) {

})

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});