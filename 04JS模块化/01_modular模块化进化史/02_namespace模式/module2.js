// namespace模式：简单对象封装
let obj = {
    msg: 'module2',  // 减少了全局变量
    foo() {
        console.log("foo()", this.msg);
    }
}