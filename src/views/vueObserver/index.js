let a = {
  name: 'name',
  age: 18
}

function defineReactive (data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log(111)
      return val
    },
    set: function (newVal) {
      console.log(222)
      if (newVal === val) {
        return
      }
      console.log(333)
      val = newVal
    }
  })
}
