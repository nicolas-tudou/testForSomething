let Stack = require('./Stack')
let SymbolFactory = require('./SymbolFactory')

function convertToReserve (expression = '') {
  let s1 = new Stack()
  let s2 = new Stack()
  let result = []
  let symbolList = getSymbolList(expression)
  while (symbolList.length) {
    let curVal = symbolList.shift()
    // console.log(111, curVal.symbol || curVal)
    if (typeof curVal === 'number') {
      // 如果是数字 直接压入 s2 中
      s2.add(curVal)
    } else if (curVal.type === 'delimiter') {
      // 如果是分隔符
      if (curVal.pos === 'left') {
        // 如果是成对分隔符的左半部分 直接压入s1 中
        s1.add(curVal)
      } else {
        // 如果是成对分隔符的右半部分 则将对应左半部分的内容依次弹出放入到数据栈中 并且将左半部分也弹出
        while (s1.size() && s1.top().symbol !== curVal.mate) {
          s2.add(s1.pop())
        }
        s1.pop()
      }
    } else {
      // 如果是运算符
      while (true) {
        // console.log(333, curVal.symbol)
        if (s1.size() === 0 || s1.top().type === 'delimiter' || (curVal.type === 'operator' && curVal.priority > s1.top().priority)) {
          // 如果此时符号栈栈顶元素为分隔符 则将符号压入符号栈中
          // 如果符号的优先级比栈顶的符号的优先级高 或者符号栈为空 则将符号压入符号栈中
          // 如果符号栈为空 则将符号压入符号栈中
          s1.add(curVal)
          break
        }
        // 如果当前符号的优先级小于等于符号栈栈顶元素的优先级 则将栈顶符号弹出也如到数据栈中
        s2.add(s1.pop())
      }
    }
  }
  while (s1.size()) {
    // 将符号栈中剩余符号弹出并压入到数据栈中
    s2.add(s1.pop())
  }
  while (s2.size()) {
    // 将数据栈中的元素依次弹出
    result.push(s2.pop())
  }
  // 得到的数组逆序就得到逆波兰表达式
  return result.reverse()
}

function getSymbolList (expression) {
  let reg = /(\d+(?:\.\d+)?)|([a-zA-Z]+)|([\+\-\*\/\(\)\[\]\{\}])/g
  return expression.match(reg).map(sy => SymbolFactory.creatSymbol(sy))
}

// let example = '32.3+sqrt(300*(1+2))'
// console.log(convertToReserve(example))
console.log(convertToReserve('1 + ((3 + 7) * 2 / sqrt(4 * (1 + 9 / 3)) * 3 + 100) * 10'))

// module.exports = convertToReserve