let http = require('http')
let fs = require('fs')

http.createServer((_, res) => fs.createReadStream(process.argv[3]).pipe(res)).listen(+process.argv[2], () => console.log('Server listening on http://localhost:%s', +process.argv[2]))
