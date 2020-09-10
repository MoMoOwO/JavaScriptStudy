// 封装判断一个数字是否是质数的函数
// 质数只能被 1 和本身整除
function isPrime1(num) {
  // 循环判断是否有能够整除的数字
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime1(3));
console.log(isPrime1(4));
console.log(isPrime1(5));
console.log(isPrime1(6));
console.log(isPrime1(7));
console.log('------');

// 提高效率
function isPrime2(num) {
  // 只需要对比 1 - √num 即可
  let temp = parseInt(Math.sqrt(num));
  for (let i = 2; i <= temp; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime2(3));
console.log(isPrime2(4));
console.log(isPrime2(5));
console.log(isPrime2(6));
console.log(isPrime2(7));
