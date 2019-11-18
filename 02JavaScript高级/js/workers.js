// 斐波拉西斯数列 f(n) = f(n - 1) + f(n - 2)
// 1 1 2 3 5 8
function fibonacci(i) {
    return i < 2 ? 1 : fibonacci(i - 1) + fibonacci(i - 2); // 递归调用
}

console.log(this); // 分线程中全局对象不再是window，所以在分线程中不能改变界面
var onmessage = function (event) {
    var n = event.data; // 通过event.data获取发送来的数据
    console.log("分线程接收到主线程发送的数据：" + n);
    var result = fibonacci(n);
    postMessage(result); // 将获取到的数据发送会主线程
    console.log("分线程向主线程返回数据：" + result);
    //alert("sfsdf"); // 不能调用，alert使window的方法，在分线程不能调用
}