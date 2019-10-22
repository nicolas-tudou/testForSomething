function bubbleSort (arr) {
  let temp
  let flag
  for (let i = 0; i < arr.length; i++) {
    flag = false
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    if (!flag) break
  }
  return arr
}

function selectSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (i === minIndex) continue
    arr[i] = arr[i] + arr[minIndex]
    arr[minIndex] = arr[i] - arr[minIndex]
    arr[i] = arr[i] - arr[minIndex]
  }
  return arr
}
let exp = [1, 100, 5, 8, 6, 10]
console.log(selectSort(exp))