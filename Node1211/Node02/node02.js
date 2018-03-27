var http = require("http");
var url = require("url");//引入url模块
//url模块用于解析url路径和参数
var server = http.createServer((req,res) =>{
    /*
    * url:
    *  '/'第一个前是请求地址
    *  '/'根目录
    *  '？'后是参数
    *   method： get post
    * */
    res.write('<head><meta charset="UTF-8"></head>');
    //接收到请求  解析url
    //参数1 url
    //参数2 默认为false  true ：query解析为对象
    var urlObj = url.parse(req.url,true);
    console.log(urlObj.query);
    if(urlObj.pathname == "/ajax"){
        // console.log(urlObj);
        //转换为json
        res.write(JSON.stringify(urlObj.query));
    }


    //结束请求
    res.end();

}).listen(8080);