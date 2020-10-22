/**
 * @description: 使用getter setter校验属性值
 * @param {*}
 * @return {*}
 */
function Ninja() {
  let _skillLevel
  Object.defineProperty(this, 'skillLevel', {
    get: () => {
      return _skillLevel
    },
    set: (value) => {
      if (!Number.isInteger(value)) {
        throw new TypeError('only number')
      }
      _skillLevel = value
    },
  })
}

const ninja = new Ninja()
ninja.skillLevel = 12
