// 定义没有依赖的模块
define(function () {
    let name = "dataService";
    function getName() {
        return name;
    }
    // 暴漏模块
    return { getName };
})