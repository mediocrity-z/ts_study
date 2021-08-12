// 使用闭包的目的：封闭ts文件内的作用域，如果不使用闭包，两个文件中变量名相同时会产生冲突
(function(){
console.log('111');
let a=3;
console.log(a)
})()