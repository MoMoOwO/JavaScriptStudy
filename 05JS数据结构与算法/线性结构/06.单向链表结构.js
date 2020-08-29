// 单项链表的结构封装
function LinkedList() {
  // 内部节点类
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  // 属性
  this.head = null;
  this.length = 0;

  // 1. 向链表末尾追加链表项
  LinkedList.prototype.append = function (data) {
    let newNode = new Node(data);
    // 1.1 原链表为空，直接让 head 指向该节点
    if (this.length === 0) {
      this.head = newNode;
    } else { // 1.2 链表不为空，从 head 开始往后找到最后一个节点(next 属性为 null)
      let current = this.head;
      // 找到最后一个节点
      while (current.next) {
        current = current.next;
      }
      current.next = newNode; // 添加到最后
    }
    // 链表长度 +1
    this.length += 1;
  }

  // 2. toString 方法
  LinkedList.prototype.toString = function () {
    let listString = '';
    let current = this.head;

    // 遍历获取一个个的节点
    while (current) {
      listString += current.data + ' ';
      current = current.next;
    }
    return listString;
  }

  // 3. 在任意位置插入节点的方法
  LinkedList.prototype.insert = function (position, data) {
    // 3.1 验证输入是否合法
    if (position < 0 || position > this.length) return false;

    // 3.2 初始化新节点
    let newNode = new Node(data);

    // 3.3 判断新插入的节点的位置是否是第一个
    if (position === 0) { // 插入第一个位置
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0; // 记录寻址索引
      let current = this.head; // 插入位置
      let previous = null; // 插入位置前一个节点
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      // 插入节点，修改指针指向
      newNode.next = current;
      previous.next = newNode;
    }
    this.length += 1;

    return true;
  }

  // 4. get 方法，获取对应位置节点的值
  LinkedList.prototype.get = function (position) {
    // 4.1 判断索引是否越界
    if (position < 0 || position >= this.length) return null;

    // 4.2 从头向后查找
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }
    return current.data;
  }

  // 5. 获取数据的索引
  LinkedList.prototype.indexOf = function (data) {
    // 5.1 定义变量
    let current = this.head;
    let index = 0;

    // 5.2 查找
    while (current) { // 查找完
      if (current.data === data) {
        return index;
      } else {
        current = current.next;
        index += 1;
      }
    }
    return -1;
  }

  // 6. 更新指定位置的数据值
  LinkedList.prototype.update = function (position, newData) {
    // 6.1 判断位置是否越界
    if (position < 0 || position >= this.length) return false;

    // 6.2 查找对应位置节点
    let current = this.head;
    let index = 0;
    while (index++ < position) {
      current = current.next;
    }

    // 6.3 修改对应位置的数据值
    current.data = newData;
    return true;
  }

  // 7. 根据位置删除对应节点
  LinkedList.prototype.removeAt = function (position) {
    // 7.1 判断位置是否越界
    if (position < 0 || position >= this.length) return false;

    // 7.2 查找结点
    let current = this.head;
    let index = 0;
    let removeData = null;
    // 判断是不是第一个节点
    if (position === 0) {
      removeData = this.head.data;
      this.head = this.head.next;
    } else {
      while (index++ < position - 1) {
        current = current.next;
      }
      removeData = current.next.data;
      current.next = current.next.next;
    }

    // 7.3 长度 -1
    this.length -= 1;
    return removeData;
  }

  // 8. 根据数据删除节点
  LinkedList.prototype.remove = function (data) {
    // 8.1. 获取 data 在链表中的位置
    let position = this.indexOf(data);

    // 8.2 根据位置信息，删除节点
    return this.removeAt(position);
  }

  // 9. 判空
  LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
  }

  // 10. 获取链表长度
  LinkedList.prototype.size = function () {
    return this.length;
  }
}

// 测试代码
let list = new LinkedList();
list.append('abc');
list.append('acb');
list.append('bac');
list.append('bca');
list.append('cab');
list.append('cba');
console.log(list.toString());

if (list.insert(2, 'ccc')) {
  console.log(list.toString());
} else {
  console.log('insert error!');
}

console.log(list.get(2));
console.log(list.get(1000));

console.log(list.indexOf('cba'));
console.log(list.indexOf('cbas'));

if (list.update(2, 'bbb')) {
  console.log(list.toString());
} else {
  console.log('update error!');
}

console.log(list.removeAt(2));
console.log(list.toString());

console.log(list.remove('abc'));
console.log(list.toString());

console.log(list.isEmpty());
console.log(list.size());
