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

  // 3. insert 将元素插入对应位置
  DoublyLinkedList.prototype.insert = function (position, data) {
    // 1. 越界判断
    if (position < -1 || position > this.length) return false;

    // 2. 根据 data 创建新节点
    let newNode = new Node(data);

    // 3. 判断插入位置
    if (this.length === 0) { // 源列表为空，直接插入
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 判断插入位置
      if (position === 0) { // 插入到第一个位置
        this.head.prev = newNode;
        newNode.net = this.head;
        this.head = newNode;
      } else if (position === this.length) { // 插入到最后一个位置
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else { // 插入任意中间位置
        let current = null;
        let index = 0;
        // 寻找插入位置
        if (position < this.length / 2) { // 插入节点在前半段，从前往后找
          current = this.head;
          while (index++ < position) {
            current = current.next;
          }
        } else { // 插入节点在后半段，从后往前找
          current = this.tail;
          while (index++ < this.length - position - 1) {
            current = current.prev;
          }
        }

        // 插入元素
        current.prev.next = newNode;
        newNode.prev = current.prev;
        newNode.next = current;
        current.prev = newNode;
      }
    }

    // 长度 +1
    this.length += 1;
    return true;
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

list.insert(2, 'ccc');
console.log(list.toString());;
list.insert(4, 'bbb');
console.log(list.toString());
