// 设计哈希函数
// 1> 将字符串转成比较大的数字：hashCode
// 2> 将大的数字 hashCode 压缩到数组范围之内
/**
 *
 * @param {String} str
 * @param {Number} size
 * @returns {Number}
 */
function hashFunc(str, size) {
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

// 测试哈希函数
console.log(hashFunc('abc', 7)); // 4
console.log(hashFunc('cba', 7)); // 3
console.log(hashFunc('bac', 7)); // 6
console.log(hashFunc('cab', 7)); // 2
