//中间件


var express = require("express");
var app = express();
/*
* 中间件：
* 1.每个中间件都可以控制流程是否继续执行
* 2.每一个中间件中的req和res都是同一个对象
* 3.如果出错，转交给错误处理中间件
* 4.一个中间件处理完数据可以把响应传递给下一个中间件继续处理
* */

//朝廷拨款赈灾 每个人发100两

app.use((req,res,next)=>{
    req.money = 100;
    next();
});
//知府
app.use((req,res,next)=>{
    req.money -= 20;
    //next 里有东西的话 就进入报错处理
    next("钱丢了");
});
//衙门
app.use((req,res,next)=>{
    req.money -=50;
    next();
});

//报错处理中间件
app.use((err,req,res,next)=>{
console.error(err);
    res.send(err);
});

//真正的响应请求
app.all("*",(req,res)=>{
    console.log("发钱");
    res.send("每人" + req.money);
})
app.listen(8080)