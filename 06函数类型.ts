// 函数类型:通过接口的方式作为函数的类型来使用

// 定义一个接口，用来作为某个函数的类型来使用\
interface a{
// 定义一个调用签名
(source:string,subsr:string):boolean
}
// 定义一个函数，函数的类型即是a接口
const b:a=function(source:string,subsr:string):boolean{
return source.search(subsr)>-1
}
console.log(b('欧力','欧'));
