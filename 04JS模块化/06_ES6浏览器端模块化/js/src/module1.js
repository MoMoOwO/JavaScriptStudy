// 暴漏模块 常规暴漏-分别暴漏
export function foo() {
    console.log('foo() module1');
}

export function bar() {
    console.log('bar() module1');
}

export let arr = [1, 2, 3, 4, 5]; 