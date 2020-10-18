const { expect } = require('@jest/globals')

function Ninja() {
  this.stulk = function () {
    return this
  }
  return 1
}

const ninja1 = new Ninja()
const ninja2 = new Ninja()

test('where consturct func this been called', () => {
  expect(ninja1.stulk()).toEqual(ninja1)
  expect(ninja2.stulk()).toEqual(ninja2)
})

test('Ninja return 1', () => {
  expect(Ninja()).toBe(1)
})

test('typeof Ninja and skual', () => {
  expect(typeof ninja1).toBe('object')
  expect(typeof ninja1.stulk).toBe('function')
})

/*********************** */

const puppet = {
  roles: false,
}

function Emperor() {
  this.roles = true
  return puppet
}

const emperor = new Emperor()

test('emperor this is called to', () => {
  expect(emperor.roles).toBe(false)
})
