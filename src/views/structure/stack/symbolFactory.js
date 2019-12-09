class SymbolFactory {
  constructor () {
    this.convertType = {
      '+': AddSymbol,
      '-': SubtractionSymbol,
      '*': MultiplySymbol,
      '/': DevisionSymbol,
      'sqrt': SqrtSymbol,
      ')': DelimiterSymbol,
      '(': DelimiterSymbol
    }
  }
  creatSymbol (type) {
    if (/\d+(\.\d+)?/.test(type)) return Number(type)
    if (!this.convertType[type]) throw new Error("没有这种运算符：" + type)
    return new (this.convertType[type])(type)
  }
  extend (type, createFn) {
    if (!this.convertType[type]) {
      this.convertType[type] = createFn
    }
  }
}

class DelimiterSymbol {
  constructor (type) {
    this.type = 'delimiter'
    this.symbol = type
    this.priority = 1000
    if (type === '(') {
      this.pos = 'left'
      this.mate = ')'
    } else if (type === ')') {
      this.pos = 'right'
      this.mate = '('
    }
  }
}

class AddSymbol {
  constructor () {
    this.type = 'operator'
    this.argLength = 2
    this.symbol = '+'
    this.priority = 1
  }
  cal (num1, num2) {
    return num2 + num1
  }
}

class SubtractionSymbol {
  constructor () {
    this.type = 'operator'
    this.argLength = 2
    this.symbol = '-'
    this.priority = 1
  }
  cal (num1, num2) {
    return num2 - num1
  }
}

class MultiplySymbol {
  constructor () {
    this.type = 'operator'
    this.argLength = 2
    this.symbol = '*'
    this.priority = 10
  }
  cal  (num1, num2) {
    return num2 * num1
  }
}

class DevisionSymbol {
  constructor () {
    this.type = 'operator'
    this.argLength = 2
    this.symbol = '/'
    this.priority = 10
  }
  cal  (num1, num2) {
    return num2 / num1
  }
}

class SqrtSymbol {
  constructor () {
    this.type = 'operator'
    this.argLength = 1
    this.symbol = 'sqrt'
    this.priority = 100
  }
  cal  (num) {
    if (num < 0) {
      throw new Error('负数不能开方: ', num)
    }
    return Math.sqrt(num)
  }
}

module.exports = new SymbolFactory()
