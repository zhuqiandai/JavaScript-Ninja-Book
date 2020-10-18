function Ninja() {
  this.whoAmI = () => this
}
var ninja1 = new Ninja()
var ninja2 = {
  whoAmI: ninja1.whoAmI,
}

test('ninja here?', () => {
  expect(ninja1.whoAmI()).toBe(ninja1)
  expect(ninja2.whoAmI()).toBe(ninja1)
})
