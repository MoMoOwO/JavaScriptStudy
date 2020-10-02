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

  // 交换数组中两个位置的数据
  ArrayList.prototype.swap = function (m, n) {
    let temp = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = temp;
  }

  // 冒泡排序
  ArrayList.prototype.bubbleSort = function () {
    let len = this.array.length;

    for (let i = len - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          this.swap(j, j + 1);
        }
      }
    }
  }

  // 选择排序

  // 插入排序

  // 希尔排序

  // 快速排序

}

// 测试
let arr = new ArrayList();

arr.insert(66);
arr.insert(12);
arr.insert(87);
arr.insert(5);
arr.insert(100);
arr.insert(566);
arr.insert(23);

console.log(arr.toString());

// 冒泡排序
arr.bubbleSort();
console.log(arr.toString());
