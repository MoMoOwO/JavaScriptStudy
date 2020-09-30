const dict = require('./dict');
const queue = require('./queue');

// 图结构的封装
function Graph() {
  // 属性：顶点（数组）/边（字典）
  this.vertexes = []; // 顶点
  this.edges = new dict.Dictionary(); // 边

  // 方法
  // 添加顶点
  Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v); // 直接往顶点数组中添加顶点信息
    // 添加该顶点相关的边信息的列表
    this.edges.set(v, []);
  }

  // 添加边
  Graph.prototype.addEdge = function (v1, v2) {
    this.edges.get(v1).push(v2);
    this.edges.get(v2).push(v1); // 无向图
  }

  // toString() 方法
  Graph.prototype.toString = function () {
    // 定义变量
    let resultString = '';

    // 遍历顶点数组
    for (let vertex of this.vertexes) {
      resultString += vertex + ' -> ';
      // 遍历该顶点对应的边信息
      for (let adjVertex of this.edges.get(vertex)) {
        resultString += adjVertex + ' ';
      }
    }

    resultString += '\n';

    return resultString;
  }

  // 初始化状态颜色
  Graph.prototype.initializeColor = function () {
    let colors = {};
    for (let vertex of this.vertexes) {
      colors[vertex] = 'white';
    }
    return colors;
  }

  // 广度优先遍历
  Graph.prototype.bfs = function (initV, handler) {
    // 1. 初始化颜色
    let colors = this.initializeColor();

    // 2. 创建队列
    let q = new queue.Queue();

    // 3. 将定点加入到队列中
    q.enqueue(initV);

    // 4. 循环从队列中取出元素
    while (!q.isEmpty()) {
      // 4.1 从队列中取出一个元素
      let v = q.dequeue();

      // 4.2 获取和定点相连的另外顶点
      let vList = this.edges.get(v);

      // 4.3 将 v 的颜色设置为灰色
      colors[v] = 'gray';

      // 4.4 遍历所有的顶点，并且加入到队列中
      for (let vertex of vList) {
        if (colors[vertex] === 'white') {
          colors[vertex] = 'gray';
          q.enqueue(vertex);
        }
      }

      // 4.5 访问节点
      handler(v);

      // 4.6 将点点设置为黑色
      colors[v] = 'black';
    }
  }

  Graph.prototype.dfs = function (initV, handler) {
    // 1. 初始化颜色
    let colors = this.initializeColor();

    // 2. 从某个顶点开始一次递归访问
    this.dfsVisit(initV, colors, handler);
  }

  // 递归深度优先访问顶点
  Graph.prototype.dfsVisit = function (v, colors, handler) {
    // 1. 将颜色设置为灰色
    colors[v] = 'gray';

    // 2. 访问顶点 v
    handler(v);

    // 3.访问与顶点 v 相邻的顶点
    let vList = this.edges.get(v);
    for (let vertex of vList) {
      if (colors[vertex] === 'white') {
        this.dfsVisit(vertex, colors, handler);
      }
    }

    // 4. 将顶点 v 设置为黑色
    colors[v] = 'black';
  }
}

// 测试代码
let graph = new Graph();

let myVertexes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

// 添加顶点
for (let vertex of myVertexes) {
  graph.addVertex(vertex);
}

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString());

// BFS
let BFSResult = '';
graph.bfs('A', v => {
  BFSResult += v + ' ';
});
console.log(BFSResult);

// DFS
let DFSResult = '';
graph.dfs('A', v => {
  DFSResult += v + ' ';
});
console.log(DFSResult);
