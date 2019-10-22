const insertionSOrt = require('./insertionSOrt')
const mergeSort = require('./mergeSort')
const radixSort = require('./radixSort')
const shellSort = require('./shellSort')
const quickSort = require('./quickSort')
let arr = []
while (arr.length < 80000) {
  arr.push(Math.random() * 3000000)
}
let mD = new Date().getTime()
// mergeSort(arr)
// console.log('mergeSort: ', new Date().getTime() - mD)

// insertionSOrt(arr)
// console.log('insertionSOrt: ', new Date().getTime() - iD)

// radixSort(arr)
// console.log('radixSort: ', new Date().getTime() - mD)

// shellSort(arr)
// console.log('shellSort: ', new Date().getTime() - mD)

quickSort(arr)
console.log('quickSort: ', new Date().getTime() - mD)
