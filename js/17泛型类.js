(() => {
    // 定义一个类，类中的属性值的类型不确定，方法中的参数和返回值的类型也不确定
    class Person {
    }
    // 实例化对象的时候，再确定泛型的类型
    const person = new Person();
    person.value = '欧力';
    person.add = function (x, y) {
        return x + y;
    };
    console.log(person.add('何', '超'));
    console.log(person);
    const n = new Person();
    n.value = 3;
    n.add = function (x, y) {
        return x + y;
    };
    console.log(n.add(5, 2));
    console.log(n.value);
})();
