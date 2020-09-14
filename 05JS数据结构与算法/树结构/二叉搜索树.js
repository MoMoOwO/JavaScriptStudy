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
  // 递归先序遍历
  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    // 非空则遍历
    if (node != null) {
      // 1. 处理当前节点数值
      handler(node.value);

      // 2. 遍历左子树
      this.preOrderTraversalNode(node.left, handler);

      // 3. 遍历右子树
      this.preOrderTraversalNode(node.right, handler);
    }
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
