const net = require('net')

function z(i) {
  return (i < 10 ? '0' : '') + i
}

function now() {
  var d = new Date()
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())} ${z(d.getHours())}:${z(d.getMinutes())}`
}

const server = net.createServer(sock => sock.end(`${now()}\n`))
server.listen(Number(process.argv[2]))
