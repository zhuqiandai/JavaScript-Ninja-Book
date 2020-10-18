const Module = {
  x: 42,
  getX: function () {
    return this.x
  },
}

const unboundX = Module.getX

const boundX = unboundX.bind(Module)

test('unboundX return', () => {
  expect(unboundX()).toBe(undefined)
})

test('boundX return', () => {
  expect(boundX()).toBe(42)
})
