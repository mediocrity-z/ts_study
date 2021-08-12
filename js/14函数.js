// 函数
(() => {
    // 函数声明
    function add(x, y) {
        return x + y;
    }
    console.log(add(1, 2));
    // 默认参数：函数中的形参的可以指定一个初始值为默认值
    // 可选参数：在函数中的形参后面加上?表示该参数可传可不传
    function name(firstname, lastname = '比尔') {
        return lastname;
    }
    console.log(name());
    // 剩余参数:将剩余的参数放在一个字符串数组arguments当中
    function msg(str, ...args) {
        console.log(str, ...args);
    }
    msg('何', '超', '欧', '力');
    // 函数声明
    function a(x, y) {
        if (typeof x === 'string' && typeof y === "string") {
            return x + y;
        }
        else if (typeof x === 'number' && typeof y === 'number') {
            return x + y;
        }
        return false;
    }
    console.log(a('何', '超'));
    console.log(a(1, 2));
})();
