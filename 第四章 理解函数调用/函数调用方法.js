function skulk(name) {}

function Ninja(name) {}

let ninjia = {
  skulk: function () {},
}

ninjia.skulk() // --> 作为ninjia对象的方法调用

ninjia = new Ninja('Hattori') //  --> 作为构造函数调用

skulk.call(ninjia, 'Hattori') // --> call方法调用

skulk.apply(ninjia, 'Hattori') // --> apply方法调用

/************************************* */

function ninja() {
  return this // this 指向 window
}

function strict_ninja() {
  'use strict'
  return this // 严格模式 this 指向 undefined
}

/************************************* */

function ninja2() {
  console.log(this)
  return this
}

const obj = {
  getThis: ninja2,
}

const obj2 = {
  getThis: ninja2,
}

obj.getThis() === obj // true

obj2.getThis() === obj2 // true
