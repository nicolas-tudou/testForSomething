function insertionSOrt (arr) {
  if (arr.length < 2) return arr
  let j = 1
  while (j < arr.length) {
    let t = arr[j]
    let insertIndex = j -1
    while (insertIndex >= 0 && arr[insertIndex] > t) {
      arr[insertIndex + 1] = arr[insertIndex]
      insertIndex--
    }
    arr[insertIndex + 1] = t
    j++
  }
  return arr
}

// let a = [100, 32, 56, 2, 5222, 0, 63, -1]
// console.log(insertionSOrt(a))
module.exports = insertionSOrt
