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
  ArrayList.prototype.selectionSort = function () {
    // 1. 获取数组长度
    let len = this.array.length;

    // 2. 外层循环，从 0 开始取数据
    for (let i = 0; i < len - 1; i++) {
      // 内层循环，从 i + 1 开始寻找第 n 小的数据
      let min = i;
      for (let j = min + 1; j < len; j++) {
        if (this.array[j] < this.array[min]) min = j;
      }
      this.swap(min, i);
    }
  }

  // 插入排序
  ArrayList.prototype.insertionSort = function () {
    // 1. 获取数组长度
    let len = this.array.length;

    // 2. 外层循环：从第一个位置开始获取元素，向前面局部数据有序插入
    for (let i = 1; i < len; i++) {
      // 3. 内层循环：获取第 i 个未知元素，和前面的数据依次进行比较
      let temp = this.array[i];

      let j = i;
      while (this.array[j - 1] > temp && j > 0) {
        this.array[j] = this.array[j - 1];
        j--;
      }

      // 4. 将第 j 个位置的元素放置 temp
      this.array[j] = temp;
    }
  }

  // 希尔排序
  ArrayList.prototype.shellSort = function () {
    // 1. 获取数组长度
    let len = this.array.length;

    // 2. 初始化增量
    let gap = Math.floor(len / 2);

    // 3. while 循环，gap 不断减小
    while (gap >= 1) {
      // 4. 以 gap 为间隔进行分组，并组内排序
      for (let i = gap; i < len; i++) {
        let temp = this.array[i];
        let j = i;

        while (this.array[j - gap] > temp && j > gap - 1) {
          this.array[j] = this.array[j - gap];
          j -= gap;
        }
        // 5. 将第 j 个位置的元素赋值 temp
        this.array[j] = temp;
      }

      // 6. gap 减半
      gap = Math.floor(gap / 2);
    }
  }

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
//arr.bubbleSort();
//console.log(arr.toString());

// 选择排序
//arr.selectionSort();
//console.log(arr.toString());

// 插入排序
//arr.insertionSort();
//console.log(arr.toString());

// 希尔排序
arr.shellSort();
console.log(arr.toString());
