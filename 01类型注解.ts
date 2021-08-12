// 类型注解:是一种轻量级的为变量或者函数添加的约束
(()=>{
    // 传入的str必须是string类型
    function a(str:string){
        return str+'欧力';
    }
let b='你好';
console.log(a(b));
})()