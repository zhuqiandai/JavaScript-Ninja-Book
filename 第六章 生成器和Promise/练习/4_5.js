const promise = new Promise((resolve, reject) => {
  reject('Hattori')
})

promise
  .then((val) => {
    console.log(val)
  })
  .catch((e) => {
    console.log(e)
  })

const promise2 = new Promise((resolve, reject) => {
  resolve('Hattori')
  setTimeout(() => {
    reject('Yoshi')
  }, 500)
})

promise2
  .then((val) => {
    console.log(val)
  })
  .catch((e) => {
    console.log(e)
  })
