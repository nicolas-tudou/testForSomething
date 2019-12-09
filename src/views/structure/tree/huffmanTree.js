let file = require('./readAndWriteFile')
class Node {
  constructor (data, val) {
    this.data = data
    this.value = val
    this.left = null
    this.right = null
  }
}
function getStrNumber (str) {
  let res = {}
  for (let i = 0; i < str.length; i++) {
    if (res[str[i]]) {
      ++res[str[i]]
    } else {
      res[str[i]] = 1
    }
  }
  return res
}

function huffmanTree (map) {
  let res = []
  for (key in map) {
    res.push(new Node(key, map[key]))
  }
  let node1 = null
  let node2 = null
  let newNode = null
  res.sort((a, b) => a.value - b.value)
  while (res.length > 1) {
    res.sort((a, b) => a.value - b.value)
    node1 = res[0]
    node2 = res[1]
    newNode = new Node(null, node1.value + node2.value)
    newNode.left = node1
    newNode.right = node2
    res.shift()
    res.shift()
    res.push(newNode)
  }
  return res[0]
}

function getHuffmanCodes (root) {
  getCode(root.left, '0', '')
  getCode(root.right, '1', '')
}

function getCode (node, code, resStr) {
  if (node.data) {
    huffCodes[node.data] = resStr + code
  } else {
    if (node.left) getCode(node.left, '0', resStr + code)
    if (node.right) getCode(node.right, '1', resStr + code)
  }
}

function middleErgodic (node) {
  if (node.left) middleErgodic(node.left)
  console.log(node.data, node.value)
  if (node.right) middleErgodic(node.right)
}

function zipToBytes (str, huffCodes) {
  let resStr = ''
  let bytes = []
  for (let i = 0; i < str.length; i++) {
    resStr += huffCodes[str[i]]
  }
  // 补位的个数
  let leftN = 8 - resStr.length % 8
  let leftS = '00000000' + parseInt(leftN).toString(2)
  leftS = leftS.substring(leftS.length - 8, leftS.length)
  // 补位
  let rightS = ''
  while (leftN--) {
    rightS += '0'
  }
  resStr = leftS + resStr + rightS
  for (let i = 0; i < resStr.length; i+=8) {
    bytes.push(parseInt(resStr.substr(i, 8), 2).toString(16))
  }
  return bytes
}

function unZipToString (bytes, huffCodes) {
  let leftS = bytes[0]
  let str = ''
  let temp
  let res = ''
  let decodes = {}
  for (key in huffCodes) {
    decodes[huffCodes[key]] = key
  }
  for (let i = 1; i < bytes.length; i++) {
    temp = '00000000' + parseInt(bytes[i]).toString(2)
    temp = temp.substring(temp.length - 8, temp.length)
    str += temp
    temp = ''
  }
  str = str.substring(0, str.length - leftS)
  for (let j = 0; j < str.length; j++) {
    temp += str[j]
    if (decodes[temp]) {
      res += decodes[temp]
      temp = ''
    }
  }
  return res
}

let huffCodes = {}
let str = file.readFile('./test.txt')
console.log(str)
let huffTree = huffmanTree(getStrNumber(str))
// middleErgodic(huffTree)
getHuffmanCodes(huffTree)
let bytes = zipToBytes(str, huffCodes)
console.log(bytes)
let zipBytes = Buffer.from(bytes)
file.writeFile(zipBytes, './a.zip')
// let outputStr = unZipToString(bytes, huffCodes)
// console.log(outputStr)
