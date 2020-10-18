function* G1() {
  yield '1'
  yield* G2
  yield '4'
}

function* G2() {
  yield '2'
  yield '3'
}

const g = G1()
for (let i = 0; i < 4; i++) {
  g.next()
}
