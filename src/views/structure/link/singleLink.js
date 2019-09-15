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
    console.log('\n')
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

function reverseLink (head) {
  if (!head.next || !head.next.next) {
    return
  }
  let newH = new HeroNode(0, '', '')
  let temp = head.next
  while (temp) {
    let next = temp.next
    temp.next = newH.next
    newH.next = temp
    temp = next
  }
  head.next = newH.next
  newH.next = null
}

function mergeLink (preH, nextH) {
  let newLink = new SingleLink()
  let newH = newLink.head
  if (preH.next === null) {
    newH.next = nextH.next
    return newH
  }
  if (nextH.next === null) {
    newH.next = preH.next
    return newH
  }
  let pTemp = preH.next
  let nTemp = nextH.next
  let newTemp = newH
  while (pTemp && nTemp) {
    if (pTemp.no < nTemp.no) {
      newTemp.next = pTemp
      newTemp = newTemp.next
      pTemp = pTemp.next
    } else {
      newTemp.next = nTemp
      newTemp = newTemp.next
      nTemp = nTemp.next
    }
  }
  while (pTemp) {
    newTemp.next = pTemp
    pTemp = pTemp.next
    newTemp = newTemp.next
  }
  while (nTemp) {
    newTemp.next = nTemp
    newTemp = newTemp.next
    nTemp = nTemp.next
  }
  preH.next = null
  nextH.next = null
  return newLink
}

let link1 = new SingleLink()
let i = 0
while (i < 5) {
  link1.add(new HeroNode(i, `name${i}`, `nick-${i}`))
  i += 2
}
let link2 = new SingleLink()
let j = 1
while (j < 6) {
  link2.add(new HeroNode(j, `name${j}`, `nick-${j}`))
  j += 2
}
console.log('origin link')
link1.display()
link2.display()

let mLink = mergeLink(link1.head, link2.head)
console.log('link after merge')
mLink.display()
