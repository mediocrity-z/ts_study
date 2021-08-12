// ts中的接口:一种规范，需要让实例对象符合接口定义的规范
(() => {
    // 输出姓名的函数，规定传的参数符合Iperson接口的规范
    function a(person) {
        return person.firstName + person.lastName;
    }
    // 定义一个人
    const person = {
        firstName: '何',
        lastName: '超'
    };
    console.log(a(person));
})();
