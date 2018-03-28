/*
let p = new Promise(function (resolve,reject) {
    //异步成功是调用resolve，否则调用reject
    //Promise 有三种状态：pending（等待态）、fulfilled（成功态）、rejected（失败态）
    //resolve、reject方法：resolve可以将pending转为 fulfilled；reject可以将pending转换为rejected
    if( 异步操作成功 ){
        resolve(data)
    }else{
        reject(err)
    }
});
*/


/*
//then方法：给then方法传两个函数作为参数，可以提供改变状态时的回调，第一个函数是成功的回调，第二个则是失败的回调。
p.then(function(data){ // resolve方法会将参数传进成功的回调
    console.log(data)
}, function(err){      // reject方法会将失败的信息传进失败的回调
    console.log(err)
});
*/

let p = new Promise(function (resolve,reject) {
    setTimeout(function () {
        let num = Math.random();
        if(num>0.5){
            resolve(num);
        }else {
            reject(num)
        }

    },1000)
    
});

p.then(function (num) {
    console.log("大于0.5的数",num)
},function (num) {
    console.log("小于0.5的数",num)
});



