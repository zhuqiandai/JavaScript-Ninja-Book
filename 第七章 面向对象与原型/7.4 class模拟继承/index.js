class Ninja {
  constructor(name, level) {
    this.name = name
    this.level = level
  }
  swingSword() {
    console.log(this.name)
    return this.name
  }
  static compare(ninja1, ninja2) {
    console.log(ninja1.level - ninja2.level)
  }
}

const ninja1 = new Ninja('Han zang', 4)
ninja1.swingSword()

const ninja2 = new Ninja('Yoshi', 3)

console.log(ninja1 instanceof Ninja)
console.log(Ninja.compare(ninja1, ninja2))

// 实现继承
class FirstNinja extends Ninja {
  constructor(name) {
    super(level)
    this.level = level // 使用super关键字调用基类构建函数
  }
  write() {
    console.log(level)
  }
}

const ninja3 = new FirstNinja('Yasou')
console.log(ninja3.write())
