var express = require("express");
var formidable = require("formidable");
var fs = require("fs");
var app = express();



var mongoose = require("mongoose");

var url = "mongodb://127.0.0.1:27017/lucky";
var db = mongoose.connect(url,(err)=>{
    if (err){
        console.error("连接失败："+err)
    }else {
        console.log("连接成功")
    }
});

var schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String}

},{
    //集合名(表)
    collection:"user"
});

var Model = mongoose.model("user",schema);



//html 页面
app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/login.html");
});
app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
});
app.get("/lucky",(req,res)=>{
    res.sendFile(__dirname+"/lucky.html");
});


/**********************注册**************************/
//post
app.post("/register/post",(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req,(err,args,files)=>{
        if(err){
            console.error(err);
        }else {
            //console.log(args["username"]);
            //判断用户是否存在
            var username = args["username"];
            Model.findOne({username:username},(err,doc)=>{
                if (err){
                    console.error(err)
                }else {
                    //如果不存在则注册
                    if(doc){
                        console.log("用户已存在")
                    }else {
                        Model.create(args,(err,doc)=>{
                            if (err){
                                console.error(err)
                            }else {
                                console.log(doc);
                            }
                        });
                    }
                }
            });
        }
    })
});
/**********************登录**************************/
//post
app.post("/login/post",(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req,(err,args,files)=>{
        if(err){
            console.error(err);
        }else {
            Model.findOne(args,(err,doc)=>{
                if (err){
                    console.error(err)
                }else {
                    if(doc){
                        console.log("登录成功");
                        //跳转
                        res.redirect('http://127.0.0.1:8080/lucky');

                    }else {
                        console.log("用户不存在")
                    }
                }
            });
        }
    })
});

/**********************返回几等奖**************************/
app.get("/lucky/ajax",(req,res)=>{
    var Num = null;
    var praise = null;
    function getRandom() {
        Num = Math.floor(Math.random()*(31-1+1)+1)
    }
    getRandom();
    console.log(Num);
    //5 10 20 30 40 50   31
    if (Num == 1){
        //一等奖
        praise = 6;
        res.send("6");
    }else if (Num >= 2 && Num <= 3){
        //二等奖
        praise = 5;
        res.send("5");
    }else if(Num >=4 && Num <=7){
        //三等奖
        praise = 4;
        res.send("4");

    }else if(Num >=9 && Num <= 14){
        //四等奖
        praise = 3;
        res.send("3");

    }else if (Num >=15 && Num <= 22){
        //五等奖
        praise = 2;
        res.send("2");

    }else {
        //六等奖
        praise = 1;
        res.send("1");
    }
});







//其它文件
app.all("*",(req,res)=>{
    res.sendFile(__dirname + req.path);
});


app.listen(8080);