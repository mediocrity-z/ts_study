// 修饰符:主要是描述类中的成员(构造函数，属性，方法)的可访问性
// 类中的成员都有自己默认的修饰符public
// public:表示类的内外面都能访问到类中的成员
// private:外部无法访问该成员,包括子类
// protected:子类和内部可以访问该成员，外部无法访问
(()=>{
class Person{
  public  name:string
   public age:number
    // 构造函数
    constructor(name:string='欧力',age:number=20){
    this.name=name
    this.age=age
    }
    say(name:string){
     console.log(name+this.name);
     
    }
}
// 定义一个子类
class Student extends Person{
    name:string
    constructor(name:string){
        super(name)
    }
}
const person=new Person();
person.say('何超')


//readonly修饰符:关键字，修饰后该属性成员就不能在外部被随意更改了
//构造函数中，可以吧只读的属性成员进行修改
// 如果构造函数中没有传入参数，则外部也不能更改该属性成员
// 类中定义的方法也不能更改具有只读属性的属性成员
class Teacher{
   readonly name:string
    constructor(name:string){
        this.name=name
    }
}
const teacher:Teacher=new Teacher('欧胖');
// teacher.name='老宋' 只读的属性不可更改


// readonly也可以修饰构造函数中的参数(参数属性)
// 构造函数中的name参数，如果使用了readonly修饰符修饰后，该name参数可以称作参数属性，并且类会自动把name添加为属性成员，
// 外部也是不能修改这个name参数属性的值的
// name参数也可以用其他修饰符修饰，且类也会自动将其添加为属性成员
class Doctor{
constructor(readonly name:string){
    this.name=name
}
}
const doctor:Doctor=new Doctor('潘博士');
// doctor.name='' 不可更改name只读属性
})()