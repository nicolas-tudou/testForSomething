let Stack = require('./Stack')
const priority = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2
}

module.exports = function convertToReserve (expression = '') {
  let s1 = new Stack()
  let s2 = new Stack()
  let result = []
  let index = 0
  while (index < expression.length) {
    let next = getNext(expression, index)
    index = next.index
    let curVal = next.value
    if (/\d+/.test(curVal)) {
      // 如果是数字 直接压入 s2 中
      s2.add(curVal)
    } else if (curVal === '(') {
      // 如果是左括号 直接压入s1 中
      s1.add(curVal)
    } else if (curVal === ')') {
      while (s1.top() !== '(' && s1.size() > 0) {
        s2.add(s1.pop())
      }
      s1.pop()
    } else {
      while (true) {
        if (/[\(|\)]/.test(s1.top())) {
          s1.add(curVal)
          break
        }
        if (priority[curVal] > priority[s1.top()] || s1.size() === 0) {
          s1.add(curVal)
          break
        } else {
          s2.add(s1.pop())
        }
      }
    }
  }
  while (s1.size()) {
    s2.add(s1.pop())
  }
  while (s2.size()) {
    result.push(s2.pop())
  }
  return result.reverse()
}

function getNext (str, index) {
  let value = str[index++]
  while (/\d+/.test(value) && str[index] && /\d/.test(str[index])) {
    console.log(index)
    value += str[index]
    index++
  }
  return {
    value,
    index
  }
}

