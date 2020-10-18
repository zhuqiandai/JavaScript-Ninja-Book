function* Gen(val) {
  val = yield val * 2
  yield val
}

let generator = Gen(3)

// !!! next()方法为等待中的yield提供了值， 但是如果没有等待中的yield，就没有办法提供值
// 所以没有办法向第一次next()提供值
console.log(generator.next().value) // 6
console.log(generator.next(10).value) // 10
