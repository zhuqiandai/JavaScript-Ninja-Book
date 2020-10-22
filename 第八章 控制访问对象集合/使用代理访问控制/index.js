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
