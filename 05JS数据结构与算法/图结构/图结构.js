const module = require('./dict');

// 图结构的封装
function Graph() {
  // 属性：顶点（数组）/边（字典）
  this.vertexes = []; // 顶点
  this.edges = new module.Dictionary(); // 边

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
