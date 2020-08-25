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

// 栈的使用
let s = new Stack();
s.push(100);
s.push(123);
s.push(20);
s.push(10);
console.log(s);

s.pop();
s.pop();
console.log(s);

console.log(s.peek());

console.log(s.isEmpty());

console.log(s.size());

console.log(s.toString());
