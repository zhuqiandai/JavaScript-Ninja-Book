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
