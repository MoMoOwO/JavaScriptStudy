// 双向链表结构封装
function DoublyLinkedList() {
  //内部链表项类
  function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }

  // 属性
  this.head = null;
  this.tail = null;
  this.length = 0;

  // 方法
  // 1. append 方法
  DoublyLinkedList.prototype.append = function (data) {
    // 1.1 根据 data 新建一个链表项
    let newNode = new Node(data);

    // 1.2 判断添加的是否是第一个节点
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // 1.3 链表长度 +1
    this.length += 1;
  }

  // 2. 将列表转成字符串形式
  // 2.1 toString 方法
  DoublyLinkedList.prototype.toString = function () {
    return this.backwardString();
  }

  // 2.2 forwardString 方法
  DoublyLinkedList.prototype.forwardString = function () {
    let current = this.tail;
    let resultString = "";

    while (current) {
      resultString += current.data + " ";
      current = current.prev;
    }

    return resultString;
  }

  // 2.3 backwardString 方法
  DoublyLinkedList.prototype.backwardString = function () {
    // 2.3.1 定义变量
    let current = this.head;
    let resultString = "";

    // 2.3.2 依次向后遍历添加到字符串中
    while (current) {
      resultString += current.data + " ";
      current = current.next;
    }

    return resultString;
  }
}

// 测试代码
let list = new DoublyLinkedList();

list.append('abc');
list.append('cba');
list.append('cab');
list.append('bac');
list.append('bca');

console.log(list.toString());
console.log(list.forwardString());
