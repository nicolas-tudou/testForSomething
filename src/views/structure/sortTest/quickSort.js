function quickSort (arr) {
  sort(arr, 0, arr.length - 1)
  return arr
}
function sort (arr, left, right) {
  if (left >= right) return
  let mid = arr[left]
  let l = left
  let r = right
  while (l < r) {
    while (arr[r] >= mid && l < r) {
      r--
    }
    while (arr[l] <= mid && l < r) {
      l++
    }
    if (l < r) {
      arr[l] = arr[l] + arr[r]
      arr[r] = arr[l] - arr[r]
      arr[l] = arr[l] - arr[r]
    }
  }
  arr[left] = arr[l]
  arr[l] = mid
  sort(arr, left, l - 1)
  sort(arr, r + 1, right)
}

// let a = [100, 2, 32, 45, 112245, 5222, -1, 0, 41]
// console.log(quickSort(a))

module.exports = quickSort