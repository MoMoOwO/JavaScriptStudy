// 定义不含依赖的模块
define(function (require, exports, module) {
    let msg = 'module2';
    function bar() {
        console.log(msg);
    }
    module.exports = bar;
})