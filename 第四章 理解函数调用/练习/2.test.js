function getSamurai(samurai) {
  'use strict'
  arguments[0] = 'Ishida'
  return samurai
}
function getNinja(ninja) {
  arguments[0] = 'Fuma'
  return ninja
}
var samurai = getSamurai('Toyotomi')
var ninja = getNinja('Yoshi')

test('get name', () => {
  expect(getSamurai('Toyotomi')).toBe('Toyotomi')
  expect(getNinja('Yoshi')).toBe('Fuma')
})
