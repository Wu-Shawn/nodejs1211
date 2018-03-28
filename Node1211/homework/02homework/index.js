//require引入http模块,实现web服务器
var http = require("http");

//创建一个服务器
var server = http.createServer((req,res) => {

    res.write('<head><meta charset="UTF-8"></head>');

    res.write("欢迎来到我的网站!");

    res.end();
});


server.listen(8000);