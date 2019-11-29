// 定义不含依赖的模块
define(function (require, exports, module) {
    let data = 'module3';
    function fun() {
        console.log(data);
    }
    exports.module3 = { fun };
})