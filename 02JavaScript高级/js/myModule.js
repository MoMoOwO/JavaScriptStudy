function myModule() {
    // 私有数据，外部不能访问
    var msg = "A Message!"; 
    // 操作数据的函数
    function doSomething() {
        console.log("doSomething() " + msg.toUpperCase());
    }
    function doOtherthing() {
        console.log("doOtherthing() " + msg.toLowerCase());
    }
    // 向外暴漏对象(给外部使用的方法)
    return {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    };
}