function sum(...args) {
  var sum = 0
  args.forEach((item) => {
    sum += item
  })
  return sum
}

test('if sum func work', () => {
  expect(sum(1, 2, 3)).toBe(6)
  expect(sum(1, 2, 3, 4)).toBe(10)
})
