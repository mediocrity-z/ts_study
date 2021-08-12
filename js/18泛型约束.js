// 泛型不知道参数中有length这个属性
(() => {
    function getLength(x) {
        return x.length;
    }
    console.log(getLength('ouli'));
    console.log(getLength([1, 2, 3]));
})();
