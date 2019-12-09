class Node {
  constructor (val) {
    this.value = val
    this.left = null
    this.right = null
    this.leftType = 0
    this.rightType = 0
  }
}

class ThreadTree {
  constructor (root) {
    this.root = root
    this.pre = null
  }
  midThreadErgodic (node) {
    while (node) {
      while (node.leftType === 0) {
        node = node.left
      }
      console.log(node.value)
      while (node.rightType === 1) {
        node = node.right
        console.log(node.value)
      }
      node = node.right
    }
  }
  midThreadTree (node) {
    if (node.left) this.midThreadTree(node.left)
    if (!node.left) {
      node.left = this.pre
      node.leftType = 1
    }
    if (this.pre && !this.pre.right) {
      this.pre.right = node
      this.pre.rightType = 1
    }
    this.pre = node
    if (node.right) this.midThreadTree(node.right)
  }
}

let root = new Node(0)
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

root.left = node1
root.right = node2
node1.left = node3
node1.right = node4
node2.left = node5
node2.right = node6
node3.left = node7

let tt = new ThreadTree(root)
tt.midThreadTree(root)
tt.midThreadErgodic(root)
