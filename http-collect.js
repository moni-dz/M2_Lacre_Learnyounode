const http = require('http')
const bl = require('bl')

http.get(process.argv[2], r => {
  r.pipe(bl((e, d) => {
    const s = d.toString()
    console.log(s.length)
    console.log(s)
  }))
})
