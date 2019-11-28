// IIFE模式：匿名函数自调用(闭包)
(function (window) {
    let msg = 'module3';
    function foo() {
        console.log("foo()", msg);
    }
    // 向外暴漏
    window.module3 = { foo };
})(window)