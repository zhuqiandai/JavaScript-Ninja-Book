// 将ES6转换成ES5
// class Warrior {
//   constructor(weapon) {
//     this.weapon = weapon
//   }

//   wield() {
//     return 'Wielding' + this.weapon
//   }

//   static duel(warrior1, warrior2) {
//     return warrior1.wield() + '' + warrior2.wield()
//   }
// }

function Warrior(weapon) {
  this.weapon = weapon
}

Warrior.prototype.wield = function () {
  return 'Wielding' + this.weapon
}

Warrior.duel = function (warrior1, warrior2) {
  return warrior1.wield() + ' ' + warrior2.wield()
}

const w1 = new Warrior('wea')
const w2 = new Warrior('pon')
console.log(Warrior.duel(w1, w2))
