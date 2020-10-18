function Person() {
  play = function () {
    console.log('fly')
  }
}

Person.prototype.dance = function () {
  console.log('dance')
}

function Ninja() {}

Ninja.prototype = new Person()

Object.defineProperty(Ninja.prototype, 'constructor', {
  enumerable: false,
  value: Ninja,
  writable: true,
})

const ninja = new Ninja()

console.log(ninja.dance())
console.log(ninja.constructor === Ninja) // false 这里ninja失去了与原型Ninja的关联
console.log(ninja.constructor === Person) // true

console.log(ninja instanceof Ninja)
console.log(ninja instanceof Person) // false 所以没有继承到Person
console.log(ninja instanceof Object)
