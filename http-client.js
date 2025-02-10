const http = require('http')

http.get(process.argv[2], r => r.setEncoding('utf-8').on('data', d => console.log(d)))
