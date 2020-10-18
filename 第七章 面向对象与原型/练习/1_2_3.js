// 1. 如果目标对象没有searched-for属性，那么，会查询如下哪一个对象的属性？
// prototype

// 2. 以下代码执行完成之后，变量a1的值是多少？  --> a: hello
function Ninja() {}

Ninja.prototype.talk = function () {
  return 'hello'
}

const ninja = new Ninja()
const a1 = ninja.talk()
console.log(a1) // hello

function Ninja2() {}

Ninja2.message = 'Hello'

const ninja2 = new Ninja2()
const a2 = ninja2.message
console.log(a2) // undefiend
