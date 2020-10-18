import Axios from 'axios'

const getData = (url) => {
  return new Promise((reslove, reject) => {
    Axios.get(url)
      .then((res) => {
        if (res.status === 200) {
          reslove(res)
        } else {
          reject(res.status + '' + res.statusText)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// Promise.all([])
Promise.all([
  getData('https://jsonplaceholder.typicode.com/todos/1'),
  getData('https://jsonplaceholder.typicode.com/todos/2'),
  getData('https://jsonplaceholder.typicode.com/todos/3'),
])
  .then((res) => {
    console.log(res[0].data)
  })
  .catch()
