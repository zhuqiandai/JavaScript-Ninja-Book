function Ninja() {
  let feints = 0

  this.getFeint = function () {
    return feints
  }

  this.feint = function () {
    feints++
  }
}

let ninja = new Ninja()
ninja.feint()

test('get Ninja value', () => {
  expect(ninja.feints).toBe(undefined)

  expect(ninja.getFeint()).toEqual(1)
})

let ninja2 = new Ninja()
test('ninja2 Ninja', () => {
  expect(ninja2.getFeint()).toEqual(0)
})

let imposter = {}
imposter.getFeint = ninja.getFeint

test('imposter getFeint', () => {
  expect(imposter.getFeint()).toEqual(1)
})
