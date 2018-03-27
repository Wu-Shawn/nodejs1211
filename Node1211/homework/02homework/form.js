//引入模块
var http = require("http");
var url = require("url");

//创建服务器
var server = http.createServer((req,res) => {
    //支持utf8
    res.write('<head><meta charset="UTF-8"></head>');
    var urlObj = url.parse(req.url,true);
    // console.log(urlObj.query);
    res.write(JSON.stringify(urlObj.query));

    //结束请求
    res.end();
});

//开启服务
server.listen(8888);