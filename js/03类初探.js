// ts书写es6中的类
(() => {
    //定义一个类
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
    // 定义一个人
    const person = new Person('欧', '力');
    // 定义一个方法
    function a(person) {
        return person.firstName + person.lastName;
    }
    // 输出
    console.log(a(person));
})();
