// 封装集合类
function Set() {
  // 属性
  this.items = {};

  // 方法
  // 1. add 添加一个项
  Set.prototype.add = function (value) {
    // 如果存在则返回 false
    if (this.has(value)) return false;

    // 否则添加到 items
    this.items[value] = value;
    return true;
  }

  // 2. has 判断集合中是否包含该元素
  Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value);
  }

  // 3. remove 删除对应元素
  Set.prototype.remove = function (value) {
    // 不存在则返回 false
    if (!this.has(value)) return false;

    delete this.items[value]; // 删除元素
    return true;
  }

  // 4. clear 清空 items
  Set.prototype.clear = function () {
    this.items = {};
  }

  // 5. size 返回 items 的元素个数
  Set.prototype.size = function () {
    return Object.keys(this.items).length;
  }

  // 6. values 以数组形式返回 items 中数据项
  Set.prototype.values = function () {
    return Object.keys(this.items);
  }

  // 7. union 并集
  Set.prototype.union = function (otherSet) {
    // this 集合对象 A, otherSet 结合对象 B
    // 7.1 创建新的集合
    let unionSet = new Set();

    // 7.2 将集合 A 中的元素添加到新的集合
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    // 7.3 将集合 B 中的元素添加到新的集合
    values = otherSet.values();
    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]); // 添加方法中会判断是否重复
    }

    // 7.3 返回并集
    return unionSet;
  }

  // 8. 交集
  Set.prototype.intersection = function (otherSet) {
    // this 集合 A, otherSet 集合 B
    // 8.1 创建新的集合
    let intersectionSet = new Set();

    // 8.2. 从 A 中取出所有元素挨个比较是否在 B 中，在则保存到交集中
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      otherSet.has(item) && intersectionSet.add(item);
    }

    return intersectionSet;
  }

  // 9. 差集
  Set.prototype.difference = function (otherSet) {
    // this 集合 A, otherSet 集合 B
    // 9.1 创建新的集合
    let differenceSet = new Set();

    // 9.2 从 A 中取出所有元素挨个比较是否在 B 中，不在则保存到较集中
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      otherSet.has(item) || differenceSet.add(item);
    }

    return differenceSet;
  }

  // 10. 子集
  Set.prototype.subSet = function (otherSet) {
    // this 集合 A, otherSet 集合 B
    // 遍历结合 A 所有元素，循环判断这些元素是否都在 B 中
    // 有一只不存在直接返回 false，遍历完都在 B 中则返回 true
    let values = this.values();
    for (let i = 0; i < values.length; i++) {
      let item = values[i];
      if (!otherSet.has(item)) return false;
    }
    return true;
  }
}

// 测试
/* let set = new Set();

console.log(set.add('abc'));
console.log(set.add('abc'));
console.log(set.add('cba'));
console.log(set.add('bca'));
console.log(set.add('cab'));
console.log('-----');

console.log(set.has('abc'));
console.log(set.has('ccc'));
console.log('-----');

console.log(set.remove('abc'));
console.log(set.remove('abc'));
console.log('------');

console.log(set.size());
console.log('------');

console.log(set.values());
console.log('------');

set.clear();
console.log(set.size()); */

let set1 = new Set();
set1.add('abc');
set1.add('acb');
set1.add('cba');
set1.add('cab');
set1.add('cdd');
console.log(set1.values());
let set2 = new Set();
set2.add('abc');
set2.add('cba');
set2.add('cab');
set2.add('ddc');
set2.add('ccc');
console.log(set2.values());
console.log('------');

console.log(set1.union(set2).values());
console.log('------');

console.log(set1.intersection(set2).values());
console.log('------');

console.log(set1.difference(set2).values());
console.log('------');

console.log(set1.subSet(set1));
console.log(set1.subSet(set2));
