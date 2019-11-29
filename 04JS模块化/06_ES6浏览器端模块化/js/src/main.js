// 引入其他的模块
// 语法：import  xxx form "路径"

// 引入第三方模块
import $ from 'jquery';

// 引入自定义模块
import { foo, bar } from './module1';  // 引入常规暴漏的模块：引入的时候使用对象的结构赋值，需要多少拿多少
import { fun1, fun2 } from './module2';
// 引入默认暴漏的模块，暴漏的是什么就怎么使用
import module3 from './module3';



// console.log(module1, module2);
foo();
bar();
fun1();
fun2();

module3.foo();

$('body').css('background', 'green');