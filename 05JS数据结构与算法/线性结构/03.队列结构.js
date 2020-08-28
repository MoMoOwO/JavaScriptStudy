// 封装队列类
function Queue() {
  // 属性
  this.items = [];

  // 方法
  // 1. 将元素加入到队列中
  Queue.prototype.enqueue = function (element) {
    this.items.push(element);
  }

  // 2. 从队列中删除前端元素
  Queue.prototype.dequeue = function () {
    return this.items.shift();
  }

  // 3. 查看前端的元素
  Queue.prototype.front = function () {
    return this.items[0];
  }

  // 4. 查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  }

  // 5. 查看队列中元素的个数
  Queue.prototype.size = function () {
    return this.items.length;
  }

  // 6. toString 方法
  Queue.prototype.toString = function () {
    let resString = '';
    for (let i = 0; i < this.items.length; i++) {
      resString += this.items[i] + ' ';
    }
    return resString;
  }
}

// 使用队列
let queue = new Queue();

// 将元素加入队列
queue.enqueue('abc');
queue.enqueue('bac');
queue.enqueue('cab');
queue.enqueue('acb');
queue.enqueue('cba');
queue.enqueue('bca');
console.log(queue);

// 从队列中删除元素
queue.dequeue();
console.log(queue);
queue.dequeue();
console.log(queue);

console.log(queue.front());

console.log(queue.isEmpty());

console.log(queue.size());

module.exports = Queue;
