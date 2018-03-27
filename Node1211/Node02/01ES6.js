//const 不可改变
const PI = 3.1415;
// PI = 3.14;
console.log(PI);



const person = {};

person.name = "123";

//解构
let [a,b,c] = [1,2,3];
console.log(a);

//Map
//可以把任何类型设为key
const m = new Map();
m.set("edition",6);//键是字符串
m.set(262,"standard");//键是整形
m.set(undefined,"un");

const  hello = function () {
    console.log("hello");
};
m.set(hello,"Hello ES6");//键是函数
//取值
console.log(m.get(undefined));
console.log(m.keys());//获取到所有key
console.log(m.values());//获取到所有values


var f = v => v - 2;
console.log(f(10));


var fun = (a,b)=>{
    var c = a+ b;
    return c;
};


