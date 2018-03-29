/*
* cookie
* */
var express = require("express");
var cookie = require("cookie-parser");
var app = express();

//使用中间件 对cookie初始化
app.use(cookie());

app.get("/",(req,res)=>{

    if (req.cookies.login){
        res.send("你已经访问过")
    }else{

        var date = new Date();
        date.setDate(date.getDate() + 3);
        res.cookie("login","1",{
            //expires:date
            //max
            maxAge:1000 * 30
        });
        res.send("第一次访问")


    }





});
app.listen(8080)