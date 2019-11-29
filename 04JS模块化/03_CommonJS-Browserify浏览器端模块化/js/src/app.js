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
// 运行命令browserify js/src/app.js -o js/dist/bundle.js  如果报错，使用提升到管理员权限的命令行运行命令
// 之后将生成的bundle.js在html中引入即可使用