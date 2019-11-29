// 暴漏模块 常规暴漏-统一暴漏
function fun1() {
    console.log('fun1() module2');
}

function fun2() {
    console.log('fun2() module2');
}

export { fun1, fun2 };