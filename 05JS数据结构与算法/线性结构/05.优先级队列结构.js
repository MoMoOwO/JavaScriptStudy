// 封装优先级队列
function PriorityQueue() {
  // 在 PriorityQueue 中创建一个类，可以理解为内部类
  function QueueElement(element, priority) {
    this.element = element;
    this.priority = priority;
  }
  // 属性
  this.items = [];

  // 方法
  // 1. 插入方法
  PriorityQueue.prototype.enqueue = function (element, priority) {
    // 1.1 创建 QueueElement 对象
    let queueElement = new QueueElement(element, priority);

    // 1.2 获取元素应该插入的位置
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      // 标识是否已被插入，因为在遍历比较时可能遍历一遍都比当前元素优先级小
      let added = false;
      let len = this.size();
      // 遍历比较添加
      while (len--) {
        if (queueElement.priority < this.items[len].priority) {
          this.items.splice(len + 1, 0, queueElement);
          added = true;
          break;
        }
      }
      // 遍历完所有元素，优先级都小于新插入的元素，则该元素插入到队头
      if (!added) {
        this.items.unshift(queueElement);
      }
    }
  }
  // 2. 从队列中删除前端元素
  PriorityQueue.prototype.dequeue = function () {
    return this.items.shift();
  }

  // 3. 查看前端的元素
  PriorityQueue.prototype.front = function () {
    return this.items[0];
  }

  // 4. 查看队列是否为空
  PriorityQueue.prototype.isEmpty = function () {
    return this.items.length === 0;
  }

  // 5. 查看队列中元素的个数
  PriorityQueue.prototype.size = function () {
    return this.items.length;
  }

  // 6. toString 方法
  PriorityQueue.prototype.toString = function () {
    let resString = '';
    for (let i = 0; i < this.items.length; i++) {
      resString += this.items[i] + ' ';
    }
    return resString;
  }
}

// 测试代码
let pq = new PriorityQueue();

pq.enqueue('abc', 100);
pq.enqueue('cba', 110);
pq.enqueue('bca', 10);
pq.enqueue('cab', 50);
pq.enqueue('bac', 200);
console.log(pq);
