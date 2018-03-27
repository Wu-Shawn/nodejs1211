//node是模块化开发，将功能拆分成一个个模块
//每个模块只具有特定的功能
//需要使用相应功能时 引入模块即可

//var computer = require("./computer");
//使用node_modules下的公共模块
var computer = require("computer");
console.log(computer.Add(1,2));
computer.index.addx(10);
