// 封装二叉搜索树
function BinarySearchTree() {
  // 节点类
  function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // 属性
  this.root = null; // 根节点

  // 方法
  // 插入数据的方法：对外给用户调用的方法
  BinarySearchTree.prototype.insert = function (value) {
    // 1. 根据 value 创建新节点
    let newNode = new Node(value);

    // 2. 判断是不是根节点
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // 内部使用的插入节点的方法
  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.value > node.value) { // 比原节点大则向右查找
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    } else { // 比源节点小则向左查找
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    }
  }

  // 树结构的遍历
  // 先序遍历
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    if (this.root == null) {
      console.log('空树');
    } else {
      this.preOrderTraversalNode(this.root, handler);
    }
  }

  // 先序遍历节点规则
  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    // 非空则按照先序遍历规则遍历该节点和它的孩子节点
    if (node != null) {
      // 1. 处理当前节点数值
      handler(node.value);

      // 2. 遍历左子树
      this.preOrderTraversalNode(node.left, handler);

      // 3. 遍历右子树
      this.preOrderTraversalNode(node.right, handler);
    }
  }

  // 中序遍历
  BinarySearchTree.prototype.midOrderTraversal = function (handler) {
    if (this.root == null) {
      console.log('空树');
    } else {
      this.midOrderTraversalNode(this.root, handler);
    }
  }

  // 中序遍历节点规则
  BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
    // 非空则按照中序遍历规则遍历该节点和该节点的孩子节点
    if (node != null) {
      // 遍历该节点的左子树
      this.midOrderTraversalNode(node.left, handler);
      // 遍历该节点
      handler(node.value);
      // 遍历该节点的右子树
      this.midOrderTraversalNode(node.right, handler);
    }
  }

  // 后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    if (this.root == null) {
      console.log('空树');
    } else {
      this.postOrderTraversalNode(this.root, handler);
    }
  }

  // 后序遍历节点规则
  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    // 节点非空则按照后序遍历规则遍历该节点与该节点的孩子节点
    if (node != null) {
      // 后序遍历节点的左子树
      this.postOrderTraversalNode(node.left, handler);
      // 后序遍历节点的右子树
      this.postOrderTraversalNode(node.right, handler);
      // 遍历该节点
      handler(node.value);
    }
  }

  // 获取最大值
  BinarySearchTree.prototype.max = function () {
    let node = this.root;
    let value = node.value;
    while (node.right != null) {
      node = node.right;
      value = node.value;
    }
    return value;
  }

  // 获取最小值
  BinarySearchTree.prototype.min = function () {
    let node = this.root;
    let value = node.value;
    while (node.left != null) {
      node = node.left;
      value = node.value;
    }
    return value;
  }

  // 查找特定的 value 值
  BinarySearchTree.prototype.search = function (value) {
    let node = this.root;
    while (node != null) {
      if (value < node.value) { // 要查找的节点比当前节点大，则往左子树上去查找
        node = node.left;
      } else if (value > node.value) { // 要查找的节点比当前节点小，则往右子树上去查找
        node = node.right;
      } else {
        // 否则则查找到了（相等）
        return true;
      }
    }
    return false;
  }

  // 二叉搜索树的删除操作
  BinarySearchTree.prototype.remove = function (value) {
    // 1. 寻找要杀你出的节点
    // 1.1 定义变量，保存一些信息
    let current = this.root;
    let parent = null;
    let isLeftChild = true;

    // 1.2 开始寻找要删除的系欸但
    while (current.value != value) {
      parent = current;
      if (value < current.value) { // 查找左子树
        isLeftChild = true;
        current = current.left;
      } else { // 查找右子树
        isLeftChild = false;
        current = current.right;
      }

      // 某种情况：已经找到了最后的节点，依然没有找到对应的 value
      if (current == null) return false;
    }

    // 2. 根据对应的情况删除节点
    // 2.1 删除的节点没有子节点，即叶子节点
    if (current.left == null && current.right == null) {
      if (current == this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // 2.2 删除的节点有一个子节点
    else if (current.left == null) { // 只有右子树
      if (current == this.root) {
        this.root = current.left;
      } else if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    } else if (current.right == null) { // 只有左子树
      if (current == this.root) {
        this.root = current.right;
      } else if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    }

    // 2.3 删除的节点有两个子节点
    else {
      // 1. 获取后继节点
      let successor = this.getSuccessor(current);

      // 2. 判断是否是根节点
      if (this.root == null) {
        rhis.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }

      successor.left = current.left;
    }

    return true;
  }

  // 查找后继节点
  BinarySearchTree.prototype.getSuccessor = function (delNode) {
    // 1. 定义变量
    let successorParent = delNode;
    let successor = delNode;
    let current = delNode.right;

    // 2. 寻找节点
    while (current != null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    // 3. 如果后继结点不是删除的节点的右节点
    if (successor != delNode.right) {
      successorParent.left = successor.right;
      successor.right = delNode.right;
    }

    return successor;
  }
}

// 测试
let bst = new BinarySearchTree();

bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

let potStr = '';
bst.preOrderTraversal(v => potStr += v + ' ');
console.log(potStr);

let motStr = '';
bst.midOrderTraversal(v => motStr += v + ' ');
console.log(motStr);

let postStr = '';
bst.postOrderTraversal(v => postStr += v + ' ');
console.log(postStr);

console.log(bst.max());
console.log(bst.min());

console.log(bst.search(25));
console.log(bst.search(24));
console.log(bst.search(23));

if (bst.remove(8)) {
  motStr = '';
  bst.midOrderTraversal(v => motStr += v + ' ');
  console.log(motStr);
}

if (bst.remove(7)) {
  motStr = '';
  bst.midOrderTraversal(v => motStr += v + ' ');
  console.log(motStr);
}
