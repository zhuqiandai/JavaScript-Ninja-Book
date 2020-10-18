function Ninja() {
  this.whoAmI = function () {
    return this
  }.bind(this)
}
var ninja1 = new Ninja()
var ninja2 = {
  whoAmI: ninja1.whoAmI,
}

console.log(ninja2.whoAmI())
test('ninja here?', () => {
  expect(ninja1.whoAmI()).toEqual(ninja1)
  expect(ninja2.whoAmI()).toEqual(ninja1)
})
