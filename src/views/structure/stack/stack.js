class Stack {
  constructor () {
    this.data = []
  }
  pop () {
    if (this.data.length) {
      return this.data.pop()
    }
    return null
  }
  add (data) {
    this.data.push(data)
  }
  size () {
    return this.data.length
  }
  toString () {
    return this.data
  }
}

let stack = new Stack()
while (stack.size() < 10) {
  stack.add('name-' + stack.size())
}
console.log(stack.pop())
console.log(stack)
