function* Ninja() {
  yield 'Yoshi'
  return 'Hattori'
  yield 'Hanzo'
}

var ninjas = []

const nin = Ninja()

// for (let ninja of Ninja()) {
//   ninjas.push(ninja)
// }

// 使用 while 替代 for..of
// for..of 循环不过是对迭代器进行迭代的语法糖
while (!(item = nin.next()).done) {
  ninjas.push(item.value)
}

console.log(ninjas) //[ 'Yoshi']
