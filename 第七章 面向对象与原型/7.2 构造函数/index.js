function Ninja() {
  this.swingSword = function () {
    return false
  }
}

Ninja.prototype.swingSword = function () {
  return true
}

const ninja = new Ninja()

const ninja2 = new ninja.constructor()
console.log(ninja.swingSword())
console.log(ninja2.swingSword())
console.log(ninja.constructor())

console.log(ninja instanceof Ninja)
