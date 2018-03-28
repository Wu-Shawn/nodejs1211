//回调函数
//当触发的时候把某个函数作为参数传入
//当有请求过来的时候触发

var http = require("http");
http.createServer((req,res) => {


}).listen(8080,"localhost",() => {
    //服务器启动成功的时候调用
    console.log("服务器启动成功")
});
