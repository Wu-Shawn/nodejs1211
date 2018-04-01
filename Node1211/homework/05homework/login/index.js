var express = require("express");
var formidable = require("formidable");
var fs = require("fs");

var app = express();

var mongoose = require("mongoose");

var url = "mongodb://127.0.0.1:27017/login";
var db = mongoose.connect(url,(err)=>{
    if (err){
        console.error("连接失败："+err)
    }else {
        console.log("连接成功")
    }
});

var schema = new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    password:{type:String}

},{
    //集合名(表)
    collection:"zhuce"
});

var Model = mongoose.model("zhuce",schema);

//html 页面
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
//ajax
app.get("/ajax",(req,res)=>{
    Model.find({},(err,doc)=>{
        if (err){
            console.error(err)
        }else {
            console.log(doc);
            res.send(doc);
        }
    });
});

//post
app.post("/post",(req,res)=>{
    var form = new formidable.IncomingForm();
    form.parse(req,(err,args,files)=>{
        if(err){
            console.error(err);
        }else {
            Model.create(args,(err,doc)=>{
                if (err){
                    console.error(err)
                }else {
                    console.log(doc)
                }
            });
        }
    })
});


//其它文件
app.all("*",(req,res)=>{
    res.sendFile(__dirname + req.path);
});


app.listen(8080);

