/**
 * @description: 基本使用方法
 * @param {*}
 * @return {*}
 */
const ninja = { skillLevel: 10 }

const p = new Proxy(ninja, {
  get: (target, key) => {
    console.log(target, key) //{ skillLevel: 10 } skillLevel
    return target.skillLevel
  },
  set: (target, key, value) => {
    target[key] = value
  },
})

console.log(p.skillLevel)
console.log((p.skillLevel = 3))
console.log(p.skillLevel)

/**
 * @description: 使用 proxy 打印日志
 * @param {*}
 * @return {*}
 */
function makeLoggalbe(target) {
  return new Proxy(target, {
    get: (target, property) => {
      return target[property]
    },
    set: (target, property, value) => {
      target[property] = value
    },
  })
}

let ninja2 = { name: 'zhuqd' }
ninja2 = makeLoggalbe(ninja2)
console.log(ninja2)

/**
 * @description: 使用 proxy 测试性能
 * @param {*}
 * @return {*}
 */

function isPrime(number) {
  if (number < 2) return false
  for (let i = 2; i < number; i++) {
    if (number % i !== 0) return false
  }
  return true
}

isPrime = new Proxy(isPrime, {
  /**
   * @description: handle.apply()
   * @param target: 目标函数
   * @param thisArg: 被调用时执行上下文对象
   * @param argumentList: 被调用时参数数组
   */
  apply: (target, thisArg, args) => {
    console.time('isPrime')

    const result = target.apply(thisArg, args)
    console.timeEnd('isPrime')

    return result
  },
})

console.log(isPrime(1299827))

/**
 * @description: 使用 proxy 实现负数组的索引
 * @param {*}
 * @return {*}
 */
const arr = ['Yoshi', 'Kuma', 'Hattori']
console.log(arr[-1]) // undefined
function createNegativeArrayProxy(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('only array')
  }

  return new Proxy(array, {
    get: (target, index) => {
      index = +index // .....转正，不然负数下面不就报错了
      return target[index < 0 ? target.length + index : index]
    },
    set: (target, index, value) => {
      index = +index
      return (target[index < 0 ? target.length + index : index] = value)
    },
  })
}

const arr2 = createNegativeArrayProxy(arr)
console.log(arr2[-2]) // 'Kuma'
arr2[-3] = 'YoYo'
console.log(arr2[-3]) // 'YoYo'
