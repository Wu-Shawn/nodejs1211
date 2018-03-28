/*
* fs：文件操作、目录操作
* */

//引入fs
var fs = require("fs");

//异步读
fs.readFile("./1.jpeg","",(err,data)=>{
    console.log(data)
});

//同步读
var data = fs.readFileSync("./1.jpeg");
console.log(data);

//写数据
//异步
fs.writeFile("./1.txt","我也写的数据",{
    //w覆盖写  a追加写
    flag:"a"
},(err)=>{
    if (err){
        console.error(err);
    }else {
        console.error("写入成功");
    }
});
//同步
fs.writeFileSync("./1.txt","同步写的数据",{flag:"a"});


