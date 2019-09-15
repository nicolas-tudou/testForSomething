/**
 * 1、定义一个生成二维数组的函数
 * 2、将二维数组转换成为稀疏数组
 * 3、将稀疏数组恢复成为二维数组
 */
function getArray(row, col, defaultVal) {
  let arr = new Array()
  while (row--) {
    arr.push(new Array(col).fill(defaultVal))
  }
  return arr
}

/**
 * 1、读取二位数组的行列值
 * 2、遍历数组获取二位数组的有效值
 */
function getSparse(arr, defaultVal) {
  let res = []
  res.push([arr.length, arr[0].length, defaultVal])
  arr.forEach((row, i) => {
    row.forEach((num, j) => {
      if (num !== defaultVal) {
        res.push([i, j, num])
      }
    })
  })
  return res
}

/**
 * 1、根据稀疏数组的第一行生成原二维数组
 * 2、根据稀疏数组的其他行数据生成整个二位数组
 */
function getOriginArr (sparse) {
  let res = new Array()
  for (let i = 0; i < sparse[0][1]; i++) {
    res.push(new Array(sparse[0][1]).fill(sparse[0][2]))
  }
  for (let j = 1; j < sparse.length; j++) {
    res[sparse[j][0]][sparse[j][1]] = sparse[j][2]
  }
  return res
}

let originAarr = getArray(11, 11, 0)
originAarr[1][3] = 7
originAarr[5][3] = 7
originAarr[9][7] = 7
console.log('origin array:\n', originAarr, '\n')
let sparseArr = getSparse(originAarr, 0)
console.log('sparse array:\n', sparseArr, '\n')
let finalArr = getOriginArr(sparseArr)
console.log('origin array:\n', finalArr, '\n')