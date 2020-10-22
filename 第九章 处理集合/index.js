const elements = {
  length: 0,
  add: function (ele) {
    return Array.prototype.push.call(this, ele)
  },
  shift: function () {
    return Array.prototype.shift.call(this)
  },
}

elements.add('123')
elements.add(123)
console.log(elements.length)
console.log(elements.shift())
console.log(elements.length)
