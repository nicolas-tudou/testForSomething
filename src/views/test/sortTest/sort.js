import { merge } from "_rxjs@6.5.3@rxjs"

export const insertionSOrt = function (arr) {
  console.log('insertionSOrt', arr)
  if (arr.length < 2) return arr
  let j = 1
  while (j < arr.length) {
    let t = arr[j]
    for (let i = j - 1; i >= 0; i--) {
      if (arr[i] > t) {
        arr[i + 1] = arr[i]
        arr[i] = t
      }
    }
    j++
  }
  return arr
}
export const mergeSort = function (arr, start = 0, end) {
  console.log('mergeSort', arr)
  end = end || arr.length - 1
  if (start == end) return arr
  return merge(mergeSort(start, Math.ceil(start + end) / 2), mergeSort(Math.ceil((start + end) / 2, end)))
  function merge (pre, suff) {
    let res = [...pre, ...suff]
    console.log(pre, suff)
    return res
  }
}
