/**
 * @description: 复用数组的方法
 * @param {*}
 * @return {*}
 */
const elements = {
  length: 0,
  add: function (ele) {
    return Array.prototype.push.call(this, ele)
  },
  shift: function () {
    return Array.prototype.shift.call(this)
  },
}

elements.add('123')
elements.add(123)
console.log(elements.length)
console.log(elements.shift())
console.log(elements.length)

/**
 * @description: Map数据结构
 * @param {*}
 * @return {*}
 */

const hashMap = new Map()
const ninja = { name: 'zhuqd' }
const ninjaGuard = { name: 'benduo' }
hashMap.set(ninja, ninjaGuard)
console.log(hashMap.get(ninja))
console.log(hashMap)
console.log(hashMap.has(ninja))
console.log(hashMap.size)
hashMap.delete(ninja)

/**
 * @description: 创建Set
 * @param {*}
 * @return {*}
 */
const set = new Set(['Yoshi'])
console.log(set.has('Yoshi'))
console.log(set.construtor)

/**
 * @description: 并集，交集，差集
 * @param {*}
 * @return {*}
 */

const arr1 = ['Yoshi', 'Hanzo', 'Kuma']
const arr2 = ['Hattori', 'Hanzo', 'Oda']

// 并集
const unionSet = new Set([...arr1, ...arr2])
const uniosResult = Array.from(unionSet)
console.log(uniosResult)
console.log(Array.isArray(unionSet)) // false

// 交集
const set1 = new Set(arr1)
const set2 = new Set(arr2)

const intersectSet = new Set([...set1].filter((item) => set2.has(item)))
console.log(intersectSet)

// 差集

const set3 = new Set(arr1)
const set4 = new Set(arr2)

const differenceSet = new Set([...set3].filter((item) => !set4.has(item)))
console.log(differenceSet)
