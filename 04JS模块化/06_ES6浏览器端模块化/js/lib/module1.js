'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.foo = foo;
exports.bar = bar;
// 暴漏模块 常规暴漏-分别暴漏
function foo() {
    console.log('foo() module1');
}

function bar() {
    console.log('bar() module1');
}

var arr = exports.arr = [1, 2, 3, 4, 5];