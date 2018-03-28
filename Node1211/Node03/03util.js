/*
* 功能：
* 1.实现继承
* 2.输出对象
* 3.验证类型
*
* */

//1.引入工具类
var util = require("util");

function Person(name,age) {
    this.name = name;
    this.age = age;
    this.sayHello = ()=>{
        console.log("hello");
    }
}

//定义一个原型方法  箭头函数不能应用于原型方法
Person.prototype.showName = function () {
    console.log(this.name)
};

function Student(name,age) {
    //要继承构造函数内部的属性和方法可以使用call和apply

    //call 将Person里的属性和方法替换自己的上下文
    //继承内部的方法
    //call使用参数列传递 apply使用数组传递
    //Person.call(this,name,age);
    Person.apply(this,[name,age]);

}

//util 只能继承原型链的属性和方法
// util.inherits(子类，父类);
util.inherits(Student,Person);

var studrntObj = new Student("xiaozhang","24");
studrntObj.sayHello();
studrntObj.showName();
console.log(studrntObj.name);



/**************************************************/
//定义类
class Car{
    //属性
    constructor(color,price){
        this.color = color;
        this.price = price;
    }
    //方法
    move(){
        console.log("move");
    }
}

var car = new Car("red","100W");
console.log(car.color);
car.move();

//Byd 继承Car
class Byd extends Car{
    constructor(color,price,speed){
        //父级的
        super(color,price);
        //自己加的
        this.speed = speed;
    }
    currSpeed(){
        console.log(this.speed);
    }

}

var byd = new Byd("蓝","2w","100");
byd.currSpeed();




//2.输出对象
console.log(studrntObj);

console.log(util.inspect(studrntObj));

//3.验证类型

console.log(typeof []);
//验证是否为数组类型
console.log(util.isArray([]));

