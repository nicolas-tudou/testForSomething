/**
 * 1、将数组按照步长划分成若干组
 * 2、从0到步长开始遍历 每次按照步长为增量使用插入排序排序子数组
 * 3、重新计算步长 并重复前面两步
 */
function shellSort (arr) {
  // 初始化增量
  let inc = Math.floor(arr.length / 2)
  let k
  let temp
  while (inc > 0) {
    // 从0开始遍历到增量inc
    for (let i = 0; i < inc; i++) {
      // 每次遍历都按照增量分组进行排序
      for (let j = i + inc; j < arr.length; j += inc) {
        // 初始化需要插入的位置
        k = j - inc
        // 记录需要插入的值
        temp = arr[j]
        // 按照步长inc依次遍历子数组 如果当前的值比需要插入的值大 那么将当前值往后移动一个位置
        while (k >= 0 && arr[k] > temp) {
          arr[k + inc] = arr[k]
          k -= inc
        }
        // 将需要插入的值放在指定位置上
        arr[k + inc] = temp
      }
    }
    inc = Math.floor(inc / 2)
  }
  return arr
}

// shellSort([85, 12, 9, 23, 2, 0, 52])

module.exports = shellSort