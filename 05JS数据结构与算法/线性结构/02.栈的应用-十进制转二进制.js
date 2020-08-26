// 封装栈类
function Stack() {
  // 栈中的属性
  this.items = [];
  // 栈的操作
  // 1. 将元素压入栈
  Stack.prototype.push = function (element) {
    this.items.push(element);
  }

  // 2. 从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop();
  }

  // 3. 查看一下栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  }

  // 4. 判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  }

  // 5. 获取栈中元素的个数
  Stack.prototype.size = function () {
    return this.items.length;
  }

  // 6. toString 方法
  Stack.prototype.toString = function () {
    let resString = '';
    for (let i = 0; i < this.items.length; i++) {
      resString += this.items[i] + ' ';
    }
    return resString;
  }
}

/**
 * 十进制转二进制的函数
 * @param {Number} decNumber
 * @return {Number}
 */

function dec2bin(decNumber) {
  // 1. 定义栈对象
  let stack = new Stack();

  // 2. 循环取余取商
  while (decNumber > 0) {
    // 2.1. 获取余数，并压入栈中
    stack.push(decNumber % 2);

    // 2.2. 获取商数，进行下一次取余取商
    decNumber = Math.floor(decNumber / 2);
  }

  // 3. 从栈中取出 0 和 1
  let binaryString = '';
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }
  return binaryString;
}

console.log(dec2bin(100));
console.log(dec2bin(10));
console.log(dec2bin(1000));
