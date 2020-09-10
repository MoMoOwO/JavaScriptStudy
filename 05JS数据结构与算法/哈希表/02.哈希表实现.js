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
    let index = this.hashFunc(key, this.limit);

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

    // 6. 判断是否需要扩容操作
    if (this.count > this.limit * 0.75) {
      let newLimit = this.getPrime(this.limit * 2);
      this.resize(newLimit);
    }
  }

  // 获取元素
  HashTable.prototype.get = function (key) {
    // 1. 根据 key 获取对应的 index
    let index = this.hashFunc(key, this.limit);

    // 2. 根据 index 获取对应的 bucket
    let bucket = this.storage[index];

    // 3. 判断 bucket 是否为 null，为空则直接返回 null
    if (bucket == null) {
      return null;
    }

    // 4. 否则遍历 bucket 查找是否存在响应节点
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }

    // 5. 依然没有找到，那么返回 null
    return null;
  }

  // 删除操作
  HashTable.prototype.remove = function (key) {
    // 1. 根据 key 获取到存储微信 index
    let index = this.hashFunc(key, this.limit);

    // 2. 根据 index 找到对应的 bucket
    let bucket = this.storage[index];

    // 3. 判断 bucket 是否为空，为 null，则要删除的元素也不存在
    if (bucket == null) return null;

    // 4. 否则，遍历查找到对应元素
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        // 删除对应元素
        bucket.splice(i, 1);
        this.count -= 1;

        // 判断是否需要缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          let newLimit = this.getPrime(Math.floor(this.limit / 2));
          this.resize(newLimit);
        }
        return tuple[1];
      }
    }

    // 5. 依然没有找到该元素
    return null;
  }

  // 判断哈希表是否为空
  HashTable.prototype.isEmpty = function () {
    return this.count === 0;
  }

  // 判断哈希表中元素个数
  HashTable.prototype.size = function () {
    return this.count;
  }

  // 哈希表容量改变(扩容和压缩容量)的方法
  HashTable.prototype.resize = function (newLimit) {
    // 1. 保存旧的数组内容
    let oldStorage = this.storage;

    // 2. 重置所有的属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    // 1. 遍历 oldStorage 中所有的 bucket
    for (let i = 0; i < oldStorage.length; i++) {
      // 获取对应的 bucket
      let bucket = oldStorage[i];

      // 判断 bucket 是否为空
      if (bucket == null) continue; // 为空，直接向下执行下一次循环

      // bucket 中有数据，则遍历 bucket 将数据添加到新的数组中
      for (let j = 0; j < bucket.length; j++) {
        let tuple = bucket[j];
        this.put(tuple[0], tuple[1]);
      }
    }
  }

  // 判断一个数是否为质数
  HashTable.prototype.isPrime = function (num) {
    let temp = parseInt(Math.sqrt(num));
    for (let i = 2; i < temp; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 获取一个质数
  HashTable.prototype.getPrime = function (num) {
    while (!this.isPrime(num)) {
      num += 1;
    }
    return num;
  }
}

// 测试代码
let ht = new HashTable();

ht.put('abc', 123);
ht.put('cba', 321);
ht.put('acb', 132);
ht.put('bca', 312);

console.log(ht.get('acb'));

ht.put('acb', 111);
console.log(ht.get('acb'));

ht.remove('acb');
console.log(ht.get('acb'));
