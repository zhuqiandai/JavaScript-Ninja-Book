const yoshi = { skulk: true }
const hattori = { sneak: true }
const kuma = { creep: true }

Object.setPrototypeOf(kuma, yoshi)
Object.setPrototypeOf(hattori, kuma)

console.log(kuma.skulk)
console.log(hattori.skulk)
