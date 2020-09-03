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

  // 4. get 方法 获取对应位置节点
  DoublyLinkedList.prototype.get = function (position) {
    // 4.1 越界判断
    if (position < 0 || position >= this.length) return null;

    // 2. 获取元素
    let current = null;
    let index = 0;

    if (position < this.length / 2) {
      current = this.head;
      while (index++ < position) {
        current = current.next;
      }
    } else {
      current = this.tail;
      while (index++ < this.length - position - 1) {
        current = current.prev;
      }
    }

    return current.data;
  }

  // 5. indexOf 方法，获取对应元素在链表中的位置
  DoublyLinkedList.prototype.indexOf = function (data) {
    let index = 0;
    let current = this.head;

    while (current) {
      if (current.data !== data) {
        current = current.next;
        index += 1;
      } else {
        return index;
      }
    }

    return -1;
  }

  // 6. update 方法，更新对应位置的列表项
  DoublyLinkedList.prototype.update = function (position, newData) {
    // 6.1 越界判断
    if (position < 0 || position >= this.length) return false;

    // 6.2. 群钊节点
    let current = null;
    let index = 0;

    if (position < this.length / 2) {
      current = this.head;
      while (index++ < position) {
        current = current.next;
      }
    } else {
      current = this.tail;
      while (index++ < this.length - position - 1) {
        current = current.prev;
      }
    }

    current.data = newData;

    return true;
  }

  // 7. removeAt 删除对应位置
  DoublyLinkedList.prototype.removeAt = function (position) {
    // 7.1 越界判断
    if (position < 0 || position >= this.length) return null;

    // 7.2 寻找元素并删除
    let removedData = null;
    if (this.length === 1) { // 长度为 1 ，删除仅有的一个元素
      removedData = this.head.data;
      this.head = null;
      this.tail = null;
    } else {
      if (position === 0) { // 删除第一个节点
        removedData = this.head.data;
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) { // 删除最后一个节点
        removedData = this.tail.data;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else { // 删除中间任意节点
        let index = 0;
        let current = null;

        if (position < this.length / 2) {
          current = this.head;
          while (index++ < position) {
            current = current.next;
          }
        } else {
          current = this.tail;
          while (index++ < this.length - position - 1) {
            current = current.prev;
          }
        }

        removedData = current.data;
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }

    // 7.3 长度 -1
    this.length -= 1;
    return removedData;
  }

  // 8. remove 删除对应节点
  DoublyLinkedList.prototype.remove = function (data) {
    // 8.1 获取位置
    let index = this.indexOf(data);

    // 8.2 删除节点
    this.removeAt(index);
  }

  // 9. isEmpty 方法
  DoublyLinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  }

  // 10. size
  DoublyLinkedList.prototype.size = function () {
    return this.length;
  }

  // getHead
  DoublyLinkedList.prototype.getHead = function () {
    return this.head.data;
  }

  // getTail
  DoublyLinkedList.prototype.getTail = function () {
    return this.tail.data;
  }
}

// 测试代码
let list = new DoublyLinkedList();

list.append('abc');
list.append('cba');
list.append('cab');
list.append('bac');
list.append('bca');
console.log('------');

console.log(list.toString());
console.log(list.forwardString());
console.log('------');

list.insert(2, 'ccc');
console.log(list.toString());;
list.insert(4, 'bbb');
console.log(list.toString());
console.log('------');

console.log(list.get(0));
console.log(list.get(2));
console.log(list.get(5));
console.log('------');

console.log(list.indexOf('ccc'));
console.log(list.indexOf('bca'));
console.log('------');

console.log(list.update(-2, '222'));
console.log(list.update(2, 'bbb'));
console.log(list.toString());
console.log('------');

console.log(list.removeAt(2));
console.log(list.toString());
console.log('------');

list.remove('bbb');
console.log(list.toString());
console.log('------');

console.log(list.isEmpty());
console.log(list.size());
console.log(list.getHead());
console.log(list.getTail());
