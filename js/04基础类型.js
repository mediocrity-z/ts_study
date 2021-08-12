// 基本语法:let 变量名:数据类型=值
// ts基础类型一开始定义的是什么基础类型，之后赋值的话也必须是这个类型
(() => {
    // 字符串类型
    let name = '欧力';
    console.log(name);
    // undefined和null都可以赋值给其他基础类型的变量
    let u = undefined;
    let n = null;
    let a = undefined;
    console.log(a);
    // 数组类型:两种定义方式
    // 第一种:let 变量名:数据类型[]=[值1，值2]
    // 第二种:泛型的写法 let 变量名: Array<数据类型>=[值1，值2]
    // 两种写法中的数据类型只能带一个参数
    let arr1 = [1, 2, 3];
    let arr2 = [2, 3, 4];
    console.log(arr1, arr2);
    // 元组类型:数组定义后，数据类型必须和定义数组时规定的数据类型保持一致
    let arr3 = ['欧力', 250, true];
    console.log(arr3);
    console.log(arr3[0].split(''));
    // 枚举类型enum
    // 枚举类型中的元素都有编号，从0开始
    let Color;
    (function (Color) {
        Color[Color["red"] = 1] = "red";
        Color[Color["yellow"] = 2] = "yellow";
        Color[Color["blue"] = 4] = "blue";
    })(Color || (Color = {}));
    const color = Color.yellow;
    // 输出2,4
    console.log(color, Color.blue, Color);
    // any类型：可以是各种不同基础类型
    // 当要在数组中保存的值类型不同，个数不确定，就可以使用any类型
    let arr = ['何超', 250];
    console.log(arr);
    console.log(arr[0].split(''));
    // void类型:表示没有任何类型
    // 在函数的小括号后面表明，表示该函数没有任何返回值
    function s() {
        console.log(111);
    }
    // 输出undefined
    console.log(s());
    // 对象类型
    function obj(o) {
        return o;
    }
    let o = {
        name: '欧力',
        age: 20
    };
    console.log(obj(o));
    // 联合类型:表示可以为多种类型中的一种
    function get(str) {
        // 类型断言:让编译器相信我知道类型，知道自己在干什么
        // 语法:<数据类型>变量名  或者  值 as 类型
        // 如果length存在，则说明str是字符串类型的，就不用使用toString()转化
        if (str.length) {
            return str.length;
        }
        // 函数值为string类型
        else {
            return str.toString().length;
        }
    }
    // 输出3
    console.log(get(123));
    // 类型推断:没有明确指定类型的时候会推测出一个类型
    let ab = 100;
    //  ab='1' 报错。此时将ab判断为number类型
    // 此时将t判断为any类型
    let t;
    t = 111;
    t = '欧力';
})();
