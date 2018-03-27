
//require 引入模块
//http模块  实现webserver
var http = require("http");
//创建服务器
var server = http.createServer((req,res) => {
    //function(req,res){}
    //req:request   请求对象  客户端传入数据
    //res:response 响应对象  服务端给客户端的响应
    //console.log(req);
    //向前台响应内容(收)
    res.write('<head><meta charset="UTF-8"></head>');
    //res.write("欢迎来到我的网站");
    //res.write("");//内容必须是字符串 或者 buffer

    console.log(req.url);

    var url = req.url;
    //字符串分割
    var data = url.split("?");
    console.log(data);
    //通过不同的地址反馈不同的数据
    if(res.url == '/home'){
        res.write("这是home页面");
    }else if(data[0] == "/ajax"){
        var param = data[1];
        var params = param.split("&");

        var data = {
            "name":params[0].split("=")[1],
            "age":params[1].split("=")[1]
        };
        res.write(JSON.stringify(data));
    }else {
        res.write("页面没找到");
    }

    res.end();


});
//开启服务设置端口号 8080   本地ip：127.0.0.1
server.listen(8080);