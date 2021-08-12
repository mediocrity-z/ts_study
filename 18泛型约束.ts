// 泛型不知道参数中有length这个属性
(()=>{
    // 该接口用来约束某个类型中必须有length这个属性
interface Ilength{
    length:number
}
function getLength<T extends Ilength>(x:T):number{
    return x.length
}
console.log(getLength<string>('ouli'));
console.log(getLength<number[]>([1,2,3]));
})()