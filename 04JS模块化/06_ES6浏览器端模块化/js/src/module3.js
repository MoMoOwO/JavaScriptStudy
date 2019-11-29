// 暴漏模块 默认暴漏，可以暴漏任意数据类型，暴漏什么数据，接受的就是什么数据
// 语法：export default value
// export default () => {
//     console.log('我是默认暴漏的箭头函数');
// };

export default {
    msg: '默认暴漏',
    foo() {
        console.log(this.msg);
    }
}