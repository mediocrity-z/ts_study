// 存取器:有效的控制对对象中成员的访问，通过setters和getters
(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        // 读取器
        get fullname() {
            return this.firstname + this.lastname;
        }
        // 设置器，即外部把值赋值给fullname属性
        set fullname(val) {
            let temp = val.split('');
            this.firstname = temp[0];
            this.lastname = temp[1];
        }
    }
    const person = new Person('欧', '力');
    // 获取该成员的属性值
    console.log(person.fullname);
    // 设置该成员的属性值
    person.fullname = '何超';
    console.log(person.fullname);
})();
