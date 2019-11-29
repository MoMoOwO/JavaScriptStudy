'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 暴漏模块 常规暴漏-统一暴漏
function fun1() {
    console.log('fun1() module2');
}

function fun2() {
    console.log('fun2() module2');
}

exports.fun1 = fun1;
exports.fun2 = fun2;