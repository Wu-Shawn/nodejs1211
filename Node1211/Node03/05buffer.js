/*
*js语法里面只有字符串数据类型，没有二进制类型
*buffer 缓冲区（暂时存放在内存里的一段数据）
*buffer 单位使用16进制 取值范围0-255  8位
**/

//new Buffer(长度)
var buff1 = new Buffer(10);

//填充
//buff.fill(值，起始偏移位,结束位)
buff1.fill(255,0);
console.log(buff1);

//通过数组的形式创建
var buff2 = new Buffer([1,255,0xb3]);
console.log(buff2);
//通过字符串的形式创建  一个汉字占3位
var buff3 = new Buffer("吴显毅");
console.log(buff3);

var buff4 = new Buffer([0xe5,0x90,0xb4]);
console.log(buff4.toString());

var buff5 = new Buffer([0xe5,0x90,0xb4,0xe6, 0x98]);
var buff6 = new Buffer([0xbe,0xe6,0xaf,0x85,0xe5,0x92,0x8c,0xe5, 0xbc,0xa0,0xe5,0x8b,0x87]);
//buffer 不能用+拼接
var buff7 = buff5+buff6;
console.log(buff7.toString());
//buffer 用 concat 占用内存极高，不建议使用
console.log(Buffer.concat([buff5,buff6]).toString());

//字符串拼接模块
var stringDecoder = require("string_decoder").StringDecoder;
var decoder = new stringDecoder();
console.log(decoder.write(buff5));
console.log(decoder.write(buff6));




