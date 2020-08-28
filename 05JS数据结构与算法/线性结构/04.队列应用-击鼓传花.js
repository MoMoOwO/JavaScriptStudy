/**
 * ! 击鼓传花游戏规则：
 * ! 班级中玩一个游戏，所有学生围成一圈，从某位同学手里开始向旁边的同学传一束花，
 * ! 这时候某个人（比如班长），在击鼓，鼓声停下的一刻，花落在谁手里，谁就出来表演节目
 * ! 修改一下游戏规则：
 * ! 几个朋友一起玩一个游戏，围成一圈，开始数数，数到某个数字的人自动淘汰，
 * ! 最后剩下的这个人会获得胜利，请问最后剩下的是原来在哪一个位置上的人?
 *
 * ! 封装一个基于队列的函数
 * ! 参数：素有参与人的姓名，基于的数字   结果：最终剩下的一人的姓名
 */
const Queue = require('./03.队列结构');

// 封装击鼓传花的函数
/**
 *
 * @param {Array} nameList
 * @param {Number} num
 * @return {Number}
 */
function passGame(nameList, num) {
  // 1. 创建一个队列结构
  let queue = new Queue();

  // 2. 将所有人放入队列中
  for (let i = 0; i < nameList.length; i++) {
    queue.enqueue(nameList[i]);
  }

  // 3. 开始数数字
  while (queue.size() > 1) {
    // 不是数到 num 的话则从队列中取出放到队尾
    // 数到 num 的直接出队
    // 3.1 num 之前的，取出放到队尾
    for (let i = 0; i < num - 1; i++) {
      queue.enqueue(queue.dequeue());
    }
    // 3.2 数到 num 的人直接从队列中删除
    queue.dequeue();
  }

  // 4. 获取剩下的人
  let endName = queue.front();
  let index = nameList.indexOf(endName);
  return `最后剩下：${endName}，在原数组中位置为：${index}`;
}

let names = ['Lily', 'Lucy', 'Tom', 'Lilei', 'Sam'];
console.log(passGame(names, 3));
