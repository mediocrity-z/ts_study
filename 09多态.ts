// 多态:父类型的引用指向了子类型的对象,不同类型的对象针对相同的方法,产生了不同的行为
(()=>{
// 定义一个父类
class Animal{
    name:string
    constructor(name:string){
        this.name=name
    }
    run(dis:number=0){
        console.log(`跑了${dis}的距离`,this.name);
    }
}

// 定义一个子类
class Dog extends Animal{
name:string
constructor(name:string){
    super(name)
}
run(dis:number=5){
    console.log(`跑了${dis}的距离`,this.name);
}
}
// 再定义一个子类
class Pig extends Animal{
    name:string
    constructor(name:string){
        super(name)
        
    this.run=function(dis:number=10){
        console.log(`跑了${dis}的距离`,this.name);
    }
}
    }

    // 用父类类型去创建子类的实例对象
    // 父类型的引用指向了子类型的实例对象，子类型的实例对象能分别调用他们自己的方法
    const dog:Animal=new Dog('小狗');
    const pig:Animal=new Pig('小猪');
    dog.run();
    pig.run();

    function c(a:Animal):void{
      a.run()
    }
    c(dog);
    c(pig)
})()