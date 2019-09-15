/**
 * 单链表
 */
class SingleLink {
  constructor () {
    this.head = new HeroNode(1, '', '')
  }
  add (node) {
    let temp = this.head
    while (true) {
      if (temp.next === null) {
        break
      }
      temp = temp.next
    }
    temp.next = node
  }
  addByOrder (node) {
    let temp = this.head
    while (true) {
      if (temp.next === null) {
        temp.next = node
        break
      }
      if (temp.next.no > node.no) {
        node.next = temp.next
        temp.next = node
        break
      }
      if (temp.next.no === node.no) {
        console.log('node(' + node + ') is already exist, please dont add twice.')
        break
      }
      temp = temp.next
    }
  }
  updata (node) {
    let temp = this.head
    let flag = false
    while (true) {
      if (temp.next === null) {
        break
      }
      if (temp.next.no === node.no) {
        flag = true
        break
      }
      temp = temp.next
    }
    if (flag) {
      node.next = temp.next.next
      temp.next = node
    } else {
      console.log(`node(${node}) is not exist.`)
    }
  }
  delete (node) {
    let temp = this.head
    let flag = false
    while (true) {
      if (temp.next === null) {
        break
      }
      if (temp.next.no === node.no) {
        flag = true
        break
      }
      temp = temp.next
    }
    if (flag) {
      let t = temp.next
      temp.next = temp.next.next
      t.next = null
    } else {
      console.log(`node(${node}) is not exist.`)
    }
  }
  query (no) {
    let temp = this.head
    let flag = false
    while (true) {
      if (temp.next === null) {
        break
      }
      if (temp.next.no === no) {
        flag = true
        break
      }
      temp = temp.next
    }
    if (flag) {
      return temp.next
    } else {
      return null
    }
  }
  display () {
    let temp = this.head
    while (true) {
      if (temp.next === null) {
        break
      }
      temp = temp.next
      console.log(`${temp}`)
    }
  }
}

class HeroNode {
  constructor (no, name, nickName) {
    this.no = no
    this.name = name
    this.nickName = nickName
    this.next = null
  }
  toString () {
    return `{ no: ${this.no}, name: ${this.name}, nickName: ${this.nickName} }`
  }
}

// let link = new SingleLink()
// let i = 0
// while (i < 5) {
//   link.add(new HeroNode(i, `name${i}`, `nick-${i}`))
//   i++
// }
// link.display()

let orderLink = new SingleLink()
let j = 5
while (j) {
  orderLink.addByOrder(new HeroNode(j, `name${j}`, `nickName${j}`))
  j--
}
// orderLink.display()
console.log(`${orderLink.query(3)}`)
orderLink.delete(new HeroNode(3, `name-${3}`, `nickName-${3}`))
console.log(orderLink.query(3))
// console.log('link after delete')
// orderLink.display()
