class DoubleLink {
  constructor () {
    this.head = new Node(0, '')
  }
  add (node) {
    let temp = this.head
    while (temp.next) {
      temp = temp.next
    }
    temp.next = node
    node.pre = temp
  }
  addByOrder (node) {
    if (this.query(node.no)) {
      console.log(`this node ${node} is already exist.`)
      return
    }
    let temp = this.head
    let flag = false
    while (temp.next) {
      if (temp.next.no > node.no) {
        node.next = temp.next
        temp.next.pre = node
        temp.next = node
        node.pre = temp
        flag = true
        break
      }
      temp = temp.next
    }
    if (!flag) {
      temp.next = node
      node.pre = temp
    }
  }
  delete (no) {
    let r = this.query(no)
    r && r.delete()
  }
  updata (node) {
    let temp = this.head.next
    let flag = false
    while (temp) {
      if (temp.no === node.no) {
        flag = true
        break
      }
      temp = temp.next
    }
    if (flag) {
      temp.pre.next = node
      node.pre = temp.pre
      if (temp.next) {
        node.next = temp.next
        temp.next.pre = node
      }
    } else {
      console.log('similar node is not exist in this double link.')
    }
  }
  query (no) {
    let temp = this.head.next
    let flag = false
    while (temp) {
      if (temp.no === no) {
        flag = true
        break
      }
      temp = temp.next
    }
    if (flag) {
      return temp
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
    console.log('\n')
  }
}

class Node {
  constructor (no, name) {
    this.no = no
    this.name = name
    this.next = null
    this.pre = null
  }
  delete () {
    this.pre.next = this.next
    if (this.next) {
      this.next.pre = this.pre
    }
  }
  toString () {
    return `no: ${this.no}, name: ${this.name}`
  }
}

let dLink = new DoubleLink()
let i = 1

while (i <= 7) {
  dLink.add(new Node(i, 'name-' + i))
  i += 2
}
dLink.display()
dLink.addByOrder(new Node(4, 'name-4'))
dLink.addByOrder(new Node(100, 'name100'))
dLink.delete(5)
console.log('link after add')
dLink.display()
