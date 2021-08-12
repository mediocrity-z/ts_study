(()=>{
    // 接口：对对象的状态和行为的描述

    // 定义一个接口,id为必须只读(不可更改)，name，age必须，sex非必须(?)
    interface Iperson{
       readonly id:number
        name:string
        age:number
        // 可有可无的
        sex?:string
    }
    const person:Iperson={
        id:1,
        name:'欧力',
        age:20
        
    }
    console.log(person);
    
})()