// 封装列表类
function ArrayList() {
  // 属性
  this.array = [];

  // 方法
  // 将数据插入到数组中的方法
  ArrayList.prototype.insert = function (item) {
    this.array.push(item);
  }

  // toString()
  ArrayList.prototype.toString = function () {
    return this.array.join('-');
  }
}
