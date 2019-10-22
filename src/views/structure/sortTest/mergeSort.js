function mergeSort(arr) {
  if (arr.length < 2) return arr
  return sort(arr, 0, arr.length - 1)
}
function sort (arr, L, R) {
  if(L == R) {
    return
  }
  let mid = L + ((R - L) >> 1)
  sort(arr, L, mid)
  sort(arr, mid + 1, R)
  merge(arr, L, mid, R)
  return arr
}
function merge (arr, start, mid, end) {
  let temp = []
  let i = start
  let j = mid + 1
  while(i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i++])
    } else {
      temp.push(arr[j++])
    }
  }
  while (i <= mid) {
    temp.push(arr[i++])
  }
  while (j <= end) {
    temp.push(arr[j++])
  }
  for (i = 0; i < temp.length; i++) {
    arr[start + i] = temp[i]
  }
  return arr
}

module.exports = mergeSort