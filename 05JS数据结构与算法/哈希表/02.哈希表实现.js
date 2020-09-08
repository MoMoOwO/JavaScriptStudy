// 哈希表实现
function HashTable() {
  // 属性
  this.storage = []; // 存储数据
  this.count = []; // 记录存储元素个数，用于计算装在因子（loadFactor），用于扩容和减少容量（内存占用）
  this.limit = 7; // 存储空间大小

  // 方法
  // 哈希函数
  HashTable.prototype.hashFunc = function (str, size) {
    // 1. 定义 hashCode 变量
    let hashCode = 0;

    // 2. 霍纳算法，计算 hashCode 值
    // str -> Unicode 编码
    for (let i = 0; i < str.length; i++) {
      hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    // 3. 取余操作
    let index = hashCode % size;
    return index;
  }

  // 插入和修改操作
  HashTable.prototype.put = function (key, value) {
    // 1. 根据 key 通过哈希函数找到对应的 index
    let index = this.hashCode(key, this.limit);

    // 2. 根据 index 取出对应的 bucket
    let bucket = this.storage[index];

    // 3. 判断 bucket 是否为 null
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4. 判断是否是修改操作，即遍历 bucket 查找是否有 key 相同的数据项
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        tuple[1] = value;
        return;
      }
    }

    // 5. 否则进行添加操作
    bucket.push([key, value]);
    // 长度+1
    this.count += 1;
  }
}
