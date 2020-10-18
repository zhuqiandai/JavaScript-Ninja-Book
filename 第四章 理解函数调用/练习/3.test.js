var ninja1 = {
  whoAmI: function () {
    return this
  },
}
var ninja2 = {
  whoAmI: ninja1.whoAmI,
}
var identify = ninja2.whoAmI

console.log(identify())

test('which will pass', () => {
  expect(ninja1.whoAmI()).toEqual(ninja1)
  expect(ninja2.whoAmI()).toEqual(ninja1)
  expect(identify()).not.toBe(ninja1)
  expect(ninja1.whoAmI.call(ninja2)).toEqual(ninja2)
})
