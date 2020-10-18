const { expect } = require('@jest/globals')

function juggle(...args) {
  var result = 0
  args.map((item) => {
    result += item
  })
  this.result = result
}

const ninja1 = {}
const ninja2 = {}

juggle.apply(ninja1, [1, 2, 3, 4])
juggle.call(ninja2, 5, 6, 7, 8)

test('apply result', () => {
  expect(ninja1.result).toBe(10)
})

test('call result', () => {
  expect(ninja2.result).toBe(26)
})
