
const http = require('http')
const bl = require('bl')
const ra = []
let c = 0

function get(i) {
  http.get(process.argv[2 + i], r => r.pipe(bl((e, d) => {
    ra[i] = d.toString()
    c++
    if (c === 3) for (let i = 0; i < 3; i++) console.log(ra[i])
  })))
}

for (let j = 0; j < 3; j++) get(j)


