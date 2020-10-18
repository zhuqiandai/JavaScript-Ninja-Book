function ninja() {
  // 'use strict'
  return this
}

const ninjaMock = jest.fn()

test('this call to window', () => {
  expect(ninja()).toEqual(window)
})
