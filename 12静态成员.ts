// 静态成员:在类中通过static修饰的属性或方法,在使用的时候是通过类名.的方式调用的
(()=>{
class Person{
   static name1:string='欧力'
    constructor(){
        // this.name1=name  this是实例对象，name1是静态成员，实例对象不能直接调用它
    }
   static sayHi(){
        console.log('ringringring希望听到你说嗨');
        
    }
}

// 只能通过类名.的方式访问和更改静态成员
console.log(Person.name1);
Person.name1='何超';
console.log(Person.name1);
Person.sayHi()
})()