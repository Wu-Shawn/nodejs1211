var http = require("http");
var url = require("url");

var server = http.createServer((req,res) => {

    var fs = require("fs");
    var rs = fs.createReadStream("./html.html");
    var ws = fs.createWriteStream("./html.html");



    res.end();
});
server.listen(8080);