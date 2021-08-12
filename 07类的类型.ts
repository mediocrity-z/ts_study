// 类的类型:可以通过接口来实现
(()=>{
    // 定义一个接口
    interface a{
     ouli()
    }
    // 定义一个类
    class Person implements a{
        // 实现接口中的方法
           ouli(){
               console.log('我不是欧力');
           }
    }
   //定义另一个接口
    interface b{
        hechao()
    }

    // 当前这个类可以实现多个接口
    class Person2 implements a,b{
    ouli(){
        console.log('我不是曜神');
    }
    hechao(){
        console.log('我带你飞');
        
    }
    }
    let person=new Person();
    person.ouli();
    let person2=new Person2();
    person2.ouli();
    person2.hechao();

    // 接口也可以实现继承
    interface ab extends a,b{  }
    class Person3 implements ab{
        ouli(){
            console.log('又被克制了');
            
        }
        hechao(){
            console.log('又带飞了');
            
        }
    }
    let person3=new Person3();
    person3.ouli();
    person3.hechao()
})()