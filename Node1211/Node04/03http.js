var http = require("http");
var url = require("url");
var fs = require("fs");
var formidable = require("formidable");

http.createServer((req,res)=>{
    //获取请求地址
    var urlStr = req.url;
    //获取请求方式 get post
    var urlmethod = req.method;
    //解析url
    var urlObj = url.parse(urlStr,true);
    // console.log(urlObj);
    //两种路径都可以 返回html
    if (urlObj.pathname == "/" || urlObj.pathname == "/index.html"){
        //1.读取html数据
        var rs = fs.createReadStream("./index.html");
        //2.将数据复制给res
        rs.pipe(res);

    }else if(urlObj.pathname == "/formApi"){
        //form

        //1.get请求获取数据
        //res.end(JSON.stringify(urlObj));

        //2.post请求获取数据
        // var args = "";
        // req.on("data",(chunk)=>{
        //     args += chunk;
        // });
        // req.on("end",()=>{
        //     console.log("读取完毕");
        //     console.log(args);
        //     res.end(args)
        // })

        //推荐使用的方法
        var form = new formidable.IncomingForm();
        //form.parse(req,(错误,参数,文件)=>)
        form.parse(req,(err,args,files)=>{
            if(err){
                console.error(err)
            }else {
                //参数
                console.log(args);
                //文件
                console.log(files);
                fs.createReadStream(files.fileId.path).pipe(fs.createWriteStream("./upload/" + files.fileId.name))
            }
            });

        res.end();
    }else if(urlObj.pathname == "/ajaxApi"){
        //ajax上传

        var date = new Date();
        res.end(date.toString());

    }else if (urlObj.pathname != "/favicon.ico"){
        //img  css 视频等文件  所有其他文件
        fs.createReadStream("." + urlObj.pathname).pipe(res);

    }



}).listen(8080);