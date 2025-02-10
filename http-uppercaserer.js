let http = require('http')
let map = require('through2-map')

let server = http.createServer((req, res) => {
  if (req.method != 'POST') return res.end('')
  req.pipe(map((c) => c.toString().toUpperCase())).pipe(res)
})

server.listen(Number(process.argv[2]))
