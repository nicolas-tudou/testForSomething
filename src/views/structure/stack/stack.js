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
  top () {
    return this.data[this.data.length - 1]
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

module.exports = Stack
