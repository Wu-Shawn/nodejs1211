/*
事件，又称订阅者模式、观察者模式
当主体对象发生变化时，会通知所有观察者对象，更新自己的行为
 */

//引入事件模块
var event = require("events");
var util = require("util");

//创建一个女神类
function Girl() {

}

//一个类要想有时间方法，就必须继承与Event模块
util.inherits(Girl,event);

function Boy(name,response) {
    this.name = name;
    //response 事件方法
    this.response = response;
}

var boy1 = new Boy("张三",() => {
    console.log("买包")
});
var boy2 = new Boy("小李",() =>{
    console.log("给张卡随便刷")
});

var girl = new Girl();

//注册事件
//.on(事件名，)
girl.on("unhappy",boy1.response);
girl.on("unhappy",boy2.response);
girl.on("unhappy",boy1.response);
//girl.addListener("unhappy",boy2.response);

//删除事件(移除单个)
girl.removeListener("unhappy",boy1.response);

//删除事件(删除所有)
girl.removeAllListeners("unhappy");

//只会被触发一次的事件
girl.once("die",() => {
    console.log("女神挂了")
});



//发射事件
girl.emit("unhappy");
// girl.emit("unhappy");
girl.emit("die");