// 函数类型:通过接口的方式作为函数的类型来使用
// 定义一个函数，函数的类型即是a接口
const b = function (source, subsr) {
    return source.search(subsr) > -1;
};
console.log(b('欧力', '欧'));
