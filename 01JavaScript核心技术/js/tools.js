// 定义一个函数，用来获取指定元素的当前的样式
// obj要获取样式的元素,name要获取的样式名
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        // 不加window.则作为变量去寻找
        // 常规浏览器-具有getComputedStyle()方法
        return getComputedStyle(obj, null)[name];
    } else {
        // IE8以下
        return obj.currentStyle[name];
    }
}

// 尝试创建一个左移简单移动的函数，
/*
参数：
    obj：要执行移动的DOM元素对象，
    attr：要修改的style样式名，比如left、top、width、height
    target：执行移动目标位置，
    speed：移动速度,
    callback：回调函数，动画执行完毕，调用回调函数
*/
function move(obj, attr, target, speed, callback) {
    // 关闭上一个定时器，避免多次点击叠加定时器使移速加快
    clearInterval(obj.timer);

    // 获取#box1当前left值
    let currentVal = parseInt(getStyle(obj, attr));
    // 如果left是从0->target方向增加，则是向右移动speed为正
    // 如果left是从target->0方向减小，则是向做移动speed为负
    if (currentVal > target) {
        // 此时速度为负值
        speed = -speed;
    }

    // 使用定时器来实现持续修改left值实现持续右移
    // 向obj中添加一个timer属性，用来保存对象自己的定时器
    obj.timer = setInterval(() => {
        // 获取#box1目前left值
        let oldVal = parseInt(getStyle(obj, attr));
        // 在旧值的基础上增加
        let newVal = oldVal + speed;

        // 当向右移的时候要判断newLeftVal是否大于target，左移的时候要判断newLeftVal是否小于target
        if ((speed > 0 && newVal > target) || (speed < 0 && newVal < target)) {
            newVal = target;
        }

        // 设置#box1 left样式
        obj.style[attr] = newVal + "px";

        // 当移动到target时停止
        if (newVal === target) {
            clearInterval(obj.timer);
            // 动画执行完毕之后执行，传递就执行
            callback && callback();
        }

    }, 30);
}