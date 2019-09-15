class SingleCircleLink {
  constructor () {
    this.first = null
    this.tail = null
  }
  add (nums) {
    if (nums < 1) {
      console.log('nums of node is invalid.')
      return
    }
    for (let i = 1; i <= nums; i++) {
      if (!this.first) {
        this.first = new Node(i, 'name-' + i)
        this.first.next = this.first
        this.tail = this.first
      } else {
        let temp = new Node(i, 'name-' + i)
        this.tail.next = temp
        temp.next = this.first
        this.tail = temp
      }
    }
  }
  display () {
    let temp = this.first
    while (true) {
      console.log(`${temp}`)
      if (temp.next === this.first) {
        break
      }
      temp = temp.next
    }
  }
}

class Node {
  constructor (no, name) {
    this.no = no
    this.name = name
    this.next = null
  }
  toString () {
    return `{no: ${this.no}, name: ${this.name}}`
  }
}

/**
 * 约瑟夫问题
 * @fucntion 寻找依次出圈的索引
 * @param {Object} sLink 用于查找的循环链表
 * @param {Number} startN 开始计数的位置
 * @param {Number} num 计数的最大值
 */
function countLoop (sLink, startN, num) {
  for (let i = 0; i < startN - 1; i ++) {
    sLink.first = sLink.first.next
    sLink.tail = sLink.tail.next
  }
  while (true) {
    if (sLink.first === sLink.tail) {
      console.log('count no: ', sLink.first.no)
      break
    }
    for (let j = 0; j < num - 1; j++) {
      sLink.first = sLink.first.next
      sLink.tail = sLink.tail.next
    }
    console.log('count no: ', sLink.first.no)
    sLink.tail.next = sLink.first.next
    sLink.first = sLink.first.next
  }
}

let sCLink = new SingleCircleLink()
sCLink.add(5)
sCLink.display()
console.log('cout start: ')
countLoop(sCLink, 1, 2)
