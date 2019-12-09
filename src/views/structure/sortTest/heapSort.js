/**
 * 堆排序算法
 * @param {Array} arr 排序的数组
 */
function heapSort (arr) {
  for (let len = arr.length; len > 1; len--) {
    // 调整至大顶堆
    adjustHeap(arr, Math.floor(len/2 - 1), len)
    // 交换未排序元素的第一位和最后一位
    arr[0] = arr[len - 1] + arr[0]
    arr[len - 1] = arr[0] - arr[len - 1]
    arr[0] = arr[0] - arr[len - 1]
  }
}
/**
 * 调整堆数组
 * @param {Array} arr 排序的数组
 * @param {Number} i 最后一个非叶子节点
 * @param {Number} length 排序的长度 每次递减
 */
function adjustHeap (arr, i, length) {
  // 每个节点开始循环子节点 直到达到指定的位置
  let k
  while (i >= 0) {
    // 子节点
    // arr[i * 2 + 1]
    // arr[i * 2 + 2]
    // 定义临时变量k 指向左子节点
    k = i * 2 + 1
    // 如果左节点小于右节点 则将k指向右节点 即子节点中较大的那个
    if (k + 1 < length && arr[i * 2 + 1] < arr[i * 2 + 2]) k++
    // 如果子节点中的较大值大于父节点 则将此子节点与父节点交换 大节点上移
    if (arr[i] < arr[k]) {
      arr[i] = arr[i] + arr[k]
      arr[k] = arr[i] - arr[k]
      arr[i] = arr[i] -arr[k]
    }
    // 前一个非叶子节点
    --i
  }
}

let arr = [1000,32,4,5,8,7,9,12,0,3,-6]
heapSort(arr)
console.log(arr)
