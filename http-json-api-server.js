let http = require('http')
let url = require('url')

function p(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unix(time) {
  return { unixtime: time.getTime() }
}

let server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true)
  let time = new Date(parsedUrl.query.iso)
  let r

  if (/^\/api\/parsetime/.test(req.url)) r = p(time)
  else if (/^\/api\/unixtime/.test(req.url)) r = unix(time)

  if (r) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(r))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(Number(process.argv[2]))
