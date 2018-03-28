

//fs  处理文件的组件  可以读写文件
var fs = require("fs");

//异步
//参数1：文件名
//参数2：编码格式
//参数3：回调函数
/*
fs.readFile("./1.txt","utf-8",(err,data) => {

    console.log(err);//错误
    console.log(data);//文本内容
});
*/



//同步

var data = fs.readFileSync("./1.txt","utf-8");
console.log(data);