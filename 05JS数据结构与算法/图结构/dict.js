// 封装字典的构造函数
function Dictionary() {
  // 字典属性
  this.items = {};

  // 字典的操作方法
  // 在字典中添加键值对
  Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
  }

  // 判断字典中是否存在某个 key
  Dictionary.prototype.has = function (key) {
    return this.items.hasOwnProperty(key);
  }

  // 从字典中移除元素
  Dictionary.prototype.remove = function (key) {
    // 1. 判断字典中是否存在这个 key
    if (!this.has(key)) return false;

    // 2. 从字典中删除 key
    delete this.items[key];
    return true;
  }

  // 根据 key 去获取 value
  Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  // 获取所有 keys
  Dictionary.prototype.keys = function () {
    return Object.keys(this.items);
  }
}

module.exports = { Dictionary };
