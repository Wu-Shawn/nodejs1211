//git 测试
console.log("hello node");


{
    var a = 10;
    //let 作用域  只在当前代码段内有效
    let b = 11;
    console.log(b);
}
console.log(a);

//let在循环中的应用
var arr = [];
for (let i = 0;i<10;i++){
    arr[i] = function () {
        console.log(i);
    }
}
arr[6]();

//let 没有变量提升

//let 不允许重复定义


function a1() {

    function abc() {
        let a123 = "hello world123";
    }
    console.log(a123);
}
a1()
