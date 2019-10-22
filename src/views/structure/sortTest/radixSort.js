function radixSort (arr) {
  let buckets = new Array(10)
  let index
  let max = arr[0]
  let maxLength = (max + '').length
  let j = 0
  while (j < maxLength) {
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i] && j === 0) {
        max = arr[i]
      }
      index = Math.floor(arr[i] / 10**j) % 10
      if (buckets[index]) {
        buckets[index].push(arr[i])
      } else {
        buckets[index] = [arr[i]]
      }
    }
    arr = []
    let curIndex = 0
    for (let i = 0; i < buckets.length; i++) {
      if (buckets[i]) {
        for (let j = 0; j <buckets[i].length; j++) {
          arr[curIndex + j] = buckets[i][j]
        }
        curIndex += buckets[i].length
        buckets[i] = null
      }
    }
    j++
  }
  return arr
}

module.exports = radixSort