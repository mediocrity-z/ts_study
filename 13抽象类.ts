// 抽象类:包含抽象方法，也可以包含实例方法，抽象类不能被实例化，主要是为了让子类进行实例化及实现内部的抽象方法
(()=>{
  abstract  class Animal{
    // 抽象方法
    abstract eat()
    // 实例方法
    sayHi(){
     console.log('你好');
    }
    }

    class Dog extends Animal{
        // 实现抽象类中的抽象方法，可以当作实例方法使用
     eat(){
         console.log('饱餐一顿');
     }
    } 
    const dog:Dog=new Dog();
    dog.eat();
    // 也可以调用抽象类中的实例方法
    dog.sayHi()
})()