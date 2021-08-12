// 泛型:在定义函数，接口，类的时候不能预先确定使用的数据的类型，而是在使用的时候再确定，函数名后加<T>，也可以是多个参数类型<K,V>
(()=>{
    // 根据数据和一个数字产生一个数组
function get<T>(value:T,count:number):T[]{
    const arr:T[]=[];
    for(let i=0;i<count;i++){
        arr.push(value)
    }
    return arr
}
console.log(get(123,2));
console.log(get<string>('欧力',2).join(''));

})()