/*
* stream 主要用于大数据文件处理
*
* */

var fs = require("fs");
var rs = fs.createReadStream("./1.mp4");
var ws = fs.createWriteStream("./2.mp4");

rs.pipe(ws);
/*
var count = 0;
//循环触发，每次读取64字节

re.on("data",(chunk)=>{
    count++;
    console.log(count);

    ws.write(chunk,(err)=>{
        if(err){
            console.error(err);
        }else {
            console.log("本次拷贝成功")
        }
    });
});
rs.on("end",()=>{
    //数据读取结束
    console.log("数据读写结束");
});
*/