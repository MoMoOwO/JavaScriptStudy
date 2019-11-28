(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// 引入自定义模块
let module1 = require('./module1');
let module2 = require('./module2');
let module3 = require('./module3');

// 调用模块暴漏的接口
module1.foo();
module2();
module3.foo();
module3.bar();

// 打包处理js文件
// 运行命令browserify js/src/app.js -o js/dist/bundle.js
},{"./module1":2,"./module2":3,"./module3":4}],2:[function(require,module,exports){
// module.exports = value 暴漏一个对象
module.exports = {
    msg: 'module1',
    foo(){
    console.log("foo()", this.msg);
    }
}
},{}],3:[function(require,module,exports){
// 暴漏一个函数 module.exports = function(){}
module.exports = function () {
    console.log('module2');
}
},{}],4:[function(require,module,exports){
// exports.xxx = value
exports.foo = function () {
    console.log("foo()", 'module3');
};

exports.bar = function () {
    console.log("bar()", 'module3');
};

exports.arr = [1, 2, 3, 4, 5, 4, 3, 1, 6, 11];
},{}]},{},[1]);
