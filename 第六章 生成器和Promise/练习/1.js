function* G1() {
  let num = 2
  while (true) {
    yield num
    num += 2
  }
}

let generator = G1()

console.log(generator.next().value) //2
console.log(generator.next().value) //4
console.log(G1().next().value) // 2
console.log(G1().next().value) // 2
console.log(generator.next().value) //6
