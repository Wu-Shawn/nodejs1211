/*
* rwx  r:4  w:2  x:1
* 所有者  用户组  其他
*
* */


var fs= require("fs");
/*
//mkdir:创建目录
//fs.mkdir(目录名，读写权限,回调)
fs.mkdir("text","0777",(err)=>{
    if (err){
        console.error(err);
    }else {}
    console.log("成功")
});
*/

//读取目录
//同步
fs.readdir("text",(err,files)=>{
    if (err){
        console.error(err);
    }else {
        console.log(files);
    }
});

//目录详情
fs.stat("text",(err,files)=>{
    if (err){
        console.error(err);
    }else {
        console.log(files);
    }
})

//判断某个文件是否存在
fs.exists("text/1.txt",(bol)=>{
    if (bol){
        console.log("存在")
    }else{
        console.log("不存在")
    }
})

//改名
fs.rename("text/1.txt","text/2.text",(err)=>{
    if (err){
        console.error(err);
    }else {
        console.log("修改成功");
    }
})