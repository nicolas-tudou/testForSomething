let polish = require('./polish')
let Stack = require('./Stack')

function cal (n1, n2, symbol) {
  n1 = Number(n1)
  n2 = Number(n2)
  switch (symbol) {
    case '+':
      return n1 + n2
    case '-':
      return n2 - n1
    case '*':
      return n1 * n2
    case '/':
      return n2 / n1
    default:
      return 0
  }
}

function calReversePolish (symbols) {
  let numberStack = new Stack()
  for (let i = 0; i < symbols.length; i ++) {
    let temp = symbols[i]
    if (/\d+/.test(temp)) {
      numberStack.add(temp)
    } else {
      let n1 = numberStack.pop()
      let n2 = numberStack.pop()
      numberStack.add(cal(n1, n2, temp))
    }
  }
  return numberStack.pop()
}
// (3+4)*5-6   ---->  3 4 + 5 * 6 -
let example = '(3+4)*5-6*(3+7)'
console.log(polish(example))
console.log(calReversePolish(polish(example)))
