// 类:可以理解为模板，通过模板实例化对象
(() => {
    class Person {
        // 定义构造函数，可以指定name等的属性值
        constructor(name = '何超', age = 20, sex = '男') {
            // 更新对象中的属性数据
            this.name = name;
            this.age = age;
            this.sex = sex;
        }
        // 定义实例的方法
        sayHi(str) {
            console.log('大家好，很高兴见到你们' + str);
        }
    }
    let person = new Person('欧力', 20, '男');
    person.sayHi('呵呵');
    console.log('我的名字叫' + person.name);
    let person2 = new Person();
    console.log(person2.name);
    // 类的继承
    class Student extends Person {
        constructor(name, age, sex) {
            // 通过super关键字调用父类中的属性
            super(name, age, sex);
        }
        sayHi() {
            super.sayHi('哈哈');
        }
    }
    const student = new Student('何超', 20, '男');
    student.sayHi();
})();
