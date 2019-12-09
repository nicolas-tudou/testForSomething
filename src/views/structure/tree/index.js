class Node {
  constructor (val) {
    this.value = val
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor (node) {
    if (!node) throw new Error('The root node must provide first.')
    this.root = node
    this.depth = 1
  }
  initTree (curNode = this.root) {
    if (this.depth > 7) return
    this.depth++
    curNode.left = new Node(this.depth)
    curNode.right = new Node(300 - this.depth)
    this.initTree(curNode.right)
    this.initTree(curNode.left)
  }
  add (node) {

  }
  remove () {

  }
  preErgodic (curNode = this.root) {
    console.log(curNode.value)
    if (curNode.left) this.preErgodic(curNode.left)
    if (curNode.right) this.preErgodic(curNode.right)
  }
  middleErgodic (curNode = this.root) {
    if (curNode.left) this.middleErgodic(curNode.left)
    console.log(curNode.value)
    if (curNode.right) this.middleErgodic(curNode.right)
  }
  suffixErgodic (curNode = this.root) {
    if (curNode.left) this.suffixErgodic(curNode.left)
    if (curNode.right) this.suffixErgodic(curNode.right)
    console.log(curNode.value)
  }
}

let tree = new Tree(new Node(1))
tree.initTree()
tree.suffixErgodic()
