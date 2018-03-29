/*
* 框架
* 功能：
* 1.路由
* 2.中间件
* 3.模板引擎
* */


//1.下载 引入模块
var express = require("express");

//2.初始化
var app = express();
// get(path,callback);
app.get("/",(req,res)=>{
    //res.send()  往前台返回数据
    // res.send("express请求");
    //发送文件(写绝对路径)
    res.sendFile(__dirname+"/index.html");


});
//ajax
app.get("/ajaxApi",(req,res)=>{
    var date = new Date();
    res.send(date.toString());
});


//解析get ？name=123&...
app.get("/query",(req,res)=>{
    //使用query
    console.log(req.query.name);
    console.log(req.query)
});
app.get("/article/:id/:name",(req,res)=>{
    //使用路径参数params
    console.log(req.params)
});

//解析post
app.post("/formApi",(req,res)=>{
    //使用formidable
});

//任何方式的请求  *任意路径 ，没有匹配路由 就进入
//css js 等
app.all("*",(req,res)=>{
    console.log(req.path);
    res.sendFile(__dirname + req.path)
});

//设置端口号
app.listen(8080);


