// 将其他的模块汇集到主模块
let uniq = require('uniq'); // 引入第三方模块

let module1 = require('./modules/module1'); // 引入自定义模块
let module2 = require('./modules/module2');
let module3 = require('./modules/module3');

// 调用自定义模块暴漏的接口
module1.foo();
module2();
module3.foo();
module3.bar();

// 调用第三方模块
console.log(module3.arr);
let result = uniq(module3.arr);
console.log(result);

// 当前路径运行命令 node app